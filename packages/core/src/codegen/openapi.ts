/**
 * OpenAPI → Smithy 2.0 JSON converter (dev-time only, provider-agnostic).
 *
 * Turns a Swagger 2.0 / OAS 3.0 / OAS 3.1 document into the same Smithy JSON
 * model shape the other spec converters produce (`{ smithy: "2.0", metadata,
 * shapes }`), so every OpenAPI-sourced provider flows through the one shared
 * `generateService` compiler. Conversion fidelity follows distilled v0's
 * `generate-openapi.ts` feature matrix:
 *
 *   • one operation per (path × get/post/put/patch/delete), deprecated
 *     skipped by default; op shape name = PascalCase(operationId)
 *   • input `<Op>Request`: path params → `smithy.api#httpLabel` (+required),
 *     query params → `smithy.api#httpQuery`, header/cookie params dropped,
 *     body properties flattened alongside (labels win, then query, then body);
 *     non-object bodies become a sole `body` member with `smithy.api#httpPayload`
 *   • `$ref`s become NAMED shapes (`components/schemas/X` → `<ns>#X`), reused
 *     across operations; anonymous nested objects synthesize names from the
 *     parent + member path
 *   • responses: 200 → 201 → 204 precedence, `application/json` only; object
 *     results become `<Op>Response` structures (a sole `$ref` reuses the named
 *     shape); bare array/scalar results wrap in a structure whose single
 *     member carries `com.distilled.openapi#rawResponse` (the SdkSpec maps it
 *     to a root pipe); no schema → `smithy.api#Unit`
 *   • nullability (3.0 `nullable`, 3.1 `type: [..., "null"]`, 2.0
 *     `x-nullable`, `oneOf`/`anyOf` null branches) → member-level
 *     `com.distilled.openapi#nullable` trait
 *   • sensitive string members (x-sensitive or name-pattern match) →
 *     `smithy.api#sensitive` on the member (direction-agnostic; the SdkSpec
 *     decides the input/output treatment)
 *   • per-op non-2xx statuses (outside `defaultErrorStatuses`) → typed error
 *     shapes with `smithy.api#error`/`smithy.api#httpError` and
 *     `com.distilled.openapi#errorMatchers` status matchers
 *   • v0 pagination detection (`pagination.cursor` / `.next` / `.next_page`,
 *     `next_token`/`NextToken`/`nextToken`, `next_page` + input alias lists +
 *     first top-level array property) → `smithy.api#paginated` on the op
 *     (with the non-standard `mode` member the core runtime dispatches on)
 */

// ============================================================================
// Trait ids (the `com.distilled.openapi` vocabulary)
// ============================================================================

/** Member-level nullability (`S.NullOr` + `| null` via `SdkSpec.nullableTrait`). */
export const NULLABLE_TRAIT = "com.distilled.openapi#nullable";
/**
 * Marks the sole member of a synthesized response wrapper for bare
 * array/scalar response bodies. SdkSpecs bind it with a `rootPipe`
 * (`T.RawResponseRoot()` from `core/protocol-rest`), so the emitted response
 * type IS the payload type.
 */
export const RAW_RESPONSE_TRAIT = "com.distilled.openapi#rawResponse";
/**
 * Wire-matching rules for a generated error class (see
 * `SdkSpec.errorMatchersTrait` + `applyErrorMatchers`). The converter stamps
 * `[{ status }]` from the response status the class was mapped from.
 */
export const ERROR_MATCHERS_TRAIT = "com.distilled.openapi#errorMatchers";
/**
 * Non-JSON request body encoding chosen by the v0 content-type precedence
 * (json > form-urlencoded > multipart). Value: `"form-urlencoded"` |
 * `"multipart"`. `"multipart"` is also merged into the `smithy.api#http`
 * trait's `contentType` (which core's `buildRequest` understands);
 * form-urlencoded is left to provider SdkSpecs/protocols.
 */
export const CONTENT_TYPE_TRAIT = "com.distilled.openapi#contentType";
/**
 * The `apiVersion` recorded on every operation when
 * {@link OpenApiConvertOptions.apiVersion} is set (Azure ARM style). The
 * matching `api-version` query parameter is dropped from inputs; the
 * provider's protocol injects it at request time.
 */
export const API_VERSION_TRAIT = "com.distilled.openapi#apiVersion";

// ============================================================================
// Sensitive-field name patterns (distilled v0's SENSITIVE_FIELD_PATTERNS)
// ============================================================================

export const SENSITIVE_FIELD_PATTERNS: readonly RegExp[] = [
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

// ============================================================================
// Options
// ============================================================================

export interface OpenApiConvertOptions {
  /** Shape namespace, e.g. `"com.neon.api"`. */
  readonly namespace: string;
  /** Service shape name (PascalCased), e.g. `"Neon"`. */
  readonly serviceName: string;
  /** Service shape `version`. Default: the spec's `info.version`, else "1.0". */
  readonly serviceVersion?: string;
  /**
   * Non-2xx response status → error class name. Statuses in
   * {@link defaultErrorStatuses} never produce per-op errors. Default:
   * `{400: BadRequest, 403: Forbidden, 404: NotFound, 409: Conflict,
   * 422: UnprocessableEntity}` (the v0 default).
   */
  readonly statusToErrorClass?: Readonly<Record<string, string>>;
  /**
   * Statuses covered by the SDK's common errors, excluded from per-op error
   * lists. Default: `{"401","429","500","503"}` (the v0 default).
   */
  readonly defaultErrorStatuses?: Iterable<string>;
  /** Skip operations marked `deprecated: true`. Default true. */
  readonly skipDeprecated?: boolean;
  /**
   * Azure-style fixed `api-version`: drops `api-version` query params and
   * stamps {@link API_VERSION_TRAIT} on every operation.
   */
  readonly apiVersion?: string;
  /**
   * Name patterns marking string members sensitive. Default
   * {@link SENSITIVE_FIELD_PATTERNS}. Pass `[]` to disable name-based
   * detection (explicit `x-sensitive: true` still applies).
   */
  readonly sensitivePatterns?: readonly RegExp[];
  /**
   * Optional full shape-definition overrides for emitted error classes
   * (keyed by class name) — e.g. custom members. The converter's default is
   * an empty structure with `smithy.api#error` + `smithy.api#httpError` +
   * {@link ERROR_MATCHERS_TRAIT} traits; overrides are merged over it.
   */
  readonly errorShapes?: Readonly<Record<string, any>>;
}

export interface SmithyModel {
  smithy: "2.0";
  metadata: any;
  shapes: Record<string, any>;
}

// ============================================================================
// String helpers (same conventions as cloudflare's spec-to-smithy)
// ============================================================================

const PRELUDE = {
  Unit: "smithy.api#Unit",
  String: "smithy.api#String",
  Boolean: "smithy.api#Boolean",
  Double: "smithy.api#Double",
  Integer: "smithy.api#Integer",
  Document: "smithy.api#Document",
} as const;

/** snake/kebab/space/camel → PascalCase identifier (inner caps preserved). */
const pascal = (s: string): string => {
  const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);
  let out = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
  if (out === "") out = "Shape";
  if (/^[0-9]/.test(out)) out = `_${out}`;
  return out;
};

/** Keep a JSON field name if it's a valid Smithy member identifier, else sanitize. */
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

// ============================================================================
// Conversion context
// ============================================================================

const MAX_SCHEMA_DEPTH = 40;

interface Ctx {
  readonly spec: any;
  readonly version: "2.0" | "3.0" | "3.1";
  readonly ns: string;
  readonly shapes: Record<string, any>;
  readonly names: Set<string>;
  /** `$ref` string → converted result (cycle-safe; mutated in place). */
  readonly refs: Map<string, { target: string; nullable: boolean }>;
  readonly sensitivePatterns: readonly RegExp[];
}

interface Converted {
  target: string;
  nullable: boolean;
}

const uniqueName = (ctx: Ctx, base: string): string => {
  const want = pascal(base);
  let name = want;
  let n = 2;
  while (ctx.names.has(name)) name = `${want}${n++}`;
  ctx.names.add(name);
  return name;
};

const addShape = (ctx: Ctx, base: string, def: any): string => {
  const id = `${ctx.ns}#${uniqueName(ctx, base)}`;
  ctx.shapes[id] = def;
  return id;
};

const detectVersion = (spec: any): "2.0" | "3.0" | "3.1" => {
  if (spec?.swagger === "2.0") return "2.0";
  const v = spec?.openapi;
  if (typeof v === "string" && v.startsWith("3.1")) return "3.1";
  if (typeof v === "string" && v.startsWith("3.0")) return "3.0";
  throw new Error(
    `Unsupported OpenAPI version (swagger=${spec?.swagger}, openapi=${spec?.openapi})`,
  );
};

/** Resolve a local `#/...` JSON pointer against the spec document. */
const resolvePointer = (spec: any, ref: string): any => {
  if (typeof ref !== "string" || !ref.startsWith("#/")) return undefined;
  let cur = spec;
  for (const raw of ref.slice(2).split("/")) {
    const seg = raw.replace(/~1/g, "/").replace(/~0/g, "~");
    if (cur === null || typeof cur !== "object") return undefined;
    cur = cur[seg];
  }
  return cur;
};

/** Follow `$ref` chains (bounded) to the underlying schema object. */
const deref = (ctx: Ctx, def: any): any => {
  let cur = def;
  for (let i = 0; i < 16 && cur && typeof cur === "object" && cur.$ref; i++) {
    cur = resolvePointer(ctx.spec, cur.$ref);
  }
  return cur;
};

// ============================================================================
// allOf flattening + nullability
// ============================================================================

interface FlatObject {
  properties: Record<string, any>;
  required: Set<string>;
  isObject: boolean;
}

/**
 * Flatten a schema into a property bag: `$ref`s resolved, `allOf` merged
 * (properties + required unioned across resolved subschemas).
 */
const flattenObject = (ctx: Ctx, def: any, depth = 0): FlatObject => {
  const out: FlatObject = {
    properties: {},
    required: new Set(),
    isObject: false,
  };
  const visit = (d: any, dep: number): void => {
    if (dep > MAX_SCHEMA_DEPTH) return;
    const r = deref(ctx, d);
    if (!r || typeof r !== "object") return;
    if (Array.isArray(r.allOf)) {
      for (const sub of r.allOf) visit(sub, dep + 1);
    }
    if (r.properties && typeof r.properties === "object") {
      out.isObject = true;
      for (const [k, v] of Object.entries(r.properties)) {
        if (!(k in out.properties)) out.properties[k] = v;
      }
    }
    if (r.type === "object") out.isObject = true;
    if (Array.isArray(r.required)) {
      for (const k of r.required) out.required.add(k);
    }
  };
  visit(def, depth);
  return out;
};

/** Whether a `oneOf`/`anyOf` branch represents JSON null. */
const isNullBranch = (ctx: Ctx, branch: any): boolean => {
  const r = deref(ctx, branch);
  if (!r || typeof r !== "object") return false;
  if (r.type === "null") return true;
  if (Array.isArray(r.type) && r.type.every((t: unknown) => t === "null")) {
    return true;
  }
  if (
    Array.isArray(r.enum) &&
    r.enum.length > 0 &&
    r.enum.every((v: unknown) => v === null)
  ) {
    return true;
  }
  return false;
};

/** Intrinsic nullability flags on a schema node (not union null branches). */
const ownNullable = (ctx: Ctx, def: any): boolean => {
  if (!def || typeof def !== "object") return false;
  if (def.nullable === true && ctx.version === "3.0") return true;
  if (def["x-nullable"] === true) return true;
  if (Array.isArray(def.type) && def.type.includes("null")) return true;
  return false;
};

/** Single non-array type from a possibly 3.1-style `type` value. */
const typeOf = (def: any): string | undefined => {
  const t = def?.type;
  if (typeof t === "string") return t;
  if (Array.isArray(t)) {
    const real = t.filter((x: unknown) => x !== "null");
    if (real.length === 1 && typeof real[0] === "string") return real[0];
  }
  return undefined;
};

// ============================================================================
// Schema conversion
// ============================================================================

/**
 * Whether a schema definition warrants a NAMED shape (vs an inline prelude
 * target). Named shapes can participate in reference cycles, so `$ref`s to
 * nameable schemas reserve their name before converting.
 */
const isNameable = (ctx: Ctx, def: any): boolean => {
  if (!def || typeof def !== "object") return false;
  if (def.$ref) return isNameable(ctx, deref(ctx, def));
  if (Array.isArray(def.enum)) {
    return (
      def.enum.length > 0 &&
      def.enum.every((v: unknown) => typeof v === "string")
    );
  }
  if (Array.isArray(def.allOf)) return true;
  const branches = def.oneOf ?? def.anyOf;
  if (Array.isArray(branches)) {
    return branches.filter((b: any) => !isNullBranch(ctx, b)).length >= 2;
  }
  const t = typeOf(def);
  if (t === "object" || def.properties || def.additionalProperties) return true;
  if (t === "array") return true;
  return false;
};

/**
 * Convert one schema to a shape target. `reservedId` names the top-level
 * shape when the caller pre-registered it (named `$ref` targets); otherwise
 * anonymous shapes synthesize names from `hint`.
 */
const convertSchema = (
  ctx: Ctx,
  def: any,
  hint: string,
  depth: number,
  reservedId?: string,
): Converted => {
  const emit = (shapeDef: any, base: string): string => {
    if (reservedId !== undefined) {
      ctx.shapes[reservedId] = shapeDef;
      return reservedId;
    }
    return addShape(ctx, base, shapeDef);
  };
  const inline = (target: string, nullable: boolean): Converted => {
    // A reserved placeholder that turned out to be inline (scalar/alias):
    // drop the placeholder; the burned name is harmless.
    if (reservedId !== undefined) delete ctx.shapes[reservedId];
    return { target, nullable };
  };

  if (depth > MAX_SCHEMA_DEPTH) return inline(PRELUDE.Document, false);
  if (def === true || def === undefined || def === null) {
    return inline(PRELUDE.Document, false);
  }
  if (typeof def !== "object") return inline(PRELUDE.Document, false);

  // --- $ref → named (or cached inline) shape --------------------------------
  if (def.$ref) {
    const cached = ctx.refs.get(def.$ref);
    if (cached) return inline(cached.target, cached.nullable);
    const resolved = resolvePointer(ctx.spec, def.$ref);
    if (resolved === undefined) return inline(PRELUDE.Document, false);
    const refName = String(def.$ref).split("/").pop() ?? "Shape";
    if (!isNameable(ctx, resolved)) {
      // Scalars and aliases can't cycle — convert inline and cache.
      const entry: Converted = { target: PRELUDE.Document, nullable: false };
      ctx.refs.set(def.$ref, entry);
      const r = convertSchema(ctx, resolved, pascal(refName), depth + 1);
      entry.target = r.target;
      entry.nullable = r.nullable;
      return inline(r.target, r.nullable);
    }
    // Reserve the component name before converting so cycles resolve.
    const id = `${ctx.ns}#${uniqueName(ctx, refName)}`;
    const entry: Converted = { target: id, nullable: false };
    ctx.refs.set(def.$ref, entry);
    ctx.shapes[id] = { type: "structure", members: {} }; // placeholder
    const r = convertSchema(ctx, resolved, pascal(refName), depth + 1, id);
    entry.target = r.target;
    entry.nullable = r.nullable;
    return inline(r.target, r.nullable);
  }

  let nullable = ownNullable(ctx, def);
  const doc = typeof def.description === "string" ? def.description : undefined;
  const docTraits = doc ? { "smithy.api#documentation": doc } : {};

  // --- oneOf / anyOf --------------------------------------------------------
  const branches = def.oneOf ?? def.anyOf;
  if (Array.isArray(branches)) {
    const real: any[] = [];
    for (const b of branches) {
      if (isNullBranch(ctx, b)) nullable = true;
      else real.push(b);
    }
    if (real.length === 0) return inline(PRELUDE.Document, nullable);
    if (real.length === 1) {
      const r = convertSchema(ctx, real[0], hint, depth + 1, reservedId);
      return { target: r.target, nullable: nullable || r.nullable };
    }
    // Distinct branches → a union shape. Members are synthesized case names;
    // duplicate targets are deduped.
    const members: Record<string, any> = {};
    const seenTargets = new Set<string>();
    real.forEach((b, i) => {
      const branchName =
        typeof b?.$ref === "string"
          ? pascal(String(b.$ref).split("/").pop() ?? `Case${i}`)
          : `Case${i}`;
      const r = convertSchema(ctx, b, `${hint}${branchName}`, depth + 1);
      if (seenTargets.has(r.target)) return;
      seenTargets.add(r.target);
      let mn = memberIdent(branchName);
      let k = 2;
      while (mn in members) mn = `${memberIdent(branchName)}_${k++}`;
      members[mn] = { target: r.target };
    });
    const targets = Object.values(members);
    if (targets.length === 1) {
      return inline((targets[0] as any).target, nullable);
    }
    return {
      target: emit({ type: "union", members, traits: docTraits }, hint),
      nullable,
    };
  }

  // --- allOf ----------------------------------------------------------------
  if (Array.isArray(def.allOf)) {
    // Single-entry allOf over a $ref: passthrough (v0 semantics), carrying
    // the parent's nullability/description.
    if (def.allOf.length === 1 && !def.properties) {
      const r = convertSchema(ctx, def.allOf[0], hint, depth + 1, reservedId);
      return { target: r.target, nullable: nullable || r.nullable };
    }
    const flat = flattenObject(ctx, def, depth);
    if (!flat.isObject && Object.keys(flat.properties).length === 0) {
      return inline(PRELUDE.Document, nullable);
    }
    const members = buildMembers(
      ctx,
      flat.properties,
      flat.required,
      hint,
      depth + 1,
    );
    return {
      target: emit({ type: "structure", members, traits: docTraits }, hint),
      nullable,
    };
  }

  // --- enum -----------------------------------------------------------------
  if (Array.isArray(def.enum) && def.enum.length > 0) {
    const values = def.enum.filter((v: unknown) => v !== null);
    if (values.some((v: unknown) => v === null)) nullable = true;
    if (values.length === 0) return inline(PRELUDE.Document, true);
    if (values.every((v: unknown) => typeof v === "string")) {
      const members: Record<string, any> = {};
      const used = new Set<string>();
      for (const lit of values as string[]) {
        let mn = enumMemberName(lit);
        let k = 2;
        while (used.has(mn)) mn = `${enumMemberName(lit)}_${k++}`;
        used.add(mn);
        members[mn] = {
          target: PRELUDE.Unit,
          traits: { "smithy.api#enumValue": lit },
        };
      }
      return {
        target: emit({ type: "enum", members, traits: docTraits }, hint),
        nullable,
      };
    }
    // Numeric / boolean / mixed enums degrade to their scalar baseline.
    if (values.every((v: unknown) => typeof v === "number")) {
      return inline(PRELUDE.Double, nullable);
    }
    if (values.every((v: unknown) => typeof v === "boolean")) {
      return inline(PRELUDE.Boolean, nullable);
    }
    return inline(PRELUDE.Document, nullable);
  }

  const t = typeOf(def);

  // --- array ----------------------------------------------------------------
  if (t === "array") {
    const item = convertSchema(ctx, def.items, `${hint}Item`, depth + 1);
    return {
      target: emit(
        { type: "list", member: { target: item.target }, traits: docTraits },
        reservedId !== undefined ? hint : `${hint}List`,
      ),
      nullable,
    };
  }

  // --- object ---------------------------------------------------------------
  if (t === "object" || def.properties || def.additionalProperties) {
    if (def.properties && Object.keys(def.properties).length > 0) {
      const required = new Set<string>(
        Array.isArray(def.required) ? def.required : [],
      );
      const members = buildMembers(
        ctx,
        def.properties,
        required,
        hint,
        depth + 1,
      );
      return {
        target: emit({ type: "structure", members, traits: docTraits }, hint),
        nullable,
      };
    }
    const ap = def.additionalProperties;
    if (ap !== undefined && ap !== false) {
      const value =
        ap === true || (typeof ap === "object" && Object.keys(ap).length === 0)
          ? { target: PRELUDE.Document, nullable: false }
          : convertSchema(ctx, ap, `${hint}Value`, depth + 1);
      return {
        target: emit(
          {
            type: "map",
            key: { target: PRELUDE.String },
            value: { target: value.target },
            traits: docTraits,
          },
          reservedId !== undefined ? hint : `${hint}Map`,
        ),
        nullable,
      };
    }
    return inline(PRELUDE.Document, nullable);
  }

  // --- scalars --------------------------------------------------------------
  switch (t) {
    case "string":
      return inline(PRELUDE.String, nullable);
    case "boolean":
      return inline(PRELUDE.Boolean, nullable);
    case "integer":
      return inline(PRELUDE.Integer, nullable);
    case "number":
      return inline(PRELUDE.Double, nullable);
    case "null":
      return inline(PRELUDE.Document, true);
    default:
      return inline(PRELUDE.Document, nullable);
  }
};

/** Whether a property is a sensitive string (x-sensitive or name pattern). */
const isSensitiveProperty = (ctx: Ctx, name: string, def: any): boolean => {
  const r = deref(ctx, def);
  if (!r || typeof r !== "object") return false;
  const isString = typeOf(r) === "string" && !Array.isArray(r.enum);
  if (!isString) return false;
  if (r["x-sensitive"] === true || def?.["x-sensitive"] === true) return true;
  return ctx.sensitivePatterns.some((p) => p.test(name));
};

/** Build a structure's members from an OpenAPI property map. */
const buildMembers = (
  ctx: Ctx,
  properties: Record<string, any>,
  required: ReadonlySet<string>,
  hint: string,
  depth: number,
): Record<string, any> => {
  const members: Record<string, any> = {};
  for (const [name, prop] of Object.entries(properties)) {
    let mn = memberIdent(name);
    let k = 2;
    while (mn in members) mn = `${memberIdent(name)}_${k++}`;
    const conv = convertSchema(ctx, prop, `${hint}${pascal(name)}`, depth);
    const traits: Record<string, any> = {};
    const doc =
      prop && typeof prop === "object" && typeof prop.description === "string"
        ? prop.description
        : undefined;
    if (doc) traits["smithy.api#documentation"] = doc;
    if (required.has(name)) traits["smithy.api#required"] = {};
    if (mn !== name) traits["smithy.api#jsonName"] = name;
    if (conv.nullable) traits[NULLABLE_TRAIT] = {};
    if (isSensitiveProperty(ctx, name, prop)) {
      traits["smithy.api#sensitive"] = {};
    }
    members[mn] = {
      target: conv.target,
      ...(Object.keys(traits).length ? { traits } : {}),
    };
  }
  return members;
};

// ============================================================================
// Parameters
// ============================================================================

interface Param {
  in: string;
  name: string;
  required: boolean;
  description?: string;
  schema: any;
}

/** Normalize a (possibly `$ref`'d) parameter; Swagger 2.0 carries the schema inline. */
const normalizeParam = (ctx: Ctx, raw: any): Param | undefined => {
  const p = raw?.$ref ? resolvePointer(ctx.spec, raw.$ref) : raw;
  if (!p || typeof p !== "object" || typeof p.name !== "string") {
    return undefined;
  }
  const schema =
    ctx.version === "2.0"
      ? {
          type: p.type,
          enum: p.enum,
          items: p.items,
          format: p.format,
          "x-nullable": p["x-nullable"],
        }
      : (p.schema ?? { type: "string" });
  return {
    in: p.in,
    name: p.name,
    required: p.required === true || p.in === "path",
    description: typeof p.description === "string" ? p.description : undefined,
    schema,
  };
};

/**
 * Path-level parameters merged before operation-level ones; an op-level
 * parameter overrides a path-level one with the same (in, name). Header and
 * cookie parameters are dropped (v0 parity); `in: body` (2.0) is handled by
 * the request-body path.
 */
const collectParams = (ctx: Ctx, pathItem: any, op: any): Param[] => {
  const byKey = new Map<string, Param>();
  for (const raw of [
    ...(Array.isArray(pathItem?.parameters) ? pathItem.parameters : []),
    ...(Array.isArray(op?.parameters) ? op.parameters : []),
  ]) {
    const p = normalizeParam(ctx, raw);
    if (!p) continue;
    byKey.set(`${p.in} ${p.name}`, p);
  }
  return [...byKey.values()].filter(
    (p) => p.in === "path" || p.in === "query" || p.in === "body",
  );
};

/**
 * Simple-type coercion for path labels (Smithy restricts label targets):
 * enum → enum shape, integer → Integer, number → Double, boolean → Boolean,
 * everything else → String.
 */
const labelTarget = (ctx: Ctx, schema: any, hint: string): string => {
  const r = deref(ctx, schema);
  if (
    Array.isArray(r?.enum) &&
    r.enum.length > 0 &&
    r.enum.every((v: unknown) => typeof v === "string")
  ) {
    return convertSchema(ctx, r, hint, 0).target;
  }
  switch (typeOf(r)) {
    case "integer":
      return PRELUDE.Integer;
    case "number":
      return PRELUDE.Double;
    case "boolean":
      return PRELUDE.Boolean;
    default:
      return PRELUDE.String;
  }
};

// ============================================================================
// Docs
// ============================================================================

/**
 * v0 trimming rules: stop at a `### Authorization` heading, strip markdown
 * table rows (lines starting with `|`).
 */
const trimDescription = (desc: unknown): string | undefined => {
  if (typeof desc !== "string" || !desc) return undefined;
  const lines: string[] = [];
  for (const line of desc.split(/\r?\n/)) {
    if (line.trim().startsWith("### Authorization")) break;
    if (line.trim().startsWith("|")) continue;
    lines.push(line);
  }
  const out = lines.join("\n").trim();
  return out || undefined;
};

const opDoc = (op: any): string | undefined => {
  const summary =
    typeof op.summary === "string" ? op.summary.trim() : undefined;
  const desc = trimDescription(op.description);
  const parts = [summary, desc].filter(
    (s): s is string => s !== undefined && s !== "",
  );
  return parts.length ? parts.join("\n\n") : undefined;
};

// ============================================================================
// Responses
// ============================================================================

/** 200 → 201 → 204 precedence; response-level `$ref` resolved; JSON only. */
const successSchema = (
  ctx: Ctx,
  responses: any,
): { schema: any | undefined } => {
  for (const code of ["200", "201", "204"]) {
    const raw = responses?.[code];
    if (!raw) continue;
    const resp = raw.$ref ? resolvePointer(ctx.spec, raw.$ref) : raw;
    if (!resp || typeof resp !== "object") return { schema: undefined };
    if (ctx.version === "2.0") {
      return { schema: resp.schema };
    }
    return { schema: resp.content?.["application/json"]?.schema };
  }
  return { schema: undefined };
};

// ============================================================================
// Pagination detection (v0 detectPagination)
// ============================================================================

interface DetectedPagination {
  mode: "cursor" | "page" | "token";
  inputToken: string;
  outputToken: string;
  items: string;
}

const PAGINATION_INPUT_ALIASES: Record<string, readonly string[]> = {
  cursor: ["cursor", "page_token", "pageToken"],
  token: ["next_token", "NextToken", "nextToken"],
  page: ["page"],
};

const detectPagination = (
  ctx: Ctx,
  params: readonly Param[],
  responseSchema: any,
): DetectedPagination | undefined => {
  if (!responseSchema) return undefined;
  const bag = flattenObject(ctx, responseSchema).properties;
  if (Object.keys(bag).length === 0) return undefined;

  let mode: DetectedPagination["mode"] | undefined;
  let outputToken: string | undefined;
  const pag = bag["pagination"]
    ? flattenObject(ctx, bag["pagination"]).properties
    : undefined;
  if (pag?.["cursor"]) {
    mode = "cursor";
    outputToken = "pagination.cursor";
  } else if (pag?.["next"]) {
    mode = "cursor";
    outputToken = "pagination.next";
  } else if (pag?.["next_page"]) {
    mode = "page";
    outputToken = "pagination.next_page";
  } else if (bag["next_token"]) {
    mode = "token";
    outputToken = "next_token";
  } else if (bag["NextToken"]) {
    mode = "token";
    outputToken = "NextToken";
  } else if (bag["nextToken"]) {
    mode = "token";
    outputToken = "nextToken";
  } else if (bag["next_page"]) {
    mode = "page";
    outputToken = "next_page";
  }
  if (!mode || !outputToken) return undefined;

  const aliases = PAGINATION_INPUT_ALIASES[mode]!;
  const inputToken = params.find(
    (p) => p.in === "query" && aliases.includes(p.name),
  )?.name;
  if (!inputToken) return undefined;

  let items: string | undefined;
  for (const [k, v] of Object.entries(bag)) {
    if (k === "pagination" || k === "next_token" || k === "NextToken") continue;
    if (typeOf(deref(ctx, v)) === "array") {
      items = k;
      break;
    }
  }
  if (!items) return undefined;

  return { mode, inputToken, outputToken, items };
};

// ============================================================================
// Main conversion
// ============================================================================

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;

const DEFAULT_STATUS_TO_ERROR_CLASS: Readonly<Record<string, string>> = {
  "400": "BadRequest",
  "403": "Forbidden",
  "404": "NotFound",
  "409": "Conflict",
  "422": "UnprocessableEntity",
};

const DEFAULT_ERROR_STATUSES = ["401", "429", "500", "503"];

export const convertOpenApiToSmithy = (
  spec: unknown,
  options: OpenApiConvertOptions,
): SmithyModel => {
  const doc = spec as any;
  const version = detectVersion(doc);
  const ctx: Ctx = {
    spec: doc,
    version,
    ns: options.namespace,
    shapes: {},
    names: new Set(),
    refs: new Map(),
    sensitivePatterns: options.sensitivePatterns ?? SENSITIVE_FIELD_PATTERNS,
  };
  const statusToErrorClass =
    options.statusToErrorClass ?? DEFAULT_STATUS_TO_ERROR_CLASS;
  const defaultErrorStatuses = new Set(
    options.defaultErrorStatuses ?? DEFAULT_ERROR_STATUSES,
  );
  const skipDeprecated = options.skipDeprecated ?? true;

  // Error class names and the service name are reserved up front so schema
  // components can never steal them.
  const errorIds = new Map<string, string>(); // class name → shape id
  for (const cls of new Set(Object.values(statusToErrorClass))) {
    errorIds.set(cls, `${ctx.ns}#${uniqueName(ctx, cls)}`);
  }
  const serviceName = uniqueName(ctx, options.serviceName);

  const usedErrors = new Map<string, number>(); // class name → first status
  const serviceOps: Array<{ target: string }> = [];

  for (const [rawPath, pathItem] of Object.entries(doc.paths ?? {})) {
    if (!pathItem || typeof pathItem !== "object") continue;
    for (const method of HTTP_METHODS) {
      const op = (pathItem as any)[method];
      if (!op || typeof op !== "object") continue;
      if (skipDeprecated && op.deprecated === true) continue;

      const opName = pascal(
        typeof op.operationId === "string" && op.operationId
          ? op.operationId
          : `${method}_${rawPath}`,
      );

      const params = collectParams(ctx, pathItem, op);

      // ---- URI + labels (sanitize placeholder names to member idents) ----
      let uri = rawPath.split(/[?#]/)[0]!;
      const rawLabels = Array.from(uri.matchAll(/\{([^}]+)\}/g)).map(
        (m) => m[1]!,
      );
      const members: Record<string, any> = {};
      const addMember = (name: string, member: any): boolean => {
        if (name in members) return false;
        members[name] = member;
        return true;
      };

      for (const raw of rawLabels) {
        const san = memberIdent(raw);
        if (san !== raw) uri = uri.split(`{${raw}}`).join(`{${san}}`);
        const p = params.find((x) => x.in === "path" && x.name === raw);
        addMember(san, {
          target: labelTarget(ctx, p?.schema, `${opName}Request${pascal(san)}`),
          traits: {
            "smithy.api#httpLabel": {},
            "smithy.api#required": {},
            ...(p?.description
              ? { "smithy.api#documentation": p.description }
              : {}),
          },
        });
      }

      // ---- Query params ----
      for (const p of params) {
        if (p.in !== "query") continue;
        if (options.apiVersion !== undefined && p.name === "api-version") {
          continue;
        }
        const san = memberIdent(p.name);
        const conv = convertSchema(
          ctx,
          p.schema,
          `${opName}Request${pascal(p.name)}`,
          0,
        );
        addMember(san, {
          target: conv.target,
          traits: {
            "smithy.api#httpQuery": p.name,
            ...(p.required ? { "smithy.api#required": {} } : {}),
            ...(p.description
              ? { "smithy.api#documentation": p.description }
              : {}),
          },
        });
      }

      // ---- Request body (json > form-urlencoded > multipart) ----
      let contentType: "form-urlencoded" | "multipart" | undefined;
      let bodySchema: any;
      let bodyRequired = false;
      if (version === "2.0") {
        const bodyParam = params.find((p) => p.in === "body");
        bodySchema = bodyParam?.schema;
        bodyRequired = bodyParam?.required === true;
      } else if (op.requestBody) {
        const rb = op.requestBody.$ref
          ? resolvePointer(doc, op.requestBody.$ref)
          : op.requestBody;
        bodyRequired = rb?.required === true;
        const content = rb?.content ?? {};
        if (content["application/json"]) {
          bodySchema = content["application/json"].schema;
        } else if (content["application/x-www-form-urlencoded"]) {
          bodySchema = content["application/x-www-form-urlencoded"].schema;
          contentType = "form-urlencoded";
        } else if (content["multipart/form-data"]) {
          bodySchema = content["multipart/form-data"].schema;
          contentType = "multipart";
        }
      }
      if (bodySchema !== undefined) {
        const flat = flattenObject(ctx, bodySchema);
        if (Object.keys(flat.properties).length > 0) {
          const bodyMembers = buildMembers(
            ctx,
            flat.properties,
            flat.required,
            `${opName}Request`,
            0,
          );
          for (const [mn, m] of Object.entries(bodyMembers)) {
            addMember(mn, m); // labels win, then query, then body
          }
        } else if (!flat.isObject) {
          // Non-object body (bare array/scalar) → sole `body` member sent as
          // the entire request body (`smithy.api#httpPayload`).
          const conv = convertSchema(
            ctx,
            bodySchema,
            `${opName}RequestBody`,
            0,
          );
          if (conv.target !== PRELUDE.Document || deref(ctx, bodySchema)) {
            addMember("body", {
              target: conv.target,
              traits: {
                "smithy.api#httpPayload": {},
                ...(bodyRequired ? { "smithy.api#required": {} } : {}),
              },
            });
          }
        }
      }

      // ---- Input shape ----
      const inputTarget =
        Object.keys(members).length > 0
          ? addShape(ctx, `${opName}Request`, {
              type: "structure",
              members,
              traits: { "smithy.api#input": {} },
            })
          : PRELUDE.Unit;

      // ---- Output shape ----
      const { schema: respSchema } = successSchema(ctx, op.responses);
      let outputTarget: string = PRELUDE.Unit;
      if (respSchema !== undefined) {
        const flat = flattenObject(ctx, respSchema);
        if (Object.keys(flat.properties).length > 0) {
          const resolved = deref(ctx, respSchema);
          const isPlainRef =
            typeof respSchema.$ref === "string" &&
            !Array.isArray(resolved?.allOf) &&
            isNameable(ctx, resolved);
          if (isPlainRef) {
            // Reuse the named component shape as the output directly.
            outputTarget = convertSchema(ctx, respSchema, opName, 0).target;
          } else {
            outputTarget = addShape(ctx, `${opName}Response`, {
              type: "structure",
              members: buildMembers(
                ctx,
                flat.properties,
                flat.required,
                `${opName}Response`,
                0,
              ),
              traits: { "smithy.api#output": {} },
            });
          }
        } else if (!flat.isObject) {
          const conv = convertSchema(
            ctx,
            respSchema,
            `${opName}ResponseBody`,
            0,
          );
          if (conv.target !== PRELUDE.Document || deref(ctx, respSchema)) {
            // Bare array/scalar response → wrapper whose sole member IS the
            // payload; the SdkSpec's rootPipe collapses the wrapper.
            outputTarget = addShape(ctx, `${opName}Response`, {
              type: "structure",
              members: {
                body: {
                  target: conv.target,
                  traits: {
                    [RAW_RESPONSE_TRAIT]: {},
                    "smithy.api#required": {},
                  },
                },
              },
              traits: { "smithy.api#output": {} },
            });
          }
        }
        // flat.isObject with no properties → opaque object; Unit is wrong,
        // Document-typed raw wrapper is closer:
        if (
          outputTarget === PRELUDE.Unit &&
          flat.isObject &&
          Object.keys(flat.properties).length === 0
        ) {
          outputTarget = addShape(ctx, `${opName}Response`, {
            type: "structure",
            members: {
              body: {
                target: PRELUDE.Document,
                traits: { [RAW_RESPONSE_TRAIT]: {}, "smithy.api#required": {} },
              },
            },
            traits: { "smithy.api#output": {} },
          });
        }
      }

      // ---- Errors ----
      const errors: Array<{ target: string }> = [];
      for (const status of Object.keys(op.responses ?? {})) {
        if (!/^[45]\d\d$/.test(status)) continue;
        if (defaultErrorStatuses.has(status)) continue;
        const cls = statusToErrorClass[status];
        if (!cls) continue;
        const id = errorIds.get(cls)!;
        if (!usedErrors.has(cls)) usedErrors.set(cls, Number(status));
        if (!errors.some((e) => e.target === id)) errors.push({ target: id });
      }

      // ---- Pagination ----
      const pagination = detectPagination(ctx, params, respSchema);

      // ---- Operation shape ----
      const httpTrait: Record<string, any> = {
        method: method.toUpperCase(),
        uri,
        code: 200,
      };
      if (contentType === "multipart") httpTrait.contentType = "multipart";
      const traits: Record<string, any> = { "smithy.api#http": httpTrait };
      const documentation = opDoc(op);
      if (documentation) traits["smithy.api#documentation"] = documentation;
      if (pagination) traits["smithy.api#paginated"] = pagination;
      if (contentType) traits[CONTENT_TYPE_TRAIT] = contentType;
      if (options.apiVersion !== undefined) {
        traits[API_VERSION_TRAIT] = options.apiVersion;
      }

      const opId = addShape(ctx, opName, {
        type: "operation",
        input: { target: inputTarget },
        output: { target: outputTarget },
        ...(errors.length ? { errors } : {}),
        traits,
      });
      serviceOps.push({ target: opId });
    }
  }

  // ---- Error shapes (one per used class) ----
  for (const [cls, status] of usedErrors) {
    const id = errorIds.get(cls)!;
    const base = {
      type: "structure",
      members: {},
      traits: {
        "smithy.api#error": status < 500 ? "client" : "server",
        "smithy.api#httpError": status,
        [ERROR_MATCHERS_TRAIT]: [{ status }],
      },
    };
    const override = options.errorShapes?.[cls];
    ctx.shapes[id] = override
      ? {
          ...base,
          ...override,
          traits: { ...base.traits, ...(override.traits ?? {}) },
        }
      : base;
  }

  // ---- Service shape ----
  ctx.shapes[`${ctx.ns}#${serviceName}`] = {
    type: "service",
    version:
      options.serviceVersion ??
      (typeof doc.info?.version === "string" ? doc.info.version : "1.0"),
    operations: serviceOps,
    traits: {
      "smithy.api#title":
        typeof doc.info?.title === "string"
          ? doc.info.title
          : options.serviceName,
      ...(typeof doc.info?.description === "string"
        ? {
            "smithy.api#documentation": trimDescription(doc.info.description),
          }
        : {}),
    },
  };

  return {
    smithy: "2.0",
    metadata: {
      suppressions: [
        { id: "HttpUriConflict", namespace: "*" },
        { id: "HttpMethodSemantics", namespace: "*" },
        { id: "UnreferencedShape", namespace: "*" },
      ],
    },
    shapes: ctx.shapes,
  };
};
