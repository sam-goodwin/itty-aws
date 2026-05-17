import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalordersinvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/orders/{id}/invoice" }),
  );
export type CustomerPortalordersinvoiceInput =
  typeof CustomerPortalordersinvoiceInput.Type;

// Output Schema
export const CustomerPortalordersinvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export type CustomerPortalordersinvoiceOutput =
  typeof CustomerPortalordersinvoiceOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
