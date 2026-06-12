import * as Schema from "effect/Schema";
import { DatasetSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden } from "../../errors.ts";

// Input Schema
export const GetDatasetsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/datasets" }));
export type GetDatasetsInput = typeof GetDatasetsInput.Type;

// Output Schema
export const GetDatasetsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => DatasetSchema),
);
export type GetDatasetsOutput = typeof GetDatasetsOutput.Type;

// The operation
/**
 * Get list of datasets
 */
export const getDatasets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetsInput,
  outputSchema: GetDatasetsOutput,
  errors: [Forbidden] as const,
}));
