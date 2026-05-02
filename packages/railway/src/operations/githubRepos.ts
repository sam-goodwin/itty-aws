import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubRepos {\n  githubRepos {\n    defaultBranch\n    description\n    fullName\n    id\n    installationId\n    isPrivate\n    name\n    ownerAvatarUrl\n  }\n}";

// Input Schema (GraphQL variables)
export const GithubReposInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepos",
    type: "query",
  }),
);
export type GithubReposInput = typeof GithubReposInput.Type;

// Output Schema (GraphQL selection set)
export const GithubReposOutput = Schema.Array(
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
export type GithubReposOutput = typeof GithubReposOutput.Type;

/**
 * Get a list of repos for a user that Railway has access to
 */
export const githubRepos = API.make(() => ({
  inputSchema: GithubReposInput,
  outputSchema: GithubReposOutput,
}));
