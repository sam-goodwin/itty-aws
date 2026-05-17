import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrdersreceiptInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/orders/{id}/receipt" }));
export type OrdersreceiptInput = typeof OrdersreceiptInput.Type;

// Output Schema
export const OrdersreceiptOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
});
export type OrdersreceiptOutput = typeof OrdersreceiptOutput.Type;

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
  errors: [NotFound, UnprocessableEntity] as const,
}));
