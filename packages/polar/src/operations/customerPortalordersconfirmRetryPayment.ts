import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalordersconfirmRetryPaymentInput {
  id: string;
  confirmation_token_id?: string | null;
  payment_method_id?: string | null;
  payment_processor?: "stripe";
}
export const CustomerPortalordersconfirmRetryPaymentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    confirmation_token_id: Schema.optional(Schema.NullOr(Schema.String)),
    payment_method_id: Schema.optional(Schema.NullOr(Schema.String)),
    payment_processor: Schema.optional(Schema.Literals(["stripe"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/orders/{id}/confirm-payment",
    }),
  ) as unknown as Schema.Codec<CustomerPortalordersconfirmRetryPaymentInput>;

// Output Schema
export interface CustomerPortalordersconfirmRetryPaymentOutput {
  status: string;
  client_secret?: string | null;
  error?: string | null;
}
export const CustomerPortalordersconfirmRetryPaymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.String,
    client_secret: Schema.optional(Schema.NullOr(Schema.String)),
    error: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<CustomerPortalordersconfirmRetryPaymentOutput>;

// The operation
/**
 * Confirm Retry Payment
 *
 * Confirm a retry payment using a Stripe confirmation token.
 *
 * @param id - The order ID.
 */
export const customerPortalordersconfirmRetryPayment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalordersconfirmRetryPaymentInput,
    outputSchema: CustomerPortalordersconfirmRetryPaymentOutput,
  }));
