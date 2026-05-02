import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubRepoBranches($owner: String!, $repo: String!) {\n  githubRepoBranches(owner: $owner, repo: $repo) {\n    name\n  }\n}";

// Input Schema (GraphQL variables)
export const GithubRepoBranchesInput = Schema.Struct({
  owner: Schema.String,
  repo: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepoBranches",
    type: "query",
  }),
);
export type GithubRepoBranchesInput = typeof GithubRepoBranchesInput.Type;

// Output Schema (GraphQL selection set)
export const GithubRepoBranchesOutput = Schema.Array(
  Schema.Struct({
    name: Schema.String,
  }),
).pipe(T.ResponsePath("githubRepoBranches"));
export type GithubRepoBranchesOutput = typeof GithubRepoBranchesOutput.Type;

/**
 * Get branches for a GitHub repo that the authenticated user has access to
 */
export const githubRepoBranches = API.make(() => ({
  inputSchema: GithubRepoBranchesInput,
  outputSchema: GithubRepoBranchesOutput,
}));
