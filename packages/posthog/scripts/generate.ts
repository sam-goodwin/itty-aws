/**
 * Posthog SDK Code Generator
 *
 * Generates Effect operation files from the PostHog OpenAPI 3.0 spec, grouped
 * by primary tag into `src/operations/{service}/` subdirectories — similar to
 * how `packages/cloudflare/` splits operations by service.
 *
 * The shared OpenAPI generator (`@distilled.cloud/core/openapi/generate`)
 * writes one file per operation into a single output directory. To produce a
 * service-grouped layout, this script:
 *   1. Reads the full OpenAPI spec.
 *   2. Buckets operations by their primary tag (first entry in `tags`).
 *   3. For each bucket, writes a temporary spec containing only those paths.
 *   4. Invokes `generateFromOpenAPI` per-bucket with `outputDir` set to
 *      `src/operations/{service-slug}/` and `importPrefix: "../.."` so
 *      generated files import from the package root correctly.
 *   5. Writes a top-level `src/operations/index.ts` that re-exports each
 *      service as a namespace (e.g. `export * as FeatureFlags from
 *      "./feature-flags/index.ts";`).
 */
import * as fs from "fs";
import * as path from "path";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";
import { applyAllPatches } from "@distilled.cloud/core/json-patch";

const rootDir = path.join(import.meta.dir, "..");
const specPath = path.join(
  rootDir,
  "specs/distilled-spec-posthog/specs/openapi.json",
);
const patchDir = path.join(rootDir, "patches");
const outputBaseDir = path.join(rootDir, "src/operations");
const tmpDir = path.join(rootDir, ".tmp-specs");
// Empty/non-existent dir passed to per-slice generateFromOpenAPI calls so it
// doesn't try to re-apply (and fail) the global patches against each slice.
const noopPatchDir = path.join(tmpDir, ".no-patches");

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;

function toSlug(tag: string): string {
  return tag
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function toPascal(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

// Read full spec
const fullSpec = JSON.parse(fs.readFileSync(specPath, "utf-8"));

// Apply patches to the FULL spec up-front. The shared OpenAPI generator
// expects to apply patches itself per-spec, but our per-tag slicing means a
// patch targeting one tag's paths would fail (whole-file abort) when applied
// to another tag's slice. Applying once on the full spec sidesteps that.
const { applied: appliedPatches, errors: patchErrors } = applyAllPatches(
  fullSpec,
  patchDir,
);
for (const a of appliedPatches) console.log(`  ✓ patch ${a}`);
if (patchErrors.length > 0) {
  console.error("Patch errors:");
  for (const e of patchErrors) console.error(`  ✗ ${e}`);
  throw new Error("Aborting generate due to patch errors");
}

// Group paths by primary tag — each path can contribute different operations
// to different tag buckets (e.g. GET=tagA, POST=tagB on the same path).
const tagBuckets = new Map<string, Record<string, Record<string, unknown>>>();
const tagDisplayNames = new Map<string, string>();

for (const [pathTemplate, pathItem] of Object.entries<Record<string, unknown>>(
  fullSpec.paths,
)) {
  for (const method of HTTP_METHODS) {
    const op = (pathItem as Record<string, any>)[method];
    if (!op) continue;
    const rawTag: string =
      Array.isArray(op.tags) && op.tags.length > 0 ? op.tags[0] : "default";
    const slug = toSlug(rawTag) || "default";
    if (!tagDisplayNames.has(slug)) tagDisplayNames.set(slug, rawTag);
    if (!tagBuckets.has(slug)) tagBuckets.set(slug, {});
    const bucketPaths = tagBuckets.get(slug)!;
    if (!bucketPaths[pathTemplate]) {
      // copy any path-level params if present
      const pathParams = (pathItem as Record<string, any>).parameters;
      bucketPaths[pathTemplate] = pathParams ? { parameters: pathParams } : {};
    }
    (bucketPaths[pathTemplate] as Record<string, unknown>)[method] = op;
  }
}

// Reset output directory
if (fs.existsSync(outputBaseDir)) {
  fs.rmSync(outputBaseDir, { recursive: true, force: true });
}
fs.mkdirSync(outputBaseDir, { recursive: true });

// Reset tmp dir
if (fs.existsSync(tmpDir)) {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
fs.mkdirSync(tmpDir, { recursive: true });

const services: { slug: string; pascalName: string }[] = [];

const sortedSlugs = [...tagBuckets.keys()].sort();
for (const slug of sortedSlugs) {
  const paths = tagBuckets.get(slug)!;
  const subSpec = { ...fullSpec, paths };
  const subSpecPath = path.join(tmpDir, `${slug}.json`);
  fs.writeFileSync(subSpecPath, JSON.stringify(subSpec));

  const serviceOutputDir = path.join(outputBaseDir, slug);

  generateFromOpenAPI({
    specPath: subSpecPath,
    // Patches were already applied above to the full spec; pass a non-existent
    // dir so generateFromOpenAPI doesn't try (and fail) to apply them again
    // against this single-tag slice.
    patchDir: noopPatchDir,
    outputDir: serviceOutputDir,
    importPrefix: "../..",
    skipDeprecated: true,
    // PostHog spec only declares 2xx responses upstream; the patches in
    // packages/posthog/patches/*-errors.patch.json inject observed 400/403/404
    // responses (see generate-error-patches.ts), so we want operation-level
    // typed errors emitted into each operation's `errors:` array.
    includeOperationErrors: true,
  });

  // If the service ended up with no operations (e.g. all deprecated), skip.
  const generated = fs
    .readdirSync(serviceOutputDir)
    .filter((f) => f !== "index.ts");
  if (generated.length === 0) {
    fs.rmSync(serviceOutputDir, { recursive: true, force: true });
    continue;
  }

  services.push({ slug, pascalName: toPascal(slug) });
}

// Top-level barrel: re-export each service as a namespace.
const barrelLines = services.map(
  (s) => `export * as ${s.pascalName} from "./${s.slug}/index.ts";`,
);
fs.writeFileSync(
  path.join(outputBaseDir, "index.ts"),
  barrelLines.join("\n") + "\n",
);

// Cleanup temp specs
fs.rmSync(tmpDir, { recursive: true, force: true });

console.log(
  `\n✨ Generated ${services.length} service modules under src/operations/`,
);
