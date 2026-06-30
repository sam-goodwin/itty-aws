import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightVariablesDestroyInput {
  id: string;
  project_id: string;
}
export const InsightVariablesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/insight_variables/{id}/",
    }),
  ) as unknown as Schema.Codec<InsightVariablesDestroyInput>;

// Output Schema
export type InsightVariablesDestroyOutput = void;
export const InsightVariablesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InsightVariablesDestroyOutput>;

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
