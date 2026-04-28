import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ProductToursGenerateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    title: Schema.optional(Schema.String),
    goal: Schema.optional(Schema.String),
    steps: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/product_tours/{id}/generate/",
    }),
  );
export type ProductToursGenerateCreateInput =
  typeof ProductToursGenerateCreateInput.Type;

// Output Schema
export const ProductToursGenerateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    steps: Schema.Array(
      Schema.Struct({
        step_id: Schema.String,
        title: Schema.String,
        description: Schema.String,
      }),
    ),
  });
export type ProductToursGenerateCreateOutput =
  typeof ProductToursGenerateCreateOutput.Type;

// The operation
/**
 * Generate tour step content using AI.
 *
 * @param id - A UUID string identifying this product tour.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const productToursGenerateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProductToursGenerateCreateInput,
    outputSchema: ProductToursGenerateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
