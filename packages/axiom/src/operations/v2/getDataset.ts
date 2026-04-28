import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const GetDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/datasets/{dataset_id}" }));
export type GetDatasetInput = typeof GetDatasetInput.Type;

// Output Schema
export const GetDatasetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  canWrite: Schema.optional(Schema.Boolean),
  created: Schema.String,
  description: Schema.String,
  edgeDeployment: Schema.optional(Schema.String),
  id: Schema.String,
  kind: Schema.Literals([
    "otel:metrics:v1",
    "otel:traces:v1",
    "otel:logs:v1",
    "axiom:events:v1",
  ]),
  mapFields: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  retentionDays: Schema.optional(Schema.Number),
  sharedByOrg: Schema.optional(Schema.String),
  useRetentionPeriod: Schema.optional(Schema.Boolean),
  who: Schema.String,
});
export type GetDatasetOutput = typeof GetDatasetOutput.Type;

// The operation
/**
 * Get dataset by ID
 */
export const getDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetInput,
  outputSchema: GetDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
