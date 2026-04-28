import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const CohortsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/cohorts/{id}/",
  }),
);
export type CohortsDestroyInput = typeof CohortsDestroyInput.Type;

// Output Schema
export const CohortsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CohortsDestroyOutput = typeof CohortsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CohortsDestroyInput,
  outputSchema: CohortsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
