import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation githubAppInstallation {\n  githubAppInstallation\n}";

// Input Schema (GraphQL variables)
export const GithubAppInstallationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubAppInstallation",
    type: "mutation",
  }),
);
export type GithubAppInstallationInput = typeof GithubAppInstallationInput.Type;

// Output Schema (GraphQL selection set)
export const GithubAppInstallationOutput = Schema.Unknown;
export type GithubAppInstallationOutput =
  typeof GithubAppInstallationOutput.Type;

/**
 * Mutations for GitHub App installations
 */
export const githubAppInstallation = API.make(() => ({
  inputSchema: GithubAppInstallationInput,
  outputSchema: GithubAppInstallationOutput,
}));
