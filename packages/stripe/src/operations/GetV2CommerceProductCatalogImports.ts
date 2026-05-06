import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV2CommerceProductCatalogImportsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.String),
    created_gt: Schema.optional(Schema.String),
    created_gte: Schema.optional(Schema.String),
    created_lt: Schema.optional(Schema.String),
    created_lte: Schema.optional(Schema.String),
    feed_type: Schema.optional(
      Schema.Literals(["inventory", "pricing", "product"]),
    ),
    limit: Schema.optional(Schema.Number),
    status: Schema.optional(
      Schema.Literals([
        "awaiting_upload",
        "failed",
        "processing",
        "succeeded",
        "succeeded_with_errors",
      ]),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/commerce/product_catalog/imports" }),
  );
export type GetV2CommerceProductCatalogImportsInput =
  typeof GetV2CommerceProductCatalogImportsInput.Type;

// Output Schema
export const GetV2CommerceProductCatalogImportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        created: Schema.String,
        feed_type: Schema.Literals(["inventory", "pricing", "product"]),
        id: Schema.String,
        livemode: Schema.Boolean,
        metadata: Schema.Record(Schema.String, Schema.String),
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
      }),
    ),
    next_page_url: Schema.NullOr(Schema.String),
    previous_page_url: Schema.NullOr(Schema.String),
  });
export type GetV2CommerceProductCatalogImportsOutput =
  typeof GetV2CommerceProductCatalogImportsOutput.Type;

// The operation
/**
 * List Product Catalog Imports
 *
 * Returns a list of ProductCatalogImport objects.
 *
 * @param created - Filter for objects created at the specified timestamp.
Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
 * @param created_gt - Filter for objects created after the specified timestamp.
Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
 * @param created_gte - Filter for objects created on or after the specified timestamp.
Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
 * @param created_lt - Filter for objects created before the specified timestamp.
Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
 * @param created_lte - Filter for objects created on or before the specified timestamp.
Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
 * @param feed_type - Filter by the type of feed data being imported.
 * @param limit - The maximum number of results per page.
 * @param status - Filter by import status.
 */
export const GetV2CommerceProductCatalogImports =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetV2CommerceProductCatalogImportsInput,
    outputSchema: GetV2CommerceProductCatalogImportsOutput,
  }));
