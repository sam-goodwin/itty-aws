#!/usr/bin/env bun
/**
 * convert — Vercel's OpenAPI description → Smithy JSON models in
 * .generated-specs.
 *
 * Vercel publishes ONE ~10 MB OpenAPI 3.0.3 document (downloaded to
 * `specs/openapi.json` by `scripts/download-spec.ts`) covering ~378
 * operations across 40 tags; the v1 layout wants one Smithy model — one
 * service module — per tag. Following the GitHub/PostHog pipeline, the
 * ordering is load-bearing:
 *
 *   1. Read the full spec.
 *   2. Apply ALL `patches/*.patch.json` ONCE to the full spec (RFC-6902,
 *      sorted name order; stale targets warn+skip — the spec is refetched
 *      from a live URL and drifts — malformed patches fail the run).
 *      Patching per-slice would hard-fail: a patch targeting one tag's paths
 *      doesn't resolve against another tag's slice.
 *   3. Bucket operations by PRIMARY (first) tag — a single path can
 *      contribute different methods to different service buckets. The handful
 *      of operations the spec leaves untagged are routed by {@link UNTAGGED}.
 *   4. Convert each bucket through the shared `convertOpenApiToSmithy` and
 *      write `.generated-specs/<tag_slug>.json`; buckets left empty (all
 *      deprecated) are dropped.
 *
 * Operation ids are used VERBATIM — Vercel's are already camelCase, already
 * globally unique, and are the spelling its own SDK and CLI use, so there is
 * no namespace prefix to strip the way GitHub's `repos/list-for-org` needs.
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
const specPath = path.join(rootDir, "specs/openapi.json");
const patchDir = path.join(rootDir, "patches");
const outDir = path.join(rootDir, ".generated-specs");

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;

/**
 * Operations the spec ships with no `tags` at all — unversioned or
 * late-added paths that upstream's tagging pass missed. Each is routed to the
 * tag its siblings already live under (`/domains/records/{recordId}` next to
 * the rest of `dns`, the observability query/schema endpoints next to
 * `observability`) so they don't collect in a junk-drawer module. An untagged
 * operation NOT listed here lands in `misc` with a warning — the list needs
 * an entry, or upstream has since tagged it.
 */
const UNTAGGED: Readonly<Record<string, string>> = {
  replaceDomainsByDomainRecords: "dns",
  getDomainsRecordsByRecordId: "dns",
  createApiKeys: "authentication",
  createObservabilityQuery: "observability",
  getObservabilitySchema: "observability",
  getObservabilitySchemaByMetricId: "observability",
  createSpeedInsightsToggle: "web-analytics",
  createWebInsightsToggle: "web-analytics",
};

/**
 * Tag → model/resource name (the generated module's filename).
 *
 * Vercel's tags mix kebab-case (`access-groups`, `checks-v2`) and camelCase
 * (`logDrains`, `projectMembers`), so camel boundaries are split BEFORE
 * lowercasing — otherwise `logDrains` would flatten to `logdrains` and the
 * barrel would re-export it as one unreadable word.
 */
const toSlug = (tag: string): string =>
  tag
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
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
    `${specPath} not found — run \`bun run spec:download\` to fetch the OpenAPI document`,
  );
}
const fullSpec = JSON.parse(fs.readFileSync(specPath, "utf-8"));

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

// ---- 3. Bucket paths by primary tag ----------------------------------------
const tagBuckets = new Map<string, Record<string, Record<string, unknown>>>();
const unrouted: string[] = [];
for (const [pathTemplate, pathItem] of Object.entries<Record<string, unknown>>(
  fullSpec.paths,
)) {
  for (const method of HTTP_METHODS) {
    const op = (pathItem as Record<string, any>)[method];
    if (!op) continue;
    let rawTag: string | undefined =
      Array.isArray(op.tags) && op.tags.length > 0 ? op.tags[0] : undefined;
    if (rawTag === undefined) {
      rawTag = UNTAGGED[op.operationId];
      if (rawTag === undefined) {
        unrouted.push(`${method.toUpperCase()} ${pathTemplate}`);
        rawTag = "misc";
      }
    }
    const slug = toSlug(rawTag) || "misc";
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
if (unrouted.length) {
  console.warn(
    `   ⚠️  ${unrouted.length} untagged operation(s) fell into \`misc\` — add them to UNTAGGED:\n      ` +
      unrouted.join("\n      "),
  );
}

// ---- 4. Convert each bucket ------------------------------------------------
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

let written = 0;
let totalOps = 0;
for (const slug of [...tagBuckets.keys()].sort()) {
  const subSpec = { ...fullSpec, paths: tagBuckets.get(slug)! };
  const model = convertOpenApiToSmithy(subSpec, {
    namespace: `com.vercel.${slug}`,
    serviceName: toPascal(slug),
    skipDeprecated: true,
    statusToErrorClass: {
      // The converter's defaults …
      "400": "BadRequest",
      "403": "Forbidden",
      "404": "NotFound",
      "409": "Conflict",
      "422": "UnprocessableEntity",
      // … plus the one Vercel adds to the common vocabulary: 402 for a team
      // that can't be billed (no payment method, unpaid invoice, spend cap
      // reached). It's declared on ~95 operations and is genuinely actionable
      // per operation, unlike the boilerplate statuses below.
      "402": "PaymentRequired",
    },
    // 401/429/500/503 ride the common VercelOpError union, as does 410:
    // Vercel declares "Invalid API version" on nearly every operation, and it
    // reports a retired PATH version rather than anything operation-specific.
    // The protocol maps it to the hand-written `Gone` (see src/errors.ts).
    defaultErrorStatuses: ["401", "410", "429", "500", "503"],
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
