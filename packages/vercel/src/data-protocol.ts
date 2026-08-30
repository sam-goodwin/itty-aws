/**
 * Vercel DATA-PLANE protocols — hand-written.
 *
 * Vercel's management API (`https://api.vercel.com`, `VERCEL_TOKEN` bearer)
 * is only half the platform: three product data planes speak their own hosts
 * and their own auth, none of which appear in the management OpenAPI
 * document. The services generated from `manual-specs/` bind to the
 * protocols here instead of {@link VercelProtocol}:
 *
 * - **Blob** (`blob_data`) — control ops on `https://blob.vercel-storage.com`
 *   (`VERCEL_BLOB_API_URL` overrides — local emulation), content reads on the
 *   per-store host `https://{storeIdLower}.{access}.blob.vercel-storage.com`
 *   (under an override: `{override}/{storeIdLower}.{access}`). Auth is the
 *   store's RW token (`vercel_blob_rw_…`), a PER-CALL input member — not the
 *   management token.
 * - **Queues** (`queues_data`) — `https://{region}.vercel-queue.com/api/v3`
 *   (`VERCEL_QUEUE_BASE_URL` overrides the host; the `/api/v3` path prefix is
 *   part of the operation URIs and survives the override — the same contract
 *   `vercel dev`'s local broker uses). Auth is a per-call OIDC bearer.
 *   Bounded receives answer `multipart/mixed`; the protocol parses the parts
 *   into typed message records (`Vqs-*` part headers + payload bytes).
 * - **Edge Config** (`edge_config_data`) — the READ plane
 *   `https://edge-config.vercel.com/{edgeConfigId}`. The per-call `origin`
 *   member IS the endpoint (a connection string's origin — local emulation
 *   points it at `http://localhost:<port>`); auth is the minted read token.
 *
 * Every operation takes its bearer token as a typed, `sensitive` input
 * member (`token`) — the protocol Bearer-prefixes it on the wire. None of
 * these protocols resolve the management {@link Credentials} service, so the
 * generated data-plane ops require only an `HttpClient`.
 */
import * as Effect from "effect/Effect";
import type * as Layer from "effect/Layer";
import type * as AST from "effect/SchemaAST";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";
import type * as HttpClientResponse from "effect/unstable/http/HttpClientResponse";
import type * as API from "@distilled.cloud/core/api";
import { HTTP_STATUS_MAP } from "@distilled.cloud/core/errors";
import {
  getProps,
  hasPropAnn,
  nameOf,
} from "@distilled.cloud/core/protocol-http";
import { headerSymbol } from "@distilled.cloud/core/trait";
import {
  makeRestProtocol,
  type RestErrorEnvelope,
} from "@distilled.cloud/core/protocol-rest";
import {
  binaryResponseBodySymbol,
  multipartMessagesSymbol,
} from "./traits.ts";
import { Gone, PaymentRequired, UnknownVercelError } from "./errors.ts";
import type { DefaultErrors } from "./errors.ts";

// =============================================================================
// Shared surface
// =============================================================================

/**
 * Error channel shared by every generated data-plane operation (plus the
 * operation's own declared error classes).
 */
export type VercelDataOpError =
  | DefaultErrors
  | HttpClientError.HttpClientError;

/**
 * Context (requirements) of every generated data-plane operation. Data-plane
 * auth is a per-call input member, so — unlike the management surface —
 * there is no {@link Credentials} requirement.
 */
export type VercelDataOpContext = HttpClient.HttpClient;

/** Bearer-prefix a raw token supplied as an `authorization` member. */
const bearerPrefixAuthorization = (name: string, value: string): string =>
  name === "authorization" && !/^bearer /i.test(value)
    ? `Bearer ${value}`
    : value;

/**
 * Data-plane failures use the same `{ error: { code, message } }` envelope
 * as the management API where they are JSON at all (queues answers plain
 * text; the default `HTTP <status>` fallback covers it).
 */
const errorEnvelope = (body: unknown): RestErrorEnvelope | undefined => {
  if (body === null || typeof body !== "object") return undefined;
  const err = (body as Record<string, unknown>).error;
  if (err === null || typeof err !== "object") return undefined;
  const e = err as Record<string, unknown>;
  return {
    code: typeof e.code === "string" ? e.code : undefined,
    message: typeof e.message === "string" ? e.message : undefined,
  };
};

const statusMap = {
  ...HTTP_STATUS_MAP,
  402: PaymentRequired,
  410: Gone,
};

const unknownError = ({
  code,
  message,
  body,
}: {
  readonly code?: string | number;
  readonly message: string;
  readonly body: unknown;
}) =>
  new UnknownVercelError({
    code:
      typeof code === "string"
        ? code
        : code !== undefined
          ? String(code)
          : undefined,
    message,
    body,
  });

const emptyToUndefined = (value: string | undefined): string | undefined =>
  value === undefined || value === "" ? undefined : value;

const stripTrailingSlash = (value: string): string => value.replace(/\/+$/, "");

// =============================================================================
// Blob data plane
// =============================================================================

/** Default Blob data-plane endpoint (control operations). */
export const DEFAULT_BLOB_API_URL = "https://blob.vercel-storage.com";

/**
 * Env var overriding the Blob data-plane endpoint (local emulation). Under
 * an override, content reads move from the per-store host to
 * `{override}/{storeIdLower}.{access}/{pathname}`.
 */
export const BLOB_API_URL_ENV = "VERCEL_BLOB_API_URL";

/** Wire version header sent with every Blob data-plane request. */
export const BLOB_API_VERSION = "12";

interface BlobDataConfig {
  readonly override: string | undefined;
}

/**
 * Decode a binary-body success: the output member marked
 * `BinaryResponseBody()` receives the buffered bytes; sibling `Header()`
 * members project response headers. Returns undefined when the output
 * doesn't model a binary body (JSON ops fall through).
 */
const decodeBinaryBody = ({
  response,
  outputAst,
}: {
  readonly response: HttpClientResponse.HttpClientResponse;
  readonly outputAst: AST.AST;
}): Effect.Effect<unknown> | undefined => {
  const props = getProps(outputAst);
  const binary = props.find((p) => hasPropAnn(p, binaryResponseBodySymbol));
  if (binary === undefined) return undefined;
  return Effect.gen(function* () {
    const buffer = yield* response.arrayBuffer.pipe(Effect.orDie);
    const result: Record<string, unknown> = {
      [String(binary.name)]: new Uint8Array(buffer),
    };
    for (const prop of props) {
      if (prop === binary) continue;
      if (hasPropAnn(prop, headerSymbol)) {
        const value =
          response.headers[nameOf(prop, headerSymbol).toLowerCase()];
        if (value !== undefined) result[String(prop.name)] = value;
      }
    }
    return result;
  });
};

/**
 * The Blob data-plane protocol. Control ops ride the base endpoint; the
 * content-read op carries `endpointHostPrefix: "{store}."` in its config
 * (from the model's `smithy.api#endpoint` trait) and resolves to the
 * per-store host — or the override's path form when `VERCEL_BLOB_API_URL`
 * is set. The `{store}` placeholder is filled by the op's `HostLabel()`
 * member (`{bareStoreIdLower}.{access}`).
 */
export const BlobDataProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<BlobDataConfig>({
    // Read per request so the emulator env injected before a call is seen.
    credentials: Effect.sync(() => ({
      override: emptyToUndefined(process.env[BLOB_API_URL_ENV]),
    })),
    baseUrl: (creds, config) => {
      const prefix = config?.endpointHostPrefix;
      if (creds.override !== undefined) {
        const base = stripTrailingSlash(creds.override);
        return prefix === undefined
          ? base
          : `${base}/${prefix.replace(/\.$/, "")}`;
      }
      return prefix === undefined
        ? DEFAULT_BLOB_API_URL
        : `https://${prefix}blob.vercel-storage.com`;
    },
    headers: () => ({ "x-api-version": BLOB_API_VERSION }),
    mapMemberHeader: bearerPrefixAuthorization,
    errorEnvelope,
    statusMap,
    unknownError,
    decodeSuccess: decodeBinaryBody,
  });

// =============================================================================
// Queues data plane
// =============================================================================

/**
 * Default Queues data-plane host template — `{region}` is filled per call
 * from the op's `HostLabel()` member (e.g. `iad1`).
 */
export const DEFAULT_QUEUE_HOST_TEMPLATE = "https://{region}.vercel-queue.com";

/**
 * Env var overriding the Queues data-plane HOST (local broker emulation —
 * the same contract the official `vercel dev` uses). The `/api/v3/…` path
 * prefix lives in the operation URIs and survives the override; the
 * `region` member is ignored while the override is set.
 */
export const QUEUE_BASE_URL_ENV = "VERCEL_QUEUE_BASE_URL";

interface QueuesDataConfig {
  readonly override: string | undefined;
}

const CR = 13;
const LF = 10;
const DASH = 45;

const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();

const indexOfBytes = (
  haystack: Uint8Array,
  needle: Uint8Array,
  from: number,
): number => {
  outer: for (let i = from; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) continue outer;
    }
    return i;
  }
  return -1;
};

/** Extract the boundary parameter from a `multipart/mixed` content type. */
export const parseMultipartBoundary = (
  contentType: string | undefined,
): string | undefined => {
  if (contentType === undefined) return undefined;
  const match = /boundary=(?:"([^"]+)"|([^;\s]+))/i.exec(contentType);
  return match?.[1] ?? match?.[2];
};

export interface MultipartPart {
  readonly headers: Record<string, string>;
  readonly payload: Uint8Array;
}

/**
 * Parse a buffered `multipart/mixed` body into parts. Header names are
 * lowercased; payload bytes are returned verbatim.
 */
export const parseMultipartMixed = (
  bytes: Uint8Array,
  boundary: string,
): MultipartPart[] => {
  const delimiter = textEncoder.encode(`--${boundary}`);
  const partDelimiter = textEncoder.encode(`\r\n--${boundary}`);
  const headerSeparator = textEncoder.encode("\r\n\r\n");
  const parts: MultipartPart[] = [];

  let index = indexOfBytes(bytes, delimiter, 0);
  while (index !== -1) {
    let cursor = index + delimiter.length;
    // Closing delimiter: `--boundary--`.
    if (bytes[cursor] === DASH && bytes[cursor + 1] === DASH) break;
    // Skip the CRLF terminating the delimiter line.
    if (bytes[cursor] === CR && bytes[cursor + 1] === LF) cursor += 2;
    else if (bytes[cursor] === LF) cursor += 1;

    const nextDelimiter = indexOfBytes(bytes, partDelimiter, cursor);
    const partEnd = nextDelimiter === -1 ? bytes.length : nextDelimiter;

    const separator = indexOfBytes(bytes, headerSeparator, cursor);
    const headers: Record<string, string> = {};
    let payload: Uint8Array;
    if (separator !== -1 && separator < partEnd) {
      const headerText = textDecoder.decode(bytes.subarray(cursor, separator));
      for (const line of headerText.split("\r\n")) {
        const colon = line.indexOf(":");
        if (colon === -1) continue;
        headers[line.slice(0, colon).trim().toLowerCase()] = line
          .slice(colon + 1)
          .trim();
      }
      payload = bytes.subarray(separator + headerSeparator.length, partEnd);
    } else {
      payload = bytes.subarray(cursor, partEnd);
    }
    parts.push({ headers, payload });

    if (nextDelimiter === -1) break;
    index = nextDelimiter + 2; // reposition onto `--boundary`
  }
  return parts;
};

/**
 * One multipart part → one message record matching the generated
 * `QueueMessage` shape; undefined (part skipped, mirroring `@vercel/queue`)
 * when required `Vqs-*` headers are missing — a skipped part stays leased
 * and expires back onto the queue.
 */
const toMessageRecord = (
  part: MultipartPart,
): Record<string, unknown> | undefined => {
  const messageId = part.headers["vqs-message-id"];
  const createdAt = part.headers["vqs-timestamp"];
  const receiptHandle = part.headers["vqs-receipt-handle"];
  if (
    messageId === undefined ||
    createdAt === undefined ||
    receiptHandle === undefined
  ) {
    return undefined;
  }
  const deliveryCount = Number.parseInt(
    part.headers["vqs-delivery-count"] ?? "0",
    10,
  );
  if (Number.isNaN(deliveryCount)) return undefined;
  return {
    messageId,
    deliveryCount,
    createdAt,
    expiresAt: part.headers["vqs-expires-at"],
    contentType: part.headers["content-type"] ?? "application/octet-stream",
    receiptHandle,
    payload: part.payload.slice(),
  };
};

/**
 * Decode a `multipart/mixed` receive: the output member marked
 * `MultipartMessages()` receives one record per valid part; a 204 (nothing
 * available) is an empty batch. Ops without that member (send/ack/extend)
 * fall through to the JSON path.
 */
const decodeMultipartMessages = ({
  response,
  outputAst,
}: {
  readonly response: HttpClientResponse.HttpClientResponse;
  readonly outputAst: AST.AST;
}): Effect.Effect<unknown> | undefined => {
  const props = getProps(outputAst);
  const member = props.find((p) => hasPropAnn(p, multipartMessagesSymbol));
  if (member === undefined) return undefined;
  const name = String(member.name);
  return Effect.gen(function* () {
    if (response.status === 204) {
      yield* response.text.pipe(Effect.orDie);
      return { [name]: [] };
    }
    const boundary = parseMultipartBoundary(response.headers["content-type"]);
    if (boundary === undefined) {
      // A 2xx receive without a multipart body is protocol corruption, not
      // an API failure — surface it as a defect.
      const text = yield* response.text.pipe(Effect.orDie);
      return yield* Effect.die(
        new Error(
          `expected a multipart/mixed response, got content-type ` +
            `${JSON.stringify(response.headers["content-type"])}` +
            (text ? `: ${text.slice(0, 200)}` : ""),
        ),
      );
    }
    const buffer = yield* response.arrayBuffer.pipe(Effect.orDie);
    const parts = parseMultipartMixed(new Uint8Array(buffer), boundary);
    return {
      [name]: parts.flatMap((part) => {
        const message = toMessageRecord(part);
        return message === undefined ? [] : [message];
      }),
    };
  });
};

/**
 * The Queues data-plane protocol: per-region host template (env-overridable),
 * per-call OIDC bearer, multipart/mixed receives parsed into typed message
 * records.
 */
export const QueuesDataProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<QueuesDataConfig>({
    credentials: Effect.sync(() => ({
      override: emptyToUndefined(process.env[QUEUE_BASE_URL_ENV]),
    })),
    baseUrl: (creds) =>
      creds.override !== undefined
        ? stripTrailingSlash(creds.override)
        : DEFAULT_QUEUE_HOST_TEMPLATE,
    headers: () => ({}),
    mapMemberHeader: bearerPrefixAuthorization,
    errorEnvelope,
    statusMap,
    unknownError,
    decodeSuccess: decodeMultipartMessages,
  });

// =============================================================================
// Edge Config data plane (read)
// =============================================================================

/**
 * The live Edge Config read-plane origin. There is no env override — the
 * endpoint is a PER-CALL `origin` member, because the connection string's
 * origin is the override mechanism (local emulation hands out connection
 * strings pointing at `http://localhost:<port>`).
 */
export const DEFAULT_EDGE_CONFIG_API_URL = "https://edge-config.vercel.com";

/**
 * The Edge Config read-plane protocol. Every op's base URL is its `origin`
 * HostLabel member verbatim; auth is the read token (bearer). The
 * missing-item vs missing-config 404 distinction rides the typed error
 * matchers (`x-edge-config-digest` header presence).
 */
export const EdgeConfigDataProtocol: Layer.Layer<API.Protocol> =
  makeRestProtocol<Record<never, never>>({
    credentials: Effect.succeed({}),
    baseUrl: () => "{origin}",
    headers: () => ({}),
    mapMemberHeader: bearerPrefixAuthorization,
    errorEnvelope,
    statusMap,
    unknownError,
  });
