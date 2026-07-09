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
import { ConfigError } from "@distilled.cloud/core/errors";
import {
  Credentials,
  formatHeaders,
  type OAuthRefreshError,
  type ResolvedCredentials,
} from "./credentials.ts";
import { CloudflareError, CloudflareRateLimited } from "./errors.ts";
import {
  envelopePayloadSymbol,
  formDataFileSymbol,
  getErrorMatchers,
  keyDictionarySymbol,
  resultInfoSymbol,
} from "./traits.ts";

/**
 * Error channel shared by every generated Cloudflare operation. Generated
 * service files annotate operations with `API.OperationMethod<I, O,
 * CloudflareOpError, CloudflareOpContext>` explicitly so the compiler never
 * infers these back out of the schema generics.
 */
export type CloudflareOpError =
  | CloudflareError
  | CloudflareRateLimited
  | ConfigError
  | OAuthRefreshError
  | HttpClientError.HttpClientError;

/** Context (requirements) shared by every generated Cloudflare operation. */
export type CloudflareOpContext = Credentials | HttpClient.HttpClient;

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

// --- Recursive wire-name mapping ---------------------------------------------
//
// TS-facing member names are camelCase; wire names (from `T.Body(...)`
// annotations) are whatever the API uses (usually snake_case). The mapping
// applies at EVERY nesting level, so requests/responses are walked against
// the schema AST. Keys the schema doesn't know pass through verbatim — the
// docs-sourced schemas can lag the real API, and dropping unknown fields
// would silently break working callers.

/** Resolve wrappers to the real node: Suspend, encoding, optional/null unions. */
const resolveNode = (ast: AST.AST): AST.AST => {
  if (ast._tag === "Suspend") return resolveNode(ast.thunk());
  if (ast.encoding && ast.encoding.length > 0)
    return resolveNode(ast.encoding[0]!.to);
  if (ast._tag === "Union") {
    const real = (ast as AST.Union).types.filter(
      (t) =>
        t._tag !== "Undefined" &&
        t._tag !== "Null" &&
        !(t._tag === "Literal" && (t as any).literal === null),
    );
    if (real.length === 1) return resolveNode(real[0]!);
  }
  return ast;
};

/** Deep-rename keys via a plain dictionary (see `T.KeyDictionary`). */
const mapKeysByDictionary = (
  dict: Record<string, string>,
  value: unknown,
  direction: "encode" | "decode",
): unknown => {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) {
    return value.map((v) => mapKeysByDictionary(dict, v, direction));
  }
  const reverse =
    direction === "decode"
      ? Object.fromEntries(Object.entries(dict).map(([k, v]) => [v, k]))
      : dict;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    if (v === undefined) continue;
    out[reverse[k] ?? k] = mapKeysByDictionary(dict, v, direction);
  }
  return out;
};

/** Recursively rename keys between TS names and wire names, per the schema. */
const mapKeys = (
  ast: AST.AST,
  value: unknown,
  direction: "encode" | "decode",
): unknown => {
  if (value === null || value === undefined || typeof value !== "object") {
    return value;
  }
  const dict = getAnn(ast, keyDictionarySymbol) as
    | Record<string, string>
    | undefined;
  if (dict) return mapKeysByDictionary(dict, value, direction);
  const node = resolveNode(ast);

  if (node._tag === "Arrays") {
    if (!Array.isArray(value)) return value;
    const elem = (node as any).rest?.[0] as AST.AST | undefined;
    return elem ? value.map((v) => mapKeys(elem, v, direction)) : value;
  }

  if (node._tag === "Objects" && !Array.isArray(value)) {
    const props = (node as any)
      .propertySignatures as readonly AST.PropertySignature[];
    const isigs = (node as any).indexSignatures as
      | readonly { type: AST.AST }[]
      | undefined;
    if (props.length === 0 && !(isigs && isigs.length)) return value; // opaque
    const out: Record<string, unknown> = {};
    const consumed = new Set<string>();
    for (const p of props) {
      const tsName = String(p.name);
      const wire = nameOf(p, bodySymbol);
      const from = direction === "encode" ? tsName : wire;
      const to = direction === "encode" ? wire : tsName;
      consumed.add(from);
      const v = (value as Record<string, unknown>)[from];
      if (v === undefined) continue;
      out[to] = mapKeys(p.type, v, direction);
    }
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (consumed.has(k) || v === undefined) continue;
      out[k] =
        isigs && isigs.length ? mapKeys(isigs[0]!.type, v, direction) : v;
    }
    return out;
  }

  return value;
};

// Bridge: Protocol.decode is typed as Effect<unknown> (no error channel), but
// Cloudflare failures are real typed errors that an operation re-surfaces via
// its `errors: [...]` list. Fail with the instance and erase the error type
// here; `API.make`'s signature reintroduces it for callers.
const fail = (
  e: CloudflareError | CloudflareRateLimited,
): Effect.Effect<never> => Effect.fail(e) as Effect.Effect<never>;

// The protocol layer is memoized per process by `API.make` (see
// `OperationConfig.protocol`), so the build must not capture credentials —
// `encode` resolves Credentials from the calling fiber's context on
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
    // The Credentials service holds an effect — resolving it here (per
    // request) picks up token refreshes. Its ConfigError/OAuthRefreshError
    // channel is erased at this boundary like the rest of encode's
    // requirements; CloudflareOpError reintroduces it for callers.
    const resolveCredentials = yield* Credentials;
    const creds =
      yield* resolveCredentials as Effect.Effect<ResolvedCredentials>;
    const inputObj = (input ?? {}) as Record<string, unknown>;
    const http = getAnn(inputAst, httpSymbol) as HttpTrait | undefined;
    if (!http) {
      return yield* Effect.die(
        new Error("operation input is missing the Http() trait"),
      );
    }

    const headers: Record<string, string> = {
      ...formatHeaders(creds),
    };
    const body: Record<string, unknown> = {};
    const files: Array<Blob | File> = [];
    const query = new URLSearchParams();
    let uri = http.uri;
    const consumed = new Set<string>();
    let hasBodyMembers = false;

    for (const prop of getProps(inputAst)) {
      const key = String(prop.name);
      consumed.add(key);
      const value = inputObj[key];
      const isBodyMember =
        !hasPropAnn(prop, labelSymbol) &&
        !hasPropAnn(prop, headerSymbol) &&
        !hasPropAnn(prop, querySymbol);
      if (isBodyMember) hasBodyMembers = true;
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
      } else if (hasPropAnn(prop, formDataFileSymbol)) {
        for (const f of Array.isArray(value) ? value : [value]) {
          files.push(f as Blob | File);
        }
      } else {
        body[nameOf(prop, bodySymbol)] = mapKeys(prop.type, value, "encode");
      }
    }

    // Input keys the schema doesn't know pass through as body fields — the
    // docs-sourced schemas can lag the real API, and silently dropping them
    // would break working callers. Callers write camelCase against the
    // TS-facing surface while Cloudflare's wire is snake_case, so unknown
    // top-level keys are snake_cased (nested content passes verbatim).
    for (const [key, value] of Object.entries(inputObj)) {
      if (consumed.has(key) || value === undefined) continue;
      body[key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase()] = value;
      hasBodyMembers = true;
    }

    const qs = query.toString();
    const url = `${creds.apiBaseUrl}${uri}${qs ? `?${qs}` : ""}`;

    let request = HttpClientRequest.make(http.method)(url).pipe(
      HttpClientRequest.setHeaders(headers),
    );
    if (http.contentType === "multipart") {
      // Multipart upload (e.g. Worker module upload): each body member is a
      // form part (objects JSON-encoded under their wire name), each file
      // appends under its own filename.
      const form = new FormData();
      for (const [name, value] of Object.entries(body)) {
        form.append(
          name,
          typeof value === "string"
            ? value
            : value instanceof Blob
              ? value // named single-file part (e.g. Pages `_worker.bundle`)
              : new Blob([JSON.stringify(value)], { type: "application/json" }),
        );
      }
      for (const f of files) {
        const filename = (f as File).name ?? "file";
        form.append(filename, f, filename);
      }
      request = request.pipe(HttpClientRequest.bodyFormData(form));
    } else if (
      !BODYLESS.has(http.method) &&
      (Object.keys(body).length > 0 ||
        (hasBodyMembers && http.method !== "DELETE"))
    ) {
      // Send `{}` rather than no body when the schema declares body members —
      // several endpoints reject a missing JSON body outright.
      request = request.pipe(HttpClientRequest.bodyJsonUnsafe(body));
    }
    return request;
  });

/**
 * Whether one matcher matches one envelope error. Semantics mirror the
 * distilled cloudflare SDK: every present field must match; a matcher (or a
 * message object) with no constraints matches nothing.
 */
const matchesExpression = (
  m: import("./traits.ts").ErrorMatcher,
  code: number | undefined,
  status: number,
  message: string,
): boolean => {
  if (m.code === undefined && m.status === undefined && m.message === undefined)
    return false;
  if (m.code !== undefined && m.code !== code) return false;
  if (m.status !== undefined && m.status !== status) return false;
  if (m.message !== undefined) {
    if (typeof m.message === "string") {
      if (m.message !== message) return false;
    } else {
      const { includes, matches } = m.message;
      if (includes === undefined && matches === undefined) return false;
      if (includes !== undefined && !message.includes(includes)) return false;
      if (matches !== undefined && !new RegExp(matches).test(message))
        return false;
    }
  }
  return true;
};

const matcherSpecificity = (m: import("./traits.ts").ErrorMatcher): number =>
  (m.code !== undefined ? 1 : 0) +
  (m.status !== undefined ? 1 : 0) +
  (m.message !== undefined ? 1 : 0);

/**
 * Pick the operation's typed error class for a failed response: among all
 * declared classes whose matchers match the envelope failure, the most
 * specific matcher wins (ties break by declaration order).
 */
const matchTypedError = (
  errorClasses: ReadonlyArray<unknown>,
  status: number,
  errors: ReadonlyArray<{ code?: number; message: string }>,
): unknown | undefined => {
  let best:
    | { cls: unknown; specificity: number; code?: number; message: string }
    | undefined;
  for (const cls of errorClasses) {
    const matchers = getErrorMatchers(cls);
    if (!matchers) continue;
    for (const m of matchers) {
      for (const e of errors) {
        if (!matchesExpression(m, e.code, status, e.message)) continue;
        const specificity = matcherSpecificity(m);
        if (!best || specificity > best.specificity) {
          best = { cls, specificity, code: e.code, message: e.message };
        }
      }
    }
  }
  if (!best) return undefined;
  return new (best.cls as new (args: any) => unknown)({
    code: best.code ?? 0,
    message: best.message,
  });
};

/** Shallow-camelCase the keys of the envelope's `result_info` block. */
const camelizeKeys = (v: unknown): unknown => {
  if (v === null || typeof v !== "object" || Array.isArray(v)) return v;
  return Object.fromEntries(
    Object.entries(v).map(([k, val]) => [
      k.replace(/_+([a-z0-9])/gi, (_, c: string) => c.toUpperCase()),
      val,
    ]),
  );
};

/**
 * Build a decode implementation. `resultInfo: true` (the paginated protocol)
 * additionally maps the envelope's top-level `result_info` onto the output
 * member marked with `T.ResultInfo()`, camelCased.
 */
const makeDecode =
  (options: { readonly resultInfo: boolean }) =>
  ({
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
        if (options.resultInfo && hasPropAnn(prop, resultInfoSymbol)) {
          if (json.result_info !== undefined) {
            result[key] = camelizeKeys(json.result_info);
          }
        } else if (hasPropAnn(prop, envelopePayloadSymbol)) {
          result[key] = mapKeys(prop.type, payload, "decode");
        } else if (hasPropAnn(prop, headerSymbol)) {
          const v = response.headers[nameOf(prop, headerSymbol).toLowerCase()];
          if (v !== undefined) result[key] = v;
        } else if (hasPropAnn(prop, responseCodeSymbol)) {
          result[key] = response.status;
        } else {
          const wire = nameOf(prop, bodySymbol);
          if (payload && typeof payload === "object" && wire in payload) {
            result[key] = mapKeys(
              prop.type,
              (payload as Record<string, unknown>)[wire],
              "decode",
            );
          }
        }
      }
      return result;
    });

export const CloudflareProtocol: Layer.Layer<API.Protocol> = Layer.succeed(
  API.Protocol,
  API.Protocol.of({
    // Erase encode's Credentials requirement (see comment above).
    encode: (args) =>
      encode(args) as Effect.Effect<HttpClientRequest.HttpClientRequest>,
    decode: makeDecode({ resultInfo: false }),
  }),
);

/**
 * Protocol for paginated operations: identical to {@link CloudflareProtocol}
 * except the envelope's top-level `result_info` is kept on the response (as
 * the member marked `T.ResultInfo()`, camelCased) so `.pages()` / `.items()`
 * can advance and callers can read totals.
 */
export const CloudflarePaginatedProtocol: Layer.Layer<API.Protocol> =
  Layer.succeed(
    API.Protocol,
    API.Protocol.of({
      encode: (args) =>
        encode(args) as Effect.Effect<HttpClientRequest.HttpClientRequest>,
      decode: makeDecode({ resultInfo: true }),
    }),
  );
