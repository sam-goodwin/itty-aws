import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProductToursDestroyInput {
  id: string;
  project_id: string;
}
export const ProductToursDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/product_tours/{id}/",
    }),
  ) as unknown as Schema.Codec<ProductToursDestroyInput>;

// Output Schema
export type ProductToursDestroyOutput = void;
export const ProductToursDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProductToursDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this product tour.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const productToursDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductToursDestroyInput,
  outputSchema: ProductToursDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
