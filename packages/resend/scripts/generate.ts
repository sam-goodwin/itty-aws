/**
 * Resend SDK Code Generator
 *
 * The Resend API spec is published as `resend.yaml` (the bundled `resend.json`
 * is generated from it and treated as non-authoritative per the upstream repo).
 * We parse the YAML and hand it to the shared OpenAPI generator from sdk-core.
 *
 * The Resend OpenAPI document omits `operationId` on every path/method, so this
 * script synthesizes one for each operation before passing the spec to the
 * generator. Naming follows REST conventions:
 *   - GET    /resources           -> listResources
 *   - POST   /resources           -> createResource
 *   - GET    /resources/{id}      -> getResource
 *   - PATCH  /resources/{id}      -> updateResource
 *   - DELETE /resources/{id}      -> deleteResource
 *   - POST   /resources/{id}/verb -> verbResource (for known action verbs)
 */
import * as fs from "fs";
import * as path from "path";
import YAML from "yaml";
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";

const rootDir = path.join(import.meta.dir, "..");

const yamlPath = path.join(rootDir, "specs/resend-openapi/resend.yaml");
const jsonPath = path.join(rootDir, "specs/resend-openapi/resend.generated.json");

const yamlContent = fs.readFileSync(yamlPath, "utf-8");
const spec = YAML.parse(yamlContent);

// --- operationId synthesis ---------------------------------------------------

const ACTION_VERBS = new Set([
  "cancel",
  "verify",
  "publish",
  "duplicate",
  "send",
  "stop",
  "start",
  "run",
  "batch",
  "import",
  "export",
  "refresh",
  "reset",
]);

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;
type HttpMethod = (typeof HTTP_METHODS)[number];

function isParamSeg(seg: string): boolean {
  return seg.startsWith("{") && seg.endsWith("}");
}

function singularize(word: string): string {
  if (word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.endsWith("ses")) return word.slice(0, -2);
  if (word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

function camelCase(parts: readonly string[]): string {
  const joined = parts
    .filter(Boolean)
    .join("_")
    .replace(/[-]+/g, "_")
    .toLowerCase();
  return joined.replace(/_+([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function makeOperationId(method: HttpMethod, urlPath: string): string {
  const segments = urlPath.split("/").filter(Boolean);
  const nameSegs = segments.filter((s) => !isParamSeg(s));
  const last = segments[segments.length - 1] ?? "";
  const endsWithParam = isParamSeg(last);
  const lastIsAction =
    !endsWithParam && ACTION_VERBS.has(last.toLowerCase()) && nameSegs.length > 1;

  if (lastIsAction) {
    const action = nameSegs[nameSegs.length - 1]!;
    const resourceSegs = nameSegs.slice(0, -1).map(singularize);
    return camelCase([action, ...resourceSegs]);
  }

  if (endsWithParam) {
    const verbMap: Record<HttpMethod, string> = {
      get: "get",
      put: "update",
      patch: "update",
      delete: "delete",
      post: "create",
    };
    const verb = verbMap[method];
    const base = singularize(nameSegs[nameSegs.length - 1] ?? "");
    const prefix = nameSegs.slice(0, -1).map(singularize);
    return camelCase([verb, ...prefix, base]);
  }

  // Collection access.
  const verbMap: Record<HttpMethod, string> = {
    get: "list",
    post: "create",
    put: "update",
    patch: "update",
    delete: "delete",
  };
  const verb = verbMap[method];
  const last_ = nameSegs[nameSegs.length - 1] ?? "";
  const base = verb === "list" ? last_ : singularize(last_);
  const prefix = nameSegs.slice(0, -1).map(singularize);
  return camelCase([verb, ...prefix, base]);
}

const seen = new Map<string, string>();
for (const [urlPath, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const method of HTTP_METHODS) {
    const op = (pathItem as Record<string, unknown>)[method] as
      | { operationId?: string }
      | undefined;
    if (!op || op.operationId) continue;
    let id = makeOperationId(method, urlPath);
    if (seen.has(id)) {
      // Disambiguate collisions by appending the method.
      id = `${id}_${method}`;
    }
    seen.set(id, `${method.toUpperCase()} ${urlPath}`);
    op.operationId = id;
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(spec, null, 2));

try {
  generateFromOpenAPI({
    specPath: jsonPath,
    patchDir: path.join(rootDir, "patches"),
    outputDir: path.join(rootDir, "src/operations"),
    importPrefix: "..",
    clientImport: "../client",
    traitsImport: "../traits",
    sensitiveImport: "../sensitive",
    errorsImport: "../errors",
    includeOperationErrors: true,
    skipDeprecated: true,
    // Resend-specific statuses beyond the shared defaults:
    //   - 405 method_not_allowed
    //   - 451 security_error
    statusToErrorClass: {
      "400": "BadRequest",
      "403": "Forbidden",
      "404": "NotFound",
      "405": "MethodNotAllowed",
      "409": "Conflict",
      "422": "UnprocessableEntity",
      "451": "UnavailableForLegalReasons",
    },
    // Global error statuses handled by `matchError` (and excluded from
    // per-operation typed errors).
    defaultErrorStatuses: new Set(["401", "429", "500", "502", "503", "504"]),
  });
} finally {
  fs.unlinkSync(jsonPath);
}
