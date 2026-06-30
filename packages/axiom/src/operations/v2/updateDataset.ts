import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface UpdateDatasetInput {
  dataset_id: string;
  description?: string;
  retentionDays?: number;
  useRetentionPeriod?: boolean;
}
export const UpdateDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataset_id: Schema.String.pipe(T.PathParam()),
  description: Schema.optional(Schema.String),
  retentionDays: Schema.optional(Schema.Number),
  useRetentionPeriod: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "PUT", path: "/v2/datasets/{dataset_id}" }),
) as unknown as Schema.Codec<UpdateDatasetInput>;

// Output Schema
export interface UpdateDatasetOutput {
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
  mapFields?: string[];
  name: string;
  retentionDays?: number;
  sharedByOrg?: string;
  updatedAt: string;
  useRetentionPeriod?: boolean;
  who: string;
}
export const UpdateDatasetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<UpdateDatasetOutput>;

// The operation
/**
 * Update dataset
 */
export const updateDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDatasetInput,
  outputSchema: UpdateDatasetOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
