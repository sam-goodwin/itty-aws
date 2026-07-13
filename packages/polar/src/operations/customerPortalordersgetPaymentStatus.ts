import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalordersgetPaymentStatusInput {
  id: string;
}
export const CustomerPortalordersgetPaymentStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/orders/{id}/payment-status",
    }),
  ) as unknown as Schema.Codec<CustomerPortalordersgetPaymentStatusInput>;

// Output Schema
export interface CustomerPortalordersgetPaymentStatusOutput {
  status: string;
  error?: string | null;
}
export const CustomerPortalordersgetPaymentStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.String,
    error: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<CustomerPortalordersgetPaymentStatusOutput>;

// The operation
/**
 * Get Order Payment Status
 *
 * Get the current payment status for an order.
 *
 * @param id - The order ID.
 */
export const customerPortalordersgetPaymentStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalordersgetPaymentStatusInput,
    outputSchema: CustomerPortalordersgetPaymentStatusOutput,
  }));
