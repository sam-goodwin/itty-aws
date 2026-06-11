import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query gitHubSshKeys {\n  gitHubSshKeys {\n    id\n    key\n    title\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGitHubSshKeysInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "gitHubSshKeys",
    type: "query",
  }),
);
export type GetGitHubSshKeysInput = typeof GetGitHubSshKeysInput.Type;

// Output Schema (GraphQL selection set)
export const GetGitHubSshKeysOutput = Schema.Array(
  Schema.Struct({
    id: Schema.Number,
    key: Schema.String,
    title: Schema.String,
  }),
).pipe(T.ResponsePath("gitHubSshKeys"));
export type GetGitHubSshKeysOutput = typeof GetGitHubSshKeysOutput.Type;

/**
 * Gets SSH public keys from the authenticated user's GitHub account.
 */
export const getGitHubSshKeys = API.make(() => ({
  inputSchema: GetGitHubSshKeysInput,
  outputSchema: GetGitHubSshKeysOutput,
}));
