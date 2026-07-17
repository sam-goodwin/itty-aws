import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteProductsProductFeaturesIdInput {
  id: string;
  product: string;
}
export const DeleteProductsProductFeaturesIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    product: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/products/{product}/features/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteProductsProductFeaturesIdInput>;

// Output Schema
export interface DeleteProductsProductFeaturesIdOutput {
  deleted: true;
  id: string;
  object: "product_feature";
}
export const DeleteProductsProductFeaturesIdOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["product_feature"]),
  }) as unknown as Schema.Codec<DeleteProductsProductFeaturesIdOutput>;

// The operation
/**
 * Remove a feature from a product
 *
 * <p>Deletes the feature attachment to a product</p>
 */
export const DeleteProductsProductFeaturesId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteProductsProductFeaturesIdInput,
    outputSchema: DeleteProductsProductFeaturesIdOutput,
  }));
