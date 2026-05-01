import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HeatmapsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/heatmaps/" }),
);
export type HeatmapsListInput = typeof HeatmapsListInput.Type;

// Output Schema
export const HeatmapsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        results: Schema.optional(
          Schema.Array(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
              pointer_y: Schema.optional(Schema.Number),
              pointer_relative_x: Schema.optional(Schema.Number),
              pointer_target_fixed: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
  ),
});
export type HeatmapsListOutput = typeof HeatmapsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const heatmapsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HeatmapsListInput,
  outputSchema: HeatmapsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
