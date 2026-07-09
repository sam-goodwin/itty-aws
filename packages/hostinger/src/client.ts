/**
 * Hostinger API Client.
 *
 * Wraps the shared REST client from sdk-core with Hostinger-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import {
  HTTP_STATUS_MAP,
  UnknownHostingerError,
  HostingerParseError,
  HostingerValidationError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownHostingerError } from "./errors.ts";
import { Credentials } from "./credentials.ts";
import { Retry } from "./retry.ts";

// API Error Response Schema — Hostinger errors are
// { message: string, correlation_id?: string } and validation errors (422)
// additionally carry { errors: Record<string, string[]> }.
const ApiErrorResponse = Schema.Struct({
  message: Schema.String,
  correlation_id: Schema.optional(Schema.String),
  errors: Schema.optional(
    Schema.Record(Schema.String, Schema.Array(Schema.String)),
  ),
});

/**
 * Match a Hostinger API error response to the appropriate error class based on HTTP status.
 *
 * For status codes whose error class declares `retryAfter`, pass
 * `retryAfter: parseRetryAfterForStatus(status, headers)`. That is `undefined`
 * when no standard `Retry-After` / `RateLimit` hint is present — omitting the
 * field is fine; the default retry policy still uses exponential backoff.
 * For bespoke rate-limit hints, parse them here and pass `retryAfter` when known.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    // 422 with per-field details → typed validation error
    if (status === 422 && parsed.errors !== undefined) {
      return Effect.fail(
        new HostingerValidationError({
          message: parsed.message,
          errors: parsed.errors,
          correlationId: parsed.correlation_id,
        }),
      );
    }
    const ErrorClass = (HTTP_STATUS_MAP as any)[status];
    if (ErrorClass) {
      return Effect.fail(
        new ErrorClass({
          message: parsed.message ?? "",
          retryAfter: parseRetryAfterForStatus(status, headers),
        }),
      );
    }
    return Effect.fail(
      new UnknownHostingerError({
        message: parsed.message,
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownHostingerError({ body: errorBody }));
  }
};

/**
 * Hostinger API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  // Hostinger uses HTTP Bearer token auth (token from hpanel.hostinger.com/profile/api)
  getAuthHeaders: (creds: any): Record<string, string> => ({
    Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
  }),
  matchError,
  ParseError: HostingerParseError as any,
  retry: Retry as any,
});
