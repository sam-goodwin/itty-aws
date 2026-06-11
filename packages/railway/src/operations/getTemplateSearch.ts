import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getTemplateSearch($after: String, $before: String, $category: String, $first: Int, $last: Int, $query: String!, $verified: Boolean) {\n  templateSearch(after: $after, before: $before, category: $category, first: $first, last: $last, query: $query, verified: $verified) {\n    edges {\n      cursor\n      node {\n        code\n        creatorName\n        deploymentCount\n        description\n        healthScore\n        id\n        image\n        isVerified\n        name\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetTemplateSearchInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  category: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  query: Schema.String,
  verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getTemplateSearch",
    type: "query",
  }),
);
export type GetTemplateSearchInput = typeof GetTemplateSearchInput.Type;

// Output Schema (GraphQL selection set)
export const GetTemplateSearchOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        code: Schema.String,
        creatorName: Schema.NullOr(Schema.String),
        deploymentCount: Schema.Number,
        description: Schema.NullOr(Schema.String),
        healthScore: Schema.NullOr(Schema.Number),
        id: Schema.String,
        image: Schema.NullOr(Schema.String),
        isVerified: Schema.Boolean,
        name: Schema.String,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("templateSearch"));
export type GetTemplateSearchOutput = typeof GetTemplateSearchOutput.Type;

/**
 * Search published templates using the backend-ranked template search index.
 */
export const getTemplateSearch = API.make(() => ({
  inputSchema: GetTemplateSearchInput,
  outputSchema: GetTemplateSearchOutput,
}));
