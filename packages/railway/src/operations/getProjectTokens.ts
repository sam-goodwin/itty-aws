import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "./errors.ts";

const __document =
  "query projectTokens($after: String, $before: String, $first: Int, $last: Int, $projectId: String!) {\n  projectTokens(after: $after, before: $before, first: $first, last: $last, projectId: $projectId) {\n    edges {\n      cursor\n      node {\n        createdAt\n        displayToken\n        environmentId\n        id\n        name\n        projectId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectTokensInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectTokens",
    type: "query",
  }),
);
export type GetProjectTokensInput = typeof GetProjectTokensInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectTokensOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        createdAt: Schema.String,
        displayToken: Schema.String,
        environmentId: Schema.String,
        id: Schema.String,
        name: Schema.String,
        projectId: Schema.String,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("projectTokens"));
export type GetProjectTokensOutput = typeof GetProjectTokensOutput.Type;

/**
 * Get all project tokens for a project
 */
export const getProjectTokens = API.make(() => ({
  inputSchema: GetProjectTokensInput,
  outputSchema: GetProjectTokensOutput,
  errors: [NotAuthorized],
}));
