import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateMapFieldInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
  name: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/v2/datasets/{dataset_id}/mapfields" }),
);
export type CreateMapFieldInput = typeof CreateMapFieldInput.Type;

// Output Schema
export const CreateMapFieldOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
});
export type CreateMapFieldOutput = typeof CreateMapFieldOutput.Type;

// The operation
export const createMapField = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateMapFieldInput,
  outputSchema: CreateMapFieldOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
