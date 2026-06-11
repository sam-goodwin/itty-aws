import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getDeploymentInstanceExecutions($after: String, $before: String, $first: Int, $input: DeploymentInstanceExecutionListInput!, $last: Int) {\n  deploymentInstanceExecutions(after: $after, before: $before, first: $first, input: $input, last: $last) {\n    edges {\n      cursor\n      node {\n        completedAt\n        createdAt\n        deploymentId\n        deploymentMeta\n        id\n        status\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetDeploymentInstanceExecutionsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  input: Schema.Struct({
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getDeploymentInstanceExecutions",
    type: "query",
  }),
);
export type GetDeploymentInstanceExecutionsInput =
  typeof GetDeploymentInstanceExecutionsInput.Type;

// Output Schema (GraphQL selection set)
export const GetDeploymentInstanceExecutionsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        completedAt: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        deploymentId: Schema.String,
        deploymentMeta: Schema.Unknown,
        id: Schema.String,
        status: Schema.Literals([
          "CRASHED",
          "CREATED",
          "EXITED",
          "INITIALIZING",
          "REMOVED",
          "REMOVING",
          "RESTARTING",
          "RUNNING",
          "SKIPPED",
          "STOPPED",
        ]),
        updatedAt: Schema.String,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("deploymentInstanceExecutions"));
export type GetDeploymentInstanceExecutionsOutput =
  typeof GetDeploymentInstanceExecutionsOutput.Type;

/**
 * Get the deployment instance executions for a deployment.
 */
export const getDeploymentInstanceExecutions = API.make(() => ({
  inputSchema: GetDeploymentInstanceExecutionsInput,
  outputSchema: GetDeploymentInstanceExecutionsOutput,
}));
