/**
 * CloudflareProtocol — hand-written.
 *
 * Speaks Cloudflare's client-v4 JSON protocol. It reads the trait annotations
 * the generated schemas carry to build each request, and unwraps the v4
 * response envelope on the way back:
 *
 *   request:  Http({method, uri})  → request line (URI `{labels}` filled from Label() members)
 *             Label(name?)         → URI path placeholder
 *             Query(name?)         → query string parameter
 *             Header(name?)        → HTTP header
 *             (no binding)         → JSON request body field
 *
 *   response: { success, errors, messages, result, result_info }
 *             • success:false / non-2xx → CloudflareError | CloudflareRateLimited
 *             • result (the payload) → mapped onto the output schema:
 *                 EnvelopePayload()  → receives the whole `result`
 *                 Header(name?)      → read from a response header
 *                 ResponseCode()     → the HTTP status code
 *                 (otherwise)        → result.<field>
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as AST from "effect/SchemaAST";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import * as API from "@distilled.cloud/core/api";
import {
  bodySymbol,
  headerSymbol,
  httpSymbol,
  labelSymbol,
  querySymbol,
  responseCodeSymbol,
  type HttpTrait,
} from "@distilled.cloud/core/trait";
import { CloudflareCredentials } from "./credentials.ts";
import { CloudflareError, CloudflareRateLimited } from "./errors.ts";
import { envelopePayloadSymbol, getErrorMatchers } from "./traits.ts";

/**
 * Error channel shared by every generated Cloudflare operation. Generated
 * service files annotate operations with `API.OperationMethod<I, O,
 * CloudflareOpError, CloudflareOpContext>` explicitly so the compiler never
 * infers these back out of the schema generics.
 */
export type CloudflareOpError =
  | CloudflareError
  | CloudflareRateLimited
  | HttpClientError.HttpClientError;

/** Context (requirements) shared by every generated Cloudflare operation. */
export type CloudflareOpContext = CloudflareCredentials | HttpClient.HttpClient;

// --- AST helpers (survive S.optional / Suspend / transforms) -----------------

const getProps = (ast: AST.AST): readonly AST.PropertySignature[] => {
  if (ast._tag === "Objects") return ast.propertySignatures;
  if (ast._tag === "Suspend") return getProps(ast.thunk());
  if (ast.encoding && ast.encoding.length > 0)
    return getProps(ast.encoding[0]!.to);
  return [];
};

const getAnn = (ast: AST.AST, symbol: symbol): unknown => {
  const direct = (ast.annotations as Record<symbol, unknown> | undefined)?.[
    symbol
  ];
  if (direct !== undefined) return direct;
  if (ast._tag === "Suspend") return getAnn(ast.thunk(), symbol);
  if (ast.encoding && ast.encoding.length > 0)
    return getAnn(ast.encoding[0]!.to, symbol);
  // S.optional → Union[self, Undefined]; descend into the single real member.
  if (ast._tag === "Union") {
    const real = (ast as AST.Union).types.filter(
      (t) =>
        t._tag !== "Undefined" &&
        !(t._tag === "Literal" && (t as any).literal === null),
    );
    if (real.length === 1) return getAnn(real[0]!, symbol);
  }
  return undefined;
};

const getPropAnn = (prop: AST.PropertySignature, symbol: symbol): unknown =>
  getAnn(prop.type, symbol);
const hasPropAnn = (prop: AST.PropertySignature, symbol: symbol): boolean =>
  getPropAnn(prop, symbol) !== undefined;
const nameOf = (prop: AST.PropertySignature, symbol: symbol): string => {
  const v = getPropAnn(prop, symbol);
  return typeof v === "string" ? v : String(prop.name);
};

const BODYLESS = new Set(["GET", "HEAD"]);

// Bridge: Protocol.decode is typed as Effect<unknown> (no error channel), but
// Cloudflare failures are real typed errors that an operation re-surfaces via
// its `errors: [...]` list. Fail with the instance and erase the error type
// here; `API.make`'s signature reintroduces it for callers.
const fail = (
  e: CloudflareError | CloudflareRateLimited,
): Effect.Effect<never> => Effect.fail(e) as Effect.Effect<never>;

// The protocol layer is memoized per process by `API.make` (see
// `OperationConfig.protocol`), so the build must not capture credentials —
// `encode` resolves CloudflareCredentials from the calling fiber's context on
// every request instead. Like the error channel above, the requirement is
// erased at this boundary (Protocol effects are typed with no requirements)
// and reintroduced for callers by the generated `CloudflareOpContext`
// annotations.
const encode = ({
  input,
  inputAst,
}: {
  readonly input: unknown;
  readonly inputAst: AST.AST;
}) =>
  Effect.gen(function* () {
    const creds = yield* CloudflareCredentials;
    const inputObj = (input ?? {}) as Record<string, unknown>;
    const http = getAnn(inputAst, httpSymbol) as HttpTrait | undefined;
    if (!http) {
      return yield* Effect.die(
        new Error("operation input is missing the Http() trait"),
      );
    }

    const headers: Record<string, string> = {
      authorization: `Bearer ${creds.apiToken}`,
    };
    const body: Record<string, unknown> = {};
    const query = new URLSearchParams();
    let uri = http.uri;

    for (const prop of getProps(inputAst)) {
      const key = String(prop.name);
      const value = inputObj[key];
      if (value === undefined) continue;

      if (hasPropAnn(prop, labelSymbol)) {
        const token = nameOf(prop, labelSymbol);
        uri = uri.replace(`{${token}}`, encodeURIComponent(String(value)));
      } else if (hasPropAnn(prop, headerSymbol)) {
        headers[nameOf(prop, headerSymbol).toLowerCase()] = String(value);
      } else if (hasPropAnn(prop, querySymbol)) {
        const name = nameOf(prop, querySymbol);
        if (Array.isArray(value)) {
          for (const v of value) query.append(name, String(v));
        } else {
          query.append(name, String(value));
        }
      } else {
        body[nameOf(prop, bodySymbol)] = value;
      }
    }

    const qs = query.toString();
    const url = `${creds.baseUrl}${uri}${qs ? `?${qs}` : ""}`;

    let request = HttpClientRequest.make(http.method)(url).pipe(
      HttpClientRequest.setHeaders(headers),
    );
    if (!BODYLESS.has(http.method) && Object.keys(body).length > 0) {
      request = request.pipe(HttpClientRequest.bodyJsonUnsafe(body));
    }
    return request;
  });

/**
 * Pick the operation's typed error class for a failed response, if any of the
 * declared classes carries a matcher that matches the envelope failure. First
 * matching class wins, in declaration order.
 */
const matchTypedError = (
  errorClasses: ReadonlyArray<unknown>,
  status: number,
  errors: ReadonlyArray<{ code?: number; message: string }>,
): unknown | undefined => {
  for (const cls of errorClasses) {
    const matchers = getErrorMatchers(cls);
    if (!matchers) continue;
    for (const m of matchers) {
      const matched = errors.some(
        (e) =>
          (m.code === undefined || e.code === m.code) &&
          (m.status === undefined || status === m.status) &&
          (m.message === undefined ||
            e.message.toLowerCase().includes(m.message.includes.toLowerCase())),
      );
      if (matched) {
        const src = errors.find(
          (e) => m.code === undefined || e.code === m.code,
        );
        return new (cls as new (args: any) => unknown)({
          code: src?.code ?? 0,
          message: src?.message ?? `HTTP ${status}`,
        });
      }
    }
  }
  return undefined;
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
    const json = ((yield* response.json.pipe(Effect.orDie)) ?? {}) as Record<
      string,
      unknown
    >;

    // Error envelope or non-2xx → typed Cloudflare error.
    const failed = response.status >= 400 || json.success === false;
    if (failed) {
      const rawErrors = Array.isArray(json.errors) ? json.errors : [];
      const errors = rawErrors.map((e: any) => ({
        code: typeof e?.code === "number" ? e.code : undefined,
        message: String(e?.message ?? `HTTP ${response.status}`),
      }));
      if (errors.length === 0) {
        errors.push({
          code: undefined,
          message: `HTTP ${response.status}`,
        });
      }
      // Operation-specific typed error (matcher metadata on the class) wins
      // over the generic envelope errors.
      const typed = matchTypedError(errorClasses, response.status, errors);
      if (typed !== undefined) {
        return yield* Effect.fail(typed) as Effect.Effect<never>;
      }
      if (response.status === 429) {
        return yield* fail(
          new CloudflareRateLimited({ status: response.status, errors }),
        );
      }
      return yield* fail(
        new CloudflareError({ status: response.status, errors }),
      );
    }

    // Unwrap the envelope: the payload is `result` (fall back to the whole
    // body for the handful of endpoints that don't use the envelope).
    const payload = ("result" in json ? json.result : json) as
      | Record<string, unknown>
      | unknown;
    const result: Record<string, unknown> = {};

    for (const prop of getProps(outputAst)) {
      const key = String(prop.name);
      if (hasPropAnn(prop, envelopePayloadSymbol)) {
        result[key] = payload;
      } else if (hasPropAnn(prop, headerSymbol)) {
        const v = response.headers[nameOf(prop, headerSymbol).toLowerCase()];
        if (v !== undefined) result[key] = v;
      } else if (hasPropAnn(prop, responseCodeSymbol)) {
        result[key] = response.status;
      } else {
        const wire = nameOf(prop, bodySymbol);
        if (payload && typeof payload === "object" && wire in payload) {
          result[key] = (payload as Record<string, unknown>)[wire];
        }
      }
    }
    return result;
  });

export const CloudflareProtocol: Layer.Layer<API.Protocol> = Layer.succeed(
  API.Protocol,
  API.Protocol.of({
    // Erase encode's CloudflareCredentials requirement (see comment above).
    encode: (args) =>
      encode(args) as Effect.Effect<HttpClientRequest.HttpClientRequest>,
    decode,
  }),
);
