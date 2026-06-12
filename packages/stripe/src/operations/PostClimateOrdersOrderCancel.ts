import * as Schema from "effect/Schema";
import {
  climate_removals_beneficiarySchema,
  climate_removals_order_deliveriesSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostClimateOrdersOrderCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/climate/orders/{order}/cancel",
      contentType: "form-urlencoded",
    }),
  );
export type PostClimateOrdersOrderCancelInput =
  typeof PostClimateOrdersOrderCancelInput.Type;

// Output Schema
export const PostClimateOrdersOrderCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_fees: Schema.Number,
    amount_subtotal: Schema.Number,
    amount_total: Schema.Number,
    beneficiary: Schema.optional(
      Schema.suspend(() => climate_removals_beneficiarySchema),
    ),
    canceled_at: Schema.NullOr(Schema.Number),
    cancellation_reason: Schema.NullOr(
      Schema.Literals(["expired", "product_unavailable", "requested"]),
    ),
    certificate: Schema.NullOr(Schema.String),
    confirmed_at: Schema.NullOr(Schema.Number),
    created: Schema.Number,
    currency: Schema.String,
    delayed_at: Schema.NullOr(Schema.Number),
    delivered_at: Schema.NullOr(Schema.Number),
    delivery_details: Schema.Array(
      Schema.suspend(() => climate_removals_order_deliveriesSchema),
    ),
    expected_delivery_year: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    metric_tons: Schema.String,
    object: Schema.Literals(["climate.order"]),
    product: Schema.Unknown,
    product_substituted_at: Schema.NullOr(Schema.Number),
    status: Schema.Literals([
      "awaiting_funds",
      "canceled",
      "confirmed",
      "delivered",
      "open",
    ]),
  });
export type PostClimateOrdersOrderCancelOutput =
  typeof PostClimateOrdersOrderCancelOutput.Type;

// The operation
/**
 * Cancel an order
 *
 * <p>Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
 * reservation <code>amount_subtotal</code>, but not the <code>amount_fees</code> for user-triggered cancellations. Frontier
 * might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
 * provides 90 days advance notice and refunds the <code>amount_total</code>.</p>
 *
 * @param order - Unique identifier of the order.
 */
export const PostClimateOrdersOrderCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostClimateOrdersOrderCancelInput,
    outputSchema: PostClimateOrdersOrderCancelOutput,
  }));
