import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateWebhookSubscriptionInput {
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
export const CreateWebhookSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
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
    T.Http({ method: "POST", path: "/v2/data/webhooks/subscriptions" }),
  ) as unknown as Schema.Codec<CreateWebhookSubscriptionInput>;

// Output Schema
export interface CreateWebhookSubscriptionOutput {
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
export const CreateWebhookSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CreateWebhookSubscriptionOutput>;

// The operation
/**
 * Create webhook subscription
 *
 * Subscribe to real-time events across CDP products.
 * ### Filtering
 * Onchain events can utilize multi-label filtering to only receive events that match all the specified labels.
 * Allows labels are:
 * - `network` (required) — Blockchain network
 * - `contract_address` — Smart contract address
 * - `event_name` — Event name (e.g., "Transfer", "Burn")
 * - `event_signature` — Event signature (e.g., "Transfer(address,address,uint256)")
 * - `transaction_from` — Transaction sender address
 * - `transaction_to` — Transaction recipient address
 * - `params.*` — Any event parameter from the log event (e.g., `params.from`, `params.to`, `params.sender`, `params.tokenId`)
 * For webhook types that aren't `onchain.*`, labels are ignored.
 * ### Webhook Signature Verification
 * All webhooks include an HMAC-SHA256 signed header for security. The signature is signed with the secret that is returned in the `secret` field when creating a subscription.
 * Do not lose the secret, as you will not be able to recreate it. If you lose the secret, you will need to create a new subscription.
 * See the [verification guide](https://docs.cdp.coinbase.com/onramp-&-offramp/webhooks#webhook-signature-verification) for implementation details.
 */
export const createWebhookSubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateWebhookSubscriptionInput,
  outputSchema: CreateWebhookSubscriptionOutput,
}));
