import * as Schema from "effect/Schema";
import { planSchema, priceSchema, tax_rateSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostSubscriptionItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_thresholds: Schema.optional(Schema.Unknown),
    discounts: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    payment_behavior: Schema.optional(
      Schema.Literals([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ]),
    ),
    plan: Schema.optional(Schema.String),
    price: Schema.optional(Schema.String),
    price_data: Schema.optional(
      Schema.Struct({
        currency: Schema.String,
        product: Schema.String,
        recurring: Schema.Struct({
          interval: Schema.Literals(["day", "month", "week", "year"]),
          interval_count: Schema.optional(Schema.Number),
        }),
        tax_behavior: Schema.optional(
          Schema.Literals(["exclusive", "inclusive", "unspecified"]),
        ),
        unit_amount: Schema.optional(Schema.Number),
        unit_amount_decimal: Schema.optional(Schema.String),
      }),
    ),
    proration_behavior: Schema.optional(
      Schema.Literals(["always_invoice", "create_prorations", "none"]),
    ),
    proration_date: Schema.optional(Schema.Number),
    quantity: Schema.optional(Schema.Number),
    subscription: Schema.String,
    tax_rates: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/subscription_items",
      contentType: "form-urlencoded",
    }),
  );
export type PostSubscriptionItemsInput = typeof PostSubscriptionItemsInput.Type;

// Output Schema
export const PostSubscriptionItemsOutput =
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
export type PostSubscriptionItemsOutput =
  typeof PostSubscriptionItemsOutput.Type;

// The operation
/**
 * Create a subscription item
 *
 * <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>
 */
export const PostSubscriptionItems = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostSubscriptionItemsInput,
    outputSchema: PostSubscriptionItemsOutput,
  }),
);
