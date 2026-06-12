import * as Schema from "effect/Schema";
import { payment_method_domain_resource_payment_method_statusSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentMethodDomainsPaymentMethodDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_method_domain: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/payment_method_domains/{payment_method_domain}",
      contentType: "form-urlencoded",
    }),
  );
export type GetPaymentMethodDomainsPaymentMethodDomainInput =
  typeof GetPaymentMethodDomainsPaymentMethodDomainInput.Type;

// Output Schema
export const GetPaymentMethodDomainsPaymentMethodDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazon_pay: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    apple_pay: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    created: Schema.Number,
    domain_name: Schema.String,
    enabled: Schema.Boolean,
    google_pay: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    id: Schema.String,
    klarna: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    link: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    livemode: Schema.Boolean,
    object: Schema.Literals(["payment_method_domain"]),
    paypal: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
  });
export type GetPaymentMethodDomainsPaymentMethodDomainOutput =
  typeof GetPaymentMethodDomainsPaymentMethodDomainOutput.Type;

// The operation
/**
 * Retrieve a payment method domain
 *
 * <p>Retrieves the details of an existing payment method domain.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetPaymentMethodDomainsPaymentMethodDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetPaymentMethodDomainsPaymentMethodDomainInput,
    outputSchema: GetPaymentMethodDomainsPaymentMethodDomainOutput,
  }));
