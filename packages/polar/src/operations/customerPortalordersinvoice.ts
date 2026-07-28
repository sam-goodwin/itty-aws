import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalordersinvoiceInput {
  id: string;
}
export const CustomerPortalordersinvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/orders/{id}/invoice" }),
  ) as unknown as Schema.Codec<CustomerPortalordersinvoiceInput>;

// Output Schema
export interface CustomerPortalordersinvoiceOutput {
  url: string;
}
export const CustomerPortalordersinvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  }) as unknown as Schema.Codec<CustomerPortalordersinvoiceOutput>;

// The operation
/**
 * Get Order Invoice
 *
 * Get an order's invoice data.
 *
 * @param id - The order ID.
 */
export const customerPortalordersinvoice = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerPortalordersinvoiceInput,
    outputSchema: CustomerPortalordersinvoiceOutput,
  }),
);
