/**
 * Minimal schemas for generated SDK code: plain objects shaped like Effect
 * Schema ASTs (`_tag`, `annotations`, `propertySignatures`, `types`,
 * `thunk`, `encoding`), without Effect Schema's parser, issue and
 * transformation machinery.
 *
 * Request encoding and lenient response decoding only walk the AST: they
 * read wire names, HTTP bindings and the shape of the value. Importing
 * `effect/Schema` to build those ASTs put about 37 KB gzip of decode
 * machinery into every bundle that never decodes. These nodes carry the
 * same fields protocol code reads, so it runs unchanged.
 *
 * When a caller asks for real validation (`ResponseValidation.strict`),
 * {@link toEffect} rebuilds the equivalent Effect schema from a lite node,
 * loading `effect/Schema` only then.
 *
 * Every value here has the members generated code uses on schemas: `.ast`,
 * `.pipe(...)`, `.annotate(...)`, `.fields` (structs) and `.key`/`.value`
 * (records).
 */
import * as Data from "effect/Data";
import { pipeArguments } from "effect/Pipeable";

export type Annotations = Record<string | symbol, unknown>;

/** A lite AST node. Field names match Effect's SchemaAST where protocols read them. */
export interface Node {
  readonly _tag: string;
  readonly annotations?: Annotations;
  readonly encoding?: undefined;
  readonly context?: { readonly isOptional: boolean };
  /** Objects */
  readonly propertySignatures?: ReadonlyArray<PropertySignature>;
  readonly indexSignatures?: ReadonlyArray<{ readonly parameter: Node; readonly type: Node }>;
  /** Union */
  readonly types?: ReadonlyArray<Node>;
  /** Arrays */
  readonly elements?: ReadonlyArray<Node>;
  readonly rest?: ReadonlyArray<Node>;
  /** Suspend */
  readonly thunk?: () => Node;
  /** Literal */
  readonly literal?: unknown;
  /** Declaration */
  readonly typeParameters?: ReadonlyArray<Node>;
}

export interface PropertySignature {
  readonly name: PropertyKey;
  readonly type: Node;
}

/** A lite schema value: what generated code holds and passes around. */
export interface Lite {
  readonly ast: Node;
  readonly "~lite": true;
  pipe(...fns: ReadonlyArray<(s: any) => any>): any;
  annotate(annotations: Annotations): Lite;
}

/** Marks lite nodes so strict validation knows to convert them. */
export const liteKey = "~lite";
const node = <N extends Node>(n: N): N => Object.assign(n, { [liteKey]: true });

const Proto = {
  "~lite": true,
  pipe(this: Lite) {
    return pipeArguments(this, arguments);
  },
  annotate(this: Lite, annotations: Annotations): Lite {
    return make(
      { ...this.ast, annotations: { ...this.ast.annotations, ...annotations } } as Node,
      this,
    );
  },
};

const make = (ast: Node, from?: object): Lite => {
  const self = Object.create(Proto) as { ast: Node };
  self.ast = ast;
  // Struct `.fields` and record `.key`/`.value` travel with annotate.
  if (from)
    for (const k of ["fields", "key", "value"]) if (k in from) (self as any)[k] = (from as any)[k];
  return self as unknown as Lite;
};

export const isLite = (u: unknown): u is Lite =>
  (typeof u === "object" || typeof u === "function") && u !== null && (u as Lite)["~lite"] === true;

const astOf = (s: Lite | { readonly ast: Node }): Node => s.ast;

//#region primitives

export const String: Lite = /*@__PURE__*/ make(node({ _tag: "String" }));
export const Number: Lite = /*@__PURE__*/ make(node({ _tag: "Number" }));
export const Boolean: Lite = /*@__PURE__*/ make(node({ _tag: "Boolean" }));
export const Unknown: Lite = /*@__PURE__*/ make(node({ _tag: "Unknown" }));
export const Any: Lite = /*@__PURE__*/ make(node({ _tag: "Any" }));
export const Null: Lite = /*@__PURE__*/ make(node({ _tag: "Null" }));
export const Void: Lite = /*@__PURE__*/ make(node({ _tag: "Void" }));
export const Undefined: Lite = /*@__PURE__*/ make(node({ _tag: "Undefined" }));

//#endregion

//#region combinators

export const Literal = (value: unknown): Lite => make(node({ _tag: "Literal", literal: value }));

export const Literals = (values: ReadonlyArray<unknown>): Lite =>
  make(node({ _tag: "Union", types: values.map((v) => node({ _tag: "Literal", literal: v })) }));

export const optional = (s: Lite): Lite => {
  const inner = astOf(s);
  return make(
    node({
      _tag: "Union",
      types: [inner, node({ _tag: "Undefined" })],
      context: { isOptional: true },
    }),
  );
};

export const NullOr = (s: Lite): Lite =>
  make(node({ _tag: "Union", types: [astOf(s), node({ _tag: "Null" })] }));

export const Union = (members: ReadonlyArray<Lite>): Lite =>
  make(node({ _tag: "Union", types: members.map(astOf) }));

export const Array = (item: Lite): Lite =>
  make(node({ _tag: "Arrays", elements: [], rest: [astOf(item)] }));

export const Tuple = (elements: ReadonlyArray<Lite>): Lite =>
  make(node({ _tag: "Arrays", elements: elements.map(astOf), rest: [] }));

export const Record = (key: Lite, value: Lite): Lite => {
  const s = make(
    node({
      _tag: "Objects",
      propertySignatures: [],
      indexSignatures: [{ parameter: astOf(key), type: astOf(value) }],
    }),
  );
  (s as any).key = key;
  (s as any).value = value;
  return s;
};

export const Struct = (fields: Readonly<Record<string, Lite>>): Lite => {
  const s = make(
    node({
      _tag: "Objects",
      propertySignatures: Object.keys(fields).map((name) => {
        const type = astOf(fields[name]!);
        return { name, type };
      }),
      indexSignatures: [],
    }),
  );
  (s as any).fields = fields;
  return s;
};

/** A lazily resolved schema; `.ast` is a Suspend node whose thunk resolves the target. */
export const suspend = (f: () => Lite): Lite => {
  let resolved: Node | undefined;
  return make(node({ _tag: "Suspend", thunk: () => (resolved ??= astOf(f())) }));
};

/** Rename struct keys on the wire: `{ typeKey: "wire_key" }`. */
export const encodeKeys =
  (mapping: Readonly<Record<string, string>>) =>
  (s: Lite): Lite =>
    s.annotate({ [encodeKeysKey]: mapping });
export const encodeKeysKey = "@distilled.cloud/core/schema-lite/encodeKeys";

//#endregion

//#region declarations and errors

const declaration = (identifier: string): Lite =>
  make(node({ _tag: "Declaration", typeParameters: [], annotations: { identifier } }));

export const Date: Lite = /*@__PURE__*/ declaration("Date");
export const Duration: Lite = /*@__PURE__*/ declaration("Duration");
export const Redacted = (value: Lite): Lite =>
  make(
    node({
      _tag: "Declaration",
      typeParameters: [astOf(value)],
      annotations: { identifier: "Redacted" },
    }),
  );
export const instanceOf = (cls: Function, annotations?: Annotations): Lite =>
  make(
    node({
      _tag: "Declaration",
      typeParameters: [],
      annotations: { identifier: cls.name, ...annotations },
    }),
  );
export const declare = (_is: (u: unknown) => boolean, annotations?: Annotations): Lite =>
  make(node({ _tag: "Declaration", typeParameters: [], annotations: { ...annotations } }));

/**
 * A tagged error class without Effect Schema: a yieldable `Data.TaggedError`
 * that keeps only its declared fields (as the schema class did) and carries
 * `.fields`, `.ast` and a static `.pipe` for category decorators. It does not
 * validate on construction.
 */
export const TaggedError =
  (_identifier?: string) =>
  (tag: string, fields: Readonly<Record<string, Lite>> = {}): any => {
    const keys = Object.keys(fields);
    const Base = Data.TaggedError(tag) as any;
    class LiteTaggedError extends Base {
      constructor(props?: Record<string, unknown>) {
        const picked: Record<string, unknown> = {};
        if (props) for (const k of keys) if (props[k] !== undefined) picked[k] = props[k];
        super(picked);
      }
      static fields = fields;
      static identifier = tag;
      static get ast(): Node {
        return node({ _tag: "Declaration", typeParameters: [], annotations: { identifier: tag } });
      }
      static pipe(this: unknown) {
        return pipeArguments(this, arguments);
      }
    }
    return LiteTaggedError;
  };

/** Schema `j` of builder `build`, made on first use (the lite `chunks.at`). */
export const at = (build: (j: number) => unknown, j: number): any =>
  suspend(() => build(j) as Lite);

//#endregion

//#region Effect Schema bridge (strict validation only)

/**
 * The Effect schema equivalent to a lite node, for strict decoding. Loaded
 * on demand so `effect/Schema` is only bundled/imported by callers that
 * validate.
 */
/** The Effect Schema functions the bridge uses (passed in, so callers import only these). */
export type EffectSchemaApi = Pick<
  typeof import("effect/Schema"),
  | "Any"
  | "Array"
  | "Boolean"
  | "Literal"
  | "Null"
  | "Number"
  | "Record"
  | "String"
  | "Struct"
  | "Tuple"
  | "Undefined"
  | "Union"
  | "Unknown"
  | "Void"
  | "make"
  | "optional"
  | "suspend"
>;

export const toEffect = (S: EffectSchemaApi, ast: Node): unknown => {
  const memo = new Map<Node, any>();
  // Whether a lite node sits anywhere under `n` (cycles count as no).
  const liteBelow = new Map<Node, boolean>();
  const hasLite = (n: Node): boolean => {
    const known = liteBelow.get(n);
    if (known !== undefined) return known;
    liteBelow.set(n, false);
    const kids: Node[] = [
      ...(n.types ?? []),
      ...(n.elements ?? []),
      ...(n.rest ?? []),
      ...(n.typeParameters ?? []),
      ...(n.propertySignatures ?? []).map((p) => p.type),
      ...(n.indexSignatures ?? []).flatMap((i) => [i.parameter, i.type]),
      ...(((n as any).encoding ?? []) as Array<{ to: Node }>).map((l) => l.to),
      ...(n._tag === "Suspend" && n.thunk ? [n.thunk()] : []),
    ];
    const r = !!(n as any)[liteKey] || kids.some(hasLite);
    liteBelow.set(n, r);
    return r;
  };
  const build = (n: Node): any => {
    const hit = memo.get(n);
    if (hit) return hit;
    // A real Effect subtree with nothing lite below keeps its exact schema.
    if (!(n as any)[liteKey] && !hasLite(n)) {
      const real = S.make(n as any);
      memo.set(n, real);
      return real;
    }
    let out: any;
    switch (n._tag) {
      case "String":
        out = S.String;
        break;
      case "Number":
        out = S.Number;
        break;
      case "Boolean":
        out = S.Boolean;
        break;
      case "Null":
        out = S.Null;
        break;
      case "Undefined":
        out = S.Undefined;
        break;
      case "Void":
        out = S.Void;
        break;
      case "Any":
        out = S.Any;
        break;
      case "Literal":
        out = S.Literal(n.literal as any);
        break;
      case "Union":
        out = n.context?.isOptional
          ? S.optional(build(n.types![0]!))
          : S.Union(n.types!.map(build));
        break;
      case "Arrays":
        out = n.rest!.length ? S.Array(build(n.rest![0]!)) : S.Tuple(n.elements!.map(build));
        break;
      case "Objects":
        out = n.indexSignatures?.length
          ? S.Record(build(n.indexSignatures[0]!.parameter), build(n.indexSignatures[0]!.type))
          : S.Struct(Object.fromEntries(n.propertySignatures!.map((p) => [p.name, build(p.type)])));
        break;
      case "Suspend": {
        const thunk = n.thunk!;
        out = S.suspend(() => build(thunk()));
        break;
      }
      case "Declaration":
        out = S.Unknown;
        break;
      case "Unknown":
        out = S.Unknown;
        break;
      default:
        // A lite tag with no case maps to Unknown; a real node keeps its schema.
        out = (n as any)[liteKey] ? S.Unknown : S.make(n as any);
    }
    memo.set(n, out);
    return out;
  };
  return build(ast);
};

//#endregion
