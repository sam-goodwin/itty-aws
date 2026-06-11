import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getGithubPRInfo($prNumber: Int!, $serviceId: String!) {\n  githubPRInfo(prNumber: $prNumber, serviceId: $serviceId) {\n    additions\n    author\n    body\n    changedFiles\n    checks {\n      name\n      status\n    }\n    deletions\n    mergeable\n    state\n    title\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGithubPRInfoInput = Schema.Struct({
  prNumber: Schema.Number,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getGithubPRInfo",
    type: "query",
  }),
);
export type GetGithubPRInfoInput = typeof GetGithubPRInfoInput.Type;

// Output Schema (GraphQL selection set)
export const GetGithubPRInfoOutput = Schema.NullOr(
  Schema.Struct({
    additions: Schema.Number,
    author: Schema.String,
    body: Schema.String,
    changedFiles: Schema.Number,
    checks: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        status: Schema.String,
      }),
    ),
    deletions: Schema.Number,
    mergeable: Schema.NullOr(Schema.Boolean),
    state: Schema.String,
    title: Schema.String,
  }),
).pipe(T.ResponsePath("githubPRInfo"));
export type GetGithubPRInfoOutput = typeof GetGithubPRInfoOutput.Type;

/**
 * Get info for a GitHub pull request
 */
export const getGithubPRInfo = API.make(() => ({
  inputSchema: GetGithubPRInfoInput,
  outputSchema: GetGithubPRInfoOutput,
}));
