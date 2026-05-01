import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query webhookById($id: ID!) {\n  webhook {\n    byId(id: $id) {\n      appId\n      createdAt\n      event\n      id\n      updatedAt\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WebhookByIdInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "webhookById",
    type: "query",
  }),
);
export type WebhookByIdInput = typeof WebhookByIdInput.Type;

// Output Schema (GraphQL selection set)
export const WebhookByIdOutput = Schema.Struct({
  appId: Schema.String,
  createdAt: Schema.String,
  event: Schema.Literals(["BUILD", "SUBMIT"]),
  id: Schema.String,
  updatedAt: Schema.String,
  url: Schema.String,
}).pipe(T.ResponsePath("webhook.byId"));
export type WebhookByIdOutput = typeof WebhookByIdOutput.Type;

export const webhookById = API.make(() => ({
  inputSchema: WebhookByIdInput,
  outputSchema: WebhookByIdOutput,
}));
