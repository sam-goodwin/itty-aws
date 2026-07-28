/**
 * Polar API client.
 *
 * Wraps the shared REST client from sdk-core with Polar-specific error
 * matching and Bearer credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { Retry } from "./retry.ts";
import {
  HTTP_STATUS_MAP,
  PolarParseError,
  UnknownPolarError,
} from "./errors.ts";
import { Credentials } from "./credentials.ts";

// Re-export for backwards compatibility with generated imports.
export { UnknownPolarError } from "./errors.ts";

/**
 * Polar API error response.
 *
 * Business errors are `{ error, detail }` with a string `detail`;
 * request-validation errors (422) are `{ detail: [{ loc, msg, type }, …] }`
 * with an array `detail` and no `error`. Both keys are optional so an
 * unexpected shape still parses.
 */
const ApiErrorResponse = Schema.Struct({
  error: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.Unknown),
});

/** Render Polar's `detail` (string or FastAPI validation array) as a message. */
const formatDetail = (detail: unknown): string => {
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    return detail
      .map((d) => {
        const item = d as { loc?: unknown[]; msg?: string };
        const loc = Array.isArray(item.loc) ? item.loc.join(".") : "";
        return loc ? `${loc}: ${item.msg ?? ""}` : (item.msg ?? "");
      })
      .filter(Boolean)
      .join("; ");
  }
  return "";
};

/**
 * Match a Polar error response to a typed error class based on HTTP status.
 * Known statuses map through {@link HTTP_STATUS_MAP}; anything else surfaces
 * as {@link UnknownPolarError} carrying Polar's `error`/`detail`.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  let error: string | undefined;
  let message = "";
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    error = parsed.error;
    message = formatDetail(parsed.detail);
  } catch {
    if (typeof errorBody === "string") message = errorBody;
  }

  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  if (ErrorClass) {
    return Effect.fail(
      new ErrorClass({
        message: message || error || `HTTP ${status}`,
        retryAfter: parseRetryAfterForStatus(status, headers),
      }),
    );
  }
  return Effect.fail(
    new UnknownPolarError({ error, detail: message, body: errorBody }),
  );
};

/**
 * Polar API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.accessToken)}`,
  }),
  matchError,
  ParseError: PolarParseError as any,
  retry: Retry as any,
});
