/**
 * Turbopuffer SDK Code Generator
 *
 * Uses the shared OpenAPI generator from sdk-core to generate operations
 * from the Turbopuffer OpenAPI 3.1 YAML spec.
 *
 * Pre-processing steps before calling generateFromOpenAPI:
 *   1. Parse the YAML spec (the generator only accepts JSON).
 *   2. Inject operationIds — the turbopuffer spec omits them.
 *   3. Skip stainless_overload virtual-path entries: the turbopuffer spec
 *      uses Stainless's `?stainless_overload=X` convention to represent
 *      multiple distinct request-body shapes on the same HTTP method+path
 *      (e.g. BranchFromNamespace and CopyFromNamespace both POST to
 *      /v2/namespaces/{namespace}). The distilled generator processes one
 *      operation per method per path and cannot model these aliases. Those
 *      three operations (BranchFromNamespace, CopyFromNamespace,
 *      MultiQueryNamespace) are intentionally omitted from generation.
 */
import * as fs from "fs";
import * as path from "path";
import { parse as parseYaml } from "yaml";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");

// ============================================================================
// OperationId lookup: path + method → operationId
// ============================================================================

const OPERATION_ID_MAP: Record<string, Record<string, string>> = {
  "/v1/namespaces": {
    get: "ListNamespaces",
  },
  "/v1/namespaces/{namespace}/schema": {
    get: "GetNamespaceSchema",
    post: "UpdateNamespaceSchema",
  },
  "/v2/namespaces/{namespace}/metadata": {
    get: "GetNamespaceMetadata",
  },
  "/v1/namespaces/{namespace}/metadata": {
    patch: "UpdateNamespaceMetadata",
  },
  "/v1/namespaces/{namespace}/hint_cache_warm": {
    get: "HintCacheWarm",
  },
  "/v1/namespaces/{namespace}/_debug/recall": {
    post: "DebugRecall",
  },
  "/v2/namespaces/{namespace}": {
    post: "WriteNamespace",
    delete: "DeleteNamespace",
  },
  "/v2/namespaces/{namespace}/query": {
    post: "QueryNamespace",
  },
  "/v2/namespaces/{namespace}/explain_query": {
    post: "ExplainQuery",
  },
};

// ============================================================================
// Pre-process the parsed spec
// ============================================================================

function preprocess(spec: Record<string, unknown>): Record<string, unknown> {
  const paths = spec["paths"] as Record<string, unknown> | undefined;
  if (!paths) return spec;

  const cleanedPaths: Record<string, unknown> = {};

  for (const [pathKey, pathItem] of Object.entries(paths)) {
    // Skip stainless_overload virtual-path entries — they represent multiple
    // request-body variants on the same HTTP method+path and cannot be
    // expressed in the generator's one-operation-per-method-per-path model.
    if (pathKey.includes("?stainless_overload=")) {
      continue;
    }

    const pathMethods = pathItem as Record<string, unknown>;
    const operationIdsByMethod = OPERATION_ID_MAP[pathKey] ?? {};

    // Inject operationId into each HTTP operation under this path
    const processedPath: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(pathMethods)) {
      const method = key.toLowerCase();
      if (
        ["get", "post", "put", "patch", "delete", "head", "options"].includes(
          method,
        )
      ) {
        const op = value as Record<string, unknown>;
        const operationId = operationIdsByMethod[method];
        if (!operationId) {
          console.warn(
            `⚠  No operationId mapping for ${method.toUpperCase()} ${pathKey} — skipping`,
          );
          continue;
        }
        processedPath[key] = { ...op, operationId };
      } else {
        // path-level parameters or extensions — pass through unchanged
        processedPath[key] = value;
      }
    }

    if (Object.keys(processedPath).length > 0) {
      cleanedPaths[pathKey] = processedPath;
    }
  }

  return { ...spec, paths: cleanedPaths };
}

// ============================================================================
// Main
// ============================================================================

const specYamlPath = path.join(
  rootDir,
  "specs/turbopuffer-openapi/openapi.yml",
);
const specJsonPath = path.join(
  rootDir,
  "specs/turbopuffer-openapi/openapi.generated.json",
);

// 1. Parse YAML spec
const yamlContent = fs.readFileSync(specYamlPath, "utf-8");
const rawSpec = parseYaml(yamlContent) as Record<string, unknown>;

// 2. Pre-process: inject operationIds, strip stainless_overload paths
const spec = preprocess(rawSpec);

// 3. Write temporary JSON spec for the generator
fs.writeFileSync(specJsonPath, JSON.stringify(spec, null, 2));

try {
  // 4. Generate operations
  generateFromOpenAPI({
    specPath: specJsonPath,
    patchDir: path.join(rootDir, "patches"),
    outputDir: path.join(rootDir, "src/operations"),
    importPrefix: "..",
    clientImport: "../client",
    traitsImport: "../traits",
    sensitiveImport: "../sensitive",
    errorsImport: "../errors",
    includeOperationErrors: false,
    skipDeprecated: true,
  });
} finally {
  // 5. Clean up the generated JSON — keep the repo clean
  fs.unlinkSync(specJsonPath);
}
