import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation notificationDeliveriesMarkAsRead($deliveryIds: [String!]!) {\n  notificationDeliveriesMarkAsRead(deliveryIds: $deliveryIds)\n}";

// Input Schema (GraphQL variables)
export const MarkNotificationDeliveriesAsReadInput = Schema.Struct({
  deliveryIds: Schema.Array(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationDeliveriesMarkAsRead",
    type: "mutation",
  }),
);
export type MarkNotificationDeliveriesAsReadInput =
  typeof MarkNotificationDeliveriesAsReadInput.Type;

// Output Schema (GraphQL selection set)
export const MarkNotificationDeliveriesAsReadOutput = Schema.Boolean.pipe(
  T.ResponsePath("notificationDeliveriesMarkAsRead"),
);
export type MarkNotificationDeliveriesAsReadOutput =
  typeof MarkNotificationDeliveriesAsReadOutput.Type;

/**
 * Marks notification deliveries as read
 */
export const markNotificationDeliveriesAsRead = API.make(() => ({
  inputSchema: MarkNotificationDeliveriesAsReadInput,
  outputSchema: MarkNotificationDeliveriesAsReadOutput,
}));
