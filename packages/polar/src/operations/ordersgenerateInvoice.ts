import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrdersgenerateInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "POST", path: "/v1/orders/{id}/invoice" }));
export type OrdersgenerateInvoiceInput = typeof OrdersgenerateInvoiceInput.Type;

// Output Schema
export const OrdersgenerateInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrdersgenerateInvoiceOutput =
  typeof OrdersgenerateInvoiceOutput.Type;

// The operation
/**
 * Generate Order Invoice
 *
 * Trigger generation of an order's invoice.
 * **Scopes**: `orders:read`
 *
 * @param id - The order ID.
 */
export const ordersgenerateInvoice = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrdersgenerateInvoiceInput,
    outputSchema: OrdersgenerateInvoiceOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
