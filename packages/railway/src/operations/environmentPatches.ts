import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query environmentPatches($after: String, $before: String, $environmentId: String!, $first: Int, $last: Int) {\n  environmentPatches(after: $after, before: $before, environmentId: $environmentId, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        appliedAt\n        createdAt\n        environmentId\n        id\n        lastAppliedError\n        message\n        status\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentPatchesInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentPatches",
    type: "query",
  }),
);
export type EnvironmentPatchesInput = typeof EnvironmentPatchesInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentPatchesOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        appliedAt: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        environmentId: Schema.String,
        id: Schema.String,
        lastAppliedError: Schema.NullOr(Schema.String),
        message: Schema.NullOr(Schema.String),
        status: Schema.Literals(["APPLYING", "COMMITTED", "STAGED"]),
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
}).pipe(T.ResponsePath("environmentPatches"));
export type EnvironmentPatchesOutput = typeof EnvironmentPatchesOutput.Type;

/**
 * Get the patches for an environment
 */
export const environmentPatches = API.make(() => ({
  inputSchema: EnvironmentPatchesInput,
  outputSchema: EnvironmentPatchesOutput,
}));
