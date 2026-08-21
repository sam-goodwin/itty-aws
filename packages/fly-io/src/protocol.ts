/**
 * Fly.io protocols — Machines REST, UI-EX REST (MPG), GraphQL add-ons, and
 * Sprites REST.
 *
 * Machines (`FlyIoProtocol`) is a plain bearer-token JSON API at
 * `api.machines.dev/v1`. MPG (`FlyApiProtocol`) is the same token against
 * `https://api.fly.io`. GraphQL add-ons (`FlyGraphqlProtocol`) POST
 * `{ query, operationName, variables }` to `https://api.fly.io/graphql`.
 * Sprites (`SpritesProtocol`) is a separate bearer token (`SPRITES_TOKEN`)
 * against `https://api.sprites.dev/v1`.
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import type * as AST from "effect/SchemaAST";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as API from "@distilled.cloud/core/api";
import { makeRestProtocol } from "@distilled.cloud/core/protocol-rest";
import { getAnn } from "@distilled.cloud/core/protocol-http";
import {
  HTTP_STATUS_MAP,
  type ConfigError,
} from "@distilled.cloud/core/errors";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import {
  Credentials,
  DEFAULT_FLY_API_BASE_URL,
  SpritesCredentials,
  type Config,
  type SpritesConfig,
} from "./credentials.ts";
import {
  UnknownFlyIoError,
  FlyIoParseError,
  type DefaultErrors,
} from "./errors.ts";
import {
  graphqlOpSymbol,
  type GraphQLOpTrait,
  httpSymbol,
  type HttpTrait,
  responsePathSymbol,
} from "./traits.ts";

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

/** Context (requirements) shared by Machines / MPG / GraphQL operations. */
export type FlyIoOpContext = Credentials | HttpClient.HttpClient;

/** Sprites operations require {@link SpritesCredentials}, not `FLY_API_TOKEN`. */
export type SpritesOpError = FlyIoOpError;
export type SpritesOpContext = SpritesCredentials | HttpClient.HttpClient;

const flyErrorEnvelope = (body: unknown) => {
  if (body === null || typeof body !== "object") return undefined;
  const b = body as Record<string, unknown>;
  const errors = b.errors as Record<string, unknown> | undefined;
  const detail =
    errors && typeof errors.detail === "string" ? errors.detail : undefined;
  return {
    message:
      typeof b.error === "string"
        ? b.error
        : typeof b.message === "string"
          ? b.message
          : detail,
  };
};

const resolveFlyCreds = Effect.gen(function* () {
  const resolve = yield* Credentials;
  return yield* resolve;
});

export const FlyIoProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<Config>({
    credentials: resolveFlyCreds,
    baseUrl: (creds) => creds.apiBaseUrl,
    headers: (creds) => ({
      Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
    }),
    errorEnvelope: flyErrorEnvelope,
    unknownError: ({ message, body }) =>
      new UnknownFlyIoError({ message, body }),
  });

/** MPG UI-EX REST at `https://api.fly.io` with the Machines bearer token. */
export const FlyApiProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<Config>({
    credentials: resolveFlyCreds,
    baseUrl: () => DEFAULT_FLY_API_BASE_URL,
    headers: (creds) => ({
      Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
    }),
    errorEnvelope: flyErrorEnvelope,
    unknownError: ({ message, body }) =>
      new UnknownFlyIoError({ message, body }),
  });

const parseMaybeNdjson = (body: unknown): unknown => {
  if (typeof body !== "string") return body;
  const lines = body
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  if (lines.length === 0) return body;
  try {
    return lines.map((l) => JSON.parse(l) as unknown);
  } catch {
    return body;
  }
};

/** Sprites REST at `https://api.sprites.dev/v1` with `SPRITES_TOKEN`. */
export const SpritesProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<SpritesConfig>({
    credentials: Effect.gen(function* () {
      const resolve = yield* SpritesCredentials;
      return yield* resolve;
    }),
    baseUrl: (creds) => creds.apiBaseUrl,
    headers: (creds) => ({
      Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
    }),
    errorEnvelope: flyErrorEnvelope,
    unknownError: ({ message, body }) =>
      new UnknownFlyIoError({ message, body }),
    // Checkpoint create/restore answer NDJSON; JSON.parse of the whole body
    // fails and we get the raw text, which we split into event objects.
    transformResponse: parseMaybeNdjson,
  });

// =============================================================================
// GraphQL add-ons (Tigris, Redis) — POST https://api.fly.io/graphql
// =============================================================================

const fail = (e: unknown): Effect.Effect<never> =>
  Effect.fail(e) as Effect.Effect<never>;

const GraphQLError = Schema.Struct({
  message: Schema.String,
  path: Schema.optional(Schema.Array(Schema.Unknown)),
  extensions: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
    }),
  ),
});

const GraphQLEnvelope = Schema.Struct({
  data: Schema.optional(Schema.NullOr(Schema.Unknown)),
  errors: Schema.optional(Schema.Array(GraphQLError)),
});

const decodeEnvelope = Schema.decodeUnknownOption(GraphQLEnvelope);

const matchGraphqlError = (
  status: number,
  errorBody: unknown,
  headers?: Record<string, string | undefined>,
): Effect.Effect<never> => {
  const envelope = decodeEnvelope(errorBody);
  if (envelope._tag === "Some" && envelope.value.errors?.length) {
    const first = envelope.value.errors[0]!;
    const message = first.message;
    const StatusClass = (HTTP_STATUS_MAP as Record<number, unknown>)[status] as
      | (new (args: {
          message: string;
          retryAfter?: ReturnType<typeof parseRetryAfterForStatus>;
        }) => unknown)
      | undefined;
    if (StatusClass && status >= 400) {
      return fail(
        new StatusClass({
          message,
          retryAfter: parseRetryAfterForStatus(status, headers),
        }),
      );
    }
    return fail(
      new UnknownFlyIoError({
        code: first.extensions?.code,
        message,
        body: errorBody,
      }),
    );
  }

  const StatusClass = (HTTP_STATUS_MAP as Record<number, unknown>)[status] as
    | (new (args: {
        message: string;
        retryAfter?: ReturnType<typeof parseRetryAfterForStatus>;
      }) => unknown)
    | undefined;
  if (StatusClass && status >= 400) {
    return fail(
      new StatusClass({
        message: `HTTP ${status}`,
        retryAfter: parseRetryAfterForStatus(status, headers),
      }),
    );
  }
  return fail(new UnknownFlyIoError({ body: errorBody }));
};

const graphqlEncode = ({
  input,
  inputAst,
}: {
  readonly input: unknown;
  readonly inputAst: AST.AST;
}) =>
  Effect.gen(function* () {
    const resolveCredentials = yield* Credentials;
    const creds = yield* resolveCredentials as Effect.Effect<Config>;
    const op = getAnn(inputAst, graphqlOpSymbol) as GraphQLOpTrait | undefined;
    if (!op) {
      throw new Error("operation input is missing the GraphQLOp() trait");
    }
    const http = getAnn(inputAst, httpSymbol) as HttpTrait | undefined;
    const variables: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(
      (input ?? {}) as Record<string, unknown>,
    )) {
      if (v !== undefined) variables[k] = v;
    }
    const url = `${DEFAULT_FLY_API_BASE_URL}${http?.uri ?? "/graphql"}`;
    return HttpClientRequest.make("POST")(url).pipe(
      HttpClientRequest.setHeaders({
        Authorization: `Bearer ${Redacted.value(creds.apiKey)}`,
        Accept: "application/json",
      }),
      HttpClientRequest.bodyJsonUnsafe({
        query: op.query,
        operationName: op.operationName,
        variables,
      }),
    );
  });

const graphqlDecode = ({
  response,
  outputAst,
}: {
  readonly response: HttpClientResponse.HttpClientResponse;
  readonly outputAst: AST.AST;
  readonly errors: ReadonlyArray<unknown>;
}) =>
  Effect.gen(function* () {
    const text = (yield* response.text.pipe(Effect.orDie)) ?? "";
    const status = response.status;
    const headers = response.headers as Record<string, string | undefined>;

    let json: unknown;
    let parsed = false;
    if (text.trim().length > 0) {
      try {
        json = JSON.parse(text);
        parsed = true;
      } catch {
        parsed = false;
      }
    }

    if (!parsed) {
      if (status >= 400) {
        return yield* matchGraphqlError(status, text, headers);
      }
      return yield* fail(
        new FlyIoParseError({
          body: text,
          cause: "response body is not valid JSON",
        }),
      );
    }

    const envelope = json as { data?: unknown; errors?: unknown[] } | null;
    const hasGraphQLErrors =
      envelope !== null &&
      typeof envelope === "object" &&
      Array.isArray(envelope.errors) &&
      envelope.errors.length > 0;
    if (hasGraphQLErrors || status >= 400) {
      return yield* matchGraphqlError(status, json, headers);
    }

    const path = getAnn(outputAst, responsePathSymbol) as string | undefined;
    let payload: unknown =
      envelope !== null && typeof envelope === "object"
        ? envelope.data
        : undefined;
    if (path !== undefined) {
      for (const seg of path.split(".")) {
        payload =
          payload !== null && typeof payload === "object"
            ? (payload as Record<string, unknown>)[seg]
            : undefined;
      }
    }
    return payload === undefined ? null : payload;
  });

export const FlyGraphqlProtocol: Layer.Layer<API.Protocol> = Layer.succeed(
  API.Protocol,
  API.Protocol.of({
    encode: (args) =>
      graphqlEncode(args) as Effect.Effect<HttpClientRequest.HttpClientRequest>,
    decode: graphqlDecode,
  }),
);
