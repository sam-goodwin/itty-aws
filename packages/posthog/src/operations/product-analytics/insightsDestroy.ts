import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const InsightsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/insights/{id}/",
  }),
);
export type InsightsDestroyInput = typeof InsightsDestroyInput.Type;

// Output Schema
export const InsightsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InsightsDestroyOutput = typeof InsightsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - Numeric primary key or 8-character `short_id` (for example `AaVQ8Ijw`) identifying the insight.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InsightsDestroyInput,
  outputSchema: InsightsDestroyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
