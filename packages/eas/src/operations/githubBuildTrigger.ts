import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation githubBuildTrigger {\n  githubBuildTrigger\n}";

// Input Schema (GraphQL variables)
export const GithubBuildTriggerInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubBuildTrigger",
    type: "mutation",
  }),
);
export type GithubBuildTriggerInput = typeof GithubBuildTriggerInput.Type;

// Output Schema (GraphQL selection set)
export const GithubBuildTriggerOutput = Schema.Unknown;
export type GithubBuildTriggerOutput = typeof GithubBuildTriggerOutput.Type;

/**
 * Mutations for GitHub build triggers
 */
export const githubBuildTrigger = API.make(() => ({
  inputSchema: GithubBuildTriggerInput,
  outputSchema: GithubBuildTriggerOutput,
}));
