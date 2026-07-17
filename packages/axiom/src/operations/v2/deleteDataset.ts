import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteDatasetInput {
  dataset_id: string;
}
export const DeleteDatasetInput = /*@__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/datasets/{dataset_id}" }),
) as unknown as Schema.Codec<DeleteDatasetInput>;

// Output Schema
export type DeleteDatasetOutput = void;
export const DeleteDatasetOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteDatasetOutput>;

// The operation
/**
 * Delete dataset
 */
export const deleteDataset = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatasetInput,
  outputSchema: DeleteDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
