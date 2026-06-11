import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubIsRepoNameAvailable($fullRepoName: String!) {\n  githubIsRepoNameAvailable(fullRepoName: $fullRepoName) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGithubIsRepoNameAvailableInput = Schema.Struct({
  fullRepoName: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubIsRepoNameAvailable",
    type: "query",
  }),
);
export type GetGithubIsRepoNameAvailableInput =
  typeof GetGithubIsRepoNameAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const GetGithubIsRepoNameAvailableOutput = Schema.Boolean.pipe(
  T.ResponsePath("githubIsRepoNameAvailable"),
);
export type GetGithubIsRepoNameAvailableOutput =
  typeof GetGithubIsRepoNameAvailableOutput.Type;

/**
 * Check if a repo name is available
 */
export const getGithubIsRepoNameAvailable = API.make(() => ({
  inputSchema: GetGithubIsRepoNameAvailableInput,
  outputSchema: GetGithubIsRepoNameAvailableOutput,
}));
