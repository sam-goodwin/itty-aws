import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalordersgenerateInvoiceInput {
  id: string;
}
export const CustomerPortalordersgenerateInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/customer-portal/orders/{id}/invoice" }),
  ) as unknown as Schema.Codec<CustomerPortalordersgenerateInvoiceInput>;

// Output Schema
export type CustomerPortalordersgenerateInvoiceOutput = void;
export const CustomerPortalordersgenerateInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomerPortalordersgenerateInvoiceOutput>;

// The operation
/**
 * Generate Order Invoice
 *
 * Trigger generation of an order's invoice.
 *
 * @param id - The order ID.
 */
export const customerPortalordersgenerateInvoice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalordersgenerateInvoiceInput,
    outputSchema: CustomerPortalordersgenerateInvoiceOutput,
  }));
