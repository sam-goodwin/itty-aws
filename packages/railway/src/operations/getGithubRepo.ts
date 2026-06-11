import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubRepo($fullRepoName: String!) {\n  githubRepo(fullRepoName: $fullRepoName) {\n    defaultBranch\n    description\n    fullName\n    id\n    isPrivate\n    name\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGithubRepoInput = Schema.Struct({
  fullRepoName: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepo",
    type: "query",
  }),
);
export type GetGithubRepoInput = typeof GetGithubRepoInput.Type;

// Output Schema (GraphQL selection set)
export const GetGithubRepoOutput = Schema.Struct({
  defaultBranch: Schema.String,
  description: Schema.NullOr(Schema.String),
  fullName: Schema.String,
  id: Schema.Number,
  isPrivate: Schema.Boolean,
  name: Schema.String,
}).pipe(T.ResponsePath("githubRepo"));
export type GetGithubRepoOutput = typeof GetGithubRepoOutput.Type;

/**
 * Checks if user has access to GitHub repository
 */
export const getGithubRepo = API.make(() => ({
  inputSchema: GetGithubRepoInput,
  outputSchema: GetGithubRepoOutput,
}));
