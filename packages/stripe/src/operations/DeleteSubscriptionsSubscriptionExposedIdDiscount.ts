import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface DeleteSubscriptionsSubscriptionExposedIdDiscountInput {
  subscription_exposed_id: string;
}
export const DeleteSubscriptionsSubscriptionExposedIdDiscountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription_exposed_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/subscriptions/{subscription_exposed_id}/discount",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteSubscriptionsSubscriptionExposedIdDiscountInput>;

// Output Schema
export interface DeleteSubscriptionsSubscriptionExposedIdDiscountOutput {
  checkout_session: string | null;
  customer: unknown;
  customer_account: string | null;
  deleted: true;
  id: string;
  invoice: string | null;
  invoice_item: string | null;
  object: "discount";
  promotion_code:
    | string
    | {
        active: boolean;
        code: string;
        created: number;
        customer: unknown;
        customer_account: string | null;
        expires_at: number | null;
        id: string;
        livemode: boolean;
        max_redemptions: number | null;
        metadata: Record<string, string> | null;
        object: "promotion_code";
        promotion: {
          coupon:
            | string
            | {
                amount_off: number | null;
                applies_to?: { products: string[] };
                created: number;
                currency: string | null;
                currency_options?: Record<string, { amount_off: number }>;
                duration: "forever" | "once" | "repeating";
                duration_in_months: number | null;
                id: string;
                livemode: boolean;
                max_redemptions: number | null;
                metadata: Record<string, string> | null;
                name: string | null;
                object: "coupon";
                percent_off: number | null;
                redeem_by: number | null;
                times_redeemed: number;
                valid: boolean;
              }
            | null;
          type: "coupon";
        };
        restrictions: {
          currency_options?: Record<string, { minimum_amount: number }>;
          first_time_transaction: boolean;
          minimum_amount: number | null;
          minimum_amount_currency: string | null;
        };
        times_redeemed: number;
      }
    | null;
  source: {
    coupon:
      | string
      | {
          amount_off: number | null;
          applies_to?: { products: string[] };
          created: number;
          currency: string | null;
          currency_options?: Record<string, { amount_off: number }>;
          duration: "forever" | "once" | "repeating";
          duration_in_months: number | null;
          id: string;
          livemode: boolean;
          max_redemptions: number | null;
          metadata: Record<string, string> | null;
          name: string | null;
          object: "coupon";
          percent_off: number | null;
          redeem_by: number | null;
          times_redeemed: number;
          valid: boolean;
        }
      | null;
    type: "coupon";
  };
  start: number;
  subscription: string | null;
  subscription_item: string | null;
}
export const DeleteSubscriptionsSubscriptionExposedIdDiscountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    checkout_session: Schema.NullOr(Schema.String),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    deleted: Schema.Literals([true]),
    id: Schema.String,
    invoice: Schema.NullOr(Schema.String),
    invoice_item: Schema.NullOr(Schema.String),
    object: Schema.Literals(["discount"]),
    promotion_code: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          active: Schema.Boolean,
          code: Schema.String,
          created: Schema.Number,
          customer: Schema.Unknown,
          customer_account: Schema.NullOr(Schema.String),
          expires_at: Schema.NullOr(Schema.Number),
          id: Schema.String,
          livemode: Schema.Boolean,
          max_redemptions: Schema.NullOr(Schema.Number),
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          object: Schema.Literals(["promotion_code"]),
          promotion: Schema.Struct({
            coupon: Schema.NullOr(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  amount_off: Schema.NullOr(Schema.Number),
                  applies_to: Schema.optional(
                    Schema.Struct({
                      products: Schema.Array(Schema.String),
                    }),
                  ),
                  created: Schema.Number,
                  currency: Schema.NullOr(Schema.String),
                  currency_options: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        amount_off: Schema.Number,
                      }),
                    ),
                  ),
                  duration: Schema.Literals(["forever", "once", "repeating"]),
                  duration_in_months: Schema.NullOr(Schema.Number),
                  id: Schema.String,
                  livemode: Schema.Boolean,
                  max_redemptions: Schema.NullOr(Schema.Number),
                  metadata: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  name: Schema.NullOr(Schema.String),
                  object: Schema.Literals(["coupon"]),
                  percent_off: Schema.NullOr(Schema.Number),
                  redeem_by: Schema.NullOr(Schema.Number),
                  times_redeemed: Schema.Number,
                  valid: Schema.Boolean,
                }),
              ]),
            ),
            type: Schema.Literals(["coupon"]),
          }),
          restrictions: Schema.Struct({
            currency_options: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  minimum_amount: Schema.Number,
                }),
              ),
            ),
            first_time_transaction: Schema.Boolean,
            minimum_amount: Schema.NullOr(Schema.Number),
            minimum_amount_currency: Schema.NullOr(Schema.String),
          }),
          times_redeemed: Schema.Number,
        }),
      ]),
    ),
    source: Schema.Struct({
      coupon: Schema.NullOr(
        Schema.Union([
          Schema.String,
          Schema.Struct({
            amount_off: Schema.NullOr(Schema.Number),
            applies_to: Schema.optional(
              Schema.Struct({
                products: Schema.Array(Schema.String),
              }),
            ),
            created: Schema.Number,
            currency: Schema.NullOr(Schema.String),
            currency_options: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  amount_off: Schema.Number,
                }),
              ),
            ),
            duration: Schema.Literals(["forever", "once", "repeating"]),
            duration_in_months: Schema.NullOr(Schema.Number),
            id: Schema.String,
            livemode: Schema.Boolean,
            max_redemptions: Schema.NullOr(Schema.Number),
            metadata: Schema.NullOr(
              Schema.Record(Schema.String, Schema.String),
            ),
            name: Schema.NullOr(Schema.String),
            object: Schema.Literals(["coupon"]),
            percent_off: Schema.NullOr(Schema.Number),
            redeem_by: Schema.NullOr(Schema.Number),
            times_redeemed: Schema.Number,
            valid: Schema.Boolean,
          }),
        ]),
      ),
      type: Schema.Literals(["coupon"]),
    }),
    start: Schema.Number,
    subscription: Schema.NullOr(Schema.String),
    subscription_item: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<DeleteSubscriptionsSubscriptionExposedIdDiscountOutput>;

// The operation
/**
 * Delete a subscription discount
 *
 * <p>Removes the currently applied discount on a subscription.</p>
 */
export const DeleteSubscriptionsSubscriptionExposedIdDiscount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteSubscriptionsSubscriptionExposedIdDiscountInput,
    outputSchema: DeleteSubscriptionsSubscriptionExposedIdDiscountOutput,
  }));
