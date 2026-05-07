/**
 * Common schemas for Cloudflare API types.
 *
 * Includes file upload schemas for multipart form-data operations.
 */

import * as Schema from "effect/Schema";

// =============================================================================
// File Upload Schemas
// =============================================================================

/**
 * Schema for File objects (browser File API).
 *
 * Used for multipart form-data file uploads.
 */
export const FileSchema = Schema.declare(
  (input): input is File =>
    typeof File !== "undefined" && input instanceof File,
  {
    identifier: "File",
    description: "A File object for upload",
  },
);

/**
 * Schema for Blob objects.
 *
 * Used for binary data uploads.
 */
export const BlobSchema = Schema.declare(
  (input): input is Blob =>
    typeof Blob !== "undefined" && input instanceof Blob,
  {
    identifier: "Blob",
    description: "A Blob object for upload",
  },
);

/**
 * Schema for uploadable content (File or Blob).
 *
 * Accepts any file-like object that can be uploaded via multipart form.
 */
export const UploadableSchema = Schema.Union([FileSchema, BlobSchema]);

/**
 * TypeScript type for uploadable content.
 */
export type Uploadable = File | Blob;

/**
 * Schema for raw binary request bodies (e.g. R2 putObject).
 *
 * Accepts any byte-bearing value that fetch() understands as a body.
 */
export const BinaryBodySchema = Schema.declare(
  (
    input,
  ): input is Blob | Uint8Array | ArrayBuffer | ReadableStream<Uint8Array> =>
    (typeof Blob !== "undefined" && input instanceof Blob) ||
    input instanceof Uint8Array ||
    input instanceof ArrayBuffer ||
    (typeof ReadableStream !== "undefined" && input instanceof ReadableStream),
  {
    identifier: "BinaryBody",
    description:
      "Raw binary body (Blob, Uint8Array, ArrayBuffer, or ReadableStream)",
  },
);

/**
 * TypeScript type for raw binary request bodies.
 */
export type BinaryBody =
  | Blob
  | Uint8Array
  | ArrayBuffer
  | ReadableStream<Uint8Array>;
