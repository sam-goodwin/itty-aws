/**
 * Resend API Client.
 *
 * Wraps the shared REST client from sdk-core with Resend-specific
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
  UnknownResendError,
  ResendParseError,
  MethodNotAllowed,
  UnavailableForLegalReasons,
} from "./errors.ts";

/**
 * HTTP status codes whose corresponding error class declares an optional
 * `retryAfter` field. `matchError` only forwards a `Retry-After` hint into
 * the constructor for these — passing it on non-retryable classes would
 * silently retain it as a stale field on the instance.
 */
const RETRYABLE_STATUSES = new Set([423, 429, 500, 502, 503, 504]);

/**
 * Resend status codes not covered by the shared `HTTP_STATUS_MAP`:
 *
 * - 405 `method_not_allowed`
 * - 451 `security_error`
 */
const RESEND_STATUS_MAP: Record<
  number,
  new (args: { message: string }) => unknown
> = {
  405: MethodNotAllowed,
  451: UnavailableForLegalReasons,
};

// Re-export for backwards compatibility
export { UnknownResendError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

/**
 * Resend API error response shape:
 *   { statusCode: number, message: string, name: string }
 *
 * Example:
 *   { "statusCode": 422, "message": "...", "name": "validation_error" }
 */
const ApiErrorResponse = Schema.Struct({
  name: Schema.optional(Schema.String),
  message: Schema.String,
  statusCode: Schema.optional(Schema.Number),
});

/**
 * Match a Resend API error response to the appropriate error class based on HTTP status.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    const ErrorClass =
      (HTTP_STATUS_MAP as any)[status] ?? RESEND_STATUS_MAP[status];
    if (ErrorClass) {
      const args: { message: string; retryAfter?: unknown } = {
        message: parsed.message ?? "",
      };
      if (RETRYABLE_STATUSES.has(status)) {
        args.retryAfter = parseRetryAfterForStatus(status, headers);
      }
      return Effect.fail(new ErrorClass(args));
    }
    return Effect.fail(
      new UnknownResendError({
        code: parsed.name,
        message: parsed.message,
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownResendError({ body: errorBody }));
  }
};

/**
 * Resend API client. Authenticates with `Authorization: Bearer <RESEND_API_KEY>`.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
  }),
  matchError,
  ParseError: ResendParseError as any,
  retry: Retry as any,
});
