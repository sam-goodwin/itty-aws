/**
 * Turbopuffer API Client.
 *
 * Wraps the shared REST client from sdk-core with Turbopuffer-specific
 * error matching and credential handling.
 */
import { makeAPI } from "@distilled.cloud/core/client";
import {
  HTTP_STATUS_MAP,
  RETRYABLE_HTTP_STATUSES,
} from "@distilled.cloud/core/errors";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { Credentials, resolveBaseUrl } from "./credentials.ts";
import { TurbopufferParseError, UnknownTurbopufferError } from "./errors.ts";
import { Retry } from "./retry.ts";

// Re-export for convenience
export { UnknownTurbopufferError } from "./errors.ts";

const messageFromBody = (body: unknown): string => {
  if (body && typeof body === "object") {
    const record = body as Record<string, unknown>;
    if (typeof record["message"] === "string") return record["message"];
    if (typeof record["error"] === "string") return record["error"];
    if (record["error"] && typeof record["error"] === "object") {
      const error = record["error"] as Record<string, unknown>;
      if (typeof error["message"] === "string") return error["message"];
    }
  }
  return body === undefined
    ? "Turbopuffer API request failed"
    : JSON.stringify(body);
};

/**
 * Match a Turbopuffer API error response to the appropriate error class.
 *
 * Turbopuffer dispatches errors by HTTP status code. Unknown statuses
 * are wrapped in UnknownTurbopufferError.
 */
const matchError = (
  status: number,
  body: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  const message = messageFromBody(body);
  const ErrorClass = (
    HTTP_STATUS_MAP as Record<
      number,
      new (props: {
        readonly message: string;
        readonly retryAfter?: unknown;
      }) => unknown
    >
  )[status];
  if (ErrorClass) {
    const props = RETRYABLE_HTTP_STATUSES.has(status)
      ? { message, retryAfter: parseRetryAfterForStatus(status, headers) }
      : { message };
    return Effect.fail(new ErrorClass(props));
  }

  return Effect.fail(
    new UnknownTurbopufferError({
      status,
      message,
      body,
    }),
  );
};

/**
 * Turbopuffer API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => resolveBaseUrl(creds),
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
  }),
  matchError,
  ParseError: TurbopufferParseError as any,
  retry: Retry as any,
});
