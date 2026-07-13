import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface WebhooksredeliverWebhookEventInput {
  id: string;
}
export const WebhooksredeliverWebhookEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/webhooks/events/{id}/redeliver" }),
  ) as unknown as Schema.Codec<WebhooksredeliverWebhookEventInput>;

// Output Schema
export type WebhooksredeliverWebhookEventOutput = void;
export const WebhooksredeliverWebhookEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WebhooksredeliverWebhookEventOutput>;

// The operation
/**
 * Redeliver Webhook Event
 *
 * Schedule the re-delivery of a webhook event.
 * **Scopes**: `webhooks:write`
 *
 * @param id - The webhook event ID.
 */
export const webhooksredeliverWebhookEvent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhooksredeliverWebhookEventInput,
    outputSchema: WebhooksredeliverWebhookEventOutput,
  }));
