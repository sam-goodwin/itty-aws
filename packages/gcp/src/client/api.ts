/**
 * GCP API operations factory.
 *
 * This module is imported as `import * as API from "../client/api.ts"` by
 * generated service files so that `API.make()`, `API.OperationMethod`, etc.
 * are all accessible as namespace members.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import {
  makeAPI,
  type OperationMethod,
  type PaginatedOperationMethod,
} from "@distilled.cloud/core/client";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { HTTP_STATUS_MAP, UnknownGCPError, GCPParseError } from "../errors.ts";
import { Credentials } from "../credentials.ts";
import { Retry } from "../retry.ts";

export type { OperationMethod, PaginatedOperationMethod };

/**
 * Match a GCP API error response to the appropriate error class.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  const message =
    typeof errorBody === "object" && errorBody !== null && "error" in errorBody
      ? ((errorBody as any).error?.message ?? String(status))
      : String(status);

  if (ErrorClass) {
    return Effect.fail(
      new ErrorClass({
        message,
        retryAfter: parseRetryAfterForStatus(status, headers),
      }),
    );
  }
  return Effect.fail(
    new UnknownGCPError({ code: status, message, body: errorBody }),
  );
};

/**
 * GCP API client. Per-service hosts come from each service file's
 * `T.Service({ rootUrl })` trait; `core.makeAPI` reads the trait when
 * `getBaseUrl` returns an empty string.
 */
const _API = makeAPI<Credentials>({
  credentials: Credentials as any,
  getBaseUrl: (_creds: any) => "",
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.accessToken)}`,
  }),
  matchError,
  ParseError: GCPParseError as any,
  retry: Retry as any,
});

export const make = _API.make;
export const makePaginated = _API.makePaginated;
