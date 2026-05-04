import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalordersupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    billing_name: Schema.optional(Schema.Unknown),
    billing_address: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PATCH", path: "/v1/customer-portal/orders/{id}" }));
export type CustomerPortalordersupdateInput =
  typeof CustomerPortalordersupdateInput.Type;

// Output Schema
export const CustomerPortalordersupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    product: Schema.Unknown,
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
    next_payment_attempt_at: Schema.optional(Schema.Unknown),
    refundable_amount: Schema.Number,
    refundable_tax_amount: Schema.Number,
  });
export type CustomerPortalordersupdateOutput =
  typeof CustomerPortalordersupdateOutput.Type;

// The operation
/**
 * Update Order
 *
 * Update an order for the authenticated customer.
 *
 * @param id - The order ID.
 */
export const customerPortalordersupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerPortalordersupdateInput,
    outputSchema: CustomerPortalordersupdateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
