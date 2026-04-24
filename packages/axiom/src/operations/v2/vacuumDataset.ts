import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const VacuumDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/v2/datasets/{dataset_id}/vacuum" }));
export type VacuumDatasetInput = typeof VacuumDatasetInput.Type;

// Output Schema
export const VacuumDatasetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VacuumDatasetOutput = typeof VacuumDatasetOutput.Type;

// The operation
export const vacuumDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VacuumDatasetInput,
  outputSchema: VacuumDatasetOutput,
}));
