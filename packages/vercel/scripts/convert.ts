#!/usr/bin/env bun
/**
 * convert — turn the docs-derived OpenAPI documents into Smithy 2.0 JSON models.
 *
 * Input:  .openapi/<group>.json        (written by scripts/docs-to-openapi.ts
 *                                       from the docs mirror in specs/)
 *         patches/<group>/*.patch.json (RFC-6902 patches to the OpenAPI
 *                                       document — where anything the docs
 *                                       render too coarsely gets sharpened)
 * Output: .generated-specs/<group>.json
 *
 * `bun run convert` re-parses the docs mirror first, so a single `convert`
 * always reflects specs/ — refreshing the mirror is the separate, networked
 * `bun run download-api-docs`.
 *
 * The OpenAPI→Smithy converter lives in
 * `@distilled.cloud/core/codegen/openapi`; this script is Vercel's pipeline
 * config. `scripts/generate.ts` compiles the models into src/services.
 *
 * ─── Error statuses ─────────────────────────────────────────────────────────
 * Vercel documents its failure statuses per endpoint, exhaustively — every one
 * of the 365 pages lists 400/401/403, most list 410, and the endpoint-specific
 * ones (402 out of credits, 409 conflict, 413 too large, 428 confirmation
 * required…) sit alongside. So every documented status is typed:
 *
 *   • 401/429/500/502/503/504 ride `VercelOpError` — they're core's
 *     `DefaultErrors`, the ones the protocol can return on any call.
 *   • everything else gets a per-operation error class, generated into the
 *     service module from the status→class map below.
 *
 * The result is an error channel that's complete for every documented failure
 * rather than one that quietly falls through to `UnknownVercelError`.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";

const rootDir = path.resolve(import.meta.dir, "..");
const openApiDir = path.join(rootDir, ".openapi");

if (!fs.existsSync(openApiDir)) {
  throw new Error(
    `${openApiDir} not found — run \`bun run docs-to-openapi\` (or \`bun run convert\`, which chains it)`,
  );
}

/** `access_groups` → `AccessGroups` (the Smithy service shape name). */
const pascal = (slug: string): string =>
  slug
    .split("_")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");

const specs = fs
  .readdirSync(openApiDir)
  .filter((f) => f.endsWith(".json"))
  .sort((a, b) => a.localeCompare(b))
  .map((file) => {
    const name = file.replace(/\.json$/, "");
    return {
      name,
      specPath: path.join(".openapi", file),
      options: {
        namespace: `com.vercel.${name}`,
        serviceName: pascal(name),
      },
    };
  });

if (specs.length === 0) {
  throw new Error(`no OpenAPI documents in ${openApiDir}`);
}

await runOpenApiConvert({
  root: rootDir,
  specs,
  // RFC-6902 patches against the OpenAPI documents, one directory per group.
  // The Smithy-model chain is separate and lives in `smithy-patches/`
  // (wired from scripts/generate.ts) — the two are not interchangeable.
  patchesDir: "patches",
  options: {
    // Per-spec `options` above set the namespace and service name.
    namespace: "com.vercel",
    serviceName: "Vercel",
    skipDeprecated: true,
    // Vercel probes with HEAD: does this cache artifact / blob / manifest
    // exist. Four endpoints, none with a response body — without this they
    // are silently absent from the SDK.
    extraHttpMethods: ["head"],
    // Vercel's five header-parameter endpoints carry real per-call inputs —
    // the `x-Artifact-*` remote-cache metadata Turborepo sends with every
    // upload, `x-Vercel-Digest` file integrity, the sandbox `x-Cwd`. Dropped
    // headers there mean an artifact that uploads but can never be attributed.
    headerParams: true,
    // Nine endpoints answer `202 Accepted` WITH a payload and never a 200 —
    // artifact upload's storage URLs, account deletion's confirmation id, the
    // VCR blob/manifest writes. Without 202 in the precedence list they'd
    // generate as `void`.
    successStatuses: ["200", "201", "202", "204"],
    statusToErrorClass: {
      // The converter's defaults …
      "400": "BadRequest",
      "403": "Forbidden",
      "404": "NotFound",
      "409": "Conflict",
      "422": "UnprocessableEntity",
      // … plus every other status Vercel's endpoints actually document.
      "402": "PaymentRequired", // out of credits / plan limit reached
      "405": "MethodNotAllowed",
      "408": "RequestTimeout",
      "410": "Gone", // the endpoint or resource no longer serves
      "412": "PreconditionFailed",
      "413": "PayloadTooLarge",
      "415": "UnsupportedMediaType",
      "416": "RangeNotSatisfiable",
      "426": "UpgradeRequired",
      "428": "PreconditionRequired", // e.g. deployment needs confirmation
      "449": "RetryWith",
    },
    // Covered by core's DefaultErrors on `VercelOpError`, so never per-op.
    defaultErrorStatuses: ["401", "429", "500", "502", "503", "504"],
  },
});
