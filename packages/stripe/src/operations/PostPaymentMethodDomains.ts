import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostPaymentMethodDomainsInput {
  domain_name: string;
  enabled?: boolean;
  expand?: string[];
}
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
  ) as unknown as Schema.Codec<PostPaymentMethodDomainsInput>;

// Output Schema
export interface PostPaymentMethodDomainsOutput {
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
export const PostPaymentMethodDomainsOutput =
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
  }) as unknown as Schema.Codec<PostPaymentMethodDomainsOutput>;

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
