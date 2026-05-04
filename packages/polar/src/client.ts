/**
 * Polar API Client.
 *
 * Wraps the shared REST client from sdk-core with Polar-specific
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
  UnknownPolarError,
  PolarParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownPolarError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

// Polar commonly returns FastAPI-style validation errors:
// { detail: [{ loc, msg, type, input }] }
// Other API errors use { detail: "..." } or { message: "..." }.
const ApiErrorResponse = Schema.Struct({
  code: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.Unknown),
  error: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});

/**
 * Match a Polar API error response to the appropriate error class based on HTTP status.
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
    const ErrorClass = (HTTP_STATUS_MAP as any)[status];
    if (ErrorClass) {
      return Effect.fail(
        new ErrorClass({
          message: errorMessage(parsed),
          retryAfter: parseRetryAfterForStatus(status, headers),
        }),
      );
    }
    return Effect.fail(
      new UnknownPolarError({
        code: parsed.code,
        message: errorMessage(parsed),
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownPolarError({ body: errorBody }));
  }
};

/**
 * Polar API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any): Record<string, string> => ({
    Authorization: `Bearer ${Redacted.value(creds.accessToken)}`,
  }),
  matchError,
  ParseError: PolarParseError as any,
  retry: Retry as any,
});

const errorMessage = (parsed: typeof ApiErrorResponse.Type): string => {
  if (parsed.message) return parsed.message;
  if (parsed.error) return parsed.error;
  if (typeof parsed.detail === "string") return parsed.detail;
  if (parsed.detail !== undefined) return JSON.stringify(parsed.detail);
  return "";
};
