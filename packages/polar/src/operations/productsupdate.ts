import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ProductsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  trial_interval: Schema.optional(
    Schema.NullOr(Schema.Literals(["day", "week", "month", "year"])),
  ),
  trial_interval_count: Schema.optional(Schema.NullOr(Schema.Number)),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  recurring_interval: Schema.optional(
    Schema.NullOr(Schema.Literals(["day", "week", "month", "year"])),
  ),
  recurring_interval_count: Schema.optional(Schema.NullOr(Schema.Number)),
  is_archived: Schema.optional(Schema.NullOr(Schema.Boolean)),
  visibility: Schema.optional(
    Schema.NullOr(Schema.Literals(["draft", "private", "public"])),
  ),
  prices: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  medias: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  attached_custom_fields: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          custom_field_id: Schema.String,
          required: Schema.Boolean,
        }),
      ),
    ),
  ),
}).pipe(T.Http({ method: "PATCH", path: "/v1/products/{id}" }));
export type ProductsupdateInput = typeof ProductsupdateInput.Type;

// Output Schema
export const ProductsupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  created_at: Schema.String,
  modified_at: Schema.NullOr(Schema.String),
  trial_interval: Schema.NullOr(
    Schema.Literals(["day", "week", "month", "year"]),
  ),
  trial_interval_count: Schema.NullOr(Schema.Number),
  name: Schema.String,
  description: Schema.NullOr(Schema.String),
  visibility: Schema.Literals(["draft", "private", "public"]),
  recurring_interval: Schema.NullOr(
    Schema.Literals(["day", "week", "month", "year"]),
  ),
  recurring_interval_count: Schema.NullOr(Schema.Number),
  is_recurring: Schema.Boolean,
  is_archived: Schema.Boolean,
  organization_id: Schema.String,
  metadata: Schema.Record(Schema.String, Schema.Unknown),
  prices: Schema.Array(Schema.Unknown),
  benefits: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
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
      storage_version: Schema.NullOr(Schema.String),
      checksum_etag: Schema.NullOr(Schema.String),
      checksum_sha256_base64: Schema.NullOr(Schema.String),
      checksum_sha256_hex: Schema.NullOr(Schema.String),
      last_modified_at: Schema.NullOr(Schema.String),
      version: Schema.NullOr(Schema.String),
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
      custom_field: Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        metadata: Schema.Record(Schema.String, Schema.Unknown),
        type: Schema.Literals(["text", "number", "date", "checkbox", "select"]),
        slug: Schema.String,
        name: Schema.String,
        organization_id: Schema.String,
        properties: Schema.Record(Schema.String, Schema.Unknown),
      }),
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
