import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getIntegrationAuths($after: String, $before: String, $first: Int, $last: Int) {\n  integrationAuths(after: $after, before: $before, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        id\n        provider\n        providerId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetIntegrationAuthsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getIntegrationAuths",
    type: "query",
  }),
);
export type GetIntegrationAuthsInput = typeof GetIntegrationAuthsInput.Type;

// Output Schema (GraphQL selection set)
export const GetIntegrationAuthsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        id: Schema.String,
        provider: Schema.String,
        providerId: Schema.String,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("integrationAuths"));
export type GetIntegrationAuthsOutput = typeof GetIntegrationAuthsOutput.Type;

/**
 * Get all integration auths for a user
 */
export const getIntegrationAuths = API.make(() => ({
  inputSchema: GetIntegrationAuthsInput,
  outputSchema: GetIntegrationAuthsOutput,
}));
