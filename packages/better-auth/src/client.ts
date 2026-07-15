/**
 * better-auth API client.
 *
 * Wraps the shared REST client from sdk-core with better-auth-specific error
 * matching and credential handling. The base URL is the origin + mount path
 * of your self-hosted better-auth handler; authenticated calls attach the
 * session token as `Authorization: Bearer <token>` (resolved server-side by
 * the `bearer` plugin).
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { Retry } from "./retry.ts";
import {
  HTTP_STATUS_MAP,
  UnknownBetterAuthError,
  BetterAuthParseError,
} from "./errors.ts";
import { Credentials } from "./credentials.ts";

// Re-export for backwards compatibility with generated imports.
export { UnknownBetterAuthError } from "./errors.ts";

/**
 * better-auth API error response.
 *
 * better-auth (via better-call) serializes API errors as a JSON object with a
 * human-readable `message`, and usually a machine-readable `code`
 * (e.g. `INVALID_EMAIL_OR_PASSWORD`). The `code`/`message` keys may be
 * absent for infrastructure-level failures, so both are optional.
 */
const ApiErrorResponse = Schema.Struct({
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
});

/**
 * Match a better-auth error response to a typed error class based on HTTP
 * status. Known statuses map through {@link HTTP_STATUS_MAP}; anything else
 * surfaces as {@link UnknownBetterAuthError} carrying the raw `code`/`body`.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  let message = "";
  let code: string | undefined;
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    message = parsed.message ?? "";
    code = parsed.code;
  } catch {
    if (typeof errorBody === "string") message = errorBody;
  }

  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  if (ErrorClass) {
    return Effect.fail(
      new ErrorClass({
        message: message || code || `HTTP ${status}`,
        retryAfter: parseRetryAfterForStatus(status, headers),
      }),
    );
  }
  return Effect.fail(
    new UnknownBetterAuthError({ code, message, body: errorBody }),
  );
};

/**
 * better-auth API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.baseUrl,
  getAuthHeaders: (creds: any): Record<string, string> =>
    creds.token === undefined
      ? {}
      : { Authorization: `Bearer ${Redacted.value(creds.token)}` },
  matchError,
  ParseError: BetterAuthParseError as any,
  retry: Retry as any,
});
