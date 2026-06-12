import * as Schema from "effect/Schema";
import {
  climate_removals_beneficiarySchema,
  climate_removals_order_deliveriesSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostClimateOrdersOrderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order: Schema.String.pipe(T.PathParam()),
    beneficiary: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/climate/orders/{order}",
      contentType: "form-urlencoded",
    }),
  );
export type PostClimateOrdersOrderInput =
  typeof PostClimateOrdersOrderInput.Type;

// Output Schema
export const PostClimateOrdersOrderOutput =
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
export type PostClimateOrdersOrderOutput =
  typeof PostClimateOrdersOrderOutput.Type;

// The operation
/**
 * Update an order
 *
 * <p>Updates the specified order by setting the values of the parameters passed.</p>
 *
 * @param order - Unique identifier of the order.
 */
export const PostClimateOrdersOrder = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostClimateOrdersOrderInput,
    outputSchema: PostClimateOrdersOrderOutput,
  }),
);
