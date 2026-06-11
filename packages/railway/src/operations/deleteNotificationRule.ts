import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteNotificationRule($id: String!) {\n  notificationRuleDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteNotificationRuleInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteNotificationRule",
    type: "mutation",
  }),
);
export type DeleteNotificationRuleInput =
  typeof DeleteNotificationRuleInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteNotificationRuleOutput = Schema.Boolean.pipe(
  T.ResponsePath("notificationRuleDelete"),
);
export type DeleteNotificationRuleOutput =
  typeof DeleteNotificationRuleOutput.Type;

/**
 * Delete a notification rule
 */
export const deleteNotificationRule = API.make(() => ({
  inputSchema: DeleteNotificationRuleInput,
  outputSchema: DeleteNotificationRuleOutput,
}));
