import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/datasets/{dataset_id}" }));
export type DeleteDatasetInput = typeof DeleteDatasetInput.Type;

// Output Schema
export const DeleteDatasetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDatasetOutput = typeof DeleteDatasetOutput.Type;

// The operation
/**
 * Delete dataset
 */
export const deleteDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatasetInput,
  outputSchema: DeleteDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
