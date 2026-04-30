import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation githubRepositorySettings {\n  githubRepositorySettings\n}";

// Input Schema (GraphQL variables)
export const GithubRepositorySettingsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubRepositorySettings",
    type: "mutation",
  }),
);
export type GithubRepositorySettingsInput =
  typeof GithubRepositorySettingsInput.Type;

// Output Schema (GraphQL selection set)
export const GithubRepositorySettingsOutput = Schema.Unknown;
export type GithubRepositorySettingsOutput =
  typeof GithubRepositorySettingsOutput.Type;

/**
 * Mutations for GitHub repository settings
 */
export const githubRepositorySettings = API.make(() => ({
  inputSchema: GithubRepositorySettingsInput,
  outputSchema: GithubRepositorySettingsOutput,
}));
