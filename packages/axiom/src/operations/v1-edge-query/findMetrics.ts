import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const FindMetricsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.String.pipe(T.PathParam()),
  start: Schema.String,
  end: Schema.String,
  value: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/query/metrics/info/datasets/{dataset}/metrics",
  }),
);
export type FindMetricsInput = typeof FindMetricsInput.Type;

// Output Schema
export const FindMetricsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
);
export type FindMetricsOutput = typeof FindMetricsOutput.Type;

// The operation
/**
 *
 * @param dataset - The dataset to search for metrics in
 * @param start - Start time for timeframe to search (RFC3339 format)
 * @param end - End time for timeframe to search (RFC3339 format)
 */
export const findMetrics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FindMetricsInput,
  outputSchema: FindMetricsOutput,
  errors: [NotFound] as const,
}));
