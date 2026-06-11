/**
 * Re-export the shared traits system from sdk-core, plus Railway-specific
 * traits for matching GraphQL errors to typed error classes.
 */
export * from "@distilled.cloud/core/traits";

import { getAnnotation } from "@distilled.cloud/core/traits";
import type * as AST from "effect/SchemaAST";

// =============================================================================
// Railway-specific Traits
// =============================================================================

/** Symbol for error matchers (GraphQL error code + message pattern matching) */
export const errorMatchersSymbol = Symbol.for(
  "@distilled.cloud/railway/error-matchers",
);

/**
 * A single matcher tested against an observed Railway GraphQL error.
 *
 * - `code` — exact match against `errors[0].extensions.code`
 * - `status` — exact match against the HTTP status code
 * - `message` — exact match, or substring match via `{ includes }`,
 *   against `errors[0].message`
 *
 * All specified fields must match (AND). At least one field is required.
 */
export interface ErrorMatcher {
  code?: string;
  status?: number;
  message?: string | { includes: string };
}

/**
 * Apply error matchers directly to a class's AST annotations.
 * Used for TaggedErrorClass where .pipe() on a class returns a schema
 * (not a class), breaking `extends ... .pipe(...)`.
 */
export const applyErrorMatchers = (
  cls: { ast: AST.AST },
  matchers: ErrorMatcher[],
): void => {
  const annotations = cls.ast.annotations as Record<symbol, unknown>;
  annotations[errorMatchersSymbol] = matchers;
};

export const getErrorMatchers = (ast: AST.AST): ErrorMatcher[] | undefined =>
  getAnnotation<ErrorMatcher[]>(ast, errorMatchersSymbol);
