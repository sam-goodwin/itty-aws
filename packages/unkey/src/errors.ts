/**
 * Unkey-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Unkey-specific
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
  DEFAULT_ERRORS,
  API_ERRORS,
} from "@distilled.cloud/core/errors";
export type { DefaultErrors } from "@distilled.cloud/core/errors";

import * as Schema from "effect/Schema";
import * as Category from "@distilled.cloud/core/category";
import { HTTP_STATUS_MAP as CORE_HTTP_STATUS_MAP } from "@distilled.cloud/core/errors";

/**
 * MethodNotAllowed - requested HTTP method is not supported for this route (405).
 */
export class MethodNotAllowed extends Schema.TaggedErrorClass<MethodNotAllowed>()(
  "MethodNotAllowed",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/**
 * Gone - resource has been soft-deleted or is no longer available (410).
 */
export class Gone extends Schema.TaggedErrorClass<Gone>()("Gone", {
  message: Schema.String,
}).pipe(Category.withNotFoundError) {}

/**
 * PreconditionFailed - one or more conditional request preconditions failed (412).
 */
export class PreconditionFailed extends Schema.TaggedErrorClass<PreconditionFailed>()(
  "PreconditionFailed",
  { message: Schema.String },
).pipe(Category.withConflictError) {}

/**
 * Extends core HTTP_STATUS_MAP with Unkey-specific status classes.
 */
export const HTTP_STATUS_MAP = {
  ...CORE_HTTP_STATUS_MAP,
  405: MethodNotAllowed,
  410: Gone,
  412: PreconditionFailed,
} as const;

// Unknown Unkey error - returned when an error code is not recognized
export class UnknownUnkeyError extends Schema.TaggedErrorClass<UnknownUnkeyError>()(
  "UnknownUnkeyError",
  {
    type: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

// Schema parse error wrapper
export class UnkeyParseError extends Schema.TaggedErrorClass<UnkeyParseError>()(
  "UnkeyParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
