import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VacuumDatasetInput {
  dataset_id: string;
}
export const VacuumDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/v2/datasets/{dataset_id}/vacuum" }),
) as unknown as Schema.Codec<VacuumDatasetInput>;

// Output Schema
export type VacuumDatasetOutput = void;
export const VacuumDatasetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VacuumDatasetOutput>;

// The operation
export const vacuumDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VacuumDatasetInput,
  outputSchema: VacuumDatasetOutput,
}));
