import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteMapFieldInput {
  dataset_id: string;
  map_field_name: string;
}
export const DeleteMapFieldInput = /*@__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
  map_field_name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v2/datasets/{dataset_id}/mapfields/{map_field_name}",
  }),
) as unknown as Schema.Codec<DeleteMapFieldInput>;

// Output Schema
export type DeleteMapFieldOutput = void;
export const DeleteMapFieldOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteMapFieldOutput>;

// The operation
export const deleteMapField = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteMapFieldInput,
  outputSchema: DeleteMapFieldOutput,
  errors: [NotFound] as const,
}));
