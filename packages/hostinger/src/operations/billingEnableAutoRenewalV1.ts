import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const BillingEnableAutoRenewalV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/billing/v1/subscriptions/{subscriptionId}/auto-renewal/enable",
    }),
  );
export type BillingEnableAutoRenewalV1Input =
  typeof BillingEnableAutoRenewalV1Input.Type;

// Output Schema
export const BillingEnableAutoRenewalV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "active",
        "paused",
        "cancelled",
        "not_renewing",
        "transferred",
        "in_trial",
        "future",
      ]),
    ),
    billing_period: Schema.optional(Schema.Number),
    billing_period_unit: Schema.optional(Schema.String),
    currency_code: Schema.optional(Schema.String),
    total_price: Schema.optional(Schema.Number),
    renewal_price: Schema.optional(Schema.Number),
    is_auto_renewed: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    next_billing_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type BillingEnableAutoRenewalV1Output =
  typeof BillingEnableAutoRenewalV1Output.Type;

// The operation
/**
 * Enable auto-renewal
 *
 * Enable auto-renewal for a subscription.
 * Use this endpoint when enable auto-renewal for a subscription.
 *
 * @param subscriptionId - Subscription ID
 */
export const billingEnableAutoRenewalV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingEnableAutoRenewalV1Input,
    outputSchema: BillingEnableAutoRenewalV1Output,
  }),
);
