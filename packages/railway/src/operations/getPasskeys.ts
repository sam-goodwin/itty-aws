import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query passkeys($after: String, $before: String, $first: Int, $last: Int) {\n  passkeys(after: $after, before: $before, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        aaguid\n        backedUp\n        createdAt\n        credentialId\n        deviceName\n        deviceType\n        displayName\n        id\n        lastUsedAt\n        lastUsedDevice\n        transports\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetPasskeysInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "passkeys",
    type: "query",
  }),
);
export type GetPasskeysInput = typeof GetPasskeysInput.Type;

// Output Schema (GraphQL selection set)
export const GetPasskeysOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        aaguid: Schema.NullOr(Schema.String),
        backedUp: Schema.Boolean,
        createdAt: Schema.String,
        credentialId: Schema.String,
        deviceName: Schema.String,
        deviceType: Schema.String,
        displayName: Schema.NullOr(Schema.String),
        id: Schema.String,
        lastUsedAt: Schema.NullOr(Schema.String),
        lastUsedDevice: Schema.NullOr(Schema.String),
        transports: Schema.Array(Schema.String),
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
}).pipe(T.ResponsePath("passkeys"));
export type GetPasskeysOutput = typeof GetPasskeysOutput.Type;

/**
 * Gets all passkeys for the authenticated user
 */
export const getPasskeys = API.make(() => ({
  inputSchema: GetPasskeysInput,
  outputSchema: GetPasskeysOutput,
}));
