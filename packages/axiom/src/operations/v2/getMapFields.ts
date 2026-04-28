import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const GetMapFieldsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/datasets/{dataset_id}/mapfields" }));
export type GetMapFieldsInput = typeof GetMapFieldsInput.Type;

// Output Schema
export const GetMapFieldsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
);
export type GetMapFieldsOutput = typeof GetMapFieldsOutput.Type;

// The operation
export const getMapFields = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetMapFieldsInput,
  outputSchema: GetMapFieldsOutput,
  errors: [NotFound] as const,
}));
