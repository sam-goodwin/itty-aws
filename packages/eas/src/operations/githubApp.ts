import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation githubApp {\n  githubApp\n}";

// Input Schema (GraphQL variables)
export const GithubAppInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubApp",
    type: "mutation",
  }),
);
export type GithubAppInput = typeof GithubAppInput.Type;

// Output Schema (GraphQL selection set)
export const GithubAppOutput = Schema.Unknown;
export type GithubAppOutput = typeof GithubAppOutput.Type;

/**
 * Mutations that utilize services facilitated by the GitHub App
 */
export const githubApp = API.make(() => ({
  inputSchema: GithubAppInput,
  outputSchema: GithubAppOutput,
}));
