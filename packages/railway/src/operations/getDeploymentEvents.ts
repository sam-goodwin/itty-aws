import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query deploymentEvents($after: String, $before: String, $first: Int, $id: String!, $last: Int) {\n  deploymentEvents(after: $after, before: $before, first: $first, id: $id, last: $last) {\n    edges {\n      cursor\n      node {\n        completedAt\n        createdAt\n        id\n        step\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetDeploymentEventsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  id: Schema.String,
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentEvents",
    type: "query",
  }),
);
export type GetDeploymentEventsInput = typeof GetDeploymentEventsInput.Type;

// Output Schema (GraphQL selection set)
export const GetDeploymentEventsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        completedAt: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        id: Schema.String,
        step: Schema.Literals([
          "BUILD_IMAGE",
          "CONFIGURE_NETWORK",
          "CREATE_CONTAINER",
          "DRAIN_INSTANCES",
          "HEALTHCHECK",
          "MIGRATE_VOLUMES",
          "PRE_DEPLOY_COMMAND",
          "PUBLISH_IMAGE",
          "SNAPSHOT_CODE",
          "WAIT_FOR_DEPENDENCIES",
        ]),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("deploymentEvents"));
export type GetDeploymentEventsOutput = typeof GetDeploymentEventsOutput.Type;

/**
 * Get the deployment events for a deployment
 */
export const getDeploymentEvents = API.make(() => ({
  inputSchema: GetDeploymentEventsInput,
  outputSchema: GetDeploymentEventsOutput,
}));
