import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getGithubRepos {\n  githubRepos {\n    defaultBranch\n    description\n    fullName\n    id\n    installationId\n    isPrivate\n    name\n    ownerAvatarUrl\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGithubReposInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getGithubRepos",
    type: "query",
  }),
);
export type GetGithubReposInput = typeof GetGithubReposInput.Type;

// Output Schema (GraphQL selection set)
export const GetGithubReposOutput = Schema.Array(
  Schema.Struct({
    defaultBranch: Schema.String,
    description: Schema.NullOr(Schema.String),
    fullName: Schema.String,
    id: Schema.Number,
    installationId: Schema.String,
    isPrivate: Schema.Boolean,
    name: Schema.String,
    ownerAvatarUrl: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("githubRepos"));
export type GetGithubReposOutput = typeof GetGithubReposOutput.Type;

/**
 * Get a list of repos for a user that Railway has access to
 */
export const getGithubRepos = API.make(() => ({
  inputSchema: GetGithubReposInput,
  outputSchema: GetGithubReposOutput,
}));
