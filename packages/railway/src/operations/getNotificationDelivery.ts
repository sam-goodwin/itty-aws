import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query notificationDelivery($id: String!) {\n  notificationDelivery(id: $id) {\n    createdAt\n    id\n    notificationInstance {\n      createdAt\n      environmentId\n      event {\n        action\n        activityPayload\n        createdAt\n        environmentId\n        id\n        object\n        payload\n        projectId\n        severity\n      }\n      eventId\n      eventType\n      id\n      payload\n      projectId\n      resolvedAt\n      resourceId\n      resourceType\n      serviceId\n      severity\n      status\n      updatedAt\n      volumeId\n      workspaceId\n    }\n    readAt\n    status\n    type\n    updatedAt\n    userId\n  }\n}";

// Input Schema (GraphQL variables)
export const GetNotificationDeliveryInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationDelivery",
    type: "query",
  }),
);
export type GetNotificationDeliveryInput =
  typeof GetNotificationDeliveryInput.Type;

// Output Schema (GraphQL selection set)
export const GetNotificationDeliveryOutput = Schema.NullOr(
  Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    notificationInstance: Schema.Struct({
      createdAt: Schema.String,
      environmentId: Schema.NullOr(Schema.String),
      event: Schema.Struct({
        action: Schema.String,
        activityPayload: Schema.NullOr(Schema.Unknown),
        createdAt: Schema.String,
        environmentId: Schema.NullOr(Schema.String),
        id: Schema.String,
        object: Schema.String,
        payload: Schema.NullOr(Schema.Unknown),
        projectId: Schema.NullOr(Schema.String),
        severity: Schema.Literals(["CRITICAL", "INFO", "NOTICE", "WARNING"]),
      }),
      eventId: Schema.String,
      eventType: Schema.NullOr(Schema.String),
      id: Schema.String,
      payload: Schema.Unknown,
      projectId: Schema.NullOr(Schema.String),
      resolvedAt: Schema.NullOr(Schema.String),
      resourceId: Schema.NullOr(Schema.String),
      resourceType: Schema.NullOr(Schema.String),
      serviceId: Schema.NullOr(Schema.String),
      severity: Schema.Literals(["CRITICAL", "INFO", "NOTICE", "WARNING"]),
      status: Schema.Literals(["ACTIVE", "RESOLVED"]),
      updatedAt: Schema.String,
      volumeId: Schema.NullOr(Schema.String),
      workspaceId: Schema.String,
    }),
    readAt: Schema.NullOr(Schema.String),
    status: Schema.Literals(["FAILED", "PENDING", "SENT"]),
    type: Schema.Literals(["EMAIL", "INAPP", "WEBHOOK"]),
    updatedAt: Schema.String,
    userId: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("notificationDelivery"));
export type GetNotificationDeliveryOutput =
  typeof GetNotificationDeliveryOutput.Type;

/**
 * Gets a notification delivery by ID for the authenticated user
 */
export const getNotificationDelivery = API.make(() => ({
  inputSchema: GetNotificationDeliveryInput,
  outputSchema: GetNotificationDeliveryOutput,
}));
