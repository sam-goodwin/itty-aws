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
 * Shape of GCP's standard error envelope as documented at
 * <https://cloud.google.com/apis/design/errors>:
 *
 * ```json
 * {
 *   "error": {
 *     "code": 400,
 *     "message": "Precondition check failed.",
 *     "status": "FAILED_PRECONDITION",
 *     "details": [
 *       {
 *         "@type": "type.googleapis.com/google.rpc.QuotaFailure",
 *         "violations": [{ "subject": "...", "description": "..." }]
 *       }
 *     ]
 *   }
 * }
 * ```
 *
 * `code` mirrors the HTTP status (already encoded in the error class).
 * `status` is the gRPC-style enum string — useful to disambiguate sub-cases
 * sharing an HTTP status (e.g. `FAILED_PRECONDITION` vs `INVALID_ARGUMENT`,
 * both HTTP 400). `details[]` is a list of typed protobuf messages
 * discriminated by their `@type` URL — `QuotaFailure`, `ErrorInfo`,
 * `BadRequest.FieldViolation`, etc. We surface all three on the typed
 * error so user code can do, e.g.:
 *
 * ```typescript
 * Effect.catchTag("BadRequest", (e) => {
 *   const isQuota = e.status === "FAILED_PRECONDITION" &&
 *     e.details?.some((d: any) => d["@type"]?.endsWith("QuotaFailure"));
 *   …
 * });
 * ```
 */
const extractGCPErrorEnvelope = (
  errorBody: unknown,
): {
  message: string | undefined;
  status: string | undefined;
  details: ReadonlyArray<unknown> | undefined;
} => {
  if (
    typeof errorBody !== "object" ||
    errorBody === null ||
    !("error" in errorBody)
  ) {
    return { message: undefined, status: undefined, details: undefined };
  }
  const err = (errorBody as { error?: unknown }).error;
  if (typeof err !== "object" || err === null) {
    return { message: undefined, status: undefined, details: undefined };
  }
  const e = err as { message?: unknown; status?: unknown; details?: unknown };
  return {
    message: typeof e.message === "string" ? e.message : undefined,
    status: typeof e.status === "string" ? e.status : undefined,
    details: Array.isArray(e.details) ? e.details : undefined,
  };
};

/**
 * Match a GCP API error response to the appropriate error class.
 *
 * `HTTP_STATUS_MAP` is core's table of (HTTP status → error class). Core
 * classes declare only `message` (and `retryAfter` for retryable
 * statuses). The per-service inline error classes generated under
 * `services/*.ts` declare additional `code` / `status` / `reason` /
 * `domain` / `details` fields — these describe the *shape callers
 * narrow to* via `Effect.catch("BadRequest", e => …)`.
 *
 * Since `Effect.catch` matches by `_tag` (string) and the runtime
 * instance built here shares a tag with the per-service class, we can
 * surface the structured envelope fields by attaching them to the
 * runtime instance after construction. The Schema-level field set on
 * the core class is unchanged; the tacked-on properties become visible
 * exclusively at the per-service narrowed type. This keeps core
 * untouched while delivering the structured info to consumers.
 */
const matchError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  const envelope = extractGCPErrorEnvelope(errorBody);
  const message = envelope.message ?? String(status);

  if (ErrorClass) {
    const instance = new ErrorClass({
      message,
      retryAfter: parseRetryAfterForStatus(status, headers),
    });
    const tackOn = instance as unknown as EnvelopeAddenda;
    if (envelope.status !== undefined) tackOn.status = envelope.status;
    if (envelope.details !== undefined) tackOn.details = envelope.details;
    return Effect.fail(instance);
  }

  // `UnknownGCPError`'s schema *does* declare `status` already, so we
  // could pass it through the constructor — but routing all envelope
  // fields through the same tack-on path keeps `matchError` uniform.
  const unknownInstance = new UnknownGCPError({
    code: status,
    message,
    body: errorBody,
  });
  const tackOnUnknown = unknownInstance as unknown as EnvelopeAddenda;
  if (envelope.status !== undefined) tackOnUnknown.status = envelope.status;
  return Effect.fail(unknownInstance);
};

/**
 * The two envelope fields the per-service inline error classes declare
 * but the core HTTP_STATUS_MAP classes don't. Used as the (narrow)
 * mutable view through which `matchError` writes the tacked-on
 * properties without `Record<string, unknown>` losing the field names.
 */
type EnvelopeAddenda = {
  status?: string;
  details?: ReadonlyArray<unknown>;
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
