import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalordersgenerateInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/customer-portal/orders/{id}/invoice" }),
  );
export type CustomerPortalordersgenerateInvoiceInput =
  typeof CustomerPortalordersgenerateInvoiceInput.Type;

// Output Schema
export const CustomerPortalordersgenerateInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerPortalordersgenerateInvoiceOutput =
  typeof CustomerPortalordersgenerateInvoiceOutput.Type;

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
    errors: [UnprocessableEntity] as const,
  }));
