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
import { retryableKey } from "@distilled.cloud/core/category";
import {
  ConfigError,
  Forbidden,
  GatewayTimeout,
  HTTP_STATUS_MAP,
  InternalServerError,
  TooManyRequests,
  Unauthorized,
} from "@distilled.cloud/core/errors";
import {
  parseRetryAfterForStatus,
  parseServerRetryHint,
} from "@distilled.cloud/core/retry-after";
import {
  Credentials,
  formatHeaders,
  type OAuthRefreshError,
  type ResolvedCredentials,
} from "./credentials.ts";
import {
  CloudflareHttpError,
  type DefaultErrors,
  InvalidRoute,
  UnknownCloudflareError,
} from "./errors.ts";
import {
  envelopePayloadRootSymbol,
  envelopePayloadSymbol,
  formDataFileSymbol,
  getErrorMatchers,
  httpBodySymbol,
  keyDictionarySymbol,
  resultInfoSymbol,
  unionCasesSymbol,
} from "./traits.ts";

/**
 * Error channel shared by every generated Cloudflare operation. Generated
 * service files annotate operations with `API.OperationMethod<I, O,
 * CloudflareOpError, CloudflareOpContext>` explicitly so the compiler never
 * infers these back out of the schema generics.
 */
export type CloudflareOpError =
  | DefaultErrors
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

/** Binary/opaque values that must never be treated as key-value objects. */
const isOpaqueValue = (v: unknown): boolean =>
  v instanceof Blob ||
  v instanceof File ||
  v instanceof ArrayBuffer ||
  v instanceof Uint8Array ||
  v instanceof Date;

/** Deep-rename keys via a plain dictionary (see `T.KeyDictionary`). */
const mapKeysByDictionary = (
  dict: Record<string, string>,
  value: unknown,
  direction: "encode" | "decode",
): unknown => {
  if (value === null || typeof value !== "object" || isOpaqueValue(value)) {
    return value;
  }
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

/**
 * Recursively rename keys between TS names and wire names, per the schema.
 *
 * `fallback` is the nearest ancestor `T.KeyDictionary` — schema-known members
 * always map via their own annotations, but opaque values (Document members,
 * keys the schema doesn't know) deep-rename via the dictionary so nested
 * camelCase content still reaches the wire as snake_case. Content with no
 * dictionary in scope passes through verbatim.
 */
const mapKeys = (
  ast: AST.AST,
  value: unknown,
  direction: "encode" | "decode",
  fallback?: Record<string, string>,
): unknown => {
  if (
    value === null ||
    value === undefined ||
    typeof value !== "object" ||
    isOpaqueValue(value)
  ) {
    return value;
  }
  const dict =
    (getAnn(ast, keyDictionarySymbol) as Record<string, string> | undefined) ??
    fallback;

  // Discriminated union: Cloudflare returns every case's keys (null for the
  // inactive ones). Camelize, then keep only the active case's keys — the
  // case with the most present, non-null keys (ties break by declaration
  // order). Mirrors distilled's Schema.Union decode.
  const unionCases = getAnn(ast, unionCasesSymbol) as
    | ReadonlyArray<ReadonlyArray<string>>
    | undefined;
  if (unionCases && direction === "decode" && !Array.isArray(value)) {
    const obj = (
      dict ? mapKeysByDictionary(dict, value, "decode") : value
    ) as Record<string, unknown>;
    let best: { keys: ReadonlyArray<string>; score: number } | undefined;
    for (const keys of unionCases) {
      let score = 0;
      let viable = true;
      for (const k of keys) {
        if (obj[k] !== undefined && obj[k] !== null) score++;
        else viable = false;
      }
      if (viable && (!best || score > best.score)) best = { keys, score };
    }
    if (best) {
      const out: Record<string, unknown> = {};
      for (const k of best.keys) out[k] = obj[k];
      return out;
    }
    return obj;
  }

  const node = resolveNode(ast);

  if (node._tag === "Arrays") {
    if (!Array.isArray(value)) return value;
    const elem = (node as any).rest?.[0] as AST.AST | undefined;
    return elem
      ? value.map((v) => mapKeys(elem, v, direction, dict))
      : dict
        ? mapKeysByDictionary(dict, value, direction)
        : value;
  }

  if (node._tag === "Objects" && !Array.isArray(value)) {
    const props = (node as any)
      .propertySignatures as readonly AST.PropertySignature[];
    const isigs = (node as any).indexSignatures as
      | readonly { type: AST.AST }[]
      | undefined;
    if (props.length === 0 && !(isigs && isigs.length)) {
      // opaque object — dictionary fallback or verbatim
      return dict ? mapKeysByDictionary(dict, value, direction) : value;
    }
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
      out[to] = mapKeys(p.type, v, direction, dict);
    }
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (consumed.has(k) || v === undefined) continue;
      const renamed = dict
        ? direction === "encode"
          ? (dict[k] ?? k)
          : (Object.entries(dict).find(([, w]) => w === k)?.[0] ?? k)
        : k;
      out[renamed] =
        isigs && isigs.length
          ? mapKeys(isigs[0]!.type, v, direction, dict)
          : dict
            ? mapKeysByDictionary(dict, v, direction)
            : v;
    }
    return out;
  }

  // Scalar-typed schema node holding object content (docs drift) — dictionary
  // fallback or verbatim.
  return dict ? mapKeysByDictionary(dict, value, direction) : value;
};

// Bridge: Protocol.decode is typed as Effect<unknown> (no error channel), but
// Cloudflare failures are real typed errors that an operation re-surfaces via
// its `errors: [...]` list. Fail with the instance and erase the error type
// here; `API.make`'s signature reintroduces it for callers.
const fail = (e: unknown): Effect.Effect<never> =>
  Effect.fail(e) as Effect.Effect<never>;

/**
 * Mark an error instance retryable regardless of its class categories —
 * used for dual-use Cloudflare codes whose transient variant is only
 * identifiable from the message.
 */
const tagRetryable = <E>(error: E): E => {
  (error as Record<string, unknown>)[retryableKey] = {};
  return error;
};

const GLOBAL_RATE_LIMIT_MESSAGE =
  /\b(rate ?limit(ed|ing)?|throttl(ed|ing) your request)\b/i;

/**
 * Cloudflare error codes that map to global/default errors regardless of
 * operation — infrastructure-level errors that can occur on any endpoint.
 * Transcribed from the distilled cloudflare client.
 */
const GLOBAL_ERROR_CODE_MAP: Record<
  number,
  (message: string, headers?: Record<string, string | undefined>) => unknown
> = {
  // "Please wait and consider throttling your request speed" — returned
  // inside envelopes with arbitrary HTTP status (often 200).
  971: (message, headers) =>
    new TooManyRequests({
      message,
      retryAfter: parseServerRetryHint(headers),
    }),
  // Authentication-related codes — Cloudflare frequently returns these
  // inside a 400/403 envelope rather than 401.
  6003: (message) => new Unauthorized({ message }),
  9103: (message) => new Unauthorized({ message }),
  9106: (message) => new Unauthorized({ message }),
  9109: (message) => new Unauthorized({ message }),
  // "Authentication error" is tagged retryable: under high request
  // concurrency Cloudflare intermittently rejects valid, long-lived tokens
  // with this message (the same call against the same zone succeeds in
  // isolation — verified in alchemy's provider suite, which previously
  // carried this as a custom retry predicate). A genuinely invalid token
  // produces the same message persistently, but the default retry policy is
  // bounded, so it still fails within seconds of backoff instead of looping;
  // the win is that valid tokens stop flaking under load.
  10000: (message) => {
    const error = new Unauthorized({ message });
    return /authentication error/i.test(message) ? tagRetryable(error) : error;
  },
  // Dual-use: "Method not allowed for token" is a real permission denial
  // (NOT retryable); "internal error" is a CF hiccup mistagged as 403, and
  // "Unable to authenticate request" is a transient auth/edge blip against
  // otherwise-valid credentials (real credential problems surface as code
  // 10000 instead) — those two variants are tagged retryable.
  10001: (message) => {
    const error = new Forbidden({ message });
    return /internal error|unable to authenticate request/i.test(message)
      ? tagRetryable(error)
      : error;
  },
  // "Invalid request: invalid route" — a path component (typically
  // accountId/zoneId) doesn't resolve to a real resource.
  7003: (message) => new InvalidRoute({ code: 7003, message }),
  // Dual-use code 1000: several unrelated conditions, each unambiguous from
  // the message.
  1000: (message) => {
    if (/\btimeout\b/i.test(message)) {
      return new GatewayTimeout({ message });
    }
    if (/internal (server )?error/i.test(message)) {
      return new InternalServerError({ message });
    }
    return new UnknownCloudflareError({ code: 1000, message });
  },
};

/**
 * Typed error for an HTTP status: the mapped class when one exists (with
 * retry categories for 5xx), InternalServerError for unmapped 5xx (e.g.
 * Cloudflare-specific 520-530), CloudflareHttpError otherwise.
 */
const httpStatusError = (
  status: number,
  body?: string,
  headers?: Record<string, string | undefined>,
): unknown => {
  const ErrorClass = HTTP_STATUS_MAP[status as keyof typeof HTTP_STATUS_MAP];
  const message = body ?? String(status);
  if (ErrorClass) {
    return new ErrorClass({
      message,
      retryAfter: parseRetryAfterForStatus(status, headers),
    } as any);
  }
  if (status >= 500) {
    return new InternalServerError({
      message,
      retryAfter: parseRetryAfterForStatus(status, headers),
    });
  }
  return new CloudflareHttpError({
    status,
    statusText: String(status),
    body: message,
    message,
  });
};

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
    // Service-level key dictionary (mined from the distilled SDK): fallback
    // wire mapping for opaque/unknown content the docs-sourced schema
    // doesn't model.
    const rootDict = getAnn(inputAst, keyDictionarySymbol) as
      | Record<string, string>
      | undefined;

    const headers: Record<string, string> = {
      ...formatHeaders(creds),
    };
    const body: Record<string, unknown> = {};
    let rawBody: unknown; // whole-body member (T.HttpBody) — sent as-is
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
        {
          const hName = nameOf(prop, headerSymbol).toLowerCase();
          let hVal = String(value);
          // A member-supplied Authorization header (e.g. the asset-upload
          // session JWT) is a raw token — Bearer-prefix it like distilled's
          // request transform does.
          if (hName === "authorization" && !/^Bearer\s/i.test(hVal)) {
            hVal = `Bearer ${hVal}`;
          }
          headers[hName] = hVal;
        }
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
      } else if (hasPropAnn(prop, httpBodySymbol)) {
        rawBody = mapKeys(prop.type, value, "encode", rootDict);
      } else {
        body[nameOf(prop, bodySymbol)] = mapKeys(
          prop.type,
          value,
          "encode",
          rootDict,
        );
      }
    }

    // Input keys the schema doesn't know pass through as body fields — the
    // docs-sourced schemas can lag the real API, and silently dropping them
    // would break working callers. Callers write camelCase against the
    // TS-facing surface while Cloudflare's wire is snake_case: the service
    // key dictionary maps them when it knows the key, otherwise snake_case.
    for (const [key, value] of Object.entries(inputObj)) {
      if (consumed.has(key) || value === undefined) continue;
      const wire =
        rootDict?.[key] ??
        key.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
      body[wire] = rootDict
        ? mapKeysByDictionary(rootDict, value, "encode")
        : value;
      hasBodyMembers = true;
    }

    const qs = query.toString();
    const url = `${creds.apiBaseUrl}${uri}${qs ? `?${qs}` : ""}`;
    if (process.env.DISTILLED_DEBUG_HTTP) {
      console.error(
        `[distilled] ${http.method} ${url}` +
          (Object.keys(body).length
            ? ` body=${JSON.stringify(body).slice(0, 400)}`
            : ""),
      );
    }

    let request = HttpClientRequest.make(http.method)(url).pipe(
      HttpClientRequest.setHeaders(headers),
    );
    if (http.contentType === "multipart") {
      // Multipart upload (e.g. Worker module upload): each body member is a
      // form part (objects JSON-encoded under their wire name), each file
      // appends under its own filename. A whole-body member (T.HttpBody) that
      // is a record of files becomes one part per entry (worker asset upload:
      // { <hash>: File }).
      // Mirror distilled's buildFormData exactly: File/Blob → binary part
      // (filename = File.name), array of files → each appended, object →
      // JSON string (matches wrangler's formData.set(k, JSON.stringify(v))),
      // primitive → string.
      const form = new FormData();
      const parts =
        rawBody !== undefined && typeof rawBody === "object"
          ? (rawBody as Record<string, unknown>)
          : body;
      const isFileOrBlob = (v: unknown): v is Blob =>
        v instanceof Blob || v instanceof File;
      for (const [key, value] of Object.entries(parts)) {
        if (value === undefined || value === null) continue;
        if (isFileOrBlob(value)) {
          form.append(key, value, value instanceof File ? value.name : key);
        } else if (
          Array.isArray(value) &&
          value.length > 0 &&
          isFileOrBlob(value[0])
        ) {
          for (const file of value as Blob[]) {
            if (isFileOrBlob(file)) {
              form.append(
                file instanceof File ? file.name : key,
                file,
                file instanceof File ? file.name : undefined,
              );
            }
          }
        } else if (typeof value === "object") {
          form.append(key, JSON.stringify(value));
        } else {
          form.append(key, String(value));
        }
      }
      for (const f of files) {
        const filename = (f as File).name ?? "file";
        form.append(filename, f, filename);
      }
      request = request.pipe(HttpClientRequest.bodyFormData(form));
    } else if (rawBody !== undefined && !BODYLESS.has(http.method)) {
      // Whole-body member (raw arrays/scalars) — sent as the body itself.
      request = request.pipe(HttpClientRequest.bodyJsonUnsafe(rawBody));
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
      // Read as text and parse tolerantly — Cloudflare answers some errors
      // (HTML 5xx pages, bare plain-text 4xx) with non-JSON bodies.
      const text = (yield* response.text.pipe(Effect.orDie)) ?? "";
      let json: Record<string, unknown> = {};
      let nonJson = false;
      if (text.trim().length > 0) {
        try {
          const parsed = JSON.parse(text);
          if (parsed !== null && typeof parsed === "object") {
            json = parsed as Record<string, unknown>;
          } else {
            nonJson = true;
          }
        } catch {
          nonJson = true;
        }
      }
      const status = response.status;
      const headers = response.headers as Record<string, string | undefined>;

      // Error envelope or non-2xx → typed error, matched like the distilled
      // cloudflare client: per-operation matchers, then global error codes,
      // then throttling, then HTTP-status classes, then the unknown fallback.
      const failed = status >= 400 || (!nonJson && json.success === false);
      if (failed) {
        const rawErrors =
          !nonJson && Array.isArray(json.errors) ? json.errors : [];
        const first = rawErrors[0] as
          | { code?: number; message?: string }
          | undefined;
        // Cloudflare sometimes omits the code entirely (e.g. webhook errors);
        // treat missing code as 0 so `{ code: 0 }` matchers can match.
        const errorCode = first
          ? typeof first.code === "number"
            ? first.code
            : 0
          : undefined;
        const errorMessage = nonJson
          ? text
          : (first?.message ?? `HTTP ${status}`);

        // 1. Per-operation typed error (matcher metadata on the class).
        const typed = matchTypedError(errorClasses, status, [
          { code: errorCode, message: errorMessage },
        ]);
        if (typed !== undefined) {
          return yield* Effect.fail(typed) as Effect.Effect<never>;
        }

        // 2. Global/infrastructure error codes (any endpoint, any status).
        if (errorCode !== undefined && errorCode in GLOBAL_ERROR_CODE_MAP) {
          return yield* fail(
            GLOBAL_ERROR_CODE_MAP[errorCode]!(errorMessage, headers),
          );
        }

        // 3. Throttling — 429 or the global rate-limit message (Cloudflare
        // returns it inside envelopes with arbitrary HTTP status, often 200).
        if (status === 429 || GLOBAL_RATE_LIMIT_MESSAGE.test(errorMessage)) {
          return yield* fail(
            new TooManyRequests({
              message: errorMessage,
              retryAfter: parseServerRetryHint(headers),
            }),
          );
        }

        // 4. HTTP-status classes (4xx) / retryable 5xx.
        if (status >= 400 && status < 500) {
          const StatusErrorClass =
            HTTP_STATUS_MAP[status as keyof typeof HTTP_STATUS_MAP];
          if (StatusErrorClass) {
            return yield* fail(
              new StatusErrorClass({
                message: errorMessage,
                retryAfter: parseRetryAfterForStatus(status, headers),
              } as any),
            );
          }
        }
        if (status >= 500) {
          return yield* fail(httpStatusError(status, errorMessage, headers));
        }

        // 5. Unknown envelope error.
        return yield* fail(
          new UnknownCloudflareError({
            code: errorCode,
            message: errorMessage,
          }),
        );
      }

      if (nonJson) json = {};

      // Unwrap the envelope: the payload is `result` (fall back to the whole
      // body for the handful of endpoints that don't use the envelope).
      const payload = ("result" in json ? json.result : json) as
        | Record<string, unknown>
        | unknown;
      const rootDict = getAnn(outputAst, keyDictionarySymbol) as
        | Record<string, string>
        | undefined;

      // Bare-payload response: the whole value IS the envelope's `result`
      // (array/scalar), returned directly rather than wrapped in a struct.
      if (getAnn(outputAst, envelopePayloadRootSymbol) !== undefined) {
        return mapKeys(outputAst, payload, "decode", rootDict);
      }

      const result: Record<string, unknown> = {};

      for (const prop of getProps(outputAst)) {
        const key = String(prop.name);
        if (options.resultInfo && hasPropAnn(prop, resultInfoSymbol)) {
          if (json.result_info !== undefined) {
            result[key] = camelizeKeys(json.result_info);
          }
        } else if (hasPropAnn(prop, envelopePayloadSymbol)) {
          result[key] = mapKeys(prop.type, payload, "decode", rootDict);
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
              rootDict,
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
