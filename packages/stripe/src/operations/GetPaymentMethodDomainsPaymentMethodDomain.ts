import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetPaymentMethodDomainsPaymentMethodDomainInput {
  payment_method_domain: string;
  expand?: string;
}
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
  ) as unknown as Schema.Codec<GetPaymentMethodDomainsPaymentMethodDomainInput>;

// Output Schema
export interface GetPaymentMethodDomainsPaymentMethodDomainOutput {
  amazon_pay: {
    status: "active" | "inactive";
    status_details?: { error_message: string };
  };
  apple_pay: {
    status: "active" | "inactive";
    status_details?: { error_message: string };
  };
  created: number;
  domain_name: string;
  enabled: boolean;
  google_pay: {
    status: "active" | "inactive";
    status_details?: { error_message: string };
  };
  id: string;
  klarna: {
    status: "active" | "inactive";
    status_details?: { error_message: string };
  };
  link: {
    status: "active" | "inactive";
    status_details?: { error_message: string };
  };
  livemode: boolean;
  object: "payment_method_domain";
  paypal: {
    status: "active" | "inactive";
    status_details?: { error_message: string };
  };
}
export const GetPaymentMethodDomainsPaymentMethodDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazon_pay: Schema.Struct({
      status: Schema.Literals(["active", "inactive"]),
      status_details: Schema.optional(
        Schema.Struct({
          error_message: Schema.String,
        }),
      ),
    }),
    apple_pay: Schema.Struct({
      status: Schema.Literals(["active", "inactive"]),
      status_details: Schema.optional(
        Schema.Struct({
          error_message: Schema.String,
        }),
      ),
    }),
    created: Schema.Number,
    domain_name: Schema.String,
    enabled: Schema.Boolean,
    google_pay: Schema.Struct({
      status: Schema.Literals(["active", "inactive"]),
      status_details: Schema.optional(
        Schema.Struct({
          error_message: Schema.String,
        }),
      ),
    }),
    id: Schema.String,
    klarna: Schema.Struct({
      status: Schema.Literals(["active", "inactive"]),
      status_details: Schema.optional(
        Schema.Struct({
          error_message: Schema.String,
        }),
      ),
    }),
    link: Schema.Struct({
      status: Schema.Literals(["active", "inactive"]),
      status_details: Schema.optional(
        Schema.Struct({
          error_message: Schema.String,
        }),
      ),
    }),
    livemode: Schema.Boolean,
    object: Schema.Literals(["payment_method_domain"]),
    paypal: Schema.Struct({
      status: Schema.Literals(["active", "inactive"]),
      status_details: Schema.optional(
        Schema.Struct({
          error_message: Schema.String,
        }),
      ),
    }),
  }) as unknown as Schema.Codec<GetPaymentMethodDomainsPaymentMethodDomainOutput>;

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
