/**
 * Axiom SDK Code Generator
 *
 * The Axiom API ships as three OpenAPI 3.0 specs in
 * specs/docs/restapi/versions/:
 *   - v2.json               — the main control-plane API (served under /v2)
 *   - v1-edge-ingest.json   — ingest endpoints (served under /v1)
 *   - v1-edge-query.json    — query endpoints (served under /v1)
 *
 * Each spec's paths are prefixed with its version during preprocessing so
 * all operations share a single base URL (https://api.axiom.co). Preprocessed
 * specs are cached at packages/axiom/.generated-specs/.
 *
 * Generated files land in src/operations/{v2,v1-edge-ingest,v1-edge-query}/
 * and are re-exported from src/operations/index.ts.
 *
 * Post-processing: the shared OpenAPI generator does not quote dashed
 * property keys (e.g. `dataset-id`, `apl-source-id`) on Struct fields,
 * producing invalid TypeScript. We fix this after generation.
 */
import * as fs from "fs";
import * as path from "path";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");
const specsDir = path.join(rootDir, "specs/docs/restapi/versions");
const cacheDir = path.join(rootDir, ".generated-specs");
const operationsDir = path.join(rootDir, "src/operations");
const patchesDir = path.join(rootDir, "patches");

interface Version {
  /** Subdirectory name under src/operations/ */
  name: string;
  /** Filename under specs/docs/restapi/versions/ */
  specFile: string;
  /** Path prefix to apply (the real server URL segment, e.g. "/v2") */
  pathPrefix: string;
}

const VERSIONS: Version[] = [
  { name: "v2", specFile: "v2.json", pathPrefix: "/v2" },
  {
    name: "v1-edge-ingest",
    specFile: "v1-edge-ingest.json",
    pathPrefix: "/v1",
  },
  {
    name: "v1-edge-query",
    specFile: "v1-edge-query.json",
    pathPrefix: "/v1",
  },
];

/**
 * Rewrite a spec so all operation paths are prefixed with the version segment
 * and the server is a single, canonical host. Returns the path of the
 * preprocessed spec file on disk.
 */
function preprocessSpec(version: Version): string {
  const specPath = path.join(specsDir, version.specFile);
  const spec = JSON.parse(fs.readFileSync(specPath, "utf-8"));

  const newPaths: Record<string, unknown> = {};
  for (const [pathKey, pathItem] of Object.entries(spec.paths ?? {})) {
    newPaths[`${version.pathPrefix}${pathKey}`] = pathItem;
  }
  spec.paths = newPaths;
  spec.servers = [{ url: "https://api.axiom.co" }];

  fs.mkdirSync(cacheDir, { recursive: true });
  const outPath = path.join(cacheDir, version.specFile);
  fs.writeFileSync(outPath, JSON.stringify(spec, null, 2));
  return outPath;
}

/**
 * Quote struct property keys that contain dashes on generated files.
 *
 * The core generator emits lines like:
 *     dataset-id: Schema.String.pipe(T.PathParam()),
 * which is invalid TS. We rewrite those keys to quoted strings.
 */
function quoteDashedKeys(content: string): string {
  return content.replace(
    /^(\s+)([A-Za-z_$][A-Za-z0-9_$-]*-[A-Za-z0-9_$-]+)(\??:\s)/gm,
    (_m, lead, name, trail) => `${lead}"${name}"${trail}`,
  );
}

function postProcessDir(dir: string): void {
  for (const entry of fs.readdirSync(dir)) {
    if (!entry.endsWith(".ts")) continue;
    const full = path.join(dir, entry);
    const before = fs.readFileSync(full, "utf-8");
    const after = quoteDashedKeys(before);
    if (after !== before) fs.writeFileSync(full, after);
  }
}

/** Ensure per-version patch directory exists (applyAllPatches globs *.patch.json). */
function ensurePatchDir(versionName: string): string {
  const dir = path.join(patchesDir, versionName);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

/** Remove previously generated files for a version so stale ops don't linger. */
function cleanOutputDir(dir: string): void {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    if (entry.endsWith(".ts")) fs.rmSync(path.join(dir, entry));
  }
}

for (const version of VERSIONS) {
  const specPath = preprocessSpec(version);
  const outputDir = path.join(operationsDir, version.name);
  fs.mkdirSync(outputDir, { recursive: true });
  cleanOutputDir(outputDir);

  generateFromOpenAPI({
    specPath,
    patchDir: ensurePatchDir(version.name),
    outputDir,
    importPrefix: "../..",
    clientImport: "../../client",
    traitsImport: "../../traits",
    sensitiveImport: "../../sensitive",
    errorsImport: "../../errors",
    includeOperationErrors: true,
    skipDeprecated: true,
  });

  postProcessDir(outputDir);
}

// Root barrel: re-export each version's operations.
const rootBarrel =
  VERSIONS.map((v) => `export * from "./${v.name}/index.ts";`).join("\n") +
  "\n";
fs.writeFileSync(path.join(operationsDir, "index.ts"), rootBarrel);

console.log(`\nGenerated operations for ${VERSIONS.length} version(s).`);
