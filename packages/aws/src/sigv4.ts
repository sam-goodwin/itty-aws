/**
 * SigV4 request signing (header `Authorization` and query-string presigning).
 *
 * Effect-native port of the signing core of `aws4fetch`'s `AwsV4Signer`,
 * preserving its canonicalisation rules byte for byte: header/path/query
 * encoding, the unsignable-header set, S3's UNSIGNED-PAYLOAD defaults and
 * duplicate-query-key handling, and the derived-key cache. Service and
 * region are always supplied by the callers here, so host-based guessing is
 * intentionally absent.
 */
import * as CoreCrypto from "@distilled.cloud/core/crypto";
import * as Cache from "effect/Cache";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Redacted from "effect/Redacted";

/**
 * Headers left out of the signature by default (matches aws4fetch). Callers
 * opt back in with `allHeaders`.
 */
const UNSIGNABLE_HEADERS: ReadonlySet<string> = /*@__PURE__*/ new Set([
  "authorization",
  "content-type",
  "content-length",
  "user-agent",
  "presigned-expires",
  "expect",
  "x-amzn-trace-id",
  "range",
  "connection",
]);

export type SignableBody = string | ArrayBuffer | ArrayBufferView;

export interface SignOptions {
  /** HTTP method. Defaults to `POST` when a body is present, else `GET`. */
  readonly method?: string;
  /** Absolute URL to sign. */
  readonly url: string;
  /** Request headers. Keys are case-insensitive; `Host` is derived from the URL. */
  readonly headers?: Record<string, string>;
  /**
   * Request body used for the payload hash. Omit for UNSIGNED-PAYLOAD (set the
   * `X-Amz-Content-Sha256` header yourself) or for bodiless requests.
   */
  readonly body?: SignableBody;
  /** Public half of the key pair; it is written into the signed request. */
  readonly accessKeyId: string;
  readonly secretAccessKey: Redacted.Redacted<string>;
  readonly sessionToken?: Redacted.Redacted<string> | undefined;
  /** SigV4 signing name (e.g. `s3`, `execute-api`). */
  readonly service: string;
  /** SigV4 signing region. */
  readonly region: string;
  /** Fixed `YYYYMMDDTHHMMSSZ` signing time; defaults to now. */
  readonly datetime?: string;
  /** Sign into the query string (presigned URL) instead of headers. */
  readonly signQuery?: boolean;
  /** Include the normally unsignable headers (content-type, range, ...). */
  readonly allHeaders?: boolean;
}

export interface SignedRequest {
  readonly method: string;
  /** Normalised URL; carries the `X-Amz-*` params when `signQuery` is set. */
  readonly url: string;
  /** Lower-cased header names, including the added `x-amz-*` / `authorization`. */
  readonly headers: Record<string, string>;
}

/** `options.url` is not an absolute URL the `URL` constructor accepts. */
export class InvalidSigningUrl
  extends /*@__PURE__*/ Data.TaggedError("AWS::SigV4::InvalidSigningUrl")<{
    readonly url: string;
    readonly cause: unknown;
  }> {}

/**
 * A header name or value is not valid HTTP (the `Headers` constructor
 * rejected it), so it cannot be canonicalised.
 */
export class InvalidSigningHeaders
  extends /*@__PURE__*/ Data.TaggedError("AWS::SigV4::InvalidSigningHeaders")<{
    readonly cause: unknown;
  }> {}

/** The crypto implementation (see `@distilled.cloud/core/crypto`) rejected an HMAC or SHA-256 operation. */
export class CryptoError
  extends /*@__PURE__*/ Data.TaggedError("AWS::SigV4::CryptoError")<{
    readonly operation: "hmac" | "sha256";
    readonly cause: unknown;
  }> {}

export type SigningError = InvalidSigningUrl | InvalidSigningHeaders | CryptoError;

const toBytes = (data: SignableBody): Uint8Array | string =>
  typeof data === "string"
    ? data
    : ArrayBuffer.isView(data)
      ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
      : new Uint8Array(data);

/** Map the core crypto failure to this module's error (the public signing error). */
const fromCore = (e: CoreCrypto.CryptoError) =>
  new CryptoError({ operation: e.operation === "sha256" ? "sha256" : "hmac", cause: e.cause });

/** Hex SHA-256 with the context's crypto implementation. */
const sha256Hex = (data: SignableBody): Effect.Effect<string, CryptoError> =>
  Effect.flatMap(CoreCrypto.Crypto, (c) =>
    Effect.mapError(Effect.map(c.sha256(toBytes(data)), CoreCrypto.hex), fromCore),
  );

/** Percent-encode the characters `encodeURIComponent` leaves alone but RFC 3986 reserves. */
const encodeRfc3986 = (encoded: string): string =>
  encoded.replace(/[!'()*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());

/**
 * Scope of a derived signing key. `Redacted` hashes and compares by its
 * underlying value, so the secret never has to be unwrapped into a cache key.
 */
export interface SigningKeyScope {
  readonly secretAccessKey: Redacted.Redacted<string>;
  readonly date: string;
  readonly region: string;
  readonly service: string;
  /** The implementation the key is imported into: a key from one cannot sign with another. */
  readonly crypto?: CoreCrypto.CryptoImpl;
}

const deriveSigningKey = ({
  secretAccessKey,
  date,
  region,
  service,
  crypto,
}: SigningKeyScope): Effect.Effect<SigningKey, CryptoError> =>
  Effect.flatMap(
    crypto ? Effect.succeed(crypto) : CoreCrypto.Crypto,
    (c: CoreCrypto.CryptoImpl) => {
      const step = (key: Uint8Array | string, data: string) =>
        Effect.flatMap(c.importHmacKey(key), (k) => c.hmacSha256(k, data));
      return step("AWS4" + Redacted.value(secretAccessKey), date).pipe(
        Effect.flatMap((kDate) => step(kDate, region)),
        Effect.flatMap((kRegion) => step(kRegion, service)),
        Effect.flatMap((kService) => step(kService, "aws4_request")),
        // Import the final key once: it signs every request in this scope today.
        Effect.flatMap((signing) => c.importHmacKey(signing)),
        Effect.map((key) => ({ key, impl: c })),
        Effect.mapError(fromCore),
      );
    },
  );

/** A derived key imported into the implementation that will use it. */
interface SigningKey {
  readonly key: CoreCrypto.HmacKey;
  readonly impl: CoreCrypto.CryptoImpl;
}

/**
 * Derived signing keys, keyed on secret/date/region/service. Deriving one
 * costs four HMACs; requests within a UTC day for the same scope share it.
 * The cache is bounded (LRU) so long-lived processes rotating temporary
 * credentials do not accumulate secret-derived material, and it is a context
 * reference so a scope can substitute its own. Failed derivations are not
 * retained, so a transient WebCrypto failure is retried on the next request.
 */
export const SigningKeyCache = /*@__PURE__*/ Context.Reference<
  Cache.Cache<SigningKeyScope, SigningKey, CryptoError>
>("AWS::SigningKeyCache", {
  defaultValue: () =>
    Effect.runSync(
      Cache.makeWith(deriveSigningKey, {
        capacity: 64,
        timeToLive: (exit) => (Exit.isSuccess(exit) ? Duration.infinity : Duration.zero),
      }),
    ),
});

/**
 * The canonical form of a request, before any hashing: everything SigV4
 * derives from the URL and headers. `finish` writes the signature in.
 */
interface Canonical {
  readonly method: string;
  readonly date: string;
  readonly datetime: string;
  readonly credentialString: string;
  /** The payload hash when it is fixed by a header or S3 presigning; else the body is hashed. */
  readonly payloadHash: string | undefined;
  readonly canonicalPrefix: string;
  readonly finish: (signature: string) => SignedRequest;
}

/** Canonicalise `options`; throws {@link InvalidSigningUrl} / {@link InvalidSigningHeaders}. */
const canonicalize = (options: SignOptions): Canonical => {
  const { accessKeyId, service, region, signQuery, allHeaders, body } = options;
  const sessionToken = options.sessionToken ? Redacted.value(options.sessionToken) : undefined;
  const method = options.method ?? (body ? "POST" : "GET");
  let url: URL;
  try {
    url = new URL(options.url);
  } catch (cause) {
    throw new InvalidSigningUrl({ url: options.url, cause });
  }
  let headers: Headers;
  try {
    headers = new Headers(options.headers);
  } catch (cause) {
    throw new InvalidSigningHeaders({ cause });
  }
  headers.delete("host");
  const datetime = options.datetime ?? new Date().toISOString().replace(/[:-]|\.\d{3}/g, "");
  const appendSessionToken = service === "iotdevicegateway";

  if (service === "s3" && !signQuery && !headers.has("x-amz-content-sha256")) {
    headers.set("x-amz-content-sha256", "UNSIGNED-PAYLOAD");
  }

  const params = signQuery ? url.searchParams : headers;
  params.set("X-Amz-Date", datetime);
  if (sessionToken && !appendSessionToken) {
    params.set("X-Amz-Security-Token", sessionToken);
  }

  const signableHeaders = ["host", ...headers.keys()]
    .filter((header) => allHeaders || !UNSIGNABLE_HEADERS.has(header))
    .sort();
  const signedHeaders = signableHeaders.join(";");
  const canonicalHeaders = signableHeaders
    .map(
      (header) =>
        header +
        ":" +
        (header === "host" ? url.host : (headers.get(header) ?? "").replace(/\s+/g, " ")),
    )
    .join("\n");
  const date = datetime.slice(0, 8);
  const credentialString = [date, region, service, "aws4_request"].join("/");

  if (signQuery) {
    if (service === "s3" && !url.searchParams.has("X-Amz-Expires")) {
      url.searchParams.set("X-Amz-Expires", "86400");
    }
    url.searchParams.set("X-Amz-Algorithm", "AWS4-HMAC-SHA256");
    url.searchParams.set("X-Amz-Credential", accessKeyId + "/" + credentialString);
    url.searchParams.set("X-Amz-SignedHeaders", signedHeaders);
  }

  let encodedPath: string;
  if (service === "s3") {
    try {
      encodedPath = decodeURIComponent(url.pathname.replace(/\+/g, " "));
    } catch {
      encodedPath = url.pathname;
    }
  } else {
    encodedPath = url.pathname.replace(/\/+/g, "/");
  }
  encodedPath = encodeRfc3986(encodeURIComponent(encodedPath).replace(/%2F/g, "/"));

  const seenKeys = new Set<string>();
  const encodedSearch = [...url.searchParams]
    .filter(([k]) => {
      if (!k) return false;
      if (service === "s3") {
        if (seenKeys.has(k)) return false;
        seenKeys.add(k);
      }
      return true;
    })
    .map(
      ([k, v]) =>
        [encodeRfc3986(encodeURIComponent(k)), encodeRfc3986(encodeURIComponent(v))] as const,
    )
    .sort(([k1, v1], [k2, v2]) => (k1 < k2 ? -1 : k1 > k2 ? 1 : v1 < v2 ? -1 : v1 > v2 ? 1 : 0))
    .map((pair) => pair.join("="))
    .join("&");

  const payloadHash =
    headers.get("x-amz-content-sha256") ??
    (service === "s3" && signQuery ? "UNSIGNED-PAYLOAD" : undefined);

  return {
    method,
    date,
    datetime,
    credentialString,
    payloadHash,
    canonicalPrefix: [
      method.toUpperCase(),
      encodedPath,
      encodedSearch,
      canonicalHeaders + "\n",
      signedHeaders,
    ].join("\n"),
    finish: (signature) => {
      if (signQuery) {
        url.searchParams.set("X-Amz-Signature", signature);
        if (sessionToken && appendSessionToken) {
          url.searchParams.set("X-Amz-Security-Token", sessionToken);
        }
      } else {
        headers.set(
          "authorization",
          [
            "AWS4-HMAC-SHA256 Credential=" + accessKeyId + "/" + credentialString,
            "SignedHeaders=" + signedHeaders,
            "Signature=" + signature,
          ].join(", "),
        );
      }
      return { method, url: url.toString(), headers: Object.fromEntries(headers) };
    },
  };
};

const stringToSignOf = (c: Canonical, canonicalRequestHash: string): string =>
  ["AWS4-HMAC-SHA256", c.datetime, c.credentialString, canonicalRequestHash].join("\n");

/**
 * Derived keys for the synchronous path, per secret (by `Redacted` identity,
 * so the secret is never a map key) and `date/region/service` scope. Each
 * secret keeps at most 16 scopes.
 */
const syncKeys = /*@__PURE__*/ new WeakMap<
  Redacted.Redacted<string>,
  Map<string, { readonly impl: CoreCrypto.CryptoImpl; readonly key: CoreCrypto.HmacKey }>
>();

const syncSigningKey = (
  impl: CoreCrypto.CryptoImpl,
  sync: NonNullable<CoreCrypto.CryptoImpl["sync"]>,
  options: SignOptions,
  date: string,
): CoreCrypto.HmacKey => {
  let scopes = syncKeys.get(options.secretAccessKey);
  if (scopes === undefined) {
    scopes = new Map();
    syncKeys.set(options.secretAccessKey, scopes);
  }
  const scope = `${date}/${options.region}/${options.service}`;
  const hit = scopes.get(scope);
  if (hit !== undefined && hit.impl === impl) return hit.key;
  const step = (key: Uint8Array | string, data: string) =>
    sync.hmacSha256(sync.importHmacKey(key), data);
  const kDate = step("AWS4" + Redacted.value(options.secretAccessKey), date);
  const kSigning = step(step(step(kDate, options.region), options.service), "aws4_request");
  const key = sync.importHmacKey(kSigning);
  if (scopes.size >= 16) scopes.clear();
  scopes.set(scope, { impl, key });
  return key;
};

/** SHA-256 of the empty string, the payload hash of every bodiless request. */
const EMPTY_SHA256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

/** Sign a canonical request with synchronous crypto. Throws {@link CryptoError}. */
const finishSync = (
  canonical: Canonical,
  options: SignOptions,
  impl: CoreCrypto.CryptoImpl,
  sync: NonNullable<CoreCrypto.CryptoImpl["sync"]>,
): SignedRequest => {
  try {
    const sha256Hex =
      sync.sha256Hex ?? ((data: CoreCrypto.Bytes) => CoreCrypto.hex(sync.sha256(data)));
    const body = options.body;
    const payloadHash =
      canonical.payloadHash ??
      (body === undefined || body === "" ? EMPTY_SHA256 : sha256Hex(toBytes(body)));
    const canonicalRequest = canonical.canonicalPrefix + "\n" + payloadHash;
    const stringToSign = stringToSignOf(canonical, sha256Hex(canonicalRequest));
    const key = syncSigningKey(impl, sync, options, canonical.date);
    return canonical.finish(
      sync.hmacSha256Hex !== undefined
        ? sync.hmacSha256Hex(key, stringToSign)
        : CoreCrypto.hex(sync.hmacSha256(key, stringToSign)),
    );
  } catch (cause) {
    throw new CryptoError({ operation: "hmac", cause });
  }
};

/** The parts of `options.url`, already split by the caller. */
export interface UrlParts {
  /** `scheme://host[:port]`, exactly as the URL standard serializes it. */
  readonly origin: string;
  /** The URL's `host`. */
  readonly host: string;
  /** Path, percent-encoded; `""` is `/`. */
  readonly path: string;
  /** Query parameters before encoding (arrays repeat the key). */
  readonly query: Readonly<Record<string, unknown>>;
  /** The encoded query string, without `?`. */
  readonly search: string;
}

let lastSecond = -1;
let lastDate = "";
/** The current `YYYYMMDDTHHMMSSZ`, formatted once per second. */
const amzDate = (): string => {
  const now = Date.now();
  const second = Math.floor(now / 1000);
  if (second !== lastSecond) {
    lastDate = new Date(now).toISOString().replace(/[:-]|\.\d{3}/g, "");
    lastSecond = second;
  }
  return lastDate;
};

/** Path characters the URL parser keeps as they are. */
const PLAIN_PATH = /^\/[A-Za-z0-9\-._~%!$&'()*+,;=:@/]*$/;
/** `.` / `..` segments (the parser resolves them), plain or percent-encoded. */
const DOT_SEGMENT = /(?:^|\/)(?:\.|%2e){1,2}(?:\/|$)/i;
/** An HTTP header name (RFC 9110 token). */
const TOKEN = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
/** Characters a `Headers` value rejects after trimming (or as a ByteString). */
const BAD_VALUE = /[\0\r\n\u0100-\uffff]/;
/** HTTP whitespace a `Headers` value is trimmed of. */
const EDGE_SPACE = /^[\t\n\r ]+|[\t\n\r ]+$/g;
const isHttpSpace = (c: number) => c === 32 || c === 9 || c === 10 || c === 13;

/**
 * {@link canonicalize} for header signing of a URL given as parts, without
 * `URL` or `Headers`. Returns `undefined` when the request needs either
 * one's normalization (or its errors); the caller then signs the URL.
 */
const canonicalizeParts = (options: SignOptions, parts: UrlParts): Canonical | undefined => {
  const { accessKeyId, service, region } = options;
  if (options.signQuery || options.allHeaders) return undefined;
  const rawPath = parts.path === "" ? "/" : parts.path;
  if (!PLAIN_PATH.test(rawPath) || DOT_SEGMENT.test(rawPath)) return undefined;

  const headers: Record<string, string> = Object.create(null);
  const input = options.headers;
  if (input !== undefined) {
    for (const name of Object.keys(input)) {
      const raw = input[name] as unknown;
      if (typeof raw !== "string" || !TOKEN.test(name)) return undefined;
      let value = raw;
      if (
        value.length > 0 &&
        (isHttpSpace(value.charCodeAt(0)) || isHttpSpace(value.charCodeAt(value.length - 1)))
      ) {
        value = value.replace(EDGE_SPACE, "");
      }
      if (BAD_VALUE.test(value)) return undefined;
      const lower = name.toLowerCase();
      if (lower === "set-cookie" || lower === "__proto__") return undefined;
      headers[lower] = Object.hasOwn(headers, lower) ? `${headers[lower]}, ${value}` : value;
    }
  }
  delete headers.host;
  const sessionToken = options.sessionToken ? Redacted.value(options.sessionToken) : undefined;
  const datetime = options.datetime ?? amzDate();
  const appendSessionToken = service === "iotdevicegateway";
  if (service === "s3" && headers["x-amz-content-sha256"] === undefined) {
    headers["x-amz-content-sha256"] = "UNSIGNED-PAYLOAD";
  }
  headers["x-amz-date"] = datetime;
  if (sessionToken && !appendSessionToken) headers["x-amz-security-token"] = sessionToken;

  const names = Object.keys(headers);
  const signable = ["host"];
  for (const name of names) if (!UNSIGNABLE_HEADERS.has(name)) signable.push(name);
  signable.sort();
  const signedHeaders = signable.join(";");
  let canonicalHeaders = "";
  for (let i = 0; i < signable.length; i++) {
    const name = signable[i]!;
    canonicalHeaders +=
      (i === 0 ? "" : "\n") +
      name +
      ":" +
      (name === "host" ? parts.host : headers[name]!.replace(/\s+/g, " "));
  }
  const date = datetime.slice(0, 8);
  const credentialString = date + "/" + region + "/" + service + "/aws4_request";

  let decodedPath: string;
  if (service === "s3") {
    try {
      decodedPath = decodeURIComponent(rawPath.replace(/\+/g, " "));
    } catch {
      decodedPath = rawPath;
    }
  } else {
    decodedPath = rawPath.replace(/\/+/g, "/");
  }
  const encodedPath = encodeRfc3986(encodeURIComponent(decodedPath).replace(/%2F/g, "/"));

  // The query pairs as `URLSearchParams` reads them back from `search`.
  const pairs: Array<readonly [string, string]> = [];
  const seenKeys = service === "s3" ? new Set<string>() : undefined;
  const add = (k: string, v: string) => {
    if (!k) return;
    if (seenKeys !== undefined) {
      if (seenKeys.has(k)) return;
      seenKeys.add(k);
    }
    pairs.push([encodeRfc3986(encodeURIComponent(k)), encodeRfc3986(encodeURIComponent(v))]);
  };
  for (const k of Object.keys(parts.query)) {
    const v = parts.query[k];
    if (v === undefined) continue;
    if (Array.isArray(v)) for (const item of v) add(k, item ? String(item) : "");
    else add(k, v ? String(v) : "");
  }
  const encodedSearch =
    pairs.length === 0
      ? ""
      : pairs
          .sort(([k1, v1], [k2, v2]) =>
            k1 < k2 ? -1 : k1 > k2 ? 1 : v1 < v2 ? -1 : v1 > v2 ? 1 : 0,
          )
          .map((pair) => pair[0] + "=" + pair[1])
          .join("&");

  const method = options.method ?? (options.body ? "POST" : "GET");
  // `URL` percent-encodes `'` in the query of special-scheme URLs.
  const url =
    parts.origin + rawPath + (parts.search === "" ? "" : "?" + parts.search.replace(/'/g, "%27"));
  return {
    method,
    date,
    datetime,
    credentialString,
    payloadHash: headers["x-amz-content-sha256"],
    canonicalPrefix:
      method.toUpperCase() +
      "\n" +
      encodedPath +
      "\n" +
      encodedSearch +
      "\n" +
      canonicalHeaders +
      "\n\n" +
      signedHeaders,
    finish: (signature) => {
      headers.authorization =
        "AWS4-HMAC-SHA256 Credential=" +
        accessKeyId +
        "/" +
        credentialString +
        ", SignedHeaders=" +
        signedHeaders +
        ", Signature=" +
        signature;
      const out: Record<string, string> = {};
      for (const name of Object.keys(headers).sort()) out[name] = headers[name]!;
      return { method, url, headers: out };
    },
  };
};

/**
 * {@link sign} without effects, for callers already running on a fiber.
 * `parts` lets the caller hand over the URL already split, which skips
 * `URL` and `Headers` for ordinary requests. Returns `undefined` when the
 * signature needs effects (WebCrypto, or a {@link SigningKeyCache} in the
 * context); use {@link sign} then. Throws a {@link SigningError}.
 */
export const signSync = (
  options: SignOptions,
  fiber: { readonly context: Context.Context<never>; getRef<A>(ref: Context.Reference<A>): A },
  parts?: UrlParts,
): SignedRequest | undefined => {
  const impl = fiber.getRef(CoreCrypto.Crypto);
  const sync = impl.sync;
  if (sync === undefined || Context.getOrUndefined(fiber.context, SigningKeyCache) !== undefined) {
    return undefined;
  }
  const canonical =
    (parts !== undefined ? canonicalizeParts(options, parts) : undefined) ?? canonicalize(options);
  return finishSync(canonical, options, impl, sync);
};

/**
 * Sign a request with SigV4. Fails with a {@link SigningError} when the URL
 * or headers cannot be canonicalised or WebCrypto rejects an operation.
 *
 * With a synchronous crypto implementation (node:crypto, the default on
 * Node/Bun/Deno) and no {@link SigningKeyCache} override in the context, the
 * whole signature is computed in one step without intermediate effects.
 */
export const sign = (options: SignOptions): Effect.Effect<SignedRequest, SigningError> =>
  Effect.withFiber((fiber) => {
    let signed: SignedRequest | undefined;
    try {
      signed = signSync(options, fiber as any);
    } catch (e) {
      return Effect.fail(e as SigningError);
    }
    return signed === undefined ? signAsync(options) : Effect.succeed(signed);
  });

const signAsync: (options: SignOptions) => Effect.Effect<SignedRequest, SigningError> =
  /*@__PURE__*/ Effect.fnUntraced(function* (options: SignOptions) {
    const canonical = yield* Effect.try({
      try: () => canonicalize(options),
      catch: (e) => e as InvalidSigningUrl | InvalidSigningHeaders,
    });
    const payloadHash = canonical.payloadHash ?? (yield* sha256Hex(options.body || ""));
    const canonicalRequest = canonical.canonicalPrefix + "\n" + payloadHash;
    const stringToSign = stringToSignOf(canonical, yield* sha256Hex(canonicalRequest));
    const signingKey = yield* Cache.get(yield* SigningKeyCache, {
      secretAccessKey: options.secretAccessKey,
      date: canonical.date,
      region: options.region,
      service: options.service,
      crypto: yield* CoreCrypto.Crypto,
    });
    const signature = CoreCrypto.hex(
      yield* Effect.mapError(signingKey.impl.hmacSha256(signingKey.key, stringToSign), fromCore),
    );
    return canonical.finish(signature);
  });
