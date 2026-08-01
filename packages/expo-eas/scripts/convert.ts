#!/usr/bin/env bun
/**
 * convert — turn the EAS GraphQL introspection schema into a Smithy 2.0 JSON
 * model.
 *
 * Input:  specs/eas-cli/packages/eas-cli/graphql.schema.json
 *         (the standard `__schema` introspection JSON shipped with eas-cli)
 * Output: .generated-specs/eas.json  (one Smithy model — EAS is a single
 *         GraphQL endpoint at https://api.expo.dev/graphql)
 *
 * ─── Thinking in protocols ──────────────────────────────────────────────────
 * Every EAS call is `POST /graphql` with a `{ query, operationName,
 * variables }` envelope, answered by `{ data, errors }`. The envelope belongs
 * to the *protocol* (see `src/protocol.ts`); the model describes each
 * operation's variables (input) and selection set (output), plus the baked
 * GraphQL document:
 *
 *   • operation trait  → `smithy.api#http` (POST /graphql) on the op shape
 *   • input structure  → `com.expo.graphql#operation` { query, operationName,
 *                        type } — the full GraphQL document for the op
 *   • output structure → `com.expo.graphql#responsePath` ("account.byId") —
 *                        the path under `data` the protocol unwraps
 *   • nullability      → `com.expo.graphql#nullable` on members,
 *                        `com.expo.graphql#nullableItems` on list shapes
 *   • bare results     → `com.expo.graphql#payload` on the sole `result`
 *                        member when the leaf returns a list/scalar (the
 *                        response IS that value)
 *
 * ─── Operation discovery (ported from distilled v0) ─────────────────────────
 * This is a faithful port of distilled v0's shared GraphQL generator
 * (`core/scripts/generate-graphql.ts`) driven with v0 expo-eas's config:
 * most top-level EAS fields are namespacing objects (`account: AccountQuery`)
 * whose nested leaves are the real operations — `collectOperationPaths`
 * expands them (bounded by maxNamespaceDepth), and `expandSelection` builds
 * each leaf's selection set up to `maxDepth` levels. Where v0 inlined every
 * enum/input-object into each operation file, this converter emits them as
 * named, shared Smithy shapes.
 */
import * as fs from "node:fs";
import * as path from "node:path";

// ============================================================================
// Configuration (mirrors distilled v0 packages/expo-eas/scripts/generate.ts)
// ============================================================================

const ROOT = path.resolve(import.meta.dir, "..");
const SCHEMA_PATH = path.join(
  ROOT,
  "specs/eas-cli/packages/eas-cli/graphql.schema.json",
);
const OUT_DIR = path.join(ROOT, ".generated-specs");
const OUT_FILE = path.join(OUT_DIR, "eas.json");

const NAMESPACE = "com.expo.eas";
const ENDPOINT = "/graphql";
const MAX_DEPTH = 3;
const MAX_NAMESPACE_DEPTH = 3;
const SKIP_DEPRECATED = true;
/** The schema exposes `_doNotUse` placeholder fields that are not real ops. */
const skipRootField = (name: string): boolean => name.startsWith("_");

// Smithy trait ids (the SDK's GraphQL protocol vocabulary).
const OP_TRAIT = "com.expo.graphql#operation";
const RESPONSE_PATH_TRAIT = "com.expo.graphql#responsePath";
const NULLABLE_TRAIT = "com.expo.graphql#nullable";
const NULLABLE_ITEMS_TRAIT = "com.expo.graphql#nullableItems";
const PAYLOAD_TRAIT = "com.expo.graphql#payload";

// Smithy prelude targets.
const PRELUDE = {
  String: "smithy.api#String",
  Boolean: "smithy.api#Boolean",
  Integer: "smithy.api#Integer",
  Double: "smithy.api#Double",
  Document: "smithy.api#Document",
} as const;

const BUILTIN_SCALARS: Record<string, string> = {
  String: PRELUDE.String,
  ID: PRELUDE.String,
  Int: PRELUDE.Integer,
  Float: PRELUDE.Double,
  Boolean: PRELUDE.Boolean,
};

/**
 * Expo's custom scalars, mapped to sensible prelude targets so generated
 * operations don't dissolve into `S.Unknown` (mirrors v0's customScalars).
 */
const CUSTOM_SCALARS: Record<string, string> = {
  DateTime: PRELUDE.String,
  JSON: PRELUDE.Document,
  JSONObject: PRELUDE.Document,
  Upload: PRELUDE.Document,
  WorkflowsJSON: PRELUDE.Document,
  AccountName: PRELUDE.String,
  UUID: PRELUDE.String,
  BigInt: PRELUDE.String,
};

// ============================================================================
// GraphQL introspection types (subset of the canonical spec)
// ============================================================================

type TypeKind =
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL";

interface TypeRef {
  kind: TypeKind;
  name?: string | null;
  ofType?: TypeRef | null;
}

interface InputValue {
  name: string;
  description?: string | null;
  type: TypeRef;
  defaultValue?: string | null;
}

interface Field {
  name: string;
  description?: string | null;
  args: InputValue[];
  type: TypeRef;
  isDeprecated?: boolean;
}

interface IntrospectionType {
  kind: TypeKind;
  name: string;
  description?: string | null;
  fields?: Field[] | null;
  inputFields?: InputValue[] | null;
  enumValues?: Array<{ name: string; isDeprecated?: boolean }> | null;
  possibleTypes?: TypeRef[] | null;
}

interface IntrospectionSchema {
  queryType: { name: string };
  mutationType?: { name: string } | null;
  types: IntrospectionType[];
}

// ============================================================================
// Small helpers (ported from v0's generate-graphql.ts)
// ============================================================================

const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const toPascalCase = (s: string): string =>
  capitalize(s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c: string) => c.toUpperCase()));

const unwrapNonNull = (t: TypeRef): { type: TypeRef; nonNull: boolean } =>
  t.kind === "NON_NULL" && t.ofType
    ? { type: t.ofType, nonNull: true }
    : { type: t, nonNull: false };

/** Render a GraphQL type ref back to its SDL form (e.g. `[ID!]!`). */
const renderTypeRef = (t: TypeRef): string => {
  if (t.kind === "NON_NULL" && t.ofType) return `${renderTypeRef(t.ofType)}!`;
  if (t.kind === "LIST" && t.ofType) return `[${renderTypeRef(t.ofType)}]`;
  return t.name ?? "Unknown";
};

const local = (id: string): string => id.split("#")[1] ?? id;

const memberIdent = (name: string): string => {
  let out = name.replace(/[^A-Za-z0-9_]/g, "_");
  if (/^[0-9]/.test(out)) out = `_${out}`;
  return out || "_";
};

const enumMemberName = (value: string): string => {
  let out = value
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  if (out === "") out = "VALUE";
  if (/^[0-9]/.test(out)) out = `_${out}`;
  return out;
};

const oneLineDoc = (s: string | null | undefined): string | undefined => {
  const t = s?.replace(/\s+/g, " ").trim();
  return t ? t : undefined;
};

// ============================================================================
// Selection-set expansion (ported from v0)
// ============================================================================

interface SchemaCtx {
  typeMap: Map<string, IntrospectionType>;
}

interface SelectionField {
  name: string;
  type: TypeRef;
  children?: SelectionField[];
}

/**
 * Recursively expand the selection set for an object/interface return type up
 * to `maxDepth` levels. Scalars/enums become leaves. Cycles short-circuit by
 * tracking type names through `seen`.
 */
const expandSelection = (
  ref: TypeRef,
  ctx: SchemaCtx,
  depth: number,
  maxDepth: number,
  seen: Set<string>,
): SelectionField[] | undefined => {
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
      // Unions need fragments to select fields — skip for the generic walker.
      continue;
    }

    result.push({ name: field.name, type: field.type, children });
  }

  return result;
};

/** Render a SelectionField list as a GraphQL selection-set string. */
const renderSelectionSet = (fields: SelectionField[], indent: string): string =>
  fields
    .map((f) =>
      f.children && f.children.length > 0
        ? `${indent}${f.name} {\n${renderSelectionSet(f.children, indent + "  ")}\n${indent}}`
        : `${indent}${f.name}`,
    )
    .join("\n");

// ============================================================================
// Operation-path discovery (ported from v0)
// ============================================================================

/**
 * A path through the GraphQL schema from a Query/Mutation root to a leaf
 * operation. For top-level operations the path has one segment; for ones
 * that go through a namespace object (e.g. `account.byId`) it has multiple.
 */
interface OperationStep {
  name: string;
  args: InputValue[];
  returnType: TypeRef;
}

/**
 * Decide how to emit operations for a top-level Query/Mutation field.
 *
 * - If selection-set expansion produces real subfields, emit a single op for
 *   this path.
 * - If the field's return type is an OBJECT/INTERFACE whose subfields all
 *   require args (a "namespace" pattern), recurse into each subfield and
 *   emit one op per leaf.
 * - Otherwise emit one op for the field directly (scalar/enum return types).
 */
const collectOperationPaths = (
  field: Field,
  parentChain: OperationStep[],
  ctx: SchemaCtx,
  maxNamespaceDepth: number,
  skipDeprecated: boolean,
): OperationStep[][] => {
  const step: OperationStep = {
    name: field.name,
    args: field.args ?? [],
    returnType: field.type,
  };
  const chain = [...parentChain, step];

  // Try to expand the selection set on this field's return type. If we get a
  // real selection, emit a single op terminating here.
  const selection = expandSelection(field.type, ctx, 1, 3, new Set());
  if (selection && selection.length > 0) {
    return [chain];
  }

  // No selection: this is either a namespace-style field or a scalar leaf.
  const { type: returnType } = unwrapNonNull(field.type);
  let actualReturn = returnType;
  if (actualReturn.kind === "LIST" && actualReturn.ofType) {
    actualReturn = unwrapNonNull(actualReturn.ofType).type;
  }

  const isObject =
    (actualReturn.kind === "OBJECT" || actualReturn.kind === "INTERFACE") &&
    !!actualReturn.name;

  if (!isObject || chain.length >= maxNamespaceDepth) {
    return [chain];
  }

  const namespaceType = ctx.typeMap.get(actualReturn.name!);
  if (!namespaceType?.fields || namespaceType.fields.length === 0) {
    return [chain];
  }

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

  return paths.length > 0 ? paths : [chain];
};

/**
 * Build the operation function name from a path: `channels.byId` →
 * `channelsById`.
 */
const pathToFunctionName = (opPath: OperationStep[]): string => {
  if (opPath.length === 0) throw new Error("empty path");
  if (opPath.length === 1) return opPath[0]!.name;
  return (
    opPath[0]!.name +
    opPath
      .slice(1)
      .map((s) => toPascalCase(s.name))
      .join("")
  );
};

/**
 * Resolve variable-name collisions across path segments: a later segment's
 * clashing arg is renamed `<stepName><ArgName>` (then numbered).
 */
const buildArgRenames = (opPath: OperationStep[]): Map<string, string> => {
  const argRenames = new Map<string, string>();
  const usedVarNames = new Set<string>();
  for (const step of opPath) {
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
  return argRenames;
};

/**
 * Build the GraphQL document string for an operation walking through `path`.
 * Variables are scoped to the OUTER operation; each step that has args
 * references those variables by (renamed) name.
 */
const buildPathDocument = (
  type: "query" | "mutation",
  operationName: string,
  opPath: OperationStep[],
  selection: SelectionField[] | undefined,
  argRenames: Map<string, string>,
): string => {
  const varDefs: string[] = [];
  for (const step of opPath) {
    for (const arg of step.args) {
      const varName = argRenames.get(`${step.name}.${arg.name}`) ?? arg.name;
      varDefs.push(`$${varName}: ${renderTypeRef(arg.type)}`);
    }
  }

  const header = varDefs.length
    ? `${type} ${operationName}(${varDefs.join(", ")})`
    : `${type} ${operationName}`;

  const renderStep = (
    step: OperationStep,
    inner: string,
    indent: string,
  ): string => {
    const argList = step.args
      .map((arg) => {
        const varName = argRenames.get(`${step.name}.${arg.name}`) ?? arg.name;
        return `${arg.name}: $${varName}`;
      })
      .join(", ");
    const call = argList ? `${step.name}(${argList})` : step.name;
    return `${indent}${call} {\n${inner}\n${indent}}`;
  };

  let body: string;
  const innerIndent = "  ".repeat(opPath.length + 1);
  if (selection && selection.length > 0) {
    body = renderSelectionSet(selection, innerIndent);
  } else {
    // No selectable subfields — fall back to __typename so the document is
    // always syntactically valid.
    body = `${innerIndent}__typename`;
  }

  let nested = body;
  for (let i = opPath.length - 1; i >= 0; i--) {
    const indent = "  ".repeat(i + 1);
    nested = renderStep(opPath[i]!, nested, indent);
  }

  return `${header} {\n${nested}\n}`;
};

// ============================================================================
// Smithy shape construction
// ============================================================================

interface Bag {
  shapes: Record<string, any>;
  names: Set<string>;
}

/** Add a shape under a unique PascalCase-ish name; returns its shape id. */
const addShape = (bag: Bag, base: string, def: any): string => {
  let want = memberIdent(base);
  want = capitalize(want);
  let name = want;
  let n = 2;
  while (bag.names.has(name)) name = `${want}${n++}`;
  bag.names.add(name);
  const id = `${NAMESPACE}#${name}`;
  bag.shapes[id] = def;
  return id;
};

/** Add a shape under an exact (pre-reserved) name. */
const addExact = (bag: Bag, name: string, def: any): string => {
  const id = `${NAMESPACE}#${name}`;
  bag.shapes[id] = def;
  return id;
};

interface Converter {
  bag: Bag;
  ctx: SchemaCtx;
  /** GraphQL scalar name → smithy target. */
  scalarTarget: (name: string) => string;
  /** GraphQL enum type name → shared smithy enum shape id (memoized). */
  enumShape: (name: string) => string;
  /** GraphQL input-object type name → shared smithy structure id (memoized). */
  inputObjectShape: (name: string) => string;
  /** Input type ref → { smithy target, GraphQL-nullability }. */
  inputTypeTarget: (ref: TypeRef) => { target: string; nullable: boolean };
}

const makeConverter = (bag: Bag, ctx: SchemaCtx): Converter => {
  const enumMemo = new Map<string, string>();
  const inputMemo = new Map<string, string>();
  const inputListMemo = new Map<string, string>();

  const scalarTarget = (name: string): string =>
    BUILTIN_SCALARS[name] ?? CUSTOM_SCALARS[name] ?? PRELUDE.Document;

  const enumShape = (name: string): string => {
    const cached = enumMemo.get(name);
    if (cached) return cached;
    const t = ctx.typeMap.get(name);
    const members: Record<string, any> = {};
    const used = new Set<string>();
    for (const v of t?.enumValues ?? []) {
      let mn = enumMemberName(v.name);
      let k = 2;
      while (used.has(mn)) mn = `${enumMemberName(v.name)}_${k++}`;
      used.add(mn);
      members[mn] = {
        target: "smithy.api#Unit",
        traits: { "smithy.api#enumValue": v.name },
      };
    }
    const id = addShape(bag, name, { type: "enum", members });
    enumMemo.set(name, id);
    return id;
  };

  /** Input type ref → { smithy target, GraphQL-nullability }. */
  const inputTypeTarget = (
    ref: TypeRef,
  ): { target: string; nullable: boolean } => {
    const { type, nonNull } = unwrapNonNull(ref);
    const nullable = !nonNull;
    if (type.kind === "LIST" && type.ofType) {
      const elem = inputTypeTarget(type.ofType);
      const key = `${elem.target}|${elem.nullable}`;
      let listId = inputListMemo.get(key);
      if (!listId) {
        listId = addShape(bag, `${local(elem.target)}List`, {
          type: "list",
          member: { target: elem.target },
          ...(elem.nullable ? { traits: { [NULLABLE_ITEMS_TRAIT]: {} } } : {}),
        });
        inputListMemo.set(key, listId);
      }
      return { target: listId, nullable };
    }
    if (type.kind === "SCALAR" && type.name) {
      return { target: scalarTarget(type.name), nullable };
    }
    if (type.kind === "ENUM" && type.name) {
      return { target: enumShape(type.name), nullable };
    }
    if (type.kind === "INPUT_OBJECT" && type.name) {
      return { target: inputObjectShape(type.name), nullable };
    }
    return { target: PRELUDE.Document, nullable };
  };

  const inputObjectShape = (name: string): string => {
    const cached = inputMemo.get(name);
    if (cached) return cached;
    const t = ctx.typeMap.get(name);
    // Register before filling members so input-object cycles resolve to the
    // shared shape (v0 degraded cycles to Schema.Unknown; named smithy
    // shapes reference each other naturally).
    const def: any = { type: "structure", members: {} };
    const id = addShape(bag, name, def);
    inputMemo.set(name, id);
    const doc = oneLineDoc(t?.description);
    if (doc) def.traits = { "smithy.api#documentation": doc };
    for (const f of t?.inputFields ?? []) {
      const { nonNull } = unwrapNonNull(f.type);
      const { target, nullable } = inputTypeTarget(f.type);
      const traits: Record<string, any> = {};
      if (nonNull) traits["smithy.api#required"] = {};
      if (nullable) traits[NULLABLE_TRAIT] = {};
      const fdoc = oneLineDoc(f.description);
      if (fdoc) traits["smithy.api#documentation"] = fdoc;
      def.members[memberIdent(f.name)] = {
        target,
        ...(Object.keys(traits).length ? { traits } : {}),
      };
    }
    return id;
  };

  const converter: Converter = {
    bag,
    ctx,
    scalarTarget,
    enumShape,
    inputObjectShape,
    inputTypeTarget,
  };
  return converter;
};

/**
 * Output type ref + selection → { smithy target, GraphQL-nullability }.
 * Selection structs are per-operation (hint-named); enums are shared.
 */
const buildOutputTarget = (
  conv: Converter,
  ref: TypeRef,
  children: SelectionField[] | undefined,
  hint: string,
): { target: string; nullable: boolean } => {
  const { type, nonNull } = unwrapNonNull(ref);
  const nullable = !nonNull;

  if (type.kind === "LIST" && type.ofType) {
    const elem = buildOutputTarget(conv, type.ofType, children, `${hint}Item`);
    const target = addShape(conv.bag, `${hint}List`, {
      type: "list",
      member: { target: elem.target },
      ...(elem.nullable ? { traits: { [NULLABLE_ITEMS_TRAIT]: {} } } : {}),
    });
    return { target, nullable };
  }
  if (type.kind === "SCALAR" && type.name) {
    return { target: conv.scalarTarget(type.name), nullable };
  }
  if (type.kind === "ENUM" && type.name) {
    return { target: conv.enumShape(type.name), nullable };
  }
  if (
    (type.kind === "OBJECT" || type.kind === "INTERFACE") &&
    children &&
    children.length > 0
  ) {
    const members = buildSelectionMembers(conv, children, hint);
    const target = addShape(conv.bag, hint, { type: "structure", members });
    return { target, nullable };
  }
  // UNION, selection-less objects, unknowns → opaque.
  return { target: PRELUDE.Document, nullable };
};

/**
 * Structure members for a selection set. Every selected field is delivered
 * by the server (always present), so members are `required`; GraphQL
 * nullability travels as the `nullable` trait (v0 emitted `field: NullOr(X)`).
 */
const buildSelectionMembers = (
  conv: Converter,
  fields: SelectionField[],
  hint: string,
): Record<string, any> => {
  const members: Record<string, any> = {};
  for (const f of fields) {
    const sub = buildOutputTarget(
      conv,
      f.type,
      f.children,
      `${hint}${toPascalCase(f.name)}`,
    );
    const traits: Record<string, any> = { "smithy.api#required": {} };
    if (sub.nullable) traits[NULLABLE_TRAIT] = {};
    members[memberIdent(f.name)] = { target: sub.target, traits };
  }
  return members;
};

// ============================================================================
// Main
// ============================================================================

const main = (): void => {
  const raw = fs.readFileSync(SCHEMA_PATH, "utf-8");
  const parsedJson = JSON.parse(raw) as {
    data?: { __schema: IntrospectionSchema };
    __schema?: IntrospectionSchema;
  };
  const schema = parsedJson.data?.__schema ?? parsedJson.__schema;
  if (!schema) {
    throw new Error(
      `Introspection JSON at ${SCHEMA_PATH} has neither data.__schema nor __schema at the top level`,
    );
  }

  const typeMap = new Map<string, IntrospectionType>();
  for (const t of schema.types) typeMap.set(t.name, t);
  const ctx: SchemaCtx = { typeMap };

  // ---- Discover operation paths (queries first, then mutations; global
  // name dedup mirrors v0's seenNames) ----
  interface PendingOp {
    functionName: string;
    opName: string;
    type: "query" | "mutation";
    path: OperationStep[];
    description: string | undefined;
  }
  const pending: PendingOp[] = [];
  const seenNames = new Set<string>();

  const collectRoot = (rootTypeName: string, type: "query" | "mutation") => {
    const rootType = typeMap.get(rootTypeName);
    if (!rootType?.fields) return;
    for (const field of rootType.fields) {
      if (SKIP_DEPRECATED && field.isDeprecated) continue;
      if (skipRootField(field.name)) continue;
      const paths = collectOperationPaths(
        field,
        [],
        ctx,
        MAX_NAMESPACE_DEPTH,
        SKIP_DEPRECATED,
      );
      for (const opPath of paths) {
        const functionName = pathToFunctionName(opPath);
        if (seenNames.has(functionName)) continue;
        seenNames.add(functionName);
        pending.push({
          functionName,
          opName: toPascalCase(functionName),
          type,
          path: opPath,
          description:
            opPath.length === 1 ? oneLineDoc(field.description) : undefined,
        });
      }
    }
  };

  collectRoot(schema.queryType.name, "query");
  if (schema.mutationType) collectRoot(schema.mutationType.name, "mutation");

  // ---- Build the smithy model ----
  const bag: Bag = { shapes: {}, names: new Set() };
  // Reserve the op-derived shape names up front so lazily-created shared
  // type shapes (enums, input objects) can never steal them — the operation
  // shape's local name IS the exported const name (via lowerFirst).
  bag.names.add("Eas");
  for (const op of pending) {
    bag.names.add(op.opName);
    bag.names.add(`${op.opName}Request`);
    bag.names.add(`${op.opName}Response`);
  }

  const conv = makeConverter(bag, ctx);
  const serviceOps: Array<{ target: string }> = [];
  let converted = 0;
  let failed = 0;

  for (const op of pending) {
    try {
      const argRenames = buildArgRenames(op.path);
      const leaf = op.path[op.path.length - 1]!;
      const selection = expandSelection(
        leaf.returnType,
        ctx,
        1,
        MAX_DEPTH,
        new Set(),
      );
      const document = buildPathDocument(
        op.type,
        op.functionName,
        op.path,
        selection,
        argRenames,
      );
      const responsePath = op.path.map((s) => s.name).join(".");

      // ---- Input (the GraphQL variables) ----
      const inputMembers: Record<string, any> = {};
      for (const step of op.path) {
        for (const arg of step.args) {
          const varName = argRenames.get(`${step.name}.${arg.name}`)!;
          const { nonNull } = unwrapNonNull(arg.type);
          const { target, nullable } = conv.inputTypeTarget(arg.type);
          const traits: Record<string, any> = {};
          if (nonNull) traits["smithy.api#required"] = {};
          if (nullable) traits[NULLABLE_TRAIT] = {};
          const adoc = oneLineDoc(arg.description);
          if (adoc) traits["smithy.api#documentation"] = adoc;
          inputMembers[memberIdent(varName)] = {
            target,
            ...(Object.keys(traits).length ? { traits } : {}),
          };
        }
      }
      const inputId = addExact(bag, `${op.opName}Request`, {
        type: "structure",
        members: inputMembers,
        traits: {
          "smithy.api#input": {},
          [OP_TRAIT]: {
            query: document,
            operationName: op.functionName,
            type: op.type,
          },
        },
      });

      // ---- Output (the selection set under `data.<responsePath>`) ----
      const { type: retType } = unwrapNonNull(leaf.returnType);
      const isBareObject =
        (retType.kind === "OBJECT" || retType.kind === "INTERFACE") &&
        selection !== undefined &&
        selection.length > 0;

      let outputId: string;
      if (isBareObject) {
        // Object result: the response struct's members ARE the selection.
        outputId = addExact(bag, `${op.opName}Response`, {
          type: "structure",
          members: buildSelectionMembers(
            conv,
            selection!,
            `${op.opName}Response`,
          ),
          traits: {
            "smithy.api#output": {},
            [RESPONSE_PATH_TRAIT]: responsePath,
            "smithy.api#documentation": `Selection set for \`${responsePath}\` (unwrapped from the GraphQL \`data\` envelope).`,
          },
        });
      } else {
        // List/scalar/enum/opaque result: a sole `result` member carries the
        // whole value; the payload trait makes the generated response type
        // the value itself.
        const inner = buildOutputTarget(
          conv,
          leaf.returnType,
          selection,
          `${op.opName}Result`,
        );
        outputId = addExact(bag, `${op.opName}Response`, {
          type: "structure",
          members: {
            result: {
              target: inner.target,
              traits: {
                [PAYLOAD_TRAIT]: {},
                "smithy.api#required": {},
                ...(inner.nullable ? { [NULLABLE_TRAIT]: {} } : {}),
                "smithy.api#documentation": `The value of \`data.${responsePath}\`.`,
              },
            },
          },
          traits: {
            "smithy.api#output": {},
            [RESPONSE_PATH_TRAIT]: responsePath,
          },
        });
      }

      // ---- Operation ----
      const opTraits: Record<string, any> = {
        "smithy.api#http": { method: "POST", uri: ENDPOINT, code: 200 },
      };
      if (op.description) {
        opTraits["smithy.api#documentation"] = op.description;
      }
      if (op.type === "query") opTraits["smithy.api#readonly"] = {};
      const opId = addExact(bag, op.opName, {
        type: "operation",
        input: { target: inputId },
        output: { target: outputId },
        traits: opTraits,
      });
      serviceOps.push({ target: opId });
      converted++;
    } catch (err) {
      failed++;
      console.error(`❌ ${op.type} ${op.functionName}:`, err);
    }
  }

  // Service shape carrying the endpoint documentation.
  addExact(bag, "Eas", {
    type: "service",
    version: "1.0",
    operations: serviceOps,
    traits: {
      "smithy.api#title": "Expo Application Services (EAS)",
      "smithy.api#documentation":
        "EAS GraphQL API — a single endpoint at https://api.expo.dev/graphql. " +
        "Every operation is `POST /graphql` with a `{ query, operationName, " +
        "variables }` envelope; responses unwrap `data.<responsePath>`.",
    },
  });

  const model = {
    smithy: "2.0",
    metadata: {
      suppressions: [
        { id: "HttpUriConflict", namespace: "*" },
        { id: "HttpMethodSemantics", namespace: "*" },
        { id: "UnreferencedShape", namespace: "*" },
      ],
    },
    shapes: bag.shapes,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(model, null, 2)}\n`);

  console.log(
    `✅ Converted ${converted} GraphQL operations (${failed} failed, ${
      Object.keys(bag.shapes).length
    } shapes) → ${OUT_FILE}`,
  );
};

main();
