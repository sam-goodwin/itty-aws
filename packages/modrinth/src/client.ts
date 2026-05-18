/**
 * Modrinth API Client.
 *
 * Wraps the shared REST client from sdk-core with Modrinth-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import {
  HTTP_STATUS_MAP,
  UnknownModrinthError,
  ModrinthParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownModrinthError } from "./errors.ts";
import { Credentials } from "./credentials.ts";
import { Retry } from "./retry.ts";

/**
 * Modrinth API error response shape.
 *
 * Modrinth returns errors as `{ error: string, description: string }`, e.g.:
 *
 * ```json
 * { "error": "invalid_input", "description": "Error while parsing multipart payload" }
 * { "error": "unauthorized",  "description": "Authentication Error: Invalid Authentication Credentials" }
 * ```
 */
const ApiErrorResponse = Schema.Struct({
  error: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});

const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  let message = "";
  let code: string | undefined;
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    message = parsed.description ?? parsed.error ?? "";
    code = parsed.error;
  } catch {
    // Non-JSON or empty body — fall through. Modrinth returns empty bodies for
    // some 404s (e.g. unknown project slug), so we must still surface the
    // typed HTTP error class based on the status code.
  }
  if (ErrorClass) {
    return Effect.fail(
      new ErrorClass({
        message,
        retryAfter: parseRetryAfterForStatus(status, headers),
      }),
    );
  }
  return Effect.fail(
    new UnknownModrinthError({
      code,
      message: message || undefined,
      body: errorBody,
    }),
  );
};

/**
 * Modrinth API client.
 *
 * Authentication: Modrinth uses an `Authorization` header containing the raw
 * personal access token (or OAuth2 token) — there is NO `Bearer ` prefix. For
 * unauthenticated requests (most read endpoints work without a token), we omit
 * the header entirely.
 *
 * `User-Agent` is required on every request; Modrinth may rate-limit or block
 * traffic that only identifies the underlying HTTP client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any): Record<string, string> => {
    const headers: Record<string, string> = {
      "User-Agent": creds.userAgent,
    };
    if (creds.apiKey) {
      headers["Authorization"] = creds.apiKey;
    }
    return headers;
  },
  matchError,
  ParseError: ModrinthParseError as any,
  retry: Retry as any,
});
