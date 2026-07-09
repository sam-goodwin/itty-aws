import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const BillingDeletePaymentMethodV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paymentMethodId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/billing/v1/payment-methods/{paymentMethodId}",
    }),
  );
export type BillingDeletePaymentMethodV1Input =
  typeof BillingDeletePaymentMethodV1Input.Type;

// Output Schema
export const BillingDeletePaymentMethodV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type BillingDeletePaymentMethodV1Output =
  typeof BillingDeletePaymentMethodV1Output.Type;

// The operation
/**
 * Delete payment method
 *
 * Delete a payment method from your account.
 * Use this endpoint to remove unused payment methods from user accounts.
 *
 * @param paymentMethodId - Payment method ID
 */
export const billingDeletePaymentMethodV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingDeletePaymentMethodV1Input,
    outputSchema: BillingDeletePaymentMethodV1Output,
  }));
