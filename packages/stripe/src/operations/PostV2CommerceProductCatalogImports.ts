import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostV2CommerceProductCatalogImportsInput {
  feed_type: "inventory" | "pricing" | "product" | "promotion";
  metadata: Record<string, string>;
  mode: "replace" | "upsert";
}
export const PostV2CommerceProductCatalogImportsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feed_type: Schema.Literals([
      "inventory",
      "pricing",
      "product",
      "promotion",
    ]),
    metadata: Schema.Record(Schema.String, Schema.String),
    mode: Schema.Literals(["replace", "upsert"]),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/commerce/product_catalog/imports" }),
  ) as unknown as Schema.Codec<PostV2CommerceProductCatalogImportsInput>;

// Output Schema
export interface PostV2CommerceProductCatalogImportsOutput {
  created: string;
  feed_type: "inventory" | "pricing" | "product" | "promotion";
  id: string;
  livemode: boolean;
  metadata: Record<string, string>;
  mode: "replace" | "upsert";
  object: "v2.commerce.product_catalog_import";
  status:
    | "awaiting_upload"
    | "failed"
    | "processing"
    | "succeeded"
    | "succeeded_with_errors";
  status_details?: {
    awaiting_upload?: { upload_url: { expires_at: string; url: string } };
    failed?: {
      code: "file_not_found" | "internal_error" | "invalid_file";
      failure_message: string;
      type: "cannot_proceed" | "transient_failure";
    };
    processing?: { error_count: string; success_count: string };
    succeeded?: { success_count: string };
    succeeded_with_errors?: {
      error_count: string;
      error_file: {
        content_type: string;
        download_url: { expires_at: string; url: string };
        size: string;
      };
      samples: {
        error_message: string;
        field: string;
        id: string;
        row: string;
      }[];
      success_count: string;
    };
  };
}
export const PostV2CommerceProductCatalogImportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.String,
    feed_type: Schema.Literals([
      "inventory",
      "pricing",
      "product",
      "promotion",
    ]),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    mode: Schema.Literals(["replace", "upsert"]),
    object: Schema.Literals(["v2.commerce.product_catalog_import"]),
    status: Schema.Literals([
      "awaiting_upload",
      "failed",
      "processing",
      "succeeded",
      "succeeded_with_errors",
    ]),
    status_details: Schema.optional(
      Schema.Struct({
        awaiting_upload: Schema.optional(
          Schema.Struct({
            upload_url: Schema.Struct({
              expires_at: Schema.String,
              url: Schema.String,
            }),
          }),
        ),
        failed: Schema.optional(
          Schema.Struct({
            code: Schema.Literals([
              "file_not_found",
              "internal_error",
              "invalid_file",
            ]),
            failure_message: Schema.String,
            type: Schema.Literals(["cannot_proceed", "transient_failure"]),
          }),
        ),
        processing: Schema.optional(
          Schema.Struct({
            error_count: Schema.String,
            success_count: Schema.String,
          }),
        ),
        succeeded: Schema.optional(
          Schema.Struct({
            success_count: Schema.String,
          }),
        ),
        succeeded_with_errors: Schema.optional(
          Schema.Struct({
            error_count: Schema.String,
            error_file: Schema.Struct({
              content_type: Schema.String,
              download_url: Schema.Struct({
                expires_at: Schema.String,
                url: Schema.String,
              }),
              size: Schema.String,
            }),
            samples: Schema.Array(
              Schema.Struct({
                error_message: Schema.String,
                field: Schema.String,
                id: Schema.String,
                row: Schema.String,
              }),
            ),
            success_count: Schema.String,
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PostV2CommerceProductCatalogImportsOutput>;

// The operation
/**
 * Create a Product Catalog Import
 *
 * Creates a ProductCatalogImport.
 */
export const PostV2CommerceProductCatalogImports =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV2CommerceProductCatalogImportsInput,
    outputSchema: PostV2CommerceProductCatalogImportsOutput,
  }));
