import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProductToursGenerateCreateInput {
  id: string;
  project_id: string;
  title?: string;
  goal?: string;
  steps?: Record<string, unknown>[];
}
export const ProductToursGenerateCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ProductToursGenerateCreateInput>;

// Output Schema
export interface ProductToursGenerateCreateOutput {
  steps?: { step_id?: string; title?: string; description?: string }[];
}
export const ProductToursGenerateCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    steps: Schema.optional(
      Schema.Array(
        Schema.Struct({
          step_id: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProductToursGenerateCreateOutput>;

// The operation
/**
 * Generate tour step content using AI.
 *
 * @param id - A UUID string identifying this product tour.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const productToursGenerateCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductToursGenerateCreateInput,
  outputSchema: ProductToursGenerateCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
