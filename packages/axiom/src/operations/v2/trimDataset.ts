import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface TrimDatasetInput {
  dataset_id: string;
  maxDuration: string;
}
export const TrimDatasetInput = /*@__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
  maxDuration: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/v2/datasets/{dataset_id}/trim" }),
) as unknown as Schema.Codec<TrimDatasetInput>;

// Output Schema
export type TrimDatasetOutput = void;
export const TrimDatasetOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TrimDatasetOutput>;

// The operation
/**
 * Trim dataset by duration
 *
 * Trim dataset
 */
export const trimDataset = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrimDatasetInput,
  outputSchema: TrimDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
