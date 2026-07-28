import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FilescreateInput {
  organization_id?: string | null;
  name: string;
  mime_type: string;
  size: number;
  checksum_sha256_base64?: string | null;
  upload: {
    parts: ReadonlyArray<{
      number: number;
      chunk_start: number;
      chunk_end: number;
      checksum_sha256_base64?: string | null;
    }>;
  };
  service: string;
  version?: string | null;
}
export const FilescreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.String,
  mime_type: Schema.String,
  size: Schema.Number,
  checksum_sha256_base64: Schema.optional(Schema.NullOr(Schema.String)),
  upload: Schema.Struct({
    parts: Schema.Array(
      Schema.Struct({
        number: Schema.Number,
        chunk_start: Schema.Number,
        chunk_end: Schema.Number,
        checksum_sha256_base64: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }),
  service: Schema.String,
  version: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/v1/files/" }),
) as unknown as Schema.Codec<FilescreateInput>;

// Output Schema
export interface FilescreateOutput {
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
  upload: {
    id: string;
    path: string;
    parts: ReadonlyArray<{
      number: number;
      chunk_start: number;
      chunk_end: number;
      checksum_sha256_base64?: string | null;
      url: string;
      expires_at: string;
      headers?: Record<string, string>;
    }>;
  };
  version: string | null;
  is_uploaded?: boolean;
  service:
    | "downloadable"
    | "product_media"
    | "organization_avatar"
    | "support_case_attachment";
  size_readable: string;
}
export const FilescreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  upload: Schema.Struct({
    id: Schema.String,
    path: Schema.String,
    parts: Schema.Array(
      Schema.Struct({
        number: Schema.Number,
        chunk_start: Schema.Number,
        chunk_end: Schema.Number,
        checksum_sha256_base64: Schema.optional(Schema.NullOr(Schema.String)),
        url: Schema.String,
        expires_at: Schema.String,
        headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }),
  version: Schema.NullOr(Schema.String),
  is_uploaded: Schema.optional(Schema.Boolean),
  service: Schema.Literals([
    "downloadable",
    "product_media",
    "organization_avatar",
    "support_case_attachment",
  ]),
  size_readable: Schema.String,
}) as unknown as Schema.Codec<FilescreateOutput>;

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
}));
