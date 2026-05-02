import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query observabilityDashboards($after: String, $before: String, $environmentId: String!, $first: Int, $last: Int) {\n  observabilityDashboards(after: $after, before: $before, environmentId: $environmentId, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ObservabilityDashboardsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "observabilityDashboards",
    type: "query",
  }),
);
export type ObservabilityDashboardsInput =
  typeof ObservabilityDashboardsInput.Type;

// Output Schema (GraphQL selection set)
export const ObservabilityDashboardsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        id: Schema.String,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("observabilityDashboards"));
export type ObservabilityDashboardsOutput =
  typeof ObservabilityDashboardsOutput.Type;

/**
 * Get all observability dashboards for an environment
 */
export const observabilityDashboards = API.make(() => ({
  inputSchema: ObservabilityDashboardsInput,
  outputSchema: ObservabilityDashboardsOutput,
}));
