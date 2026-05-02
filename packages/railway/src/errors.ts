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
  { pattern: /^Not Authorized$/i, errorClass: RailwayNotAuthorized },
  { pattern: / not found$/i, errorClass: RailwayNotFound },
  { pattern: /^Invalid /, errorClass: RailwayInvalidInput },
];
