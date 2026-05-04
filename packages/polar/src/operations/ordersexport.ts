import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrdersexportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  product_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/orders/export" }));
export type OrdersexportInput = typeof OrdersexportInput.Type;

// Output Schema
export const OrdersexportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type OrdersexportOutput = typeof OrdersexportOutput.Type;

// The operation
/**
 * Export Orders
 *
 * Export orders as a CSV file.
 * **Scopes**: `orders:read`
 *
 * @param organization_id - Filter by organization ID.
 * @param product_id - Filter by product ID.
 */
export const ordersexport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrdersexportInput,
  outputSchema: OrdersexportOutput,
  errors: [UnprocessableEntity] as const,
}));
