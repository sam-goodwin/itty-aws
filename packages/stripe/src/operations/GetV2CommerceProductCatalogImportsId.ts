import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV2CommerceProductCatalogImportsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/commerce/product_catalog/imports/{id}",
    }),
  );
export type GetV2CommerceProductCatalogImportsIdInput =
  typeof GetV2CommerceProductCatalogImportsIdInput.Type;

// Output Schema
export const GetV2CommerceProductCatalogImportsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type GetV2CommerceProductCatalogImportsIdOutput =
  typeof GetV2CommerceProductCatalogImportsIdOutput.Type;

// The operation
/**
 * Retrieve a Product Catalog Import
 *
 * Retrieves a ProductCatalogImport by ID.
 *
 * @param id - The ID of the ProductCatalogImport to retrieve.
 */
export const GetV2CommerceProductCatalogImportsId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetV2CommerceProductCatalogImportsIdInput,
    outputSchema: GetV2CommerceProductCatalogImportsIdOutput,
  }));
