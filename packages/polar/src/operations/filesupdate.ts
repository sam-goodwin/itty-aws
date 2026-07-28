import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FilesupdateInput {
  id: string;
  name?: string | null;
  version?: string | null;
}
export const FilesupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  version: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "PATCH", path: "/v1/files/{id}" }),
) as unknown as Schema.Codec<FilesupdateInput>;

// Output Schema
export type FilesupdateOutput =
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
    };
export const FilesupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
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
]) as unknown as Schema.Codec<FilesupdateOutput>;

// The operation
/**
 * Update File
 *
 * Update a file.
 * **Scopes**: `files:write`
 *
 * @param id - The file ID.
 */
export const filesupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesupdateInput,
  outputSchema: FilesupdateOutput,
}));
