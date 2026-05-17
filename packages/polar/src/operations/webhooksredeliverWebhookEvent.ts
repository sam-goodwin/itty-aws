import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const WebhooksredeliverWebhookEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/webhooks/events/{id}/redeliver" }),
  );
export type WebhooksredeliverWebhookEventInput =
  typeof WebhooksredeliverWebhookEventInput.Type;

// Output Schema
export const WebhooksredeliverWebhookEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebhooksredeliverWebhookEventOutput =
  typeof WebhooksredeliverWebhookEventOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }));
