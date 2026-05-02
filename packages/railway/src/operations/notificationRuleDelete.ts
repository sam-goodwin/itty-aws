import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation notificationRuleDelete($id: String!) {\n  notificationRuleDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const NotificationRuleDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationRuleDelete",
    type: "mutation",
  }),
);
export type NotificationRuleDeleteInput =
  typeof NotificationRuleDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const NotificationRuleDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("notificationRuleDelete"),
);
export type NotificationRuleDeleteOutput =
  typeof NotificationRuleDeleteOutput.Type;

/**
 * Delete a notification rule
 */
export const notificationRuleDelete = API.make(() => ({
  inputSchema: NotificationRuleDeleteInput,
  outputSchema: NotificationRuleDeleteOutput,
}));
