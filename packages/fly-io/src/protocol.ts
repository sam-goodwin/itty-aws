/**
 * FlyIoProtocol — the shared bearer-REST protocol instantiated for Fly.io.
 *
 * Fly.io's Machines API is a plain bearer-token JSON API with no response
 * envelope: 2xx bodies decode directly against the output schema and
 * failures answer `{ "error": "..." }` with a meaningful HTTP status. The
 * generic machinery (trait-driven request building, status-map error
 * matching, retryAfter hints) lives in `@distilled.cloud/core/protocol-rest`;
 * this module supplies the Fly.io specifics: credentials → base URL +
 * `Authorization: Bearer` header, and the `UnknownFlyIoError` fallback for
 * statuses outside the shared map (mirroring v0's `matchError`).
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
import { UnknownFlyIoError, type DefaultErrors } from "./errors.ts";

/**
 * Error channel shared by every generated Fly.io operation. Generated
 * service files annotate operations with `API.OperationMethod<I, O,
 * FlyIoOpError, FlyIoOpContext>` explicitly so the compiler never infers
 * these back out of the schema generics.
 */
export type FlyIoOpError =
  | DefaultErrors
  | ConfigError
  | HttpClientError.HttpClientError;

/** Context (requirements) shared by every generated Fly.io operation. */
export type FlyIoOpContext = Credentials | HttpClient.HttpClient;

export const FlyIoProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<Config>({
    // Resolve credentials on the calling fiber (per request) — the service
    // holds an effect, so rotating tokens Just Work.
    credentials: Effect.gen(function* () {
      const resolve = yield* Credentials;
      return yield* resolve;
    }),
    baseUrl: (creds) => creds.apiBaseUrl,
    headers: (creds) => ({
      Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
    }),
    // Fly.io's error body is `{ "error": string }` — the default lenient
    // envelope already reads `error`, but pin it down explicitly.
    errorEnvelope: (body) => {
      if (body === null || typeof body !== "object") return undefined;
      const b = body as Record<string, unknown>;
      return {
        message: typeof b.error === "string" ? b.error : undefined,
      };
    },
    unknownError: ({ message, body }) =>
      new UnknownFlyIoError({ message, body }),
  });
