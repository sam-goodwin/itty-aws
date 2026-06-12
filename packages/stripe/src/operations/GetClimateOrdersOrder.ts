import * as Schema from "effect/Schema";
import {
  climate_removals_beneficiarySchema,
  climate_removals_order_deliveriesSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetClimateOrdersOrderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/climate/orders/{order}",
      contentType: "form-urlencoded",
    }),
  );
export type GetClimateOrdersOrderInput = typeof GetClimateOrdersOrderInput.Type;

// Output Schema
export const GetClimateOrdersOrderOutput =
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
export type GetClimateOrdersOrderOutput =
  typeof GetClimateOrdersOrderOutput.Type;

// The operation
/**
 * Retrieve an order
 *
 * <p>Retrieves the details of a Climate order object with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param order - Unique identifier of the order.
 */
export const GetClimateOrdersOrder = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetClimateOrdersOrderInput,
    outputSchema: GetClimateOrdersOrderOutput,
  }),
);
