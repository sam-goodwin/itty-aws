import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query usage($endDate: DateTime, $groupBy: [MetricTag!], $includeDeleted: Boolean, $measurements: [MetricMeasurement!]!, $projectId: String, $startDate: DateTime, $workspaceId: String) {\n  usage(endDate: $endDate, groupBy: $groupBy, includeDeleted: $includeDeleted, measurements: $measurements, projectId: $projectId, startDate: $startDate, workspaceId: $workspaceId) {\n    measurement\n    tags {\n      deploymentId\n      deploymentInstanceId\n      environmentId\n      pluginId\n      projectId\n      region\n      serviceId\n      volumeId\n      volumeInstanceId\n    }\n    value\n  }\n}";

// Input Schema (GraphQL variables)
export const GetUsageInput = Schema.Struct({
  endDate: Schema.optional(Schema.NullOr(Schema.String)),
  groupBy: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "DEPLOYMENT_ID",
          "DEPLOYMENT_INSTANCE_ID",
          "ENVIRONMENT_ID",
          "HOST_TYPE",
          "KEY_UNSPECIFIED",
          "PLUGIN_ID",
          "PROJECT_ID",
          "REGION",
          "SERVICE_ID",
          "UNRECOGNIZED",
          "VOLUME_ID",
          "VOLUME_INSTANCE_ID",
        ]),
      ),
    ),
  ),
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
  startDate: Schema.optional(Schema.NullOr(Schema.String)),
  workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "usage",
    type: "query",
  }),
);
export type GetUsageInput = typeof GetUsageInput.Type;

// Output Schema (GraphQL selection set)
export const GetUsageOutput = Schema.Array(
  Schema.Struct({
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
    tags: Schema.Struct({
      deploymentId: Schema.NullOr(Schema.String),
      deploymentInstanceId: Schema.NullOr(Schema.String),
      environmentId: Schema.NullOr(Schema.String),
      pluginId: Schema.NullOr(Schema.String),
      projectId: Schema.NullOr(Schema.String),
      region: Schema.NullOr(Schema.String),
      serviceId: Schema.NullOr(Schema.String),
      volumeId: Schema.NullOr(Schema.String),
      volumeInstanceId: Schema.NullOr(Schema.String),
    }),
    value: Schema.Number,
  }),
).pipe(T.ResponsePath("usage"));
export type GetUsageOutput = typeof GetUsageOutput.Type;

/**
 * Get the usage for a single project or all projects for a user/workspace. If no `projectId` or `workspaceId` is provided, the usage for the current user is returned. If no `startDate` is provided, the usage for the current billing period of the project owner is returned.
 */
export const getUsage = API.make(() => ({
  inputSchema: GetUsageInput,
  outputSchema: GetUsageOutput,
}));
