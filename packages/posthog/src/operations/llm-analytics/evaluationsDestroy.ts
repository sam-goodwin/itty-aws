import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EvaluationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/evaluations/{id}/",
    }),
  );
export type EvaluationsDestroyInput = typeof EvaluationsDestroyInput.Type;

// Output Schema
export const EvaluationsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EvaluationsDestroyOutput = typeof EvaluationsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this evaluation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const evaluationsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EvaluationsDestroyInput,
  outputSchema: EvaluationsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
