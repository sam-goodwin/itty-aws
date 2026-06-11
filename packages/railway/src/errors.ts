/**
 * Railway-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds typed wrappers for the
 * GraphQL error envelope returned by backboard.railway.com. Operation-specific
 * typed errors are NOT defined here — they live in `src/operations/errors.ts`,
 * generated from `patches/{operationName}.json` (see `scripts/generate.ts`).
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
 * Catch-all for Railway GraphQL errors that don't match any patched error
 * class. Carries the raw response envelope and a best-effort
 * `code` (from `extensions.code`) / `message`.
 *
 * Seeing this error in a test is the signal to add a patch: run the test with
 * `DEBUG=1` to inspect the raw error, then add a matcher to
 * `patches/{operationName}.json` and regenerate.
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
