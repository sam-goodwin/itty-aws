import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation webhookCreateWebhook($appId: String!, $webhookInput: WebhookInput!) {\n  webhook {\n    createWebhook(appId: $appId, webhookInput: $webhookInput) {\n      appId\n      createdAt\n      event\n      id\n      updatedAt\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WebhookCreateWebhookInput = Schema.Struct({
  appId: Schema.String,
  webhookInput: Schema.Struct({
    event: Schema.Literals(["BUILD", "SUBMIT"]),
    secret: Schema.String,
    url: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "webhookCreateWebhook",
    type: "mutation",
  }),
);
export type WebhookCreateWebhookInput = typeof WebhookCreateWebhookInput.Type;

// Output Schema (GraphQL selection set)
export const WebhookCreateWebhookOutput = Schema.Struct({
  appId: Schema.String,
  createdAt: Schema.String,
  event: Schema.Literals(["BUILD", "SUBMIT"]),
  id: Schema.String,
  updatedAt: Schema.String,
  url: Schema.String,
}).pipe(T.ResponsePath("webhook.createWebhook"));
export type WebhookCreateWebhookOutput = typeof WebhookCreateWebhookOutput.Type;

export const webhookCreateWebhook = API.make(() => ({
  inputSchema: WebhookCreateWebhookInput,
  outputSchema: WebhookCreateWebhookOutput,
}));
