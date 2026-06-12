import * as Schema from "effect/Schema";
import { payment_method_domain_resource_payment_method_statusSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostPaymentMethodDomainsPaymentMethodDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_method_domain: Schema.String.pipe(T.PathParam()),
    enabled: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_method_domains/{payment_method_domain}",
      contentType: "form-urlencoded",
    }),
  );
export type PostPaymentMethodDomainsPaymentMethodDomainInput =
  typeof PostPaymentMethodDomainsPaymentMethodDomainInput.Type;

// Output Schema
export const PostPaymentMethodDomainsPaymentMethodDomainOutput =
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
export type PostPaymentMethodDomainsPaymentMethodDomainOutput =
  typeof PostPaymentMethodDomainsPaymentMethodDomainOutput.Type;

// The operation
/**
 * Update a payment method domain
 *
 * <p>Updates an existing payment method domain.</p>
 */
export const PostPaymentMethodDomainsPaymentMethodDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostPaymentMethodDomainsPaymentMethodDomainInput,
    outputSchema: PostPaymentMethodDomainsPaymentMethodDomainOutput,
  }));
