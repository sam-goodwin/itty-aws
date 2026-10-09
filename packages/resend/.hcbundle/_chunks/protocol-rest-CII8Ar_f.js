import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as HttpBody from "effect/http/HttpBody";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import { pipeArguments } from "effect/Pipeable";
import * as Redacted from "effect/Redacted";
import * as Ref from "effect/Ref";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import { SingleShotGen } from "effect/Utils";
import {
  l as HTTP_STATUS_MAP,
  p as RETRYABLE_HTTP_STATUSES,
  u as InternalServerError,
} from "./errors-DKUnwzoV.js";
import { i as paginateWithDefaults, t as extractItems } from "./pagination-Br9V6XvR.js";
import { r as makeDefault } from "./retry-CRUQgxB9.js";

//#region lib/trait.js
const annotationMetaSymbol = Symbol.for("@distilled.cloud/core/annotation-meta");
function makeAnnotation(sym, value) {
  const fn = (schema) => schema.annotate({ [sym]: value });
  fn[annotationMetaSymbol] = [
    {
      symbol: sym,
      value,
    },
  ];
  fn[sym] = value;
  return fn;
}
const httpSymbol = Symbol.for("@distilled.cloud/core/http");
const Http = (trait) => makeAnnotation(httpSymbol, trait);
const labelSymbol = Symbol.for("@distilled.cloud/core/http/label");
const Label = (name) => makeAnnotation(labelSymbol, name ?? true);
const labelEncodingSymbol = Symbol.for("@distilled.cloud/core/http/label-encoding");
const responseCodeSymbol = Symbol.for("@distilled.cloud/core/http/response-code");
const ResponseCode = () => makeAnnotation(responseCodeSymbol, true);
const headerSymbol = Symbol.for("@distilled.cloud/core/http/header");
const Header = (name) => makeAnnotation(headerSymbol, name ?? true);
const bodySymbol = Symbol.for("@distilled.cloud/core/http/body");
const Body = (name) => makeAnnotation(bodySymbol, name ?? true);
const querySymbol = Symbol.for("@distilled.cloud/core/http/query");
const Query = (name) => makeAnnotation(querySymbol, name ?? true);
const deepQuerySymbol = Symbol.for("@distilled.cloud/core/http/deep-query");
const httpBodySymbol = Symbol.for("@distilled.cloud/core/http-body");
const HttpBody$1 = () => makeAnnotation(httpBodySymbol, true);
const stringEncodedSymbol = Symbol.for("@distilled.cloud/core/http/string-encoded");
const formDataFileSymbol = Symbol.for("@distilled.cloud/core/form-data-file");
const FormDataFile = () => makeAnnotation(formDataFileSymbol, true);
const keyDictionarySymbol = Symbol.for("@distilled.cloud/core/key-dictionary");
const KeyDictionary = (dict) => makeAnnotation(keyDictionarySymbol, dict);
const unionCasesSymbol = Symbol.for("@distilled.cloud/core/union-cases");
const UnionCases = (cases, discriminator) =>
  makeAnnotation(
    unionCasesSymbol,
    discriminator
      ? {
          cases,
          discriminator,
        }
      : { cases },
  );
const errorMatchersSymbol = Symbol.for("@distilled.cloud/core/error-matchers");
const applyErrorMatchers = (cls, matchers) => {
  cls[errorMatchersSymbol] = matchers;
  return cls;
};
const getErrorMatchers = (cls) => cls?.[errorMatchersSymbol];

//#endregion
//#region lib/api.js
var Protocol = class extends Context.Service()("Protocol") {};
const protocolMemoMap = Layer.makeMemoMapUnsafe();
const protocolScope = Scope.makeUnsafe();
const protocolContexts = /* @__PURE__ */ new WeakMap();
const protocolContext = (layer) => {
  const cached = protocolContexts.get(layer);
  if (cached) return Effect.succeed(cached);
  return Effect.map(Layer.buildWithMemoMap(layer, protocolMemoMap, protocolScope), (ctx) => {
    protocolContexts.set(layer, ctx);
    return ctx;
  });
};
const applyRetry = (base, retryKey) =>
  retryKey === void 0
    ? base
    : Effect.catch(base, (error) =>
        Effect.flatMap(Effect.serviceOption(retryKey), (opt) => {
          const policy = Option.isSome(opt) ? opt.value : makeDefault;
          return Effect.flatMap(Ref.make(error), (lastError) => {
            const opts = typeof policy === "function" ? policy(lastError) : policy;
            if (!opts.while || !opts.while(error)) return Effect.fail(error);
            let replay = true;
            const attempt = Effect.suspend(() => {
              if (replay) {
                replay = false;
                return Effect.fail(error);
              }
              return Effect.tapError(base, (e) => Ref.set(lastError, e));
            });
            return Effect.retry(attempt, {
              while: (e) => opts.while(e),
              ...(opts.schedule ? { schedule: opts.schedule } : {}),
            });
          });
        }),
      );
const stateKey = Symbol.for("@distilled.cloud/core/api/OperationState");
const prepare = (state) => {
  if (state.prepared) return state.prepared;
  const cfg = state.configFn();
  return (state.prepared = {
    cfg,
    inputAst: cfg.input.ast,
    outputAst: cfg.output.ast,
  });
};
const stateOf = (op) => op[stateKey];
const callOperation = (state, input) =>
  Effect.suspend(() => {
    const { cfg, inputAst, outputAst } = prepare(state);
    const call = Effect.flatMap(protocolContext(cfg.protocol), (protocolCtx) => {
      const protocol = Context.get(protocolCtx, Protocol);
      return Effect.flatMap(HttpClient.HttpClient, (client) =>
        Effect.flatMap(
          protocol.encode({
            input,
            inputAst,
            config: cfg,
          }),
          (request) =>
            Effect.flatMap(client.execute(request), (response) =>
              protocol.decode({
                response,
                outputAst,
                errors: cfg.errors ?? [],
                config: cfg,
              }),
            ),
        ),
      );
    });
    return applyRetry(call, cfg.retry);
  });
const bindContext = (op) =>
  Effect.map(
    Effect.context(),
    (context) => (input) =>
      Effect.updateContext(op(input), (current) => Context.merge(context, current)),
  );
const OperationProto = Object.setPrototypeOf(
  {
    [Symbol.iterator]() {
      return new SingleShotGen(this.asEffect());
    },
    pipe() {
      return pipeArguments(this.asEffect(), arguments);
    },
    asEffect() {
      return bindContext(this);
    },
    get input() {
      return prepare(stateOf(this)).cfg.input;
    },
    get output() {
      return prepare(stateOf(this)).cfg.output;
    },
    get errors() {
      return prepare(stateOf(this)).cfg.errors ?? [];
    },
    get operationName() {
      return prepare(stateOf(this)).cfg.operationName;
    },
    get pagination() {
      return prepare(stateOf(this)).cfg.pagination;
    },
  },
  Function.prototype,
);
const makeOperation = (state, proto) => {
  const fn = (input) => callOperation(state, input);
  Object.defineProperty(fn, stateKey, { value: state });
  return Object.setPrototypeOf(fn, proto);
};
function make(configFn) {
  return makeOperation({ configFn }, OperationProto);
}
const streamsOf = (state, call) => {
  const pag = () => prepare(state).cfg.pagination;
  const paginate = state.strategy ?? paginateWithDefaults;
  const pages = (input) => paginate(call, input, pag());
  const items = (input) => {
    const p = pag();
    return p.items ? extractItems(pages(input), p.items) : pages(input);
  };
  return {
    pages,
    items,
  };
};
const streamGetter = (name) =>
  function () {
    const fns = streamsOf(stateOf(this), this);
    Object.defineProperties(this, {
      pages: {
        value: fns.pages,
        configurable: true,
      },
      items: {
        value: fns.items,
        configurable: true,
      },
    });
    return fns[name];
  };
const PaginatedOperationProto = Object.create(OperationProto, {
  pages: {
    get: streamGetter("pages"),
    configurable: true,
  },
  items: {
    get: streamGetter("items"),
    configurable: true,
  },
  asEffect: {
    value() {
      const state = stateOf(this);
      return Effect.map(bindContext(this), (call) => Object.assign(call, streamsOf(state, call)));
    },
    configurable: true,
    writable: true,
  },
});
function makePaginated(configFn, strategy) {
  return makeOperation(
    strategy
      ? {
          configFn,
          strategy,
        }
      : { configFn },
    PaginatedOperationProto,
  );
}

//#endregion
//#region lib/protocol-http.js
const getProps = (ast) => {
  if (ast._tag === "Objects") return ast.propertySignatures;
  if (ast._tag === "Suspend") return getProps(ast.thunk());
  if (ast.encoding && ast.encoding.length > 0) return getProps(ast.encoding[0].to);
  return [];
};
const getAnn = (ast, symbol) => {
  const direct = ast.annotations?.[symbol];
  if (direct !== void 0) return direct;
  if (ast._tag === "Suspend") return getAnn(ast.thunk(), symbol);
  if (ast.encoding && ast.encoding.length > 0) return getAnn(ast.encoding[0].to, symbol);
  if (ast._tag === "Union") {
    const real = ast.types.filter(
      (t) => t._tag !== "Undefined" && !(t._tag === "Literal" && t.literal === null),
    );
    if (real.length === 1) return getAnn(real[0], symbol);
  }
};
const getPropAnn = (prop, symbol) => getAnn(prop.type, symbol);
const hasPropAnn = (prop, symbol) => getPropAnn(prop, symbol) !== void 0;
const nameOf = (prop, symbol) => {
  const v = getPropAnn(prop, symbol);
  return typeof v === "string" ? v : String(prop.name);
};
const resolveNode = (ast) => {
  if (ast._tag === "Suspend") return resolveNode(ast.thunk());
  if (ast.encoding && ast.encoding.length > 0) return resolveNode(ast.encoding[0].to);
  if (ast._tag === "Union") {
    const real = ast.types.filter(
      (t) =>
        t._tag !== "Undefined" &&
        t._tag !== "Null" &&
        !(t._tag === "Literal" && t.literal === null),
    );
    if (real.length === 1) return resolveNode(real[0]);
  }
  return ast;
};
const isOpaqueValue = (v) =>
  v instanceof Blob ||
  v instanceof File ||
  v instanceof ArrayBuffer ||
  v instanceof Uint8Array ||
  v instanceof Date;
const mapKeysByDictionary = (dict, value, direction) => {
  if (value === null || typeof value !== "object" || isOpaqueValue(value)) return value;
  if (Array.isArray(value)) return value.map((v) => mapKeysByDictionary(dict, v, direction));
  const rename =
    direction === "decode"
      ? Object.fromEntries(
          Object.entries(dict).flatMap(([ts, wire]) =>
            typeof wire === "string" ? [[wire, ts]] : wire.map((w) => [w, ts]),
          ),
        )
      : Object.fromEntries(
          Object.entries(dict).map(([ts, wire]) => [ts, typeof wire === "string" ? wire : wire[0]]),
        );
  const out = {};
  for (const [k, v] of Object.entries(value)) {
    if (v === void 0) continue;
    out[rename[k] ?? k] = mapKeysByDictionary(dict, v, direction);
  }
  return out;
};
const stringEncode = (value) =>
  value === null ? null : Array.isArray(value) ? value.map(stringEncode) : String(value);
const mapKeys = (ast, value, direction, fallback) => {
  if (value === null || value === void 0 || typeof value !== "object" || isOpaqueValue(value))
    return value;
  const dict = getAnn(ast, keyDictionarySymbol) ?? fallback;
  const unionCases = getAnn(ast, unionCasesSymbol);
  if (unionCases && direction === "decode" && !Array.isArray(value)) {
    const obj = dict ? mapKeysByDictionary(dict, value, "decode") : value;
    const present = Object.keys(obj).filter((k) => obj[k] !== void 0 && obj[k] !== null);
    const disc = unionCases.discriminator;
    const tag = disc ? obj[disc.key] : void 0;
    const tagged = typeof tag === "string" ? disc.values.indexOf(tag) : -1;
    let best;
    if (tagged >= 0)
      best = {
        keys: unionCases.cases[tagged],
        score: 0,
        matched: 0,
      };
    else
      for (const keys of unionCases.cases) {
        const set = new Set(keys);
        let matched = 0;
        let excess = 0;
        for (const k of present)
          if (set.has(k)) matched++;
          else excess++;
        const score = matched - excess;
        if (
          matched > 0 &&
          (!best || score > best.score || (score === best.score && matched > best.matched))
        )
          best = {
            keys,
            score,
            matched,
          };
      }
    if (best) {
      const out = {};
      for (const k of best.keys) out[k] = obj[k];
      return out;
    }
    return obj;
  }
  const node = resolveNode(ast);
  if (node._tag === "Union") {
    const arms = node.types.map(resolveNode);
    if (Array.isArray(value)) {
      const arr = arms.find((t) => t._tag === "Arrays");
      if (arr) return mapKeys(arr, value, direction, dict);
    } else {
      let best;
      let bestScore = 0;
      for (const t of arms) {
        if (t._tag !== "Objects") continue;
        let score = 0;
        for (const p of t.propertySignatures)
          if (value[direction === "encode" ? String(p.name) : nameOf(p, bodySymbol)] !== void 0)
            score++;
        if (score > bestScore) {
          best = t;
          bestScore = score;
        }
      }
      if (best) return mapKeys(best, value, direction, dict);
    }
    return dict ? mapKeysByDictionary(dict, value, direction) : value;
  }
  if (node._tag === "Arrays") {
    if (!Array.isArray(value)) return value;
    const elem = node.rest?.[0];
    return elem
      ? value.map((v) => mapKeys(elem, v, direction, dict))
      : dict
        ? mapKeysByDictionary(dict, value, direction)
        : value;
  }
  if (node._tag === "Objects" && !Array.isArray(value)) {
    const props = node.propertySignatures;
    const isigs = node.indexSignatures;
    if (props.length === 0 && !(isigs && isigs.length))
      return dict ? mapKeysByDictionary(dict, value, direction) : value;
    const out = {};
    const consumed = /* @__PURE__ */ new Set();
    for (const p of props) {
      const tsName = String(p.name);
      const wire = nameOf(p, bodySymbol);
      const from = direction === "encode" ? tsName : wire;
      const to = direction === "encode" ? wire : tsName;
      consumed.add(from);
      const v = value[from];
      if (v === void 0) continue;
      out[to] =
        direction === "encode" && hasPropAnn(p, stringEncodedSymbol)
          ? stringEncode(v)
          : mapKeys(p.type, v, direction, dict);
    }
    for (const [k, v] of Object.entries(value)) {
      if (consumed.has(k) || v === void 0) continue;
      const renamed = dict
        ? direction === "encode"
          ? (dict[k] ?? k)
          : (Object.entries(dict).find(([, w]) => w === k)?.[0] ?? k)
        : k;
      out[typeof renamed === "string" ? renamed : renamed[0]] =
        isigs && isigs.length
          ? mapKeys(isigs[0].type, v, direction, dict)
          : dict
            ? mapKeysByDictionary(dict, v, direction)
            : v;
    }
    return out;
  }
  return dict ? mapKeysByDictionary(dict, value, direction) : value;
};
const BODYLESS = /* @__PURE__ */ new Set(["GET", "HEAD"]);
const appendQuery = (query, name, value) => {
  if (Array.isArray(value)) for (const v of value) appendQuery(query, name, v);
  else if (value !== null && typeof value === "object" && !(value instanceof Date)) {
    for (const [k, v] of Object.entries(value))
      if (v !== void 0) appendQuery(query, `${name}.${k}`, v);
  } else query.append(name, String(value));
};
const encodeGreedyLabel = (value) =>
  value.replace(/^\/+/, "").split("/").map(encodeURIComponent).join("/");
const flattenToFormPairs = (obj, prefix = "") => {
  const pairs = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === void 0 || value === null) continue;
    const fullKey = prefix ? `${prefix}[${key}]` : key;
    if (Array.isArray(value))
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        if (item === void 0 || item === null) continue;
        if (typeof item === "object" && !Array.isArray(item))
          pairs.push(...flattenToFormPairs(item, `${fullKey}[${i}]`));
        else pairs.push([`${fullKey}[${i}]`, String(item)]);
      }
    else if (typeof value === "object") pairs.push(...flattenToFormPairs(value, fullKey));
    else pairs.push([fullKey, String(value)]);
  }
  return pairs;
};
const buildRequest = ({
  input,
  inputAst,
  baseUrl,
  headers: baseHeaders,
  mapMemberHeader,
  unknownKeyToWire,
}) => {
  const inputObj = input ?? {};
  const http = getAnn(inputAst, httpSymbol);
  if (!http) throw new Error("operation input is missing the Http() trait");
  const rootDict = getAnn(inputAst, keyDictionarySymbol);
  const headers = { ...baseHeaders };
  const body = {};
  let rawBody;
  const files = [];
  const query = new URLSearchParams();
  let uri = http.uri;
  const consumed = /* @__PURE__ */ new Set();
  let hasBodyMembers = false;
  let memberContentType;
  for (const prop of getProps(inputAst)) {
    const key = String(prop.name);
    consumed.add(key);
    const value = inputObj[key];
    if (
      !hasPropAnn(prop, labelSymbol) &&
      !hasPropAnn(prop, headerSymbol) &&
      !hasPropAnn(prop, querySymbol) &&
      !hasPropAnn(prop, deepQuerySymbol)
    )
      hasBodyMembers = true;
    if (value === void 0) continue;
    if (hasPropAnn(prop, labelSymbol)) {
      const token = nameOf(prop, labelSymbol);
      const preserve = getPropAnn(prop, labelEncodingSymbol);
      const encoded = encodeURIComponent(String(value));
      const label =
        typeof preserve === "string"
          ? encoded.replace(/%[0-9A-F]{2}/g, (escape) => {
              const character = String.fromCharCode(Number.parseInt(escape.slice(1), 16));
              return preserve.includes(character) ? character : escape;
            })
          : encoded;
      uri = uri.includes(`{${token}+}`)
        ? uri.replace(`{${token}+}`, () => encodeGreedyLabel(String(value)))
        : uri.replace(`{${token}}`, () => label);
    } else if (hasPropAnn(prop, headerSymbol)) {
      const hName = nameOf(prop, headerSymbol).toLowerCase();
      const hVal = String(value);
      headers[hName] = mapMemberHeader ? mapMemberHeader(hName, hVal) : hVal;
      if (hName === "content-type") memberContentType = headers[hName];
    } else if (hasPropAnn(prop, querySymbol)) appendQuery(query, nameOf(prop, querySymbol), value);
    else if (hasPropAnn(prop, deepQuerySymbol)) {
      const base = nameOf(prop, deepQuerySymbol);
      const mapped = mapKeys(prop.type, value, "encode", rootDict);
      if (mapped !== null && typeof mapped === "object") {
        for (const [k, v] of Object.entries(mapped))
          if (v !== void 0 && v !== null) appendQuery(query, `${base}.${k}`, v);
      }
    } else if (hasPropAnn(prop, formDataFileSymbol))
      for (const f of Array.isArray(value) ? value : [value]) files.push(f);
    else if (hasPropAnn(prop, httpBodySymbol))
      rawBody = mapKeys(prop.type, value, "encode", rootDict);
    else
      body[nameOf(prop, bodySymbol)] = hasPropAnn(prop, stringEncodedSymbol)
        ? stringEncode(value)
        : mapKeys(prop.type, value, "encode", rootDict);
  }
  for (const [key, value] of Object.entries(inputObj)) {
    if (consumed.has(key) || value === void 0) continue;
    const wire = rootDict?.[key] ?? (unknownKeyToWire ? unknownKeyToWire(key) : key);
    body[typeof wire === "string" ? wire : wire[0]] = rootDict
      ? mapKeysByDictionary(rootDict, value, "encode")
      : value;
    hasBodyMembers = true;
  }
  const qs = query.toString();
  const url = `${baseUrl}${uri}${qs ? `?${qs}` : ""}`;
  if (process.env.DISTILLED_DEBUG_HTTP) console.error(`[distilled] -> ${http.method} ${http.uri}`);
  let request = HttpClientRequest.make(http.method)(url).pipe(
    HttpClientRequest.setHeaders(headers),
  );
  if (http.contentType === "multipart") {
    const form = new FormData();
    const parts = rawBody !== void 0 && typeof rawBody === "object" ? rawBody : body;
    const isFileOrBlob = (v) => v instanceof Blob || v instanceof File;
    for (const [key, value] of Object.entries(parts)) {
      if (value === void 0 || value === null) continue;
      if (isFileOrBlob(value)) form.append(key, value, value instanceof File ? value.name : key);
      else if (value instanceof Uint8Array || value instanceof ArrayBuffer) {
        const bytes = value instanceof Uint8Array ? new Uint8Array(value).buffer : value;
        form.append(key, new Blob([bytes]), key);
      } else if (Array.isArray(value) && value.length > 0 && isFileOrBlob(value[0])) {
        for (const file of value)
          if (isFileOrBlob(file))
            form.append(
              file instanceof File ? file.name : key,
              file,
              file instanceof File ? file.name : void 0,
            );
      } else if (typeof value === "object") form.append(key, JSON.stringify(value));
      else form.append(key, String(value));
    }
    for (const f of files) {
      const filename = f.name ?? "file";
      form.append(filename, f, filename);
    }
    request = request.pipe(HttpClientRequest.bodyFormData(form));
  } else if (http.contentType === "form-urlencoded" && !BODYLESS.has(http.method)) {
    const source = rawBody !== void 0 && typeof rawBody === "object" ? rawBody : body;
    const params = new URLSearchParams();
    for (const [k, v] of flattenToFormPairs(source)) params.append(k, v);
    request = request.pipe(
      HttpClientRequest.setBody(
        HttpBody.text(params.toString(), "application/x-www-form-urlencoded"),
      ),
    );
  } else if (rawBody !== void 0 && !BODYLESS.has(http.method)) {
    const mediaType = memberContentType ?? http.bodyMediaType;
    if (rawBody instanceof Blob || rawBody instanceof ArrayBuffer)
      request = request.pipe(
        HttpClientRequest.setBody(HttpBody.raw(rawBody, { contentType: mediaType })),
      );
    else if (rawBody instanceof Uint8Array)
      request = request.pipe(HttpClientRequest.setBody(HttpBody.uint8Array(rawBody, mediaType)));
    else if (http.bodyMediaType)
      request = request.pipe(
        HttpClientRequest.setBody(
          typeof rawBody === "string"
            ? HttpBody.text(rawBody, mediaType)
            : HttpBody.uint8Array(rawBody, mediaType),
        ),
      );
    else request = request.pipe(HttpClientRequest.bodyJsonUnsafe(rawBody));
  } else if (
    Object.keys(body).length > 0 ||
    (hasBodyMembers && !BODYLESS.has(http.method) && http.method !== "DELETE")
  )
    request = request.pipe(HttpClientRequest.bodyJsonUnsafe(body));
  return request;
};
const matchesText = (matcher, value) => {
  if (typeof value !== "string") return false;
  if (typeof matcher === "string") return matcher === value;
  const { includes, matches } = matcher;
  return (
    (includes !== void 0 || matches !== void 0) &&
    (includes === void 0 || value.includes(includes)) &&
    (matches === void 0 || new RegExp(matches).test(value))
  );
};
const atPointer = (body, pointer) => {
  if (pointer === "") return body;
  if (!pointer.startsWith("/") || /~(?![01])/u.test(pointer)) return void 0;
  let value = body;
  for (const segment of pointer.slice(1).split("/")) {
    const key = segment.replace(/~1/g, "/").replace(/~0/g, "~");
    if (
      value === null ||
      typeof value !== "object" ||
      !Object.hasOwn(value, key) ||
      (Array.isArray(value) && !/^(0|[1-9][0-9]*)$/.test(key))
    )
      return void 0;
    value = value[key];
  }
  return value;
};
const matcherSpecificity = (m) =>
  (m.code !== void 0 ? 1 : 0) +
  (m.status !== void 0 ? 1 : 0) +
  (m.message !== void 0 ? 1 : 0) +
  (m.body === void 0 ? 0 : Object.keys(m.body).length) +
  (m.headers === void 0 ? 0 : Object.keys(m.headers).length);
const matchesExpression = (m, code, status, message, response = {}) => {
  if (
    m.code === void 0 &&
    m.status === void 0 &&
    m.message === void 0 &&
    matcherSpecificity(m) === 0
  )
    return false;
  if (m.code !== void 0 && m.code !== code) return false;
  if (m.status !== void 0 && m.status !== status) return false;
  if (m.message !== void 0 && !matchesText(m.message, message)) return false;
  if (m.body !== void 0)
    for (const [pointer, expected] of Object.entries(m.body)) {
      const actual = atPointer(response.body, pointer);
      if (typeof expected === "string" || (expected !== null && typeof expected === "object")) {
        if (!matchesText(expected, actual)) return false;
      } else if (actual !== expected) return false;
    }
  if (m.headers !== void 0)
    for (const [name, expected] of Object.entries(m.headers)) {
      if (response.headers === void 0) return false;
      const actual = Object.entries(response.headers).find(
        ([key]) => key.toLowerCase() === name.toLowerCase(),
      )?.[1];
      if (!matchesText(expected, actual)) return false;
    }
  return true;
};
const matchTypedError = (errorClasses, status, errors, response = {}) => {
  let best;
  const wireErrors = errors.length > 0 ? errors : [{ message: `HTTP ${status}` }];
  for (const cls of errorClasses) {
    const matchers = getErrorMatchers(cls);
    if (!matchers) continue;
    for (const m of matchers)
      for (const e of wireErrors) {
        if (!matchesExpression(m, e.code, status, e.message, response)) continue;
        const specificity = matcherSpecificity(m);
        if (!best || specificity > best.specificity)
          best = {
            cls,
            specificity,
            code: e.code,
            message: e.message,
          };
      }
  }
  if (!best) return void 0;
  return new best.cls({
    code: best.code ?? 0,
    message: best.message,
    body: response.body,
    headers: response.headers,
  });
};

//#endregion
//#region lib/response-validation.js
const ResponseValidation = Context.Reference("@distilled.cloud/core/ResponseValidation", {
  defaultValue: () => "lenient",
});
const strict = Layer.succeed(ResponseValidation, "strict");
const lenient = Layer.succeed(ResponseValidation, "lenient");
const isStrict = Effect.map(ResponseValidation, (mode) => mode === "strict");
const decoders = /* @__PURE__ */ new WeakMap();
const decoderFor = (ast) => {
  let decode = decoders.get(ast);
  if (!decode) {
    decode = Schema.decodeUnknownEffect(Schema.make(ast));
    decoders.set(ast, decode);
  }
  return decode;
};
const validateResponse = (outputAst, value, onError) =>
  Effect.flatMap(ResponseValidation, (mode) =>
    mode === "lenient"
      ? Effect.succeed(value)
      : decoderFor(outputAst)(value).pipe(Effect.mapError(onError), Effect.as(value)),
  );

//#endregion
//#region lib/retry-after.js
const parseRetryAfter = (headers) => {
  const raw = headers?.["retry-after"];
  if (!raw) return void 0;
  const trimmed = raw.trim();
  if (trimmed.length === 0) return void 0;
  if (/^\d+$/.test(trimmed)) {
    const seconds = Number(trimmed);
    if (Number.isFinite(seconds) && seconds >= 0) return Duration.seconds(seconds);
  }
  if (/^[-+]?\d+(?:\.\d+)?$/.test(trimmed)) return void 0;
  const ts = Date.parse(trimmed);
  if (!Number.isNaN(ts)) {
    const ms = Math.max(0, ts - Date.now());
    return Duration.millis(ms);
  }
};
const parseRatelimit = (headers) => {
  const raw = headers?.["ratelimit"];
  if (!raw) return void 0;
  let remaining;
  let reset;
  for (const piece of raw.split(/[,;]/)) {
    const eq = piece.indexOf("=");
    if (eq < 0) continue;
    const key = piece.slice(0, eq).trim().toLowerCase();
    const value = piece.slice(eq + 1).trim();
    const num = Number(value);
    if (!Number.isFinite(num)) continue;
    if (key === "r" || key === "remaining") remaining = num;
    else if (key === "t" || key === "reset") reset = num;
  }
  if (remaining !== 0) return void 0;
  if (reset === void 0 || reset < 0) return void 0;
  return Duration.seconds(reset);
};
const parseServerRetryHint = (headers) => parseRetryAfter(headers) ?? parseRatelimit(headers);
const parseRetryAfterForStatus = (status, headers) => {
  if (!RETRYABLE_HTTP_STATUSES.has(status)) return void 0;
  return parseServerRetryHint(headers);
};

//#endregion
//#region lib/protocol-rest.js
const sensitiveValueSymbol = Symbol.for("@distilled.cloud/core/sensitive-value");
const SensitiveValue = (_value) => makeAnnotation(sensitiveValueSymbol, true);
const rawResponseSymbol = Symbol.for("@distilled.cloud/core/raw-response");
const RawResponse = (_value) => makeAnnotation(rawResponseSymbol, true);
const rawResponseRootSymbol = Symbol.for("@distilled.cloud/core/raw-response-root");
const RawResponseRoot = () => makeAnnotation(rawResponseRootSymbol, true);
const binaryResponseSymbol = Symbol.for("@distilled.cloud/core/binary-response");
const isPlainObject = (v) =>
  v !== null &&
  typeof v === "object" &&
  !Array.isArray(v) &&
  !isOpaqueValue(v) &&
  (Object.getPrototypeOf(v) === Object.prototype || Object.getPrototypeOf(v) === null);
const unwrapRedactedDeep = (value) => {
  if (Redacted.isRedacted(value)) return Redacted.value(value);
  if (Array.isArray(value)) return value.map(unwrapRedactedDeep);
  if (isPlainObject(value)) {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (v === void 0) continue;
      out[k] = unwrapRedactedDeep(v);
    }
    return out;
  }
  return value;
};
const wrapSensitive = (ast, value) => {
  if (value === null || typeof value !== "object" || isOpaqueValue(value)) return value;
  const node = resolveNode(ast);
  if (node._tag === "Union")
    return node.types.reduce((redacted, arm) => wrapSensitive(arm, redacted), value);
  if (node._tag === "Arrays") {
    if (!Array.isArray(value)) return value;
    const elem = node.rest?.[0];
    return elem ? value.map((v) => wrapSensitive(elem, v)) : value;
  }
  if (node._tag === "Objects" && !Array.isArray(value)) {
    const props = getProps(node);
    if (props.length === 0) return value;
    const byName = new Map(props.map((p) => [String(p.name), p]));
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (v === void 0) continue;
      const prop = byName.get(k);
      if (!prop) out[k] = v;
      else if (getPropAnn(prop, sensitiveValueSymbol) !== void 0 && typeof v === "string")
        out[k] = Redacted.make(v);
      else out[k] = wrapSensitive(prop.type, v);
    }
    return out;
  }
  return value;
};
const defaultErrorEnvelope = (body) => {
  if (body === null || typeof body !== "object") return void 0;
  const b = body;
  return {
    code: typeof b.code === "string" || typeof b.code === "number" ? b.code : void 0,
    message:
      typeof b.message === "string" ? b.message : typeof b.error === "string" ? b.error : void 0,
  };
};
const fail = (e) => Effect.fail(e);
const makeRestProtocol = (options) => {
  const errorEnvelope = options.errorEnvelope ?? defaultErrorEnvelope;
  const statusMap = options.statusMap ?? HTTP_STATUS_MAP;
  const encode = ({ input, inputAst }) =>
    Effect.gen(function* () {
      const creds = yield* options.credentials;
      const http = getAnn(inputAst, httpSymbol);
      let baseUrl;
      try {
        baseUrl = options.baseUrl(creds, {
          uri: http?.uri ?? "",
          method: http?.method ?? "",
        });
      } catch (e) {
        return yield* Effect.fail(e);
      }
      return buildRequest({
        input: unwrapRedactedDeep(input),
        inputAst,
        baseUrl,
        headers: options.headers(creds),
        mapMemberHeader: options.mapMemberHeader,
        unknownKeyToWire: options.unknownKeyToWire,
      });
    });
  const decode = ({ response, outputAst, errors: errorClasses }) =>
    Effect.gen(function* () {
      if (
        response.status >= 200 &&
        response.status < 300 &&
        getAnn(outputAst, binaryResponseSymbol) !== void 0
      ) {
        const bytes = yield* response.arrayBuffer.pipe(Effect.orDie);
        return new Uint8Array(bytes);
      }
      const text = (yield* response.text.pipe(Effect.orDie)) ?? "";
      if (process.env.DISTILLED_DEBUG_HTTP) console.error(`[distilled] <- ${response.status}`);
      let json;
      let nonJson = false;
      if (text.trim().length > 0)
        try {
          json = JSON.parse(text);
        } catch {
          nonJson = true;
        }
      const status = response.status;
      const headers = response.headers;
      if (status >= 400) {
        const env = (nonJson ? void 0 : errorEnvelope(json)) ?? {};
        const message = env.message ?? (nonJson && text.trim() ? text.trim() : `HTTP ${status}`);
        const typed = matchTypedError(
          errorClasses,
          status,
          [
            {
              code: typeof env.code === "number" ? env.code : void 0,
              message,
            },
          ],
          {
            body: nonJson ? text : json,
            headers,
          },
        );
        if (typed !== void 0) return yield* fail(typed);
        const StatusErrorClass = statusMap[status];
        if (StatusErrorClass)
          return yield* fail(
            new StatusErrorClass({
              message,
              retryAfter: parseRetryAfterForStatus(status, headers),
            }),
          );
        if (status >= 500)
          return yield* fail(
            new InternalServerError({
              message,
              retryAfter: parseRetryAfterForStatus(status, headers),
            }),
          );
        return yield* fail(
          options.unknownError({
            status,
            code: env.code,
            message,
            body: nonJson ? text : json,
            headers,
          }),
        );
      }
      let body = nonJson ? text : (json ?? {});
      if (options.transformResponse) body = options.transformResponse(body);
      const mapped = yield* validateResponse(
        outputAst,
        mapKeys(outputAst, body, "decode"),
        (cause) =>
          options.parseError({
            body: nonJson ? text : json,
            cause,
          }),
      ).pipe(Effect.catch(fail));
      return wrapSensitive(outputAst, mapped);
    });
  return Layer.succeed(
    Protocol,
    Protocol.of({
      encode: (args) => encode(args),
      decode,
    }),
  );
};

//#endregion
export {
  querySymbol as A,
  formDataFileSymbol as C,
  httpSymbol as D,
  httpBodySymbol as E,
  unionCasesSymbol as M,
  keyDictionarySymbol as O,
  errorMatchersSymbol as S,
  headerSymbol as T,
  Query as _,
  rawResponseRootSymbol as a,
  applyErrorMatchers as b,
  make as c,
  FormDataFile as d,
  Header as f,
  Label as g,
  KeyDictionary as h,
  makeRestProtocol as i,
  responseCodeSymbol as j,
  labelSymbol as k,
  makePaginated as l,
  HttpBody$1 as m,
  RawResponseRoot as n,
  rawResponseSymbol as o,
  Http as p,
  SensitiveValue as r,
  sensitiveValueSymbol as s,
  RawResponse as t,
  Body as u,
  ResponseCode as v,
  getErrorMatchers as w,
  bodySymbol as x,
  UnionCases as y,
};
