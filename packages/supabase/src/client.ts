/**
 * Supabase API Client.
 *
 * Wraps the shared REST client from sdk-core with Supabase-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import {
  HTTP_STATUS_MAP,
  UnknownSupabaseError,
  SupabaseParseError,
  FreeProjectLimitReached,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownSupabaseError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

// API Error Response Schema
const ApiErrorResponse = Schema.Struct({
  message: Schema.String,
});

/**
 * Match a Supabase API error response to the appropriate error class based on HTTP status.
 */
const matchError = (
  status: number,
  errorBody: unknown,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    // Supabase has no error code on the wire; the only signal for the
    // free-tier active-project limit is a literal substring of the message.
    // Detect it before falling through to the generic status-code map so
    // tests and callers can react to it as a typed error.
    if (parsed.message?.includes("active free projects")) {
      return Effect.fail(
        new FreeProjectLimitReached({ message: parsed.message }),
      );
    }
    // Supabase returns 406 for some "not found" conditions (e.g. snippets)
    const effectiveStatus = status === 406 ? 404 : status;
    const ErrorClass = (HTTP_STATUS_MAP as any)[effectiveStatus];
    if (ErrorClass) {
      return Effect.fail(new ErrorClass({ message: parsed.message ?? "" }));
    }
    return Effect.fail(
      new UnknownSupabaseError({
        message: parsed.message,
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownSupabaseError({ body: errorBody }));
  }
};

/**
 * Supabase API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.accessToken)}`,
  }),
  matchError,
  ParseError: SupabaseParseError as any,
});
