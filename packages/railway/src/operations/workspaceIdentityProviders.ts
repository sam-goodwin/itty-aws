import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query workspaceIdentityProviders($after: String, $before: String, $first: Int, $last: Int, $workspaceId: String!) {\n  workspaceIdentityProviders(after: $after, before: $before, first: $first, last: $last, workspaceId: $workspaceId) {\n    edges {\n      cursor\n      node {\n        createdAt\n        enforcementEnabledAt\n        id\n        updatedAt\n        workspaceId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkspaceIdentityProvidersInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceIdentityProviders",
    type: "query",
  }),
);
export type WorkspaceIdentityProvidersInput =
  typeof WorkspaceIdentityProvidersInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceIdentityProvidersOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        createdAt: Schema.String,
        enforcementEnabledAt: Schema.NullOr(Schema.String),
        id: Schema.String,
        updatedAt: Schema.String,
        workspaceId: Schema.String,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("workspaceIdentityProviders"));
export type WorkspaceIdentityProvidersOutput =
  typeof WorkspaceIdentityProvidersOutput.Type;

/**
 * Gets all identity providers of a workspace
 */
export const workspaceIdentityProviders = API.make(() => ({
  inputSchema: WorkspaceIdentityProvidersInput,
  outputSchema: WorkspaceIdentityProvidersOutput,
}));
