import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getGitHubRepoAccessAvailable($fullRepoName: String!) {\n  gitHubRepoAccessAvailable(fullRepoName: $fullRepoName) {\n    hasAccess\n    isPublic\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGitHubRepoAccessAvailableInput = Schema.Struct({
  fullRepoName: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getGitHubRepoAccessAvailable",
    type: "query",
  }),
);
export type GetGitHubRepoAccessAvailableInput =
  typeof GetGitHubRepoAccessAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const GetGitHubRepoAccessAvailableOutput = Schema.Struct({
  hasAccess: Schema.Boolean,
  isPublic: Schema.Boolean,
}).pipe(T.ResponsePath("gitHubRepoAccessAvailable"));
export type GetGitHubRepoAccessAvailableOutput =
  typeof GetGitHubRepoAccessAvailableOutput.Type;

/**
 * Checks if user has access to GitHub repository
 */
export const getGitHubRepoAccessAvailable = API.make(() => ({
  inputSchema: GetGitHubRepoAccessAvailableInput,
  outputSchema: GetGitHubRepoAccessAvailableOutput,
}));
