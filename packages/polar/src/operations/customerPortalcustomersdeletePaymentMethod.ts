import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalcustomersdeletePaymentMethodInput {
  id: string;
}
export const CustomerPortalcustomersdeletePaymentMethodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/customer-portal/customers/me/payment-methods/{id}",
    }),
  ) as unknown as Schema.Codec<CustomerPortalcustomersdeletePaymentMethodInput>;

// Output Schema
export type CustomerPortalcustomersdeletePaymentMethodOutput = void;
export const CustomerPortalcustomersdeletePaymentMethodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomerPortalcustomersdeletePaymentMethodOutput>;

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
  }));
