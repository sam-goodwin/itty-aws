/**
 * Common schemas for Cloudflare API types.
 *
 * Cloudflare-specific schemas live here. The cloud-agnostic raw-binary HTTP
 * body schemas (`BinaryBodySchema`, `BinaryStreamResponseSchema`,
 * `Uint8ArraySchema`, etc.) live in `@distilled.cloud/core/schemas` and are
 * re-exported below for convenience.
 */

import * as Schema from "effect/Schema";
import { BlobSchema } from "@distilled.cloud/core/schemas";

export {
  ArrayBufferSchema,
  BinaryBodySchema,
  BinaryStreamResponseSchema,
  BlobSchema,
  ReadableStreamSchema,
  StreamSchema,
  Uint8ArraySchema,
  type BinaryBody,
} from "@distilled.cloud/core/schemas";

// =============================================================================
// File Upload Schemas (multipart form-data)
// =============================================================================

/**
 * Schema for File objects (browser File API).
 *
 * Used for multipart form-data file uploads (e.g. Workers script bundles,
 * Pages assets, brand-protection submissions).
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
 * Schema for uploadable content (File or Blob).
 *
 * Accepts any file-like object that can be uploaded via multipart form.
 */
export const UploadableSchema = Schema.Union([FileSchema, BlobSchema]);

/**
 * TypeScript type for uploadable content.
 */
export type Uploadable = File | Blob;
