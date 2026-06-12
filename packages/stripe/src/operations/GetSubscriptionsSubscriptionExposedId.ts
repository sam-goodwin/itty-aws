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
export const GetSubscriptionsSubscriptionExposedIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription_exposed_id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/subscriptions/{subscription_exposed_id}",
      contentType: "form-urlencoded",
    }),
  );
export type GetSubscriptionsSubscriptionExposedIdInput =
  typeof GetSubscriptionsSubscriptionExposedIdInput.Type;

// Output Schema
export const GetSubscriptionsSubscriptionExposedIdOutput =
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
export type GetSubscriptionsSubscriptionExposedIdOutput =
  typeof GetSubscriptionsSubscriptionExposedIdOutput.Type;

// The operation
/**
 * Retrieve a subscription
 *
 * <p>Retrieves the subscription with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetSubscriptionsSubscriptionExposedId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetSubscriptionsSubscriptionExposedIdInput,
    outputSchema: GetSubscriptionsSubscriptionExposedIdOutput,
  }));
