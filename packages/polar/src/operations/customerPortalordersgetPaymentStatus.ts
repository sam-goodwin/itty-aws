import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalordersgetPaymentStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/orders/{id}/payment-status",
    }),
  );
export type CustomerPortalordersgetPaymentStatusInput =
  typeof CustomerPortalordersgetPaymentStatusInput.Type;

// Output Schema
export const CustomerPortalordersgetPaymentStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.String,
    error: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type CustomerPortalordersgetPaymentStatusOutput =
  typeof CustomerPortalordersgetPaymentStatusOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }));
