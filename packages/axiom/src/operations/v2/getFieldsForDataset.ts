import * as Schema from "effect/Schema";
import { DatasetFieldSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GetFieldsForDatasetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v2/datasets/{dataset_id}/fields" }));
export type GetFieldsForDatasetInput = typeof GetFieldsForDatasetInput.Type;

// Output Schema
export const GetFieldsForDatasetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => DatasetFieldSchema),
  );
export type GetFieldsForDatasetOutput = typeof GetFieldsForDatasetOutput.Type;

// The operation
export const getFieldsForDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetFieldsForDatasetInput,
  outputSchema: GetFieldsForDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
