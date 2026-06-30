import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightVariablesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/insight_variables/{id}/",
    }),
  );
export type InsightVariablesDestroyInput =
  typeof InsightVariablesDestroyInput.Type;

// Output Schema
export const InsightVariablesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InsightVariablesDestroyOutput =
  typeof InsightVariablesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this insight variable.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightVariablesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightVariablesDestroyInput,
    outputSchema: InsightVariablesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
