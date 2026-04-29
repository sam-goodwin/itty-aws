import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const TrimDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
  maxDuration: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/datasets/{dataset_id}/trim" }));
export type TrimDatasetInput = typeof TrimDatasetInput.Type;

// Output Schema
export const TrimDatasetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TrimDatasetOutput = typeof TrimDatasetOutput.Type;

// The operation
/**
 * Trim dataset by duration
 *
 * Trim dataset
 */
export const trimDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TrimDatasetInput,
  outputSchema: TrimDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
