/**
 * Cloud-agnostic binary HTTP body schemas.
 *
 * These schemas describe the wire-shape of raw byte bodies — request bodies
 * for `application/octet-stream` uploads (e.g. R2 PutObject, S3 PutObject,
 * GCS object insert) and response bodies for the corresponding downloads.
 * They are intentionally cloud-agnostic so every distilled SDK can share a
 * single binary-body contract.
 */

import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import type * as HttpClientError from "effect/unstable/http/HttpClientError";

/**
 * Schema for `Blob` request bodies (browser/web standard binary blob).
 */
export const BlobSchema = Schema.declare(
  (input): input is Blob =>
    typeof Blob !== "undefined" && input instanceof Blob,
  {
    identifier: "Blob",
    description: "A Blob to send as the raw HTTP request body",
  },
);

/**
 * Schema for `Uint8Array` request bodies.
 */
export const Uint8ArraySchema = Schema.declare(
  (input): input is Uint8Array =>
    typeof Uint8Array !== "undefined" && input instanceof Uint8Array,
  {
    identifier: "Uint8Array",
    description: "A Uint8Array to send as the raw HTTP request body",
  },
);

/**
 * Schema for `ArrayBuffer` request bodies.
 */
export const ArrayBufferSchema = Schema.declare(
  (input): input is ArrayBuffer =>
    typeof ArrayBuffer !== "undefined" && input instanceof ArrayBuffer,
  {
    identifier: "ArrayBuffer",
    description: "An ArrayBuffer to send as the raw HTTP request body",
  },
);

/**
 * Schema for `ReadableStream<Uint8Array>` request bodies (web-platform
 * streaming API).
 */
export const ReadableStreamSchema = Schema.declare(
  (input): input is ReadableStream<Uint8Array> =>
    typeof ReadableStream !== "undefined" && input instanceof ReadableStream,
  {
    identifier: "ReadableStream",
    description:
      "A ReadableStream<Uint8Array> to send as the raw HTTP request body",
  },
);

/**
 * Schema for Effect `Stream.Stream<Uint8Array>` request bodies. Accepts any
 * Stream regardless of error/requirements channels — the runtime treats it
 * as an opaque source of bytes.
 */
export const StreamSchema = Schema.declare(
  (input): input is Stream.Stream<Uint8Array, unknown, unknown> =>
    Stream.isStream(input as Stream.Stream<unknown, unknown, unknown>),
  {
    identifier: "Stream",
    description:
      "An Effect Stream.Stream<Uint8Array> to send as the raw HTTP request body",
  },
);

/**
 * Schema for raw `application/octet-stream` request bodies (e.g. R2
 * `PutObject`, S3 `PutObject`). Inputs are intentionally wide — any
 * standard JS binary source plus Effect `Stream.Stream<Uint8Array>` is
 * accepted. The on-the-wire `Content-Type` is supplied by the caller
 * through the operation's `content-type` header field; the runtime falls
 * back to `application/octet-stream` when none is provided.
 */
export const BinaryBodySchema = Schema.Union([
  BlobSchema,
  Uint8ArraySchema,
  ArrayBufferSchema,
  ReadableStreamSchema,
  StreamSchema,
  Schema.String,
]);

/**
 * TypeScript type for raw HTTP request body content. Inputs are wide;
 * outputs (downloads) are always Effect `Stream.Stream<Uint8Array>`.
 */
export type BinaryBody =
  | Blob
  | Uint8Array
  | ArrayBuffer
  | ReadableStream<Uint8Array>
  | Stream.Stream<Uint8Array, unknown, unknown>
  | string;

/**
 * Marker schema for raw `application/octet-stream` download responses (e.g.
 * R2 `GetObject`). The runtime never decodes through this schema — it
 * detects `responseContentType: "binary"` on the operation's HTTP trait and
 * surfaces the response body directly as an Effect
 * `Stream.Stream<Uint8Array, HttpClientError.HttpClientError>`. This schema
 * is exported solely so generated service files have something to assign
 * to the operation's output schema slot.
 */
export const BinaryStreamResponseSchema = Schema.declare(
  (
    input,
  ): input is Stream.Stream<Uint8Array, HttpClientError.HttpClientError> =>
    Stream.isStream(input as Stream.Stream<unknown, unknown, unknown>),
  {
    identifier: "BinaryStreamResponse",
    description:
      "An Effect Stream.Stream<Uint8Array> surfacing a raw octet-stream download response",
  },
);
