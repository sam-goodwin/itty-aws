import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentPatchCommit($commitMessage: String, $environmentId: String!, $patch: EnvironmentConfig) {\n  environmentPatchCommit(commitMessage: $commitMessage, environmentId: $environmentId, patch: $patch)\n}";

// Input Schema (GraphQL variables)
export const EnvironmentPatchCommitInput = Schema.Struct({
  commitMessage: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  patch: Schema.optional(Schema.NullOr(Schema.Unknown)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentPatchCommit",
    type: "mutation",
  }),
);
export type EnvironmentPatchCommitInput =
  typeof EnvironmentPatchCommitInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentPatchCommitOutput = Schema.String.pipe(
  T.ResponsePath("environmentPatchCommit"),
);
export type EnvironmentPatchCommitOutput =
  typeof EnvironmentPatchCommitOutput.Type;

/**
 * Commit the provided patch to the environment.
 */
export const environmentPatchCommit = API.make(() => ({
  inputSchema: EnvironmentPatchCommitInput,
  outputSchema: EnvironmentPatchCommitOutput,
}));
