/**
 * better-auth-specific error types.
 *
 * Re-exports the common HTTP errors from sdk-core and adds better-auth's
 * own error-matching types. better-auth serializes API errors as a JSON
 * object with a human-readable `message` and (usually) a machine-readable
 * `code` (e.g. `INVALID_EMAIL_OR_PASSWORD`, `USER_ALREADY_EXISTS`), returned
 * under a conventional HTTP status code. The status is mapped to a typed
 * error class in `client.ts`; unrecognized shapes fall back to
 * {@link UnknownBetterAuthError}.
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
 * Returned when a better-auth error response does not map to a known HTTP
 * status error class. Carries the raw `code`/`message` better-auth reported
 * plus the full response `body` for debugging.
 */
export class UnknownBetterAuthError extends Schema.TaggedErrorClass<UnknownBetterAuthError>()(
  "UnknownBetterAuthError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Wraps a schema decode failure on a better-auth response body. */
export class BetterAuthParseError extends Schema.TaggedErrorClass<BetterAuthParseError>()(
  "BetterAuthParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
