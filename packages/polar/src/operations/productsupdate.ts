import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ProductsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  trial_interval: Schema.optional(Schema.Unknown),
  trial_interval_count: Schema.optional(Schema.Unknown),
  name: Schema.optional(Schema.Unknown),
  description: Schema.optional(Schema.Unknown),
  recurring_interval: Schema.optional(Schema.Unknown),
  recurring_interval_count: Schema.optional(Schema.Unknown),
  is_archived: Schema.optional(Schema.Unknown),
  visibility: Schema.optional(Schema.Unknown),
  prices: Schema.optional(Schema.Unknown),
  medias: Schema.optional(Schema.Unknown),
  attached_custom_fields: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/v1/products/{id}" }));
export type ProductsupdateInput = typeof ProductsupdateInput.Type;

// Output Schema
export const ProductsupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  benefits: Schema.Array(Schema.Unknown),
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
      service: Schema.String,
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
export type ProductsupdateOutput = typeof ProductsupdateOutput.Type;

// The operation
/**
 * Update Product
 *
 * Update a product.
 * **Scopes**: `products:write`
 */
export const productsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductsupdateInput,
  outputSchema: ProductsupdateOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
