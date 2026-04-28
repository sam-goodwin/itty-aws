import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExperimentHoldoutsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/experiment_holdouts/{id}/",
    }),
  );
export type ExperimentHoldoutsDestroyInput =
  typeof ExperimentHoldoutsDestroyInput.Type;

// Output Schema
export const ExperimentHoldoutsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExperimentHoldoutsDestroyOutput =
  typeof ExperimentHoldoutsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this experiment holdout.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentHoldoutsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExperimentHoldoutsDestroyInput,
    outputSchema: ExperimentHoldoutsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
