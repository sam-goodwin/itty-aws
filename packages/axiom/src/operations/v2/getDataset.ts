import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GetDatasetInput {
  dataset_id: string;
}
export const GetDatasetInput = /*@__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/datasets/{dataset_id}" }),
) as unknown as Schema.Codec<GetDatasetInput>;

// Output Schema
export interface GetDatasetOutput {
  canWrite?: boolean;
  created: string;
  description: string;
  edgeDeployment?: string;
  edgeDeploymentUrl?: string;
  id: string;
  kind:
    | "otel:metrics:v1"
    | "otel:traces:v1"
    | "otel:logs:v1"
    | "axiom:events:v1";
  mapFields?: ReadonlyArray<string>;
  name: string;
  retentionDays?: number;
  sharedByOrg?: string;
  updatedAt: string;
  useRetentionPeriod?: boolean;
  who: string;
}
export const GetDatasetOutput = /*@__PURE__*/ Schema.Struct({
  canWrite: Schema.optional(Schema.Boolean),
  created: Schema.String,
  description: Schema.String,
  edgeDeployment: Schema.optional(Schema.String),
  edgeDeploymentUrl: Schema.optional(Schema.String),
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
  updatedAt: Schema.String,
  useRetentionPeriod: Schema.optional(Schema.Boolean),
  who: Schema.String,
}) as unknown as Schema.Codec<GetDatasetOutput>;

// The operation
/**
 * Get dataset by ID
 */
export const getDataset = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetInput,
  outputSchema: GetDatasetOutput,
  errors: [Forbidden, NotFound] as const,
}));
