import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query sessions($after: String, $before: String, $first: Int, $last: Int) {\n  sessions(after: $after, before: $before, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        createdAt\n        expiredAt\n        id\n        isCurrent\n        name\n        type\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetSessionsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sessions",
    type: "query",
  }),
);
export type GetSessionsInput = typeof GetSessionsInput.Type;

// Output Schema (GraphQL selection set)
export const GetSessionsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        createdAt: Schema.String,
        expiredAt: Schema.String,
        id: Schema.String,
        isCurrent: Schema.Boolean,
        name: Schema.String,
        type: Schema.Literals(["BROWSER", "CLI", "FORUMS"]),
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
}).pipe(T.ResponsePath("sessions"));
export type GetSessionsOutput = typeof GetSessionsOutput.Type;

/**
 * Gets all sessions for authenticated user.
 */
export const getSessions = API.make(() => ({
  inputSchema: GetSessionsInput,
  outputSchema: GetSessionsOutput,
}));
