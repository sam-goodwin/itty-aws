import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetCouponsCouponInput {
  coupon: string;
  expand?: string;
}
export const GetCouponsCouponInput = /*@__PURE__*/ Schema.Struct({
  coupon: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/coupons/{coupon}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetCouponsCouponInput>;

// Output Schema
export interface GetCouponsCouponOutput {
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
export const GetCouponsCouponOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetCouponsCouponOutput>;

// The operation
/**
 * Retrieve a coupon
 *
 * <p>Retrieves the coupon with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCouponsCoupon = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetCouponsCouponInput,
  outputSchema: GetCouponsCouponOutput,
}));
