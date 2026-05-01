import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation notificationPreferenceSetAccountNotificationPreference($input: AccountNotificationPreferenceInput!) {\n  notificationPreference {\n    setAccountNotificationPreference(input: $input) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const NotificationPreferenceSetAccountNotificationPreferenceInput =
  Schema.Struct({
    input: Schema.Struct({
      accountId: Schema.String,
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
      operationName: "notificationPreferenceSetAccountNotificationPreference",
      type: "mutation",
    }),
  );
export type NotificationPreferenceSetAccountNotificationPreferenceInput =
  typeof NotificationPreferenceSetAccountNotificationPreferenceInput.Type;

// Output Schema (GraphQL selection set)
export const NotificationPreferenceSetAccountNotificationPreferenceOutput =
  Schema.Unknown.pipe(
    T.ResponsePath("notificationPreference.setAccountNotificationPreference"),
  );
export type NotificationPreferenceSetAccountNotificationPreferenceOutput =
  typeof NotificationPreferenceSetAccountNotificationPreferenceOutput.Type;

export const notificationPreferenceSetAccountNotificationPreference = API.make(
  () => ({
    inputSchema: NotificationPreferenceSetAccountNotificationPreferenceInput,
    outputSchema: NotificationPreferenceSetAccountNotificationPreferenceOutput,
  }),
);
