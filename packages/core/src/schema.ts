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
 * runtime value from `effect/Schema`, except `suspend`, `Array` and
 * `Record`, which build the same schema lazily (see "Lazy schemas").
 */
export * from "effect/Schema";

import * as S from "effect/Schema";

export type AnyFn = (...args: any[]) => any;

// Construction surface — collapse to `any` so generics are never instantiated.
export const optional: AnyFn = S.optional as AnyFn;
export const Struct: AnyFn = S.Struct as AnyFn;
export const suspend: AnyFn = (f: () => S.Top) => lazySuspend(f);
export const Array: AnyFn = (item: S.Top) => lazyArray(item);
export const Record: AnyFn = (key: S.Top, value: S.Top) => lazyRecord(key, value);
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

//#region Lazy schemas

/**
 * Schemas whose real Effect schema is built on first use instead of at
 * import.
 *
 * A service module declares every schema as a top-level const, and
 * importing it constructs all of them: EC2 has 2,575 `S.suspend(…)` and
 * 784 `S.Array(…)` consts, Elasticsearch 3,272 and 2,265. An Effect schema
 * is a function object plus an AST node (a `suspend` also a wrapper
 * closure), and `.annotate` copies both: about 550 bytes per suspend, more
 * for an array whose item it forces. A lazy schema is one small object
 * holding how to build the real one and any annotations added before then:
 * about 180 bytes.
 *
 * It inherits Effect's own schema prototype, so `pipe`, `annotate`, `make`,
 * `isSchema` and every combinator see a schema. On first use of `.ast` (or
 * of an own member such as an array's `value`) it builds the real schema —
 * `build().annotate(annotations)`, exactly what eager code would have made —
 * and copies the real schema's own properties onto itself, so from then on
 * it IS that schema: same AST (memoized, stable identity), same rebuild
 * options for later `.annotate` / `.check` calls.
 */
const SchemaProto: object = Object.getPrototypeOf(S.String);
const buildKey = Symbol.for("@distilled.cloud/core/schema/build");
const annotationsKey = Symbol.for("@distilled.cloud/core/schema/annotations");

type Annotations = Record<string, unknown>;

interface LazySchema {
  [buildKey]?: () => S.Top;
  [annotationsKey]?: Annotations;
}

/** Build the real schema and become it. */
const force = (self: LazySchema): void => {
  const build = self[buildKey];
  if (!build) return;
  const annotations = self[annotationsKey];
  const real = annotations ? build().annotate(annotations) : build();
  delete self[buildKey];
  delete self[annotationsKey];
  Object.defineProperties(self, Object.getOwnPropertyDescriptors(real));
};

/** Members a built schema carries as own properties (array item, record key/value). */
const forwarded = (name: string): PropertyDescriptor => ({
  configurable: true,
  get(this: LazySchema & Record<string, unknown>) {
    if (!this[buildKey]) return undefined;
    force(this);
    return this[name];
  },
});

const LazyProto: object = Object.create(SchemaProto, {
  ast: forwarded("ast"),
  value: forwarded("value"),
  key: forwarded("key"),
  annotate: {
    configurable: true,
    writable: true,
    value(this: LazySchema, annotations: Annotations) {
      const build = this[buildKey];
      // Once built, annotate like any schema (a rebuilt copy).
      if (!build) return (SchemaProto as { annotate: Function }).annotate.call(this, annotations);
      const previous = this[annotationsKey];
      return lazy(build, previous ? { ...previous, ...annotations } : annotations);
    },
  },
});

// Effect detects schemas by this key on the prototype; if a future Effect
// moves it, build eagerly.
const supported = (SchemaProto as Record<string, unknown>)["~effect/Schema/Schema"] !== undefined;

const lazy = (build: () => S.Top, annotations?: Annotations): S.Top => {
  if (!supported) return annotations ? build().annotate(annotations) : build();
  const self = Object.create(LazyProto);
  self[buildKey] = build;
  if (annotations) self[annotationsKey] = annotations;
  return self;
};

const lazySuspend = (f: () => S.Top): S.Top => lazy(() => S.suspend(f));
const lazyArray = (item: S.Top): S.Top => lazy(() => S.Array(item));
const lazyRecord = (key: S.Top, value: S.Top): S.Top => lazy(() => S.Record(key as any, value));

//#endregion
