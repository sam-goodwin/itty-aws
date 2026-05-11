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

// =============================================================================
// Raw Binary HTTP Body Schemas
// =============================================================================

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
 * Schema for raw `application/octet-stream` request bodies (e.g. R2
 * `PutObject`). Accepts the standard JS binary types plus `string` for
 * convenience. The actual on-the-wire `Content-Type` is supplied by the
 * caller through the operation's `content-type` header field.
 */
export const BinaryBodySchema = Schema.Union([
  BlobSchema,
  Uint8ArraySchema,
  ArrayBufferSchema,
  Schema.String,
]);

/**
 * TypeScript type for raw HTTP body content.
 */
export type BinaryBody = Blob | Uint8Array | ArrayBuffer | string;
