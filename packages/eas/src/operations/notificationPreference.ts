import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation notificationPreference {\n  notificationPreference\n}";

// Input Schema (GraphQL variables)
export const NotificationPreferenceInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationPreference",
    type: "mutation",
  }),
);
export type NotificationPreferenceInput =
  typeof NotificationPreferenceInput.Type;

// Output Schema (GraphQL selection set)
export const NotificationPreferenceOutput = Schema.Unknown;
export type NotificationPreferenceOutput =
  typeof NotificationPreferenceOutput.Type;

/**
 * Notification preference management
 */
export const notificationPreference = API.make(() => ({
  inputSchema: NotificationPreferenceInput,
  outputSchema: NotificationPreferenceOutput,
}));
