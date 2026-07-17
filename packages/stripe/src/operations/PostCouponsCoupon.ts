import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostCouponsCouponInput {
  coupon: string;
  currency_options?: Record<string, { amount_off: number }>;
  expand?: string[];
  metadata?: Record<string, string> | "";
  name?: string;
}
export const PostCouponsCouponInput = /*@__PURE__*/ Schema.Struct({
  coupon: Schema.String.pipe(T.PathParam()),
  currency_options: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Struct({
        amount_off: Schema.Number,
      }),
    ),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  metadata: Schema.optional(
    Schema.Union([
      Schema.Record(Schema.String, Schema.String),
      Schema.Literals([""]),
    ]),
  ),
  name: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/coupons/{coupon}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostCouponsCouponInput>;

// Output Schema
export interface PostCouponsCouponOutput {
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
export const PostCouponsCouponOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PostCouponsCouponOutput>;

// The operation
/**
 * Update a coupon
 *
 * <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>
 */
export const PostCouponsCoupon = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostCouponsCouponInput,
  outputSchema: PostCouponsCouponOutput,
}));
