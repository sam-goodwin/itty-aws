import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation notificationDeliveriesMarkAsRead($deliveryIds: [String!]!) {\n  notificationDeliveriesMarkAsRead(deliveryIds: $deliveryIds) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const NotificationDeliveriesMarkAsReadInput = Schema.Struct({
  deliveryIds: Schema.Array(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationDeliveriesMarkAsRead",
    type: "mutation",
  }),
);
export type NotificationDeliveriesMarkAsReadInput =
  typeof NotificationDeliveriesMarkAsReadInput.Type;

// Output Schema (GraphQL selection set)
export const NotificationDeliveriesMarkAsReadOutput = Schema.Boolean.pipe(
  T.ResponsePath("notificationDeliveriesMarkAsRead"),
);
export type NotificationDeliveriesMarkAsReadOutput =
  typeof NotificationDeliveriesMarkAsReadOutput.Type;

/**
 * Marks notification deliveries as read
 */
export const notificationDeliveriesMarkAsRead = API.make(() => ({
  inputSchema: NotificationDeliveriesMarkAsReadInput,
  outputSchema: NotificationDeliveriesMarkAsReadOutput,
}));
