import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPaymentMethodDomainsPaymentMethodDomainInput {
  payment_method_domain: string;
  enabled?: boolean;
  expand?: string[];
}
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
  ) as unknown as Schema.Codec<PostPaymentMethodDomainsPaymentMethodDomainInput>;

// Output Schema
export interface PostPaymentMethodDomainsPaymentMethodDomainOutput {
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
export const PostPaymentMethodDomainsPaymentMethodDomainOutput =
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
  }) as unknown as Schema.Codec<PostPaymentMethodDomainsPaymentMethodDomainOutput>;

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
