import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ExperimentsMetricsRecalculationCreateInput {
  id: number;
  project_id: string;
  trigger?:
    | "manual"
    | "cold_run"
    | "stale_refresh"
    | "auto_refresh"
    | "config_change"
    | "experiment_launch"
    | "experiment_stop"
    | "experiment_update";
}
export const ExperimentsMetricsRecalculationCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ExperimentsMetricsRecalculationCreateInput>;

// Output Schema
export interface ExperimentsMetricsRecalculationCreateOutput {
  id: string;
  experiment_id: number;
  status: "pending" | "in_progress" | "completed" | "failed";
  total_metrics: number;
  completed_metrics: number;
  failed_metrics: number;
  metric_errors: unknown;
  trigger:
    | "manual"
    | "cold_run"
    | "stale_refresh"
    | "auto_refresh"
    | "config_change"
    | "experiment_launch"
    | "experiment_stop"
    | "experiment_update";
  created_at: string;
  started_at: string | null;
  completed_at: string | null;
  query_to: string | null;
  is_existing: boolean;
  result_source: "recalculation" | "timeseries_fallback";
  results: {
    metric_uuid: string;
    status: "pending" | "completed" | "failed";
    result: unknown;
    error_message: string | null;
  }[];
}
export const ExperimentsMetricsRecalculationCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ExperimentsMetricsRecalculationCreateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsMetricsRecalculationCreateInput,
    outputSchema: ExperimentsMetricsRecalculationCreateOutput,
  }));
