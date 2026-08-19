#!/usr/bin/env bun
/**
 * convert — turn the Fly.io Machines OpenAPI spec into a Smithy JSON model.
 *
 * Input:  specs/distilled-spec-fly-io/specs/openapi.json  (OAS 3.0)
 * Output: .generated-specs/machines.json
 *
 * Patch chain (both layers apply to the OpenAPI document, in this order):
 *   1. patches/*.patch.json              — shared status-map errors
 *   2. patches/machines/*.patch.json     — per-op patches
 *
 * Existing flat `*-errors.patch.json` files must keep working after
 * `patches/machines/` is created. `runOpenApiConvert` would pick only one
 * of those directories, so this script applies both layers itself and
 * disables the helper's default patch walk (`patchesDir: false`).
 *
 * `scripts/generate.ts` also runs with `patchesDir: false` — the smithy
 * model is not patched.
 */
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";
import {
  applyOperation,
  isStaleTargetError,
  type PatchFile,
} from "@distilled.cloud/core/json-patch";

const root = `${import.meta.dir}/..`;
const patchesRoot = path.join(root, "patches");

const listPatchFiles = async (dir: string): Promise<string[]> => {
  try {
    return (await fs.readdir(dir))
      .filter((f) => f.endsWith(".patch.json"))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => path.join(dir, f));
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw e;
  }
};

const loadPatch = async (
  file: string,
): Promise<{ file: string; parsed: PatchFile }> => ({
  file,
  parsed: JSON.parse(await fs.readFile(file, "utf8")) as PatchFile,
});

// Flat first (shared 400/403/404 maps), then per-op machines patches.
const patchFiles = [
  ...(await listPatchFiles(patchesRoot)),
  ...(await listPatchFiles(path.join(patchesRoot, "machines"))),
];
const loadedPatches = await Promise.all(patchFiles.map(loadPatch));

await runOpenApiConvert({
  root,
  specs: [
    {
      name: "machines",
      specPath: "specs/distilled-spec-fly-io/specs/openapi.json",
      preprocess: (spec) => {
        let staleOps = 0;
        const badPatches: string[] = [];
        for (const { file, parsed } of loadedPatches) {
          const label = path.relative(patchesRoot, file);
          for (const patchOp of parsed.patches ?? []) {
            try {
              applyOperation(spec, patchOp);
            } catch (e) {
              const msg = e instanceof Error ? e.message : String(e);
              if (isStaleTargetError(msg)) {
                staleOps++;
                console.warn(
                  `   ⚠️  stale: machines/${label} [${patchOp.op} ${patchOp.path}]`,
                );
              } else {
                badPatches.push(
                  `${label} [${patchOp.op} ${patchOp.path}]: ${msg}`,
                );
              }
            }
          }
        }
        if (badPatches.length) {
          for (const b of badPatches) console.error(`❌ bad patch: ${b}`);
          throw new Error(
            `${badPatches.length} malformed patch operation(s) — fix or remove them`,
          );
        }
        if (loadedPatches.length > 0) {
          console.log(
            `   applied ${loadedPatches.length} OpenAPI patch file(s) (flat + patches/machines)` +
              (staleOps ? `, ${staleOps} stale op(s) skipped` : ""),
          );
        }
      },
    },
  ],
  // Dual-layer walk lives above — do not let the helper pick one directory.
  patchesDir: false,
  options: {
    namespace: "com.flyio.machines",
    serviceName: "FlyMachines",
    // v0 parity plus 408 → GatewayTimeout so machinesWait timeouts
    // are a typed tag (Fly returns 408 Request Timeout).
    statusToErrorClass: {
      400: "BadRequest",
      403: "Forbidden",
      404: "NotFound",
      408: "GatewayTimeout",
      409: "Conflict",
      422: "UnprocessableEntity",
    },
    defaultErrorStatuses: ["401", "429", "500", "502", "503", "504"],
    skipDeprecated: true,
  },
});
