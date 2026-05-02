import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentStageChanges($environmentId: String!, $input: EnvironmentConfig!, $merge: Boolean) {\n  environmentStageChanges(environmentId: $environmentId, input: $input, merge: $merge) {\n    appliedAt\n    appliedBy {\n      avatar\n      email\n      id\n      name\n      username\n    }\n    createdAt\n    environment {\n      canAccess\n      createdAt\n      deletedAt\n      id\n      isEphemeral\n      meta {\n        baseBranch\n        branch\n        latestSuccessfulGitHubDeploymentId\n        prCommentId\n        prNumber\n        prRepo\n        prTitle\n        skippedResourceIds\n      }\n      name\n      projectId\n      unmergedChangesCount\n      updatedAt\n    }\n    environmentId\n    id\n    lastAppliedError\n    message\n    status\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentStageChangesInput = Schema.Struct({
  environmentId: Schema.String,
  input: Schema.Unknown,
  merge: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentStageChanges",
    type: "mutation",
  }),
);
export type EnvironmentStageChangesInput =
  typeof EnvironmentStageChangesInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentStageChangesOutput = Schema.Struct({
  appliedAt: Schema.NullOr(Schema.String),
  appliedBy: Schema.NullOr(
    Schema.Struct({
      avatar: Schema.NullOr(Schema.String),
      email: Schema.String,
      id: Schema.String,
      name: Schema.NullOr(Schema.String),
      username: Schema.NullOr(Schema.String),
    }),
  ),
  createdAt: Schema.String,
  environment: Schema.Struct({
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
  }),
  environmentId: Schema.String,
  id: Schema.String,
  lastAppliedError: Schema.NullOr(Schema.String),
  message: Schema.NullOr(Schema.String),
  status: Schema.Literals(["APPLYING", "COMMITTED", "STAGED"]),
  updatedAt: Schema.String,
}).pipe(T.ResponsePath("environmentStageChanges"));
export type EnvironmentStageChangesOutput =
  typeof EnvironmentStageChangesOutput.Type;

/**
 * Sets the staged patch for a single environment.
 */
export const environmentStageChanges = API.make(() => ({
  inputSchema: EnvironmentStageChangesInput,
  outputSchema: EnvironmentStageChangesOutput,
}));
