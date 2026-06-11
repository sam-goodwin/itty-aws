import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getAuditLogs($after: String, $before: String, $filter: AuditLogFilterInput, $first: Int, $last: Int, $sort: SortOrder, $workspaceId: String!) {\n  auditLogs(after: $after, before: $before, filter: $filter, first: $first, last: $last, sort: $sort, workspaceId: $workspaceId) {\n    edges {\n      cursor\n      node {\n        context\n        createdAt\n        environmentId\n        eventType\n        id\n        payload\n        projectId\n        workspaceId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetAuditLogsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  filter: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        endDate: Schema.optional(Schema.NullOr(Schema.String)),
        environmentId: Schema.optional(Schema.NullOr(Schema.String)),
        eventTypes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
        projectId: Schema.optional(Schema.NullOr(Schema.String)),
        startDate: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  sort: Schema.optional(Schema.NullOr(Schema.Literals(["asc", "desc"]))),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getAuditLogs",
    type: "query",
  }),
);
export type GetAuditLogsInput = typeof GetAuditLogsInput.Type;

// Output Schema (GraphQL selection set)
export const GetAuditLogsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        context: Schema.NullOr(Schema.Unknown),
        createdAt: Schema.String,
        environmentId: Schema.NullOr(Schema.String),
        eventType: Schema.String,
        id: Schema.String,
        payload: Schema.NullOr(Schema.Unknown),
        projectId: Schema.NullOr(Schema.String),
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
}).pipe(T.ResponsePath("auditLogs"));
export type GetAuditLogsOutput = typeof GetAuditLogsOutput.Type;

/**
 * Gets audit logs for a workspace.
 */
export const getAuditLogs = API.make(() => ({
  inputSchema: GetAuditLogsInput,
  outputSchema: GetAuditLogsOutput,
}));
