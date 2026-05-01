import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation websiteNotifications {\n  websiteNotifications {\n    updateAllWebsiteNotificationReadStateAsRead\n  }\n}";

// Input Schema (GraphQL variables)
export const WebsiteNotificationsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "websiteNotifications",
    type: "mutation",
  }),
);
export type WebsiteNotificationsInput = typeof WebsiteNotificationsInput.Type;

// Output Schema (GraphQL selection set)
export const WebsiteNotificationsOutput = Schema.Struct({
  updateAllWebsiteNotificationReadStateAsRead: Schema.Boolean,
}).pipe(T.ResponsePath("websiteNotifications"));
export type WebsiteNotificationsOutput = typeof WebsiteNotificationsOutput.Type;

/**
 * Mutations that modify a websiteNotification
 */
export const websiteNotifications = API.make(() => ({
  inputSchema: WebsiteNotificationsInput,
  outputSchema: WebsiteNotificationsOutput,
}));
