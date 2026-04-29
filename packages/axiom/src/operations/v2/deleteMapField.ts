import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteMapFieldInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
  map_field_name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v2/datasets/{dataset_id}/mapfields/{map_field_name}",
  }),
);
export type DeleteMapFieldInput = typeof DeleteMapFieldInput.Type;

// Output Schema
export const DeleteMapFieldOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteMapFieldOutput = typeof DeleteMapFieldOutput.Type;

// The operation
export const deleteMapField = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteMapFieldInput,
  outputSchema: DeleteMapFieldOutput,
  errors: [NotFound] as const,
}));
