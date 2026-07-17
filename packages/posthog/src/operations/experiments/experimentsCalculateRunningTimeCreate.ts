import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ExperimentsCalculateRunningTimeCreateInput {
  project_id: string;
  metric_type:
    | "funnel"
    | "mean_count"
    | "mean_sum_or_avg"
    | "ratio"
    | "retention";
  minimum_detectable_effect: number;
  number_of_variants?: number;
  exposure_rate_per_day?: number | null;
  baseline_value?: number | null;
  variance?: number | null;
  baseline_stats?: {
    number_of_samples: number;
    sum: number;
    sum_squares?: number;
    denominator_sum?: number | null;
    denominator_sum_squares?: number | null;
    numerator_denominator_sum_product?: number | null;
    step_counts?: number[];
  } | null;
}
export const ExperimentsCalculateRunningTimeCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    metric_type: Schema.Literals([
      "funnel",
      "mean_count",
      "mean_sum_or_avg",
      "ratio",
      "retention",
    ]),
    minimum_detectable_effect: Schema.Number,
    number_of_variants: Schema.optional(Schema.Number),
    exposure_rate_per_day: Schema.optional(Schema.NullOr(Schema.Number)),
    baseline_value: Schema.optional(Schema.NullOr(Schema.Number)),
    variance: Schema.optional(Schema.NullOr(Schema.Number)),
    baseline_stats: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          number_of_samples: Schema.Number,
          sum: Schema.Number,
          sum_squares: Schema.optional(Schema.Number),
          denominator_sum: Schema.optional(Schema.NullOr(Schema.Number)),
          denominator_sum_squares: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          numerator_denominator_sum_product: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          step_counts: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/experiments/calculate_running_time/",
    }),
  ) as unknown as Schema.Codec<ExperimentsCalculateRunningTimeCreateInput>;

// Output Schema
export interface ExperimentsCalculateRunningTimeCreateOutput {
  baseline_value: number | null;
  variance: number | null;
  recommended_sample_size: number | null;
  recommended_running_time_days: number | null;
}
export const ExperimentsCalculateRunningTimeCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    baseline_value: Schema.NullOr(Schema.Number),
    variance: Schema.NullOr(Schema.Number),
    recommended_sample_size: Schema.NullOr(Schema.Number),
    recommended_running_time_days: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<ExperimentsCalculateRunningTimeCreateOutput>;

// The operation
/**
 * Estimate the recommended sample size and running time for an experiment.
 * Pure statistical calculation — does not read or write any experiment. Pass the metric type, a
 * minimum detectable effect, and either a baseline value or raw baseline statistics. When
 * `exposure_rate_per_day` is provided, the response also includes the estimated running time in days.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsCalculateRunningTimeCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsCalculateRunningTimeCreateInput,
    outputSchema: ExperimentsCalculateRunningTimeCreateOutput,
  }));
