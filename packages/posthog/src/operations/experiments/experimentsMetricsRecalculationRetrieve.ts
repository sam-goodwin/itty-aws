import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface ExperimentsMetricsRecalculationRetrieveInput {
  id: number;
  project_id: string;
  recalculation_id: string;
}
export const ExperimentsMetricsRecalculationRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    recalculation_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/{id}/metrics_recalculation/{recalculation_id}/",
    }),
  ) as unknown as Schema.Codec<ExperimentsMetricsRecalculationRetrieveInput>;

// Output Schema
export interface ExperimentsMetricsRecalculationRetrieveOutput {
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
export const ExperimentsMetricsRecalculationRetrieveOutput =
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
  }) as unknown as Schema.Codec<ExperimentsMetricsRecalculationRetrieveOutput>;

// The operation
/**
 * Mixin for ViewSets to handle ApprovalRequired exceptions from decorated serializers.
 * This mixin intercepts ApprovalRequired exceptions raised by the @approval_gate decorator
 * on serializer methods and converts them into proper HTTP 409 Conflict responses with
 * change request details.
 *
 * @param id - A unique integer value identifying this experiment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsMetricsRecalculationRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsMetricsRecalculationRetrieveInput,
    outputSchema: ExperimentsMetricsRecalculationRetrieveOutput,
    errors: [NotFound] as const,
  }));
