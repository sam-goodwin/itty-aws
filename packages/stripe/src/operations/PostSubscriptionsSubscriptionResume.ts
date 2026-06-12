import * as Schema from "effect/Schema";
import {
  subscription_automatic_taxSchema,
  subscription_itemSchema,
  subscriptions_resource_billing_modeSchema,
  subscriptions_resource_subscription_invoice_settingsSchema,
  subscriptions_resource_subscription_presentment_detailsSchema,
  tax_rateSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostSubscriptionsSubscriptionResumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription: Schema.String.pipe(T.PathParam()),
    billing_cycle_anchor: Schema.optional(
      Schema.Literals(["now", "unchanged"]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    proration_behavior: Schema.optional(
      Schema.Literals(["always_invoice", "create_prorations", "none"]),
    ),
    proration_date: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/subscriptions/{subscription}/resume",
      contentType: "form-urlencoded",
    }),
  );
export type PostSubscriptionsSubscriptionResumeInput =
  typeof PostSubscriptionsSubscriptionResumeInput.Type;

// Output Schema
export const PostSubscriptionsSubscriptionResumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application: Schema.Unknown,
    application_fee_percent: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.suspend(() => subscription_automatic_taxSchema),
    billing_cycle_anchor: Schema.Number,
    billing_cycle_anchor_config: Schema.Unknown,
    billing_mode: Schema.suspend(
      () => subscriptions_resource_billing_modeSchema,
    ),
    billing_thresholds: Schema.Unknown,
    cancel_at: Schema.NullOr(Schema.Number),
    cancel_at_period_end: Schema.Boolean,
    canceled_at: Schema.NullOr(Schema.Number),
    cancellation_details: Schema.Unknown,
    collection_method: Schema.Literals([
      "charge_automatically",
      "send_invoice",
    ]),
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    days_until_due: Schema.NullOr(Schema.Number),
    default_payment_method: Schema.Unknown,
    default_source: Schema.Unknown,
    default_tax_rates: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.suspend(() => tax_rateSchema))),
    ),
    description: Schema.NullOr(Schema.String),
    discounts: Schema.Array(Schema.Unknown),
    ended_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    invoice_settings: Schema.suspend(
      () => subscriptions_resource_subscription_invoice_settingsSchema,
    ),
    items: Schema.Struct({
      data: Schema.Array(Schema.suspend(() => subscription_itemSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    latest_invoice: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    next_pending_invoice_item_invoice: Schema.NullOr(Schema.Number),
    object: Schema.Literals(["subscription"]),
    on_behalf_of: Schema.Unknown,
    pause_collection: Schema.Unknown,
    payment_settings: Schema.Unknown,
    pending_invoice_item_interval: Schema.Unknown,
    pending_setup_intent: Schema.Unknown,
    pending_update: Schema.Unknown,
    presentment_details: Schema.optional(
      Schema.suspend(
        () => subscriptions_resource_subscription_presentment_detailsSchema,
      ),
    ),
    schedule: Schema.Unknown,
    start_date: Schema.Number,
    status: Schema.Literals([
      "active",
      "canceled",
      "incomplete",
      "incomplete_expired",
      "past_due",
      "paused",
      "trialing",
      "unpaid",
    ]),
    test_clock: Schema.Unknown,
    transfer_data: Schema.Unknown,
    trial_end: Schema.NullOr(Schema.Number),
    trial_settings: Schema.Unknown,
    trial_start: Schema.NullOr(Schema.Number),
  });
export type PostSubscriptionsSubscriptionResumeOutput =
  typeof PostSubscriptionsSubscriptionResumeOutput.Type;

// The operation
/**
 * Resume a subscription
 *
 * <p>Initiates resumption of a paused subscription, optionally resetting the billing cycle anchor and creating prorations. If no resumption invoice is generated, the subscription becomes <code>active</code> immediately. If a resumption invoice is generated, the subscription remains <code>paused</code> until the invoice is paid or marked uncollectible. If the invoice is not paid by the expiration date, it is voided and the subscription remains <code>paused</code>.</p>
 */
export const PostSubscriptionsSubscriptionResume =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostSubscriptionsSubscriptionResumeInput,
    outputSchema: PostSubscriptionsSubscriptionResumeOutput,
  }));
