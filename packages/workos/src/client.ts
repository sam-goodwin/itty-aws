/**
 * WorkOS API Client.
 *
 * Wraps the shared REST client from sdk-core with WorkOS-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import {
  HTTP_STATUS_MAP,
  UnknownWorkosError,
  WorkosParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownWorkosError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

/**
 * WorkOS API Error Response Schema.
 *
 * The WorkOS API returns errors with a human-readable `message` field; some
 * endpoints additionally include an error `code` and a structured `errors`
 * list of field-level validation problems.
 */
const ApiErrorResponse = Schema.Struct({
  message: Schema.String,
  code: Schema.optional(Schema.String),
  error: Schema.optional(Schema.String),
  error_description: Schema.optional(Schema.String),
});

/**
 * Match a WorkOS API error response to the appropriate error class based on
 * HTTP status.
 */
const matchError = (
  status: number,
  errorBody: unknown,
): Effect.Effect<never, unknown> => {
  // Try to extract a message and code from the body, but fall through to
  // status-code mapping regardless of whether the body parses as the
  // canonical WorkOS error shape. Some endpoints return non-JSON or
  // alternative shapes for 401/403/5xx — those still have well-known status
  // codes that map directly to typed error classes.
  let message = "";
  let code: string | undefined;
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    message = parsed.message ?? parsed.error_description ?? parsed.error ?? "";
    code = parsed.code;
  } catch {
    if (typeof errorBody === "object" && errorBody !== null) {
      const obj = errorBody as Record<string, unknown>;
      if (typeof obj.message === "string") message = obj.message;
      else if (typeof obj.error_description === "string")
        message = obj.error_description;
      else if (typeof obj.error === "string") message = obj.error;
      if (typeof obj.code === "string") code = obj.code;
    } else if (typeof errorBody === "string") {
      message = errorBody;
    }
  }
  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  if (ErrorClass) {
    return Effect.fail(new ErrorClass({ message }));
  }
  return Effect.fail(
    new UnknownWorkosError({ code, message, body: errorBody }),
  );
};

/**
 * WorkOS API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
  }),
  matchError,
  ParseError: WorkosParseError as any,
});
