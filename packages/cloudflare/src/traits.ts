/**
 * Cloudflare traits - re-exports shared traits and adds Cloudflare-specific ones.
 */
export * from "@distilled.cloud/core/traits";

import { makeAnnotation, getAnnotation } from "@distilled.cloud/core/traits";
import * as AST from "effect/SchemaAST";

// =============================================================================
// Cloudflare-specific Traits
// =============================================================================

/** Symbol for error matchers (code + message pattern matching) */
export const errorMatchersSymbol = Symbol.for(
  "@distilled.cloud/cf/error-matchers",
);

export interface ErrorMatcher {
  code?: number;
  status?: number;
  message?: string | { includes: string };
}

/**
 * Apply error matchers to a class's AST annotations, returning the class so it
 * can be used directly in an `extends` clause:
 *
 * ```ts
 * export class Foo extends T.applyErrorMatchers(
 *   Schema.TaggedErrorClass<Foo>()("Foo", { ... }),
 *   [{ code: 1234 }],
 * ) {}
 * ```
 *
 * Mutating the base class's annotations propagates to the subclass — Effect's
 * Class API reuses the same AST reference — so matchers stay readable via
 * `getErrorMatchers(Foo.ast)`. Returning the class (instead of running as a
 * void top-level statement) keeps the module free of bare side-effect
 * statements, so the bundler can tree-shake unused error classes out of Worker
 * bundles.
 *
 * `.pipe()` is deliberately not used: piping a class returns a schema (not a
 * class), which can't appear in an `extends` clause.
 */
export const applyErrorMatchers = <C extends { ast: AST.AST }>(
  cls: C,
  matchers: ErrorMatcher[],
): C => {
  const annotations = cls.ast.annotations as Record<symbol, unknown>;
  annotations[errorMatchersSymbol] = matchers;
  return cls;
};

export const getErrorMatchers = (ast: AST.AST) =>
  getAnnotation<ErrorMatcher[]>(ast, errorMatchersSymbol);

/** Symbol for content type override (e.g., multipart) */
export const contentTypeSymbol = Symbol.for("@distilled.cloud/cf/content-type");

export const ContentType = (type: string) =>
  makeAnnotation(contentTypeSymbol, type);

export const getContentType = (ast: AST.AST) =>
  getAnnotation<string>(ast, contentTypeSymbol);
