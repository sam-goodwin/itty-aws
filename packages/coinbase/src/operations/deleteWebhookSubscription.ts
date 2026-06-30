import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteWebhookSubscriptionInput {
  subscriptionId: string;
}
export const DeleteWebhookSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/data/webhooks/subscriptions/{subscriptionId}",
    }),
  ) as unknown as Schema.Codec<DeleteWebhookSubscriptionInput>;

// Output Schema
export type DeleteWebhookSubscriptionOutput = void;
export const DeleteWebhookSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteWebhookSubscriptionOutput>;

// The operation
/**
 * Delete webhook subscription
 *
 * Permanently delete a webhook subscription and stop all event deliveries.
 * This action cannot be undone.
 * ### Important Notes
 * - All webhook deliveries will cease immediately
 * - Subscription cannot be recovered after deletion
 * - Consider disabling instead of deleting for temporary pauses
 *
 * @param subscriptionId - Unique identifier for the webhook subscription.
 */
export const deleteWebhookSubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteWebhookSubscriptionInput,
    outputSchema: DeleteWebhookSubscriptionOutput,
  }),
);
