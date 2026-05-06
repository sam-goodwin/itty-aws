import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const FileslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  ids: Schema.optional(Schema.String).pipe(T.QueryParam()),
  page: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  limit: Schema.optional(Schema.Number).pipe(T.QueryParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/files/" }));
export type FileslistInput = typeof FileslistInput.Type;

// Output Schema
export const FileslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type FileslistOutput = typeof FileslistOutput.Type;

// The operation
/**
 * List Files
 *
 * List files.
 * **Scopes**: `files:read` `files:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param ids - Filter by file ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const fileslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileslistInput,
  outputSchema: FileslistOutput,
  errors: [UnprocessableEntity] as const,
}));
