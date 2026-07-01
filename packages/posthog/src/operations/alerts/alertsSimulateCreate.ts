import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface AlertsSimulateCreateInput {
  project_id: string;
  insight?: number;
  detector_config?:
    | {
        detectors?: (
          | {
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              threshold?: number | null;
              type?: string;
              window?: number | null;
            }
          | {
              multiplier?: number | null;
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              type?: string;
              window?: number | null;
            }
          | {
              lower_bound?: number | null;
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              type?: string;
              upper_bound?: number | null;
            }
          | {
              n_estimators?: number | null;
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              threshold?: number | null;
              type?: string;
              window?: number | null;
            }
          | {
              method?: "largest" | "mean" | "median" | null;
              n_neighbors?: number | null;
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              threshold?: number | null;
              type?: string;
              window?: number | null;
            }
          | {
              n_bins?: number | null;
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              threshold?: number | null;
              type?: string;
              window?: number | null;
            }
          | {
              n_neighbors?: number | null;
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              threshold?: number | null;
              type?: string;
              window?: number | null;
            }
          | {
              kernel?: string | null;
              nu?: number | null;
              preprocessing?: {
                diffs_n?: number | null;
                lags_n?: number | null;
                smooth_n?: number | null;
              } | null;
              threshold?: number | null;
              type?: string;
              window?: number | null;
            }
        )[];
        operator?: "and" | "or";
        type?: string;
      }
    | {
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        threshold?: number | null;
        type?: string;
        window?: number | null;
      }
    | {
        multiplier?: number | null;
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        type?: string;
        window?: number | null;
      }
    | {
        lower_bound?: number | null;
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        type?: string;
        upper_bound?: number | null;
      }
    | {
        n_estimators?: number | null;
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        threshold?: number | null;
        type?: string;
        window?: number | null;
      }
    | {
        method?: "largest" | "mean" | "median" | null;
        n_neighbors?: number | null;
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        threshold?: number | null;
        type?: string;
        window?: number | null;
      }
    | {
        n_bins?: number | null;
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        threshold?: number | null;
        type?: string;
        window?: number | null;
      }
    | {
        n_neighbors?: number | null;
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        threshold?: number | null;
        type?: string;
        window?: number | null;
      }
    | {
        kernel?: string | null;
        nu?: number | null;
        preprocessing?: {
          diffs_n?: number | null;
          lags_n?: number | null;
          smooth_n?: number | null;
        } | null;
        threshold?: number | null;
        type?: string;
        window?: number | null;
      };
  series_index?: number;
  date_from?: string | null;
  config?:
    | {
        check_ongoing_interval?: boolean | null;
        series_index?: number;
        type?: string;
      }
    | {
        column?: string | null;
        evaluation: "last_row" | "first_row" | "any_row";
        label_column?: string | null;
        type?: string;
      }
    | {
        funnel_step?: number | null;
        metric: "conversion_from_start" | "conversion_from_previous";
        type?: string;
      }
    | null;
}
export const AlertsSimulateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    insight: Schema.optional(Schema.Number),
    detector_config: Schema.optional(Schema.Unknown),
    series_index: Schema.optional(Schema.Number),
    date_from: Schema.optional(Schema.NullOr(Schema.String)),
    config: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Struct({
            check_ongoing_interval: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            series_index: Schema.optional(Schema.Number),
            type: Schema.optional(Schema.String),
          }),
          Schema.Struct({
            column: Schema.optional(Schema.NullOr(Schema.String)),
            evaluation: Schema.Literals(["last_row", "first_row", "any_row"]),
            label_column: Schema.optional(Schema.NullOr(Schema.String)),
            type: Schema.optional(Schema.String),
          }),
          Schema.Struct({
            funnel_step: Schema.optional(Schema.NullOr(Schema.Number)),
            metric: Schema.Literals([
              "conversion_from_start",
              "conversion_from_previous",
            ]),
            type: Schema.optional(Schema.String),
          }),
        ]),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/alerts/simulate/",
    }),
  ) as unknown as Schema.Codec<AlertsSimulateCreateInput>;

// Output Schema
export interface AlertsSimulateCreateOutput {
  data?: number[];
  dates?: string[];
  scores?: (number | null)[];
  triggered_indices?: number[];
  triggered_dates?: string[];
  interval?: string | null;
  total_points?: number;
  anomaly_count?: number;
  sub_detector_scores?: Record<string, unknown>[];
  breakdown_results?: {
    label?: string;
    data?: number[];
    dates?: string[];
    scores?: (number | null)[];
    triggered_indices?: number[];
    triggered_dates?: string[];
    total_points?: number;
    anomaly_count?: number;
    sub_detector_scores?: Record<string, unknown>[];
  }[];
}
export const AlertsSimulateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.Array(Schema.Number)),
    dates: Schema.optional(Schema.Array(Schema.String)),
    scores: Schema.optional(Schema.Array(Schema.NullOr(Schema.Number))),
    triggered_indices: Schema.optional(Schema.Array(Schema.Number)),
    triggered_dates: Schema.optional(Schema.Array(Schema.String)),
    interval: Schema.optional(Schema.NullOr(Schema.String)),
    total_points: Schema.optional(Schema.Number),
    anomaly_count: Schema.optional(Schema.Number),
    sub_detector_scores: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    breakdown_results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          label: Schema.optional(Schema.String),
          data: Schema.optional(Schema.Array(Schema.Number)),
          dates: Schema.optional(Schema.Array(Schema.String)),
          scores: Schema.optional(Schema.Array(Schema.NullOr(Schema.Number))),
          triggered_indices: Schema.optional(Schema.Array(Schema.Number)),
          triggered_dates: Schema.optional(Schema.Array(Schema.String)),
          total_points: Schema.optional(Schema.Number),
          anomaly_count: Schema.optional(Schema.Number),
          sub_detector_scores: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AlertsSimulateCreateOutput>;

// The operation
/**
 * Simulate a detector on an insight's historical data. Read-only — no AlertCheck records are created.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const alertsSimulateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AlertsSimulateCreateInput,
    outputSchema: AlertsSimulateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
