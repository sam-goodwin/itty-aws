/**
 * Shared error matcher used by both the Platform and Backend Clerk API
 * clients. Clerk responses use a single envelope for failures:
 *
 *   { "errors": [{ "message", "long_message", "code", "meta" }],
 *     "meta": {...}, "clerk_trace_id": "..." }
 */
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import {
  ClerkErrorItem,
  Gone,
  HTTP_STATUS_MAP,
  PayloadTooLarge,
  PaymentRequired,
  UnknownClerkError,
} from "./errors.ts";

/**
 * Clerk extends the standard HTTP status -> error class map with three codes
 * that the spec documents but which sdk-core does not map by default:
 *   - 402 PaymentRequired — billing-gated features
 *   - 410 Gone            — deprecated/removed endpoints (e.g. GET /clients)
 *   - 413 PayloadTooLarge — logo / favicon uploads
 */
const CLERK_STATUS_MAP: Record<number, any> = {
  ...HTTP_STATUS_MAP,
  402: PaymentRequired,
  410: Gone,
  413: PayloadTooLarge,
};

const ClerkErrorEnvelope = Schema.Struct({
  errors: Schema.Array(ClerkErrorItem),
  meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  clerk_trace_id: Schema.optional(Schema.String),
});

const decodeEnvelope = Schema.decodeUnknownSync(ClerkErrorEnvelope);

export const matchClerkError = (
  status: number,
  errorBody: unknown,
  _errors?: readonly unknown[],
  headers?: Record<string, string | undefined>,
): Effect.Effect<never, unknown> => {
  let envelope: Schema.Schema.Type<typeof ClerkErrorEnvelope> | undefined;
  try {
    envelope = decodeEnvelope(errorBody);
  } catch {
    envelope = undefined;
  }

  const first = envelope?.errors[0];
  const message = first?.message ?? "";
  const code = first?.code;

  const ErrorClass = CLERK_STATUS_MAP[status];
  if (ErrorClass) {
    return Effect.fail(
      new ErrorClass({
        message,
        retryAfter: parseRetryAfterForStatus(status, headers),
      }),
    );
  }

  return Effect.fail(
    new UnknownClerkError({
      code,
      message: message || undefined,
      errors: envelope?.errors,
      clerk_trace_id: envelope?.clerk_trace_id,
      body: errorBody,
    }),
  );
};
