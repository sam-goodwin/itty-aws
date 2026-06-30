import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ExperimentsCalculateRunningTimeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    baseline_stats: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/experiments/calculate_running_time/",
    }),
  );
export type ExperimentsCalculateRunningTimeCreateInput =
  typeof ExperimentsCalculateRunningTimeCreateInput.Type;

// Output Schema
export const ExperimentsCalculateRunningTimeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseline_value: Schema.NullOr(Schema.Number),
    variance: Schema.NullOr(Schema.Number),
    recommended_sample_size: Schema.NullOr(Schema.Number),
    recommended_running_time_days: Schema.NullOr(Schema.Number),
  });
export type ExperimentsCalculateRunningTimeCreateOutput =
  typeof ExperimentsCalculateRunningTimeCreateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsCalculateRunningTimeCreateInput,
    outputSchema: ExperimentsCalculateRunningTimeCreateOutput,
  }));
