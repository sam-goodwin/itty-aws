import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query environments($after: String, $before: String, $first: Int, $isEphemeral: Boolean, $last: Int, $projectId: String!) {\n  environments(after: $after, before: $before, first: $first, isEphemeral: $isEphemeral, last: $last, projectId: $projectId) {\n    edges {\n      cursor\n      node {\n        canAccess\n        createdAt\n        deletedAt\n        id\n        isEphemeral\n        name\n        projectId\n        unmergedChangesCount\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetEnvironmentsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  isEphemeral: Schema.optional(Schema.NullOr(Schema.Boolean)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environments",
    type: "query",
  }),
);
export type GetEnvironmentsInput = typeof GetEnvironmentsInput.Type;

// Output Schema (GraphQL selection set)
export const GetEnvironmentsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        canAccess: Schema.Boolean,
        createdAt: Schema.String,
        deletedAt: Schema.NullOr(Schema.String),
        id: Schema.String,
        isEphemeral: Schema.Boolean,
        name: Schema.String,
        projectId: Schema.String,
        unmergedChangesCount: Schema.NullOr(Schema.Number),
        updatedAt: Schema.String,
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("environments"));
export type GetEnvironmentsOutput = typeof GetEnvironmentsOutput.Type;

/**
 * Gets all environments for a project.
 */
export const getEnvironments = API.make(() => ({
  inputSchema: GetEnvironmentsInput,
  outputSchema: GetEnvironmentsOutput,
}));
