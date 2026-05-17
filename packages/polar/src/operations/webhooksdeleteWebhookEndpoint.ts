import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const WebhooksdeleteWebhookEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v1/webhooks/endpoints/{id}" }));
export type WebhooksdeleteWebhookEndpointInput =
  typeof WebhooksdeleteWebhookEndpointInput.Type;

// Output Schema
export const WebhooksdeleteWebhookEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebhooksdeleteWebhookEndpointOutput =
  typeof WebhooksdeleteWebhookEndpointOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }));
