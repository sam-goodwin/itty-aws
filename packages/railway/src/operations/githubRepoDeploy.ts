import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation githubRepoDeploy($input: GitHubRepoDeployInput!) {\n  githubRepoDeploy(input: $input)\n}";

// Input Schema (GraphQL variables)
export const GithubRepoDeployInput = Schema.Struct({
  input: Schema.Struct({
    branch: Schema.optional(Schema.NullOr(Schema.String)),
    environmentId: Schema.optional(Schema.NullOr(Schema.String)),
    projectId: Schema.String,
    repo: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepoDeploy",
    type: "mutation",
  }),
);
export type GithubRepoDeployInput = typeof GithubRepoDeployInput.Type;

// Output Schema (GraphQL selection set)
export const GithubRepoDeployOutput = Schema.String.pipe(
  T.ResponsePath("githubRepoDeploy"),
);
export type GithubRepoDeployOutput = typeof GithubRepoDeployOutput.Type;

/**
 * Deploys a GitHub repo
 */
export const githubRepoDeploy = API.make(() => ({
  inputSchema: GithubRepoDeployInput,
  outputSchema: GithubRepoDeployOutput,
}));
