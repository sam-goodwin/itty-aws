import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteProductsIdInput {
  id: string;
}
export const DeleteProductsIdInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v1/products/{id}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<DeleteProductsIdInput>;

// Output Schema
export interface DeleteProductsIdOutput {
  deleted: true;
  id: string;
  object: "product";
}
export const DeleteProductsIdOutput = /*@__PURE__*/ Schema.Struct({
  deleted: Schema.Literals([true]),
  id: Schema.String,
  object: Schema.Literals(["product"]),
}) as unknown as Schema.Codec<DeleteProductsIdOutput>;

// The operation
/**
 * Delete a product
 *
 * <p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>
 */
export const DeleteProductsId = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteProductsIdInput,
  outputSchema: DeleteProductsIdOutput,
}));
