import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getGithubRepoBranches($owner: String!, $repo: String!) {\n  githubRepoBranches(owner: $owner, repo: $repo) {\n    name\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGithubRepoBranchesInput = Schema.Struct({
  owner: Schema.String,
  repo: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getGithubRepoBranches",
    type: "query",
  }),
);
export type GetGithubRepoBranchesInput = typeof GetGithubRepoBranchesInput.Type;

// Output Schema (GraphQL selection set)
export const GetGithubRepoBranchesOutput = Schema.Array(
  Schema.Struct({
    name: Schema.String,
  }),
).pipe(T.ResponsePath("githubRepoBranches"));
export type GetGithubRepoBranchesOutput =
  typeof GetGithubRepoBranchesOutput.Type;

/**
 * Get branches for a GitHub repo that the authenticated user has access to
 */
export const getGithubRepoBranches = API.make(() => ({
  inputSchema: GetGithubRepoBranchesInput,
  outputSchema: GetGithubRepoBranchesOutput,
}));
