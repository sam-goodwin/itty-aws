import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query deployments($after: String, $before: String, $first: Int, $input: DeploymentListInput!, $last: Int) {\n  deployments(after: $after, before: $before, first: $first, input: $input, last: $last) {\n    edges {\n      cursor\n      node {\n        canRedeploy\n        canRollback\n        createdAt\n        deploymentStopped\n        diagnosis\n        environmentId\n        id\n        meta\n        projectId\n        serviceId\n        snapshotId\n        staticUrl\n        status\n        statusUpdatedAt\n        suggestAddServiceDomain\n        updatedAt\n        url\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  input: Schema.Struct({
    environmentId: Schema.optional(Schema.NullOr(Schema.String)),
    includeDeleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    projectId: Schema.optional(Schema.NullOr(Schema.String)),
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          in: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Literals([
                  "BUILDING",
                  "CRASHED",
                  "DEPLOYING",
                  "FAILED",
                  "INITIALIZING",
                  "NEEDS_APPROVAL",
                  "QUEUED",
                  "REMOVED",
                  "REMOVING",
                  "SKIPPED",
                  "SLEEPING",
                  "SUCCESS",
                  "WAITING",
                ]),
              ),
            ),
          ),
          notIn: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Literals([
                  "BUILDING",
                  "CRASHED",
                  "DEPLOYING",
                  "FAILED",
                  "INITIALIZING",
                  "NEEDS_APPROVAL",
                  "QUEUED",
                  "REMOVED",
                  "REMOVING",
                  "SKIPPED",
                  "SLEEPING",
                  "SUCCESS",
                  "WAITING",
                ]),
              ),
            ),
          ),
        }),
      ),
    ),
  }),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deployments",
    type: "query",
  }),
);
export type DeploymentsInput = typeof DeploymentsInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        canRedeploy: Schema.Boolean,
        canRollback: Schema.Boolean,
        createdAt: Schema.String,
        deploymentStopped: Schema.Boolean,
        diagnosis: Schema.NullOr(Schema.Unknown),
        environmentId: Schema.String,
        id: Schema.String,
        meta: Schema.NullOr(Schema.Unknown),
        projectId: Schema.String,
        serviceId: Schema.NullOr(Schema.String),
        snapshotId: Schema.NullOr(Schema.String),
        staticUrl: Schema.NullOr(Schema.String),
        status: Schema.Literals([
          "BUILDING",
          "CRASHED",
          "DEPLOYING",
          "FAILED",
          "INITIALIZING",
          "NEEDS_APPROVAL",
          "QUEUED",
          "REMOVED",
          "REMOVING",
          "SKIPPED",
          "SLEEPING",
          "SUCCESS",
          "WAITING",
        ]),
        statusUpdatedAt: Schema.NullOr(Schema.String),
        suggestAddServiceDomain: Schema.Boolean,
        updatedAt: Schema.String,
        url: Schema.NullOr(Schema.String),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("deployments"));
export type DeploymentsOutput = typeof DeploymentsOutput.Type;

/**
 * Get all deployments
 */
export const deployments = API.make(() => ({
  inputSchema: DeploymentsInput,
  outputSchema: DeploymentsOutput,
}));
