import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExperimentSavedMetricsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/experiment_saved_metrics/{id}/",
    }),
  );
export type ExperimentSavedMetricsDestroyInput =
  typeof ExperimentSavedMetricsDestroyInput.Type;

// Output Schema
export const ExperimentSavedMetricsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExperimentSavedMetricsDestroyOutput =
  typeof ExperimentSavedMetricsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this experiment saved metric.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentSavedMetricsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExperimentSavedMetricsDestroyInput,
    outputSchema: ExperimentSavedMetricsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
