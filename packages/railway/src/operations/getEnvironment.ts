import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query environment($id: String!, $projectId: String) {\n  environment(id: $id, projectId: $projectId) {\n    canAccess\n    createdAt\n    deletedAt\n    id\n    isEphemeral\n    meta {\n      baseBranch\n      branch\n      latestSuccessfulGitHubDeploymentId\n      prCommentId\n      prNumber\n      prRepo\n      prTitle\n      skippedResourceIds\n    }\n    name\n    projectId\n    unmergedChangesCount\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEnvironmentInput = Schema.Struct({
  id: Schema.String,
  projectId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environment",
    type: "query",
  }),
);
export type GetEnvironmentInput = typeof GetEnvironmentInput.Type;

// Output Schema (GraphQL selection set)
export const GetEnvironmentOutput = Schema.Struct({
  canAccess: Schema.Boolean,
  createdAt: Schema.String,
  deletedAt: Schema.NullOr(Schema.String),
  id: Schema.String,
  isEphemeral: Schema.Boolean,
  meta: Schema.NullOr(
    Schema.Struct({
      baseBranch: Schema.NullOr(Schema.String),
      branch: Schema.NullOr(Schema.String),
      latestSuccessfulGitHubDeploymentId: Schema.NullOr(Schema.Number),
      prCommentId: Schema.NullOr(Schema.Number),
      prNumber: Schema.NullOr(Schema.Number),
      prRepo: Schema.NullOr(Schema.String),
      prTitle: Schema.NullOr(Schema.String),
      skippedResourceIds: Schema.NullOr(Schema.Unknown),
    }),
  ),
  name: Schema.String,
  projectId: Schema.String,
  unmergedChangesCount: Schema.NullOr(Schema.Number),
  updatedAt: Schema.String,
}).pipe(T.ResponsePath("environment"));
export type GetEnvironmentOutput = typeof GetEnvironmentOutput.Type;

/**
 * Find a single environment
 */
export const getEnvironment = API.make(() => ({
  inputSchema: GetEnvironmentInput,
  outputSchema: GetEnvironmentOutput,
}));
