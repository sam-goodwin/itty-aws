import * as Schema from "effect/Schema";
import { payment_method_domain_resource_payment_method_statusSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostPaymentMethodDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain_name: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_method_domains",
      contentType: "form-urlencoded",
    }),
  );
export type PostPaymentMethodDomainsInput =
  typeof PostPaymentMethodDomainsInput.Type;

// Output Schema
export const PostPaymentMethodDomainsOutput =
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
export type PostPaymentMethodDomainsOutput =
  typeof PostPaymentMethodDomainsOutput.Type;

// The operation
/**
 * Create a payment method domain
 *
 * <p>Creates a payment method domain.</p>
 */
export const PostPaymentMethodDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostPaymentMethodDomainsInput,
    outputSchema: PostPaymentMethodDomainsOutput,
  }),
);
