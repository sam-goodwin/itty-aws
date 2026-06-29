/**
 * Clerk-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Clerk-specific
 * error matching and API error types.
 *
 * Clerk error responses share a single envelope (used by both the Platform
 * and Backend APIs):
 *
 *   {
 *     "errors": [{ "message": "...", "long_message": "...", "code": "...", "meta": {} }],
 *     "meta":   { ... },
 *     "clerk_trace_id": "..."
 *   }
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

/** A single entry in Clerk's `errors[]` array. */
export const ClerkErrorItem = Schema.Struct({
  message: Schema.String,
  long_message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export type ClerkErrorItem = Schema.Schema.Type<typeof ClerkErrorItem>;

/**
 * PaymentRequired (402) — operation requires a paid Clerk plan or a feature
 * the current plan does not include (e.g. JWT templates on a free instance,
 * paid auth features, organization features). Documented across ~40 backend
 * operations and several Platform-API config endpoints.
 */
export class PaymentRequired extends Schema.TaggedErrorClass<PaymentRequired>()(
  "PaymentRequired",
  { message: Schema.String },
).pipe(Category.withQuotaError) {}

/**
 * Gone (410) — endpoint or resource has been permanently removed. Currently
 * documented on Clerk's deprecated `GET /clients` listing endpoint.
 */
export class Gone extends Schema.TaggedErrorClass<Gone>()("Gone", {
  message: Schema.String,
}).pipe(Category.withNotFoundError) {}

/**
 * PayloadTooLarge (413) — request body exceeds the per-endpoint size limit.
 * Documented on Clerk's logo/favicon upload endpoints (organization logo,
 * OAuth application logo, application logo / favicon).
 */
export class PayloadTooLarge extends Schema.TaggedErrorClass<PayloadTooLarge>()(
  "PayloadTooLarge",
  { message: Schema.String },
).pipe(Category.withBadRequestError) {}

/** Unknown / unmatched Clerk error response. */
export class UnknownClerkError extends Schema.TaggedErrorClass<UnknownClerkError>()(
  "UnknownClerkError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(ClerkErrorItem)),
    clerk_trace_id: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/** Schema parse error wrapper. */
export class ClerkParseError extends Schema.TaggedErrorClass<ClerkParseError>()(
  "ClerkParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}
