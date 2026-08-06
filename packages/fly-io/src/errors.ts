/**
 * Fly.io-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds the Fly.io-specific
 * fallback/parse error types. Fly.io's error model is a pure HTTP-status
 * map: the API answers failures with `{ "error": "..." }` and the protocol
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
 * Unknown Fly.io error — returned when a failure matches no status-mapped
 * error class. Carries the raw body for later cataloging.
 */
export class UnknownFlyIoError extends Schema.TaggedError<UnknownFlyIoError>()(
  "UnknownFlyIoError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Schema parse error wrapper. */
export class FlyIoParseError extends Schema.TaggedError<FlyIoParseError>()(
  "FlyIoParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}

/**
 * Errors any Fly.io operation may surface in addition to the status-mapped
 * per-operation errors.
 */
export type ClientErrors = UnknownFlyIoError | FlyIoParseError;

/**
 * Default Fly.io operation errors: the shared HTTP status errors from core
 * plus the client-level fallback/decode errors.
 */
export type DefaultErrors = CoreDefaultErrors | ClientErrors;
