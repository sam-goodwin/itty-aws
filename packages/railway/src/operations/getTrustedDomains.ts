import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query trustedDomains($after: String, $before: String, $first: Int, $last: Int, $workspaceId: String!) {\n  trustedDomains(after: $after, before: $before, first: $first, last: $last, workspaceId: $workspaceId) {\n    edges {\n      cursor\n      node {\n        domainName\n        id\n        role\n        status\n        verificationType\n        workspaceId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetTrustedDomainsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "trustedDomains",
    type: "query",
  }),
);
export type GetTrustedDomainsInput = typeof GetTrustedDomainsInput.Type;

// Output Schema (GraphQL selection set)
export const GetTrustedDomainsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        domainName: Schema.String,
        id: Schema.String,
        role: Schema.String,
        status: Schema.Literals(["FAILED", "PENDING", "VERIFIED"]),
        verificationType: Schema.String,
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
}).pipe(T.ResponsePath("trustedDomains"));
export type GetTrustedDomainsOutput = typeof GetTrustedDomainsOutput.Type;

/**
 * Get all trusted domains for a workspace
 */
export const getTrustedDomains = API.make(() => ({
  inputSchema: GetTrustedDomainsInput,
  outputSchema: GetTrustedDomainsOutput,
}));
