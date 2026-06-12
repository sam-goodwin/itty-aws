import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query githubWritableScopes {\n  githubWritableScopes\n}";

// Input Schema (GraphQL variables)
export const GetGithubWritableScopesInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubWritableScopes",
    type: "query",
  }),
);
export type GetGithubWritableScopesInput =
  typeof GetGithubWritableScopesInput.Type;

// Output Schema (GraphQL selection set)
export const GetGithubWritableScopesOutput = Schema.Array(Schema.String).pipe(
  T.ResponsePath("githubWritableScopes"),
);
export type GetGithubWritableScopesOutput =
  typeof GetGithubWritableScopesOutput.Type;

/**
 * Get a list of scopes the user has installed the installation to
 */
export const getGithubWritableScopes = API.make(() => ({
  inputSchema: GetGithubWritableScopesInput,
  outputSchema: GetGithubWritableScopesOutput,
}));
