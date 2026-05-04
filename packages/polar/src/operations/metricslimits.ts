import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const MetricslimitsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/metrics/limits" }));
export type MetricslimitsInput = typeof MetricslimitsInput.Type;

// Output Schema
export const MetricslimitsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  min_date: Schema.String,
  intervals: Schema.Struct({
    hour: Schema.Struct({
      min_days: Schema.Number,
      max_days: Schema.Number,
    }),
    day: Schema.Struct({
      min_days: Schema.Number,
      max_days: Schema.Number,
    }),
    week: Schema.Struct({
      min_days: Schema.Number,
      max_days: Schema.Number,
    }),
    month: Schema.Struct({
      min_days: Schema.Number,
      max_days: Schema.Number,
    }),
    year: Schema.Struct({
      min_days: Schema.Number,
      max_days: Schema.Number,
    }),
  }),
});
export type MetricslimitsOutput = typeof MetricslimitsOutput.Type;

// The operation
/**
 * Get Metrics Limits
 *
 * Get the interval limits for the metrics endpoint.
 * **Scopes**: `metrics:read`
 */
export const metricslimits = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MetricslimitsInput,
  outputSchema: MetricslimitsOutput,
}));
