/**
 * Shared OpenAPI Code Generator
 *
 * Handles OpenAPI 2.0 (Swagger), 3.0, and 3.1 specs.
 * Generates Effect Schema-based TypeScript operation files with:
 * - Input schemas with Http/PathParam/QueryParam traits
 * - Output schemas
 * - Typed error classes per operation
 * - JSDoc from spec descriptions
 *
 * Each SDK configures this generator with its own spec paths, import aliases,
 * and error handling strategy.
 *
 * @example
 * ```ts
 * import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";
 *
 * generateFromOpenAPI({
 *   specPath: "specs/openapi.json",
 *   patchDir: "patches",
 *   outputDir: "src/operations",
 *   importPrefix: "..",
 * });
 * ```
 */
import * as fs from "fs";
import * as path from "path";
import { applyAllPatches } from "../src/json-patch.ts";

const annotatePureExportConst = (definition: string) =>
  definition.replace(
    /^export const ([^=]+?)\s*=\s*/m,
    "export const $1 = /*@__PURE__*/ ",
  );

/** Quote a property name if it's not a valid JS identifier. */
function quotePropKey(name: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `"${name}"`;
}

// ============================================================================
// OpenAPI Types (unified across 2.0, 3.0, 3.1)
// ============================================================================

// --- Swagger 2.0 Types ---
interface Swagger2Spec {
  swagger: string;
  info: { title: string; version: string };
  basePath?: string;
  paths: Record<string, PathItem2>;
  definitions?: Record<string, SchemaObject>;
  "x-error-categories"?: Record<string, unknown>;
  "x-http-status-to-error-code"?: Record<string, string>;
}

interface PathItem2 {
  get?: Operation2;
  post?: Operation2;
  put?: Operation2;
  patch?: Operation2;
  delete?: Operation2;
  // Path-level parameters shared by every operation on this path (Swagger 2.0
  // allows these, and Kubernetes puts `namespace`/`name`/`pretty` here as
  // `$ref`s). They must be merged into each operation's own parameters.
  parameters?: Parameter2[];
}

interface Operation2 {
  operationId: string;
  summary?: string;
  description?: string;
  tags?: string[];
  parameters?: Parameter2[];
  responses: Record<string, Response2>;
  deprecated?: boolean;
}

interface Parameter2 {
  // A parameter may be a `$ref` into the spec's top-level `#/parameters`
  // dictionary instead of an inline definition (in which case `name`/`in` are
  // absent until resolved). Kubernetes uses this heavily.
  $ref?: string;
  name: string;
  in: "path" | "query" | "body" | "header";
  type?: string;
  required?: boolean;
  description?: string;
  default?: unknown;
  enum?: (string | number | boolean)[];
  schema?: SchemaObject;
}

interface Response2 {
  description: string;
  schema?: SchemaObject | { $ref: string };
}

// --- OpenAPI 3.x Types ---
interface OpenAPI3Spec {
  openapi: string;
  info: { title: string; version: string };
  servers?: Array<{ url: string }>;
  paths: Record<string, PathItem3>;
  components?: {
    schemas?: Record<string, SchemaObject>;
    responses?: Record<string, ResponseObject3>;
    parameters?: Record<string, ParameterObject3>;
  };
}

interface PathItem3 {
  get?: Operation3;
  post?: Operation3;
  put?: Operation3;
  patch?: Operation3;
  delete?: Operation3;
  parameters?: ParameterObject3[];
}

interface Operation3 {
  operationId: string;
  summary?: string;
  description?: string;
  tags?: string[];
  parameters?: ParameterObject3[];
  requestBody?: RequestBody3;
  responses: Record<string, ResponseObject3>;
  deprecated?: boolean;
}

interface ParameterObject3 {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required?: boolean;
  description?: string;
  schema?: SchemaObject;
  $ref?: string;
}

interface RequestBody3 {
  required?: boolean;
  content?: Record<string, MediaType3>;
  $ref?: string;
}

interface ResponseObject3 {
  description: string;
  content?: Record<string, MediaType3>;
  $ref?: string;
}

interface MediaType3 {
  schema?: SchemaObject;
}

// --- Shared Schema Object ---
interface SchemaObject {
  type?: string | string[]; // string[] for OAS 3.1 nullable syntax
  $ref?: string;
  properties?: Record<string, SchemaObject>;
  items?: SchemaObject;
  required?: string[];
  enum?: (string | number | boolean)[];
  additionalProperties?: boolean | SchemaObject;
  description?: string;
  default?: unknown;
  nullable?: boolean; // OAS 3.0
  "x-nullable"?: boolean; // Swagger 2.0
  "x-sensitive"?: boolean;
  allOf?: SchemaObject[];
  oneOf?: SchemaObject[];
  anyOf?: SchemaObject[];
  format?: string;
  minimum?: number;
  maximum?: number;
}

// ============================================================================
// Generator Configuration
// ============================================================================

export interface GeneratorConfig {
  /** Path to the OpenAPI spec file */
  specPath: string;
  /** Directory containing *.patch.json files (can be same as spec dir or separate) */
  patchDir: string;
  /** Output directory for generated files */
  outputDir: string;
  /** Import prefix for relative imports (e.g., ".." for operations/ -> src/) */
  importPrefix: string;
  /** Client import path (e.g., "../client") */
  clientImport?: string;
  /** Traits import path (e.g., "../traits" or "@distilled.cloud/core/traits") */
  traitsImport?: string;
  /** Sensitive import path */
  sensitiveImport?: string;
  /** Errors import path (for operation-specific error imports) */
  errorsImport?: string;
  /** Whether to include operation-specific error imports (default: true for Swagger, false for OAS 3.x) */
  includeOperationErrors?: boolean;
  /** Status codes to error class name mapping (only used when includeOperationErrors=true) */
  statusToErrorClass?: Record<string, string>;
  /** Default error status codes to exclude from operation-specific errors */
  defaultErrorStatuses?: Set<string>;
  /** Whether to skip deprecated operations (default: true) */
  skipDeprecated?: boolean;
  /**
   * Default `api-version` for versioned APIs (e.g. Azure ARM). When set, the
   * generator bakes `apiVersion` into each operation's `T.Http` trait (so the
   * client injects `?api-version=<value>` automatically) and omits the
   * `api-version` query parameter from the generated input schema.
   */
  apiVersion?: string;
}

// ============================================================================
// Utility Functions
// ============================================================================

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toCamelCase(s: string): string {
  return s
    .replace(/[-_\s]+([a-zA-Z])/g, (_, c) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9$]/g, "");
}

function toPascalCase(s: string): string {
  return capitalize(toCamelCase(s));
}

function operationIdToFunctionName(operationId: string): string {
  return toCamelCase(operationId);
}

function escapeStringLiteral(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/`/g, "\\`");
}

function renderEnumLiterals(
  values: readonly (string | number | boolean)[],
  type: string | undefined,
): string {
  const isNumeric = type === "integer" || type === "number";
  const isBoolean = type === "boolean";
  const literals = values
    .map((v) =>
      isBoolean || isNumeric
        ? String(v)
        : `"${escapeStringLiteral(String(v))}"`,
    )
    .join(", ");
  return `Schema.Literals([${literals}])`;
}

function renderParameterSchema3(
  schema: SchemaObject | undefined,
  spec: OpenAPI3Spec,
  ctx: SchemaGenerationContext,
): string {
  if (!schema) return "Schema.String";
  if (schema.enum && schema.enum.length > 0) {
    return renderEnumLiterals(schema.enum, schema.type);
  }
  return openApiTypeToEffectSchema(schema, spec, "", new Set(), ctx);
}

// ============================================================================
// Version Detection
// ============================================================================

type SpecVersion = "2.0" | "3.0" | "3.1";

function detectVersion(spec: any): SpecVersion {
  if (spec.swagger === "2.0") return "2.0";
  if (spec.openapi?.startsWith("3.1")) return "3.1";
  if (spec.openapi?.startsWith("3.0")) return "3.0";
  throw new Error(
    `Unsupported spec version: ${spec.swagger || spec.openapi || "unknown"}`,
  );
}

// ============================================================================
// Schema Resolution (version-aware)
// ============================================================================

function resolveRef(spec: any, ref: string): SchemaObject {
  // Generic JSON Pointer resolution for #/ refs
  if (ref.startsWith("#/")) {
    const segments = ref.slice(2).split("/");
    let current: any = spec;
    for (const segment of segments) {
      current = current?.[segment];
      if (current === undefined) {
        throw new Error(`Could not resolve ref: ${ref}`);
      }
    }
    return current;
  }
  throw new Error(`Could not resolve ref: ${ref}`);
}

function resolveParameterRef(spec: any, ref: string): ParameterObject3 {
  const refPath = ref.replace("#/components/parameters/", "");
  const param = spec.components?.parameters?.[refPath];
  if (!param) throw new Error(`Could not resolve parameter ref: ${ref}`);
  return param;
}

function resolveResponseRef(spec: any, ref: string): ResponseObject3 {
  const refPath = ref.replace("#/components/responses/", "");
  const response = spec.components?.responses?.[refPath];
  if (!response) throw new Error(`Could not resolve response ref: ${ref}`);
  return response;
}

/**
 * Merge a Swagger 2.0 path's path-level parameters with an operation's own
 * parameters, resolving any `$ref` entries (e.g. `#/parameters/namespace-…`)
 * to their inline definitions via the generic JSON-pointer resolver.
 *
 * Without this, `$ref` parameters — which carry no `in`/`name` until resolved —
 * are silently dropped by the downstream `p.in === "path"|"query"` filters, so
 * generated inputs omit path params (`namespace`/`name`) and ref'd query params
 * (`fieldManager`/`force`/`pretty`). Mirrors {@link resolveParameters3} for the
 * 2.0 codepath.
 */
function resolveParameters2(
  spec: Swagger2Spec,
  pathParams: Parameter2[] | undefined,
  operationParams: Parameter2[] | undefined,
): Parameter2[] {
  const params: Parameter2[] = [];
  const add = (param: Parameter2) => {
    params.push(
      param.$ref
        ? (resolveRef(spec as any, param.$ref) as unknown as Parameter2)
        : param,
    );
  };
  if (pathParams) for (const param of pathParams) add(param);
  if (operationParams) for (const param of operationParams) add(param);
  return params;
}

function isNullable(prop: SchemaObject): boolean {
  // OAS 3.1: type can be ["string", "null"]
  if (Array.isArray(prop.type) && prop.type.includes("null")) return true;
  // OAS 3.0: nullable: true
  if (prop.nullable) return true;
  // Swagger 2.0: x-nullable: true
  if (prop["x-nullable"]) return true;
  return false;
}

function getBaseType(prop: SchemaObject): string | undefined {
  if (Array.isArray(prop.type)) {
    return prop.type.find((t) => t !== "null");
  }
  return prop.type;
}

/**
 * Guards against combinatorial blow-up when inlining `oneOf`/`anyOf` unions.
 * Large recursive union graphs (e.g. PostHog's HogQL query AST) otherwise
 * expand into hundreds of MB of generated types. A union collapses to
 * `unknown` once it nests past `MAX_UNION_INLINE_DEPTH` `$ref` hops (bounds
 * build cost) or its rendered text exceeds `MAX_UNION_INLINE_CHARS` (bounds
 * the breadth of any single union node).
 */
const MAX_UNION_INLINE_DEPTH = 4;
const MAX_UNION_INLINE_CHARS = 4000;

/**
 * Whether every branch of a `oneOf`/`anyOf` is a scalar — a primitive,
 * an enum, or a pure-null branch — with no `$ref`, nested union, object, or
 * array. Such unions (e.g. `boolean | string`, `string | number`) are tiny
 * and finite, so the `MAX_UNION_INLINE_DEPTH` cutoff (which exists to bound
 * combinatorial blow-up of recursive *object* union graphs) must not collapse
 * them to `unknown`. Collapsing a `boolean | string` leaf just because it sits
 * deep in a response tree is what dropped Axiom's `showChart`/`chartHeight`.
 */
function isScalarUnion(branches: SchemaObject[], spec: OpenAPISpec): boolean {
  return branches.every((branch) => {
    if (isNullBranch(branch, spec)) return true;
    if (branch.$ref || branch.oneOf || branch.anyOf || branch.allOf) {
      return false;
    }
    if (branch.enum && branch.enum.length > 0) return true;
    const t = branch.type;
    return (
      t === "string" || t === "number" || t === "integer" || t === "boolean"
    );
  });
}

/**
 * A `oneOf`/`anyOf` branch that contributes only nullability — an explicit
 * `{ "type": "null" }` branch or a `$ref` to a null-only enum (PostHog's
 * `NullEnum` is `{ "enum": [null] }`). Such branches collapse into a
 * `Schema.NullOr` / `| null` wrapper rather than becoming a union member.
 */
function isNullBranch(branch: SchemaObject, spec: any): boolean {
  let b = branch;
  if (b.$ref) {
    b = resolveRef(spec, b.$ref);
  }
  if (b.type === "null") return true;
  if (Array.isArray(b.type) && b.type.every((t) => t === "null")) return true;
  if (
    Array.isArray(b.enum) &&
    b.enum.length > 0 &&
    b.enum.every((v) => v === null)
  ) {
    return true;
  }
  return false;
}

// ============================================================================
// Sensitive Field Detection
// ============================================================================

/**
 * Field name patterns that indicate sensitive data.
 * These patterns match common credential/secret field names across APIs.
 */
const SENSITIVE_FIELD_PATTERNS: RegExp[] = [
  /password/i,
  /^secret$/i,
  /secret[-_]?key/i,
  /[-_]secret$/i,
  /^client[-_]?secret$/i,
  /^access[-_]?token$/i,
  /^refresh[-_]?token$/i,
  /^api[-_]?key$/i,
  /^api[-_]?key[-_]?secret$/i,
  /^api[-_]?token$/i,
  /^private[-_]?key$/i,
  /^secret[-_]?access[-_]?key$/i,
  /^session[-_]?token$/i,
  /^access[-_]?key[-_]?id$/i,
  /^one[-_]?time[-_]?password$/i,
  /^connection[-_]?string$/i,
  /^connection[-_]?uri$/i,
  /^plain[-_]?text$/i,
  /^plain[-_]?text[-_]?refresh[-_]?token$/i,
];

/**
 * Check if a field name matches known sensitive data patterns.
 */
function isSensitiveFieldName(name: string): boolean {
  return SENSITIVE_FIELD_PATTERNS.some((pattern) => pattern.test(name));
}

// ============================================================================
// Effect Schema Generation
// ============================================================================

interface SchemaGenerationContext {
  // Whether to emit input-friendly Sensitive* (decoded type is the union
  // `A | Redacted<A>`) or output-strict SensitiveOutput* (decoded type is just
  // `Redacted<A>`). Output schemas should use the strict variant so consumers
  // never have to coerce. Defaults to "input" for backwards-compat callers
  // that don't pass a direction.
  direction?: "input" | "output";
  usesSensitiveString: boolean;
  usesSensitiveNullableString: boolean;
  usesSensitiveOutputString: boolean;
  usesSensitiveOutputNullableString: boolean;
}

function openApiTypeToEffectSchema(
  prop: SchemaObject,
  spec: any,
  indent: string = "",
  seenRefs: Set<string> = new Set(),
  ctx?: SchemaGenerationContext,
): string {
  // Handle $ref
  if (prop.$ref) {
    if (seenRefs.has(prop.$ref)) {
      return "Schema.Unknown"; // Prevent infinite recursion
    }
    const resolved = resolveRef(spec, prop.$ref);
    return openApiTypeToEffectSchema(
      resolved,
      spec,
      indent,
      new Set([...seenRefs, prop.$ref]),
      ctx,
    );
  }

  // Handle allOf - if it's a single entry referencing a non-object (enum,
  // scalar), resolve and pass through directly so we don't lose the type.
  // Otherwise merge object schemas.
  if (prop.allOf && prop.allOf.length > 0) {
    if (prop.allOf.length === 1) {
      let resolved = prop.allOf[0];
      if (resolved.$ref) {
        if (seenRefs.has(resolved.$ref)) return "Schema.Unknown";
        resolved = resolveRef(spec, resolved.$ref);
        // Recurse with the resolved schema. Carry over `description` and
        // nullability from the parent if set.
        const mergedProp: SchemaObject = {
          ...resolved,
          ...(prop.nullable !== undefined ? { nullable: prop.nullable } : {}),
          ...(prop["x-nullable"] !== undefined
            ? { "x-nullable": prop["x-nullable"] }
            : {}),
          ...(prop["x-sensitive"] !== undefined
            ? { "x-sensitive": prop["x-sensitive"] }
            : {}),
        };
        return openApiTypeToEffectSchema(
          mergedProp,
          spec,
          indent,
          new Set([...seenRefs, prop.allOf[0].$ref!]),
          ctx,
        );
      }
      // Inline schema — fall through to type/enum/object handling on `resolved`.
      return openApiTypeToEffectSchema(resolved, spec, indent, seenRefs, ctx);
    }

    const mergedProps: Record<string, SchemaObject> = {};
    const mergedRequired: string[] = [];

    for (const subSchema of prop.allOf) {
      let resolved = subSchema;
      if (subSchema.$ref) {
        resolved = resolveRef(spec, subSchema.$ref);
      }
      if (resolved.properties) {
        Object.assign(mergedProps, resolved.properties);
      }
      if (resolved.required) {
        mergedRequired.push(...resolved.required);
      }
    }

    const mergedSchema: SchemaObject = {
      type: "object",
      properties: mergedProps,
      required: [...new Set(mergedRequired)],
    };

    return generateStructSchema(mergedSchema, spec, indent, seenRefs, ctx);
  }

  // Handle oneOf/anyOf — emit a union of the branch schemas. Branches that
  // only express nullability (`{type:"null"}`, PostHog's `NullEnum`) collapse
  // into a `Schema.NullOr` wrapper instead of becoming a `Schema.Null` member.
  if (prop.oneOf || prop.anyOf) {
    // Bail out of deeply-nested unions. Inlining recursive union graphs (e.g.
    // PostHog's HogQL `query` AST) expands combinatorially into multi-hundred-MB
    // files; beyond a few `$ref` hops the precise shape isn't useful anyway.
    const unionBranches = (prop.oneOf ?? prop.anyOf)!;
    if (
      seenRefs.size > MAX_UNION_INLINE_DEPTH &&
      !isScalarUnion(unionBranches, spec)
    ) {
      return "Schema.Unknown";
    }
    const branches = unionBranches;
    let nullable = isNullable(prop);
    const members: string[] = [];
    for (const branch of branches) {
      if (isNullBranch(branch, spec)) {
        nullable = true;
        continue;
      }
      members.push(
        openApiTypeToEffectSchema(branch, spec, indent, seenRefs, ctx),
      );
    }
    const uniq = [...new Set(members)];
    if (uniq.length === 0) return "Schema.Null";
    const base =
      uniq.length === 1 ? uniq[0] : `Schema.Union([${uniq.join(", ")}])`;
    const result = nullable ? `Schema.NullOr(${base})` : base;
    return result.length > MAX_UNION_INLINE_CHARS ? "Schema.Unknown" : result;
  }

  // Handle enum
  if (prop.enum && prop.enum.length > 0) {
    const baseSchema = renderEnumLiterals(prop.enum, prop.type);
    return isNullable(prop) ? `Schema.NullOr(${baseSchema})` : baseSchema;
  }

  // Handle type
  const baseType = getBaseType(prop);
  let baseSchema: string;

  switch (baseType) {
    case "string":
      // Check for sensitive annotation
      if (prop["x-sensitive"]) {
        // For response schemas use the strict SensitiveOutput* variants so
        // the decoded type is `Redacted<string>` (no `string | Redacted<...>`
        // union). For request bodies keep the input-friendly Sensitive*
        // variants so callers can pass either form.
        const useStrict = ctx?.direction === "output";
        const nullable = isNullable(prop);
        if (ctx) {
          if (useStrict) {
            if (nullable) ctx.usesSensitiveOutputNullableString = true;
            else ctx.usesSensitiveOutputString = true;
          } else {
            if (nullable) ctx.usesSensitiveNullableString = true;
            else ctx.usesSensitiveString = true;
          }
        }
        if (useStrict) {
          baseSchema = nullable
            ? "SensitiveOutputNullableString"
            : "SensitiveOutputString";
        } else {
          baseSchema = nullable ? "SensitiveNullableString" : "SensitiveString";
        }
        return baseSchema; // Return early since Sensitive handles null
      }
      baseSchema = "Schema.String";
      break;
    case "integer":
    case "number":
      baseSchema = "Schema.Number";
      break;
    case "boolean":
      baseSchema = "Schema.Boolean";
      break;
    case "array":
      if (prop.items) {
        const itemSchema = openApiTypeToEffectSchema(
          prop.items,
          spec,
          indent,
          seenRefs,
          ctx,
        );
        baseSchema = `Schema.Array(${itemSchema})`;
      } else {
        baseSchema = "Schema.Array(Schema.Unknown)";
      }
      break;
    case "object":
      if (prop.properties) {
        baseSchema = generateStructSchema(prop, spec, indent, seenRefs, ctx);
      } else if (prop.additionalProperties) {
        if (typeof prop.additionalProperties === "boolean") {
          baseSchema = "Schema.Record(Schema.String, Schema.Unknown)";
        } else {
          const valueSchema = openApiTypeToEffectSchema(
            prop.additionalProperties,
            spec,
            indent,
            seenRefs,
            ctx,
          );
          baseSchema = `Schema.Record(Schema.String, ${valueSchema})`;
        }
      } else {
        baseSchema = "Schema.Unknown";
      }
      break;
    default:
      if (prop.properties) {
        baseSchema = generateStructSchema(prop, spec, indent, seenRefs, ctx);
      } else {
        baseSchema = "Schema.Unknown";
      }
      break;
  }

  return isNullable(prop) ? `Schema.NullOr(${baseSchema})` : baseSchema;
}

function generateStructSchema(
  schema: SchemaObject,
  spec: any,
  indent: string = "",
  seenRefs: Set<string> = new Set(),
  ctx?: SchemaGenerationContext,
): string {
  if (!schema.properties) return "Schema.Unknown";

  const required = new Set(schema.required || []);
  const lines: string[] = [];

  for (const [key, value] of Object.entries(schema.properties)) {
    // Auto-detect sensitive fields by name pattern (only for string types without explicit x-sensitive)
    const baseType = getBaseType(value);
    const isSensitiveByName =
      baseType === "string" &&
      !value["x-sensitive"] &&
      !value.enum &&
      isSensitiveFieldName(key);
    const effectiveValue = isSensitiveByName
      ? { ...value, "x-sensitive": true }
      : value;

    const fieldSchema = openApiTypeToEffectSchema(
      effectiveValue,
      spec,
      indent + "  ",
      seenRefs,
      ctx,
    );
    const isOptional = !required.has(key);
    const safeKey = quotePropKey(key);
    if (isOptional) {
      lines.push(`${indent}  ${safeKey}: Schema.optional(${fieldSchema}),`);
    } else {
      lines.push(`${indent}  ${safeKey}: ${fieldSchema},`);
    }
  }

  return `Schema.Struct({\n${lines.join("\n")}\n${indent}})`;
}

// ============================================================================
// TypeScript type printer
//
// Mirrors `openApiTypeToEffectSchema` but emits a TS *type* string instead of a
// runtime schema. Used to emit an explicit `interface`/`type` for every
// Input/Output schema so the generated const can be cast
// `... as unknown as Schema.Codec<Name>` instead of relying on the expensive
// `export type X = typeof X.Type` inference (which serializes the full
// `Schema.Struct<{...}>` into every `.d.ts` and forces consumers to
// re-instantiate `.Type`). Keeps the public type fully inlined and
// self-contained.
// ============================================================================

/** Sensitive decoded `.Type` mapping, kept in sync with `core/src/sensitive.ts`. */
function sensitiveTsType(
  direction: "input" | "output",
  nullable: boolean,
): string {
  if (direction === "output") {
    return nullable
      ? "Redacted.Redacted<string> | null"
      : "Redacted.Redacted<string>";
  }
  return nullable
    ? "string | Redacted.Redacted<string> | null"
    : "string | Redacted.Redacted<string>";
}

function openApiTypeToTsType(
  prop: SchemaObject,
  spec: any,
  seenRefs: Set<string> = new Set(),
  ctx?: SchemaGenerationContext,
): string {
  // $ref — resolve and inline (self-contained type, no private-name references).
  if (prop.$ref) {
    if (seenRefs.has(prop.$ref)) return "unknown";
    const resolved = resolveRef(spec, prop.$ref);
    return openApiTypeToTsType(
      resolved,
      spec,
      new Set([...seenRefs, prop.$ref]),
      ctx,
    );
  }

  // allOf — single passes through; multiple merge into one object.
  if (prop.allOf && prop.allOf.length > 0) {
    if (prop.allOf.length === 1) {
      let resolved = prop.allOf[0];
      if (resolved.$ref) {
        if (seenRefs.has(resolved.$ref)) return "unknown";
        const refKey = resolved.$ref;
        resolved = resolveRef(spec, refKey);
        const mergedProp: SchemaObject = {
          ...resolved,
          ...(prop.nullable !== undefined ? { nullable: prop.nullable } : {}),
          ...(prop["x-nullable"] !== undefined
            ? { "x-nullable": prop["x-nullable"] }
            : {}),
          ...(prop["x-sensitive"] !== undefined
            ? { "x-sensitive": prop["x-sensitive"] }
            : {}),
        };
        return openApiTypeToTsType(
          mergedProp,
          spec,
          new Set([...seenRefs, refKey]),
          ctx,
        );
      }
      return openApiTypeToTsType(resolved, spec, seenRefs, ctx);
    }
    const mergedProps: Record<string, SchemaObject> = {};
    const mergedRequired: string[] = [];
    for (const subSchema of prop.allOf) {
      let resolved = subSchema;
      if (subSchema.$ref) resolved = resolveRef(spec, subSchema.$ref);
      if (resolved.properties) Object.assign(mergedProps, resolved.properties);
      if (resolved.required) mergedRequired.push(...resolved.required);
    }
    return structObjectToTsType(
      {
        type: "object",
        properties: mergedProps,
        required: [...new Set(mergedRequired)],
      },
      spec,
      seenRefs,
      ctx,
    );
  }

  if (prop.oneOf || prop.anyOf) {
    const unionBranches = (prop.oneOf ?? prop.anyOf)!;
    if (
      seenRefs.size > MAX_UNION_INLINE_DEPTH &&
      !isScalarUnion(unionBranches, spec)
    ) {
      return "unknown";
    }
    const branches = unionBranches;
    let nullable = isNullable(prop);
    const members: string[] = [];
    for (const branch of branches) {
      if (isNullBranch(branch, spec)) {
        nullable = true;
        continue;
      }
      members.push(openApiTypeToTsType(branch, spec, seenRefs, ctx));
    }
    const uniq = [...new Set(members)];
    if (uniq.length === 0) return "null";
    const base = uniq.join(" | ");
    const result = nullable ? `${base} | null` : base;
    return result.length > MAX_UNION_INLINE_CHARS ? "unknown" : result;
  }

  if (prop.enum && prop.enum.length > 0) {
    const base = prop.enum
      .map((v) => (typeof v === "string" ? JSON.stringify(v) : String(v)))
      .join(" | ");
    return isNullable(prop) ? `${base} | null` : base;
  }

  const baseType = getBaseType(prop);
  let ts: string;
  switch (baseType) {
    case "string":
      if (prop["x-sensitive"]) {
        return sensitiveTsType(
          ctx?.direction === "output" ? "output" : "input",
          isNullable(prop),
        );
      }
      ts = "string";
      break;
    case "integer":
    case "number":
      ts = "number";
      break;
    case "boolean":
      ts = "boolean";
      break;
    case "array": {
      const item = prop.items
        ? openApiTypeToTsType(prop.items, spec, seenRefs, ctx)
        : "unknown";
      // Effect's `Schema.Array` decodes to `ReadonlyArray<T>`; mirror that in
      // the hand-written interface so consumers can pass `readonly T[]` values.
      ts = `ReadonlyArray<${item}>`;
      break;
    }
    case "object":
      if (prop.properties) {
        ts = structObjectToTsType(prop, spec, seenRefs, ctx);
      } else if (prop.additionalProperties) {
        const val =
          typeof prop.additionalProperties === "boolean"
            ? "unknown"
            : openApiTypeToTsType(
                prop.additionalProperties,
                spec,
                seenRefs,
                ctx,
              );
        ts = `Record<string, ${val}>`;
      } else {
        ts = "unknown";
      }
      break;
    default:
      ts = prop.properties
        ? structObjectToTsType(prop, spec, seenRefs, ctx)
        : "unknown";
      break;
  }
  return isNullable(prop) ? `${ts} | null` : ts;
}

/** Emit an inline `{ k: T; k2?: T2 }` object type for a struct schema. */
function structObjectToTsType(
  schema: SchemaObject,
  spec: any,
  seenRefs: Set<string>,
  ctx?: SchemaGenerationContext,
): string {
  if (!schema.properties) return "Record<string, unknown>";
  const required = new Set(schema.required || []);
  const parts: string[] = [];
  for (const [key, value] of Object.entries(schema.properties)) {
    const baseType = getBaseType(value);
    const isSensitiveByName =
      baseType === "string" &&
      !value["x-sensitive"] &&
      !value.enum &&
      isSensitiveFieldName(key);
    const effectiveValue = isSensitiveByName
      ? { ...value, "x-sensitive": true }
      : value;
    const tsType = openApiTypeToTsType(effectiveValue, spec, seenRefs, ctx);
    const opt = required.has(key) ? "" : "?";
    parts.push(`${quotePropKey(key)}${opt}: ${tsType}`);
  }
  return `{ ${parts.join("; ")} }`;
}

/**
 * Build an explicit `export interface`/`export type` declaration plus a
 * `Schema.Codec<Name>` cast appended to the schema const. The const code passed
 * in must NOT include the trailing `export type X = typeof X.Type` line.
 */
function emitTypedSchema(
  name: string,
  tsType: string,
  constCode: string,
): string {
  // Append the explicit cast to the schema const (before its terminating `;`).
  const castedConst = constCode.replace(
    /;\s*$/,
    ` as unknown as Schema.Codec<${name}>;`,
  );
  // Prefer an `interface` for *pure* object types (cheap, named) and a `type`
  // alias otherwise. A pure object literal both starts with `{` and ends with
  // `}` — this deliberately excludes array (`{...}[]`) and nullable
  // (`{...} | null`) shapes, which must stay `type` aliases.
  const decl = isSingleObjectLiteral(tsType)
    ? `export interface ${name} ${tsType}`
    : `export type ${name} = ${tsType};`;
  return `${decl}\n${castedConst}`;
}

/**
 * True only when `s` is a single object literal — i.e. its leading `{` closes
 * exactly at the trailing `}`. Excludes arrays (`{...}[]`), nullable shapes
 * (`{...} | null`) and unions of objects (`{...} | {...}`), all of which must
 * be emitted as `type` aliases rather than `interface` declarations.
 */
function isSingleObjectLiteral(s: string): boolean {
  const t = s.trim();
  if (!t.startsWith("{") || !t.endsWith("}")) return false;
  let depth = 0;
  let inStr: string | null = null;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (inStr) {
      if (c === inStr && t[i - 1] !== "\\") inStr = null;
      continue;
    }
    if (c === '"' || c === "'") {
      inStr = c;
    } else if (c === "{") {
      depth++;
    } else if (c === "}") {
      depth--;
      // The outermost object closed before the end → not a single literal.
      if (depth === 0 && i !== t.length - 1) return false;
    }
  }
  return true;
}

// ============================================================================
// JSDoc Generation
// ============================================================================

function escapeJsDoc(text: string): string {
  return text.replace(/\*\//g, "*\\/").replace(/\\/g, "\\\\");
}

function formatDescription(description: string | undefined): string[] {
  if (!description) return [];

  const lines = description.split("\n");
  const result: string[] = [];
  let inTable = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip authorization sections
    if (trimmed.startsWith("### Authorization")) {
      break;
    }

    // Skip markdown table markers
    if (trimmed.startsWith("|") || trimmed.startsWith("| :")) {
      inTable = true;
      continue;
    }

    if (inTable && !trimmed.startsWith("|")) {
      inTable = false;
    }

    if (!inTable && trimmed) {
      result.push(escapeJsDoc(trimmed));
    }
  }

  return result;
}

interface ParameterInfo {
  name: string;
  in: string;
  type?: string;
  required?: boolean;
  description?: string;
  enum?: (string | number | boolean)[];
  schema?: SchemaObject;
}

function generateJsDoc(
  summary: string | undefined,
  description: string | undefined,
  parameters: ParameterInfo[],
  bodyProperties?: Record<string, SchemaObject>,
): string {
  const lines: string[] = ["/**"];

  if (summary) {
    lines.push(` * ${escapeJsDoc(summary)}`);
  }

  const descLines = formatDescription(description);
  if (descLines.length > 0) {
    const descText = descLines.join(" ");
    if (descText !== summary) {
      if (summary) lines.push(" *");
      for (const line of descLines) {
        lines.push(` * ${line}`);
      }
    }
  }

  const documentedParams = parameters.filter(
    (p) => p.description && p.in !== "body",
  );
  if (documentedParams.length > 0) {
    lines.push(" *");
    for (const param of documentedParams) {
      const desc = escapeJsDoc(param.description || "");
      lines.push(` * @param ${param.name} - ${desc}`);
    }
  }

  // Document body properties
  if (bodyProperties) {
    for (const [key, value] of Object.entries(bodyProperties)) {
      if (value.description) {
        lines.push(` * @param ${key} - ${escapeJsDoc(value.description)}`);
      }
    }
  }

  lines.push(" */");

  if (lines.length === 2) {
    return "";
  }

  return lines.join("\n");
}

// ============================================================================
// Code Generation - Swagger 2.0
// ============================================================================

interface GeneratedOperation {
  fileName: string;
  code: string;
  functionName: string;
  exports: string[];
}

function generateInputSchemaSwagger(
  operationId: string,
  method: string,
  pathTemplate: string,
  parameters: Parameter2[],
  spec: Swagger2Spec,
  ctx?: SchemaGenerationContext,
  apiVersion?: string,
): { inputSchemaCode: string; inputSchemaName: string } {
  const inputSchemaName = `${toPascalCase(operationId)}Input`;
  const pathParams = parameters.filter((p) => p.in === "path");
  // When the api-version is baked into the Http trait, drop it as an input
  // field — the client injects it automatically.
  const queryParams = parameters.filter(
    (p) => p.in === "query" && !(apiVersion && p.name === "api-version"),
  );
  const bodyParam = parameters.find((p) => p.in === "body");

  const fields: string[] = [];
  // Parallel TS-type fields for the explicit input interface.
  const tsFields: string[] = [];
  const paramEnumTs = (
    values: (string | number | boolean)[],
    type: string | undefined,
  ): string =>
    values
      .map((v) =>
        type === "integer" || type === "number" || type === "boolean"
          ? String(v)
          : JSON.stringify(v),
      )
      .join(" | ");
  // Track emitted field names so later groups (query, body) don't redeclare a
  // name already taken by an earlier group. Path params win — without this, a
  // body field sharing a path param's name (e.g. `billingAccountId`) would be
  // emitted second and clobber the `T.PathParam()` binding.
  const usedNames = new Set<string>();

  // Path parameters
  for (const param of pathParams) {
    if (usedNames.has(param.name)) continue;
    usedNames.add(param.name);
    const baseSchema = param.enum
      ? renderEnumLiterals(param.enum, param.type)
      : param.type === "integer"
        ? "Schema.Number"
        : "Schema.String";
    fields.push(`  ${param.name}: ${baseSchema}.pipe(T.PathParam()),`);
    const tsBase = param.enum
      ? paramEnumTs(param.enum, param.type)
      : param.type === "integer"
        ? "number"
        : "string";
    tsFields.push(`${quotePropKey(param.name)}: ${tsBase}`);
  }

  // Query parameters
  for (const param of queryParams) {
    if (usedNames.has(param.name)) continue;
    usedNames.add(param.name);
    let schema = param.enum
      ? renderEnumLiterals(param.enum, param.type)
      : param.type === "integer" || param.type === "number"
        ? "Schema.Number"
        : param.type === "boolean"
          ? "Schema.Boolean"
          : "Schema.String";

    if (!param.required) {
      schema = `Schema.optional(${schema})`;
    }
    fields.push(`  ${param.name}: ${schema},`);
    const tsBase = param.enum
      ? paramEnumTs(param.enum, param.type)
      : param.type === "integer" || param.type === "number"
        ? "number"
        : param.type === "boolean"
          ? "boolean"
          : "string";
    tsFields.push(
      `${quotePropKey(param.name)}${param.required ? "" : "?"}: ${tsBase}`,
    );
  }

  // Body parameters
  if (bodyParam?.schema) {
    let bodySchema = bodyParam.schema;
    // Resolve a top-level `$ref` body (e.g. `{ $ref: "#/definitions/ResourceGroup" }`).
    // Without this, `bodySchema.properties` is undefined and the request body is
    // emitted empty — breaking create/update operations. Mirrors the OAS3 emitter.
    if (bodySchema.$ref) {
      bodySchema = resolveRef(
        spec as any,
        bodySchema.$ref,
      ) as typeof bodySchema;
    }
    // Flatten `allOf` so inherited properties surface as body fields.
    if (bodySchema.allOf && bodySchema.allOf.length > 0) {
      const mergedProps: Record<string, any> = {
        ...bodySchema.properties,
      };
      const mergedRequired: string[] = [...(bodySchema.required ?? [])];
      for (const subSchema of bodySchema.allOf) {
        const resolvedSub = subSchema.$ref
          ? (resolveRef(spec as any, subSchema.$ref) as any)
          : subSchema;
        if (resolvedSub.properties)
          Object.assign(mergedProps, resolvedSub.properties);
        if (resolvedSub.required) mergedRequired.push(...resolvedSub.required);
      }
      bodySchema = {
        ...bodySchema,
        type: "object",
        properties: mergedProps,
        required: [...new Set(mergedRequired)],
      } as typeof bodySchema;
    }
    if (bodySchema.properties) {
      const required = new Set(bodySchema.required || []);
      for (const [key, value] of Object.entries(bodySchema.properties)) {
        if (usedNames.has(key)) continue;
        usedNames.add(key);
        // Auto-detect sensitive fields by name pattern
        const bType = getBaseType(value);
        const isSensitiveByName =
          bType === "string" &&
          !value["x-sensitive"] &&
          !value.enum &&
          isSensitiveFieldName(key);
        const effectiveValue = isSensitiveByName
          ? { ...value, "x-sensitive": true }
          : value;

        let fieldSchema = openApiTypeToEffectSchema(
          effectiveValue,
          spec,
          "  ",
          new Set(),
          ctx,
        );
        const fieldTs = openApiTypeToTsType(
          effectiveValue,
          spec,
          new Set(),
          ctx,
        );
        if (!required.has(key)) {
          fieldSchema = `Schema.optional(${fieldSchema})`;
        }
        fields.push(`  ${quotePropKey(key)}: ${fieldSchema},`);
        tsFields.push(
          `${quotePropKey(key)}${required.has(key) ? "" : "?"}: ${fieldTs}`,
        );
      }
    }
  }

  const swaggerHttpTraitParts = [
    `method: "${method.toUpperCase()}"`,
    `path: "${pathTemplate}"`,
  ];
  if (apiVersion) {
    swaggerHttpTraitParts.push(`apiVersion: "${apiVersion}"`);
  }
  const inputSchemaCode = emitTypedSchema(
    inputSchemaName,
    `{ ${tsFields.join("; ")} }`,
    annotatePureExportConst(`export const ${inputSchemaName} = Schema.Struct({
${fields.join("\n")}
}).pipe(T.Http({ ${swaggerHttpTraitParts.join(", ")} }));`),
  );

  return { inputSchemaCode, inputSchemaName };
}

// ============================================================================
// Code Generation - OpenAPI 3.x
// ============================================================================

function resolveParameters3(
  spec: OpenAPI3Spec,
  pathParams: ParameterObject3[] | undefined,
  operationParams: ParameterObject3[] | undefined,
): ParameterObject3[] {
  const params: ParameterObject3[] = [];

  if (pathParams) {
    for (const param of pathParams) {
      if (param.$ref) {
        params.push(resolveParameterRef(spec, param.$ref));
      } else {
        params.push(param);
      }
    }
  }

  if (operationParams) {
    for (const param of operationParams) {
      if (param.$ref) {
        params.push(resolveParameterRef(spec, param.$ref));
      } else {
        params.push(param);
      }
    }
  }

  return params;
}

function generateInputSchema3(
  operationId: string,
  method: string,
  pathTemplate: string,
  parameters: ParameterObject3[],
  requestBodyParam: RequestBody3 | undefined,
  spec: OpenAPI3Spec,
  ctx?: SchemaGenerationContext,
  noFollowRedirect: boolean = false,
  apiVersion?: string,
): { inputSchemaCode: string; inputSchemaName: string } {
  // Resolve top-level $ref (e.g. #/components/requestBodies/Foo).
  const requestBody = requestBodyParam?.$ref
    ? (resolveRef(spec as any, requestBodyParam.$ref) as RequestBody3)
    : requestBodyParam;
  const inputSchemaName = `${toPascalCase(operationId)}Input`;
  const pathParams = parameters.filter((p) => p.in === "path");
  // When the api-version is baked into the Http trait, drop it as an input
  // field — the client injects it automatically.
  const queryParams = parameters.filter(
    (p) => p.in === "query" && !(apiVersion && p.name === "api-version"),
  );

  const fields: string[] = [];
  const tsFields: string[] = [];
  const paramSchemaTs = (schema: SchemaObject | undefined): string => {
    if (!schema) return "string";
    return openApiTypeToTsType(schema, spec, new Set(), ctx);
  };
  const usedNames = new Set<string>();

  // Path parameters
  for (const param of pathParams) {
    if (usedNames.has(param.name)) continue;
    usedNames.add(param.name);
    const schema = param.schema;
    const baseSchema =
      schema?.enum && schema.enum.length > 0
        ? renderEnumLiterals(schema.enum, schema.type)
        : schema?.type === "integer" || schema?.type === "number"
          ? "Schema.Number"
          : "Schema.String";
    fields.push(`  ${param.name}: ${baseSchema}.pipe(T.PathParam()),`);
    tsFields.push(`${quotePropKey(param.name)}: ${paramSchemaTs(schema)}`);
  }

  // Query parameters
  for (const param of queryParams) {
    if (usedNames.has(param.name)) continue;
    usedNames.add(param.name);
    const schema = param.schema;
    let schemaStr = renderParameterSchema3(schema, spec, ctx);

    if (!param.required) {
      schemaStr = `Schema.optional(${schemaStr})`;
    }
    fields.push(`  ${param.name}: ${schemaStr},`);
    tsFields.push(
      `${quotePropKey(param.name)}${param.required ? "" : "?"}: ${paramSchemaTs(schema)}`,
    );
  }

  // Request body — check for JSON, form-urlencoded, or multipart content
  let bodyContentType: string | undefined;
  if (requestBody?.content) {
    const jsonContent = requestBody.content["application/json"];
    const formContent =
      requestBody.content["application/x-www-form-urlencoded"];
    const multipartContent = requestBody.content["multipart/form-data"];
    const bodyContent = jsonContent ?? formContent ?? multipartContent;
    if (formContent && !jsonContent) {
      bodyContentType = "form-urlencoded";
    } else if (multipartContent && !jsonContent && !formContent) {
      bodyContentType = "multipart";
    }
    if (bodyContent?.schema) {
      let bodySchema = bodyContent.schema;
      // Unwrap chained `$ref`s (e.g. Polar's `CheckoutCreate` → `$ref`
      // `CheckoutProductsCreate`). Resolving only once leaves a bare-ref
      // schema with no `properties`/`oneOf`, degenerating to an empty body.
      const seenBodyRefs = new Set<string>();
      while (bodySchema.$ref && !seenBodyRefs.has(bodySchema.$ref)) {
        seenBodyRefs.add(bodySchema.$ref);
        bodySchema = resolveRef(spec, bodySchema.$ref);
      }

      // Flatten `allOf` so a body schema like `{ allOf: [BranchCreateRequest,
      // AnnotationCreateValueRequest] }` exposes the union of its sub-schemas'
      // properties as fields, instead of degenerating to an empty body.
      if (bodySchema.allOf && bodySchema.allOf.length > 0) {
        const mergedProps: Record<string, SchemaObject> = {
          ...bodySchema.properties,
        };
        const mergedRequired: string[] = [...(bodySchema.required ?? [])];
        for (const subSchema of bodySchema.allOf) {
          const resolvedSub = subSchema.$ref
            ? (resolveRef(spec, subSchema.$ref) as SchemaObject)
            : subSchema;
          if (resolvedSub.properties) {
            Object.assign(mergedProps, resolvedSub.properties);
          }
          if (resolvedSub.required) {
            mergedRequired.push(...resolvedSub.required);
          }
        }
        bodySchema = {
          ...bodySchema,
          type: "object",
          properties: mergedProps,
          required: [...new Set(mergedRequired)],
        };
      }

      // Flatten a top-level `oneOf`/`anyOf` request body — a discriminated
      // union like Polar's `CustomerCreate` / `ProductCreate` — into a single
      // permissive struct: the union of every branch's properties, marking a
      // field required only when it is required in EVERY branch (so a shared
      // field like `name` stays required while variant-only fields like
      // `email` / `recurring_interval` become optional). Without this a union
      // body has no `.properties` and degenerates to an EMPTY input schema —
      // the operation compiles but can never send its body.
      const bodyBranches = bodySchema.oneOf ?? bodySchema.anyOf;
      if (!bodySchema.properties && bodyBranches && bodyBranches.length > 0) {
        const mergedProps: Record<string, SchemaObject> = {};
        const requiredSets: Set<string>[] = [];
        for (const branch of bodyBranches) {
          const resolved = branch.$ref
            ? (resolveRef(spec, branch.$ref) as SchemaObject)
            : branch;
          const branchProps: Record<string, SchemaObject> = {
            ...resolved.properties,
          };
          const branchRequired: string[] = [...(resolved.required ?? [])];
          // A branch may itself be an `allOf` — merge those props too.
          for (const sub of resolved.allOf ?? []) {
            const resolvedSub = sub.$ref
              ? (resolveRef(spec, sub.$ref) as SchemaObject)
              : sub;
            if (resolvedSub.properties) {
              Object.assign(branchProps, resolvedSub.properties);
            }
            if (resolvedSub.required) {
              branchRequired.push(...resolvedSub.required);
            }
          }
          Object.assign(mergedProps, branchProps);
          requiredSets.push(new Set(branchRequired));
        }
        // Required only where required in every branch (intersection).
        const requiredEverywhere = Object.keys(mergedProps).filter((key) =>
          requiredSets.every((set) => set.has(key)),
        );
        bodySchema = {
          ...bodySchema,
          type: "object",
          properties: mergedProps,
          required: requiredEverywhere,
        };
      }

      if (bodySchema.properties) {
        const required = new Set(bodySchema.required || []);
        for (const [key, value] of Object.entries(bodySchema.properties)) {
          if (usedNames.has(key)) continue;
          usedNames.add(key);
          // Auto-detect sensitive fields by name pattern
          const bType = getBaseType(value);
          const isSensitiveByName =
            bType === "string" &&
            !value["x-sensitive"] &&
            !value.enum &&
            isSensitiveFieldName(key);
          const effectiveValue = isSensitiveByName
            ? { ...value, "x-sensitive": true }
            : value;

          let fieldSchema = openApiTypeToEffectSchema(
            effectiveValue,
            spec,
            "  ",
            new Set(),
            ctx,
          );
          const fieldTs = openApiTypeToTsType(
            effectiveValue,
            spec,
            new Set(),
            ctx,
          );
          if (!required.has(key)) {
            fieldSchema = `Schema.optional(${fieldSchema})`;
          }
          fields.push(`  ${quotePropKey(key)}: ${fieldSchema},`);
          tsFields.push(
            `${quotePropKey(key)}${required.has(key) ? "" : "?"}: ${fieldTs}`,
          );
        }
      }
    }
  }

  const httpTraitParts = [
    `method: "${method.toUpperCase()}"`,
    `path: "${pathTemplate}"`,
  ];
  if (bodyContentType) {
    httpTraitParts.push(`contentType: "${bodyContentType}"`);
  }
  if (apiVersion) {
    httpTraitParts.push(`apiVersion: "${apiVersion}"`);
  }

  // If the operation is marked as not following redirects (via the
  // detected 3xx-with-Location response or an `x-distilled-no-follow-redirect`
  // vendor extension), append the trait so the runtime client knows to
  // surface the 3xx and read the Location header.
  const traitChain = [`T.Http({ ${httpTraitParts.join(", ")} })`];
  if (noFollowRedirect) {
    traitChain.push(`T.NoFollowRedirect()`);
  }

  const inputSchemaCode = emitTypedSchema(
    inputSchemaName,
    `{ ${tsFields.join("; ")} }`,
    annotatePureExportConst(`export const ${inputSchemaName} = Schema.Struct({
${fields.join("\n")}
}).pipe(${traitChain.join(", ")});`),
  );

  return { inputSchemaCode, inputSchemaName };
}

// ============================================================================
// Shared Output Schema Generation
// ============================================================================

function getResponseSchema(
  spec: any,
  version: SpecVersion,
  responses: Record<string, any>,
): SchemaObject | null {
  const successResponse =
    responses["200"] || responses["201"] || responses["204"];
  if (!successResponse) return null;

  if (version === "2.0") {
    // Swagger 2.0
    if (!successResponse.schema) return null;
    if (successResponse.schema.$ref) {
      return resolveRef(spec, successResponse.schema.$ref);
    }
    return successResponse.schema;
  } else {
    // OAS 3.x
    let response = successResponse;
    if (response.$ref) {
      response = resolveResponseRef(spec, response.$ref);
    }
    const content = response.content;
    if (!content) return null;
    const jsonContent = content["application/json"];
    if (!jsonContent?.schema) return null;
    if (jsonContent.schema.$ref) {
      return resolveRef(spec, jsonContent.schema.$ref);
    }
    return jsonContent.schema;
  }
}

function generateOutputSchema(
  operationId: string,
  responseSchema: SchemaObject | null,
  spec: any,
): {
  outputSchemaCode: string;
  outputSchemaName: string;
  sensitiveImports: {
    usesSensitiveString: boolean;
    usesSensitiveNullableString: boolean;
    usesSensitiveOutputString: boolean;
    usesSensitiveOutputNullableString: boolean;
  };
} {
  const outputSchemaName = toPascalCase(operationId) + "Output";
  const ctx: SchemaGenerationContext = {
    direction: "output",
    usesSensitiveString: false,
    usesSensitiveNullableString: false,
    usesSensitiveOutputString: false,
    usesSensitiveOutputNullableString: false,
  };

  if (!responseSchema) {
    return {
      outputSchemaCode: emitTypedSchema(
        outputSchemaName,
        "void",
        `export const ${outputSchemaName} = /*@__PURE__*/ Schema.Void;`,
      ),
      outputSchemaName,
      sensitiveImports: {
        usesSensitiveString: false,
        usesSensitiveNullableString: false,
        usesSensitiveOutputString: false,
        usesSensitiveOutputNullableString: false,
      },
    };
  }

  // Handle array responses
  if (
    (responseSchema.type === "array" ||
      (Array.isArray(responseSchema.type) &&
        responseSchema.type.includes("array"))) &&
    responseSchema.items
  ) {
    const itemSchema = openApiTypeToEffectSchema(
      responseSchema.items,
      spec,
      "",
      new Set(),
      ctx,
    );
    const itemTs = openApiTypeToTsType(
      responseSchema.items,
      spec,
      new Set(),
      ctx,
    );
    return {
      outputSchemaCode: emitTypedSchema(
        outputSchemaName,
        `ReadonlyArray<${itemTs}>`,
        `export const ${outputSchemaName} = /*@__PURE__*/ Schema.Array(${itemSchema});`,
      ),
      outputSchemaName,
      sensitiveImports: {
        usesSensitiveString: ctx.usesSensitiveString,
        usesSensitiveNullableString: ctx.usesSensitiveNullableString,
        usesSensitiveOutputString: ctx.usesSensitiveOutputString,
        usesSensitiveOutputNullableString:
          ctx.usesSensitiveOutputNullableString,
      },
    };
  }

  const schemaCode = openApiTypeToEffectSchema(
    responseSchema,
    spec,
    "",
    new Set(),
    ctx,
  );
  const responseTs = openApiTypeToTsType(responseSchema, spec, new Set(), ctx);
  return {
    outputSchemaCode: emitTypedSchema(
      outputSchemaName,
      responseTs,
      `export const ${outputSchemaName} = /*@__PURE__*/ ${schemaCode};`,
    ),
    outputSchemaName,
    sensitiveImports: {
      usesSensitiveString: ctx.usesSensitiveString,
      usesSensitiveNullableString: ctx.usesSensitiveNullableString,
      usesSensitiveOutputString: ctx.usesSensitiveOutputString,
      usesSensitiveOutputNullableString: ctx.usesSensitiveOutputNullableString,
    },
  };
}

// ============================================================================
// Unified Operation Generation
// ============================================================================

function generateOperationCode(
  functionName: string,
  inputSchemaName: string,
  outputSchemaName: string,
  jsDoc: string,
  operationErrors: string[],
  sensitiveImports: {
    usesSensitiveString: boolean;
    usesSensitiveNullableString: boolean;
    usesSensitiveOutputString: boolean;
    usesSensitiveOutputNullableString: boolean;
  },
  config: GeneratorConfig,
): string {
  const clientImport = config.clientImport ?? `${config.importPrefix}/client`;
  const traitsImport = config.traitsImport ?? `${config.importPrefix}/traits`;
  const sensitiveImportPath =
    config.sensitiveImport ?? `${config.importPrefix}/sensitive`;
  const errorsImportPath =
    config.errorsImport ?? `${config.importPrefix}/errors`;

  const hasErrors = operationErrors.length > 0;
  const errorsLine = hasErrors
    ? `\n  errors: [${operationErrors.join(", ")}] as const,`
    : "";

  const operationCode = jsDoc
    ? `${jsDoc}
export const ${functionName} = /*@__PURE__*/ API.make(() => ({
  inputSchema: ${inputSchemaName},
  outputSchema: ${outputSchemaName},${errorsLine}
}));`
    : `export const ${functionName} = /*@__PURE__*/ API.make(() => ({
  inputSchema: ${inputSchemaName},
  outputSchema: ${outputSchemaName},${errorsLine}
}));`;

  let imports = `import * as Schema from "effect/Schema";
import { API } from "${clientImport}.ts";
import * as T from "${traitsImport}.ts";`;

  if (hasErrors) {
    imports += `\nimport { ${operationErrors.join(", ")} } from "${errorsImportPath}.ts";`;
  }

  const sensitiveTypesToImport: string[] = [];
  if (sensitiveImports.usesSensitiveString) {
    sensitiveTypesToImport.push("SensitiveString");
  }
  if (sensitiveImports.usesSensitiveNullableString) {
    sensitiveTypesToImport.push("SensitiveNullableString");
  }
  if (sensitiveImports.usesSensitiveOutputString) {
    sensitiveTypesToImport.push("SensitiveOutputString");
  }
  if (sensitiveImports.usesSensitiveOutputNullableString) {
    sensitiveTypesToImport.push("SensitiveOutputNullableString");
  }
  if (sensitiveTypesToImport.length > 0) {
    imports += `\nimport { ${sensitiveTypesToImport.join(", ")} } from "${sensitiveImportPath}.ts";`;
    // The explicit Input/Output type aliases reference `Redacted.Redacted<...>`
    // for sensitive fields (see openApiTypeToTsType / sensitiveTsType).
    imports += `\nimport * as Redacted from "effect/Redacted";`;
  }

  return [
    imports,
    "",
    "// Input Schema",
    "", // will be filled by caller
    "",
    "// Output Schema",
    "", // will be filled by caller
    "",
    "// The operation",
    operationCode,
    "",
  ].join("\n");
}

// ============================================================================
// Main Generator
// ============================================================================

export function generateFromOpenAPI(config: GeneratorConfig): void {
  const specPath = path.resolve(config.specPath);
  const patchDir = path.resolve(config.patchDir);
  const outputDir = path.resolve(config.outputDir);

  // Read spec
  const specContent = fs.readFileSync(specPath, "utf-8");
  const spec = JSON.parse(specContent);

  // Detect version
  const version = detectVersion(spec);

  // Apply patches
  const {
    applied,
    skipped: patchSkipped,
    errors: patchErrors,
  } = applyAllPatches(spec, patchDir);
  if (patchSkipped.length > 0) {
    console.warn("Skipped stale patch operations (target no longer in spec):");
    for (const msg of patchSkipped) {
      console.warn(`  ⚠ ${msg}`);
    }
  }
  if (patchErrors.length > 0) {
    console.error("Patch errors:");
    for (const msg of patchErrors) {
      console.error(`  ✗ ${msg}`);
    }
    process.exit(1);
  }

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Status-to-error-class mapping
  const statusToErrorClass = config.statusToErrorClass ?? {
    "400": "BadRequest",
    "403": "Forbidden",
    "404": "NotFound",
    "409": "Conflict",
    "422": "UnprocessableEntity",
  };
  const defaultErrorStatuses =
    config.defaultErrorStatuses ?? new Set(["401", "429", "500", "503"]);

  const includeOperationErrors =
    config.includeOperationErrors ?? version === "2.0";

  // Collect all operations
  const operations: GeneratedOperation[] = [];

  if (version === "2.0") {
    // Swagger 2.0 codepath
    const swagger = spec as Swagger2Spec;
    for (const [pathTemplate, pathItem] of Object.entries(swagger.paths)) {
      for (const method of ["get", "post", "put", "patch", "delete"] as const) {
        const operation = pathItem[method];
        if (!operation) continue;
        if (config.skipDeprecated !== false && operation.deprecated) {
          continue;
        }

        try {
          const functionName = operationIdToFunctionName(operation.operationId);
          // Merge path-level params and resolve `$ref`s before filtering by
          // `in` — otherwise ref'd path/query params are dropped.
          const parameters = resolveParameters2(
            swagger,
            pathItem.parameters,
            operation.parameters,
          );

          const jsDoc = generateJsDoc(
            operation.summary,
            operation.description,
            parameters.map((p) => ({
              name: p.name,
              in: p.in,
              type: p.type,
              required: p.required,
              description: p.description,
              enum: p.enum,
            })),
            parameters.find((p) => p.in === "body")?.schema?.properties,
          );

          const sensitiveCtx: SchemaGenerationContext = {
            direction: "input",
            usesSensitiveString: false,
            usesSensitiveNullableString: false,
            usesSensitiveOutputString: false,
            usesSensitiveOutputNullableString: false,
          };

          const { inputSchemaCode, inputSchemaName } =
            generateInputSchemaSwagger(
              operation.operationId,
              method,
              pathTemplate,
              parameters,
              swagger,
              sensitiveCtx,
              config.apiVersion,
            );

          const responseSchema = getResponseSchema(
            swagger,
            version,
            operation.responses,
          );
          const {
            outputSchemaCode,
            outputSchemaName,
            sensitiveImports: outputSensitiveImports,
          } = generateOutputSchema(
            operation.operationId,
            responseSchema,
            swagger,
          );
          const sensitiveImports = {
            usesSensitiveString:
              sensitiveCtx.usesSensitiveString ||
              outputSensitiveImports.usesSensitiveString,
            usesSensitiveNullableString:
              sensitiveCtx.usesSensitiveNullableString ||
              outputSensitiveImports.usesSensitiveNullableString,
            usesSensitiveOutputString:
              sensitiveCtx.usesSensitiveOutputString ||
              outputSensitiveImports.usesSensitiveOutputString,
            usesSensitiveOutputNullableString:
              sensitiveCtx.usesSensitiveOutputNullableString ||
              outputSensitiveImports.usesSensitiveOutputNullableString,
          };

          // Get operation-specific errors
          let operationErrors: string[] = [];
          if (includeOperationErrors) {
            for (const status of Object.keys(operation.responses)) {
              if (status.startsWith("2") || defaultErrorStatuses.has(status))
                continue;
              const errorClass = statusToErrorClass[status];
              if (errorClass) {
                operationErrors.push(errorClass);
              }
            }
          }

          const pagination = detectPagination(
            parameters as ParameterObject3[],
            responseSchema,
            spec,
          );

          const code = buildOperationFile(
            functionName,
            inputSchemaCode,
            inputSchemaName,
            outputSchemaCode,
            outputSchemaName,
            jsDoc,
            operationErrors,
            sensitiveImports,
            pagination,
            config,
          );

          operations.push({
            fileName: `${functionName}.ts`,
            code,
            functionName,
            exports: [inputSchemaName, outputSchemaName, functionName],
          });
        } catch (error) {
          console.error(`❌ ${operation.operationId}:`, error);
        }
      }
    }
  } else {
    // OpenAPI 3.x codepath
    const oas = spec as OpenAPI3Spec;
    for (const [pathTemplate, pathItem] of Object.entries(oas.paths)) {
      const pathLevelParams = pathItem.parameters;

      for (const method of ["get", "post", "put", "patch", "delete"] as const) {
        const operation = pathItem[method];
        if (!operation) continue;
        if (config.skipDeprecated !== false && operation.deprecated) {
          continue;
        }

        try {
          const functionName = operationIdToFunctionName(operation.operationId);
          const parameters = resolveParameters3(
            oas,
            pathLevelParams,
            operation.parameters,
          );

          const jsDoc = generateJsDoc(
            operation.summary,
            operation.description,
            parameters.map((p) => ({
              name: p.name,
              in: p.in,
              required: p.required,
              description: p.description,
            })),
          );

          const sensitiveCtx: SchemaGenerationContext = {
            direction: "input",
            usesSensitiveString: false,
            usesSensitiveNullableString: false,
            usesSensitiveOutputString: false,
            usesSensitiveOutputNullableString: false,
          };

          // Detect operations that should opt out of automatic redirect-
          // following. Two signals trigger the `T.NoFollowRedirect()` trait:
          //   1. An explicit `x-distilled-no-follow-redirect: true` vendor
          //      extension on the operation (lets a spec patch turn it on
          //      without requiring this generator to recognize the shape).
          //   2. A 3xx response that defines a Location header — the
          //      canonical OAuth/SSO authorize pattern where the URL the
          //      caller wants is in the Location, not the body.
          const opAny = operation as unknown as Record<string, unknown>;
          const has3xxLocation = Object.entries(operation.responses ?? {}).some(
            ([status, resp]) => {
              if (!status.startsWith("3")) return false;
              const respHeaders = (
                resp as { headers?: Record<string, unknown> }
              ).headers;
              return respHeaders !== undefined && "Location" in respHeaders;
            },
          );
          const noFollowRedirect =
            opAny["x-distilled-no-follow-redirect"] === true || has3xxLocation;

          const { inputSchemaCode, inputSchemaName } = generateInputSchema3(
            operation.operationId,
            method,
            pathTemplate,
            parameters,
            operation.requestBody,
            oas,
            sensitiveCtx,
            noFollowRedirect,
            config.apiVersion,
          );

          const responseSchema = getResponseSchema(
            oas,
            version,
            operation.responses,
          );
          const {
            outputSchemaCode,
            outputSchemaName,
            sensitiveImports: outputSensitiveImports,
          } = generateOutputSchema(operation.operationId, responseSchema, oas);
          const sensitiveImports = {
            usesSensitiveString:
              sensitiveCtx.usesSensitiveString ||
              outputSensitiveImports.usesSensitiveString,
            usesSensitiveNullableString:
              sensitiveCtx.usesSensitiveNullableString ||
              outputSensitiveImports.usesSensitiveNullableString,
            usesSensitiveOutputString:
              sensitiveCtx.usesSensitiveOutputString ||
              outputSensitiveImports.usesSensitiveOutputString,
            usesSensitiveOutputNullableString:
              sensitiveCtx.usesSensitiveOutputNullableString ||
              outputSensitiveImports.usesSensitiveOutputNullableString,
          };

          // Get operation-specific errors
          let operationErrors: string[] = [];
          if (includeOperationErrors) {
            for (const status of Object.keys(operation.responses)) {
              if (status.startsWith("2") || defaultErrorStatuses.has(status))
                continue;
              const errorClass = statusToErrorClass[status];
              if (errorClass) {
                operationErrors.push(errorClass);
              }
            }
          }

          const pagination = detectPagination(
            parameters as ParameterObject3[],
            responseSchema,
            spec,
          );

          const code = buildOperationFile(
            functionName,
            inputSchemaCode,
            inputSchemaName,
            outputSchemaCode,
            outputSchemaName,
            jsDoc,
            operationErrors,
            sensitiveImports,
            pagination,
            config,
          );

          operations.push({
            fileName: `${functionName}.ts`,
            code,
            functionName,
            exports: [inputSchemaName, outputSchemaName, functionName],
          });
        } catch (error) {
          console.error(`❌ ${operation.operationId}:`, error);
        }
      }
    }
  }

  // Write all operation files
  for (const op of operations) {
    const filePath = path.join(outputDir, op.fileName);
    fs.writeFileSync(filePath, op.code);
    console.log(`✅ ${op.functionName}`);
  }

  // Write barrel file
  const barrelPath = path.join(outputDir, "index.ts");
  const barrelContent =
    operations
      .map((op) => `export * from "./${op.functionName}.ts";`)
      .join("\n") + "\n";
  fs.writeFileSync(barrelPath, barrelContent);
}

// ============================================================================
// Helpers
// ============================================================================

/**
 * Detect cursor / page / token pagination on an operation by looking at the
 * input parameters and the (resolved) response schema.
 *
 * Returns the `pagination` trait to feed into `API.makePaginated`, or
 * `undefined` if the operation isn't paginated.
 */
function detectPagination(
  parameters: ParameterObject3[] | undefined,
  responseSchema: SchemaObject | null,
  spec: any,
):
  | {
      mode: "cursor" | "page" | "token";
      inputToken: string;
      outputToken: string;
      items: string;
    }
  | undefined {
  if (!responseSchema) return undefined;

  // Resolve the response schema if it's still a $ref (callers usually
  // pre-resolve, but be defensive).
  let resolved = responseSchema;
  if (resolved.$ref) {
    resolved = resolveRef(spec, resolved.$ref);
  }
  // Flatten allOf into a single property bag for inspection.
  let outputProps: Record<string, SchemaObject> = resolved.properties ?? {};
  if (resolved.allOf) {
    outputProps = { ...outputProps };
    for (const sub of resolved.allOf) {
      const r = sub.$ref ? (resolveRef(spec, sub.$ref) as SchemaObject) : sub;
      if (r.properties) Object.assign(outputProps, r.properties);
    }
  }

  // Find the next-page indicator on the output. Patterns we recognise:
  //   pagination.cursor  / pagination.next  -> cursor mode
  //   pagination.next_page                  -> page mode
  //   next_token / NextToken                -> token mode (top-level)
  //   next_page                             -> page mode (top-level)
  let outputToken: string | undefined;
  let mode: "cursor" | "page" | "token" | undefined;

  const paginationProp = outputProps.pagination;
  if (paginationProp) {
    let p = paginationProp;
    if (p.$ref) p = resolveRef(spec, p.$ref);
    const subProps = p.properties ?? {};
    if (subProps.cursor) {
      outputToken = "pagination.cursor";
      mode = "cursor";
    } else if (subProps.next) {
      outputToken = "pagination.next";
      mode = "cursor";
    } else if (subProps.next_page) {
      outputToken = "pagination.next_page";
      mode = "page";
    }
  }
  if (!outputToken) {
    for (const candidate of ["next_token", "NextToken", "nextToken"]) {
      if (outputProps[candidate]) {
        outputToken = candidate;
        mode = "token";
        break;
      }
    }
  }
  if (!outputToken) {
    if (outputProps.next_page) {
      outputToken = "next_page";
      mode = "page";
    }
  }
  if (!outputToken || !mode) return undefined;

  // Find the matching input token. The query/path/etc. parameter that
  // carries the cursor / page / next-token between requests.
  const cursorAliases = ["cursor", "page_token", "pageToken"];
  const tokenAliases = ["next_token", "NextToken", "nextToken"];
  const pageAliases = ["page"];
  const wanted =
    mode === "cursor"
      ? cursorAliases
      : mode === "token"
        ? tokenAliases
        : pageAliases;
  let inputToken: string | undefined;
  for (const param of parameters ?? []) {
    if (wanted.includes(param.name)) {
      inputToken = param.name;
      break;
    }
  }
  if (!inputToken) return undefined;

  // Items path: the first non-pagination array property at the top level.
  // For nested envelopes (e.g. `{ result: { items: [...] } }`) callers can
  // still hand-roll, but flat array fields like `projects`/`branches` work
  // automatically.
  let items: string | undefined;
  for (const [key, value] of Object.entries(outputProps)) {
    if (key === "pagination" || key === "next_token" || key === "NextToken")
      continue;
    let v = value;
    if (v.$ref) v = resolveRef(spec, v.$ref);
    if (v.type === "array") {
      items = key;
      break;
    }
  }
  if (!items) return undefined;

  return { mode, inputToken, outputToken, items };
}

function buildOperationFile(
  functionName: string,
  inputSchemaCode: string,
  inputSchemaName: string,
  outputSchemaCode: string,
  outputSchemaName: string,
  jsDoc: string,
  operationErrors: string[],
  sensitiveImports: {
    usesSensitiveString: boolean;
    usesSensitiveNullableString: boolean;
  },
  pagination:
    | {
        mode: "cursor" | "page" | "token";
        inputToken: string;
        outputToken: string;
        items: string;
      }
    | undefined,
  config: GeneratorConfig,
): string {
  const clientImport = config.clientImport ?? `${config.importPrefix}/client`;
  const traitsImport = config.traitsImport ?? `${config.importPrefix}/traits`;
  const sensitiveImportPath =
    config.sensitiveImport ?? `${config.importPrefix}/sensitive`;
  const errorsImportPath =
    config.errorsImport ?? `${config.importPrefix}/errors`;

  const hasErrors = operationErrors.length > 0;
  const errorsLine = hasErrors
    ? `\n  errors: [${operationErrors.join(", ")}] as const,`
    : "";

  const factory = pagination ? "makePaginated" : "make";
  const paginationLine = pagination
    ? `\n  pagination: { mode: "${pagination.mode}", inputToken: "${pagination.inputToken}", outputToken: "${pagination.outputToken}", items: "${pagination.items}" },`
    : "";

  const operationCode = jsDoc
    ? `${jsDoc}
export const ${functionName} = /*@__PURE__*/ API.${factory}(() => ({
  inputSchema: ${inputSchemaName},
  outputSchema: ${outputSchemaName},${errorsLine}${paginationLine}
}));`
    : `export const ${functionName} = /*@__PURE__*/ API.${factory}(() => ({
  inputSchema: ${inputSchemaName},
  outputSchema: ${outputSchemaName},${errorsLine}${paginationLine}
}));`;

  let imports = `import * as Schema from "effect/Schema";
import { API } from "${clientImport}.ts";
import * as T from "${traitsImport}.ts";`;

  if (hasErrors) {
    imports += `\nimport { ${operationErrors.join(", ")} } from "${errorsImportPath}.ts";`;
  }

  const sensitiveTypesToImport: string[] = [];
  if (sensitiveImports.usesSensitiveString) {
    sensitiveTypesToImport.push("SensitiveString");
  }
  if (sensitiveImports.usesSensitiveNullableString) {
    sensitiveTypesToImport.push("SensitiveNullableString");
  }
  if (sensitiveImports.usesSensitiveOutputString) {
    sensitiveTypesToImport.push("SensitiveOutputString");
  }
  if (sensitiveImports.usesSensitiveOutputNullableString) {
    sensitiveTypesToImport.push("SensitiveOutputNullableString");
  }
  if (sensitiveTypesToImport.length > 0) {
    imports += `\nimport { ${sensitiveTypesToImport.join(", ")} } from "${sensitiveImportPath}.ts";`;
    // The explicit Input/Output type aliases reference `Redacted.Redacted<...>`
    // for sensitive fields (see openApiTypeToTsType / sensitiveTsType).
    imports += `\nimport * as Redacted from "effect/Redacted";`;
  }

  return [
    imports,
    "",
    "// Input Schema",
    inputSchemaCode,
    "",
    "// Output Schema",
    outputSchemaCode,
    "",
    "// The operation",
    operationCode,
    "",
  ]
    .filter((line) => line !== undefined)
    .join("\n");
}
