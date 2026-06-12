import * as Schema from "effect/Schema";
import { HogFlowMinimalSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  updated_at: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/hog_flows/" }),
);
export type HogFlowsListInput = typeof HogFlowsListInput.Type;

// Output Schema
export const HogFlowsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => HogFlowMinimalSchema)),
  ),
});
export type HogFlowsListOutput = typeof HogFlowsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFlowsListInput,
  outputSchema: HogFlowsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
