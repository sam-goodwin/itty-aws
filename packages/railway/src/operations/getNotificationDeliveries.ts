import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getNotificationDeliveries($after: String, $before: String, $filter: NotificationDeliveryFilterInput, $first: Int, $last: Int) {\n  notificationDeliveries(after: $after, before: $before, filter: $filter, first: $first, last: $last) {\n    edges {\n      cursor\n      node {\n        createdAt\n        id\n        readAt\n        status\n        type\n        updatedAt\n        userId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetNotificationDeliveriesInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  filter: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        environmentId: Schema.optional(Schema.NullOr(Schema.String)),
        onlyUnread: Schema.optional(Schema.NullOr(Schema.Boolean)),
        projectId: Schema.optional(Schema.NullOr(Schema.String)),
        status: Schema.optional(
          Schema.NullOr(Schema.Literals(["ACTIVE", "RESOLVED"])),
        ),
        type: Schema.optional(
          Schema.NullOr(Schema.Literals(["EMAIL", "INAPP", "WEBHOOK"])),
        ),
        workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getNotificationDeliveries",
    type: "query",
  }),
);
export type GetNotificationDeliveriesInput =
  typeof GetNotificationDeliveriesInput.Type;

// Output Schema (GraphQL selection set)
export const GetNotificationDeliveriesOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        createdAt: Schema.String,
        id: Schema.String,
        readAt: Schema.NullOr(Schema.String),
        status: Schema.Literals(["FAILED", "PENDING", "SENT"]),
        type: Schema.Literals(["EMAIL", "INAPP", "WEBHOOK"]),
        updatedAt: Schema.String,
        userId: Schema.NullOr(Schema.String),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("notificationDeliveries"));
export type GetNotificationDeliveriesOutput =
  typeof GetNotificationDeliveriesOutput.Type;

/**
 * Gets notification deliveries for the authenticated user
 */
export const getNotificationDeliveries = API.make(() => ({
  inputSchema: GetNotificationDeliveriesInput,
  outputSchema: GetNotificationDeliveriesOutput,
}));
