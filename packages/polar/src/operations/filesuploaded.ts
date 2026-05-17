import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const FilesuploadedInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  path: Schema.String,
  parts: Schema.Array(
    Schema.Struct({
      number: Schema.Number,
      checksum_etag: Schema.String,
      checksum_sha256_base64: Schema.NullOr(Schema.String),
    }),
  ),
}).pipe(T.Http({ method: "POST", path: "/v1/files/{id}/uploaded" }));
export type FilesuploadedInput = typeof FilesuploadedInput.Type;

// Output Schema
export const FilesuploadedOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  organization_id: Schema.String,
  name: Schema.String,
  path: Schema.String,
  mime_type: Schema.String,
  size: Schema.Number,
  storage_version: Schema.NullOr(Schema.String),
  checksum_etag: Schema.NullOr(Schema.String),
  checksum_sha256_base64: Schema.NullOr(Schema.String),
  checksum_sha256_hex: Schema.NullOr(Schema.String),
  last_modified_at: Schema.NullOr(Schema.String),
  version: Schema.NullOr(Schema.String),
  service: Schema.Literals([
    "downloadable",
    "product_media",
    "organization_avatar",
  ]),
  is_uploaded: Schema.Boolean,
  created_at: Schema.String,
  size_readable: Schema.String,
  public_url: Schema.optional(Schema.String),
});
export type FilesuploadedOutput = typeof FilesuploadedOutput.Type;

// The operation
/**
 * Complete File Upload
 *
 * Complete a file upload.
 * **Scopes**: `files:write`
 *
 * @param id - The file ID.
 */
export const filesuploaded = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesuploadedInput,
  outputSchema: FilesuploadedOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
