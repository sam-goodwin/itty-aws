import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden } from "../../errors.ts";

// Input Schema
export interface GetDatasetsInput {}
export const GetDatasetsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/datasets" }),
) as unknown as Schema.Codec<GetDatasetsInput>;

// Output Schema
export type GetDatasetsOutput = ReadonlyArray<{
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
}>;
export const GetDatasetsOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
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
  }),
) as unknown as Schema.Codec<GetDatasetsOutput>;

// The operation
/**
 * Get list of datasets
 */
export const getDatasets = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetDatasetsInput,
  outputSchema: GetDatasetsOutput,
  errors: [Forbidden] as const,
}));
