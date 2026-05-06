/**
 * GCP traits - re-exports shared traits and adds GCP-specific ones.
 */
export * from "@distilled.cloud/core/traits";

import { getAnnotation } from "@distilled.cloud/core/traits";
import * as AST from "effect/SchemaAST";

// =============================================================================
// GCP-specific Error Matcher Traits
// =============================================================================

/** Symbol for error matcher annotations */
export const errorMatchersSymbol = Symbol.for(
  "@distilled.cloud/gcp/error-matchers",
);

export interface ErrorMatcher {
  httpStatus?: number;
  status?: string;
  reason?: string;
  domain?: string;
  message?: string;
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

export const getErrorMatchers = (ast: AST.AST) =>
  getAnnotation<ErrorMatcher[]>(ast, errorMatchersSymbol);
