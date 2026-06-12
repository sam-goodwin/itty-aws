import * as Schema from "effect/Schema";
import { entitlements_featureSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
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
  );
export type PostProductsProductFeaturesInput =
  typeof PostProductsProductFeaturesInput.Type;

// Output Schema
export const PostProductsProductFeaturesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entitlement_feature: Schema.suspend(() => entitlements_featureSchema),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["product_feature"]),
  });
export type PostProductsProductFeaturesOutput =
  typeof PostProductsProductFeaturesOutput.Type;

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
