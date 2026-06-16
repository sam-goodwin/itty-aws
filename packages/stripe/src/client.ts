/**
 * Stripe API Client.
 *
 * Wraps the shared REST client from sdk-core with Stripe-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { Retry } from "./retry.ts";
import {
  HTTP_STATUS_MAP,
  STRIPE_HTTP_STATUS_MAP,
  ApiError,
  CardError,
  IdempotencyError,
  InvalidRequestError,
  UnknownStripeError,
  StripeParseError,
} from "./errors.ts";
import { Credentials } from "./credentials.ts";

// Re-export for convenience
export { UnknownStripeError } from "./errors.ts";

type StripeConnectRequestOptions =
  | {
      readonly stripeAccount?: string | undefined;
      readonly stripeContext?: never;
    }
  | {
      readonly stripeAccount?: never;
      readonly stripeContext?: string | undefined;
    };

export type StripeRequestOptions = {
  readonly idempotencyKey?: string | undefined;
  readonly apiVersion?: string | undefined;
} & StripeConnectRequestOptions;

const stripeRequestHeaders = (
  options: StripeRequestOptions | undefined,
): Record<string, string> => {
  const headers: Record<string, string> = {};
  if (options?.idempotencyKey !== undefined) {
    headers["Idempotency-Key"] = options.idempotencyKey;
  }
  if (options?.stripeAccount !== undefined) {
    headers["Stripe-Account"] = options.stripeAccount;
  }
  if (options?.stripeContext !== undefined) {
    headers["Stripe-Context"] = options.stripeContext;
  }
  if (options?.apiVersion !== undefined) {
    headers["Stripe-Version"] = options.apiVersion;
  }
  return headers;
};

// Stripe API Error Response Schema
// Stripe wraps errors in { error: { type, code, message, ... } }
const StripeErrorInner = Schema.Struct({
  type: Schema.String,
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  param: Schema.optional(Schema.String),
  charge: Schema.optional(Schema.String),
  decline_code: Schema.optional(Schema.String),
  doc_url: Schema.optional(Schema.String),
  advice_code: Schema.optional(Schema.String),
  network_advice_code: Schema.optional(Schema.String),
  network_decline_code: Schema.optional(Schema.String),
  payment_method_type: Schema.optional(Schema.String),
  request_log_url: Schema.optional(Schema.String),
});

const StripeErrorResponse = Schema.Struct({
  error: StripeErrorInner,
});

/**
 * Match a Stripe API error response to the appropriate error class.
 *
 * Stripe dispatches errors by:
 * 1. The error.type field (card_error, idempotency_error, invalid_request_error, api_error)
 * 2. HTTP status code (400, 401, 402, 403, 404, 409, 424, 429, 500+)
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(StripeErrorResponse)(errorBody);
    const err = parsed.error;

    // Match by Stripe error type first for richer error info
    switch (err.type) {
      case "card_error":
        return Effect.fail(
          new CardError({
            message: err.message,
            code: err.code,
            decline_code: err.decline_code,
            charge: err.charge,
            param: err.param,
            doc_url: err.doc_url,
            advice_code: err.advice_code,
            network_advice_code: err.network_advice_code,
            network_decline_code: err.network_decline_code,
            payment_method_type: err.payment_method_type,
            request_log_url: err.request_log_url,
          }),
        );
      case "idempotency_error":
        return Effect.fail(
          new IdempotencyError({
            message: err.message,
            code: err.code,
            doc_url: err.doc_url,
            request_log_url: err.request_log_url,
          }),
        );
      case "invalid_request_error":
        return Effect.fail(
          new InvalidRequestError({
            message: err.message,
            code: err.code,
            param: err.param,
            doc_url: err.doc_url,
            request_log_url: err.request_log_url,
          }),
        );
      case "api_error":
        return Effect.fail(
          new ApiError({
            message: err.message,
            code: err.code,
            param: err.param,
            doc_url: err.doc_url,
            request_log_url: err.request_log_url,
          }),
        );
    }

    // Fall back to Stripe-specific HTTP status codes (402, 424)
    const StripeErrorClass = (STRIPE_HTTP_STATUS_MAP as any)[status];
    if (StripeErrorClass) {
      return Effect.fail(
        new StripeErrorClass({
          message: err.message,
          code: err.code,
          ...(err.decline_code !== undefined
            ? { decline_code: err.decline_code }
            : {}),
          ...(err.charge !== undefined ? { charge: err.charge } : {}),
          ...(err.param !== undefined ? { param: err.param } : {}),
          ...(err.doc_url !== undefined ? { doc_url: err.doc_url } : {}),
          ...(err.request_log_url !== undefined
            ? { request_log_url: err.request_log_url }
            : {}),
        }),
      );
    }

    // Fall back to standard HTTP status errors (400, 401, 403, 404, etc.)
    const CoreErrorClass = (HTTP_STATUS_MAP as any)[status];
    if (CoreErrorClass) {
      return Effect.fail(
        new CoreErrorClass({
          message: err.message ?? "",
          retryAfter: parseRetryAfterForStatus(status, headers),
        }),
      );
    }

    return Effect.fail(
      new UnknownStripeError({
        type: err.type,
        code: err.code,
        message: err.message,
        param: err.param,
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownStripeError({ body: errorBody }));
  }
};

/**
 * Stripe API client.
 */
export const API = makeAPI<Credentials, StripeRequestOptions>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
  }),
  getRequestHeaders: stripeRequestHeaders,
  matchError,
  ParseError: StripeParseError as any,
  retry: Retry as any,
});
