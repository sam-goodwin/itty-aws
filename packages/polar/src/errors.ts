/**
 * Polar-specific error types.
 *
 * Re-exports the common HTTP errors from sdk-core and adds Polar's own
 * error-matching types. Polar (a FastAPI service) serializes business errors
 * as `{ error: "<Name>", detail: "<message>" }` under a conventional HTTP
 * status (e.g. 404 `ResourceNotFound`, 401 `Unauthorized`, 403 `NotPermitted`)
 * and request-validation failures as `422 { detail: [{ loc, msg, type }, …] }`.
 * The status is mapped to a typed class in `client.ts`; anything unrecognized
 * falls back to {@link UnknownPolarError}.
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
 * Returned when a Polar error response does not map to a known HTTP status
 * error class. Carries Polar's `error` discriminator and `detail` message
 * plus the raw response `body`.
 */
export class UnknownPolarError extends Schema.TaggedErrorClass<UnknownPolarError>()(
  "UnknownPolarError",
  {
    error: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Wraps a schema decode failure on a Polar response body. */
export class PolarParseError extends Schema.TaggedErrorClass<PolarParseError>()(
  "PolarParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
