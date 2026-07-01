import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MetricsCharacterizeCreateInput {
  project_id: string;
  query: {
    metricName: string;
    anomalyFrom: string;
    anomalyTo?: string;
    baselineFrom?: string;
    baselineTo?: string;
    aggregation?:
      | "sum"
      | "avg"
      | "count"
      | "p95"
      | "rate"
      | "increase"
      | "histogram_quantile"
      | null;
    quantile?: number | null;
    filters?: {
      key: string;
      op?: "eq" | "neq" | "regex" | "not_regex";
      value: string;
      scope?: "resource" | "attribute" | "auto";
    }[];
    candidateKeys?: string[];
  };
}
export const MetricsCharacterizeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      metricName: Schema.String,
      anomalyFrom: Schema.String,
      anomalyTo: Schema.optional(Schema.String),
      baselineFrom: Schema.optional(Schema.String),
      baselineTo: Schema.optional(Schema.String),
      aggregation: Schema.optional(
        Schema.NullOr(
          Schema.Literals([
            "sum",
            "avg",
            "count",
            "p95",
            "rate",
            "increase",
            "histogram_quantile",
          ]),
        ),
      ),
      quantile: Schema.optional(Schema.NullOr(Schema.Number)),
      filters: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            op: Schema.optional(
              Schema.Literals(["eq", "neq", "regex", "not_regex"]),
            ),
            value: Schema.String,
            scope: Schema.optional(
              Schema.Literals(["resource", "attribute", "auto"]),
            ),
          }),
        ),
      ),
      candidateKeys: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/metrics/characterize/",
    }),
  ) as unknown as Schema.Codec<MetricsCharacterizeCreateInput>;

// Output Schema
export interface MetricsCharacterizeCreateOutput {
  metric_name: string;
  aggregation: string;
  interval: string;
  baseline_from: string;
  baseline_to: string;
  anomaly_from: string;
  anomaly_to: string;
  baseline_mean: number;
  baseline_stddev: number;
  anomaly_mean: number;
  anomaly_peak: number;
  change_ratio: number;
  direction: "up" | "down" | "flat";
  onset_time: string | null;
  top_movers: {
    key: string;
    label: string;
    baseline_value: number;
    anomaly_value: number;
    change_ratio: number;
  }[];
  series: {
    labels: Record<string, string>;
    points: { time: string; value: number }[];
    metric_name?: string | null;
    clause?: string | null;
  };
}
export const MetricsCharacterizeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metric_name: Schema.String,
    aggregation: Schema.String,
    interval: Schema.String,
    baseline_from: Schema.String,
    baseline_to: Schema.String,
    anomaly_from: Schema.String,
    anomaly_to: Schema.String,
    baseline_mean: Schema.Number,
    baseline_stddev: Schema.Number,
    anomaly_mean: Schema.Number,
    anomaly_peak: Schema.Number,
    change_ratio: Schema.Number,
    direction: Schema.Literals(["up", "down", "flat"]),
    onset_time: Schema.NullOr(Schema.String),
    top_movers: Schema.Array(
      Schema.Struct({
        key: Schema.String,
        label: Schema.String,
        baseline_value: Schema.Number,
        anomaly_value: Schema.Number,
        change_ratio: Schema.Number,
      }),
    ),
    series: Schema.Struct({
      labels: Schema.Record(Schema.String, Schema.String),
      points: Schema.Array(
        Schema.Struct({
          time: Schema.String,
          value: Schema.Number,
        }),
      ),
      metric_name: Schema.optional(Schema.NullOr(Schema.String)),
      clause: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  }) as unknown as Schema.Codec<MetricsCharacterizeCreateOutput>;

// The operation
/**
 * Characterize a metric anomaly: compare an anomaly window against a
 * baseline, find the onset, and rank which label values moved.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const metricsCharacterizeCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsCharacterizeCreateInput,
    outputSchema: MetricsCharacterizeCreateOutput,
  }),
);
