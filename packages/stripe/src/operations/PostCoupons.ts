import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostCouponsInput {
  amount_off?: number;
  applies_to?: { products?: string[] };
  currency?: string;
  currency_options?: Record<string, { amount_off: number }>;
  duration?: "forever" | "once" | "repeating";
  duration_in_months?: number;
  expand?: string[];
  id?: string;
  max_redemptions?: number;
  metadata?: Record<string, string> | "";
  name?: string;
  percent_off?: number;
  redeem_by?: number;
}
export const PostCouponsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount_off: Schema.optional(Schema.Number),
  applies_to: Schema.optional(
    Schema.Struct({
      products: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  currency: Schema.optional(Schema.String),
  currency_options: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Struct({
        amount_off: Schema.Number,
      }),
    ),
  ),
  duration: Schema.optional(Schema.Literals(["forever", "once", "repeating"])),
  duration_in_months: Schema.optional(Schema.Number),
  expand: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  max_redemptions: Schema.optional(Schema.Number),
  metadata: Schema.optional(
    Schema.Union([
      Schema.Record(Schema.String, Schema.String),
      Schema.Literals([""]),
    ]),
  ),
  name: Schema.optional(Schema.String),
  percent_off: Schema.optional(Schema.Number),
  redeem_by: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/coupons",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostCouponsInput>;

// Output Schema
export interface PostCouponsOutput {
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
export const PostCouponsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  name: Schema.NullOr(Schema.String),
  object: Schema.Literals(["coupon"]),
  percent_off: Schema.NullOr(Schema.Number),
  redeem_by: Schema.NullOr(Schema.Number),
  times_redeemed: Schema.Number,
  valid: Schema.Boolean,
}) as unknown as Schema.Codec<PostCouponsOutput>;

// The operation
/**
 * Create a coupon
 *
 * <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>
 * <p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>
 */
export const PostCoupons = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostCouponsInput,
  outputSchema: PostCouponsOutput,
}));
