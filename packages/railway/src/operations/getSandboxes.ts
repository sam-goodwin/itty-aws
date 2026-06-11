import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getSandboxes($after: String, $before: String, $environmentId: String!, $first: Int, $last: Int) {\n  sandboxes(after: $after, before: $before, environmentId: $environmentId, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        createdAt\n        environmentId\n        id\n        idleTimeoutMinutes\n        networkIsolation\n        region\n        status\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetSandboxesInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getSandboxes",
    type: "query",
  }),
);
export type GetSandboxesInput = typeof GetSandboxesInput.Type;

// Output Schema (GraphQL selection set)
export const GetSandboxesOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        createdAt: Schema.String,
        environmentId: Schema.String,
        id: Schema.String,
        idleTimeoutMinutes: Schema.NullOr(Schema.Number),
        networkIsolation: Schema.Literals(["ISOLATED", "PRIVATE"]),
        region: Schema.String,
        status: Schema.Literals([
          "CREATING",
          "DESTROYED",
          "DESTROYING",
          "FAILED",
          "RUNNING",
        ]),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("sandboxes"));
export type GetSandboxesOutput = typeof GetSandboxesOutput.Type;

/**
 * List sandboxes in an environment.
 */
export const getSandboxes = API.make(() => ({
  inputSchema: GetSandboxesInput,
  outputSchema: GetSandboxesOutput,
}));
