import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomersdeletePaymentMethodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/customer-portal/customers/me/payment-methods/{id}",
    }),
  );
export type CustomerPortalcustomersdeletePaymentMethodInput =
  typeof CustomerPortalcustomersdeletePaymentMethodInput.Type;

// Output Schema
export const CustomerPortalcustomersdeletePaymentMethodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerPortalcustomersdeletePaymentMethodOutput =
  typeof CustomerPortalcustomersdeletePaymentMethodOutput.Type;

// The operation
/**
 * Delete Customer Payment Method
 *
 * Delete a payment method from the authenticated customer.
 */
export const customerPortalcustomersdeletePaymentMethod =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomersdeletePaymentMethodInput,
    outputSchema: CustomerPortalcustomersdeletePaymentMethodOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
