import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const FilescreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/v1/files/" }));
export type FilescreateInput = typeof FilescreateInput.Type;

// Output Schema
export const FilescreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  organization_id: Schema.String,
  name: Schema.String,
  path: Schema.String,
  mime_type: Schema.String,
  size: Schema.Number,
  storage_version: Schema.Unknown,
  checksum_etag: Schema.Unknown,
  checksum_sha256_base64: Schema.Unknown,
  checksum_sha256_hex: Schema.Unknown,
  last_modified_at: Schema.Unknown,
  upload: Schema.Struct({
    id: Schema.String,
    path: Schema.String,
    parts: Schema.Array(
      Schema.Struct({
        number: Schema.Number,
        chunk_start: Schema.Number,
        chunk_end: Schema.Number,
        checksum_sha256_base64: Schema.optional(Schema.Unknown),
        url: Schema.String,
        expires_at: Schema.String,
        headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }),
  version: Schema.Unknown,
  is_uploaded: Schema.optional(Schema.Boolean),
  service: Schema.Literals([
    "downloadable",
    "product_media",
    "organization_avatar",
  ]),
  size_readable: Schema.String,
});
export type FilescreateOutput = typeof FilescreateOutput.Type;

// The operation
/**
 * Create File
 *
 * Create a file.
 * **Scopes**: `files:write`
 */
export const filescreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilescreateInput,
  outputSchema: FilescreateOutput,
  errors: [UnprocessableEntity] as const,
}));
