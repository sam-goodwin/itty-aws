import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentCreate($input: EnvironmentCreateInput!) {\n  environmentCreate(input: $input) {\n    canAccess\n    createdAt\n    deletedAt\n    id\n    isEphemeral\n    meta {\n      baseBranch\n      branch\n      latestSuccessfulGitHubDeploymentId\n      prCommentId\n      prNumber\n      prRepo\n      prTitle\n      skippedResourceIds\n    }\n    name\n    projectId\n    unmergedChangesCount\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentCreateInput = Schema.Struct({
  input: Schema.Struct({
    applyChangesInBackground: Schema.optional(Schema.NullOr(Schema.Boolean)),
    ephemeral: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.String,
    projectId: Schema.String,
    skipInitialDeploys: Schema.optional(Schema.NullOr(Schema.Boolean)),
    sourceEnvironmentId: Schema.optional(Schema.NullOr(Schema.String)),
    stageInitialChanges: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentCreate",
    type: "mutation",
  }),
);
export type EnvironmentCreateInput = typeof EnvironmentCreateInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentCreateOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("environmentCreate"));
export type EnvironmentCreateOutput = typeof EnvironmentCreateOutput.Type;

/**
 * Creates a new environment.
 */
export const environmentCreate = API.make(() => ({
  inputSchema: EnvironmentCreateInput,
  outputSchema: EnvironmentCreateOutput,
}));
