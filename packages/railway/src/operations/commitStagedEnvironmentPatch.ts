import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentPatchCommitStaged($commitMessage: String, $environmentId: String!, $skipDeploys: Boolean) {\n  environmentPatchCommitStaged(commitMessage: $commitMessage, environmentId: $environmentId, skipDeploys: $skipDeploys) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CommitStagedEnvironmentPatchInput = Schema.Struct({
  commitMessage: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  skipDeploys: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentPatchCommitStaged",
    type: "mutation",
  }),
);
export type CommitStagedEnvironmentPatchInput =
  typeof CommitStagedEnvironmentPatchInput.Type;

// Output Schema (GraphQL selection set)
export const CommitStagedEnvironmentPatchOutput = Schema.String.pipe(
  T.ResponsePath("environmentPatchCommitStaged"),
);
export type CommitStagedEnvironmentPatchOutput =
  typeof CommitStagedEnvironmentPatchOutput.Type;

/**
 * Commits the staged changes for a single environment.
 */
export const commitStagedEnvironmentPatch = API.make(() => ({
  inputSchema: CommitStagedEnvironmentPatchInput,
  outputSchema: CommitStagedEnvironmentPatchOutput,
}));
