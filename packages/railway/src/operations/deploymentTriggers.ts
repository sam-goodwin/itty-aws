import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query deploymentTriggers($after: String, $before: String, $environmentId: String!, $first: Int, $last: Int, $projectId: String!, $serviceId: String!) {\n  deploymentTriggers(after: $after, before: $before, environmentId: $environmentId, first: $first, last: $last, projectId: $projectId, serviceId: $serviceId) {\n    edges {\n      cursor\n      node {\n        baseEnvironmentOverrideId\n        branch\n        checkSuites\n        environmentId\n        id\n        projectId\n        provider\n        repository\n        serviceId\n        validCheckSuites\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentTriggersInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  projectId: Schema.String,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentTriggers",
    type: "query",
  }),
);
export type DeploymentTriggersInput = typeof DeploymentTriggersInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentTriggersOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        baseEnvironmentOverrideId: Schema.NullOr(Schema.String),
        branch: Schema.String,
        checkSuites: Schema.Boolean,
        environmentId: Schema.String,
        id: Schema.String,
        projectId: Schema.String,
        provider: Schema.String,
        repository: Schema.String,
        serviceId: Schema.NullOr(Schema.String),
        validCheckSuites: Schema.Number,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("deploymentTriggers"));
export type DeploymentTriggersOutput = typeof DeploymentTriggersOutput.Type;

/**
 * All deployment triggers.
 */
export const deploymentTriggers = API.make(() => ({
  inputSchema: DeploymentTriggersInput,
  outputSchema: DeploymentTriggersOutput,
}));
