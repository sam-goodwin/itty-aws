import * as Schema from "effect/Schema";
import {
  invoice_line_item_periodSchema,
  proration_detailsSchema,
  tax_rateSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetInvoiceitemsInvoiceitemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invoiceitem: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/invoiceitems/{invoiceitem}",
      contentType: "form-urlencoded",
    }),
  );
export type GetInvoiceitemsInvoiceitemInput =
  typeof GetInvoiceitemsInvoiceitemInput.Type;

// Output Schema
export const GetInvoiceitemsInvoiceitemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    date: Schema.Number,
    description: Schema.NullOr(Schema.String),
    discountable: Schema.Boolean,
    discounts: Schema.NullOr(Schema.Array(Schema.Unknown)),
    id: Schema.String,
    invoice: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    net_amount: Schema.optional(Schema.Number),
    object: Schema.Literals(["invoiceitem"]),
    parent: Schema.Unknown,
    period: Schema.suspend(() => invoice_line_item_periodSchema),
    pricing: Schema.Unknown,
    proration: Schema.Boolean,
    proration_details: Schema.optional(
      Schema.suspend(() => proration_detailsSchema),
    ),
    quantity: Schema.Number,
    quantity_decimal: Schema.String,
    tax_rates: Schema.NullOr(
      Schema.Array(Schema.suspend(() => tax_rateSchema)),
    ),
    test_clock: Schema.Unknown,
  });
export type GetInvoiceitemsInvoiceitemOutput =
  typeof GetInvoiceitemsInvoiceitemOutput.Type;

// The operation
/**
 * Retrieve an invoice item
 *
 * <p>Retrieves the invoice item with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetInvoiceitemsInvoiceitem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetInvoiceitemsInvoiceitemInput,
    outputSchema: GetInvoiceitemsInvoiceitemOutput,
  }),
);
