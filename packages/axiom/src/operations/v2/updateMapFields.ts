import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const UpdateMapFieldsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PUT", path: "/v2/datasets/{dataset_id}/mapfields" }));
export type UpdateMapFieldsInput = typeof UpdateMapFieldsInput.Type;

// Output Schema
export const UpdateMapFieldsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
);
export type UpdateMapFieldsOutput = typeof UpdateMapFieldsOutput.Type;

// The operation
export const updateMapFields = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateMapFieldsInput,
  outputSchema: UpdateMapFieldsOutput,
  errors: [NotFound] as const,
}));
