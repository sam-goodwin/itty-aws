/**
 * Turbopuffer-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Turbopuffer-specific
 * error matching and API error types.
 */
export {
  API_ERRORS,
  BadGateway,
  BadRequest,
  Conflict,
  ConfigError,
  DEFAULT_ERRORS,
  Forbidden,
  GatewayTimeout,
  HTTP_STATUS_MAP,
  InternalServerError,
  Locked,
  NotFound,
  RETRYABLE_HTTP_STATUSES,
  ServiceUnavailable,
  TooManyRequests,
  Unauthorized,
  UnprocessableEntity,
  type DefaultErrors,
} from "@distilled.cloud/core/errors";

import * as Category from "@distilled.cloud/core/category";
import * as Schema from "effect/Schema";

/**
 * Unknown Turbopuffer API error — returned when the response body
 * does not match a known HTTP status code error class.
 */
export class UnknownTurbopufferError extends Schema.TaggedErrorClass<UnknownTurbopufferError>()(
  "UnknownTurbopufferError",
  {
    status: Schema.optional(Schema.Number),
    message: Schema.String,
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/**
 * Schema parse error wrapper — returned when the response body cannot be
 * decoded into the expected output schema.
 */
export class TurbopufferParseError extends Schema.TaggedErrorClass<TurbopufferParseError>()(
  "TurbopufferParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
