import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ProductslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  is_archived: Schema.optional(Schema.Boolean),
  is_recurring: Schema.optional(Schema.Boolean),
  benefit_id: Schema.optional(Schema.String),
  visibility: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/products/" }));
export type ProductslistInput = typeof ProductslistInput.Type;

// Output Schema
export const ProductslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
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
            type: Schema.Literals([
              "text",
              "number",
              "date",
              "checkbox",
              "select",
            ]),
            slug: Schema.String,
            name: Schema.String,
            organization_id: Schema.String,
            properties: Schema.Record(Schema.String, Schema.Unknown),
          }),
          order: Schema.Number,
          required: Schema.Boolean,
        }),
      ),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type ProductslistOutput = typeof ProductslistOutput.Type;

// The operation
/**
 * List Products
 *
 * List products.
 * **Scopes**: `products:read` `products:write`
 *
 * @param id - Filter by product ID.
 * @param organization_id - Filter by organization ID.
 * @param query - Filter by product name.
 * @param is_archived - Filter on archived products.
 * @param is_recurring - Filter on recurring products. If `true`, only subscriptions tiers are returned. If `false`, only one-time purchase products are returned.
 * @param benefit_id - Filter products granting specific benefit.
 * @param visibility - Filter by visibility.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const productslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductslistInput,
  outputSchema: ProductslistOutput,
  errors: [UnprocessableEntity] as const,
}));
