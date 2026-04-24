import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const GetDatasetTagsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset: Schema.String.pipe(T.PathParam()),
  start: Schema.String,
  end: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/query/metrics/info/datasets/{dataset}/tags",
  }),
);
export type GetDatasetTagsInput = typeof GetDatasetTagsInput.Type;

// Output Schema
export const GetDatasetTagsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
);
export type GetDatasetTagsOutput = typeof GetDatasetTagsOutput.Type;

// The operation
/**
 *
 * @param dataset - The dataset to retrieve tags from
 * @param start - Start time for timeframe to return (RFC3339 format)
 * @param end - End time for timeframe to return (RFC3339 format)
 */
export const getDatasetTags = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetTagsInput,
  outputSchema: GetDatasetTagsOutput,
  errors: [NotFound] as const,
}));
