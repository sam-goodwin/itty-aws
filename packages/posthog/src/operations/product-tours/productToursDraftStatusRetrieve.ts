import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ProductToursDraftStatusRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/product_tours/{id}/draft_status/",
    }),
  );
export type ProductToursDraftStatusRetrieveInput =
  typeof ProductToursDraftStatusRetrieveInput.Type;

// Output Schema
export const ProductToursDraftStatusRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updated_at: Schema.String,
    has_draft: Schema.Boolean,
  });
export type ProductToursDraftStatusRetrieveOutput =
  typeof ProductToursDraftStatusRetrieveOutput.Type;

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
