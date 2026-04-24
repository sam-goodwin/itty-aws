/**
 * Axiom API Client.
 *
 * Wraps the shared REST client from sdk-core with Axiom-specific
 * error matching and credential handling.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import { makeAPI } from "@distilled.cloud/core/client";
import {
  HTTP_STATUS_MAP,
  UnknownAxiomError,
  AxiomParseError,
} from "./errors.ts";

// Re-export for backwards compatibility
export { UnknownAxiomError } from "./errors.ts";
import { Credentials } from "./credentials.ts";

/**
 * Axiom returns two error envelope shapes:
 *   - control-plane / edge-ingest: `{ "code": "...", "message": "..." }`
 *   - edge-query:                  `{ "error": "...", "message": "..." }`
 * Plus some endpoints return plain `{ message: "..." }`.
 * We accept all of them and extract a unified `message`/`code` pair.
 */
const ApiErrorResponse = Schema.Struct({
  code: Schema.optional(Schema.Union([Schema.String, Schema.Number])),
  error: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});

/**
 * Match an Axiom API error response to the appropriate error class based on
 * HTTP status.
 *
 * Strategy: HTTP status is the authoritative signal. We always try status-based
 * matching first, then enrich with a message parsed from the body if we can.
 * Non-JSON responses (plain text "Forbidden", empty bodies, HTML error pages)
 * still map to the correct typed error via status code.
 */
const matchError = (
  status: number,
  errorBody: unknown,
): Effect.Effect<never, unknown> => {
  const ErrorClass = (HTTP_STATUS_MAP as any)[status];
  let message = "";
  let code: string | number | undefined;
  try {
    const parsed = Schema.decodeUnknownSync(ApiErrorResponse)(errorBody);
    message = parsed.message ?? parsed.error ?? "";
    code = parsed.code ?? parsed.error;
  } catch {
    if (typeof errorBody === "string") {
      message = errorBody;
    }
  }
  if (ErrorClass) {
    return Effect.fail(new ErrorClass({ message }));
  }
  return Effect.fail(
    new UnknownAxiomError({
      code: typeof code === "number" ? String(code) : code,
      message,
      body: errorBody,
    }),
  );
};

/**
 * Axiom's backend (Go) serializes nil slices and omitted optional fields as
 * JSON `null`. The generated output schemas model these as `Schema.optional(…)`
 * which accepts only the value or `undefined`, so `null` trips decoding.
 *
 * Recursively drop explicit `null` properties before decoding so optional
 * fields simply get treated as absent. Keys that are genuinely nullable in
 * the API should be patched to `Schema.NullOr(…)` in the spec — this hook
 * exists for the far more common "Go nil slice" case.
 */
const stripNulls = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(stripNulls);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (v === null) continue;
      out[k] = stripNulls(v);
    }
    return out;
  }
  return value;
};

/**
 * Axiom API client.
 */
export const API = makeAPI({
  credentials: Credentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
    };
    if (creds.orgId) {
      headers["X-Axiom-Org-ID"] = creds.orgId;
    }
    return headers;
  },
  matchError,
  ParseError: AxiomParseError as any,
  transformResponse: stripNulls,
});
