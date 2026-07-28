import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OrdersreceiptInput {
  id: string;
}
export const OrdersreceiptInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/orders/{id}/receipt" }),
) as unknown as Schema.Codec<OrdersreceiptInput>;

// Output Schema
export interface OrdersreceiptOutput {
  url: string;
}
export const OrdersreceiptOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
}) as unknown as Schema.Codec<OrdersreceiptOutput>;

// The operation
/**
 * Get Order Receipt
 *
 * Get a presigned URL to download an order's receipt PDF.
 * **Scopes**: `orders:read`
 *
 * @param id - The order ID.
 */
export const ordersreceipt = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrdersreceiptInput,
  outputSchema: OrdersreceiptOutput,
}));
