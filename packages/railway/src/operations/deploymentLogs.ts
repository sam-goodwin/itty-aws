import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query deploymentLogs($deploymentId: String!, $endDate: DateTime, $filter: String, $limit: Int, $startDate: DateTime) {\n  deploymentLogs(deploymentId: $deploymentId, endDate: $endDate, filter: $filter, limit: $limit, startDate: $startDate) {\n    attributes {\n      key\n      value\n    }\n    message\n    severity\n    tags {\n      deploymentId\n      deploymentInstanceId\n      environmentId\n      pluginId\n      projectId\n      serviceId\n      snapshotId\n    }\n    timestamp\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentLogsInput = Schema.Struct({
  deploymentId: Schema.String,
  endDate: Schema.optional(Schema.NullOr(Schema.String)),
  filter: Schema.optional(Schema.NullOr(Schema.String)),
  limit: Schema.optional(Schema.NullOr(Schema.Number)),
  startDate: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentLogs",
    type: "query",
  }),
);
export type DeploymentLogsInput = typeof DeploymentLogsInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentLogsOutput = Schema.Array(
  Schema.Struct({
    attributes: Schema.Array(
      Schema.Struct({
        key: Schema.String,
        value: Schema.String,
      }),
    ),
    message: Schema.String,
    severity: Schema.NullOr(Schema.String),
    tags: Schema.NullOr(
      Schema.Struct({
        deploymentId: Schema.NullOr(Schema.String),
        deploymentInstanceId: Schema.NullOr(Schema.String),
        environmentId: Schema.NullOr(Schema.String),
        pluginId: Schema.NullOr(Schema.String),
        projectId: Schema.NullOr(Schema.String),
        serviceId: Schema.NullOr(Schema.String),
        snapshotId: Schema.NullOr(Schema.String),
      }),
    ),
    timestamp: Schema.String,
  }),
).pipe(T.ResponsePath("deploymentLogs"));
export type DeploymentLogsOutput = typeof DeploymentLogsOutput.Type;

/**
 * Fetch logs for a deployment
 */
export const deploymentLogs = API.make(() => ({
  inputSchema: DeploymentLogsInput,
  outputSchema: DeploymentLogsOutput,
}));
