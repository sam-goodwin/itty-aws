import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface CreateDatasetInput {
  referrer?: string;
  description?: string;
  edgeDeployment?: string;
  kind?:
    | "otel:metrics:v1"
    | "otel:traces:v1"
    | "otel:logs:v1"
    | "axiom:events:v1";
  name: string;
  retentionDays?: number;
  useRetentionPeriod?: boolean;
}
export const CreateDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  referrer: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  edgeDeployment: Schema.optional(Schema.String),
  kind: Schema.optional(
    Schema.Literals([
      "otel:metrics:v1",
      "otel:traces:v1",
      "otel:logs:v1",
      "axiom:events:v1",
    ]),
  ),
  name: Schema.String,
  retentionDays: Schema.optional(Schema.Number),
  useRetentionPeriod: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/v2/datasets" }),
) as unknown as Schema.Codec<CreateDatasetInput>;

// Output Schema
export interface CreateDatasetOutput {
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
export const CreateDatasetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CreateDatasetOutput>;

// The operation
/**
 * Create dataset
 *
 * @param referrer - Referrer slug
 */
export const createDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDatasetInput,
  outputSchema: CreateDatasetOutput,
  errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
}));
