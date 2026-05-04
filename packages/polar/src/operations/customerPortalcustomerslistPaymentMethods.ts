import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomerslistPaymentMethodsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/customers/me/payment-methods",
    }),
  );
export type CustomerPortalcustomerslistPaymentMethodsInput =
  typeof CustomerPortalcustomerslistPaymentMethodsInput.Type;

// Output Schema
export const CustomerPortalcustomerslistPaymentMethodsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(Schema.Unknown),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type CustomerPortalcustomerslistPaymentMethodsOutput =
  typeof CustomerPortalcustomerslistPaymentMethodsOutput.Type;

// The operation
/**
 * List Customer Payment Methods
 *
 * Get saved payment methods of the authenticated customer.
 *
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const customerPortalcustomerslistPaymentMethods =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomerslistPaymentMethodsInput,
    outputSchema: CustomerPortalcustomerslistPaymentMethodsOutput,
    errors: [UnprocessableEntity] as const,
  }));
