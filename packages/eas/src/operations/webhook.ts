import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation webhook {\n  webhook\n}";

// Input Schema (GraphQL variables)
export const WebhookInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "webhook",
    type: "mutation",
  }),
);
export type WebhookInput = typeof WebhookInput.Type;

// Output Schema (GraphQL selection set)
export const WebhookOutput = Schema.Unknown;
export type WebhookOutput = typeof WebhookOutput.Type;

/**
 * Mutations that create, delete, update Webhooks
 */
export const webhook = API.make(() => ({
  inputSchema: WebhookInput,
  outputSchema: WebhookOutput,
}));
