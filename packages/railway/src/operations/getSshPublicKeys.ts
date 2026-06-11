import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query sshPublicKeys($after: String, $before: String, $first: Int, $last: Int, $workspaceId: String) {\n  sshPublicKeys(after: $after, before: $before, first: $first, last: $last, workspaceId: $workspaceId) {\n    edges {\n      cursor\n      node {\n        createdAt\n        fingerprint\n        id\n        name\n        publicKey\n        updatedAt\n        userId\n        workspaceId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetSshPublicKeysInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sshPublicKeys",
    type: "query",
  }),
);
export type GetSshPublicKeysInput = typeof GetSshPublicKeysInput.Type;

// Output Schema (GraphQL selection set)
export const GetSshPublicKeysOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        createdAt: Schema.String,
        fingerprint: Schema.String,
        id: Schema.String,
        name: Schema.String,
        publicKey: Schema.String,
        updatedAt: Schema.String,
        userId: Schema.NullOr(Schema.String),
        workspaceId: Schema.NullOr(Schema.String),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("sshPublicKeys"));
export type GetSshPublicKeysOutput = typeof GetSshPublicKeysOutput.Type;

/**
 * Gets SSH public keys. If workspaceId is provided, returns the keys owned by that workspace (requires workspace MEMBER access). Under a workspace-scoped API token, workspaceId defaults to the token's workspace when omitted; otherwise returns the authenticated user's personal keys.
 */
export const getSshPublicKeys = API.make(() => ({
  inputSchema: GetSshPublicKeysInput,
  outputSchema: GetSshPublicKeysOutput,
}));
