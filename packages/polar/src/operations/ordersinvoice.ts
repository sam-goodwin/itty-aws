import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OrdersinvoiceInput {
  id: string;
}
export const OrdersinvoiceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/orders/{id}/invoice" }),
) as unknown as Schema.Codec<OrdersinvoiceInput>;

// Output Schema
export interface OrdersinvoiceOutput {
  url: string;
}
export const OrdersinvoiceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
}) as unknown as Schema.Codec<OrdersinvoiceOutput>;

// The operation
/**
 * Get Order Invoice
 *
 * Get an order's invoice data.
 * **Scopes**: `orders:read`
 *
 * @param id - The order ID.
 */
export const ordersinvoice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrdersinvoiceInput,
  outputSchema: OrdersinvoiceOutput,
}));
