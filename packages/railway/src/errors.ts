/**
 * Railway-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds typed wrappers for
 * the GraphQL error envelope returned by Railway's backboard. Specific
 * error codes can be added to `RAILWAY_ERROR_CODE_MAP` as they are
 * discovered through testing.
 */
export {
  BadGateway,
  BadRequest,
  Conflict,
  ConfigError,
  Forbidden,
  GatewayTimeout,
  InternalServerError,
  Locked,
  NotFound,
  ServiceUnavailable,
  TooManyRequests,
  Unauthorized,
  UnprocessableEntity,
  HTTP_STATUS_MAP,
  DEFAULT_ERRORS,
  API_ERRORS,
} from "@distilled.cloud/core/errors";
export type { DefaultErrors } from "@distilled.cloud/core/errors";

import * as Schema from "effect/Schema";
import * as Category from "@distilled.cloud/core/category";

/**
 * Catch-all for Railway GraphQL errors that don't match any other tagged
 * class. Carries the raw `errors[]` envelope and a best-effort
 * `code` / `message`.
 */
export class UnknownRailwayError extends Schema.TaggedErrorClass<UnknownRailwayError>()(
  "UnknownRailwayError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Schema parse error wrapper (response body did not match the operation schema). */
export class RailwayParseError extends Schema.TaggedErrorClass<RailwayParseError>()(
  "RailwayParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}

/**
 * Authorization failure surfaced by Railway as
 * `extensions.code = INTERNAL_SERVER_ERROR` + `message = "Not Authorized"`
 * (HTTP 200). Covers missing/invalid bearer tokens AND access denied to
 * resources owned by another workspace (the API does not distinguish).
 */
export class RailwayNotAuthorized extends Schema.TaggedErrorClass<RailwayNotAuthorized>()(
  "RailwayNotAuthorized",
  { message: Schema.String },
).pipe(Category.withAuthError) {}

/**
 * Resource-not-found error surfaced by Railway as
 * `extensions.code = INTERNAL_SERVER_ERROR` + `message` ending in
 * "not found" (e.g. `"Project not found"`, `"Deployment not found"`).
 * HTTP 200 — discriminated purely by message.
 */
export class RailwayNotFound extends Schema.TaggedErrorClass<RailwayNotFound>()(
  "RailwayNotFound",
  { message: Schema.String },
).pipe(Category.withNotFoundError) {}

/**
 * Validation error surfaced by Railway as
 * `extensions.code = INTERNAL_SERVER_ERROR` + `message` starting with
 * "Invalid " (e.g. `"Invalid project name"`). HTTP 200.
 */
export class RailwayInvalidInput extends Schema.TaggedErrorClass<RailwayInvalidInput>()(
  "RailwayInvalidInput",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/**
 * GraphQL validation failure (`extensions.code = GRAPHQL_VALIDATION_FAILED`).
 * Returned with HTTP 400 when the query references unknown fields/types,
 * uses wrong argument types, or is missing required arguments.
 */
export class RailwayGraphQLValidationFailed extends Schema.TaggedErrorClass<RailwayGraphQLValidationFailed>()(
  "RailwayGraphQLValidationFailed",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/**
 * GraphQL parse failure (`extensions.code = GRAPHQL_PARSE_FAILED`). Returned
 * with HTTP 400 when the document itself is not valid GraphQL syntax.
 */
export class RailwayGraphQLParseFailed extends Schema.TaggedErrorClass<RailwayGraphQLParseFailed>()(
  "RailwayGraphQLParseFailed",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/**
 * Railway per-resource quota limit. Surfaced as
 * `extensions.code = INTERNAL_SERVER_ERROR` + a "Whoa there pal!" message
 * (e.g. "Only one project can be created per user every 30s"). These are
 * fixed-window quotas — retrying inside the same test is pointless because
 * the window is longer than typical test timeouts. Tagged as a bad-request
 * error (NOT throttling) so the shared retry pipeline does NOT spin on it.
 * Callers who want to wait should retry at their own cadence.
 */
export class RailwayRateLimited extends Schema.TaggedErrorClass<RailwayRateLimited>()(
  "RailwayRateLimited",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/**
 * Catch-all for opaque Railway server-side failures surfaced as
 * `extensions.code = INTERNAL_SERVER_ERROR` with a non-discriminating
 * message (e.g. "Problem processing request"). Mapped via the message
 * pattern so the error pipeline never falls through to UnknownRailwayError.
 */
export class RailwayServerError extends Schema.TaggedErrorClass<RailwayServerError>()(
  "RailwayServerError",
  { message: Schema.String },
).pipe(Category.withServerError) {}

/**
 * Map from Railway GraphQL `extensions.code` → typed error class.
 *
 * Note: Railway uses `INTERNAL_SERVER_ERROR` as a catch-all for application
 * errors (auth/not-found/validation), so it is intentionally NOT in this
 * map — those are routed via `RAILWAY_MESSAGE_MAP` instead.
 */
// biome-ignore lint/suspicious/noExplicitAny: heterogeneous error class map
export const RAILWAY_ERROR_CODE_MAP: Record<string, any> = {
  GRAPHQL_PARSE_FAILED: RailwayGraphQLParseFailed,
  GRAPHQL_VALIDATION_FAILED: RailwayGraphQLValidationFailed,
};

/**
 * Message-pattern matcher for the `INTERNAL_SERVER_ERROR` catch-all.
 * Each entry is checked in order; the first matching pattern wins.
 *
 * Railway's backboard returns most application errors as
 * `{ extensions: { code: "INTERNAL_SERVER_ERROR" }, message: "..." }`
 * with HTTP 200, so the only way to discriminate them is by message text.
 */
export const RAILWAY_MESSAGE_MAP: ReadonlyArray<{
  pattern: RegExp;
  // biome-ignore lint/suspicious/noExplicitAny: heterogeneous error class map
  errorClass: any;
}> = [
  // Throttling — must be first so retries kick in before any other match.
  { pattern: /^Whoa there pal!/i, errorClass: RailwayRateLimited },
  { pattern: /try again in a /i, errorClass: RailwayRateLimited },

  // Authorization.
  { pattern: /^Not Authorized$/i, errorClass: RailwayNotAuthorized },

  // Not-found variants.
  { pattern: / not found$/i, errorClass: RailwayNotFound },
  { pattern: /^Could not find /i, errorClass: RailwayNotFound },

  // Domain validation. Railway surfaces a wide variety of "this operation
  // doesn't make sense given current state" messages — they are all
  // semantically `RailwayInvalidInput` (the input is wrong for the
  // current resource state).
  { pattern: /^Invalid /, errorClass: RailwayInvalidInput },
  { pattern: /^Expected /, errorClass: RailwayInvalidInput },
  { pattern: /^Can(?:'|\\?')t /i, errorClass: RailwayInvalidInput },
  { pattern: /^Service is not deployed/i, errorClass: RailwayInvalidInput },
  { pattern: /has no connected repo/i, errorClass: RailwayInvalidInput },

  // Generic Railway server failure — last so specific patterns win.
  { pattern: /^Problem processing request/i, errorClass: RailwayServerError },
];
