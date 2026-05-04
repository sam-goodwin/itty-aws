import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomersconfirmPaymentMethodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setup_intent_id: Schema.String,
    set_default: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/customers/me/payment-methods/confirm",
    }),
  );
export type CustomerPortalcustomersconfirmPaymentMethodInput =
  typeof CustomerPortalcustomersconfirmPaymentMethodInput.Type;

// Output Schema
export const CustomerPortalcustomersconfirmPaymentMethodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomerPortalcustomersconfirmPaymentMethodOutput =
  typeof CustomerPortalcustomersconfirmPaymentMethodOutput.Type;

// The operation
/**
 * Confirm Customer Payment Method
 *
 * Confirm a payment method for the authenticated customer.
 */
export const customerPortalcustomersconfirmPaymentMethod =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomersconfirmPaymentMethodInput,
    outputSchema: CustomerPortalcustomersconfirmPaymentMethodOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
