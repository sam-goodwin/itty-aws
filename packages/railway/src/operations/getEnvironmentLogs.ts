import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getEnvironmentLogs($afterDate: String, $afterLimit: Int, $anchorDate: String, $beforeDate: String, $beforeLimit: Int, $environmentId: String!, $filter: String) {\n  environmentLogs(afterDate: $afterDate, afterLimit: $afterLimit, anchorDate: $anchorDate, beforeDate: $beforeDate, beforeLimit: $beforeLimit, environmentId: $environmentId, filter: $filter) {\n    attributes {\n      key\n      value\n    }\n    message\n    severity\n    tags {\n      deploymentId\n      deploymentInstanceId\n      environmentId\n      pluginId\n      projectId\n      serviceId\n      snapshotId\n    }\n    timestamp\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEnvironmentLogsInput = Schema.Struct({
  afterDate: Schema.optional(Schema.NullOr(Schema.String)),
  afterLimit: Schema.optional(Schema.NullOr(Schema.Number)),
  anchorDate: Schema.optional(Schema.NullOr(Schema.String)),
  beforeDate: Schema.optional(Schema.NullOr(Schema.String)),
  beforeLimit: Schema.optional(Schema.NullOr(Schema.Number)),
  environmentId: Schema.String,
  filter: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getEnvironmentLogs",
    type: "query",
  }),
);
export type GetEnvironmentLogsInput = typeof GetEnvironmentLogsInput.Type;

// Output Schema (GraphQL selection set)
export const GetEnvironmentLogsOutput = Schema.Array(
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
).pipe(T.ResponsePath("environmentLogs"));
export type GetEnvironmentLogsOutput = typeof GetEnvironmentLogsOutput.Type;

/**
 * Fetch logs for a project environment. Build logs are excluded unless a snapshot ID is explicitly provided in the filter
 */
export const getEnvironmentLogs = API.make(() => ({
  inputSchema: GetEnvironmentLogsInput,
  outputSchema: GetEnvironmentLogsOutput,
}));
