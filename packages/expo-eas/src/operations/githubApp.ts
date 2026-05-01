import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubApp {\n  githubApp {\n    appIdentifier\n    clientIdentifier\n    environment\n    name\n  }\n}";

// Input Schema (GraphQL variables)
export const GithubAppInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubApp",
    type: "query",
  }),
);
export type GithubAppInput = typeof GithubAppInput.Type;

// Output Schema (GraphQL selection set)
export const GithubAppOutput = Schema.Struct({
  appIdentifier: Schema.String,
  clientIdentifier: Schema.String,
  environment: Schema.Literals(["DEVELOPMENT", "PRODUCTION", "STAGING"]),
  name: Schema.String,
}).pipe(T.ResponsePath("githubApp"));
export type GithubAppOutput = typeof GithubAppOutput.Type;

/**
 * Top-level query object for querying GitHub App information and resources it has access to.
 */
export const githubApp = API.make(() => ({
  inputSchema: GithubAppInput,
  outputSchema: GithubAppOutput,
}));
