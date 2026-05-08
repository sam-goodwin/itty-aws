#!/usr/bin/env bun
/**
 * Code generator for GCP discovery documents → Effect-native TypeScript.
 *
 * Usage:
 *   bun run scripts/generate.ts                      # Generate all
 *   bun run scripts/generate.ts --service storage     # Single service (preferred version)
 *   bun run scripts/generate.ts --service storage --version v1  # Specific version
 *
 * Reads from: specs/distilled-spec-gcp/specs/{name}-{version}.json
 * Outputs to: src/services/{name}-{version}.ts
 * Patches from: patches/{name}/{operation}.json OR patches/{name}.json
 */

import * as fs from "node:fs";
import * as path from "node:path";

const annotatePureExportConst = (definition: string) =>
  definition.replace(
    /^export const ([^=]+?)\s*=\s*/m,
    "export const $1 = /*@__PURE__*/ /*#__PURE__*/ ",
  );

// =============================================================================
// Discovery Document Types
// =============================================================================

interface DiscoveryDoc {
  kind: string;
  discoveryVersion: string;
  id: string;
  name: string;
  version: string;
  title: string;
  description?: string;
  rootUrl: string;
  servicePath: string;
  basePath?: string;
  baseUrl?: string;
  mtlsRootUrl?: string;
  protocol: string;
  parameters?: Record<string, ParameterSchema>;
  auth?: {
    oauth2?: { scopes?: Record<string, { description: string }> };
  };
  schemas?: Record<string, SchemaObject>;
  resources?: Record<string, ResourceObject>;
  methods?: Record<string, MethodObject>;
  fullyEncodeReservedExpansion?: boolean;
}

interface SchemaObject {
  id?: string;
  type: string;
  description?: string;
  properties?: Record<string, PropertySchema>;
  items?: PropertySchema;
  additionalProperties?: PropertySchema;
  $ref?: string;
  enum?: string[];
  enumDescriptions?: string[];
  format?: string;
  default?: string;
  required?: string[];
  annotations?: { required?: string[] };
}

interface PropertySchema {
  type?: string;
  description?: string;
  $ref?: string;
  items?: PropertySchema;
  additionalProperties?: PropertySchema;
  properties?: Record<string, PropertySchema>;
  enum?: string[];
  enumDescriptions?: string[];
  format?: string;
  default?: string;
  required?: string[];
  readOnly?: boolean;
}

interface ParameterSchema {
  type: string;
  description?: string;
  required?: boolean;
  location: "path" | "query";
  format?: string;
  enum?: string[];
  enumDescriptions?: string[];
  pattern?: string;
  default?: string;
  minimum?: string;
  maximum?: string;
  repeated?: boolean;
}

interface MethodObject {
  id: string;
  path: string;
  flatPath?: string;
  httpMethod: string;
  description?: string;
  parameters?: Record<string, ParameterSchema>;
  parameterOrder?: string[];
  request?: { $ref: string };
  response?: { $ref: string };
  scopes?: string[];
  supportsMediaDownload?: boolean;
  supportsMediaUpload?: boolean;
  mediaUpload?: {
    accept: string[];
    maxSize?: string;
    protocols: {
      simple?: { multipart: boolean; path: string };
      resumable?: { multipart: boolean; path: string };
    };
  };
  useMediaDownloadService?: boolean;
}

interface ResourceObject {
  methods?: Record<string, MethodObject>;
  resources?: Record<string, ResourceObject>;
}

// =============================================================================
// Patch Types
// =============================================================================

interface ErrorMatcher {
  httpStatus?: number;
  status?: string;
  reason?: string;
  domain?: string;
  message?: { includes?: string; matches?: string };
}

interface OperationPatch {
  errors?: Record<string, ErrorMatcher[]>;
  errorCategories?: Record<string, string[]>;
  response?: { properties: Record<string, Record<string, unknown>> };
  request?: { properties: Record<string, Record<string, unknown>> };
}

interface ServicePatch {
  operations?: Record<string, OperationPatch>;
  errors?: Record<string, ErrorMatcher[]>;
  errorCategories?: Record<string, string[]>;
}

// =============================================================================
// Collected Operation
// =============================================================================

interface CollectedOperation {
  /** Qualified method ID (e.g., "storage.buckets.insert") */
  id: string;
  /** Generated function name (e.g., "insertBucket") */
  functionName: string;
  /** Resource path segments (e.g., ["buckets"]) */
  resourcePath: string[];
  /** HTTP method */
  httpMethod: string;
  /** URL path template */
  path: string;
  /** Parameters */
  parameters: Record<string, ParameterSchema>;
  /** Request body schema ref */
  requestRef?: string;
  /** Response body schema ref */
  responseRef?: string;
  /** Description */
  description?: string;
  /** Media upload info */
  mediaUpload?: MethodObject["mediaUpload"];
  /** Whether method supports media download */
  supportsMediaDownload?: boolean;
}

// =============================================================================
// Main
// =============================================================================

const args = process.argv.slice(2);
const serviceFilter = args.includes("--service")
  ? args[args.indexOf("--service") + 1]
  : undefined;
const versionFilter = args.includes("--version")
  ? args[args.indexOf("--version") + 1]
  : undefined;

async function main() {
  // Load manifest
  const manifestPath = path.resolve(
    "specs/distilled-spec-gcp/specs/_manifest.json",
  );
  if (!fs.existsSync(manifestPath)) {
    console.error(
      "No manifest found. Run `git submodule update --init` first to fetch specs.",
    );
    process.exit(1);
  }

  const manifest: Array<{
    name: string;
    version: string;
    title: string;
    preferred: boolean;
    filename: string;
  }> = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

  // Filter
  let entries = manifest;
  if (serviceFilter) {
    entries = entries.filter((e) => e.name === serviceFilter);
    if (versionFilter) {
      entries = entries.filter((e) => e.version === versionFilter);
    }
    if (entries.length === 0) {
      console.error(
        `No spec found for service: ${serviceFilter}${versionFilter ? `@${versionFilter}` : ""}`,
      );
      process.exit(1);
    }
  }

  // Manifest entries with `preferred: true` are stable; everything else is
  // routed to `src/unstable-services/` and exposed under the `./unstable/*`
  // subpath so consumers explicitly opt into non-preferred API versions.
  const STABLE_DIR = path.resolve("src/services");
  const UNSTABLE_DIR = path.resolve("src/unstable-services");
  fs.mkdirSync(STABLE_DIR, { recursive: true });
  fs.mkdirSync(UNSTABLE_DIR, { recursive: true });

  let generated = 0;
  for (const entry of entries) {
    try {
      const specPath = path.resolve(
        `specs/distilled-spec-gcp/specs/${entry.filename}`,
      );
      const doc: DiscoveryDoc = JSON.parse(fs.readFileSync(specPath, "utf-8"));

      const outputName = `${entry.name}-${entry.version}`;
      const outputDir = entry.preferred ? STABLE_DIR : UNSTABLE_DIR;
      const outputPath = path.join(outputDir, `${outputName}.ts`);

      // Load patches
      const patches = loadPatches(entry.name, outputName);

      const code = generateService(doc, patches);
      fs.writeFileSync(outputPath, code, "utf-8");

      generated++;
      console.log(`✅ ${outputName}`);
    } catch (err) {
      console.error(`❌ ${entry.name}@${entry.version}:`, err);
    }
  }
}

// =============================================================================
// Patch Loading
// =============================================================================

function loadPatches(serviceName: string, _outputName: string): ServicePatch {
  const result: ServicePatch = {
    operations: {},
    errors: {},
    errorCategories: {},
  };

  // Try service-level patch: patches/{service}.json
  const servicePatchPath = path.resolve(`patches/${serviceName}.json`);
  if (fs.existsSync(servicePatchPath)) {
    try {
      const parsed: ServicePatch = JSON.parse(
        fs.readFileSync(servicePatchPath, "utf-8"),
      );
      Object.assign(result, parsed);
    } catch (err) {
      console.warn(`Warning: Failed to parse ${servicePatchPath}:`, err);
    }
  }

  // Try per-operation patches: patches/{service}/{operation}.json
  const opPatchDir = path.resolve(`patches/${serviceName}`);
  if (fs.existsSync(opPatchDir) && fs.statSync(opPatchDir).isDirectory()) {
    for (const file of fs.readdirSync(opPatchDir)) {
      if (!file.endsWith(".json")) continue;
      const opName = file.replace(".json", "");
      try {
        const parsed: OperationPatch = JSON.parse(
          fs.readFileSync(path.join(opPatchDir, file), "utf-8"),
        );
        if (!result.operations) result.operations = {};
        result.operations[opName] = parsed;
      } catch (err) {
        console.warn(
          `Warning: Failed to parse ${path.join(opPatchDir, file)}:`,
          err,
        );
      }
    }
  }

  return result;
}

// =============================================================================
// Code Generation
// =============================================================================

// Names that conflict with imports or TypeScript keywords
const RESERVED_SCHEMA_NAMES = new Set([
  "Schema",
  "Effect",
  "API",
  "T",
  "C",
  "HttpClient",
  "Credentials",
  "DefaultErrors",
  // Standard 4xx error class names emitted via method-keyed defaults
  // (see `methodDefaultErrorTags`). Several Google APIs ship discovery
  // schemas literally named `BadRequest` / `NotFound` (e.g.
  // `datamigration-v1`'s `google.rpc.BadRequest`); rename those to
  // avoid colliding with the emitted error classes.
  "NotFound",
  "Forbidden",
  "BadRequest",
  "Conflict",
  // TypeScript built-in global types
  "Record",
  "Array",
  "Map",
  "Set",
  "Promise",
  "Error",
  "Function",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Symbol",
  "Date",
  "RegExp",
  "JSON",
]);

function generateService(doc: DiscoveryDoc, patches: ServicePatch): string {
  const lines: string[] = [];

  // Header
  lines.push(
    "// ==========================================================================",
  );
  lines.push(`// ${doc.title} (${doc.name} ${doc.version})`);
  lines.push("// DO NOT EDIT - Generated from GCP Discovery Document");
  lines.push(
    "// ==========================================================================",
  );
  lines.push("");
  lines.push('import * as Schema from "effect/Schema";');
  lines.push('import * as API from "../client/api.ts";');
  lines.push('import * as T from "../traits.ts";');
  lines.push("__CATEGORY_IMPORT__");
  lines.push("__DURATION_SCHEMA_IMPORT__");
  lines.push('import type { Credentials } from "../credentials.ts";');
  lines.push('import type { DefaultErrors } from "../errors.ts";');
  lines.push(
    'import type * as HttpClient from "effect/unstable/http/HttpClient";',
  );
  lines.push("");

  // Service trait
  lines.push("// Service metadata");
  lines.push(`const svc = T.Service({`);
  lines.push(`  name: ${JSON.stringify(doc.name)},`);
  lines.push(`  version: ${JSON.stringify(doc.version)},`);
  lines.push(`  rootUrl: ${JSON.stringify(doc.rootUrl)},`);
  lines.push(`  servicePath: ${JSON.stringify(doc.servicePath)},`);
  lines.push(`});`);
  lines.push("");

  // Collect all schemas, renaming reserved names
  const schemaNames = new Set<string>();
  const schemaRenames = new Map<string, string>(); // original -> safe name
  if (doc.schemas) {
    for (const name of Object.keys(doc.schemas)) {
      if (RESERVED_SCHEMA_NAMES.has(name)) {
        const safeName = `${doc.name.charAt(0).toUpperCase() + doc.name.slice(1)}_${name}`;
        schemaRenames.set(name, safeName);
        schemaNames.add(safeName);
      } else {
        schemaNames.add(name);
      }
    }
  }

  // Generate schemas section
  if (doc.schemas) {
    lines.push(
      "// ==========================================================================",
    );
    lines.push("// Schemas");
    lines.push(
      "// ==========================================================================",
    );
    lines.push("");

    // Topological sort schemas based on $ref dependencies
    const sortedSchemas = topologicalSortSchemas(doc.schemas);
    const recursiveSchemas = findRecursiveSchemas(doc.schemas);

    for (const [originalName, schema] of sortedSchemas) {
      const name = schemaRenames.get(originalName) ?? originalName;
      const schemaLines = generateSchema(
        name,
        schema,
        doc.schemas,
        schemaRenames,
        recursiveSchemas.has(originalName),
      );
      lines.push(...schemaLines);
      lines.push("");
    }
  }

  // Collect all operations
  const operations = collectOperations(doc);

  // Collect all errors from patches across operations
  const allErrors = new Map<string, ErrorMatcher[]>();
  const allErrorCategories = new Map<string, string[]>();

  // Service-level errors
  if (patches.errors) {
    for (const [tag, matchers] of Object.entries(patches.errors)) {
      allErrors.set(tag, matchers);
    }
  }
  if (patches.errorCategories) {
    for (const [tag, cats] of Object.entries(patches.errorCategories)) {
      allErrorCategories.set(tag, cats);
    }
  }

  // Per-operation errors
  if (patches.operations) {
    for (const [_opName, opPatch] of Object.entries(patches.operations)) {
      if (opPatch.errors) {
        for (const [tag, matchers] of Object.entries(opPatch.errors)) {
          if (!allErrors.has(tag)) {
            allErrors.set(tag, matchers);
          }
        }
      }
      if (opPatch.errorCategories) {
        for (const [tag, cats] of Object.entries(opPatch.errorCategories)) {
          if (!allErrorCategories.has(tag)) {
            allErrorCategories.set(tag, cats);
          }
        }
      }
    }
  }

  // Method-keyed default 4xx errors. Walks every operation, unions the
  // method-appropriate default tags, and registers a default `httpStatus`
  // matcher for any tag not already supplied by a patch. Patches still win
  // on matcher shape because of the `!allErrors.has(tag)` guard.
  for (const op of operations) {
    for (const tag of methodDefaultErrorTags(op.httpMethod)) {
      if (!allErrors.has(tag)) {
        const status = STANDARD_4XX_TAG_TO_STATUS[tag];
        if (status !== undefined) {
          allErrors.set(tag, [{ httpStatus: status }]);
        }
      }
    }
  }

  // Generate error classes
  if (allErrors.size > 0) {
    lines.push(
      "// ==========================================================================",
    );
    lines.push("// Errors");
    lines.push(
      "// ==========================================================================",
    );
    lines.push("");

    for (const [tag, matchers] of allErrors) {
      const categories = allErrorCategories.get(tag);
      lines.push(...generateErrorClass(tag, matchers, categories));
      lines.push("");
    }
  }

  // Generate operations
  if (operations.length > 0) {
    lines.push(
      "// ==========================================================================",
    );
    lines.push("// Operations");
    lines.push(
      "// ==========================================================================",
    );
    lines.push("");

    for (const op of operations) {
      const opPatch = patches.operations?.[op.functionName] ?? {};
      lines.push(
        ...generateOperation(
          op,
          doc.schemas ?? {},
          opPatch,
          allErrors,
          schemaNames,
          schemaRenames,
        ),
      );
      lines.push("");
    }
  }

  let code = lines.join("\n") + "\n";
  // Only include the category import if it's actually used
  if (code.includes("C.with")) {
    code = code.replace(
      "__CATEGORY_IMPORT__",
      'import * as C from "../category.ts";',
    );
  } else {
    code = code.replace("__CATEGORY_IMPORT__\n", "");
  }
  // Only include the DurationSchema import if any retryable error class
  // declares a `retryAfter` field.
  if (code.includes("DurationSchema")) {
    code = code.replace(
      "__DURATION_SCHEMA_IMPORT__",
      'import { DurationSchema } from "@distilled.cloud/core/errors";',
    );
  } else {
    code = code.replace("__DURATION_SCHEMA_IMPORT__\n", "");
  }
  return code;
}

// =============================================================================
// Schema Generation
// =============================================================================

function generateSchema(
  name: string,
  schema: SchemaObject,
  allSchemas: Record<string, SchemaObject>,
  renames?: Map<string, string>,
  isRecursive?: boolean,
): string[] {
  const lines: string[] = [];
  const resolveRef = (ref: string) => renames?.get(ref) ?? ref;

  if (schema.type === "object" && schema.properties) {
    // Generate interface
    lines.push(`export interface ${name} {`);
    for (const [propName, propSchema] of Object.entries(schema.properties)) {
      const tsType = propertyToTsType(propSchema, allSchemas, renames);
      const isRequired = schema.required?.includes(propName);
      const opt = isRequired ? "" : "?";
      if (propSchema.description) {
        lines.push(`  /** ${cleanDescription(propSchema.description)} */`);
      }
      lines.push(`  ${safePropName(propName)}${opt}: ${tsType};`);
    }
    lines.push(`}`);
    lines.push("");

    // Generate Effect Schema. Always annotate the export with an
    // explicit `Schema.Schema<Name>` type — without it, TS infers the
    // full structural type and serializes it into the .d.ts, which
    // breaks with TS7056 ("inferred type exceeds the maximum length
    // the compiler will serialize") on very wide schemas (e.g.
    // `searchads360-v23`'s `SearchAds360Row`, which has hundreds of
    // optional cross-referenced fields). Annotating short-circuits
    // serialization. Recursive schemas need `Schema.suspend` to break
    // the cycle; non-recursive ones can use `Schema.Struct` directly.
    if (isRecursive) {
      lines.push(
        `export const ${name}: Schema.Schema<${name}> = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => Schema.Struct({`,
      );
    } else {
      lines.push(
        `export const ${name}: Schema.Schema<${name}> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({`,
      );
    }
    for (const [propName, propSchema] of Object.entries(schema.properties)) {
      const schemaExpr = propertyToSchemaExpr(propSchema, allSchemas, renames);
      const isRequired = schema.required?.includes(propName);
      if (isRequired) {
        lines.push(`  ${safePropName(propName)}: ${schemaExpr},`);
      } else {
        lines.push(
          `  ${safePropName(propName)}: Schema.optional(${schemaExpr}),`,
        );
      }
    }
    if (isRecursive) {
      // Recursive schemas need the double-cast: `Schema.suspend` returns
      // a thunk that TS can't resolve back to `Schema.Schema<Name>`
      // because of the `Name → Name` cycle.
      lines.push(
        `})).annotate({ identifier: ${JSON.stringify(name)} }) as any as Schema.Schema<${name}>;`,
      );
    } else {
      // Non-recursive: the `Schema.Struct<Fields>` returned by Effect
      // is structurally assignable to `Schema.Schema<Name>` (the
      // generated `interface Name` mirrors the struct fields), so the
      // explicit type annotation on `export const` is enough — no cast
      // needed.
      lines.push(
        `}).annotate({ identifier: ${JSON.stringify(name)} });`,
      );
    }
  } else if (schema.type === "object" && schema.additionalProperties) {
    // Map type
    const valType = propertyToTsType(
      schema.additionalProperties,
      allSchemas,
      renames,
    );
    const valSchema = propertyToSchemaExpr(
      schema.additionalProperties,
      allSchemas,
      renames,
    );
    lines.push(`export type ${name} = Record<string, ${valType}>;`);
    lines.push(
      `export const ${name}: Schema.Schema<${name}> = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, ${valSchema}) as any as Schema.Schema<${name}>;`,
    );
  } else if (schema.enum) {
    // Enum type - open union
    const literals = schema.enum.map((v) => JSON.stringify(v)).join(" | ");
    lines.push(`export type ${name} = ${literals} | (string & {});`);
    lines.push(
      `export const ${name} = /*@__PURE__*/ /*#__PURE__*/ Schema.String;`,
    );
  } else {
    // Simple type alias
    const tsType = schemaTypeToTs(schema);
    lines.push(`export type ${name} = ${tsType};`);
    lines.push(
      `export const ${name} = /*@__PURE__*/ /*#__PURE__*/ ${schemaTypeToSchemaExpr(schema)};`,
    );
  }

  return lines;
}

function propertyToTsType(
  prop: PropertySchema,
  allSchemas: Record<string, SchemaObject>,
  renames?: Map<string, string>,
): string {
  if (prop.$ref) {
    return renames?.get(prop.$ref) ?? prop.$ref;
  }

  switch (prop.type) {
    case "string":
      if (prop.enum) {
        return (
          prop.enum.map((v) => JSON.stringify(v)).join(" | ") +
          " | (string & {})"
        );
      }
      if (prop.format === "date-time") return "string";
      if (prop.format === "int64" || prop.format === "uint64") return "string";
      if (prop.format === "byte") return "string";
      return "string";

    case "integer":
    case "number":
      return "number";

    case "boolean":
      return "boolean";

    case "array":
      // Emit `ReadonlyArray<T>` (not `Array<T>`) so the interface matches
      // what `Schema.Type<typeof Schema.Array(...)>` produces. Without
      // this, the schema-derived value type is `readonly T[]` while the
      // hand-emitted interface declares mutable `T[]`, and TS rejects
      // `readonly T[]` → `T[]` in operation method signatures (see e.g.
      // cloudresourcemanager-v3 `getOperations` / `listTagBindings`).
      // `ReadonlyArray<T>` is a supertype of `T[]`, so callers building
      // requests with array literals stay compatible.
      if (prop.items) {
        return `ReadonlyArray<${propertyToTsType(prop.items, allSchemas, renames)}>`;
      }
      return "ReadonlyArray<unknown>";

    case "object":
      if (prop.additionalProperties) {
        return `Record<string, ${propertyToTsType(prop.additionalProperties, allSchemas, renames)}>`;
      }
      if (prop.properties) {
        const inner = Object.entries(prop.properties)
          .map(
            ([k, v]) =>
              `${safePropName(k)}?: ${propertyToTsType(v, allSchemas, renames)}`,
          )
          .join("; ");
        return `{ ${inner} }`;
      }
      return "Record<string, unknown>";

    case "any":
      return "unknown";

    default:
      return "unknown";
  }
}

function propertyToSchemaExpr(
  prop: PropertySchema,
  allSchemas: Record<string, SchemaObject>,
  renames?: Map<string, string>,
): string {
  if (prop.$ref) {
    return renames?.get(prop.$ref) ?? prop.$ref;
  }

  switch (prop.type) {
    case "string":
      if (prop.enum) {
        return "Schema.String";
      }
      return "Schema.String";

    case "integer":
      return "Schema.Number";

    case "number":
      return "Schema.Number";

    case "boolean":
      return "Schema.Boolean";

    case "array":
      if (prop.items) {
        return `Schema.Array(${propertyToSchemaExpr(prop.items, allSchemas, renames)})`;
      }
      return "Schema.Array(Schema.Unknown)";

    case "object":
      if (prop.additionalProperties) {
        return `Schema.Record(Schema.String, ${propertyToSchemaExpr(prop.additionalProperties, allSchemas, renames)})`;
      }
      if (prop.properties) {
        const fields = Object.entries(prop.properties)
          .map(
            ([k, v]) =>
              `${safePropName(k)}: Schema.optional(${propertyToSchemaExpr(v, allSchemas, renames)})`,
          )
          .join(", ");
        return `Schema.Struct({ ${fields} })`;
      }
      return "Schema.Record(Schema.String, Schema.Unknown)";

    case "any":
      return "Schema.Unknown";

    default:
      return "Schema.Unknown";
  }
}

function schemaTypeToTs(schema: SchemaObject): string {
  switch (schema.type) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "any":
      return "unknown";
    default:
      return "unknown";
  }
}

function schemaTypeToSchemaExpr(schema: SchemaObject): string {
  switch (schema.type) {
    case "string":
      return "Schema.String";
    case "integer":
    case "number":
      return "Schema.Number";
    case "boolean":
      return "Schema.Boolean";
    case "any":
      return "Schema.Unknown";
    default:
      return "Schema.Unknown";
  }
}

// =============================================================================
// Error Generation
// =============================================================================

/**
 * Categories that imply the error carries a server-provided retry hint
 * (parsed from `Retry-After` / `RateLimit` headers). Errors in any of these
 * categories get an extra `retryAfter: Schema.optional(DurationSchema)` field
 * in their generated schema so SDK code can populate it from headers or body.
 */
const RETRYABLE_CATEGORIES = new Set([
  "Retryable",
  "ThrottlingError",
  "ServerError",
  "LockedError",
]);

/**
 * Standard 4xx status codes that GCP returns across every service. The error
 * dispatcher (`packages/gcp/src/client/api.ts`) routes purely on HTTP status,
 * so the same `{status → tag}` mapping is universally applicable. Patches in
 * `patches/{service}/{operation}.json` can still override the matchers (or
 * add additional tags) — they take precedence by virtue of being merged into
 * `allErrors` first.
 */
const STANDARD_4XX_TAG_TO_STATUS: Record<string, number> = {
  NotFound: 404,
  Forbidden: 403,
  BadRequest: 400,
  Conflict: 409,
};

/**
 * Method-keyed default 4xx errors. Reads (`GET`/`HEAD`) get the subset that
 * REST conventions actually surface; mutations get the full set. This mirrors
 * the per-operation patches that previously had to be hand-maintained
 * (cloudresourcemanager + container both encoded the same shape) — see
 * commit history for the patch files this replaces.
 */
function methodDefaultErrorTags(httpMethod: string): readonly string[] {
  switch (httpMethod.toUpperCase()) {
    case "GET":
    case "HEAD":
      return ["NotFound", "Forbidden"];
    case "POST":
    case "PUT":
    case "PATCH":
    case "DELETE":
      return ["NotFound", "Forbidden", "BadRequest", "Conflict"];
    default:
      return [];
  }
}

function generateErrorClass(
  tag: string,
  matchers: ErrorMatcher[],
  categories?: string[],
): string[] {
  const lines: string[] = [];
  const safeTag = safeIdentifier(tag);
  const isRetryable = !!categories?.some((c) => RETRYABLE_CATEGORIES.has(c));

  lines.push(
    `export class ${safeTag} extends Schema.TaggedErrorClass<${safeTag}>()(`,
  );
  lines.push(`  ${JSON.stringify(tag)},`);
  lines.push(`  {`);
  lines.push(`    code: Schema.optional(Schema.Number),`);
  lines.push(`    message: Schema.String,`);
  lines.push(`    status: Schema.optional(Schema.String),`);
  lines.push(`    reason: Schema.optional(Schema.String),`);
  lines.push(`    domain: Schema.optional(Schema.String),`);
  // GCP's standard error envelope includes a `details[]` array of
  // typed protobuf messages (QuotaFailure, ErrorInfo, etc.) keyed by
  // an `@type` URL. The shared `matchError` populates this on the
  // instance from the response body; declaring it here makes it
  // typed at every catch site.
  lines.push(`    details: Schema.optional(Schema.Array(Schema.Unknown)),`);
  if (isRetryable) {
    lines.push(`    retryAfter: Schema.optional(DurationSchema),`);
  }
  lines.push(`  },`);
  lines.push(`) {}`);

  // Apply error matchers
  lines.push(`T.applyErrorMatchers(${safeTag}, ${JSON.stringify(matchers)});`);

  // Apply categories if any
  if (categories && categories.length > 0) {
    for (const cat of categories) {
      lines.push(`C.with${cat}(${safeTag});`);
    }
  }

  return lines;
}

// =============================================================================
// Operation Generation
// =============================================================================

function generateOperation(
  op: CollectedOperation,
  allSchemas: Record<string, SchemaObject>,
  opPatch: OperationPatch,
  allErrors: Map<string, ErrorMatcher[]>,
  existingSchemaNames: Set<string>,
  schemaRenames: Map<string, string>,
): string[] {
  const lines: string[] = [];
  const fnName = op.functionName;
  let inputName = `${capitalize(fnName)}Request`;
  let outputName = `${capitalize(fnName)}Response`;

  // Avoid name collisions with existing schemas
  if (existingSchemaNames.has(inputName)) {
    inputName = `${inputName}_Op`;
  }
  if (existingSchemaNames.has(outputName)) {
    outputName = `${outputName}_Op`;
  }

  // Determine which error tags apply to this operation. Patches contribute
  // first (so a patch can introduce service-specific tags); the
  // method-keyed defaults from `methodDefaultErrorTags` are then unioned
  // in. Sets dedupe naturally — a patch and the default may both name
  // `NotFound`, and only one tag ends up in the union.
  const opErrorTags = new Set<string>();
  if (opPatch.errors) {
    for (const tag of Object.keys(opPatch.errors)) {
      opErrorTags.add(tag);
    }
  }
  for (const tag of methodDefaultErrorTags(op.httpMethod)) {
    opErrorTags.add(tag);
  }

  // Check for pagination
  const hasPagination =
    op.parameters.pageToken !== undefined ||
    Object.values(op.parameters).some(
      (p) => p.type === "string" && /pageToken/i.test(p.description ?? ""),
    );
  const responseSchema = op.responseRef
    ? allSchemas[op.responseRef]
    : undefined;
  const hasNextPageToken =
    responseSchema?.properties?.nextPageToken !== undefined;
  const hasItemsField = responseSchema?.properties?.items !== undefined;
  const isPaginated = hasPagination && hasNextPageToken;

  // Collect operation parameters (excluding global params)
  const opParams = Object.entries(op.parameters).filter(
    ([name]) =>
      ![
        "alt",
        "fields",
        "key",
        "oauth_token",
        "prettyPrint",
        "quotaUser",
        "userIp",
        "uploadType",
        "upload_protocol",
        "$.xgafv",
        "callback",
        "access_token",
      ].includes(name),
  );

  // Generate request interface (description goes on the operation, not the interface)
  lines.push(`export interface ${inputName} {`);
  for (const [paramName, param] of opParams) {
    const tsType = paramTypeToTs(param);
    const opt = param.required ? "" : "?";
    if (param.description) {
      lines.push(`  /** ${cleanDescription(param.description)} */`);
    }
    lines.push(`  ${safePropName(paramName)}${opt}: ${tsType};`);
  }
  // Resolve $ref names through renames
  const resolvedRequestRef = op.requestRef
    ? (schemaRenames.get(op.requestRef) ?? op.requestRef)
    : undefined;
  const resolvedResponseRef = op.responseRef
    ? (schemaRenames.get(op.responseRef) ?? op.responseRef)
    : undefined;

  // If there's a request body, add it
  if (resolvedRequestRef) {
    lines.push(`  /** Request body */`);
    lines.push(`  body?: ${resolvedRequestRef};`);
  }
  lines.push(`}`);
  lines.push("");

  // Generate request schema
  lines.push(
    `export const ${inputName} = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({`,
  );
  for (const [paramName, param] of opParams) {
    const schemaExpr = paramTypeToSchemaExpr(param);
    const traitPipe =
      param.location === "path"
        ? `.pipe(T.HttpPath(${JSON.stringify(paramName)}))`
        : `.pipe(T.HttpQuery(${JSON.stringify(paramName)}))`;

    if (param.required) {
      lines.push(`  ${safePropName(paramName)}: ${schemaExpr}${traitPipe},`);
    } else {
      lines.push(
        `  ${safePropName(paramName)}: Schema.optional(${schemaExpr})${traitPipe},`,
      );
    }
  }
  if (resolvedRequestRef) {
    lines.push(
      `  body: Schema.optional(${resolvedRequestRef}).pipe(T.HttpBody()),`,
    );
  }
  lines.push(`}).pipe(`);
  lines.push(
    `  T.Http({ method: ${JSON.stringify(op.httpMethod)}, path: ${JSON.stringify(op.path)}${resolvedRequestRef || op.httpMethod === "POST" || op.httpMethod === "PUT" || op.httpMethod === "PATCH" ? ", hasBody: true" : ""} }),`,
  );
  lines.push(`  svc,`);
  lines.push(`) as unknown as Schema.Schema<${inputName}>;`);
  lines.push("");

  // Generate response type and schema
  if (resolvedResponseRef) {
    lines.push(`export type ${outputName} = ${resolvedResponseRef};`);
    lines.push(
      `export const ${outputName} = /*@__PURE__*/ /*#__PURE__*/ ${resolvedResponseRef};`,
    );
  } else {
    lines.push(`export interface ${outputName} {}`);
    lines.push(
      `export const ${outputName}: Schema.Schema<${outputName}> = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}) as any as Schema.Schema<${outputName}>;`,
    );
  }
  lines.push("");

  // Generate error type
  const errorTags = [...opErrorTags];
  if (errorTags.length > 0) {
    lines.push(
      `export type ${capitalize(fnName)}Error = DefaultErrors | ${errorTags.map(safeIdentifier).join(" | ")};`,
    );
  } else {
    lines.push(`export type ${capitalize(fnName)}Error = DefaultErrors;`);
  }
  lines.push("");

  // Generate operation function
  const errorArrayExpr =
    errorTags.length > 0
      ? `[${errorTags.map(safeIdentifier).join(", ")}]`
      : "[]";

  const errorTypeName = `${capitalize(fnName)}Error`;

  // Add JSDoc description on the operation function
  if (op.description) {
    lines.push(`/** ${cleanDescription(op.description)} */`);
  }

  if (isPaginated) {
    lines.push(
      `export const ${fnName}: API.PaginatedOperationMethod<${inputName}, ${outputName}, ${errorTypeName}, Credentials | HttpClient.HttpClient> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({`,
    );
    lines.push(`  input: ${inputName},`);
    lines.push(`  output: ${outputName},`);
    lines.push(`  errors: ${errorArrayExpr},`);
    lines.push(`  pagination: {`);
    lines.push(`    inputToken: "pageToken",`);
    lines.push(`    outputToken: "nextPageToken",`);
    if (hasItemsField) {
      lines.push(`    items: "items",`);
    }
    lines.push(`  },`);
    lines.push(`}));`);
  } else {
    lines.push(
      `export const ${fnName}: API.OperationMethod<${inputName}, ${outputName}, ${errorTypeName}, Credentials | HttpClient.HttpClient> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({`,
    );
    lines.push(`  input: ${inputName},`);
    lines.push(`  output: ${outputName},`);
    lines.push(`  errors: ${errorArrayExpr},`);
    lines.push(`}));`);
  }

  return lines;
}

function paramTypeToTs(param: ParameterSchema): string {
  if (param.repeated) {
    return `${paramPrimitiveToTs(param)}[]`;
  }
  return paramPrimitiveToTs(param);
}

function paramPrimitiveToTs(param: ParameterSchema): string {
  if (param.enum) {
    return (
      param.enum.map((v) => JSON.stringify(v)).join(" | ") + " | (string & {})"
    );
  }
  switch (param.type) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    default:
      return "string";
  }
}

function paramTypeToSchemaExpr(param: ParameterSchema): string {
  if (param.repeated) {
    return `Schema.Array(${paramPrimitiveToSchemaExpr(param)})`;
  }
  return paramPrimitiveToSchemaExpr(param);
}

function paramPrimitiveToSchemaExpr(param: ParameterSchema): string {
  switch (param.type) {
    case "string":
      return "Schema.String";
    case "integer":
    case "number":
      return "Schema.Number";
    case "boolean":
      return "Schema.Boolean";
    default:
      return "Schema.String";
  }
}

// =============================================================================
// Operation Collection (from resources tree)
// =============================================================================

function collectOperations(doc: DiscoveryDoc): CollectedOperation[] {
  const ops: CollectedOperation[] = [];

  // Top-level methods
  if (doc.methods) {
    for (const [name, method] of Object.entries(doc.methods)) {
      ops.push(methodToOperation(name, method, [], doc));
    }
  }

  // Recursive resource traversal
  if (doc.resources) {
    collectResourceOperations(doc.resources, [], ops, doc);
  }

  return ops;
}

function collectResourceOperations(
  resources: Record<string, ResourceObject>,
  parentPath: string[],
  ops: CollectedOperation[],
  doc: DiscoveryDoc,
): void {
  for (const [resourceName, resource] of Object.entries(resources)) {
    const currentPath = [...parentPath, resourceName];

    if (resource.methods) {
      for (const [methodName, method] of Object.entries(resource.methods)) {
        ops.push(methodToOperation(methodName, method, currentPath, doc));
      }
    }

    if (resource.resources) {
      collectResourceOperations(resource.resources, currentPath, ops, doc);
    }
  }
}

function methodToOperation(
  methodName: string,
  method: MethodObject,
  resourcePath: string[],
  doc: DiscoveryDoc,
): CollectedOperation {
  // Compute function name from resource path + method name
  // Sanitize all parts to be valid TypeScript identifiers
  const safeName = safeIdentifier(methodName);
  const resourcePart =
    resourcePath.length > 0
      ? resourcePath.map((r) => capitalize(safeIdentifier(r))).join("")
      : "";
  const functionName = safeName + resourcePart;

  // Merge global parameters with method parameters
  const parameters: Record<string, ParameterSchema> = {};
  if (doc.parameters) {
    for (const [name, param] of Object.entries(doc.parameters)) {
      parameters[name] = param;
    }
  }
  if (method.parameters) {
    for (const [name, param] of Object.entries(method.parameters)) {
      parameters[name] = param;
    }
  }

  return {
    id: method.id,
    functionName,
    resourcePath,
    httpMethod: method.httpMethod,
    // Prefer `path` (templated, e.g. `v3/{+name}`) over `flatPath`
    // (documentation-only, e.g. `v3/projects/{projectsId}`). flatPath's
    // synthesized variable names don't match `parameters.*` keys, so
    // `T.HttpPath(<paramName>)` substitution would silently miss.
    path: method.path ?? method.flatPath,
    parameters,
    requestRef: method.request?.$ref,
    responseRef: method.response?.$ref,
    description: method.description,
    mediaUpload: method.mediaUpload,
    supportsMediaDownload: method.supportsMediaDownload,
  };
}

// =============================================================================
// Schema Topological Sort
// =============================================================================

function findRecursiveSchemas(
  schemas: Record<string, SchemaObject>,
): Set<string> {
  const recursive = new Set<string>();
  const deps = new Map<string, string[]>();

  // Build dependency map
  for (const [name, schema] of Object.entries(schemas)) {
    deps.set(name, collectSchemaDeps(schema));
  }

  // For each schema, check if there's a path back to itself (cycle detection via DFS)
  for (const name of Object.keys(schemas)) {
    const visited = new Set<string>();
    const stack = [...(deps.get(name) ?? [])];
    while (stack.length > 0) {
      const current = stack.pop()!;
      if (current === name) {
        recursive.add(name);
        break;
      }
      if (visited.has(current)) continue;
      visited.add(current);
      const currentDeps = deps.get(current);
      if (currentDeps) {
        stack.push(...currentDeps);
      }
    }
  }

  return recursive;
}

function topologicalSortSchemas(
  schemas: Record<string, SchemaObject>,
): [string, SchemaObject][] {
  const visited = new Set<string>();
  const sorted: [string, SchemaObject][] = [];

  function visit(name: string) {
    if (visited.has(name)) return;
    visited.add(name);

    const schema = schemas[name];
    if (!schema) return;

    // Visit dependencies
    const deps = collectSchemaDeps(schema);
    for (const dep of deps) {
      if (schemas[dep]) {
        visit(dep);
      }
    }

    sorted.push([name, schema]);
  }

  for (const name of Object.keys(schemas)) {
    visit(name);
  }

  return sorted;
}

function collectSchemaDeps(schema: SchemaObject): string[] {
  const deps: string[] = [];

  if (schema.properties) {
    for (const prop of Object.values(schema.properties)) {
      collectPropertyDeps(prop, deps);
    }
  }

  if (schema.items) {
    collectPropertyDeps(schema.items, deps);
  }

  if (schema.additionalProperties) {
    collectPropertyDeps(schema.additionalProperties, deps);
  }

  return deps;
}

function collectPropertyDeps(prop: PropertySchema, deps: string[]): void {
  if (prop.$ref) {
    deps.push(prop.$ref);
  }
  if (prop.items) {
    collectPropertyDeps(prop.items, deps);
  }
  if (prop.additionalProperties) {
    collectPropertyDeps(prop.additionalProperties, deps);
  }
  if (prop.properties) {
    for (const p of Object.values(prop.properties)) {
      collectPropertyDeps(p, deps);
    }
  }
}

// =============================================================================
// Utilities
// =============================================================================

function capitalize(s: string): string {
  if (!s) return s;
  return s[0]!.toUpperCase() + s.slice(1);
}

function safeIdentifier(name: string): string {
  // Replace dots, hyphens, spaces with underscores
  return name.replace(/[^a-zA-Z0-9_$]/g, "_");
}

function safePropName(name: string): string {
  // If name contains special chars, quote it
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
    return name;
  }
  return JSON.stringify(name);
}

function cleanDescription(desc: string): string {
  return desc
    .replace(/\*\//g, "* /")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
