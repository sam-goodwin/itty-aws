import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query estimatedUsage($includeDeleted: Boolean, $measurements: [MetricMeasurement!]!, $projectId: String, $workspaceId: String) {\n  estimatedUsage(includeDeleted: $includeDeleted, measurements: $measurements, projectId: $projectId, workspaceId: $workspaceId) {\n    estimatedValue\n    measurement\n    projectId\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEstimatedUsageInput = Schema.Struct({
  includeDeleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
  measurements: Schema.Array(
    Schema.Literals([
      "BACKUP_USAGE_GB",
      "CPU_LIMIT",
      "CPU_USAGE",
      "CPU_USAGE_2",
      "DISK_USAGE_GB",
      "EPHEMERAL_DISK_USAGE_GB",
      "MEASUREMENT_UNSPECIFIED",
      "MEMORY_LIMIT_GB",
      "MEMORY_USAGE_GB",
      "NETWORK_RX_GB",
      "NETWORK_TX_GB",
      "UNRECOGNIZED",
    ]),
  ),
  projectId: Schema.optional(Schema.NullOr(Schema.String)),
  workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "estimatedUsage",
    type: "query",
  }),
);
export type GetEstimatedUsageInput = typeof GetEstimatedUsageInput.Type;

// Output Schema (GraphQL selection set)
export const GetEstimatedUsageOutput = Schema.Array(
  Schema.Struct({
    estimatedValue: Schema.Number,
    measurement: Schema.Literals([
      "BACKUP_USAGE_GB",
      "CPU_LIMIT",
      "CPU_USAGE",
      "CPU_USAGE_2",
      "DISK_USAGE_GB",
      "EPHEMERAL_DISK_USAGE_GB",
      "MEASUREMENT_UNSPECIFIED",
      "MEMORY_LIMIT_GB",
      "MEMORY_USAGE_GB",
      "NETWORK_RX_GB",
      "NETWORK_TX_GB",
      "UNRECOGNIZED",
    ]),
    projectId: Schema.String,
  }),
).pipe(T.ResponsePath("estimatedUsage"));
export type GetEstimatedUsageOutput = typeof GetEstimatedUsageOutput.Type;

/**
 * Get the estimated total cost of the project at the end of the current billing cycle. If no `startDate` is provided, the usage for the current billing period of the project owner is returned.
 */
export const getEstimatedUsage = API.make(() => ({
  inputSchema: GetEstimatedUsageInput,
  outputSchema: GetEstimatedUsageOutput,
}));
