/**
 * `any`-collapsing re-export of `effect/Schema` for generated service files.
 *
 * This is the single, shared definition consumed by every code-generated
 * provider package via `@distilled.cloud/core/schema`. Do not copy it into
 * individual packages.
 *
 * Every real TYPE (`Schema`, `Codec`, `Top`, …) is re-exported untouched, so
 * the `Schema.Schema<Foo>` annotations on generated consts (and the public
 * `.d.ts`) stay precise. The schema *construction surface* (`Struct`,
 * `optional`, `suspend`, …) and the leaf scalar schemas are retyped to `any`,
 * so the compiler instantiates none of the heavy Schema generics while
 * building a service file — the explicit annotations carry the real types.
 *
 * Overriding a *value* export never affects the same-named *type* export (they
 * live in separate namespaces and continue to flow through `export *`), so
 * `Schema.Literal<"x">`-style type usages remain precise.
 *
 * Runtime behaviour is identical. Every override aliases the exact same
 * runtime value from `effect/Schema`, except {@link suspend}, which builds
 * the same AST lazily (see there).
 */
export * from "effect/Schema";

import * as S from "effect/Schema";

export type AnyFn = (...args: any[]) => any;

// Construction surface — collapse to `any` so generics are never instantiated.
export const optional: AnyFn = S.optional as AnyFn;
export const Struct: AnyFn = S.Struct as AnyFn;
export const suspend: AnyFn = (f: () => S.Top) => lazySuspend(f);
export const Array: AnyFn = S.Array as AnyFn;
export const Record: AnyFn = S.Record as AnyFn;
export const Union: AnyFn = S.Union as AnyFn;
export const Literal: AnyFn = S.Literal as AnyFn;
export const Literals: AnyFn = S.Literals as AnyFn;
export const NullOr: AnyFn = S.NullOr as AnyFn;
export const Tuple: AnyFn = S.Tuple as AnyFn;
export const encodeKeys: AnyFn = S.encodeKeys as AnyFn;

// Leaf schemas — collapse to `any` so `.pipe(...)` on them is free.
export const String: any = S.String;
export const Number: any = S.Number;
export const Boolean: any = S.Boolean;
export const Date: any = S.Date;
export const Unknown: any = S.Unknown;
export const Null: any = S.Null;
export const Void: any = S.Void;
export const Any: any = S.Any;

// NOTE: `Schema` / `Codec` (types) and `TaggedError` are intentionally NOT
// overridden — they flow through `export *` with real types so cast targets and
// typed error classes stay precise.

//#region Lazy suspend

/**
 * `S.suspend(f)` with its AST built on first `.ast` access instead of at
 * import.
 *
 * A service module declares every schema as a top-level
 * `S.suspend(() => …).annotate({ identifier })` const, and importing it
 * constructs all of them: EC2 has 2,575, Elasticsearch 3,272. Effect's
 * `suspend` allocates a schema function object, a `Suspend` AST node and a
 * wrapper closure, and `.annotate` copies them again: about 550 bytes per
 * schema. This keeps one small object holding the thunk (and any
 * annotations added before the AST exists): about 180 bytes.
 *
 * The object inherits Effect's own schema prototype, so `pipe`, `annotate`,
 * `make`, `isSchema` and every combinator behave as for any schema. Its AST
 * is built by `S.suspend(f).annotate(annotations)` on first access and
 * memoized, so it is the same AST as before and its identity is stable.
 */
const SchemaProto: object = Object.getPrototypeOf(S.suspend(() => S.String));
const thunkKey = Symbol.for("@distilled.cloud/core/schema/thunk");
const annotationsKey = Symbol.for("@distilled.cloud/core/schema/annotations");

type Annotations = Record<string, unknown>;

interface LazySchema {
  readonly [thunkKey]: () => S.Top;
  readonly [annotationsKey]?: Annotations;
}

const LazySuspendProto: object = Object.create(SchemaProto, {
  ast: {
    configurable: true,
    get(this: LazySchema) {
      const annotations = this[annotationsKey];
      const eager = S.suspend(this[thunkKey]);
      const ast = (annotations ? eager.annotate(annotations) : eager).ast;
      Object.defineProperty(this, "ast", {
        value: ast,
        writable: true,
        enumerable: true,
        configurable: true,
      });
      return ast;
    },
  },
  annotate: {
    configurable: true,
    writable: true,
    value(this: LazySchema, annotations: Annotations) {
      // Once the AST exists, annotate like any schema (a rebuilt copy).
      if (Object.hasOwn(this, "ast")) {
        return (SchemaProto as { annotate: Function }).annotate.call(this, annotations);
      }
      const previous = this[annotationsKey];
      return makeLazy(this[thunkKey], previous ? { ...previous, ...annotations } : annotations);
    },
  },
});

const makeLazy = (f: () => S.Top, annotations?: Annotations): S.Top => {
  const self = Object.create(LazySuspendProto);
  self[thunkKey] = f;
  if (annotations) self[annotationsKey] = annotations;
  return self;
};

const lazySuspend = (f: () => S.Top): S.Top =>
  // Effect detects schemas by this key on the prototype; if a future Effect
  // moves it, fall back to the eager `S.suspend`.
  (SchemaProto as Record<string, unknown>)["~effect/Schema/Schema"] === undefined
    ? S.suspend(f)
    : makeLazy(f);

//#endregion
