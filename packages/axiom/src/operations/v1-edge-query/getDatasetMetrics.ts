import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const GetDatasetMetricsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    dataset: Schema.String.pipe(T.PathParam()),
    start: Schema.String,
    end: Schema.String,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/v1/query/metrics/info/datasets/{dataset}/metrics",
  }),
);
export type GetDatasetMetricsInput = typeof GetDatasetMetricsInput.Type;

// Output Schema
export const GetDatasetMetricsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Struct({
      temporality: Schema.String,
      type: Schema.String,
      unit: Schema.String,
    }),
  );
export type GetDatasetMetricsOutput = typeof GetDatasetMetricsOutput.Type;

// The operation
/**
 *
 * @param dataset - The dataset to retrieve metrics from
 * @param start - Start time for timeframe to return (RFC3339 format)
 * @param end - End time for timeframe to return (RFC3339 format)
 */
export const getDatasetMetrics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetMetricsInput,
  outputSchema: GetDatasetMetricsOutput,
  errors: [NotFound] as const,
}));
