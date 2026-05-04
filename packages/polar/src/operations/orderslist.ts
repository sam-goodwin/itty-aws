import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrderslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  product_id: Schema.optional(Schema.String),
  product_billing_type: Schema.optional(Schema.String),
  discount_id: Schema.optional(Schema.String),
  customer_id: Schema.optional(Schema.String),
  external_customer_id: Schema.optional(Schema.String),
  checkout_id: Schema.optional(Schema.String),
  subscription_id: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/orders/" }));
export type OrderslistInput = typeof OrderslistInput.Type;

// Output Schema
export const OrderslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      status: Schema.Literals([
        "pending",
        "paid",
        "refunded",
        "partially_refunded",
        "void",
      ]),
      paid: Schema.Boolean,
      subtotal_amount: Schema.Number,
      discount_amount: Schema.Number,
      net_amount: Schema.Number,
      tax_amount: Schema.Number,
      total_amount: Schema.Number,
      applied_balance_amount: Schema.Number,
      due_amount: Schema.Number,
      refunded_amount: Schema.Number,
      refunded_tax_amount: Schema.Number,
      currency: Schema.String,
      billing_reason: Schema.Literals([
        "purchase",
        "subscription_create",
        "subscription_cycle",
        "subscription_update",
      ]),
      billing_name: Schema.Unknown,
      billing_address: Schema.Unknown,
      invoice_number: Schema.String,
      is_invoice_generated: Schema.Boolean,
      receipt_number: Schema.Unknown,
      seats: Schema.optional(Schema.Unknown),
      customer_id: Schema.String,
      product_id: Schema.Unknown,
      discount_id: Schema.Unknown,
      subscription_id: Schema.Unknown,
      checkout_id: Schema.Unknown,
      metadata: Schema.Record(Schema.String, Schema.Unknown),
      custom_field_data: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      platform_fee_amount: Schema.Number,
      platform_fee_currency: Schema.Unknown,
      customer: Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        metadata: Schema.Record(Schema.String, Schema.Unknown),
        external_id: Schema.optional(Schema.Unknown),
        email: Schema.optional(Schema.Unknown),
        email_verified: Schema.Boolean,
        type: Schema.Literals(["individual", "team"]),
        name: Schema.Unknown,
        billing_address: Schema.Unknown,
        tax_id: Schema.Unknown,
        locale: Schema.optional(Schema.Unknown),
        organization_id: Schema.String,
        deleted_at: Schema.Unknown,
        avatar_url: Schema.String,
      }),
      product: Schema.Unknown,
      discount: Schema.Unknown,
      subscription: Schema.Unknown,
      items: Schema.Array(
        Schema.Struct({
          created_at: Schema.String,
          modified_at: Schema.Unknown,
          id: Schema.String,
          label: Schema.String,
          amount: Schema.Number,
          tax_amount: Schema.Number,
          proration: Schema.Boolean,
          product_price_id: Schema.Unknown,
        }),
      ),
      description: Schema.String,
      refundable_amount: Schema.Number,
      refundable_tax_amount: Schema.Number,
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type OrderslistOutput = typeof OrderslistOutput.Type;

// The operation
/**
 * List Orders
 *
 * List orders.
 * **Scopes**: `orders:read`
 *
 * @param organization_id - Filter by organization ID.
 * @param product_id - Filter by product ID.
 * @param product_billing_type - Filter by product billing type. `recurring` will filter data corresponding to subscriptions creations or renewals. `one_time` will filter data corresponding to one-time purchases.
 * @param discount_id - Filter by discount ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param checkout_id - Filter by checkout ID.
 * @param subscription_id - Filter by subscription ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const orderslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderslistInput,
  outputSchema: OrderslistOutput,
  errors: [UnprocessableEntity] as const,
}));
