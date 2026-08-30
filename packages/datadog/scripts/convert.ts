#!/usr/bin/env bun
/**
 * convert — Datadog's v1 OpenAPI description → Smithy JSON models in
 * .generated-specs.
 *
 * Datadog publishes ONE OpenAPI 3.0 document per API version in the
 * datadog-api-client-typescript repo (`.generator/schemas/v1/openapi.yaml`,
 * sparse-checked-out by `bun run specs:fetch`), covering ~230 operations
 * across 31 tags. Following the GitHub/PostHog pipeline:
 *
 *   1. Read the full spec (YAML — bun parses it natively) and collapse the
 *      templated server (`https://{subdomain}.{site}`) to the canonical US1
 *      host; the real base URL comes from Credentials at request time.
 *   2. Apply ALL `patches/*.patch.json` ONCE to the full spec (RFC-6902,
 *      sorted name order; stale targets warn+skip — the submodule tracks
 *      upstream and drifts — malformed patches fail the run).
 *   3. Bucket operations by PRIMARY (first) tag, keeping only the tags in
 *      {@link TAG_ALLOWLIST}. Coverage grows tag-by-tag: add a tag here (and
 *      to the allowlist comment) when its resources are brought up in
 *      alchemy, so every generated operation has a live consumer.
 *   4. Convert each bucket through the shared `convertOpenApiToSmithy` and
 *      write `.generated-specs/<tag_slug>.json`.
 *
 * `scripts/generate.ts` (runGeneratorCli with `patchesDir: false` — the
 * patches apply HERE, to the OpenAPI document) then compiles the models.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import {
  applyOperation,
  isStaleTargetError,
  type PatchFile,
} from "@distilled.cloud/core/json-patch";
import { convertOpenApiToSmithy } from "@distilled.cloud/core/codegen/openapi";

const rootDir = path.resolve(import.meta.dir, "..");
const specPath = path.join(
  rootDir,
  "specs/datadog-api-client-typescript/.generator/schemas/v1/openapi.yaml",
);
const patchDir = path.join(rootDir, "patches");
const outDir = path.join(rootDir, ".generated-specs");

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;

/**
 * Tags converted into service modules. The v1 spec carries 31 tags; only the
 * ones with alchemy resources built on them are generated, so every
 * operation in the SDK has a live-tested consumer. Grow this list tag-by-tag
 * as coverage expands (Downtimes, Dashboards, Synthetics, …).
 */
const TAG_ALLOWLIST = new Set(["Monitors", "Service Level Objectives"]);

/** Tag → model/resource name (the generated module's filename). */
const toSlug = (tag: string): string =>
  tag
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();

const toPascal = (slug: string): string =>
  slug
    .split("_")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");

// ---- 1. Read the full spec -------------------------------------------------
if (!fs.existsSync(specPath)) {
  throw new Error(
    `${specPath} not found — run \`bun run specs:fetch\` to check out the spec submodule`,
  );
}
const fullSpec = Bun.YAML.parse(fs.readFileSync(specPath, "utf-8")) as Record<
  string,
  any
>;
// The spec declares a templated server (`https://{subdomain}.{site}` over the
// regional-site enum). Collapse to the canonical US1 host — the protocol
// resolves the real base URL from Credentials on every request.
fullSpec.servers = [{ url: "https://api.datadoghq.com" }];

// ---- 2. Apply the patch chain ONCE to the full spec ------------------------
let patchFiles = 0;
let staleOps = 0;
const badPatches: string[] = [];
if (fs.existsSync(patchDir)) {
  for (const pf of fs
    .readdirSync(patchDir)
    .filter((f) => f.endsWith(".patch.json"))
    .sort((a, b) => a.localeCompare(b))) {
    const parsed = JSON.parse(
      fs.readFileSync(path.join(patchDir, pf), "utf-8"),
    ) as PatchFile;
    for (const patchOp of parsed.patches ?? []) {
      try {
        applyOperation(fullSpec, patchOp);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (isStaleTargetError(msg)) {
          staleOps++;
          console.warn(`   ⚠️  stale: ${pf} [${patchOp.op} ${patchOp.path}]`);
        } else {
          badPatches.push(`${pf} [${patchOp.op} ${patchOp.path}]: ${msg}`);
        }
      }
    }
    patchFiles++;
  }
}
if (badPatches.length) {
  for (const b of badPatches) console.error(`❌ bad patch: ${b}`);
  throw new Error(
    `${badPatches.length} malformed patch operation(s) — fix or remove them`,
  );
}
console.log(
  `🩹 ${patchFiles} patch files applied` +
    (staleOps ? ` (${staleOps} stale op(s) skipped)` : ""),
);

// ---- 3. Bucket paths by primary tag (allowlisted tags only) ----------------
const tagBuckets = new Map<string, Record<string, Record<string, unknown>>>();
for (const [pathTemplate, pathItem] of Object.entries<Record<string, unknown>>(
  fullSpec.paths,
)) {
  for (const method of HTTP_METHODS) {
    const op = (pathItem as Record<string, any>)[method];
    if (!op) continue;
    const rawTag: string =
      Array.isArray(op.tags) && op.tags.length > 0 ? op.tags[0] : "default";
    if (!TAG_ALLOWLIST.has(rawTag)) continue;
    const slug = toSlug(rawTag);
    if (!tagBuckets.has(slug)) tagBuckets.set(slug, {});
    const bucketPaths = tagBuckets.get(slug)!;
    if (!bucketPaths[pathTemplate]) {
      // Carry any path-level params into the slice.
      const pathParams = (pathItem as Record<string, any>).parameters;
      bucketPaths[pathTemplate] = pathParams ? { parameters: pathParams } : {};
    }
    (bucketPaths[pathTemplate] as Record<string, unknown>)[method] = op;
  }
}

// ---- 4. Convert each bucket ------------------------------------------------
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

let written = 0;
let totalOps = 0;
for (const slug of [...tagBuckets.keys()].sort()) {
  const subSpec = { ...fullSpec, paths: tagBuckets.get(slug)! };
  const model = convertOpenApiToSmithy(subSpec, {
    namespace: `com.datadog.${slug}`,
    serviceName: toPascal(slug),
    skipDeprecated: true,
    // Converter defaults: 400 BadRequest / 403 Forbidden / 404 NotFound /
    // 409 Conflict / 422 UnprocessableEntity typed per-op; 401/429/500/503
    // ride the common DatadogOpError union (429 is declared on every
    // operation in the spec and is retried by the throttling policy).
  });
  const opCount = Object.values(model.shapes).filter(
    (s: any) => s.type === "operation",
  ).length;
  if (opCount === 0) continue; // all-deprecated bucket
  fs.writeFileSync(
    path.join(outDir, `${slug}.json`),
    JSON.stringify(model, null, 2) + "\n",
  );
  written++;
  totalOps += opCount;
}

console.log(`✅ ${written} Smithy models (${totalOps} operations) → ${outDir}`);
