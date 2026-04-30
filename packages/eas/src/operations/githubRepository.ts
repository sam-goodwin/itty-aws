import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation githubRepository {\n  githubRepository\n}";

// Input Schema (GraphQL variables)
export const GithubRepositoryInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepository",
    type: "mutation",
  }),
);
export type GithubRepositoryInput = typeof GithubRepositoryInput.Type;

// Output Schema (GraphQL selection set)
export const GithubRepositoryOutput = Schema.Unknown;
export type GithubRepositoryOutput = typeof GithubRepositoryOutput.Type;

/**
 * Mutations for GitHub repositories
 */
export const githubRepository = API.make(() => ({
  inputSchema: GithubRepositoryInput,
  outputSchema: GithubRepositoryOutput,
}));
