import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface UpdateMapFieldsInput {
  dataset_id: string;
}
export const UpdateMapFieldsInput = /*@__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "PUT", path: "/v2/datasets/{dataset_id}/mapfields" }),
) as unknown as Schema.Codec<UpdateMapFieldsInput>;

// Output Schema
export type UpdateMapFieldsOutput = ReadonlyArray<string>;
export const UpdateMapFieldsOutput = /*@__PURE__*/ Schema.Array(
  Schema.String,
) as unknown as Schema.Codec<UpdateMapFieldsOutput>;

// The operation
export const updateMapFields = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateMapFieldsInput,
  outputSchema: UpdateMapFieldsOutput,
  errors: [NotFound] as const,
}));
