import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation githubRepoUpdate($input: GitHubRepoUpdateInput!) {\n  githubRepoUpdate(input: $input)\n}";

// Input Schema (GraphQL variables)
export const GithubRepoUpdateInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    projectId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepoUpdate",
    type: "mutation",
  }),
);
export type GithubRepoUpdateInput = typeof GithubRepoUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const GithubRepoUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("githubRepoUpdate"),
);
export type GithubRepoUpdateOutput = typeof GithubRepoUpdateOutput.Type;

/**
 * Updates a GitHub repo through the linked template
 */
export const githubRepoUpdate = API.make(() => ({
  inputSchema: GithubRepoUpdateInput,
  outputSchema: GithubRepoUpdateOutput,
}));
