/**
 * Turso API Client.
 *
 * Wraps the shared REST client from sdk-core with Turso-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import {
  HTTP_STATUS_MAP,
  UnknownTursoError,
  TursoParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownTursoError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

// API Error Response Schema
// Turso returns { error: string, code?: string }
const ApiErrorResponse = Schema.Struct({
  error: Schema.String,
  code: Schema.optional(Schema.String),
});

/**
 * Match a Turso API error response to the appropriate error class based on HTTP status.
 */
const matchError = (
  status: number,
  errorBody: unknown,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    const ErrorClass = (HTTP_STATUS_MAP as any)[status];
    if (ErrorClass) {
      return Effect.fail(new ErrorClass({ message: parsed.error }));
    }
    return Effect.fail(
      new UnknownTursoError({
        code: parsed.code,
        message: parsed.error,
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownTursoError({ body: errorBody }));
  }
};

/**
 * Turso API client.
 */
export const API = makeAPI({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
  }),
  matchError,
  ParseError: TursoParseError as any,
});
