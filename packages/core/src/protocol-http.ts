/**
 * Generic REST protocol machinery, shared by SDK protocol layers.
 *
 * Everything here is driven purely by the trait annotations in
 * `core/trait.ts` — nothing is provider-specific. An SDK protocol (e.g.
 * cloudflare's) supplies credentials/base-URL, calls {@link buildRequest} to
 * encode, and layers its own response-envelope handling on top of the
 * decode-side helpers ({@link getProps}/{@link mapKeys}/
 * {@link matchTypedError}).
 */
import type * as AST from "effect/SchemaAST";
import * as HttpBody from "effect/unstable/http/HttpBody";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import {
  bodySymbol,
  formDataFileSymbol,
  getErrorMatchers,
  headerSymbol,
  httpBodySymbol,
  httpSymbol,
  keyDictionarySymbol,
  labelSymbol,
  querySymbol,
  unionCasesSymbol,
  type ErrorMatcher,
  type HttpTrait,
} from "./trait.ts";

//#region AST helpers (survive S.optional / Suspend / transforms)

export const getProps = (ast: AST.AST): readonly AST.PropertySignature[] => {
  if (ast._tag === "Objects") return ast.propertySignatures;
  if (ast._tag === "Suspend") return getProps(ast.thunk());
  if (ast.encoding && ast.encoding.length > 0)
    return getProps(ast.encoding[0]!.to);
  return [];
};

export const getAnn = (ast: AST.AST, symbol: symbol): unknown => {
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

export const getPropAnn = (
  prop: AST.PropertySignature,
  symbol: symbol,
): unknown => getAnn(prop.type, symbol);
export const hasPropAnn = (
  prop: AST.PropertySignature,
  symbol: symbol,
): boolean => getPropAnn(prop, symbol) !== undefined;
export const nameOf = (prop: AST.PropertySignature, symbol: symbol): string => {
  const v = getPropAnn(prop, symbol);
  return typeof v === "string" ? v : String(prop.name);
};

/** Resolve wrappers to the real node: Suspend, encoding, optional/null unions. */
export const resolveNode = (ast: AST.AST): AST.AST => {
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
//#endregion

//#region Recursive wire-name mapping

/** Binary/opaque values that must never be treated as key-value objects. */
export const isOpaqueValue = (v: unknown): boolean =>
  v instanceof Blob ||
  v instanceof File ||
  v instanceof ArrayBuffer ||
  v instanceof Uint8Array ||
  v instanceof Date;

/** Deep-rename keys via a plain dictionary (see `T.KeyDictionary`). */
export const mapKeysByDictionary = (
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
 * TS-cased content still reaches the wire in wire case. Content with no
 * dictionary in scope passes through verbatim.
 */
export const mapKeys = (
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

  // Discriminated union whose cases the API returns merged (every case's
  // keys present, `null` for the inactive ones). Map wire names, then keep
  // only the active case's keys — the case with the most present, non-null
  // keys (ties break by declaration order).
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

  // Scalar-typed schema node holding object content (spec drift) —
  // dictionary fallback or verbatim.
  return dict ? mapKeysByDictionary(dict, value, direction) : value;
};
//#endregion

//#region Request building

const BODYLESS = new Set(["GET", "HEAD"]);

/**
 * Serialize one query member. Scalars go as `k=v`, arrays as repeated `k=v`
 * pairs, and nested plain objects recurse as DOTTED params — several list
 * endpoints model their filters as structs (e.g. Cloudflare DNS listRecords
 * takes `name: { exact, contains, ... }`) that must go over the wire as
 * `name.exact=value`. Without this they fell through to `String(value)` and
 * were sent as `name=[object Object]`, which servers happily treat as a
 * filter matching nothing — the call "succeeds" with zero results and the
 * bug is invisible to the caller.
 */
const appendQuery = (
  query: URLSearchParams,
  name: string,
  value: unknown,
): void => {
  if (Array.isArray(value)) {
    for (const v of value) appendQuery(query, name, v);
  } else if (
    value !== null &&
    typeof value === "object" &&
    !(value instanceof Date)
  ) {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (v !== undefined) appendQuery(query, `${name}.${k}`, v);
    }
  } else {
    query.append(name, String(value));
  }
};

export interface BuildRequestOptions {
  readonly input: unknown;
  readonly inputAst: AST.AST;
  /** Base URL the operation's URI template is appended to. */
  readonly baseUrl: string;
  /** Headers applied before member-bound headers (credentials etc.). */
  readonly headers?: Record<string, string>;
  /**
   * Transform a member-bound header value before it is set (e.g.
   * Bearer-prefixing a raw token supplied as an Authorization member).
   */
  readonly mapMemberHeader?: (name: string, value: string) => string;
  /**
   * Wire name for input keys the schema doesn't declare (spec drift —
   * unknown keys pass through as body fields rather than being dropped).
   * Defaults to the key verbatim.
   */
  readonly unknownKeyToWire?: (key: string) => string;
}

/**
 * Build an HTTP request from an operation input and its schema, driven by
 * the trait annotations: `Http()` supplies method + URI template, `Label()`
 * members fill URI placeholders, `Header()`/`Query()` members bind to
 * headers/query params, `HttpBody()` sends the member as the whole body,
 * `FormDataFile()` members become multipart file parts, and everything else
 * is a JSON body field (wire-named via `Body()` / `KeyDictionary`).
 *
 * Throws when the input schema is missing the `Http()` trait — a codegen
 * bug, surfaced as a defect by the calling protocol's Effect context.
 */
/**
 * Flatten a nested object into Stripe-style bracket notation pairs for
 * form-urlencoded bodies: nested objects become `a[b][c]`, arrays index as
 * `a[0]`; null/undefined dropped, booleans as "true"/"false".
 */
const flattenToFormPairs = (
  obj: Record<string, unknown>,
  prefix = "",
): Array<[string, string]> => {
  const pairs: Array<[string, string]> = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;
    const fullKey = prefix ? `${prefix}[${key}]` : key;
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        if (item === undefined || item === null) continue;
        if (typeof item === "object" && !Array.isArray(item)) {
          pairs.push(
            ...flattenToFormPairs(
              item as Record<string, unknown>,
              `${fullKey}[${i}]`,
            ),
          );
        } else {
          pairs.push([`${fullKey}[${i}]`, String(item)]);
        }
      }
    } else if (typeof value === "object") {
      pairs.push(
        ...flattenToFormPairs(value as Record<string, unknown>, fullKey),
      );
    } else {
      pairs.push([fullKey, String(value)]);
    }
  }
  return pairs;
};

export const buildRequest = ({
  input,
  inputAst,
  baseUrl,
  headers: baseHeaders,
  mapMemberHeader,
  unknownKeyToWire,
}: BuildRequestOptions): HttpClientRequest.HttpClientRequest => {
  const inputObj = (input ?? {}) as Record<string, unknown>;
  const http = getAnn(inputAst, httpSymbol) as HttpTrait | undefined;
  if (!http) {
    throw new Error("operation input is missing the Http() trait");
  }
  // Root key dictionary: fallback wire mapping for opaque/unknown content
  // the schema doesn't model.
  const rootDict = getAnn(inputAst, keyDictionarySymbol) as
    | Record<string, string>
    | undefined;

  const headers: Record<string, string> = { ...baseHeaders };
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
      const hName = nameOf(prop, headerSymbol).toLowerCase();
      const hVal = String(value);
      headers[hName] = mapMemberHeader ? mapMemberHeader(hName, hVal) : hVal;
    } else if (hasPropAnn(prop, querySymbol)) {
      appendQuery(query, nameOf(prop, querySymbol), value);
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
  // generated schemas can lag the real API, and silently dropping them
  // would break working callers. The key dictionary maps them when it knows
  // the key, otherwise `unknownKeyToWire` decides the wire name.
  for (const [key, value] of Object.entries(inputObj)) {
    if (consumed.has(key) || value === undefined) continue;
    const wire =
      rootDict?.[key] ?? (unknownKeyToWire ? unknownKeyToWire(key) : key);
    body[wire] = rootDict
      ? mapKeysByDictionary(rootDict, value, "encode")
      : value;
    hasBodyMembers = true;
  }

  const qs = query.toString();
  const url = `${baseUrl}${uri}${qs ? `?${qs}` : ""}`;
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
    // Multipart upload: each body member is a form part (objects
    // JSON-encoded under their wire name), each file appends under its own
    // filename. A whole-body member (T.HttpBody) that is a record of files
    // becomes one part per entry (e.g. asset upload: { <hash>: File }).
    // File/Blob → binary part (filename = File.name), array of files → each
    // appended, object → JSON string, primitive → string.
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
  } else if (
    http.contentType === "form-urlencoded" &&
    !BODYLESS.has(http.method)
  ) {
    // application/x-www-form-urlencoded with Stripe-style deepObject bracket
    // notation: { shipping: { address: { city } } } → shipping[address][city],
    // arrays indexed ({ expand: ["a"] } → expand[0]=a).
    const source =
      rawBody !== undefined && typeof rawBody === "object"
        ? (rawBody as Record<string, unknown>)
        : body;
    const params = new URLSearchParams();
    for (const [k, v] of flattenToFormPairs(source)) params.append(k, v);
    request = request.pipe(
      HttpClientRequest.setBody(
        HttpBody.text(params.toString(), "application/x-www-form-urlencoded"),
      ),
    );
  } else if (rawBody !== undefined && !BODYLESS.has(http.method)) {
    // Whole-body member (raw arrays/scalars) — sent as the body itself.
    // With a bodyMediaType, the member is a preserialized payload (string /
    // bytes) sent verbatim under that media type (e.g. application/x-ndjson
    // for Vectorize insert/upsert); otherwise it's JSON.
    if (http.bodyMediaType) {
      request = request.pipe(
        HttpClientRequest.setBody(
          typeof rawBody === "string"
            ? HttpBody.text(rawBody, http.bodyMediaType)
            : HttpBody.uint8Array(rawBody as Uint8Array, http.bodyMediaType),
        ),
      );
    } else {
      request = request.pipe(HttpClientRequest.bodyJsonUnsafe(rawBody));
    }
  } else if (
    !BODYLESS.has(http.method) &&
    (Object.keys(body).length > 0 ||
      (hasBodyMembers && http.method !== "DELETE"))
  ) {
    // Send `{}` rather than no body when the schema declares body members —
    // some endpoints reject a missing JSON body outright.
    request = request.pipe(HttpClientRequest.bodyJsonUnsafe(body));
  }
  return request;
};
//#endregion

//#region Typed error matching

/**
 * Whether one matcher matches one wire error: every present field must
 * match; a matcher (or a message object) with no constraints matches
 * nothing.
 */
export const matchesExpression = (
  m: ErrorMatcher,
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

const matcherSpecificity = (m: ErrorMatcher): number =>
  (m.code !== undefined ? 1 : 0) +
  (m.status !== undefined ? 1 : 0) +
  (m.message !== undefined ? 1 : 0);

/**
 * Pick the operation's typed error class for a failed response: among all
 * declared classes whose matchers (see `applyErrorMatchers`) match the wire
 * failure, the most specific matcher wins (ties break by declaration order).
 */
export const matchTypedError = (
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
//#endregion
