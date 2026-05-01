/**
 * Shared GraphQL Code Generator
 *
 * Generates one Effect Schema-based operation file per GraphQL query and per
 * GraphQL mutation, driven by a standard GraphQL introspection JSON document
 * (the result of running the canonical `__schema` introspection query).
 *
 * Each generated operation file contains:
 * - A baked-in GraphQL query/mutation document string
 * - An input schema (the variables) with `T.Http({ method: "POST", path })` and
 *   `T.GraphQLOp({ query, operationName, type })` traits
 * - An output schema (the selected fields)
 * - The `API.make(() => ({ inputSchema, outputSchema }))` operation
 *
 * The runtime client (`@distilled.cloud/core/client`) detects the `GraphQLOp`
 * trait and (a) wraps the body as `{ query, operationName, variables }` and
 * (b) extracts the response from `data.<operationName>` (surfacing `errors[]`
 * via the SDK's `matchError`).
 *
 * @example
 * ```ts
 * import { generateFromGraphQL } from "@distilled.cloud/core/graphql/generate";
 *
 * generateFromGraphQL({
 *   schemaPath: "specs/introspection.json",
 *   outputDir: "src/operations",
 *   endpoint: "/graphql",
 * });
 * ```
 *
 * To produce an introspection JSON from a live endpoint:
 *
 * ```ts
 * import { introspectEndpoint } from "@distilled.cloud/core/graphql/generate";
 * await introspectEndpoint("https://api.example.com/graphql", {
 *   headers: { Authorization: "Bearer ..." },
 *   outputPath: "specs/introspection.json",
 * });
 * ```
 */
import * as fs from "fs";
import * as path from "path";

// ============================================================================
// GraphQL Introspection Types (subset of the canonical spec)
// ============================================================================

export type IntrospectionTypeKind =
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL";

export interface IntrospectionTypeRef {
  kind: IntrospectionTypeKind;
  name?: string | null;
  ofType?: IntrospectionTypeRef | null;
}

export interface IntrospectionInputValue {
  name: string;
  description?: string | null;
  type: IntrospectionTypeRef;
  defaultValue?: string | null;
}

export interface IntrospectionField {
  name: string;
  description?: string | null;
  args: IntrospectionInputValue[];
  type: IntrospectionTypeRef;
  isDeprecated?: boolean;
  deprecationReason?: string | null;
}

export interface IntrospectionEnumValue {
  name: string;
  isDeprecated?: boolean;
}

export interface IntrospectionType {
  kind: IntrospectionTypeKind;
  name: string;
  description?: string | null;
  fields?: IntrospectionField[] | null;
  inputFields?: IntrospectionInputValue[] | null;
  enumValues?: IntrospectionEnumValue[] | null;
  possibleTypes?: IntrospectionTypeRef[] | null;
  interfaces?: IntrospectionTypeRef[] | null;
}

export interface IntrospectionSchema {
  queryType: { name: string };
  mutationType?: { name: string } | null;
  subscriptionType?: { name: string } | null;
  types: IntrospectionType[];
}

export interface IntrospectionResponse {
  data?: { __schema: IntrospectionSchema };
  __schema?: IntrospectionSchema;
}

// ============================================================================
// Generator Configuration
// ============================================================================

export interface GraphQLGeneratorConfig {
  /** Path to introspection JSON file (the result of `__schema` query) */
  schemaPath: string;
  /** Output directory for generated operation files */
  outputDir: string;
  /** GraphQL endpoint path. Default: "/graphql" */
  endpoint?: string;
  /** Maximum depth when expanding object selection sets. Default: 3 */
  maxDepth?: number;
  /** Client import path. Default: "../client" */
  clientImport?: string;
  /** Traits import path. Default: "../traits" */
  traitsImport?: string;
  /** Skip a query field by name (return true to skip) */
  skipQuery?: (fieldName: string) => boolean;
  /** Skip a mutation field by name (return true to skip) */
  skipMutation?: (fieldName: string) => boolean;
  /** Skip deprecated fields. Default: true */
  skipDeprecated?: boolean;
  /** Custom scalar name → Effect Schema expression (e.g. { DateTime: "Schema.String" }) */
  customScalars?: Record<string, string>;
}

// ============================================================================
// Utility
// ============================================================================

const BUILTIN_SCALAR_TO_EFFECT: Record<string, string> = {
  String: "Schema.String",
  ID: "Schema.String",
  Int: "Schema.Number",
  Float: "Schema.Number",
  Boolean: "Schema.Boolean",
};

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toPascalCase(s: string): string {
  return capitalize(s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()));
}

function unwrapNonNull(t: IntrospectionTypeRef): {
  type: IntrospectionTypeRef;
  nonNull: boolean;
} {
  if (t.kind === "NON_NULL" && t.ofType) {
    return { type: t.ofType, nonNull: true };
  }
  return { type: t, nonNull: false };
}

/** Render a GraphQL type ref back to its SDL form (e.g. `[ID!]!`). */
function renderTypeRef(t: IntrospectionTypeRef): string {
  if (t.kind === "NON_NULL" && t.ofType) return `${renderTypeRef(t.ofType)}!`;
  if (t.kind === "LIST" && t.ofType) return `[${renderTypeRef(t.ofType)}]`;
  return t.name ?? "Unknown";
}

function quotePropKey(name: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `"${name}"`;
}

// ============================================================================
// Introspection helper (live endpoint → JSON file)
// ============================================================================

const INTROSPECTION_QUERY = `query IntrospectionQuery {
  __schema {
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types {
      ...FullType
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args { ...InputValue }
    type { ...TypeRef }
    isDeprecated
    deprecationReason
  }
  inputFields { ...InputValue }
  interfaces { ...TypeRef }
  enumValues(includeDeprecated: true) { name isDeprecated }
  possibleTypes { ...TypeRef }
}

fragment InputValue on __InputValue {
  name
  description
  type { ...TypeRef }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } }
      }
    }
  }
}`;

export interface IntrospectOptions {
  /** HTTP headers to send (e.g. auth) */
  headers?: Record<string, string>;
  /** File path to write the introspection JSON to */
  outputPath: string;
}

/**
 * Run the canonical introspection query against a live GraphQL endpoint and
 * write the result to disk. Use this from a `specs:fetch` script.
 */
export async function introspectEndpoint(
  url: string,
  options: IntrospectOptions,
): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options.headers ?? {}),
    },
    body: JSON.stringify({ query: INTROSPECTION_QUERY }),
  });

  if (!response.ok) {
    throw new Error(
      `Introspection request failed: ${response.status} ${response.statusText}`,
    );
  }

  const json = (await response.json()) as IntrospectionResponse;
  if (!json.data?.__schema) {
    throw new Error(
      `Introspection response missing data.__schema: ${JSON.stringify(json).slice(0, 500)}`,
    );
  }

  const dir = path.dirname(options.outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(options.outputPath, JSON.stringify(json, null, 2));
}

// ============================================================================
// Effect Schema Generation
// ============================================================================

interface SchemaCtx {
  typeMap: Map<string, IntrospectionType>;
  customScalars: Record<string, string>;
}

function scalarToEffect(name: string, ctx: SchemaCtx): string {
  if (BUILTIN_SCALAR_TO_EFFECT[name]) return BUILTIN_SCALAR_TO_EFFECT[name];
  if (ctx.customScalars[name]) return ctx.customScalars[name];
  return "Schema.Unknown";
}

function enumToEffect(t: IntrospectionType): string {
  const values = (t.enumValues ?? []).map((v) => `"${v.name}"`).join(", ");
  return values ? `Schema.Literals([${values}])` : "Schema.String";
}

/** Render a GraphQL output type ref as an Effect Schema, recursing into objects. */
function outputTypeToEffect(
  ref: IntrospectionTypeRef,
  selectedFields: SelectionField[] | undefined,
  ctx: SchemaCtx,
  indent: string,
  seen: Set<string>,
): string {
  const { type, nonNull } = unwrapNonNull(ref);

  let inner: string;
  if (type.kind === "LIST" && type.ofType) {
    const itemSchema = outputTypeToEffect(
      type.ofType,
      selectedFields,
      ctx,
      indent,
      seen,
    );
    inner = `Schema.Array(${itemSchema})`;
  } else if (type.kind === "SCALAR" && type.name) {
    inner = scalarToEffect(type.name, ctx);
  } else if (type.kind === "ENUM" && type.name) {
    const enumType = ctx.typeMap.get(type.name);
    inner = enumType ? enumToEffect(enumType) : "Schema.String";
  } else if (
    (type.kind === "OBJECT" || type.kind === "INTERFACE") &&
    type.name
  ) {
    if (seen.has(type.name)) {
      inner = "Schema.Unknown";
    } else {
      const fields = selectedFields ?? [];
      if (fields.length === 0) {
        inner = "Schema.Unknown";
      } else {
        const lines: string[] = [];
        const nextSeen = new Set([...seen, type.name]);
        for (const f of fields) {
          const fieldSchema = outputTypeToEffect(
            f.type,
            f.children,
            ctx,
            indent + "  ",
            nextSeen,
          );
          lines.push(`${indent}  ${quotePropKey(f.name)}: ${fieldSchema},`);
        }
        inner = `Schema.Struct({\n${lines.join("\n")}\n${indent}})`;
      }
    }
  } else if (type.kind === "UNION") {
    // Unions need fragment selection — keep it simple, accept anything.
    inner = "Schema.Unknown";
  } else {
    inner = "Schema.Unknown";
  }

  return nonNull ? inner : `Schema.NullOr(${inner})`;
}

/** Render a GraphQL input type ref as an Effect Schema (no selection — full shape). */
function inputTypeToEffect(
  ref: IntrospectionTypeRef,
  ctx: SchemaCtx,
  indent: string,
  seen: Set<string>,
): string {
  const { type, nonNull } = unwrapNonNull(ref);

  let inner: string;
  if (type.kind === "LIST" && type.ofType) {
    const itemSchema = inputTypeToEffect(type.ofType, ctx, indent, seen);
    inner = `Schema.Array(${itemSchema})`;
  } else if (type.kind === "SCALAR" && type.name) {
    inner = scalarToEffect(type.name, ctx);
  } else if (type.kind === "ENUM" && type.name) {
    const enumType = ctx.typeMap.get(type.name);
    inner = enumType ? enumToEffect(enumType) : "Schema.String";
  } else if (type.kind === "INPUT_OBJECT" && type.name) {
    if (seen.has(type.name)) {
      inner = "Schema.Unknown";
    } else {
      const inputType = ctx.typeMap.get(type.name);
      const fields = inputType?.inputFields ?? [];
      if (fields.length === 0) {
        inner = "Schema.Unknown";
      } else {
        const nextSeen = new Set([...seen, type.name]);
        const lines: string[] = [];
        for (const f of fields) {
          const { nonNull: fNonNull } = unwrapNonNull(f.type);
          const fieldSchema = inputTypeToEffect(
            f.type,
            ctx,
            indent + "  ",
            nextSeen,
          );
          const wrapped = fNonNull
            ? fieldSchema
            : `Schema.optional(${fieldSchema})`;
          lines.push(`${indent}  ${quotePropKey(f.name)}: ${wrapped},`);
        }
        inner = `Schema.Struct({\n${lines.join("\n")}\n${indent}})`;
      }
    }
  } else {
    inner = "Schema.Unknown";
  }

  return nonNull ? inner : `Schema.NullOr(${inner})`;
}

// ============================================================================
// Selection-set Expansion
// ============================================================================

interface SelectionField {
  name: string;
  type: IntrospectionTypeRef;
  children?: SelectionField[];
}

/**
 * Recursively expand the selection set for an object/interface return type up
 * to `maxDepth` levels. Scalars/enums become leaves. Cycles short-circuit by
 * tracking type names through `seen`.
 */
function expandSelection(
  ref: IntrospectionTypeRef,
  ctx: SchemaCtx,
  depth: number,
  maxDepth: number,
  seen: Set<string>,
): SelectionField[] | undefined {
  const { type } = unwrapNonNull(ref);

  if (type.kind === "LIST" && type.ofType) {
    return expandSelection(type.ofType, ctx, depth, maxDepth, seen);
  }

  if (type.kind !== "OBJECT" && type.kind !== "INTERFACE") return undefined;
  if (!type.name) return undefined;
  if (seen.has(type.name)) return undefined;
  if (depth > maxDepth) return undefined;

  const concrete = ctx.typeMap.get(type.name);
  if (!concrete?.fields) return undefined;

  const nextSeen = new Set([...seen, type.name]);
  const result: SelectionField[] = [];

  for (const field of concrete.fields) {
    // Skip fields that themselves require args — without user input we can't
    // safely populate them, so we just don't select them.
    if (field.args && field.args.length > 0) continue;

    const { type: fieldType } = unwrapNonNull(field.type);
    let actualType = fieldType;
    if (actualType.kind === "LIST" && actualType.ofType) {
      actualType = unwrapNonNull(actualType.ofType).type;
    }

    let children: SelectionField[] | undefined;
    if (actualType.kind === "OBJECT" || actualType.kind === "INTERFACE") {
      children = expandSelection(
        field.type,
        ctx,
        depth + 1,
        maxDepth,
        nextSeen,
      );
      if (!children || children.length === 0) {
        // Can't recurse further — skip nested object fields beyond depth.
        continue;
      }
    } else if (actualType.kind === "UNION") {
      // Unions need fragments to select fields — skip for the generic generator.
      continue;
    }

    result.push({ name: field.name, type: field.type, children });
  }

  return result;
}

/** Render a SelectionField list as a GraphQL selection set string. */
function renderSelectionSet(fields: SelectionField[], indent: string): string {
  const lines: string[] = [];
  for (const f of fields) {
    if (f.children && f.children.length > 0) {
      lines.push(
        `${indent}${f.name} {\n${renderSelectionSet(f.children, indent + "  ")}\n${indent}}`,
      );
    } else {
      lines.push(`${indent}${f.name}`);
    }
  }
  return lines.join("\n");
}

// ============================================================================
// Operation Document Generation
// ============================================================================

function buildOperationDocument(
  type: "query" | "mutation",
  fieldName: string,
  args: IntrospectionInputValue[],
  selection: SelectionField[] | undefined,
): string {
  const varDefs = args
    .map((a) => `$${a.name}: ${renderTypeRef(a.type)}`)
    .join(", ");
  const argList = args.map((a) => `${a.name}: $${a.name}`).join(", ");

  const header = varDefs
    ? `${type} ${fieldName}(${varDefs})`
    : `${type} ${fieldName}`;

  const fieldCall = argList ? `${fieldName}(${argList})` : fieldName;

  if (selection && selection.length > 0) {
    const body = renderSelectionSet(selection, "    ");
    return `${header} {\n  ${fieldCall} {\n${body}\n  }\n}`;
  }
  return `${header} {\n  ${fieldCall}\n}`;
}

// ============================================================================
// Operation File Generation
// ============================================================================

interface GeneratedOperation {
  fileName: string;
  functionName: string;
  code: string;
}

/**
 * A path through the GraphQL schema from a Query/Mutation root to a leaf
 * operation. For top-level operations the path has one segment; for ones
 * that go through a namespace object (e.g. `channels.byId`) it has multiple.
 */
interface OperationStep {
  /** The GraphQL field name at this step. */
  name: string;
  /** Args declared on this step's field. */
  args: IntrospectionInputValue[];
  /** Return type of this step's field (the parent's selection). */
  returnType: IntrospectionTypeRef;
}

/**
 * Decide how to emit operations for a top-level Query/Mutation field.
 *
 * - If selection-set expansion produces real subfields (the field's return
 *   type has scalar/non-arg-required fields), emit a single op for this path.
 * - If the field's return type is an OBJECT/INTERFACE whose subfields all
 *   require args (a "namespace" pattern, common in EAS / Shopify-style
 *   schemas), recurse into each subfield and emit one op per leaf.
 * - Otherwise emit one op for the field directly (scalar/enum return types).
 *
 * Returns `OperationStep[][]` — each inner array is one path. Recursion is
 * bounded by `maxNamespaceDepth` so a misshapen schema can't blow the stack.
 */
function collectOperationPaths(
  field: IntrospectionField,
  parentChain: OperationStep[],
  ctx: SchemaCtx,
  maxNamespaceDepth: number,
  skipDeprecated: boolean,
): OperationStep[][] {
  const step: OperationStep = {
    name: field.name,
    args: field.args ?? [],
    returnType: field.type,
  };
  const chain = [...parentChain, step];

  // Try to expand the selection set on this field's return type. If we get a
  // real selection (something other than namespace-of-arg-only-fields), emit
  // a single op terminating here.
  const selection = expandSelection(field.type, ctx, 1, 3, new Set());

  if (selection && selection.length > 0) {
    return [chain];
  }

  // No selection: this is either a namespace-style field or a scalar leaf.
  // Determine which from the return type.
  const { type: returnType } = unwrapNonNull(field.type);
  let actualReturn = returnType;
  if (actualReturn.kind === "LIST" && actualReturn.ofType) {
    actualReturn = unwrapNonNull(actualReturn.ofType).type;
  }

  const isObject =
    (actualReturn.kind === "OBJECT" || actualReturn.kind === "INTERFACE") &&
    !!actualReturn.name;

  // If we've recursed too deep, give up and emit the chain as-is. The
  // generated query will still be syntactically valid (returning an empty
  // object selection) and Schema.Unknown lets callers introspect raw.
  if (!isObject || chain.length >= maxNamespaceDepth) {
    return [chain];
  }

  const namespaceType = ctx.typeMap.get(actualReturn.name!);
  if (!namespaceType?.fields || namespaceType.fields.length === 0) {
    return [chain];
  }

  // Recurse into each subfield. We collect ALL leaves (not just the
  // arg-taking ones) because some namespace types may mix arg-required and
  // arg-free subfields — e.g. `account: { name: String, byId(id: ID!): X }`.
  const paths: OperationStep[][] = [];
  for (const subfield of namespaceType.fields) {
    if (skipDeprecated && subfield.isDeprecated) continue;
    paths.push(
      ...collectOperationPaths(
        subfield,
        chain,
        ctx,
        maxNamespaceDepth,
        skipDeprecated,
      ),
    );
  }

  // If recursion produced nothing (every subfield was deprecated, etc.),
  // fall back to emitting the parent.
  return paths.length > 0 ? paths : [chain];
}

/**
 * Build the operation function name from a path. Single-step paths use the
 * field name as-is (e.g. `appByAppId`). Multi-step paths concatenate with
 * each step after the first capitalized (e.g. `channels.byId` →
 * `channelsById`).
 */
function pathToFunctionName(path: OperationStep[]): string {
  if (path.length === 0) throw new Error("empty path");
  if (path.length === 1) return path[0].name;
  return (
    path[0].name + path.slice(1).map((s) => toPascalCase(s.name)).join("")
  );
}

/**
 * Build the GraphQL document string for an operation walking through `path`.
 * Variables are scoped to the OUTER operation; each step that has args
 * references those variables by name. Variable name collisions across path
 * segments are resolved by prefixing later segments with their step name.
 */
function buildPathDocument(
  type: "query" | "mutation",
  operationName: string,
  path: OperationStep[],
  selection: SelectionField[] | undefined,
  argRenames: Map<string, string>,
): string {
  // Build the variable definitions list — one entry per (step, arg) pair
  // using the renamed variable names so they're unique across the path.
  const varDefs: string[] = [];
  for (const step of path) {
    for (const arg of step.args) {
      const varName = argRenames.get(`${step.name}.${arg.name}`) ?? arg.name;
      varDefs.push(`$${varName}: ${renderTypeRef(arg.type)}`);
    }
  }

  const header = varDefs.length
    ? `${type} ${operationName}(${varDefs.join(", ")})`
    : `${type} ${operationName}`;

  // Build the nested field call chain from outermost to innermost.
  // We render leaf-first inside-out so the body is straightforward.
  const renderStep = (
    step: OperationStep,
    inner: string,
    indent: string,
  ): string => {
    const argList = step.args
      .map((arg) => {
        const varName =
          argRenames.get(`${step.name}.${arg.name}`) ?? arg.name;
        return `${arg.name}: $${varName}`;
      })
      .join(", ");
    const call = argList ? `${step.name}(${argList})` : step.name;
    return `${indent}${call} {\n${inner}\n${indent}}`;
  };

  // Innermost selection set (or empty if none).
  let body: string;
  const innerIndent = "  ".repeat(path.length + 1);
  if (selection && selection.length > 0) {
    body = renderSelectionSet(selection, innerIndent);
  } else {
    // No selectable subfields — fall back to __typename so the document is
    // always valid syntactically.
    body = `${innerIndent}__typename`;
  }

  // Wrap inside-out through the path.
  let nested = body;
  for (let i = path.length - 1; i >= 0; i--) {
    const indent = "  ".repeat(i + 1);
    nested = renderStep(path[i], nested, indent);
  }

  return `${header} {\n${nested}\n}`;
}

function generateOperation(
  path: OperationStep[],
  type: "query" | "mutation",
  ctx: SchemaCtx,
  config: GraphQLGeneratorConfig,
  description?: string | null,
): GeneratedOperation {
  const functionName = pathToFunctionName(path);
  const PascalName = toPascalCase(functionName);
  const inputName = `${PascalName}Input`;
  const outputName = `${PascalName}Output`;

  // ---- Resolve arg name collisions across path segments ----
  // If two segments have args with the same name (e.g. `id`), rename later
  // ones with their step-name as prefix so they remain unique GraphQL vars.
  const argRenames = new Map<string, string>(); // "step.argName" → "renamedVar"
  const usedVarNames = new Set<string>();
  for (const step of path) {
    for (const arg of step.args) {
      let varName = arg.name;
      if (usedVarNames.has(varName)) {
        varName = `${step.name}${toPascalCase(arg.name)}`;
        let i = 2;
        while (usedVarNames.has(varName)) {
          varName = `${step.name}${toPascalCase(arg.name)}${i++}`;
        }
      }
      usedVarNames.add(varName);
      argRenames.set(`${step.name}.${arg.name}`, varName);
    }
  }

  // ---- Input schema (variables) ----
  const inputFieldLines: string[] = [];
  for (const step of path) {
    for (const arg of step.args) {
      const varName = argRenames.get(`${step.name}.${arg.name}`)!;
      const { nonNull } = unwrapNonNull(arg.type);
      const argSchema = inputTypeToEffect(arg.type, ctx, "  ", new Set());
      const wrapped = nonNull ? argSchema : `Schema.optional(${argSchema})`;
      inputFieldLines.push(`  ${quotePropKey(varName)}: ${wrapped},`);
    }
  }

  // ---- Output schema (selection set on the leaf step's return type) ----
  const leaf = path[path.length - 1];
  const maxDepth = config.maxDepth ?? 3;
  const selection = expandSelection(leaf.returnType, ctx, 1, maxDepth, new Set());
  const outputSchemaBody = outputTypeToEffect(
    leaf.returnType,
    selection,
    ctx,
    "",
    new Set(),
  );

  // ---- GraphQL document ----
  const document = buildPathDocument(
    type,
    functionName,
    path,
    selection,
    argRenames,
  );

  // ---- File contents ----
  const endpoint = config.endpoint ?? "/graphql";
  const clientImport = config.clientImport ?? "../client";
  const traitsImport = config.traitsImport ?? "../traits";

  const docDescription = description
    ? `/**\n * ${description.split("\n").join("\n * ")}\n */\n`
    : "";

  const inputSchemaCode =
    inputFieldLines.length > 0
      ? `Schema.Struct({\n${inputFieldLines.join("\n")}\n})`
      : `Schema.Struct({})`;

  // Walk path from `data` to extract the leaf result. Always set, since the
  // runtime client now leaves all unwrapping to `T.ResponsePath`.
  const responsePath = path.map((s) => s.name).join(".");

  const code = `import * as Schema from "effect/Schema";
import { API } from "${clientImport}.ts";
import * as T from "${traitsImport}.ts";

const __document = ${JSON.stringify(document)};

// Input Schema (GraphQL variables)
export const ${inputName} = ${inputSchemaCode}.pipe(
  T.Http({ method: "POST", path: ${JSON.stringify(endpoint)} }),
  T.GraphQLOp({
    query: __document,
    operationName: ${JSON.stringify(functionName)},
    type: ${JSON.stringify(type)},
  }),
);
export type ${inputName} = typeof ${inputName}.Type;

// Output Schema (GraphQL selection set)
export const ${outputName} = ${outputSchemaBody}.pipe(
  T.ResponsePath(${JSON.stringify(responsePath)}),
);
export type ${outputName} = typeof ${outputName}.Type;

${docDescription}export const ${functionName} = API.make(() => ({
  inputSchema: ${inputName},
  outputSchema: ${outputName},
}));
`;

  return { fileName: `${functionName}.ts`, functionName, code };
}

// ============================================================================
// Main Generator
// ============================================================================

export function generateFromGraphQL(config: GraphQLGeneratorConfig): void {
  const schemaPath = path.resolve(config.schemaPath);
  const outputDir = path.resolve(config.outputDir);

  // Load introspection JSON
  const raw = fs.readFileSync(schemaPath, "utf-8");
  const parsed = JSON.parse(raw) as IntrospectionResponse;
  const schema = parsed.data?.__schema ?? parsed.__schema;

  if (!schema) {
    throw new Error(
      `Introspection JSON at ${schemaPath} has neither data.__schema nor __schema at the top level`,
    );
  }

  // Build type lookup
  const typeMap = new Map<string, IntrospectionType>();
  for (const t of schema.types) {
    typeMap.set(t.name, t);
  }

  const ctx: SchemaCtx = {
    typeMap,
    customScalars: config.customScalars ?? {},
  };

  // Ensure output dir exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const operations: GeneratedOperation[] = [];
  const skipDeprecated = config.skipDeprecated ?? true;
  const maxNamespaceDepth = 3; // top-level → namespace → leaf is the common case
  const seenNames = new Set<string>();

  const emitOps = (
    rootField: IntrospectionField,
    type: "query" | "mutation",
    skip: ((name: string) => boolean) | undefined,
  ) => {
    if (skipDeprecated && rootField.isDeprecated) return;
    if (skip?.(rootField.name)) return;
    const paths = collectOperationPaths(
      rootField,
      [],
      ctx,
      maxNamespaceDepth,
      skipDeprecated,
    );
    for (const path of paths) {
      try {
        const op = generateOperation(
          path,
          type,
          ctx,
          config,
          path.length === 1 ? rootField.description : undefined,
        );
        if (seenNames.has(op.functionName)) continue;
        seenNames.add(op.functionName);
        operations.push(op);
      } catch (err) {
        console.error(`❌ ${type} ${pathToFunctionName(path)}:`, err);
      }
    }
  };

  // Queries
  const queryType = typeMap.get(schema.queryType.name);
  if (queryType?.fields) {
    for (const field of queryType.fields) {
      emitOps(field, "query", config.skipQuery);
    }
  }

  // Mutations
  if (schema.mutationType) {
    const mutationType = typeMap.get(schema.mutationType.name);
    if (mutationType?.fields) {
      for (const field of mutationType.fields) {
        emitOps(field, "mutation", config.skipMutation);
      }
    }
  }

  // Write operation files
  for (const op of operations) {
    fs.writeFileSync(path.join(outputDir, op.fileName), op.code);
    console.log(`✅ ${op.functionName}`);
  }

  // Write barrel
  const barrel =
    operations.map((op) => `export * from "./${op.functionName}.ts";`).join("\n") +
    "\n";
  fs.writeFileSync(path.join(outputDir, "index.ts"), barrel);

  console.log(
    `\n✨ Generated ${operations.length} GraphQL operations to ${outputDir}`,
  );
}
