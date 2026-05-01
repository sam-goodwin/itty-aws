import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation githubUser {\n  githubUser {\n    generateGitHubUserAccessToken\n  }\n}";

// Input Schema (GraphQL variables)
export const GithubUserInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubUser",
    type: "mutation",
  }),
);
export type GithubUserInput = typeof GithubUserInput.Type;

// Output Schema (GraphQL selection set)
export const GithubUserOutput = Schema.Struct({
  generateGitHubUserAccessToken: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("githubUser"));
export type GithubUserOutput = typeof GithubUserOutput.Type;

/**
 * Mutations for GitHub users
 */
export const githubUser = API.make(() => ({
  inputSchema: GithubUserInput,
  outputSchema: GithubUserOutput,
}));
