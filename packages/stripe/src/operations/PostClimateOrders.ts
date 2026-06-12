import * as Schema from "effect/Schema";
import {
  climate_removals_beneficiarySchema,
  climate_removals_order_deliveriesSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostClimateOrdersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    amount: Schema.optional(Schema.Number),
    beneficiary: Schema.optional(
      Schema.Struct({
        public_name: Schema.String,
      }),
    ),
    currency: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metric_tons: Schema.optional(Schema.String),
    product: Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/v1/climate/orders",
    contentType: "form-urlencoded",
  }),
);
export type PostClimateOrdersInput = typeof PostClimateOrdersInput.Type;

// Output Schema
export const PostClimateOrdersOutput =
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
export type PostClimateOrdersOutput = typeof PostClimateOrdersOutput.Type;

// The operation
/**
 * Create an order
 *
 * <p>Creates a Climate order object for a given Climate product. The order will be processed immediately
 * after creation and payment will be deducted your Stripe balance.</p>
 */
export const PostClimateOrders = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostClimateOrdersInput,
  outputSchema: PostClimateOrdersOutput,
}));
