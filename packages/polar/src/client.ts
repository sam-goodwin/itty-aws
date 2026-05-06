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
  POLAR_ERROR_NAME_MAP,
  POLAR_RETRYABLE_ERROR_NAMES,
  UnknownPolarError,
  PolarParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownPolarError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

// Polar uses a discriminator pattern for typed errors:
//   { error: "ResourceNotFound", detail: "Not found" }
//   { error: "RequestValidationError", detail: [{ loc, msg, type, input, ctx }] }
// And an OAuth2-style envelope for some 401s:
//   { error: "invalid_token", error_description: "..." }
// Routing-level 4xx may also return only `{ detail: "..." }` with no `error`.
const ApiErrorResponse = Schema.Struct({
  code: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.Unknown),
  error: Schema.optional(Schema.String),
  error_description: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});

// Statuses whose core HTTP_STATUS_MAP class declares `retryAfter`.
const STATUSES_WITH_RETRY_AFTER = new Set([423, 429, 500, 502, 503, 504]);

/**
 * Match a Polar API error response to the appropriate error class.
 *
 * Dispatch order:
 *  1. Polar discriminator: `body.error` matches `POLAR_ERROR_NAME_MAP`.
 *  2. HTTP status: matches `HTTP_STATUS_MAP` (core fallback).
 *  3. `UnknownPolarError`.
 *
 * Retryable classes accept `retryAfter` parsed from `Retry-After`/RateLimit
 * headers. For non-retryable classes the field is omitted.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  let parsed: typeof ApiErrorResponse.Type | undefined;
  try {
    parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
  } catch {
    parsed = undefined;
  }

  const message = parsed ? formatPolarErrorMessage(parsed) : "";
  const errorName = parsed?.error;

  // 1. Discriminator-based dispatch.
  if (errorName) {
    const NamedClass = POLAR_ERROR_NAME_MAP[errorName];
    if (NamedClass) {
      // OAuth2 invalid_token: surface the error_description verbatim.
      if (errorName === "invalid_token") {
        return Effect.fail(
          new (NamedClass as any)({
            message,
            errorDescription: parsed?.error_description,
          }),
        );
      }

      const props: Record<string, unknown> = {
        message,
        detail: parsed?.detail,
      };
      if (POLAR_RETRYABLE_ERROR_NAMES.has(errorName)) {
        props.retryAfter = parseRetryAfterForStatus(status, headers);
      }
      return Effect.fail(new (NamedClass as any)(props));
    }
  }

  // 2. HTTP-status fallback.
  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  if (ErrorClass) {
    const props: Record<string, unknown> = { message };
    if (STATUSES_WITH_RETRY_AFTER.has(status)) {
      props.retryAfter = parseRetryAfterForStatus(status, headers);
    }
    return Effect.fail(new ErrorClass(props));
  }

  // 3. Unknown.
  return Effect.fail(
    new UnknownPolarError({
      code: parsed?.code ?? errorName,
      message,
      body: errorBody,
    }),
  );
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

export const formatPolarErrorMessage = (
  parsed: typeof ApiErrorResponse.Type,
): string => {
  const summary = parsed.message ?? parsed.error ?? parsed.code;
  const detail = formatErrorDetail(parsed.detail);
  const description = parsed.error_description;

  if (summary && detail && detail !== summary) {
    return `${summary}: ${detail}`;
  }
  if (summary && description && description !== summary) {
    return `${summary}: ${description}`;
  }
  if (summary) return summary;
  if (detail) return detail;
  if (description) return description;
  return "";
};

const formatErrorDetail = (detail: unknown): string | undefined => {
  if (typeof detail === "string") return detail;
  if (!Array.isArray(detail)) {
    return detail === undefined ? undefined : JSON.stringify(detail);
  }

  const formatted = detail
    .map((entry) => {
      if (!entry || typeof entry !== "object") {
        return JSON.stringify(entry);
      }

      const record = entry as Record<string, unknown>;
      const location = Array.isArray(record.loc)
        ? record.loc.map(String).join(".")
        : undefined;
      const message = typeof record.msg === "string" ? record.msg : undefined;

      if (location && message) return `${location}: ${message}`;
      if (message) return message;
      return JSON.stringify(entry);
    })
    .filter((part): part is string => Boolean(part));

  return formatted.length === 0 ? undefined : formatted.join("; ");
};
