import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation webhookUpdateWebhook($webhookId: ID!, $webhookInput: WebhookInput!) {\n  webhook {\n    updateWebhook(webhookId: $webhookId, webhookInput: $webhookInput) {\n      appId\n      createdAt\n      event\n      id\n      updatedAt\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WebhookUpdateWebhookInput = Schema.Struct({
  webhookId: Schema.String,
  webhookInput: Schema.Struct({
    event: Schema.Literals(["BUILD", "SUBMIT"]),
    secret: Schema.String,
    url: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "webhookUpdateWebhook",
    type: "mutation",
  }),
);
export type WebhookUpdateWebhookInput = typeof WebhookUpdateWebhookInput.Type;

// Output Schema (GraphQL selection set)
export const WebhookUpdateWebhookOutput = Schema.Struct({
  appId: Schema.String,
  createdAt: Schema.String,
  event: Schema.Literals(["BUILD", "SUBMIT"]),
  id: Schema.String,
  updatedAt: Schema.String,
  url: Schema.String,
}).pipe(T.ResponsePath("webhook.updateWebhook"));
export type WebhookUpdateWebhookOutput = typeof WebhookUpdateWebhookOutput.Type;

export const webhookUpdateWebhook = API.make(() => ({
  inputSchema: WebhookUpdateWebhookInput,
  outputSchema: WebhookUpdateWebhookOutput,
}));
