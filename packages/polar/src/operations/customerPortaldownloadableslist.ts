import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortaldownloadableslistInput {
  benefit_id?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
}
export const CustomerPortaldownloadableslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    benefit_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/downloadables/" }),
  ) as unknown as Schema.Codec<CustomerPortaldownloadableslistInput>;

// Output Schema
export interface CustomerPortaldownloadableslistOutput {
  items: ReadonlyArray<{
    id: string;
    benefit_id: string;
    file: {
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
      download: {
        url: string;
        headers?: Record<string, string>;
        expires_at: string;
      };
      version: string | null;
      is_uploaded: boolean;
      service:
        | "downloadable"
        | "product_media"
        | "organization_avatar"
        | "support_case_attachment";
      size_readable: string;
    };
  }>;
  pagination: { total_count: number; max_page: number };
}
export const CustomerPortaldownloadableslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        benefit_id: Schema.String,
        file: Schema.Struct({
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
          download: Schema.Struct({
            url: Schema.String,
            headers: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            expires_at: Schema.String,
          }),
          version: Schema.NullOr(Schema.String),
          is_uploaded: Schema.Boolean,
          service: Schema.Literals([
            "downloadable",
            "product_media",
            "organization_avatar",
            "support_case_attachment",
          ]),
          size_readable: Schema.String,
        }),
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<CustomerPortaldownloadableslistOutput>;

// The operation
/**
 * List Downloadables
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 *
 * @param benefit_id - Filter by benefit ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const customerPortaldownloadableslist =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortaldownloadableslistInput,
    outputSchema: CustomerPortaldownloadableslistOutput,
  }));
