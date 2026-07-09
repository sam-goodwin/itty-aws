/**
 * Resend-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Resend-specific
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

// Unknown Resend error - returned when an error code is not recognized
export class UnknownResendError extends Schema.TaggedErrorClass<UnknownResendError>()(
  "UnknownResendError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/**
 * MethodNotAllowed (405) - The HTTP method is not allowed for the requested path.
 *
 * Resend returns this with `name: "method_not_allowed"`.
 */
export class MethodNotAllowed extends Schema.TaggedErrorClass<MethodNotAllowed>()(
  "MethodNotAllowed",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/**
 * UnavailableForLegalReasons (451) - The request was rejected for legal/security reasons.
 *
 * Resend returns this with `name: "security_error"` when a security issue
 * is detected with the request.
 */
export class UnavailableForLegalReasons extends Schema.TaggedErrorClass<UnavailableForLegalReasons>()(
  "UnavailableForLegalReasons",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

// Schema parse error wrapper
export class ResendParseError extends Schema.TaggedErrorClass<ResendParseError>()(
  "ResendParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
