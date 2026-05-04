/**
 * Posthog API Client.
 *
 * Wraps the shared REST client from sdk-core with PostHog-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { Retry } from "./retry.ts";
import {
  HTTP_STATUS_MAP,
  UnknownPosthogError,
  PosthogParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownPosthogError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

/**
 * PostHog returns Django REST Framework style errors:
 *   { "type": "authentication_error",
 *     "code": "not_authenticated",
 *     "detail": "Authentication credentials were not provided.",
 *     "attr": null }
 *
 * The OpenAPI spec also documents a simpler `{ error: string }` shape used
 * by some endpoints, and validation errors may include nested per-field
 * errors. We accept any of these.
 */
const ApiErrorResponse = Schema.Struct({
  type: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.String),
  attr: Schema.optional(Schema.NullOr(Schema.String)),
  // Some endpoints return a plain `{ error: "..." }` envelope.
  error: Schema.optional(Schema.String),
  // Some return `{ message: "..." }` (e.g. server errors).
  message: Schema.optional(Schema.String),
});

/**
 * Match a PostHog API error response to the appropriate error class based on
 * HTTP status, falling back to `UnknownPosthogError`.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    const message = parsed.detail ?? parsed.message ?? parsed.error ?? "";
    const ErrorClass = (HTTP_STATUS_MAP as any)[status];
    if (ErrorClass) {
      return Effect.fail(
        new ErrorClass({
          message,
          retryAfter: parseRetryAfterForStatus(status, headers),
        }),
      );
    }
    return Effect.fail(
      new UnknownPosthogError({
        code: parsed.code ?? parsed.type,
        message,
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownPosthogError({ body: errorBody }));
  }
};

/**
 * PostHog API client.
 *
 * Authenticates using a Personal API key sent as a Bearer token in the
 * `Authorization` header.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any): Record<string, string> => ({
    Authorization: `Bearer ${creds.apiKey}`,
  }),
  matchError,
  ParseError: PosthogParseError as any,
  retry: Retry as any,
});
