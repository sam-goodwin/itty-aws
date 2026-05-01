import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation notificationPreferenceSetAppNotificationPreference($input: AppNotificationPreferenceInput!) {\n  notificationPreference {\n    setAppNotificationPreference(input: $input) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const NotificationPreferenceSetAppNotificationPreferenceInput =
  Schema.Struct({
    input: Schema.Struct({
      appId: Schema.String,
      enabled: Schema.Boolean,
      event: Schema.Literals([
        "BUILD_COMPLETE",
        "BUILD_ERRORED",
        "BUILD_LIMIT_THRESHOLD_EXCEEDED",
        "BUILD_PLAN_CREDIT_THRESHOLD_EXCEEDED",
        "SUBMISSION_COMPLETE",
        "SUBMISSION_ERRORED",
        "TEST",
      ]),
      type: Schema.Literals(["EMAIL", "WEB"]),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "notificationPreferenceSetAppNotificationPreference",
      type: "mutation",
    }),
  );
export type NotificationPreferenceSetAppNotificationPreferenceInput =
  typeof NotificationPreferenceSetAppNotificationPreferenceInput.Type;

// Output Schema (GraphQL selection set)
export const NotificationPreferenceSetAppNotificationPreferenceOutput =
  Schema.Unknown.pipe(
    T.ResponsePath("notificationPreference.setAppNotificationPreference"),
  );
export type NotificationPreferenceSetAppNotificationPreferenceOutput =
  typeof NotificationPreferenceSetAppNotificationPreferenceOutput.Type;

export const notificationPreferenceSetAppNotificationPreference = API.make(
  () => ({
    inputSchema: NotificationPreferenceSetAppNotificationPreferenceInput,
    outputSchema: NotificationPreferenceSetAppNotificationPreferenceOutput,
  }),
);
