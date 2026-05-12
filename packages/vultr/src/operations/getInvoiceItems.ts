import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInvoiceItemsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invoiceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/billing/invoices/{invoiceId}/items" }));
export type GetInvoiceItemsInput = typeof GetInvoiceItemsInput.Type;

// Output Schema
export const GetInvoiceItemsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invoice_items: Schema.optional(
    Schema.Array(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        start_date: Schema.optional(Schema.String),
        end_date: Schema.optional(Schema.String),
        units: Schema.optional(Schema.Number),
        unit_type: Schema.optional(Schema.String),
        unit_price: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type GetInvoiceItemsOutput = typeof GetInvoiceItemsOutput.Type;

// The operation
/**
 * Get Invoice Items
 *
 * Retrieve full specified invoice
 *
 * @param invoiceId - ID of invoice
 */
export const getInvoiceItems = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInvoiceItemsInput,
  outputSchema: GetInvoiceItemsOutput,
  errors: [BadRequest, NotFound] as const,
}));
