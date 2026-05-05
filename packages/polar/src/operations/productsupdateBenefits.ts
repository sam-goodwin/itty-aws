import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ProductsupdateBenefitsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    benefits: Schema.Array(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v1/products/{id}/benefits" }));
export type ProductsupdateBenefitsInput =
  typeof ProductsupdateBenefitsInput.Type;

// Output Schema
export const ProductsupdateBenefitsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    trial_interval: Schema.Unknown,
    trial_interval_count: Schema.Unknown,
    name: Schema.String,
    description: Schema.Unknown,
    visibility: Schema.Literals(["draft", "private", "public"]),
    recurring_interval: Schema.Unknown,
    recurring_interval_count: Schema.Unknown,
    is_recurring: Schema.Boolean,
    is_archived: Schema.Boolean,
    organization_id: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.Unknown),
    prices: Schema.Array(Schema.Unknown),
    benefits: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        type: Schema.Literals([
          "custom",
          "discord",
          "github_repository",
          "downloadables",
          "license_keys",
          "meter_credit",
          "feature_flag",
        ]),
        description: Schema.String,
        selectable: Schema.Boolean,
        deletable: Schema.Boolean,
        is_deleted: Schema.Boolean,
        organization_id: Schema.String,
        metadata: Schema.Record(Schema.String, Schema.Unknown),
        properties: Schema.Record(Schema.String, Schema.Unknown),
      }),
    ),
    medias: Schema.Array(
      Schema.Struct({
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
        version: Schema.Unknown,
        service: Schema.Literal("product_media"),
        is_uploaded: Schema.Boolean,
        created_at: Schema.String,
        size_readable: Schema.String,
        public_url: Schema.String,
      }),
    ),
    attached_custom_fields: Schema.Array(
      Schema.Struct({
        custom_field_id: Schema.String,
        custom_field: Schema.Unknown,
        order: Schema.Number,
        required: Schema.Boolean,
      }),
    ),
  });
export type ProductsupdateBenefitsOutput =
  typeof ProductsupdateBenefitsOutput.Type;

// The operation
/**
 * Update Product Benefits
 *
 * Update benefits granted by a product.
 * **Scopes**: `products:write`
 */
export const productsupdateBenefits = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProductsupdateBenefitsInput,
    outputSchema: ProductsupdateBenefitsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
