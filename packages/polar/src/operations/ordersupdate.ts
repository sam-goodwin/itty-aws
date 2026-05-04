import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrdersupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  billing_name: Schema.optional(Schema.Unknown),
  billing_address: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/v1/orders/{id}" }));
export type OrdersupdateInput = typeof OrdersupdateInput.Type;

// Output Schema
export const OrdersupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type OrdersupdateOutput = typeof OrdersupdateOutput.Type;

// The operation
/**
 * Update Order
 *
 * Update an order.
 * **Scopes**: `orders:write`
 *
 * @param id - The order ID.
 */
export const ordersupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrdersupdateInput,
  outputSchema: OrdersupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
