import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { EnvironmentNameConflict, NotAuthorized } from "./errors.ts";

const __document =
  "mutation environmentRename($id: String!, $input: EnvironmentRenameInput!) {\n  environmentRename(id: $id, input: $input) {\n    canAccess\n    createdAt\n    deletedAt\n    id\n    isEphemeral\n    meta {\n      baseBranch\n      branch\n      latestSuccessfulGitHubDeploymentId\n      prCommentId\n      prNumber\n      prRepo\n      prTitle\n      skippedResourceIds\n    }\n    name\n    projectId\n    unmergedChangesCount\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const RenameEnvironmentInput = Schema.Struct({
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
export type RenameEnvironmentInput = typeof RenameEnvironmentInput.Type;

// Output Schema (GraphQL selection set)
export const RenameEnvironmentOutput = Schema.Struct({
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
export type RenameEnvironmentOutput = typeof RenameEnvironmentOutput.Type;

/**
 * Renames an environment.
 */
export const renameEnvironment = API.make(() => ({
  inputSchema: RenameEnvironmentInput,
  outputSchema: RenameEnvironmentOutput,
  errors: [EnvironmentNameConflict, NotAuthorized],
}));
