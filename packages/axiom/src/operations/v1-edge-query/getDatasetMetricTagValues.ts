import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const GetDatasetMetricTagValuesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String.pipe(T.PathParam()),
    metric: Schema.String.pipe(T.PathParam()),
    tag: Schema.String.pipe(T.PathParam()),
    start: Schema.String,
    end: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/query/metrics/info/datasets/{dataset}/metrics/{metric}/tags/{tag}/values",
    }),
  );
export type GetDatasetMetricTagValuesInput =
  typeof GetDatasetMetricTagValuesInput.Type;

// Output Schema
export const GetDatasetMetricTagValuesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.String);
export type GetDatasetMetricTagValuesOutput =
  typeof GetDatasetMetricTagValuesOutput.Type;

// The operation
/**
 *
 * @param dataset - The dataset to retrieve metric tag values from
 * @param metric - The metric name to retrieve tag values for
 * @param tag - The tag name to retrieve values for
 * @param start - Start time for timeframe to return (RFC3339 format)
 * @param end - End time for timeframe to return (RFC3339 format)
 */
export const getDatasetMetricTagValues = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDatasetMetricTagValuesInput,
    outputSchema: GetDatasetMetricTagValuesOutput,
    errors: [NotFound] as const,
  }),
);
