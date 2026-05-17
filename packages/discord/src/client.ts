/**
 * Discord API Client.
 *
 * Wraps the shared REST client from sdk-core with Discord-specific
 * error matching and credential handling.
 */
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { Retry } from "./retry.ts";
import {
  HTTP_STATUS_MAP,
  UnknownDiscordError,
  DiscordParseError,
  DiscordRateLimited,
  MethodNotAllowed,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownDiscordError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

/**
 * Discord error response shape.
 *
 * All Discord API errors are returned as JSON with at minimum
 * `{ code: number, message: string }`. Validation errors and rate-limit
 * responses extend this with additional fields.
 *
 * See: https://discord.com/developers/docs/reference#error-messages
 */
const ApiErrorResponse = Schema.Struct({
  code: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Unknown),
  // Ratelimit-only fields:
  retry_after: Schema.optional(Schema.Number),
  global: Schema.optional(Schema.Boolean),
});

/**
 * Match a Discord API error response to the appropriate error class based
 * on HTTP status. Discord returns a `code` (an integer error code, not the
 * HTTP status) plus a human-readable `message`. Rate-limit responses (429)
 * also include `retry_after` (in seconds) and `global`.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  let parsed:
    | {
        code?: number;
        message?: string;
        errors?: unknown;
        retry_after?: number;
        global?: boolean;
      }
    | undefined;

  try {
    parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
  } catch {
    return Effect.fail(new UnknownDiscordError({ body: errorBody }));
  }

  const message = parsed.message ?? "";
  const code = parsed.code !== undefined ? String(parsed.code) : undefined;

  if (status === 405) {
    return Effect.fail(
      new MethodNotAllowed({
        message: message || "405: Method Not Allowed",
      }),
    );
  }

  if (status === 429) {
    // Prefer the body's retry_after (Discord reports it in seconds), then fall
    // back to the standard Retry-After / RateLimit-Reset-After headers.
    const retryAfter =
      parsed.retry_after !== undefined
        ? Duration.seconds(parsed.retry_after)
        : parseRetryAfterForStatus(status, headers);
    return Effect.fail(
      new DiscordRateLimited({
        message,
        code,
        retryAfter,
        global: parsed.global,
        errors: parsed.errors,
      }),
    );
  }

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
    new UnknownDiscordError({
      code,
      message: parsed.message,
      body: errorBody,
    }),
  );
};

/**
 * Discord API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `${creds.authScheme} ${Redacted.value(creds.token)}`,
  }),
  matchError,
  ParseError: DiscordParseError as any,
  retry: Retry as any,
});
