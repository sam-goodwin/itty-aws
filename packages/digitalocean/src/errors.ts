/**
 * DigitalOcean-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds the
 * DigitalOcean-specific fallback/parse error types. DigitalOcean's error
 * model is a pure HTTP-status map: failures answer
 * `{ "id": "...", "message": "...", "request_id": "..." }` and the protocol
 * maps the status onto the shared core classes (BadRequest / Forbidden /
 * NotFound / Conflict / UnprocessableEntity / ...).
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
import type { DefaultErrors as CoreDefaultErrors } from "@distilled.cloud/core/errors";

import * as Schema from "effect/Schema";
import * as Category from "@distilled.cloud/core/category";

/**
 * Unknown DigitalOcean error — returned when a failure matches no
 * status-mapped error class. Carries the raw body for later cataloging.
 */
export class UnknownDigitalOceanError extends Schema.TaggedError<UnknownDigitalOceanError>()(
  "UnknownDigitalOceanError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Schema parse error wrapper. */
export class DigitalOceanParseError extends Schema.TaggedError<DigitalOceanParseError>()(
  "DigitalOceanParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}

/**
 * Errors any DigitalOcean operation may surface in addition to the
 * status-mapped per-operation errors.
 */
export type ClientErrors = UnknownDigitalOceanError | DigitalOceanParseError;

/**
 * Default DigitalOcean operation errors: the shared HTTP status errors from
 * core plus the client-level fallback/decode errors.
 */
export type DefaultErrors = CoreDefaultErrors | ClientErrors;
