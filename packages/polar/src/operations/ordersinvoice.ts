import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrdersinvoiceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/orders/{id}/invoice" }));
export type OrdersinvoiceInput = typeof OrdersinvoiceInput.Type;

// Output Schema
export const OrdersinvoiceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
});
export type OrdersinvoiceOutput = typeof OrdersinvoiceOutput.Type;

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
  errors: [NotFound, UnprocessableEntity] as const,
}));
