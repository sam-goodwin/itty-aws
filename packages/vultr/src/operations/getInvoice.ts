import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetInvoiceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invoiceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/billing/invoices/{invoiceId}" }));
export type GetInvoiceInput = typeof GetInvoiceInput.Type;

// Output Schema
export const GetInvoiceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billing_invoice: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      date: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      amount: Schema.optional(Schema.Number),
      balance: Schema.optional(Schema.Number),
    }),
  ),
});
export type GetInvoiceOutput = typeof GetInvoiceOutput.Type;

// The operation
/**
 * Get Invoice
 *
 * Retrieve specified invoice
 *
 * @param invoiceId - ID of invoice
 */
export const getInvoice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInvoiceInput,
  outputSchema: GetInvoiceOutput,
  errors: [BadRequest, NotFound] as const,
}));
