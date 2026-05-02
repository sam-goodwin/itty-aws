import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubRepo($fullRepoName: String!) {\n  githubRepo(fullRepoName: $fullRepoName) {\n    defaultBranch\n    description\n    fullName\n    id\n    isPrivate\n    name\n  }\n}";

// Input Schema (GraphQL variables)
export const GithubRepoInput = Schema.Struct({
  fullRepoName: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepo",
    type: "query",
  }),
);
export type GithubRepoInput = typeof GithubRepoInput.Type;

// Output Schema (GraphQL selection set)
export const GithubRepoOutput = Schema.Struct({
  defaultBranch: Schema.String,
  description: Schema.NullOr(Schema.String),
  fullName: Schema.String,
  id: Schema.Number,
  isPrivate: Schema.Boolean,
  name: Schema.String,
}).pipe(T.ResponsePath("githubRepo"));
export type GithubRepoOutput = typeof GithubRepoOutput.Type;

/**
 * Checks if user has access to GitHub repository
 */
export const githubRepo = API.make(() => ({
  inputSchema: GithubRepoInput,
  outputSchema: GithubRepoOutput,
}));
