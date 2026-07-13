import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface WebhooksdeleteWebhookEndpointInput {
  id: string;
}
export const WebhooksdeleteWebhookEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/webhooks/endpoints/{id}" }),
  ) as unknown as Schema.Codec<WebhooksdeleteWebhookEndpointInput>;

// Output Schema
export type WebhooksdeleteWebhookEndpointOutput = void;
export const WebhooksdeleteWebhookEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WebhooksdeleteWebhookEndpointOutput>;

// The operation
/**
 * Delete Webhook Endpoint
 *
 * Delete a webhook endpoint.
 * **Scopes**: `webhooks:write`
 *
 * @param id - The webhook endpoint ID.
 */
export const webhooksdeleteWebhookEndpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhooksdeleteWebhookEndpointInput,
    outputSchema: WebhooksdeleteWebhookEndpointOutput,
  }));
