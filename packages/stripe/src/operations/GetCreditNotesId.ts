import * as Schema from "effect/Schema";
import {
  billing_bill_resource_invoicing_taxes_taxSchema,
  credit_note_line_itemSchema,
  credit_note_refundSchema,
  credit_notes_pretax_credit_amountSchema,
  discounts_resource_discount_amountSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCreditNotesIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/credit_notes/{id}",
    contentType: "form-urlencoded",
  }),
);
export type GetCreditNotesIdInput = typeof GetCreditNotesIdInput.Type;

// Output Schema
export const GetCreditNotesIdOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    amount: Schema.Number,
    amount_shipping: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_balance_transaction: Schema.Unknown,
    discount_amount: Schema.Number,
    discount_amounts: Schema.Array(
      Schema.suspend(() => discounts_resource_discount_amountSchema),
    ),
    effective_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    invoice: Schema.Unknown,
    lines: Schema.Struct({
      data: Schema.Array(Schema.suspend(() => credit_note_line_itemSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    livemode: Schema.Boolean,
    memo: Schema.NullOr(Schema.String),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    number: Schema.String,
    object: Schema.Literals(["credit_note"]),
    out_of_band_amount: Schema.NullOr(Schema.Number),
    pdf: Schema.String,
    post_payment_amount: Schema.Number,
    pre_payment_amount: Schema.Number,
    pretax_credit_amounts: Schema.Array(
      Schema.suspend(() => credit_notes_pretax_credit_amountSchema),
    ),
    reason: Schema.NullOr(
      Schema.Literals([
        "duplicate",
        "fraudulent",
        "order_change",
        "product_unsatisfactory",
      ]),
    ),
    refunds: Schema.Array(Schema.suspend(() => credit_note_refundSchema)),
    shipping_cost: Schema.Unknown,
    status: Schema.Literals(["issued", "void"]),
    subtotal: Schema.Number,
    subtotal_excluding_tax: Schema.NullOr(Schema.Number),
    total: Schema.Number,
    total_excluding_tax: Schema.NullOr(Schema.Number),
    total_taxes: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => billing_bill_resource_invoicing_taxes_taxSchema),
      ),
    ),
    type: Schema.Literals(["mixed", "post_payment", "pre_payment"]),
    voided_at: Schema.NullOr(Schema.Number),
  },
);
export type GetCreditNotesIdOutput = typeof GetCreditNotesIdOutput.Type;

// The operation
/**
 * Retrieve a credit note
 *
 * <p>Retrieves the credit note object with the given identifier.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCreditNotesId = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCreditNotesIdInput,
  outputSchema: GetCreditNotesIdOutput,
}));
