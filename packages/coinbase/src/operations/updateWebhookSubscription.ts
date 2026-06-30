import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UpdateWebhookSubscriptionInput {
  subscriptionId: string;
  description?: string;
  eventTypes: (
    | "onchain.activity.detected"
    | "wallet.activity.detected"
    | "wallet.activity.multi"
    | "wallet.transaction.created"
    | "wallet.transaction.signed"
    | "wallet.transaction.broadcast"
    | "wallet.transaction.replaced"
    | "wallet.transaction.pending"
    | "wallet.transaction.confirmed"
    | "wallet.transaction.failed"
    | "wallet.delegation.created"
    | "wallet.delegation.revoked"
    | "wallet.typed_data.signed"
    | "wallet.message.signed"
    | "wallet.hash.signed"
    | "onramp.transaction.created"
    | "onramp.transaction.updated"
    | "onramp.transaction.success"
    | "onramp.transaction.failed"
    | "offramp.transaction.created"
    | "offramp.transaction.updated"
    | "offramp.transaction.success"
    | "offramp.transaction.failed"
  )[];
  isEnabled: boolean;
  target: { url: string; headers?: Record<string, string> };
  metadata?: Record<string, string>;
  labels?: Record<string, string>;
}
export const UpdateWebhookSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
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
    target: Schema.Struct({
      url: Schema.String,
      headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/v2/data/webhooks/subscriptions/{subscriptionId}",
    }),
  ) as unknown as Schema.Codec<UpdateWebhookSubscriptionInput>;

// Output Schema
export interface UpdateWebhookSubscriptionOutput {
  createdAt: string;
  updatedAt?: string;
  description?: string;
  eventTypes: (
    | "onchain.activity.detected"
    | "wallet.activity.detected"
    | "wallet.activity.multi"
    | "wallet.transaction.created"
    | "wallet.transaction.signed"
    | "wallet.transaction.broadcast"
    | "wallet.transaction.replaced"
    | "wallet.transaction.pending"
    | "wallet.transaction.confirmed"
    | "wallet.transaction.failed"
    | "wallet.delegation.created"
    | "wallet.delegation.revoked"
    | "wallet.typed_data.signed"
    | "wallet.message.signed"
    | "wallet.hash.signed"
    | "onramp.transaction.created"
    | "onramp.transaction.updated"
    | "onramp.transaction.success"
    | "onramp.transaction.failed"
    | "offramp.transaction.created"
    | "offramp.transaction.updated"
    | "offramp.transaction.success"
    | "offramp.transaction.failed"
  )[];
  isEnabled: boolean;
  metadata?: { secret?: Redacted.Redacted<string> };
  secret: Redacted.Redacted<string>;
  subscriptionId: string;
  target: { url: string; headers?: Record<string, string> };
  labels?: Record<string, string>;
}
export const UpdateWebhookSubscriptionOutput =
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
  }) as unknown as Schema.Codec<UpdateWebhookSubscriptionOutput>;

// The operation
/**
 * Update webhook subscription
 *
 * Update an existing webhook subscription's configuration including
 * event types, target URL, filtering criteria, and enabled status.
 * All required fields must be provided, even if they are not being changed.
 * ### Common Updates
 * - Change target URL or headers
 * - Add/remove event type filters
 * - Update multi-label filtering criteria
 * - Enable/disable subscription
 *
 * @param subscriptionId - Unique identifier for the webhook subscription.
 */
export const updateWebhookSubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateWebhookSubscriptionInput,
    outputSchema: UpdateWebhookSubscriptionOutput,
  }),
);
