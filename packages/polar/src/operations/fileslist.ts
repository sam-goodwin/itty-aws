import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FileslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  ids?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
}
export const FileslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  ids: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/v1/files/" }),
) as unknown as Schema.Codec<FileslistInput>;

// Output Schema
export interface FileslistOutput {
  items: ReadonlyArray<
    | {
        id: string;
        organization_id: string;
        name: string;
        path: string;
        mime_type: string;
        size: number;
        storage_version: string | null;
        checksum_etag: string | null;
        checksum_sha256_base64: string | null;
        checksum_sha256_hex: string | null;
        last_modified_at: string | null;
        version: string | null;
        service: string;
        is_uploaded: boolean;
        created_at: string;
        size_readable: string;
      }
    | {
        id: string;
        organization_id: string;
        name: string;
        path: string;
        mime_type: string;
        size: number;
        storage_version: string | null;
        checksum_etag: string | null;
        checksum_sha256_base64: string | null;
        checksum_sha256_hex: string | null;
        last_modified_at: string | null;
        version: string | null;
        service: string;
        is_uploaded: boolean;
        created_at: string;
        size_readable: string;
        public_url: string;
      }
  >;
  pagination: { total_count: number; max_page: number };
}
export const FileslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Union([
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
        service: Schema.String,
        is_uploaded: Schema.Boolean,
        created_at: Schema.String,
        size_readable: Schema.String,
      }),
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
        service: Schema.String,
        is_uploaded: Schema.Boolean,
        created_at: Schema.String,
        size_readable: Schema.String,
        public_url: Schema.String,
      }),
    ]),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<FileslistOutput>;

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
}));
