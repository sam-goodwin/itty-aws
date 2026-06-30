import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostProductsProductFeaturesInput {
  product: string;
  entitlement_feature: string;
  expand?: string[];
}
export const PostProductsProductFeaturesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.String.pipe(T.PathParam()),
    entitlement_feature: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/products/{product}/features",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostProductsProductFeaturesInput>;

// Output Schema
export interface PostProductsProductFeaturesOutput {
  entitlement_feature: {
    active: boolean;
    id: string;
    livemode: boolean;
    lookup_key: string;
    metadata: Record<string, string>;
    name: string;
    object: "entitlements.feature";
  };
  id: string;
  livemode: boolean;
  object: "product_feature";
}
export const PostProductsProductFeaturesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entitlement_feature: Schema.Struct({
      active: Schema.Boolean,
      id: Schema.String,
      livemode: Schema.Boolean,
      lookup_key: Schema.String,
      metadata: Schema.Record(Schema.String, Schema.String),
      name: Schema.String,
      object: Schema.Literals(["entitlements.feature"]),
    }),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["product_feature"]),
  }) as unknown as Schema.Codec<PostProductsProductFeaturesOutput>;

// The operation
/**
 * Attach a feature to a product
 *
 * <p>Creates a product_feature, which represents a feature attachment to a product</p>
 */
export const PostProductsProductFeatures = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostProductsProductFeaturesInput,
    outputSchema: PostProductsProductFeaturesOutput,
  }),
);
