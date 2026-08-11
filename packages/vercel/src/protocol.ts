/**
 * VercelProtocol — the shared bearer-REST protocol instantiated for Vercel.
 *
 * Vercel speaks plain JSON with no success envelope: a resource comes back as
 * the object itself, a list as `{ <items>: [...], pagination: { count, next,
 * prev } }`. Failures are the one place it does wrap, in a single shape
 * documented at https://vercel.com/docs/rest-api/errors:
 *
 *   { "error": { "code": "rate_limited", "message": "…",
 *                "limit": { "remaining", "reset", "resetMs", "total" } } }
 *
 * so the envelope reads `error.code` / `error.message`, falling back to a
 * top-level `code`/`message`/`error` string for the handful of endpoints that
 * answer flat. `code` is stable and documented per endpoint — it's what an
 * error matcher keys on.
 */
import * as Effect from "effect/Effect";
import type * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import type * as API from "@distilled.cloud/core/api";
import type { ConfigError } from "@distilled.cloud/core/errors";
import {
  makeRestProtocol,
  type RestErrorEnvelope,
} from "@distilled.cloud/core/protocol-rest";
import { Credentials, type Config } from "./credentials.ts";
import { UnknownVercelError, type DefaultErrors } from "./errors.ts";

/**
 * Error channel shared by every generated Vercel operation. Generated service
 * files annotate operations with `API.OperationMethod<I, O, VercelOpError,
 * VercelOpContext>` explicitly so the compiler never infers these back out of
 * the schema generics.
 */
export type VercelOpError =
  | DefaultErrors
  | ConfigError
  | HttpClientError.HttpClientError;

/** Context (requirements) shared by every generated Vercel operation. */
export type VercelOpContext = Credentials | HttpClient.HttpClient;

const stringOf = (v: unknown): string | undefined =>
  typeof v === "string" ? v : undefined;

/**
 * `{ error: { code, message } }` — the documented shape — with a flat
 * `{ code, message }` / `{ error: "…" }` fallback.
 */
const errorEnvelope = (body: unknown): RestErrorEnvelope | undefined => {
  if (body === null || typeof body !== "object") return undefined;
  const b = body as Record<string, unknown>;
  const nested =
    b.error !== null && typeof b.error === "object"
      ? (b.error as Record<string, unknown>)
      : undefined;
  const source = nested ?? b;
  const code = stringOf(source.code);
  const message =
    stringOf(source.message) ?? (nested ? undefined : stringOf(b.error));
  return { code, message };
};

export const VercelProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<Config>({
    // Resolved on the CALLING fiber per request (the layer is memoized per
    // process); the Credentials service holds an effect so rotating tokens
    // Just Work.
    credentials: Effect.gen(function* () {
      const resolve = yield* Credentials;
      return yield* resolve;
    }),
    baseUrl: (creds) => creds.apiBaseUrl,
    headers: (creds) => ({
      Authorization: `Bearer ${Redacted.value(creds.token)}`,
    }),
    errorEnvelope,
    unknownError: ({ code, message, body }) =>
      new UnknownVercelError({
        code:
          typeof code === "string"
            ? code
            : code !== undefined
              ? String(code)
              : undefined,
        message,
        body,
      }),
  });
