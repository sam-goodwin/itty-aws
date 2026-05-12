/**
 * Vultr API Client.
 *
 * Wraps the shared REST client from sdk-core with Vultr-specific
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
  UnknownVultrError,
  VultrParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownVultrError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

// Vultr API Error Response Schema
// Per the Vultr API docs: "All 4xx errors will return a JSON response object
// with an `error` attribute explaining the error." However, several managed-
// database endpoints (e.g. /databases/{id}/backups, /maintenance, /alerts,
// /version-upgrade, /migration, /read-replica, /fork, /restore,
// /advanced-options, /connectors, /quotas, /topics, /promote-read-replica,
// and various sub-resource PUTs) actually return `{ message: string }` with
// no `status` field. We accept either shape and use the HTTP status code as
// the source of truth for mapping to a typed error class.
const ApiErrorResponse = Schema.Struct({
  error: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Number),
});

const extractMessage = (errorBody: unknown): string | undefined => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    return parsed.error ?? parsed.message;
  } catch {
    return undefined;
  }
};

/**
 * Match a Vultr API error response to the appropriate error class based on HTTP status.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  const message = extractMessage(errorBody);
  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  if (ErrorClass) {
    return Effect.fail(
      new ErrorClass({
        message: message ?? "",
        retryAfter: parseRetryAfterForStatus(status, headers),
      }),
    );
  }
  return Effect.fail(
    new UnknownVultrError({
      message,
      body: errorBody,
    }),
  );
};

/**
 * Vultr API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
  }),
  matchError,
  ParseError: VultrParseError as any,
  retry: Retry as any,
});
