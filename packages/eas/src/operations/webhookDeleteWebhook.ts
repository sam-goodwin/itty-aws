import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation webhookDeleteWebhook($webhookId: ID!) {\n  webhook {\n    deleteWebhook(webhookId: $webhookId) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WebhookDeleteWebhookInput = Schema.Struct({
  webhookId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "webhookDeleteWebhook",
    type: "mutation",
  }),
);
export type WebhookDeleteWebhookInput = typeof WebhookDeleteWebhookInput.Type;

// Output Schema (GraphQL selection set)
export const WebhookDeleteWebhookOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("webhook.deleteWebhook"));
export type WebhookDeleteWebhookOutput = typeof WebhookDeleteWebhookOutput.Type;

export const webhookDeleteWebhook = API.make(() => ({
  inputSchema: WebhookDeleteWebhookInput,
  outputSchema: WebhookDeleteWebhookOutput,
}));
