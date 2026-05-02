import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubWritableScopes {\n  githubWritableScopes {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const GithubWritableScopesInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubWritableScopes",
    type: "query",
  }),
);
export type GithubWritableScopesInput = typeof GithubWritableScopesInput.Type;

// Output Schema (GraphQL selection set)
export const GithubWritableScopesOutput = Schema.Array(Schema.String).pipe(
  T.ResponsePath("githubWritableScopes"),
);
export type GithubWritableScopesOutput = typeof GithubWritableScopesOutput.Type;

/**
 * Get a list of scopes the user has installed the installation to
 */
export const githubWritableScopes = API.make(() => ({
  inputSchema: GithubWritableScopesInput,
  outputSchema: GithubWritableScopesOutput,
}));
