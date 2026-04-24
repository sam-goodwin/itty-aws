import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const GetDatasetTagValuesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String.pipe(T.PathParam()),
    tag: Schema.String.pipe(T.PathParam()),
    start: Schema.String,
    end: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/query/metrics/info/datasets/{dataset}/tags/{tag}/values",
    }),
  );
export type GetDatasetTagValuesInput = typeof GetDatasetTagValuesInput.Type;

// Output Schema
export const GetDatasetTagValuesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.String);
export type GetDatasetTagValuesOutput = typeof GetDatasetTagValuesOutput.Type;

// The operation
/**
 *
 * @param dataset - The dataset to retrieve tag values from
 * @param tag - The tag name to retrieve values for
 * @param start - Start time for timeframe to return (RFC3339 format)
 * @param end - End time for timeframe to return (RFC3339 format)
 */
export const getDatasetTagValues = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetTagValuesInput,
  outputSchema: GetDatasetTagValuesOutput,
  errors: [NotFound] as const,
}));
