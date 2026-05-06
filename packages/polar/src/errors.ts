/**
 * Polar-specific error types.
 *
 * Re-exports common HTTP errors from sdk-core and adds Polar-specific
 * typed error classes that match Polar's error discriminator pattern:
 *
 *     { "error": "ErrorName", "detail": "..." | [...] }
 *
 * Some Polar errors use OAuth2-style envelopes (e.g. invalid_token):
 *
 *     { "error": "invalid_token", "error_description": "..." }
 *
 * `matchError` in client.ts dispatches first by the `error` discriminator,
 * falling back to HTTP status when no match.
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
import { DurationSchema } from "@distilled.cloud/core/errors";

// ============================================================================
// Common fields shared by all Polar typed error classes
// ============================================================================

const PolarErrorFields = {
  /** Human-readable summary built from the response body. */
  message: Schema.String,
  /**
   * Raw `detail` from the response. May be a string or a list of FastAPI
   * validation entries (`{ loc, msg, type, input, ctx }`).
   */
  detail: Schema.optional(Schema.Unknown),
};

const PolarRetryableFields = {
  ...PolarErrorFields,
  retryAfter: Schema.optional(DurationSchema),
};

// ============================================================================
// 401 — authentication failures
// ============================================================================

/**
 * Invalid or expired OAuth/access token (401).
 *
 * Returned with the OAuth2 error envelope when a malformed or revoked
 * token is supplied:
 *
 *     { "error": "invalid_token", "error_description": "..." }
 *
 * Undocumented in the OpenAPI spec — discovered empirically.
 */
export class InvalidToken extends Schema.TaggedErrorClass<InvalidToken>()(
  "InvalidToken",
  {
    message: Schema.String,
    /** OAuth2 `error_description` field. */
    errorDescription: Schema.optional(Schema.String),
  },
).pipe(Category.withAuthError) {}

// ============================================================================
// 403 — permission and lifecycle conflicts surfaced as 403
// ============================================================================

/**
 * The token does not have access to the requested resource or scope (403).
 */
export class NotPermitted extends Schema.TaggedErrorClass<NotPermitted>()(
  "NotPermitted",
  PolarErrorFields,
).pipe(Category.withAuthError) {}

/**
 * Subscription cancellation rejected because the subscription is already canceled (403).
 */
export class AlreadyCanceledSubscription extends Schema.TaggedErrorClass<AlreadyCanceledSubscription>()(
  "AlreadyCanceledSubscription",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

/**
 * Refund rejected because the order has already been refunded (403).
 */
export class RefundedAlready extends Schema.TaggedErrorClass<RefundedAlready>()(
  "RefundedAlready",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

/**
 * Checkout rejected because the customer already has an active subscription (403).
 *
 * Member of the `CheckoutForbiddenError` union.
 */
export class AlreadyActiveSubscriptionError extends Schema.TaggedErrorClass<AlreadyActiveSubscriptionError>()(
  "AlreadyActiveSubscriptionError",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

/**
 * The checkout session is no longer open and cannot be confirmed/updated (403).
 *
 * Member of the `CheckoutForbiddenError` union.
 */
export class NotOpenCheckout extends Schema.TaggedErrorClass<NotOpenCheckout>()(
  "NotOpenCheckout",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

/**
 * Checkout payment rejected because required customer/billing data is missing (403).
 *
 * Member of the `CheckoutForbiddenError` union.
 */
export class PaymentNotReady extends Schema.TaggedErrorClass<PaymentNotReady>()(
  "PaymentNotReady",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

/**
 * Trial cannot be redeemed because the customer has already used a trial (403).
 *
 * Member of the `CheckoutForbiddenError` union.
 */
export class TrialAlreadyRedeemed extends Schema.TaggedErrorClass<TrialAlreadyRedeemed>()(
  "TrialAlreadyRedeemed",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

// ============================================================================
// 404 — resource not found
// ============================================================================

/**
 * The requested Polar resource was not found (404).
 *
 * The most common 404 across the Polar API. Some routing-level 404s
 * return only `{ "detail": "Not Found" }` without an `error` field — those
 * are still mapped to this class via the HTTP status fallback.
 */
export class ResourceNotFound extends Schema.TaggedErrorClass<ResourceNotFound>()(
  "ResourceNotFound",
  PolarErrorFields,
).pipe(Category.withNotFoundError) {}

// ============================================================================
// 409 — state conflicts
// ============================================================================

/**
 * A payment attempt is already in progress for the resource (409).
 */
export class PaymentAlreadyInProgress extends Schema.TaggedErrorClass<PaymentAlreadyInProgress>()(
  "PaymentAlreadyInProgress",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

/**
 * Subscription is temporarily locked while another mutation completes (409).
 *
 * Retryable — clients should back off and retry the mutation.
 */
export class SubscriptionLocked extends Schema.TaggedErrorClass<SubscriptionLocked>()(
  "SubscriptionLocked",
  PolarRetryableFields,
).pipe(Category.withLockedError, Category.withRetryable()) {}

// ============================================================================
// 410 — checkout expiry
// ============================================================================

/**
 * The checkout session has expired (410).
 */
export class ExpiredCheckoutError extends Schema.TaggedErrorClass<ExpiredCheckoutError>()(
  "ExpiredCheckoutError",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

// ============================================================================
// 400 — request-time business errors
// ============================================================================

/**
 * The customer is missing data required to perform the request (400).
 */
export class CustomerNotReady extends Schema.TaggedErrorClass<CustomerNotReady>()(
  "CustomerNotReady",
  PolarErrorFields,
).pipe(Category.withBadRequestError) {}

/**
 * Generic payment processor error (400).
 */
export class PaymentError extends Schema.TaggedErrorClass<PaymentError>()(
  "PaymentError",
  PolarErrorFields,
).pipe(Category.withBadRequestError) {}

/**
 * The payment method is currently attached to an active subscription
 * and cannot be removed (400).
 */
export class PaymentMethodInUseByActiveSubscription extends Schema.TaggedErrorClass<PaymentMethodInUseByActiveSubscription>()(
  "PaymentMethodInUseByActiveSubscription",
  PolarErrorFields,
).pipe(Category.withConflictError) {}

// ============================================================================
// 402 — payment failures
// ============================================================================

/**
 * Payment was attempted but declined (402).
 */
export class PaymentFailed extends Schema.TaggedErrorClass<PaymentFailed>()(
  "PaymentFailed",
  PolarErrorFields,
).pipe(Category.withBadRequestError) {}

// ============================================================================
// 422 — request validation
// ============================================================================

/**
 * FastAPI request validation failure (422).
 *
 * Returned for body/path/query validation problems — e.g. missing required
 * fields, invalid UUID, malformed JSON, etc.
 *
 * `detail` is always an array of `{ type, loc, msg, input, ctx? }` entries.
 *
 * Undocumented in the OpenAPI spec (which only declares `HTTPValidationError`)
 * — discovered empirically.
 */
export class RequestValidationError extends Schema.TaggedErrorClass<RequestValidationError>()(
  "RequestValidationError",
  PolarErrorFields,
).pipe(Category.withBadRequestError) {}

/**
 * Polar's API emits three different error discriminators for what is morally
 * the same 422 validation failure — `RequestValidationError`,
 * `PolarRequestValidationError`, and `HTTPValidationError`. We consolidate
 * all three into the single `RequestValidationError` class above so callers
 * have one tag to match on. The aliases below are kept as exports for
 * back-compat; they reference the same class.
 */
export const PolarRequestValidationError = RequestValidationError;
export type PolarRequestValidationError = RequestValidationError;

export const HTTPValidationError = RequestValidationError;
export type HTTPValidationError = RequestValidationError;

/**
 * Invoice generation rejected because billing details are incomplete (422).
 */
export class MissingInvoiceBillingDetails extends Schema.TaggedErrorClass<MissingInvoiceBillingDetails>()(
  "MissingInvoiceBillingDetails",
  PolarErrorFields,
).pipe(Category.withBadRequestError) {}

/**
 * The order is not in a paid state and the requested operation requires it (422).
 */
export class NotPaidOrder extends Schema.TaggedErrorClass<NotPaidOrder>()(
  "NotPaidOrder",
  PolarErrorFields,
).pipe(Category.withBadRequestError) {}

/**
 * The order is not eligible for a payment retry (422).
 */
export class OrderNotEligibleForRetry extends Schema.TaggedErrorClass<OrderNotEligibleForRetry>()(
  "OrderNotEligibleForRetry",
  PolarErrorFields,
).pipe(Category.withBadRequestError) {}

// ============================================================================
// 429 — quota exhaustion
// ============================================================================

/**
 * Manual payment-retry limit exceeded (429).
 *
 * Retryable as a throttling error — clients should back off significantly.
 */
export class ManualRetryLimitExceeded extends Schema.TaggedErrorClass<ManualRetryLimitExceeded>()(
  "ManualRetryLimitExceeded",
  PolarRetryableFields,
).pipe(
  Category.withThrottlingError,
  Category.withRetryable({ throttling: true }),
) {}

// ============================================================================
// Fallback — unrecognized error response shape
// ============================================================================

/**
 * Unknown Polar error — emitted by `matchError` when neither the `error`
 * discriminator nor the HTTP status maps to a typed class.
 */
export class UnknownPolarError extends Schema.TaggedErrorClass<UnknownPolarError>()(
  "UnknownPolarError",
  {
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    body: Schema.Unknown,
  },
).pipe(Category.withServerError) {}

/**
 * Schema parse error — request succeeded but response failed to decode.
 */
export class PolarParseError extends Schema.TaggedErrorClass<PolarParseError>()(
  "PolarParseError",
  {
    body: Schema.Unknown,
    cause: Schema.Unknown,
  },
).pipe(Category.withParseError) {}

// ============================================================================
// Discriminator → ErrorClass map
// ============================================================================

/**
 * Maps the value of the `error` discriminator field in a Polar error
 * response to its typed error class.
 *
 * `client.ts#matchError` consults this map first, falling back to
 * `HTTP_STATUS_MAP` when no discriminator is present or recognized.
 */
export const POLAR_ERROR_NAME_MAP: Record<string, ApiErrorClass> = {
  // 401
  invalid_token: InvalidToken,
  // 403
  NotPermitted,
  AlreadyCanceledSubscription,
  RefundedAlready,
  AlreadyActiveSubscriptionError,
  NotOpenCheckout,
  PaymentNotReady,
  TrialAlreadyRedeemed,
  // 404
  ResourceNotFound,
  // 409
  PaymentAlreadyInProgress,
  SubscriptionLocked,
  // 410
  ExpiredCheckoutError,
  // 400
  CustomerNotReady,
  PaymentError,
  PaymentMethodInUseByActiveSubscription,
  // 402
  PaymentFailed,
  // 422 — three wire discriminators, all consolidated to RequestValidationError
  RequestValidationError,
  PolarRequestValidationError: RequestValidationError,
  HTTPValidationError: RequestValidationError,
  MissingInvoiceBillingDetails,
  NotPaidOrder,
  OrderNotEligibleForRetry,
  // 429
  ManualRetryLimitExceeded,
};

/**
 * The set of discriminator values whose typed error class declares a
 * `retryAfter` field. Only these accept `retryAfter` in their constructor.
 */
export const POLAR_RETRYABLE_ERROR_NAMES = new Set<string>([
  "SubscriptionLocked",
  "ManualRetryLimitExceeded",
]);

// Re-declare ApiErrorClass locally to avoid a top-level import cycle through core/client.
type ApiErrorClass = {
  new (...args: any[]): { readonly _tag: string; readonly message: string };
};
