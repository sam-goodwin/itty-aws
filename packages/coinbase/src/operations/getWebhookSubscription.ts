import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const GetWebhookSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/data/webhooks/subscriptions/{subscriptionId}",
    }),
  );
export type GetWebhookSubscriptionInput =
  typeof GetWebhookSubscriptionInput.Type;

// Output Schema
export const GetWebhookSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAt: Schema.String,
    updatedAt: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    eventTypes: Schema.Array(
      Schema.Literals([
        "onchain.activity.detected",
        "wallet.activity.detected",
        "wallet.activity.multi",
        "wallet.transaction.created",
        "wallet.transaction.signed",
        "wallet.transaction.broadcast",
        "wallet.transaction.replaced",
        "wallet.transaction.pending",
        "wallet.transaction.confirmed",
        "wallet.transaction.failed",
        "wallet.delegation.created",
        "wallet.delegation.revoked",
        "wallet.typed_data.signed",
        "wallet.message.signed",
        "wallet.hash.signed",
        "onramp.transaction.created",
        "onramp.transaction.updated",
        "onramp.transaction.success",
        "onramp.transaction.failed",
        "offramp.transaction.created",
        "offramp.transaction.updated",
        "offramp.transaction.success",
        "offramp.transaction.failed",
      ]),
    ),
    isEnabled: Schema.Boolean,
    metadata: Schema.optional(
      Schema.Struct({
        secret: Schema.optional(SensitiveOutputString),
      }),
    ),
    secret: SensitiveOutputString,
    subscriptionId: Schema.String,
    target: Schema.Struct({
      url: Schema.String,
      headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type GetWebhookSubscriptionOutput =
  typeof GetWebhookSubscriptionOutput.Type;

// The operation
/**
 * Get webhook subscription
 *
 * Retrieve detailed information about a specific webhook subscription including
 * configuration, status, creation timestamp, and webhook signature secret.
 * ### Response Includes
 * - Subscription configuration and filters
 * - Target URL and custom headers
 * - Webhook signature secret for verification
 * - Creation timestamp and status
 *
 * @param subscriptionId - Unique identifier for the webhook subscription.
 */
export const getWebhookSubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetWebhookSubscriptionInput,
    outputSchema: GetWebhookSubscriptionOutput,
  }),
);
