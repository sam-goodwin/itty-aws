import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getIntegrations($after: String, $before: String, $first: Int, $last: Int, $projectId: String!) {\n  integrations(after: $after, before: $before, first: $first, last: $last, projectId: $projectId) {\n    edges {\n      cursor\n      node {\n        config\n        id\n        name\n        projectId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetIntegrationsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getIntegrations",
    type: "query",
  }),
);
export type GetIntegrationsInput = typeof GetIntegrationsInput.Type;

// Output Schema (GraphQL selection set)
export const GetIntegrationsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        config: Schema.Unknown,
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
}).pipe(T.ResponsePath("integrations"));
export type GetIntegrationsOutput = typeof GetIntegrationsOutput.Type;

/**
 * Get all integrations for a project
 */
export const getIntegrations = API.make(() => ({
  inputSchema: GetIntegrationsInput,
  outputSchema: GetIntegrationsOutput,
}));
