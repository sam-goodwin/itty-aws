import { AwsV4Signer } from "aws4fetch";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import * as Option from "effect/Option";
import { pipeArguments } from "effect/Pipeable";
import * as Redacted from "effect/Redacted";
import * as Ref from "effect/Ref";
import * as Stream from "effect/Stream";
import * as HttpBody from "effect/unstable/http/HttpBody";
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as HttpClientRequest from "effect/unstable/http/HttpClientRequest";
import { SingleShotGen } from "effect/Utils";

import { makeDefault, Retry } from "../retry.ts";
import { makeEndpointResolver } from "../rules-engine/endpoint-resolver.ts";
import {
  getAwsApiService,
  getAwsAuthSigv2,
  getAwsAuthSigv4,
  getPath,
} from "../traits.ts";
import { getIdentifier } from "../util/ast.ts";
import type { Operation } from "./operation.ts";
import { makeRequestBuilder } from "./request-builder.ts";
import {
  makeResponseParser,
  type ResponseParserOptions,
} from "./response-parser.ts";

import * as Credentials from "../credentials.browser.ts";
import * as Endpoint from "../endpoint.ts";
import * as Region from "../region.ts";

export interface MakeOptions extends ResponseParserOptions {}

/**
 * An operation that can be used in two ways:
 * 1. Direct call: `yield* operation(input)` — returns Effect with requirements
 * 2. Yield first: `const fn = yield* operation` — captures services, returns requirement-free function
 */
export type OperationMethod<I, A, E, R> = Effect.Effect<
  (input: I) => Effect.Effect<A, E, never>,
  never,
  R
> &
  ((input: I) => Effect.Effect<A, E, R>);

export const make = <Op extends Operation<any, any, any>>(
  initOperation: () => Op,
  options?: MakeOptions,
): any => {
  const op = initOperation();
  let _init;
  const init = () => {
    const inputAst = op.input.ast;

    // Extract metadata for error recording (DISTILLED_AWS_DEBUG) and error context
    const serviceSdkId = getAwsApiService(inputAst)?.sdkId;
    const operationName =
      op.operationName ??
      getIdentifier(inputAst)?.replace(/(?:Request|Input|Message)$/, "");

    // Create request builder and response parser (preprocessing done once)
    const buildRequest = makeRequestBuilder(op);
    const parseResponse = makeResponseParser(op, {
      ...options,
      service: serviceSdkId,
      operation: operationName,
    });

    // Get SigV4 service name from annotations
    const sigv4 = getAwsAuthSigv4(inputAst);

    // Legacy SigV2 (SimpleDB only) — when present it takes precedence and
    // the request is signed via body parameters instead of headers.
    const sigv2 = getAwsAuthSigv2(inputAst);

    // Create rules resolver (if rule set available)
    const resolveEndpoint = makeEndpointResolver(op);

    return {
      buildRequest,
      parseResponse,
      sigv4,
      sigv2,
      resolveEndpoint,
      serviceSdkId,
      operationName,
    };
  };

  const fn = Effect.fnUntraced(function* (payload: Operation.Input<Op>) {
    const {
      buildRequest,
      parseResponse,
      sigv4,
      sigv2,
      resolveEndpoint: rulesResolver,
      serviceSdkId: _serviceSdkId,
      operationName: _operationName,
    } = (_init ??= init()) as ReturnType<typeof init>;

    yield* Effect.logDebug("Payload", payload);

    // Build request using the request builder (handles protocol serialization + middleware)
    const request = yield* buildRequest(payload);

    yield* Effect.logDebug("Built Request", request);

    // Sign the request
    const credentials = yield* yield* Credentials.Credentials;
    const region = yield* yield* Region.Region;
    const serviceName = sigv4?.name ?? "s3";

    // Resolve endpoint and adjust request path if needed
    let endpoint: string;
    let resolvedRequest = request;
    let signingRegion = region; // Default to context region
    let signingServiceName = serviceName; // Default to service name from sigv4 trait
    const customEndpoint = yield* yield* Effect.serviceOption(
      Endpoint.Endpoint,
    ).pipe(Effect.map(Option.getOrElse(() => Effect.undefined)));

    if (customEndpoint) {
      // User provided a custom endpoint - use it directly
      endpoint = customEndpoint;
    } else if (rulesResolver) {
      // Use the rules resolver - it handles endpoint resolution AND path adjustment
      const resolved = yield* rulesResolver({
        input: payload,
        region,
        request,
      });
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
    if (op.endpointHostPrefix !== undefined && !customEndpoint) {
      const resolvedPrefix = op.endpointHostPrefix.replace(
        /\{(\w+)\}/g,
        (_, member: string) =>
          String((payload as Record<string, unknown>)?.[member] ?? ""),
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
    const queryString = Object.entries(resolvedRequest.query)
      .filter(([_, v]) => v !== undefined)
      .flatMap(([k, v]) => {
        // Handle arrays as repeated query parameters (e.g., tagKeys=A&tagKeys=B)
        if (Array.isArray(v)) {
          return v.map((item) =>
            item
              ? `${encodeURIComponent(k)}=${encodeURIComponent(item)}`
              : encodeURIComponent(k),
          );
        }
        return v
          ? `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
          : encodeURIComponent(k);
      })
      .join("&");

    const fullPath = queryString
      ? `${resolvedRequest.path}?${queryString}`
      : resolvedRequest.path;

    // Legacy Signature Version 2 (SimpleDB is the sole remaining SigV2-only
    // service). The signature is an HMAC-SHA256 over the sorted,
    // RFC3986-encoded form parameters and travels IN the form-encoded body —
    // there is no Authorization header. The classic endpoint rejects SigV4
    // with `AuthFailure: access credentials are missing`.
    if (sigv2) {
      const rfc3986 = (s: string) =>
        encodeURIComponent(s).replace(
          /[!'()*]/g,
          (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase(),
        );
      const pairs: Array<[string, string]> = [];
      const bodyStr =
        typeof resolvedRequest.body === "string" ? resolvedRequest.body : "";
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
        .sort(([a, av], [b, bv]) =>
          a < b ? -1 : a > b ? 1 : av < bv ? -1 : av > bv ? 1 : 0,
        )
        .map(([k, v]) => `${k}=${v}`)
        .join("&");
      const requestUrl = new URL(`${endpoint}${fullPath}`);
      const stringToSign = [
        resolvedRequest.method,
        requestUrl.host,
        requestUrl.pathname || "/",
        canonical,
      ].join("\n");
      const signatureBytes = yield* Effect.promise(async () => {
        const key = await crypto.subtle.importKey(
          "raw",
          new TextEncoder().encode(Redacted.value(credentials.secretAccessKey)),
          { name: "HMAC", hash: "SHA-256" },
          false,
          ["sign"],
        );
        return crypto.subtle.sign(
          "HMAC",
          key,
          new TextEncoder().encode(stringToSign),
        );
      });
      const signature = Buffer.from(signatureBytes).toString("base64");
      const signedBody = `${canonical}&Signature=${rfc3986(signature)}`;
      const contentTypeV2 =
        resolvedRequest.headers["Content-Type"] ??
        resolvedRequest.headers["content-type"] ??
        "application/x-www-form-urlencoded";

      const httpRequestV2 = pipe(
        HttpClientRequest.make(
          resolvedRequest.method as "GET" | "POST" | "PUT" | "DELETE",
        )(requestUrl.toString()),
        HttpClientRequest.setHeaders(resolvedRequest.headers),
        HttpClientRequest.setBody(HttpBody.text(signedBody, contentTypeV2)),
      );

      const clientV2 = yield* HttpClient.HttpClient;
      const rawResponseV2 = yield* clientV2.execute(httpRequestV2);
      const responseHeadersV2 = rawResponseV2.headers as Record<string, string>;
      const isEmptyBodyV2 =
        responseHeadersV2["content-length"] === "0" ||
        rawResponseV2.status === 204;
      const responseBodyV2 = isEmptyBodyV2
        ? new ReadableStream<Uint8Array>({ start: (c) => c.close() })
        : yield* Stream.toReadableStreamEffect(rawResponseV2.stream);

      return yield* parseResponse({
        status: rawResponseV2.status,
        statusText: "OK",
        headers: responseHeadersV2,
        body: responseBodyV2,
      });
    }

    // For streaming bodies (ReadableStream), we can't compute a hash
    // so we use UNSIGNED-PAYLOAD and don't pass the body to the signer
    const isStreamingBody = resolvedRequest.body instanceof ReadableStream;
    // Check if content-sha256 header is already set (e.g., by checksum middleware)
    const hasContentSha256 = Object.keys(resolvedRequest.headers).some(
      (k) => k.toLowerCase() === "x-amz-content-sha256",
    );
    // Check if service provides its own checksum (e.g., EBS x-amz-Checksum header)
    // In this case, the body should not be included in SigV4 signing
    const hasServiceChecksum = Object.keys(resolvedRequest.headers).some(
      (k) => k.toLowerCase() === "x-amz-checksum",
    );
    // Check if there's a body to sign
    const hasBody = resolvedRequest.body !== undefined;
    // Operations with a streaming input payload (smithy `@streaming` blob)
    // are signed UNSIGNED-PAYLOAD even when the caller passed a buffered
    // body — matching botocore's `has_streaming_input` behavior. Services
    // like Lex Runtime V2 (RecognizeUtterance) reject payload-hash
    // signatures on these routes. Glacier is the exception: it REQUIRES a
    // real x-amz-content-sha256 (computed below), so it keeps the hashed
    // path for buffered bodies. SageMaker Runtime is another exception:
    // its event-stream route (InvokeEndpointWithResponseStream) rejects
    // UNSIGNED-PAYLOAD with InvalidSignatureException — the service always
    // reconstructs the canonical request from the actual body hash — so
    // buffered bodies stay on the hashed path (plain InvokeEndpoint accepts
    // payload-hash signatures too).
    const hasStreamingInput =
      resolvedRequest.hasStreamingInput === true &&
      _serviceSdkId !== "Glacier" &&
      _serviceSdkId !== "SageMaker Runtime";
    // Use unsigned payload for streaming bodies OR streaming-input
    // operations OR when service provides checksum with body
    const useUnsignedPayload =
      (isStreamingBody || hasStreamingInput || (hasServiceChecksum && hasBody)) &&
      !hasContentSha256;
    let signingHeaders = useUnsignedPayload
      ? {
          ...resolvedRequest.headers,
          "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD",
        }
      : resolvedRequest.headers;

    // S3 Control rejects UNSIGNED-PAYLOAD on several routes (access point
    // operations fail with `InvalidRequest: "Request body cannot be
    // unsigned"`). aws4fetch injects UNSIGNED-PAYLOAD for any service signing
    // as "s3" when the header is absent, so pre-compute the real payload
    // SHA-256 here (matching the official SDK's applyChecksum behavior).
    // Glacier likewise REQUIRES the x-amz-content-sha256 header on
    // payload-bearing requests (UploadArchive / UploadMultipartPart) — the
    // service reconstructs the canonical request from that header, so
    // omitting it fails with InvalidSignatureException (the official SDK's
    // addChecksumHeaders middleware always sets it).
    if (
      (_serviceSdkId === "S3 Control" || _serviceSdkId === "Glacier") &&
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
      const digest = yield* Effect.promise(() =>
        crypto.subtle.digest(
          "SHA-256",
          // copy into a fresh ArrayBuffer-backed view for the DOM typings
          bodyBytes.slice(),
        ),
      );
      const payloadHash = Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
      signingHeaders = {
        ...signingHeaders,
        "X-Amz-Content-Sha256": payloadHash,
      };
    }

    const signer = new AwsV4Signer({
      method: resolvedRequest.method,
      url: `${endpoint}${fullPath}`,
      headers: signingHeaders,
      // Don't pass body to signer when using unsigned payload
      body: useUnsignedPayload
        ? undefined
        : resolvedRequest.body instanceof Uint8Array
          ? Buffer.from(resolvedRequest.body)
          : resolvedRequest.body,
      accessKeyId: Redacted.value(credentials.accessKeyId),
      secretAccessKey: Redacted.value(credentials.secretAccessKey),
      sessionToken: credentials.sessionToken
        ? Redacted.value(credentials.sessionToken)
        : undefined,
      service: signingServiceName,
      region: signingRegion,
    });
    const signedRequest = yield* Effect.promise(() => signer.sign());

    // Build headers object from signed request
    const signedHeaders: Record<string, string> = {};
    signedRequest.headers.forEach((value, key) => {
      signedHeaders[key] = value;
    });

    // Get content type from signed headers for body constructor
    const contentType = signedHeaders["content-type"];

    // Build HttpBody based on body type
    // We must pass the content type to avoid HttpBody overriding the signed Content-Type header
    let httpBody: HttpBody.HttpBody;
    if (isStreamingBody) {
      // Convert ReadableStream to Effect Stream for HttpClient
      const effectStream = Stream.fromReadableStream({
        evaluate: () => resolvedRequest.body as ReadableStream<Uint8Array>,
        onError: (error) => new Error(String(error)),
      });
      httpBody = HttpBody.stream(effectStream, contentType);
    } else if (resolvedRequest.body === undefined) {
      httpBody = HttpBody.empty;
    } else if (typeof resolvedRequest.body === "string") {
      httpBody = HttpBody.text(resolvedRequest.body, contentType);
    } else if (resolvedRequest.body instanceof Uint8Array) {
      httpBody = HttpBody.uint8Array(resolvedRequest.body, contentType);
    } else {
      httpBody = HttpBody.empty;
    }

    // Build HttpClientRequest
    // Note: setBody must come after setHeaders because setBody adds content-type/content-length
    // from the HttpBody, which should match our signed headers
    const httpRequest = pipe(
      HttpClientRequest.make(
        resolvedRequest.method as
          | "GET"
          | "POST"
          | "PUT"
          | "DELETE"
          | "PATCH"
          | "HEAD"
          | "OPTIONS",
      )(signedRequest.url),
      HttpClientRequest.setHeaders(signedHeaders),
      HttpClientRequest.setBody(httpBody),
    );

    // Execute request via HttpClient
    const client = yield* HttpClient.HttpClient;
    const rawResponse = yield* client.execute(httpRequest);

    yield* Effect.logDebug("Raw Response Status", rawResponse.status);

    // Convert response headers to Record
    const responseHeaders = rawResponse.headers as Record<string, string>;

    // Create response body stream
    // Convert Effect Stream to ReadableStream for the response parser
    // Note: HEAD requests never have a body, and some responses have no body (204, etc.)
    // Effect's HttpClientResponse.stream throws an error for empty bodies, so we need to check first
    const contentLength = responseHeaders["content-length"];
    const isEmptyBody =
      resolvedRequest.method === "HEAD" ||
      contentLength === "0" ||
      rawResponse.status === 204;
    const responseBody = isEmptyBody
      ? new ReadableStream<Uint8Array>({ start: (c) => c.close() })
      : yield* Stream.toReadableStreamEffect(rawResponse.stream);

    // Parse response using the response parser
    // Handles both success (protocol deserialization + schema decoding)
    // and error responses (error deserialization + schema matching)
    const parsed = yield* parseResponse({
      status: rawResponse.status,
      statusText: "OK",
      headers: responseHeaders,
      body: responseBody,
    });

    yield* Effect.logDebug("Parsed Response", parsed);

    return parsed;
  });

  const outerFn = Object.assign(
    Effect.fn(function* (payload: Operation.Input<any>) {
      const lastError = yield* Ref.make<unknown>(undefined);
      const policy = (yield* Effect.serviceOption(Retry)).pipe(
        Option.map((value) =>
          typeof value === "function" ? value(lastError) : value,
        ),
        Option.getOrElse(() => makeDefault(lastError)),
      );

      const eff = fn(payload as any);
      return yield* pipe(
        eff,
        Effect.tapError((error) => Ref.set(lastError, error)),
        policy.while
          ? (eff) =>
              Effect.retry(eff, {
                while: policy.while,
                schedule: policy.schedule,
              })
          : (eff) => eff,
      );
    }),
    op,
  );

  const Proto = {
    [Symbol.iterator](this: any) {
      return new SingleShotGen(this.asEffect());
    },
    pipe(this: any) {
      return pipeArguments(this.asEffect(), arguments);
    },
    asEffect() {
      return Effect.map(
        Effect.context(),
        (context) => (input: Operation.Input<Op>) =>
          Effect.provideContext(outerFn(input), context),
      );
    },
  };

  return Object.assign(outerFn, Proto);
};

/**
 * Whether a continuation token returned by a paginated operation means
 * "no more pages".
 *
 * AWS marks the terminal page by omitting the output token, returning it
 * as `null`, or — for several services (e.g. SSM, CloudWatch Logs) — as an
 * empty string. Treating `""` as a live token re-requests the first page
 * with `NextToken: ""` forever (or fails with a ValidationException).
 * This matches the official aws-sdk-js-v3 paginators, which stop on any
 * falsy token (`hasNext = !!token`); object tokens like DynamoDB's
 * `LastEvaluatedKey` are always truthy and unaffected.
 */
export const isTerminalPageToken = (token: unknown): boolean =>
  token === undefined || token === null || token === "";

export const makePaginated = <Op extends Operation<any, any, any>>(
  initOperation: () => Op,
): any => {
  const op = initOperation();
  const pagination = op.pagination!;

  // Reuse API.make for the Effect-based single-call interface
  const baseFn = make(initOperation);

  // Stream all pages (full response objects)
  const pagesFn = (payload: Operation.Input<Op>) => {
    type State = { token: unknown; done: boolean };
    const unfoldFn = (state: State) =>
      Effect.gen(function* () {
        if (state.done) {
          return undefined;
        }

        // Build the request with the continuation token
        const requestPayload =
          state.token !== undefined
            ? { ...(payload as any), [pagination.inputToken]: state.token }
            : payload;

        // Make the API call
        const response = yield* baseFn(requestPayload);

        // Extract the next token using path traversal
        const nextToken = getPath(response, pagination.outputToken);

        // Return the full page and next state
        const nextState: State = {
          token: nextToken,
          done: isTerminalPageToken(nextToken),
        };
        return [response, nextState] as const;
      });

    return Stream.unfold({ token: undefined, done: false } as State, unfoldFn);
  };

  // Stream individual items from the paginated field
  const itemsFn = (payload: Operation.Input<Op>) => {
    if (!pagination.items) {
      return Stream.empty;
    }

    return pagesFn(payload).pipe(
      Stream.flatMap((page) => {
        const items = getPath(page, pagination.items!) as unknown[] | undefined;
        return Stream.fromIterable(items ?? []);
      }),
    );
  };

  return Object.assign(baseFn, {
    pages: pagesFn,
    items: itemsFn,
    input: op.input,
    output: op.output,
    errors: op.errors,
    pagination: op.pagination,
  });
};

/**
 * Create an API client that skips schema validation.
 * Returns raw deserialized responses (parsed XML/JSON but not validated against schema).
 * Useful for discovering missing enum values or debugging.
 */
export const makeUnvalidated = <Op extends Operation>(
  initOperation: () => Op,
): any => make(initOperation, { skipValidation: true });
