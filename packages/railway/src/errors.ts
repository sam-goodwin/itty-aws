/**
 * Railway-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds typed wrappers for
 * the GraphQL error envelope returned by Railway's backboard. Specific
 * error codes can be added to `RAILWAY_ERROR_CODE_MAP` as they are
 * discovered through testing.
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
 * Catch-all for Railway GraphQL errors that don't match any other tagged
 * class. Carries the raw `errors[]` envelope and a best-effort
 * `code` / `message`.
 */
export class UnknownRailwayError extends Schema.TaggedErrorClass<UnknownRailwayError>()(
  "UnknownRailwayError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Schema parse error wrapper (response body did not match the operation schema). */
export class RailwayParseError extends Schema.TaggedErrorClass<RailwayParseError>()(
  "RailwayParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}

/**
 * Map from Railway GraphQL `extensions.code` → typed error class. Empty for
 * now; extend as specific error codes are observed in tests.
 */
// biome-ignore lint/suspicious/noExplicitAny: heterogeneous error class map
export const RAILWAY_ERROR_CODE_MAP: Record<string, any> = {};
