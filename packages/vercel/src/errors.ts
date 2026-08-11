/**
 * Vercel-specific error types.
 *
 * Re-exports the common HTTP errors from core and adds the Vercel-specific
 * unknown-error and parse-error wrappers.
 *
 * Vercel documents its failure statuses per endpoint, so the statuses an
 * operation can actually return are generated into that operation's own error
 * list as typed classes (`NotFound`, `Gone`, `PaymentRequired`, …) — see
 * scripts/convert.ts. What lives here is only what any call can fail with.
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
 * Unknown Vercel error — returned when a failed response's HTTP status has no
 * mapped error class. Carries the API's `error.code` (Vercel's error bodies
 * are `{ error: { code, message } }`, and the code is stable enough to switch
 * on) plus the raw body.
 */
export class UnknownVercelError extends Schema.TaggedError<UnknownVercelError>()(
  "UnknownVercelError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Schema parse error wrapper. */
export class VercelParseError extends Schema.TaggedError<VercelParseError>()(
  "VercelParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}

/**
 * Errors any Vercel operation may surface in addition to the per-operation
 * typed status errors.
 */
export type ClientErrors = UnknownVercelError | VercelParseError;

/**
 * Default Vercel operation errors: the shared HTTP status errors from core
 * (401/429/500/502/503/504 — the statuses excluded from per-operation lists
 * in scripts/convert.ts) plus the client-level fallback/decode errors.
 */
export type DefaultErrors = CoreDefaultErrors | ClientErrors;
