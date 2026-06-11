import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query sandboxSessions($after: String, $before: String, $environmentId: String!, $first: Int, $id: String!, $last: Int) {\n  sandboxSessions(after: $after, before: $before, environmentId: $environmentId, first: $first, id: $id, last: $last) {\n    edges {\n      cursor\n      node {\n        attached\n        command\n        createdAt\n        kind\n        name\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetSandboxSessionsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  environmentId: Schema.String,
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  id: Schema.String,
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sandboxSessions",
    type: "query",
  }),
);
export type GetSandboxSessionsInput = typeof GetSandboxSessionsInput.Type;

// Output Schema (GraphQL selection set)
export const GetSandboxSessionsOutput = Schema.NullOr(
  Schema.Struct({
    edges: Schema.Array(
      Schema.Struct({
        cursor: Schema.String,
        node: Schema.Struct({
          attached: Schema.Boolean,
          command: Schema.String,
          createdAt: Schema.NullOr(Schema.String),
          kind: Schema.Literals(["EXEC", "SHELL"]),
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
  }),
).pipe(T.ResponsePath("sandboxSessions"));
export type GetSandboxSessionsOutput = typeof GetSandboxSessionsOutput.Type;

/**
 * Resumable sessions inside a sandbox — interactive shells and one-off exec commands, live or recently exited. Null when the sandbox can't report them (e.g. its vm-init predates session listing).
 */
export const getSandboxSessions = API.make(() => ({
  inputSchema: GetSandboxSessionsInput,
  outputSchema: GetSandboxSessionsOutput,
}));
