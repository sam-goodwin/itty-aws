/**
 * GrafanaProtocol — hand-written.
 *
 * The structured Grafana API is plain JSON REST below `/apis`.  This protocol
 * supplies the self-hosted concerns that are not represented by the generated
 * operation methods:
 *
 * - service-account bearer tokens or on-premises Basic Auth;
 * - the configured `default` / `org-<id>` namespace for namespaced routes;
 * - Grafana's PATCH media types;
 * - tolerant Grafana error envelopes and the shared HTTP-status errors.
 *
 * Legacy `/api` routes are rejected at request time as a final guard against
 * accidentally including an operation outside this SDK's support boundary.
 */
import * as Effect from "effect/Effect";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Redacted from "effect/Redacted";
import type * as AST from "effect/SchemaAST";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as API from "@distilled.cloud/core/api";
import {
  buildRequest,
  getAnn,
  getProps,
  hasPropAnn,
  mapKeys,
  matchTypedError,
  nameOf,
} from "@distilled.cloud/core/protocol-http";
import { httpSymbol, labelSymbol } from "@distilled.cloud/core/trait";
import {
  unwrapRedactedDeep,
  wrapSensitive,
} from "@distilled.cloud/core/protocol-rest";
import {
  type API_ERRORS,
  BadGateway,
  BadRequest,
  ConfigError,
  Conflict,
  Forbidden,
  GatewayTimeout,
  InternalServerError,
  Locked,
  NotFound,
  ServiceUnavailable,
  TooManyRequests,
  Unauthorized,
  UnprocessableEntity,
} from "@distilled.cloud/core/errors";
import { parseRetryAfterForStatus } from "@distilled.cloud/core/retry-after";
import { Credentials, type Auth, type Config } from "./credentials.ts";
import {
  DEFAULT_PATCH_MEDIA_TYPE,
  type GrafanaPatchMediaType,
  type HttpTrait,
} from "./traits.ts";
import { GrafanaParseError, UnknownGrafanaError } from "./errors.ts";

/** Error channel shared by generated Grafana operations. */
export type GrafanaOpError =
  | InstanceType<(typeof API_ERRORS)[number]>
  | UnknownGrafanaError
  | GrafanaParseError
  | ConfigError
  | HttpClientError.HttpClientError;

/** Context required by generated Grafana operations. */
export type GrafanaOpContext = Credentials | HttpClient.HttpClient;

/** Optional per-call protocol overrides, supplied through Effect context. */
export interface GrafanaRequestOptions {
  /** Override the configured self-hosted namespace for one request. */
  readonly namespace?: string;
  /** Select one of Grafana's supported dashboard/folder/playlist PATCH types. */
  readonly patchMediaType?: GrafanaPatchMediaType;
  /** Override the operation's Accept media type for one request. */
  readonly accept?: string;
}

export class RequestOptions extends Context.Service<
  RequestOptions,
  GrafanaRequestOptions
>()("GrafanaRequestOptions") {}

/**
 * Provide protocol options to calls below this effect.  Options are resolved
 * by the protocol on every request, so a single SDK layer remains reusable.
 */
export const withRequestOptions = (options: GrafanaRequestOptions) =>
  Effect.provide(Layer.succeed(RequestOptions, options));

/** Select a dashboard patch representation for one or more calls. */
export const withPatchMediaType = (patchMediaType: GrafanaPatchMediaType) =>
  withRequestOptions({ patchMediaType });

/** Override the self-hosted organization namespace for one or more calls. */
export const withNamespace = (namespace: string) =>
  withRequestOptions({ namespace });

/** Grafana's common error payload variants. */
interface GrafanaErrorEnvelope {
  readonly code?: string | number;
  readonly reason?: string;
  readonly message?: string;
  readonly details?: unknown;
}

type JsonRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is JsonRecord =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const asRecord = (value: unknown): JsonRecord | undefined => {
  if (!isRecord(value)) return undefined;
  return value;
};

const asString = (value: unknown): string | undefined => {
  if (typeof value !== "string") return undefined;
  return value;
};

const asCode = (value: unknown): string | number | undefined => {
  if (typeof value === "string" || typeof value === "number") return value;
  return undefined;
};

const asNumber = (value: unknown): number | undefined => {
  if (typeof value !== "number") return undefined;
  return value;
};

const firstString = (...values: ReadonlyArray<unknown>): string | undefined => {
  for (const value of values) {
    const string = asString(value);
    if (string !== undefined) return string;
  }
  return undefined;
};

const parseErrorEnvelope = (body: unknown): GrafanaErrorEnvelope => {
  if (!isRecord(body)) return {};
  const nested = asRecord(body.error);
  const source = nested ?? body;
  const rawCode = source.code ?? body.errorCode;
  return {
    code: asCode(rawCode),
    reason: firstString(source.reason, body.reason),
    message: firstString(
      source.message,
      body.message,
      body.error,
      body.errorMessage,
    ),
    details: source.details ?? body.details,
  };
};

const fail = (error: unknown): Effect.Effect<never> =>
  Effect.fail(error) as Effect.Effect<never>;

const encodeBase64 = (value: string): string => {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
};

const authHeaders = (auth: Auth): Record<string, string> => {
  if (auth._tag === "Bearer") {
    return { Authorization: `Bearer ${Redacted.value(auth.token)}` };
  }
  return {
    Authorization: `Basic ${encodeBase64(`${auth.username}:${Redacted.value(auth.password)}`)}`,
  };
};

const selfHostedNamespace = (namespace: string): string | undefined => {
  const value = namespace.trim();
  if (value.length === 0 || value.startsWith("stacks-")) {
    return undefined;
  }
  return value;
};

/** Fill a generated `{namespace}` label when the caller omitted it. */
const injectNamespace = (
  input: unknown,
  inputAst: AST.AST,
  namespace: string,
): unknown => {
  if (!isRecord(input)) return input;
  const value = input;
  for (const prop of getProps(inputAst)) {
    if (!hasPropAnn(prop, labelSymbol)) continue;
    if (nameOf(prop, labelSymbol) !== "namespace") continue;
    const key = String(prop.name);
    if (value[key] !== undefined && value[key] !== null) return input;
    return { ...value, [key]: namespace };
  }
  return input;
};

const isStructuredUri = (uri: string | undefined): uri is string => {
  if (uri === undefined) return false;
  return uri === "/apis" || uri.startsWith("/apis/");
};

const requestAccept = (
  options: GrafanaRequestOptions | undefined,
  http: HttpTrait | undefined,
): string => {
  if (options?.accept !== undefined) return options.accept;
  if (http?.accept !== undefined) return http.accept;
  return "application/json";
};

const requestPatchMediaType = (
  options: GrafanaRequestOptions | undefined,
  http: HttpTrait,
): GrafanaPatchMediaType => {
  if (options?.patchMediaType !== undefined) return options.patchMediaType;
  if (http.patchMediaType !== undefined) return http.patchMediaType;
  return DEFAULT_PATCH_MEDIA_TYPE;
};

const addOrganizationHeader = (
  headers: Record<string, string>,
  organizationId: number | undefined,
): void => {
  if (organizationId === undefined) return;
  headers["X-Grafana-Org-Id"] = String(organizationId);
};

const encode = ({
  input,
  inputAst,
}: {
  readonly input: unknown;
  readonly inputAst: AST.AST;
}) =>
  Effect.gen(function* () {
    const resolve = yield* Credentials;
    const creds = yield* resolve as Effect.Effect<Config>;
    const options = yield* Effect.serviceOption(RequestOptions);
    const overrides = Option.getOrUndefined(options);
    const namespace = selfHostedNamespace(
      overrides?.namespace ?? creds.namespace,
    );
    if (namespace === undefined) {
      return yield* fail(
        new ConfigError({
          message:
            "Grafana namespace must be a self-hosted namespace such as default or org-2",
        }),
      );
    }
    const actualHttp = getAnn(inputAst, httpSymbol) as HttpTrait | undefined;
    const uri = actualHttp?.uri;
    if (!isStructuredUri(uri)) {
      return yield* fail(
        new ConfigError({
          message: `Grafana structured /apis route required, received: ${uri ?? "<missing>"}`,
        }),
      );
    }

    const headers = {
      ...authHeaders(creds.auth),
      Accept: requestAccept(overrides, actualHttp),
    };
    addOrganizationHeader(headers, creds.organizationId);

    let request = buildRequest({
      input: unwrapRedactedDeep(injectNamespace(input, inputAst, namespace)),
      inputAst,
      baseUrl: creds.apiBaseUrl,
      headers,
    });

    if (actualHttp?.method === "PATCH") {
      request = HttpClientRequest.setHeader(
        request,
        "content-type",
        requestPatchMediaType(overrides, actualHttp),
      );
    }
    return request;
  });

interface ParsedResponseBody {
  readonly isJson: boolean;
  readonly json: unknown;
  readonly value: unknown;
}

const parseResponseBody = (text: string): ParsedResponseBody => {
  if (text.trim().length === 0) {
    return { isJson: true, json: undefined, value: undefined };
  }
  try {
    const json = JSON.parse(text);
    return { isJson: true, json, value: json };
  } catch {
    return { isJson: false, json: undefined, value: text };
  }
};

const responseErrorEnvelope = (
  parsed: ParsedResponseBody,
): GrafanaErrorEnvelope => {
  if (!parsed.isJson) return {};
  return parseErrorEnvelope(parsed.json);
};

const errorMessage = (
  envelope: GrafanaErrorEnvelope,
  text: string,
  isJson: boolean,
  status: number,
): string => {
  const envelopeMessage = firstString(envelope.message, envelope.reason);
  if (envelopeMessage !== undefined) return envelopeMessage;

  const plainText = text.trim();
  if (!isJson && plainText.length > 0) return plainText;
  return `HTTP ${status}`;
};

type RetryAfter = ReturnType<typeof parseRetryAfterForStatus>;

/** Construct the known HTTP errors without weakening their constructor types. */
const statusError = (
  status: number,
  message: string,
  retryAfter: RetryAfter,
): unknown => {
  switch (status) {
    case 400:
      return new BadRequest({ message });
    case 401:
      return new Unauthorized({ message });
    case 403:
      return new Forbidden({ message });
    case 404:
      return new NotFound({ message });
    case 409:
      return new Conflict({ message });
    case 422:
      return new UnprocessableEntity({ message });
    case 423:
      return new Locked({ message, retryAfter });
    case 429:
      return new TooManyRequests({ message, retryAfter });
    case 500:
      return new InternalServerError({ message, retryAfter });
    case 502:
      return new BadGateway({ message, retryAfter });
    case 503:
      return new ServiceUnavailable({ message, retryAfter });
    case 504:
      return new GatewayTimeout({ message, retryAfter });
    default:
      return undefined;
  }
};

const decode = ({
  response,
  outputAst,
  errors: errorClasses,
}: {
  readonly response: HttpClientResponse.HttpClientResponse;
  readonly outputAst: AST.AST;
  readonly errors: ReadonlyArray<unknown>;
}) =>
  Effect.gen(function* () {
    const text = (yield* response.text.pipe(Effect.orDie)) ?? "";
    if (process.env.DISTILLED_DEBUG_HTTP) {
      console.error(`[distilled] <- ${response.status} ${text.slice(0, 400)}`);
    }

    const parsed = parseResponseBody(text);

    const status = response.status;
    const headers = response.headers as Record<string, string | undefined>;
    if (status >= 400) {
      const body = parsed.value;
      const envelope = responseErrorEnvelope(parsed);
      const message = errorMessage(envelope, text, parsed.isJson, status);
      const typed = matchTypedError(errorClasses, status, [
        {
          code: asNumber(envelope.code),
          message,
        },
      ]);
      if (typed !== undefined) return yield* fail(typed);

      const mappedError = statusError(
        status,
        message,
        parseRetryAfterForStatus(status, headers),
      );
      if (mappedError !== undefined) {
        return yield* fail(mappedError);
      }
      if (status >= 500) {
        return yield* fail(
          new InternalServerError({
            message,
            retryAfter: parseRetryAfterForStatus(status, headers),
          }),
        );
      }
      return yield* fail(
        new UnknownGrafanaError({
          status,
          code: envelope.code,
          reason: envelope.reason,
          message: envelope.message ?? message,
          body,
        }),
      );
    }

    return wrapSensitive(
      outputAst,
      mapKeys(outputAst, parsed.value ?? {}, "decode"),
    );
  });

export const GrafanaProtocol: Layer.Layer<API.Protocol> = Layer.succeed(
  API.Protocol,
  API.Protocol.of({
    encode: (args) =>
      encode(args) as Effect.Effect<HttpClientRequest.HttpClientRequest>,
    decode,
  }),
);
