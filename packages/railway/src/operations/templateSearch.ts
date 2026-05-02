import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query templateSearch($category: String, $limit: Int, $query: String!, $verified: Boolean) {\n  templateSearch(category: $category, limit: $limit, query: $query, verified: $verified) {\n    code\n    creatorName\n    deploymentCount\n    description\n    healthScore\n    id\n    image\n    name\n  }\n}";

// Input Schema (GraphQL variables)
export const TemplateSearchInput = Schema.Struct({
  category: Schema.optional(Schema.NullOr(Schema.String)),
  limit: Schema.optional(Schema.NullOr(Schema.Number)),
  query: Schema.String,
  verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateSearch",
    type: "query",
  }),
);
export type TemplateSearchInput = typeof TemplateSearchInput.Type;

// Output Schema (GraphQL selection set)
export const TemplateSearchOutput = Schema.Array(
  Schema.Struct({
    code: Schema.String,
    creatorName: Schema.NullOr(Schema.String),
    deploymentCount: Schema.Number,
    description: Schema.NullOr(Schema.String),
    healthScore: Schema.NullOr(Schema.Number),
    id: Schema.String,
    image: Schema.NullOr(Schema.String),
    name: Schema.String,
  }),
).pipe(T.ResponsePath("templateSearch"));
export type TemplateSearchOutput = typeof TemplateSearchOutput.Type;

/**
 * Search published templates using the backend-ranked template search index.
 */
export const templateSearch = API.make(() => ({
  inputSchema: TemplateSearchInput,
  outputSchema: TemplateSearchOutput,
}));
