import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query githubPRInfoResult($prNumber: Int!, $serviceId: String!) {\n  githubPRInfoResult(prNumber: $prNumber, serviceId: $serviceId) {\n    error\n    prInfo {\n      additions\n      author\n      body\n      changedFiles\n      checks {\n        name\n        status\n      }\n      deletions\n      mergeable\n      state\n      title\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetGithubPRInfoResultInput = Schema.Struct({
  prNumber: Schema.Number,
  serviceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "githubPRInfoResult",
    type: "query",
  }),
);
export type GetGithubPRInfoResultInput = typeof GetGithubPRInfoResultInput.Type;

// Output Schema (GraphQL selection set)
export const GetGithubPRInfoResultOutput = Schema.Struct({
  error: Schema.NullOr(Schema.String),
  prInfo: Schema.NullOr(
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
  ),
}).pipe(T.ResponsePath("githubPRInfoResult"));
export type GetGithubPRInfoResultOutput =
  typeof GetGithubPRInfoResultOutput.Type;

/**
 * Get info for a GitHub pull request, including fetch errors
 */
export const getGithubPRInfoResult = API.make(() => ({
  inputSchema: GetGithubPRInfoResultInput,
  outputSchema: GetGithubPRInfoResultOutput,
}));
