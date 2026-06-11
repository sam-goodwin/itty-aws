import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation githubRepoUpdate($input: GitHubRepoUpdateInput!) {\n  githubRepoUpdate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateGithubRepoInput = Schema.Struct({
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
export type UpdateGithubRepoInput = typeof UpdateGithubRepoInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateGithubRepoOutput = Schema.Boolean.pipe(
  T.ResponsePath("githubRepoUpdate"),
);
export type UpdateGithubRepoOutput = typeof UpdateGithubRepoOutput.Type;

/**
 * Updates a GitHub repo through the linked template
 */
export const updateGithubRepo = API.make(() => ({
  inputSchema: UpdateGithubRepoInput,
  outputSchema: UpdateGithubRepoOutput,
}));
