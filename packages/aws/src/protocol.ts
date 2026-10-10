import * as API from "@distilled.cloud/core/api";
/**
 * AwsProtocol -- AWS's implementation of `@distilled.cloud/core`'s Protocol
 * seam.
 *
 * Generated operations are plain `API.make(() => ({ input, output, errors,
 * protocol: AwsProtocol, retry: Retry.Retry, operationName }))` calls; this
 * layer supplies everything AWS-specific per request:
 *
 *   encode:  idempotency-token fill -> wire-family serializer (awsJson 1.0/1.1,
 *            awsQuery, ec2Query, restJson1, restXml -- discovered from the
 *            input schema's protocol trait) -> annotation middleware
 *            (checksums, streaming bodies) -> endpoint resolution (custom
 *            Endpoint service, compiled Smithy endpoint rules, or the
 *            `https://{service}.{region}.amazonaws.com` fallback) -> SigV4
 *            signing with per-request lazy Credentials/Region.
 *
 *   decode:  wire-family deserializer -> event-stream parsing -> output schema
 *            decode; error responses map wire codes onto the operation's
 *            typed error classes (plus the shared COMMON_ERRORS), stamping
 *            server `retryAfterSeconds` hints as the `retryAfter` Duration
 *            core's default retry policy honors.
 *
 *   call:    the whole call as one effect. An operation whose request and
 *            response need no effects of their own (no middleware, no
 *            streaming members, SigV4 with synchronous crypto) builds,
 *            signs and decodes synchronously around a single
 *            `client.execute`; every other operation runs encode -> execute
 *            -> decode.
 *
 * Per-operation preprocessing (serializer construction, error maps, endpoint
 * rules) is keyed off the operation config's identity, which `API.make`
 * memoizes -- so it runs once per operation per process.
 */
import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import * as HttpBody from "effect/http/HttpBody";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientRequest from "effect/http/HttpClientRequest";
import type * as HttpClientResponse from "effect/http/HttpClientResponse";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Stream from "effect/Stream";
import type { Operation } from "./client/operation.ts";
import { makeRequestBuilder, makeSyncRequestBuilder } from "./client/request-builder.ts";
import type { Request } from "./client/request.ts";
import { makeResponseParser, makeSuccessDecoder } from "./client/response-parser.ts";
import * as Credentials from "./credentials-service.ts";
import * as Endpoint from "./endpoint.ts";
import { ParseError } from "./errors.ts";
import * as Region from "./region.ts";
import { makeEndpointResolver } from "./rules-engine/endpoint-resolver.ts";
import * as SigV4 from "./sigv4.ts";
import {
  getAwsApiService,
  getAwsAuthSigv2,
  getAwsAuthSigv4,
  getProtocol,
  hasHttpPayload,
  isStreamingType,
} from "./traits.ts";
import { getIdentifier, getPropertySignatures } from "./util/ast.ts";

/**
 * Context (requirements) shared by every generated AWS operation.
 *
 * `Region` is deliberately absent: it is an override read with
 * `Effect.serviceOption` (see `region.ts`), falling back to the environment,
 * so callers who already configured a region for their credentials don't
 * have to state it again.
 */
export type AwsOpContext = Credentials.Credentials | HttpClient.HttpClient;

interface Prepared {
  readonly op: Operation;
  readonly operationName: string | undefined;
  readonly buildRequest: (input: unknown) => Effect.Effect<Request, any, any>;
  readonly parseResponse: (response: {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    body: string | ReadableStream<Uint8Array>;
  }) => Effect.Effect<any, any, any>;
  readonly sigv4: { name: string } | undefined;
  /** Legacy SigV2 (SimpleDB only) -- signs via body parameters, no header. */
  readonly sigv2: unknown;
  readonly serviceSdkId: string | undefined;
  readonly resolveEndpoint: ReturnType<typeof makeEndpointResolver>;
  /**
   * The output has no streaming or payload member, so the body is only ever
   * read as text: read it as text directly instead of piping it through an
   * Effect Stream and a web ReadableStream.
   */
  readonly textBody: boolean;
}

// Keyed by the operation config object, which API.make memoizes per
// operation -- one entry per operation per process.
const preparedOps = /*@__PURE__*/ new WeakMap<API.ProtocolOperationConfig, Prepared>();

const prepare = (config: API.ProtocolOperationConfig): Prepared => {
  const cached = preparedOps.get(config);
  if (cached) return cached;

  // The wire machinery predates the core seam and is typed against the v0
  // Operation shape; the config carries the same information.
  const op: Operation = {
    input: config.input as any,
    output: config.output as any,
    errors: [...(config.errors ?? [])] as any[],
    operationName: config.operationName,
    pagination: config.pagination as Operation["pagination"],
  };
  const inputAst = op.input.ast;
  const serviceSdkId = getAwsApiService(inputAst)?.sdkId;
  const operationName =
    config.operationName ?? getIdentifier(inputAst)?.replace(/(?:Request|Input|Message)$/, "");

  const prepared: Prepared = {
    op,
    operationName,
    buildRequest: makeRequestBuilder(op),
    parseResponse: makeResponseParser(op, {
      service: serviceSdkId,
      operation: operationName,
      // Validation follows the caller's ResponseValidation layer
      // (@distilled.cloud/core, lenient by default).
    }),
    sigv4: getAwsAuthSigv4(inputAst),
    sigv2: getAwsAuthSigv2(inputAst),
    serviceSdkId,
    resolveEndpoint: makeEndpointResolver(op),
    textBody: getPropertySignatures(op.output.ast).every(
      (prop) => !hasHttpPayload(prop) && !isStreamingType(prop.type),
    ),
  };
  preparedOps.set(config, prepared);
  return prepared;
};

type Fiber = Parameters<typeof SigV4.signSync>[1];

/**
 * Credentials, region and the custom endpoint from `context`, then `f` on
 * them. Each service holds an effect; an already-resolved one costs no
 * fiber step (see `API.withValue`).
 */
const withAwsContext = (
  context: Context.Context<any>,
  f: (
    credentials: Credentials.ResolvedCredentials,
    region: string,
    customEndpoint: string | undefined,
  ) => Effect.Effect<any, any, any>,
): Effect.Effect<any, any, any> =>
  API.withValue(Context.get(context, Credentials.Credentials), (credentials) => {
    // The region the credentials authenticated against, unless this scope
    // provides a `Region` override. `Region` is optional -- it isn't in any
    // operation's requirements.
    const withRegion = (region: string) => {
      const endpoint = Context.getOrUndefined(context, Endpoint.Endpoint);
      return endpoint === undefined
        ? f(credentials, region, undefined)
        : API.withValue(endpoint, (custom) => f(credentials, region, custom));
    };
    const regionOverride = Context.getOrUndefined(context, Region.Region);
    return regionOverride === undefined
      ? withRegion(credentials.region)
      : API.withValue(regionOverride, withRegion);
  });

/**
 * The URL parts of an endpoint that is a bare origin (`scheme://host[:port]`
 * exactly as `URL` serializes it), or `null`. Such endpoints let the signer
 * skip `URL` parsing. Cached per endpoint string.
 */
const originCache = /*@__PURE__*/ new Map<string, { origin: string; host: string } | null>();
const originOf = (endpoint: string): { origin: string; host: string } | null => {
  let parts = originCache.get(endpoint);
  if (parts === undefined) {
    try {
      const url = new URL(endpoint);
      parts = url.origin === endpoint ? { origin: url.origin, host: url.host } : null;
    } catch {
      parts = null;
    }
    if (originCache.size >= 256) originCache.clear();
    originCache.set(endpoint, parts);
  }
  return parts;
};

/**
 * Turn a serialized request into the signed HTTP request: endpoint
 * resolution, host prefix, query string and signing. Synchronous unless the
 * request needs an effect (SigV2, a payload digest, asynchronous crypto) or
 * fails, in which case the effect is returned instead.
 */
const toHttpRequest = (
  prepared: Prepared,
  config: API.ProtocolOperationConfig,
  input: unknown,
  request: Request,
  credentials: Credentials.ResolvedCredentials,
  region: string,
  customEndpoint: string | undefined,
  fiber: Fiber,
):
  | HttpClientRequest.HttpClientRequest
  | Effect.Effect<HttpClientRequest.HttpClientRequest, any> => {
  const { sigv4, sigv2, serviceSdkId, resolveEndpoint: rulesResolver } = prepared;
  const serviceName = sigv4?.name ?? "s3";

  // Resolve endpoint and adjust request path if needed
  let endpoint: string;
  let resolvedRequest = request;
  let signingRegion = region; // Default to context region
  let signingServiceName = serviceName; // Default to service name from sigv4 trait

  if (customEndpoint) {
    // User provided a custom endpoint - use it directly
    endpoint = customEndpoint;
  } else if (rulesResolver) {
    // Use the rules resolver - it handles endpoint resolution AND path adjustment
    const resolved = rulesResolver({
      input,
      region,
      request,
    });
    if (resolved instanceof Error) return Effect.fail(resolved);
    endpoint = resolved.endpoint.url;
    resolvedRequest = resolved.request;

    // Extract signing region from endpoint authSchemes if present
    // Global services like IAM return a specific signingRegion (e.g., us-east-1)
    const authSchemes = resolved.endpoint.properties?.authSchemes as
      | Array<{
          name?: string;
          signingName?: string;
          signingRegion?: string;
        }>
      | undefined;
    if (authSchemes?.[0]?.signingRegion) {
      signingRegion = authSchemes[0].signingRegion;
    }
    if (authSchemes?.[0]?.signingName) {
      signingServiceName = authSchemes[0].signingName;
    }
  } else {
    // Fallback to static endpoint
    endpoint = `https://${serviceName}.${region}.amazonaws.com`;
  }

  // Apply the Smithy `smithy.api#endpoint` hostPrefix (e.g. "sync-" for
  // Step Functions StartSyncExecution -> sync-states.{region}). Skipped for
  // custom endpoints, matching official AWS SDK behavior. Labels of the
  // form {memberName} are substituted from the operation input.
  if (config.endpointHostPrefix !== undefined && !customEndpoint) {
    const resolvedPrefix = config.endpointHostPrefix.replace(/\{(\w+)\}/g, (_, member: string) =>
      String((input as Record<string, unknown>)?.[member] ?? ""),
    );
    // The endpoint rules engine may already have baked the same label into
    // the host (e.g. S3 Control resolves `{AccountId}.s3-control.{region}`
    // from the AccountId context param, and the operations ALSO carry the
    // `{AccountId}.` hostPrefix trait). Only prepend when the resolved
    // endpoint does not already start with the prefix, else the label is
    // applied twice and TLS fails on the doubled host.
    const hostStart = endpoint.indexOf("://") + 3;
    if (!endpoint.startsWith(resolvedPrefix, hostStart)) {
      endpoint = endpoint.replace("://", `://${resolvedPrefix}`);
    }
  }

  // Build full URL with query string
  let queryString = "";
  for (const k in resolvedRequest.query) {
    const v = resolvedRequest.query[k];
    if (v === undefined) continue;
    // Handle arrays as repeated query parameters (e.g., tagKeys=A&tagKeys=B)
    if (Array.isArray(v)) {
      for (const item of v) {
        queryString +=
          (queryString ? "&" : "") +
          (item ? `${encodeURIComponent(k)}=${encodeURIComponent(item)}` : encodeURIComponent(k));
      }
    } else {
      queryString +=
        (queryString ? "&" : "") +
        (v ? `${encodeURIComponent(k)}=${encodeURIComponent(v)}` : encodeURIComponent(k));
    }
  }

  const fullPath = queryString ? `${resolvedRequest.path}?${queryString}` : resolvedRequest.path;

  if (sigv2) return signV2(resolvedRequest, endpoint, fullPath, credentials);

  // For streaming bodies (ReadableStream), we can't compute a hash
  // so we use UNSIGNED-PAYLOAD and don't pass the body to the signer
  const isStreamingBody = resolvedRequest.body instanceof ReadableStream;
  // Check if content-sha256 header is already set (e.g., by checksum middleware)
  // Check if service provides its own checksum (e.g., EBS x-amz-Checksum header)
  // In this case, the body should not be included in SigV4 signing
  let hasContentSha256 = false;
  let hasServiceChecksum = false;
  for (const k in resolvedRequest.headers) {
    const lower = k.toLowerCase();
    if (lower === "x-amz-content-sha256") hasContentSha256 = true;
    else if (lower === "x-amz-checksum") hasServiceChecksum = true;
  }
  // Check if there's a body to sign
  const hasBody = resolvedRequest.body !== undefined;
  // Operations with a streaming input payload (smithy `@streaming` blob)
  // sign as UNSIGNED-PAYLOAD even when the caller supplied a buffered
  // value -- except for services that reject it and require the real
  // payload hash (they reconstruct the canonical request from the body):
  // Glacier, SageMaker Runtime, AppConfig, API Gateway Management,
  // Bedrock Runtime, IoT Data Plane, IoT Wireless, and Lambda.
  const hasStreamingInput =
    resolvedRequest.hasStreamingInput === true &&
    serviceSdkId !== "Glacier" &&
    serviceSdkId !== "SageMaker Runtime" &&
    serviceSdkId !== "AppConfig" &&
    serviceSdkId !== "ApiGatewayManagementApi" &&
    serviceSdkId !== "Bedrock Runtime" &&
    serviceSdkId !== "IoT Data Plane" &&
    serviceSdkId !== "IoT Wireless" &&
    serviceSdkId !== "Lambda";
  // Use unsigned payload for streaming bodies OR streaming-input
  // operations OR when service provides checksum with body
  const useUnsignedPayload =
    (isStreamingBody || hasStreamingInput || (hasServiceChecksum && hasBody)) && !hasContentSha256;
  const signingHeaders = useUnsignedPayload
    ? {
        ...resolvedRequest.headers,
        "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
      }
    : resolvedRequest.headers;

  const signOptions: SigV4.SignOptions = {
    method: resolvedRequest.method,
    url: `${endpoint}${fullPath}`,
    headers: signingHeaders,
    // Don't pass body to signer when using unsigned payload. A streaming
    // body only reaches here with an explicit x-amz-content-sha256, in
    // which case the signer never reads the body.
    body:
      useUnsignedPayload || resolvedRequest.body instanceof ReadableStream
        ? undefined
        : (resolvedRequest.body as SigV4.SignableBody | undefined),
    accessKeyId: Redacted.value(credentials.accessKeyId),
    secretAccessKey: credentials.secretAccessKey,
    sessionToken: credentials.sessionToken,
    service: signingServiceName,
    region: signingRegion,
  };

  // S3 Control rejects UNSIGNED-PAYLOAD on several routes (access point
  // operations fail with `InvalidRequest: "Request body cannot be
  // unsigned"`). The signer injects UNSIGNED-PAYLOAD for any service signing
  // as "s3" when the header is absent, so pre-compute the real payload
  // SHA-256 here (matching the official SDK's applyChecksum behavior).
  // Glacier likewise REQUIRES the x-amz-content-sha256 header on
  // payload-bearing requests (UploadArchive / UploadMultipartPart) -- the
  // service reconstructs the canonical request from that header, so
  // omitting it fails with InvalidSignatureException (the official SDK's
  // addChecksumHeaders middleware always sets it).
  if (
    (serviceSdkId === "S3 Control" || serviceSdkId === "Glacier") &&
    !useUnsignedPayload &&
    !hasContentSha256 &&
    !isStreamingBody
  ) {
    const bodyBytes =
      resolvedRequest.body === undefined
        ? new Uint8Array(0)
        : resolvedRequest.body instanceof Uint8Array
          ? resolvedRequest.body
          : new TextEncoder().encode(String(resolvedRequest.body));
    return Effect.flatMap(
      Effect.promise(() =>
        crypto.subtle.digest(
          "SHA-256",
          // copy into a fresh ArrayBuffer-backed view for the DOM typings
          bodyBytes.slice(),
        ),
      ),
      (digest) => {
        const payloadHash = Array.from(new Uint8Array(digest))
          .map((byte) => byte.toString(16).padStart(2, "0"))
          .join("");
        const options = {
          ...signOptions,
          headers: { ...signingHeaders, "X-Amz-Content-Sha256": payloadHash },
        };
        return Effect.map(SigV4.sign(options), (signed) =>
          httpRequestOf(signed, resolvedRequest.body, isStreamingBody),
        );
      },
    );
  }

  // The URL as parts lets the signer skip `URL` / `Headers` parsing.
  const origin = isStreamingBody ? null : originOf(endpoint);
  let signed: SigV4.SignedRequest | undefined;
  try {
    signed = SigV4.signSync(
      signOptions,
      fiber,
      origin === null
        ? undefined
        : {
            origin: origin.origin,
            host: origin.host,
            path: resolvedRequest.path,
            query: resolvedRequest.query,
            search: queryString,
          },
    );
  } catch (e) {
    return Effect.fail(e);
  }
  if (signed === undefined) {
    return Effect.map(SigV4.sign(signOptions), (s) =>
      httpRequestOf(s, resolvedRequest.body, isStreamingBody),
    );
  }
  return httpRequestOf(signed, resolvedRequest.body, isStreamingBody);
};

const emptyRequest = /*@__PURE__*/ HttpClientRequest.get("");

/** The `HttpClientRequest` for a signed request and its body. */
const httpRequestOf = (
  signedRequest: SigV4.SignedRequest,
  body: Request["body"],
  isStreamingBody: boolean,
): HttpClientRequest.HttpClientRequest => {
  const signedHeaders = signedRequest.headers;

  // Get content type from signed headers for body constructor
  const contentType = signedHeaders["content-type"];

  // Build HttpBody based on body type
  // We must pass the content type to avoid HttpBody overriding the signed Content-Type header
  let httpBody: HttpBody.HttpBody;
  if (isStreamingBody) {
    // Convert ReadableStream to Effect Stream for HttpClient
    const effectStream = Stream.fromReadableStream({
      evaluate: () => body as ReadableStream<Uint8Array>,
      onError: (error) => new Error(String(error)),
    });
    httpBody = HttpBody.stream(effectStream, contentType);
  } else if (body === undefined) {
    httpBody = HttpBody.empty;
  } else if (typeof body === "string") {
    httpBody = HttpBody.text(body, contentType);
  } else if (body instanceof Uint8Array) {
    httpBody = HttpBody.uint8Array(body, contentType);
  } else {
    httpBody = HttpBody.empty;
  }

  // `make(method)(url)` + `setHeaders`, built in one step. setBody must come
  // after the headers because it adds content-type/content-length from the
  // HttpBody, which should match our signed headers.
  const request = HttpClientRequest.setBody(
    HttpClientRequest.makeWith(
      signedRequest.method as HttpClientRequest.HttpClientRequest["method"],
      signedRequest.url,
      emptyRequest.urlParams,
      emptyRequest.hash,
      HttpClientRequest.setHeaders(emptyRequest, signedHeaders).headers,
      HttpBody.empty,
    ),
    httpBody,
  );
  // Empty bodies clear Content-Type, which S3 also uses for object metadata.
  return httpBody._tag === "Empty" && contentType !== undefined
    ? HttpClientRequest.setHeader(request, "content-type", contentType)
    : request;
};

/**
 * Legacy Signature Version 2 (SimpleDB is the sole remaining SigV2-only
 * service). The signature is an HMAC-SHA256 over the sorted,
 * RFC3986-encoded form parameters and travels IN the form-encoded body --
 * there is no Authorization header. The classic endpoint rejects SigV4
 * with `AuthFailure: access credentials are missing`.
 */
const signV2 = (
  resolvedRequest: Request,
  endpoint: string,
  fullPath: string,
  credentials: Credentials.ResolvedCredentials,
): Effect.Effect<HttpClientRequest.HttpClientRequest> => {
  const rfc3986 = (s: string) =>
    encodeURIComponent(s).replace(
      /[!'()*]/g,
      (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase(),
    );
  const pairs: Array<[string, string]> = [];
  const bodyStr = typeof resolvedRequest.body === "string" ? resolvedRequest.body : "";
  for (const part of bodyStr.split("&")) {
    if (!part) continue;
    const eq = part.indexOf("=");
    pairs.push([
      decodeURIComponent(eq === -1 ? part : part.slice(0, eq)),
      eq === -1 ? "" : decodeURIComponent(part.slice(eq + 1)),
    ]);
  }
  pairs.push(
    ["AWSAccessKeyId", Redacted.value(credentials.accessKeyId)],
    ["SignatureVersion", "2"],
    ["SignatureMethod", "HmacSHA256"],
    ["Timestamp", new Date().toISOString().replace(/\.\d{3}/, "")],
  );
  if (credentials.sessionToken) {
    pairs.push(["SecurityToken", Redacted.value(credentials.sessionToken)]);
  }
  const canonical = pairs
    .map(([k, v]) => [rfc3986(k), rfc3986(v)] as const)
    .sort(([a, av], [b, bv]) => (a < b ? -1 : a > b ? 1 : av < bv ? -1 : av > bv ? 1 : 0))
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  const requestUrl = new URL(`${endpoint}${fullPath}`);
  const stringToSign = [
    resolvedRequest.method,
    requestUrl.host,
    requestUrl.pathname || "/",
    canonical,
  ].join("\n");
  return Effect.map(
    Effect.promise(async () => {
      const key = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(Redacted.value(credentials.secretAccessKey)),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"],
      );
      return crypto.subtle.sign("HMAC", key, new TextEncoder().encode(stringToSign));
    }),
    (signatureBytes) => {
      const signature = Buffer.from(signatureBytes).toString("base64");
      const signedBody = `${canonical}&Signature=${rfc3986(signature)}`;
      const contentTypeV2 =
        resolvedRequest.headers["Content-Type"] ??
        resolvedRequest.headers["content-type"] ??
        "application/x-www-form-urlencoded";

      return pipe(
        HttpClientRequest.make(resolvedRequest.method as "GET" | "POST" | "PUT" | "DELETE")(
          requestUrl.toString(),
        ),
        HttpClientRequest.setHeaders(resolvedRequest.headers),
        HttpClientRequest.setBody(HttpBody.text(signedBody, contentTypeV2)),
      );
    },
  );
};

const signedOrEffect = (
  r: HttpClientRequest.HttpClientRequest | Effect.Effect<HttpClientRequest.HttpClientRequest, any>,
): Effect.Effect<HttpClientRequest.HttpClientRequest, any> =>
  HttpClientRequest.isHttpClientRequest(r) ? Effect.succeed(r) : r;

// The protocol layer is memoized per process by `API.make` (see
// `OperationConfig.protocol`), so the build must not capture credentials --
// `encode` resolves Credentials/Region/Endpoint from the calling fiber's
// context on every request instead (credentials are lazy: the service holds
// an effect, so refreshes are picked up per call). The requirements and
// error channels are erased at this boundary (Protocol effects are typed
// with no requirements) and reintroduced for callers by the generated
// operation type annotations.
const encode = ({
  input,
  config,
}: {
  readonly input: unknown;
  readonly config: API.ProtocolOperationConfig;
}): Effect.Effect<HttpClientRequest.HttpClientRequest, any, any> =>
  Effect.withFiber((fiber) => {
    const prepared = prepare(config);
    // Serialize the input (protocol serializer + annotation middleware)
    return Effect.flatMap(prepared.buildRequest(input), (request) =>
      withAwsContext(fiber.context as Context.Context<any>, (credentials, region, custom) =>
        signedOrEffect(
          toHttpRequest(
            prepared,
            config,
            input,
            request,
            credentials,
            region,
            custom,
            fiber as unknown as Fiber,
          ),
        ),
      ),
    );
  });

/**
 * Stamp a server-provided `retryAfterSeconds` hint (modeled on several AWS
 * throttling errors) as the `retryAfter` Duration that core's default retry
 * policy honors with precedence over its backoff.
 */
const stampRetryAfter = (error: unknown): void => {
  if (typeof error !== "object" || error === null) return;
  const e = error as Record<string, unknown>;
  if (e.retryAfter !== undefined) return;
  const seconds = Number(e.retryAfterSeconds ?? e.RetryAfterSeconds ?? NaN);
  if (Number.isFinite(seconds) && seconds >= 0) {
    e.retryAfter = Duration.seconds(seconds);
  }
};

/** A response with no body: HEAD requests, `content-length: 0` and 204s. */
const isEmptyBody = (response: HttpClientResponse.HttpClientResponse): boolean =>
  response.request.method === "HEAD" ||
  (response.headers as Record<string, string>)["content-length"] === "0" ||
  response.status === 204;

/** A response through the operation's response parser. */
const parseResponseWith = (
  prepared: Prepared,
  response: HttpClientResponse.HttpClientResponse,
  body: string | ReadableStream<Uint8Array>,
): Effect.Effect<unknown, any, any> =>
  prepared
    .parseResponse({
      status: response.status,
      statusText: "OK",
      headers: response.headers as Record<string, string>,
      body,
    })
    .pipe(
      Effect.tapError((error) => {
        stampRetryAfter(error);
        return Effect.void;
      }),
    );

const decode = ({
  response,
  config,
}: {
  readonly response: HttpClientResponse.HttpClientResponse;
  readonly config: API.ProtocolOperationConfig;
}) =>
  Effect.gen(function* () {
    const prepared = prepare(config);
    const { textBody } = prepared;

    // Create response body stream. HEAD requests never have a body, and some
    // responses have no body (204, etc.) -- Effect's HttpClientResponse.stream
    // raises on empty bodies, so detect those up front.
    const responseBody = isEmptyBody(response)
      ? textBody
        ? ""
        : new ReadableStream<Uint8Array>({ start: (c) => c.close() })
      : textBody
        ? yield* response.text
        : yield* Stream.toReadableStreamEffect(response.stream);

    // Parse the response: success -> protocol deserialization + schema
    // decoding (+ event streams); error -> typed error matching.
    return yield* parseResponseWith(prepared, response, responseBody);
  });

//#region call

/** How {@link call} runs one operation, compiled on its first call. */
interface Plan {
  readonly run: (fiber: Fiber, input: unknown) => Effect.Effect<unknown, any, any>;
}

/** encode -> execute -> decode, for operations without a synchronous plan. */
const generalPlan = (config: API.ProtocolOperationConfig): Plan => ({
  run: (fiber, input) => {
    const client = Context.get(fiber.context as Context.Context<any>, HttpClient.HttpClient);
    return Effect.flatMap(encode({ input, config }), (request) =>
      Effect.flatMap(client.execute(request), (response) => decode({ response, config })),
    );
  },
});

const compile = (op: API.PreparedOperation): Effect.Effect<Plan> => {
  const config = op.config;
  const prepared = prepare(config);
  const factory = getProtocol(prepared.op.input.ast);
  if (prepared.sigv2 || !prepared.textBody || factory === undefined) {
    return Effect.succeed(generalPlan(config));
  }
  const handler = factory(prepared.op);
  return Effect.map(handler.ready ?? Effect.succeed(handler), (protocol): Plan => {
    const build = makeSyncRequestBuilder(prepared.op, protocol);
    const deserializeText = protocol.deserializeText;
    if (build === undefined || deserializeText === undefined) return generalPlan(config);
    const decodeSuccess = makeSuccessDecoder(prepared.op, {
      service: prepared.serviceSdkId,
      operation: prepared.operationName,
    });

    const respond = (
      context: Context.Context<any>,
      response: HttpClientResponse.HttpClientResponse,
      text: string,
    ): Effect.Effect<unknown, any, any> => {
      if (response.status < 200 || response.status >= 300) {
        return parseResponseWith(prepared, response, text);
      }
      const decoded = decodeSuccess(
        context,
        deserializeText({
          status: response.status,
          statusText: "OK",
          headers: response.headers as Record<string, string>,
          body: text,
        }),
      );
      if (decoded.ok) return Effect.succeed(decoded.value);
      stampRetryAfter(decoded.error);
      return Effect.fail(decoded.error);
    };

    return {
      run: (fiber, input) => {
        let request: Request;
        try {
          request = build(input);
        } catch (e) {
          return e instanceof ParseError ? Effect.fail(e) : Effect.die(e);
        }
        const context = fiber.context as Context.Context<any>;
        return withAwsContext(context, (credentials, region, custom) => {
          const client = Context.get(context, HttpClient.HttpClient);
          const execute = (httpRequest: HttpClientRequest.HttpClientRequest) =>
            Effect.flatMap(client.execute(httpRequest), (response) =>
              isEmptyBody(response)
                ? respond(context, response, "")
                : Effect.flatMap(response.text, (text) => respond(context, response, text)),
            );
          const signed = toHttpRequest(
            prepared,
            config,
            input,
            request,
            credentials,
            region,
            custom,
            fiber,
          );
          return HttpClientRequest.isHttpClientRequest(signed)
            ? execute(signed)
            : Effect.flatMap(signed, execute);
        });
      },
    };
  });
};

/**
 * One operation call: the operation's plan, compiled on its first call
 * (the protocol implementation loads then), run on the calling fiber.
 */
const call = (op: API.PreparedOperation, input: unknown): Effect.Effect<unknown> =>
  Effect.withFiber((fiber) => {
    const plan = op.compiled as Plan | undefined;
    if (plan !== undefined) return plan.run(fiber as unknown as Fiber, input);
    return Effect.flatMap(compile(op), (compiled) => {
      op.compiled = compiled;
      return compiled.run(fiber as unknown as Fiber, input);
    });
  }) as Effect.Effect<unknown>;

//#endregion

/**
 * The Protocol layer every generated AWS operation references. Failure and
 * requirement channels are erased at this boundary (see the note on
 * `encode`); the generated operation types reintroduce them.
 */
export const AwsProtocol: Layer.Layer<API.Protocol> = /*@__PURE__*/ Layer.succeed(
  API.Protocol,
  /*@__PURE__*/ API.Protocol.of({
    encode: (args) => encode(args) as Effect.Effect<HttpClientRequest.HttpClientRequest>,
    decode: (args) => decode(args) as Effect.Effect<unknown>,
    call,
  }),
);
