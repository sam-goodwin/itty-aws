import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProductToursDraftStatusRetrieveInput {
  id: string;
  project_id: string;
}
export const ProductToursDraftStatusRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/product_tours/{id}/draft_status/",
    }),
  ) as unknown as Schema.Codec<ProductToursDraftStatusRetrieveInput>;

// Output Schema
export interface ProductToursDraftStatusRetrieveOutput {
  updated_at?: string;
  has_draft?: boolean;
}
export const ProductToursDraftStatusRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updated_at: Schema.optional(Schema.String),
    has_draft: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ProductToursDraftStatusRetrieveOutput>;

// The operation
/**
 * Lightweight polling endpoint for draft change detection.
 *
 * @param id - A UUID string identifying this product tour.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const productToursDraftStatusRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductToursDraftStatusRetrieveInput,
    outputSchema: ProductToursDraftStatusRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
