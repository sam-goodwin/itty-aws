import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden } from "../../errors";

// Input Schema
export const GetDatasetsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/datasets" }));
export type GetDatasetsInput = typeof GetDatasetsInput.Type;

// Output Schema
export const GetDatasetsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
);
export type GetDatasetsOutput = typeof GetDatasetsOutput.Type;

// The operation
/**
 * Get list of datasets
 */
export const getDatasets = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetsInput,
  outputSchema: GetDatasetsOutput,
  errors: [Forbidden] as const,
}));
