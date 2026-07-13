import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OrdersexportInput {
  organization_id?: string | ReadonlyArray<string> | null;
  product_id?: string | ReadonlyArray<string> | null;
}
export const OrdersexportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  product_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/orders/export" }),
) as unknown as Schema.Codec<OrdersexportInput>;

// Output Schema
export type OrdersexportOutput = void;
export const OrdersexportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrdersexportOutput>;

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
}));
