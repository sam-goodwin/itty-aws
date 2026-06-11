/**
 * Railway API client.
 *
 * Railway's public API is a single GraphQL endpoint at
 * `${apiBaseUrl}/graphql/v2` (backboard.railway.com). All operations are
 * dispatched as `POST /graphql/v2` with a `{ query, operationName, variables }`
 * envelope — the shared client takes care of that wrapping when an operation's
 * input schema carries a `T.GraphQLOp` annotation (see `scripts/generate.ts`).
 *
 * Errors come back two ways:
 *
 * 1. HTTP status >= 400 (network/auth/rate-limit errors).
 * 2. HTTP 200 with `{ errors: [...] }` (GraphQL validation/business errors).
 *    Each error has `message` and (usually) `extensions.code`. The shared
 *    client detects this case and routes the envelope through `matchError`.
 *
 * `matchError` first tests the operation's patched error classes (declared in
 * `patches/{operationName}.json` and baked into each operation's `errors`
 * array by the generator) via their `T.applyErrorMatchers` annotations, then
 * falls back to the HTTP status map, and finally to `UnknownRailwayError`.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { Credentials } from "./credentials.ts";
import {
  HTTP_STATUS_MAP,
  RailwayParseError,
  UnknownRailwayError,
} from "./errors.ts";
import { Retry } from "./retry.ts";
import { getErrorMatchers, type ErrorMatcher } from "./traits.ts";

/**
 * Single GraphQL error in the `errors[]` array of a response envelope.
 * Railway's gateway is Apollo-based: errors carry `message` and an
 * `extensions.code` string (e.g. `"NOT_AUTHORIZED"`).
 */
const GraphQLError = Schema.Struct({
  message: Schema.String,
  path: Schema.optional(Schema.Array(Schema.Unknown)),
  locations: Schema.optional(Schema.Array(Schema.Unknown)),
  extensions: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
    }),
  ),
});

/** Top-level GraphQL envelope for an error response. */
const GraphQLEnvelope = Schema.Struct({
  data: Schema.optional(Schema.NullOr(Schema.Unknown)),
  errors: Schema.optional(Schema.Array(GraphQLError)),
});

const decodeEnvelope = Schema.decodeUnknownOption(GraphQLEnvelope);

/** Check if a GraphQL error matches an expression-based matcher. */
const matchesExpression = (
  matcher: ErrorMatcher,
  code: string | undefined,
  status: number,
  message: string,
): boolean => {
  if (
    matcher.code === undefined &&
    matcher.status === undefined &&
    matcher.message === undefined
  ) {
    return false;
  }
  if (matcher.code !== undefined && matcher.code !== code) return false;
  if (matcher.status !== undefined && matcher.status !== status) return false;
  if (matcher.message !== undefined) {
    if (typeof matcher.message === "string") {
      if (matcher.message !== message) return false;
    } else if (!message.includes(matcher.message.includes)) {
      return false;
    }
  }
  return true;
};

const matcherSpecificity = (matcher: ErrorMatcher): number => {
  let score = 0;
  if (matcher.code !== undefined) score += 1;
  if (matcher.status !== undefined) score += 1;
  if (matcher.message !== undefined) score += 1;
  return score;
};

interface PatchedErrorClass {
  ast: Schema.Top["ast"];
  new (props: { message: string; code?: string }): unknown;
}

/**
 * Find the most specific patched error class whose matchers match the
 * observed GraphQL error.
 */
const findMatchingError = (
  errors: readonly unknown[] | undefined,
  code: string | undefined,
  status: number,
  message: string,
): PatchedErrorClass | undefined => {
  if (!errors || errors.length === 0) return undefined;

  let bestMatch: PatchedErrorClass | undefined;
  let bestScore = 0;

  for (const errorClass of errors) {
    const cls = errorClass as PatchedErrorClass;
    const matchers = getErrorMatchers(cls.ast);
    if (!matchers || matchers.length === 0) continue;

    for (const matcher of matchers) {
      if (matchesExpression(matcher, code, status, message)) {
        const score = matcherSpecificity(matcher);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = cls;
        }
      }
    }
  }

  return bestMatch;
};

/** Map an HTTP status to a common error class, with retry-after support. */
const httpStatusError = (
  status: number,
  message: string,
  headers?: Record<string, string | undefined>,
): unknown | undefined => {
  const StatusClass = (HTTP_STATUS_MAP as Record<number, unknown>)[status] as
    | (new (args: {
        message: string;
        retryAfter?: ReturnType<typeof parseRetryAfterForStatus>;
      }) => unknown)
    | undefined;
  if (!StatusClass) return undefined;
  return new StatusClass({
    message,
    retryAfter: parseRetryAfterForStatus(status, headers),
  });
};

/**
 * Match a Railway error response (GraphQL envelope or HTTP-level body) to the
 * appropriate error class.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  // Try the GraphQL envelope first — works for both HTTP 200 with errors[]
  // and HTTP 4xx/5xx responses returned by the GraphQL gateway.
  const envelope = decodeEnvelope(errorBody);
  if (envelope._tag === "Some" && envelope.value.errors?.length) {
    const first = envelope.value.errors[0];
    const code = first.extensions?.code;
    const message = first.message;

    // 1. Per-operation patched error classes (from patches/*.json)
    const Matched = findMatchingError(errors, code, status, message);
    if (Matched) {
      return Effect.fail(new Matched({ message, code }));
    }

    // 2. HTTP status map (auth failures, rate limits, ...)
    const statusError = httpStatusError(status, message, headers);
    if (status >= 400 && statusError) {
      return Effect.fail(statusError);
    }

    // 3. Catch-all — the signal to add a patch.
    return Effect.fail(
      new UnknownRailwayError({ code, message, body: errorBody }),
    );
  }

  // Not a GraphQL envelope — plain HTTP-level error.
  const message =
    typeof errorBody === "string" ? errorBody : JSON.stringify(errorBody);
  const statusError = httpStatusError(status, message, headers);
  if (statusError) {
    return Effect.fail(statusError);
  }
  return Effect.fail(new UnknownRailwayError({ message, body: errorBody }));
};

/**
 * Railway GraphQL API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any): Record<string, string> =>
    creds.apiToken
      ? { Authorization: `Bearer ${Redacted.value(creds.apiToken)}` }
      : { "Project-Access-Token": Redacted.value(creds.projectToken) },
  matchError,
  ParseError: RailwayParseError as any,
  retry: Retry as any,
});
