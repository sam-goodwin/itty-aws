import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const BillingGetSubscriptionListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/billing/v1/subscriptions" }),
  );
export type BillingGetSubscriptionListV1Input =
  typeof BillingGetSubscriptionListV1Input.Type;

// Output Schema
export const BillingGetSubscriptionListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  );
export type BillingGetSubscriptionListV1Output =
  typeof BillingGetSubscriptionListV1Output.Type;

// The operation
/**
 * Get subscription list
 *
 * Retrieve a list of all subscriptions associated with your account.
 * Use this endpoint to monitor active services and billing status.
 */
export const billingGetSubscriptionListV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingGetSubscriptionListV1Input,
    outputSchema: BillingGetSubscriptionListV1Output,
  }));
