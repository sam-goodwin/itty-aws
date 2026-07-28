import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MetricslimitsInput {}
export const MetricslimitsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v1/metrics/limits" }),
) as unknown as Schema.Codec<MetricslimitsInput>;

// Output Schema
export interface MetricslimitsOutput {
  min_date: string;
  intervals: {
    hour: { min_days: number; max_days: number };
    day: { min_days: number; max_days: number };
    week: { min_days: number; max_days: number };
    month: { min_days: number; max_days: number };
    year: { min_days: number; max_days: number };
  };
}
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
}) as unknown as Schema.Codec<MetricslimitsOutput>;

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
