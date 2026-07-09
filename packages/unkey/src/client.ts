/**
 * Unkey API Client.
 *
 * Wraps the shared REST client from sdk-core with Unkey-specific
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
  UnknownUnkeyError,
  UnkeyParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownUnkeyError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

const ValidationError = Schema.Struct({
  location: Schema.String,
  message: Schema.String,
  fix: Schema.optional(Schema.String),
});

const ApiErrorDetails = Schema.Struct({
  detail: Schema.String,
  status: Schema.Number,
  title: Schema.String,
  type: Schema.String,
  errors: Schema.optional(Schema.Array(ValidationError)),
});

const ApiErrorResponse = Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  error: ApiErrorDetails,
});

const nonEmptyMessage = (message: unknown, fallback: string): string => {
  if (typeof message !== "string") return fallback;
  const trimmed = message.trim();
  return trimmed.length > 0 ? trimmed : fallback;
};

type StatusErrorFields = {
  readonly message: string;
  readonly retryAfter?: NonNullable<
    ReturnType<typeof parseRetryAfterForStatus>
  >;
};

type StatusErrorClass = new (fields: StatusErrorFields) => unknown;

const getStatusErrorClass = (status: number): StatusErrorClass | undefined =>
  (HTTP_STATUS_MAP as Record<number, StatusErrorClass | undefined>)[status];

const makeStatusError = (
  ErrorClass: StatusErrorClass,
  status: number,
  message: string,
  headers?: Record<string, string | undefined>,
): unknown => {
  const retryAfter = parseRetryAfterForStatus(status, headers);
  const fields =
    retryAfter === undefined ? { message } : { message, retryAfter };
  return new ErrorClass(fields);
};

const getNonJsonErrorMessage = (errorBody: unknown, status: number): string => {
  if (typeof errorBody === "string") {
    return nonEmptyMessage(errorBody, `HTTP ${status}`);
  }

  if (
    errorBody !== null &&
    typeof errorBody === "object" &&
    "_nonJsonError" in errorBody
  ) {
    return nonEmptyMessage(
      (errorBody as { body?: unknown }).body,
      `HTTP ${status}`,
    );
  }

  return `HTTP ${status}`;
};

/**
 * Match a Unkey API error response to the appropriate error class based on HTTP status.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    const err = parsed.error;
    const message = err.detail || err.title || "";
    const ErrorClass = getStatusErrorClass(status);

    if (ErrorClass) {
      return Effect.fail(makeStatusError(ErrorClass, status, message, headers));
    }

    return Effect.fail(
      new UnknownUnkeyError({
        type: err.type,
        title: err.title,
        status: err.status,
        message,
        requestId: parsed.meta.requestId,
        body: errorBody,
      }),
    );
  } catch {
    const ErrorClass = getStatusErrorClass(status);
    if (ErrorClass) {
      return Effect.fail(
        makeStatusError(
          ErrorClass,
          status,
          getNonJsonErrorMessage(errorBody, status),
          headers,
        ),
      );
    }

    return Effect.fail(
      new UnknownUnkeyError({
        status,
        message: getNonJsonErrorMessage(errorBody, status),
        body: errorBody,
      }),
    );
  }
};

/**
 * Unkey API client.
 */
export const API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any): Record<string, string> => ({
    Authorization: `Bearer ${Redacted.value(creds.rootKey)}`,
  }),
  matchError,
  ParseError: UnkeyParseError as any,
  retry: Retry as any,
});
