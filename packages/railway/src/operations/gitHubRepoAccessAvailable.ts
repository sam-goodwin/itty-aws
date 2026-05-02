import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query gitHubRepoAccessAvailable($fullRepoName: String!) {\n  gitHubRepoAccessAvailable(fullRepoName: $fullRepoName) {\n    hasAccess\n    isPublic\n  }\n}";

// Input Schema (GraphQL variables)
export const GitHubRepoAccessAvailableInput = Schema.Struct({
  fullRepoName: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "gitHubRepoAccessAvailable",
    type: "query",
  }),
);
export type GitHubRepoAccessAvailableInput =
  typeof GitHubRepoAccessAvailableInput.Type;

// Output Schema (GraphQL selection set)
export const GitHubRepoAccessAvailableOutput = Schema.Struct({
  hasAccess: Schema.Boolean,
  isPublic: Schema.Boolean,
}).pipe(T.ResponsePath("gitHubRepoAccessAvailable"));
export type GitHubRepoAccessAvailableOutput =
  typeof GitHubRepoAccessAvailableOutput.Type;

/**
 * Checks if user has access to GitHub repository
 */
export const gitHubRepoAccessAvailable = API.make(() => ({
  inputSchema: GitHubRepoAccessAvailableInput,
  outputSchema: GitHubRepoAccessAvailableOutput,
}));
