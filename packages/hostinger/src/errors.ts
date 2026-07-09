/**
 * Hostinger-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Hostinger-specific
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

// Validation error (422) - carries per-field error details from the API
export class HostingerValidationError extends Schema.TaggedErrorClass<HostingerValidationError>()(
  "HostingerValidationError",
  {
    message: Schema.String,
    errors: Schema.optional(
      Schema.Record(Schema.String, Schema.Array(Schema.String)),
    ),
    correlationId: Schema.optional(Schema.String),
  },
).pipe(Category.withBadRequestError) {}

// Unknown Hostinger error - returned when an error code is not recognized
export class UnknownHostingerError extends Schema.TaggedErrorClass<UnknownHostingerError>()(
  "UnknownHostingerError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

// Schema parse error wrapper
export class HostingerParseError extends Schema.TaggedErrorClass<HostingerParseError>()(
  "HostingerParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
