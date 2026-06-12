import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentPatchCommit($commitMessage: String, $environmentId: String!, $patch: EnvironmentConfig) {\n  environmentPatchCommit(commitMessage: $commitMessage, environmentId: $environmentId, patch: $patch)\n}";

// Input Schema (GraphQL variables)
export const CommitEnvironmentPatchInput = Schema.Struct({
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
export type CommitEnvironmentPatchInput =
  typeof CommitEnvironmentPatchInput.Type;

// Output Schema (GraphQL selection set)
export const CommitEnvironmentPatchOutput = Schema.String.pipe(
  T.ResponsePath("environmentPatchCommit"),
);
export type CommitEnvironmentPatchOutput =
  typeof CommitEnvironmentPatchOutput.Type;

/**
 * Commit the provided patch to the environment.
 */
export const commitEnvironmentPatch = API.make(() => ({
  inputSchema: CommitEnvironmentPatchInput,
  outputSchema: CommitEnvironmentPatchOutput,
}));
