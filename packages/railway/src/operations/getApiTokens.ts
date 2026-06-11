import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getApiTokens($after: String, $before: String, $first: Int, $last: Int) {\n  apiTokens(after: $after, before: $before, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        displayToken\n        id\n        name\n        workspaceId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetApiTokensInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getApiTokens",
    type: "query",
  }),
);
export type GetApiTokensInput = typeof GetApiTokensInput.Type;

// Output Schema (GraphQL selection set)
export const GetApiTokensOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        displayToken: Schema.String,
        id: Schema.String,
        name: Schema.String,
        workspaceId: Schema.NullOr(Schema.String),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("apiTokens"));
export type GetApiTokensOutput = typeof GetApiTokensOutput.Type;

/**
 * Gets all API tokens for the authenticated user.
 */
export const getApiTokens = API.make(() => ({
  inputSchema: GetApiTokensInput,
  outputSchema: GetApiTokensOutput,
}));
