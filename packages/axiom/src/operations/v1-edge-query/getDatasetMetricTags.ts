import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const GetDatasetMetricTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String.pipe(T.PathParam()),
    metric: Schema.String.pipe(T.PathParam()),
    start: Schema.String,
    end: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/query/metrics/info/datasets/{dataset}/metrics/{metric}/tags",
    }),
  );
export type GetDatasetMetricTagsInput = typeof GetDatasetMetricTagsInput.Type;

// Output Schema
export const GetDatasetMetricTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.String);
export type GetDatasetMetricTagsOutput = typeof GetDatasetMetricTagsOutput.Type;

// The operation
/**
 *
 * @param dataset - The dataset to retrieve metric tags from
 * @param metric - The metric name to retrieve tags for
 * @param start - Start time for timeframe to return (RFC3339 format)
 * @param end - End time for timeframe to return (RFC3339 format)
 */
export const getDatasetMetricTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDatasetMetricTagsInput,
    outputSchema: GetDatasetMetricTagsOutput,
    errors: [NotFound] as const,
  }),
);
