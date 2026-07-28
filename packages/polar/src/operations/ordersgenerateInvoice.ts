import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OrdersgenerateInvoiceInput {
  id: string;
}
export const OrdersgenerateInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/orders/{id}/invoice" }),
  ) as unknown as Schema.Codec<OrdersgenerateInvoiceInput>;

// Output Schema
export type OrdersgenerateInvoiceOutput = void;
export const OrdersgenerateInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrdersgenerateInvoiceOutput>;

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
  }),
);
