/**
 * Discord-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Discord-specific
 * error matching and API error types.
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
import { DurationSchema } from "@distilled.cloud/core/errors";

/**
 * Discord rate-limit error (HTTP 429).
 *
 * Discord's 429 response body carries `retry_after` (seconds) and a `global`
 * flag indicating whether the limit applies to the whole bot or just the
 * route. The numeric `code` is Discord's internal error code, not the HTTP
 * status.
 *
 * See: https://discord.com/developers/docs/topics/rate-limits
 */
export class DiscordRateLimited extends Schema.TaggedErrorClass<DiscordRateLimited>()(
  "DiscordRateLimited",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
    retryAfter: Schema.optional(DurationSchema),
    global: Schema.optional(Schema.Boolean),
    errors: Schema.optional(Schema.Unknown),
  },
).pipe(
  Category.withThrottlingError,
  Category.withRetryable({ throttling: true }),
) {}

/**
 * MethodNotAllowed - HTTP method not allowed on the route (405).
 *
 * Discord's edge layer returns a plain `{"message": "405: Method Not Allowed",
 * "code": 0}` body for requests sent with an HTTP method that the route does
 * not accept (e.g. PATCH on `/gateway`, DELETE on `/gateway/bot`). This is not
 * in the shared `HTTP_STATUS_MAP`, so without an explicit class these surface
 * as `UnknownDiscordError`.
 */
export class MethodNotAllowed extends Schema.TaggedErrorClass<MethodNotAllowed>()(
  "MethodNotAllowed",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/**
 * Unknown Discord error — returned when an error response doesn't map to a
 * standard HTTP status class. The `code` field holds Discord's internal
 * numeric error code (stringified).
 *
 * See: https://discord.com/developers/docs/topics/opcodes-and-status-codes#json
 */
export class UnknownDiscordError extends Schema.TaggedErrorClass<UnknownDiscordError>()(
  "UnknownDiscordError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

// Schema parse error wrapper
export class DiscordParseError extends Schema.TaggedErrorClass<DiscordParseError>()(
  "DiscordParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
