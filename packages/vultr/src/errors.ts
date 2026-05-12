/**
 * Vultr-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Vultr-specific
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

// Unknown Vultr error - returned when an error response cannot be matched
// to a known HTTP status class.
export class UnknownVultrError extends Schema.TaggedErrorClass<UnknownVultrError>()(
  "UnknownVultrError",
  {
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

// Schema parse error wrapper
export class VultrParseError extends Schema.TaggedErrorClass<VultrParseError>()(
  "VultrParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
