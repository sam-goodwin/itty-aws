/**
 * DigitalOceanProtocol — the shared bearer-REST protocol instantiated for
 * DigitalOcean.
 *
 * DigitalOcean's public API is a plain bearer-token JSON API. Success bodies
 * decode directly against the output schema (envelopes like
 * `{ "droplet": ... }` are part of the response schema itself) and failures
 * answer `{ "id": "...", "message": "...", "request_id": "..." }` with a
 * meaningful HTTP status. The generic machinery (trait-driven request
 * building, status-map error matching, retryAfter hints) lives in
 * `@distilled.cloud/core/protocol-rest`; this module supplies the
 * DigitalOcean specifics: credentials → base URL + `Authorization: Bearer`
 * header, the error envelope reader, and the `UnknownDigitalOceanError`
 * fallback for statuses outside the shared map.
 */
import * as Effect from "effect/Effect";
import type * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import type * as API from "@distilled.cloud/core/api";
import { makeRestProtocol } from "@distilled.cloud/core/protocol-rest";
import type { ConfigError } from "@distilled.cloud/core/errors";
import { Credentials, type Config } from "./credentials.ts";
import { UnknownDigitalOceanError, type DefaultErrors } from "./errors.ts";

/**
 * Error channel shared by every generated DigitalOcean operation. Generated
 * service files annotate operations with `API.OperationMethod<I, O,
 * DigitalOceanOpError, DigitalOceanOpContext>` explicitly so the compiler
 * never infers these back out of the schema generics.
 */
export type DigitalOceanOpError =
  | DefaultErrors
  | ConfigError
  | HttpClientError.HttpClientError;

/** Context (requirements) shared by every generated DigitalOcean operation. */
export type DigitalOceanOpContext = Credentials | HttpClient.HttpClient;

export const DigitalOceanProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<Config>({
    // Resolve credentials on the calling fiber (per request) — the service
    // holds an effect, so rotating tokens Just Work.
    credentials: Effect.gen(function* () {
      const resolve = yield* Credentials;
      return yield* resolve;
    }),
    baseUrl: (creds) => creds.apiBaseUrl,
    headers: (creds) => ({
      Authorization: `Bearer ${Redacted.value(creds.apiToken)}`,
    }),
    // DigitalOcean's error body is `{ id, message, request_id }` — `id` is
    // the machine-readable code, `message` the human-readable text.
    errorEnvelope: (body) => {
      if (body === null || typeof body !== "object") return undefined;
      const b = body as Record<string, unknown>;
      return {
        code: typeof b.id === "string" ? b.id : undefined,
        message: typeof b.message === "string" ? b.message : undefined,
      };
    },
    unknownError: ({ message, body }) =>
      new UnknownDigitalOceanError({ message, body }),
  });
