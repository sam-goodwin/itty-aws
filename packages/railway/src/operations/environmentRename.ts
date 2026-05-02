import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentRename($id: String!, $input: EnvironmentRenameInput!) {\n  environmentRename(id: $id, input: $input) {\n    canAccess\n    createdAt\n    deletedAt\n    id\n    isEphemeral\n    meta {\n      baseBranch\n      branch\n      latestSuccessfulGitHubDeploymentId\n      prCommentId\n      prNumber\n      prRepo\n      prTitle\n      skippedResourceIds\n    }\n    name\n    projectId\n    unmergedChangesCount\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentRenameInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    name: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentRename",
    type: "mutation",
  }),
);
export type EnvironmentRenameInput = typeof EnvironmentRenameInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentRenameOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("environmentRename"));
export type EnvironmentRenameOutput = typeof EnvironmentRenameOutput.Type;

/**
 * Renames an environment.
 */
export const environmentRename = API.make(() => ({
  inputSchema: EnvironmentRenameInput,
  outputSchema: EnvironmentRenameOutput,
}));
