import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query metrics($averagingWindowSeconds: Int, $endDate: DateTime, $environmentId: String, $groupBy: [MetricTag!], $includeDeleted: Boolean, $measurements: [MetricMeasurement!]!, $projectId: String, $sampleRateSeconds: Int, $serviceId: String, $startDate: DateTime!, $volumeId: String, $volumeInstanceExternalId: String, $workspaceId: String) {\n  metrics(averagingWindowSeconds: $averagingWindowSeconds, endDate: $endDate, environmentId: $environmentId, groupBy: $groupBy, includeDeleted: $includeDeleted, measurements: $measurements, projectId: $projectId, sampleRateSeconds: $sampleRateSeconds, serviceId: $serviceId, startDate: $startDate, volumeId: $volumeId, volumeInstanceExternalId: $volumeInstanceExternalId, workspaceId: $workspaceId) {\n    measurement\n    tags {\n      deploymentId\n      deploymentInstanceId\n      environmentId\n      pluginId\n      projectId\n      region\n      serviceId\n      volumeId\n      volumeInstanceId\n    }\n    values {\n      ts\n      value\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetMetricsInput = Schema.Struct({
  averagingWindowSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
  endDate: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.optional(Schema.NullOr(Schema.String)),
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
  sampleRateSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
  serviceId: Schema.optional(Schema.NullOr(Schema.String)),
  startDate: Schema.String,
  volumeId: Schema.optional(Schema.NullOr(Schema.String)),
  volumeInstanceExternalId: Schema.optional(Schema.NullOr(Schema.String)),
  workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "metrics",
    type: "query",
  }),
);
export type GetMetricsInput = typeof GetMetricsInput.Type;

// Output Schema (GraphQL selection set)
export const GetMetricsOutput = Schema.Array(
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
    values: Schema.Array(
      Schema.Struct({
        ts: Schema.Number,
        value: Schema.Number,
      }),
    ),
  }),
).pipe(T.ResponsePath("metrics"));
export type GetMetricsOutput = typeof GetMetricsOutput.Type;

/**
 * Get metrics for a project, environment, and service
 */
export const getMetrics = API.make(() => ({
  inputSchema: GetMetricsInput,
  outputSchema: GetMetricsOutput,
}));
