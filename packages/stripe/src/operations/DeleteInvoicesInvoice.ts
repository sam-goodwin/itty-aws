import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteInvoicesInvoiceInput {
  invoice: string;
}
export const DeleteInvoicesInvoiceInput =
  /*@__PURE__*/ Schema.Struct({
    invoice: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/invoices/{invoice}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteInvoicesInvoiceInput>;

// Output Schema
export interface DeleteInvoicesInvoiceOutput {
  deleted: true;
  id: string;
  object: "invoice";
}
export const DeleteInvoicesInvoiceOutput =
  /*@__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["invoice"]),
  }) as unknown as Schema.Codec<DeleteInvoicesInvoiceOutput>;

// The operation
/**
 * Delete a draft invoice
 *
 * <p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="/api/invoices/void">voided</a>.</p>
 */
export const DeleteInvoicesInvoice = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteInvoicesInvoiceInput,
  outputSchema: DeleteInvoicesInvoiceOutput,
}));
