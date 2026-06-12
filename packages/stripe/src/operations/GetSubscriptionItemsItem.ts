import * as Schema from "effect/Schema";
import { planSchema, priceSchema, tax_rateSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetSubscriptionItemsItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/subscription_items/{item}",
      contentType: "form-urlencoded",
    }),
  );
export type GetSubscriptionItemsItemInput =
  typeof GetSubscriptionItemsItemInput.Type;

// Output Schema
export const GetSubscriptionItemsItemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_thresholds: Schema.Unknown,
    created: Schema.Number,
    current_period_end: Schema.Number,
    current_period_start: Schema.Number,
    discounts: Schema.Array(Schema.Unknown),
    id: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["subscription_item"]),
    plan: Schema.suspend(() => planSchema),
    price: Schema.suspend(() => priceSchema),
    quantity: Schema.optional(Schema.Number),
    subscription: Schema.String,
    tax_rates: Schema.NullOr(
      Schema.Array(Schema.suspend(() => tax_rateSchema)),
    ),
  });
export type GetSubscriptionItemsItemOutput =
  typeof GetSubscriptionItemsItemOutput.Type;

// The operation
/**
 * Retrieve a subscription item
 *
 * <p>Retrieves the subscription item with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetSubscriptionItemsItem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetSubscriptionItemsItemInput,
    outputSchema: GetSubscriptionItemsItemOutput,
  }),
);
