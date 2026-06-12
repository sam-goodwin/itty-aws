import * as Schema from "effect/Schema";
import {
  invoice_line_item_periodSchema,
  proration_detailsSchema,
  tax_rateSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostInvoiceitemsInvoiceitemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invoiceitem: Schema.String.pipe(T.PathParam()),
    amount: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    discountable: Schema.optional(Schema.Boolean),
    discounts: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
    period: Schema.optional(
      Schema.Struct({
        end: Schema.Number,
        start: Schema.Number,
      }),
    ),
    price_data: Schema.optional(
      Schema.Struct({
        currency: Schema.String,
        product: Schema.String,
        tax_behavior: Schema.optional(
          Schema.Literals(["exclusive", "inclusive", "unspecified"]),
        ),
        unit_amount: Schema.optional(Schema.Number),
        unit_amount_decimal: Schema.optional(Schema.String),
      }),
    ),
    pricing: Schema.optional(
      Schema.Struct({
        price: Schema.optional(Schema.String),
      }),
    ),
    quantity: Schema.optional(Schema.Number),
    quantity_decimal: Schema.optional(Schema.String),
    tax_behavior: Schema.optional(
      Schema.Literals(["exclusive", "inclusive", "unspecified"]),
    ),
    tax_code: Schema.optional(Schema.Unknown),
    tax_rates: Schema.optional(Schema.Unknown),
    unit_amount_decimal: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/invoiceitems/{invoiceitem}",
      contentType: "form-urlencoded",
    }),
  );
export type PostInvoiceitemsInvoiceitemInput =
  typeof PostInvoiceitemsInvoiceitemInput.Type;

// Output Schema
export const PostInvoiceitemsInvoiceitemOutput =
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
export type PostInvoiceitemsInvoiceitemOutput =
  typeof PostInvoiceitemsInvoiceitemOutput.Type;

// The operation
/**
 * Update an invoice item
 *
 * <p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>
 */
export const PostInvoiceitemsInvoiceitem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostInvoiceitemsInvoiceitemInput,
    outputSchema: PostInvoiceitemsInvoiceitemOutput,
  }),
);
