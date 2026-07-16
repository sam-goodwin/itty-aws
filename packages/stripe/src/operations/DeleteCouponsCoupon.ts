import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteCouponsCouponInput {
  coupon: string;
}
export const DeleteCouponsCouponInput =
  /*@__PURE__*/ Schema.Struct({
    coupon: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/coupons/{coupon}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteCouponsCouponInput>;

// Output Schema
export interface DeleteCouponsCouponOutput {
  deleted: true;
  id: string;
  object: "coupon";
}
export const DeleteCouponsCouponOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["coupon"]),
  }) as unknown as Schema.Codec<DeleteCouponsCouponOutput>;

// The operation
/**
 * Delete a coupon
 *
 * <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>
 */
export const DeleteCouponsCoupon = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteCouponsCouponInput,
  outputSchema: DeleteCouponsCouponOutput,
}));
