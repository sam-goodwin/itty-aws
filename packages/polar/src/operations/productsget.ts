import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ProductsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/products/{id}" }));
export type ProductsgetInput = typeof ProductsgetInput.Type;

// Output Schema
export const ProductsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ProductsgetOutput = typeof ProductsgetOutput.Type;

// The operation
/**
 * Get Product
 *
 * Get a product by ID.
 * **Scopes**: `products:read` `products:write`
 */
export const productsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductsgetInput,
  outputSchema: ProductsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
