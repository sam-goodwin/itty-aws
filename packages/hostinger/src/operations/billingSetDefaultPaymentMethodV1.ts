import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const BillingSetDefaultPaymentMethodV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paymentMethodId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/billing/v1/payment-methods/{paymentMethodId}",
    }),
  );
export type BillingSetDefaultPaymentMethodV1Input =
  typeof BillingSetDefaultPaymentMethodV1Input.Type;

// Output Schema
export const BillingSetDefaultPaymentMethodV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type BillingSetDefaultPaymentMethodV1Output =
  typeof BillingSetDefaultPaymentMethodV1Output.Type;

// The operation
/**
 * Set default payment method
 *
 * Set the default payment method for your account.
 * Use this endpoint to configure the primary payment method for future orders.
 *
 * @param paymentMethodId - Payment method ID
 */
export const billingSetDefaultPaymentMethodV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSetDefaultPaymentMethodV1Input,
    outputSchema: BillingSetDefaultPaymentMethodV1Output,
  }));
