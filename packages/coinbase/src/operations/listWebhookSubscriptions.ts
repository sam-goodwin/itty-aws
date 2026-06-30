import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ListWebhookSubscriptionsInput {
  pageSize?: number;
  pageToken?: string;
}
export const ListWebhookSubscriptionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/data/webhooks/subscriptions" }),
  ) as unknown as Schema.Codec<ListWebhookSubscriptionsInput>;

// Output Schema
export interface ListWebhookSubscriptionsOutput {
  subscriptions: {
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
  }[];
  nextPageToken?: string;
}
export const ListWebhookSubscriptionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptions: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListWebhookSubscriptionsOutput>;

// The operation
/**
 * List webhook subscriptions
 *
 * Retrieve a paginated list of webhook subscriptions for the authenticated project.
 * Returns subscriptions for all CDP product events (onchain, onramp/offramp, wallet, etc.)
 * in descending order by creation time.
 * ### Use Cases
 * - Monitor all active webhook subscriptions across CDP products
 * - Audit webhook configurations
 * - Manage subscription lifecycle
 *
 * @param pageSize - The number of subscriptions to return per page.
 * @param pageToken - The token for the next page of subscriptions, if any.
 */
export const listWebhookSubscriptions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListWebhookSubscriptionsInput,
    outputSchema: ListWebhookSubscriptionsOutput,
  }),
);
