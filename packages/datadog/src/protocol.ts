/**
 * DatadogProtocol — hand-written.
 *
 * Datadog speaks plain key-authenticated JSON REST (no response envelope on
 * v1 endpoints; SLO responses carry a `data` wrapper that is part of the
 * schema, not the protocol), so the whole protocol is one `makeRestProtocol`
 * call from `core/protocol-rest`:
 *
 *   request:  credentials → `DD-API-KEY` (+ `DD-APPLICATION-KEY` when set)
 *             headers + base URL (default https://api.datadoghq.com; other
 *             regional sites via Credentials), resolved from the calling
 *             fiber on every request
 *
 *   response: 2xx JSON is the payload; non-2xx bodies map to the operation's
 *             typed error classes by status, then the shared HTTP-status
 *             classes, then {@link UnknownDatadogError}. Datadog error
 *             bodies are `{ "errors": ["…"] }` — the envelope surfaces the
 *             first entry as the message; the HTTP status stays the
 *             authoritative signal.
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
import { UnknownDatadogError, type DefaultErrors } from "./errors.ts";

/**
 * Error channel shared by every generated Datadog operation. Generated
 * service files annotate operations with `API.OperationMethod<I, O,
 * DatadogOpError, DatadogOpContext>` explicitly so the compiler never infers
 * these back out of the schema generics.
 */
export type DatadogOpError =
  | DefaultErrors
  | ConfigError
  | UnknownDatadogError
  | HttpClientError.HttpClientError;

/** Context (requirements) shared by every generated Datadog operation. */
export type DatadogOpContext = Credentials | HttpClient.HttpClient;

/**
 * Datadog error bodies are `{ "errors": ["…", …] }` (occasionally an
 * `{ "errors": { … } }` object on newer endpoints). The envelope surfaces
 * the first string entry as the message; Datadog has no machine-readable
 * error code on v1 — the HTTP status is the signal.
 */
const errorEnvelope = (body: unknown): RestErrorEnvelope | undefined => {
  if (body === null || typeof body !== "object") return undefined;
  const errors = (body as Record<string, unknown>).errors;
  if (Array.isArray(errors)) {
    const first = errors.find((e): e is string => typeof e === "string");
    return { message: first };
  }
  return undefined;
};

export const DatadogProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<Config>({
    // The Credentials service holds an effect — resolving it here (per
    // request, on the calling fiber) picks up context-provided credentials.
    credentials: Effect.gen(function* () {
      const resolve = yield* Credentials;
      return yield* resolve;
    }),
    baseUrl: (creds) => creds.apiBaseUrl,
    headers: (creds) => ({
      "DD-API-KEY": Redacted.value(creds.apiKey),
      ...(creds.appKey
        ? { "DD-APPLICATION-KEY": Redacted.value(creds.appKey) }
        : {}),
    }),
    errorEnvelope,
    unknownError: ({ code, message, body }) =>
      new UnknownDatadogError({
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
