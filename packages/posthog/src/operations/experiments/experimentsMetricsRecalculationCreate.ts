import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ExperimentsMetricsRecalculationCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    trigger: Schema.optional(
      Schema.Literals([
        "manual",
        "cold_run",
        "stale_refresh",
        "auto_refresh",
        "config_change",
        "experiment_launch",
        "experiment_stop",
        "experiment_update",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/experiments/{id}/metrics_recalculation/",
    }),
  );
export type ExperimentsMetricsRecalculationCreateInput =
  typeof ExperimentsMetricsRecalculationCreateInput.Type;

// Output Schema
export const ExperimentsMetricsRecalculationCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    experiment_id: Schema.Number,
    status: Schema.Literals(["pending", "in_progress", "completed", "failed"]),
    total_metrics: Schema.Number,
    completed_metrics: Schema.Number,
    failed_metrics: Schema.Number,
    metric_errors: Schema.Unknown,
    trigger: Schema.Literals([
      "manual",
      "cold_run",
      "stale_refresh",
      "auto_refresh",
      "config_change",
      "experiment_launch",
      "experiment_stop",
      "experiment_update",
    ]),
    created_at: Schema.String,
    started_at: Schema.NullOr(Schema.String),
    completed_at: Schema.NullOr(Schema.String),
    query_to: Schema.NullOr(Schema.String),
    is_existing: Schema.Boolean,
    result_source: Schema.Literals(["recalculation", "timeseries_fallback"]),
    results: Schema.Array(
      Schema.Struct({
        metric_uuid: Schema.String,
        status: Schema.Literals(["pending", "completed", "failed"]),
        result: Schema.Unknown,
        error_message: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type ExperimentsMetricsRecalculationCreateOutput =
  typeof ExperimentsMetricsRecalculationCreateOutput.Type;

// The operation
/**
 * Trigger a batch recalculation of all metrics for this experiment.
 * Returns 201 with the new pending recalculation, or 200 with the active one if a recalculation is
 * already pending or in progress for this experiment. The response payload intentionally does not
 * include the `results` array — at POST time the workflow has just been queued and no per-metric
 * results exist yet. Clients should poll `GET metrics_recalculation/{id}/` for results as the workflow
 * progresses.
 *
 * @param id - A unique integer value identifying this experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsMetricsRecalculationCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsMetricsRecalculationCreateInput,
    outputSchema: ExperimentsMetricsRecalculationCreateOutput,
  }));
