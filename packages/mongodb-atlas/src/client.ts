/**
 * Mongodb-atlas API Client.
 *
 * Wraps the shared REST client from sdk-core with Mongodb-atlas-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import {
  HTTP_STATUS_MAP,
  PaymentRequired,
  UnknownMongodbAtlasError,
  MongodbAtlasParseError,
} from "./errors.ts";

// Extend the core status map with Atlas-specific error classes
const STATUS_MAP: Record<number, any> = {
  ...HTTP_STATUS_MAP,
  402: PaymentRequired,
};

// Re-export for backwards compatibility
export { UnknownMongodbAtlasError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

// MongoDB Atlas API Error Response Schema
// Matches the ApiError model: { error: int, errorCode: string, reason?: string, detail?: string }
const ApiErrorResponse = Schema.Struct({
  error: Schema.Number,
  errorCode: Schema.String,
  reason: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.String),
});

/**
 * Match a Mongodb-atlas API error response to the appropriate error class based on HTTP status.
 */
const matchError = (
  status: number,
  errorBody: unknown,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    const ErrorClass = STATUS_MAP[status];
    if (ErrorClass) {
      return Effect.fail(
        new ErrorClass({ message: parsed.detail ?? parsed.reason ?? "" }),
      );
    }
    return Effect.fail(
      new UnknownMongodbAtlasError({
        errorCode: parsed.errorCode,
        reason: parsed.reason,
        detail: parsed.detail,
        body: errorBody,
      }),
    );
  } catch {
    return Effect.fail(new UnknownMongodbAtlasError({ body: errorBody }));
  }
};

/**
 * Mongodb-atlas API client.
 */
export const API = makeAPI({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.accessToken)}`,
  }),
  matchError,
  ParseError: MongodbAtlasParseError as any,
});
