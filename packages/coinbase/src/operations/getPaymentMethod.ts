import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentMethodInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  paymentMethodId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/payment-methods/{paymentMethodId}" }),
);
export type GetPaymentMethodInput = typeof GetPaymentMethodInput.Type;

// Output Schema
export const GetPaymentMethodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetPaymentMethodOutput = typeof GetPaymentMethodOutput.Type;

// The operation
/**
 * Get payment method
 *
 * Get details of a specific payment method by its ID. Returns 404 if the payment method is not found or not owned by the requesting entity.
 *
 * @param paymentMethodId - The unique identifier of the payment method.
 */
export const getPaymentMethod = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPaymentMethodInput,
  outputSchema: GetPaymentMethodOutput,
}));
