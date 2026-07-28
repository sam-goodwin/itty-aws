import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CustomerPortalcustomersaddPaymentMethodInput {
  confirmation_token_id: string;
  set_default: boolean;
  return_url: string;
}
export const CustomerPortalcustomersaddPaymentMethodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmation_token_id: Schema.String,
    set_default: Schema.Boolean,
    return_url: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/customers/me/payment-methods",
    }),
  ) as unknown as Schema.Codec<CustomerPortalcustomersaddPaymentMethodInput>;

// Output Schema
export type CustomerPortalcustomersaddPaymentMethodOutput =
  | {
      status: string;
      payment_method:
        | {
            id: string;
            created_at: string;
            modified_at: string | null;
            processor: "stripe";
            customer_id: string;
            type: string;
            method_metadata: {
              brand: string;
              last4: string;
              exp_month: number;
              exp_year: number;
              wallet?: string | null;
            };
          }
        | {
            id: string;
            created_at: string;
            modified_at: string | null;
            processor: "stripe";
            customer_id: string;
            type: string;
          };
    }
  | { status: string; client_secret: Redacted.Redacted<string> };
export const CustomerPortalcustomersaddPaymentMethodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      status: Schema.String,
      payment_method: Schema.Union([
        Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          processor: Schema.Literals(["stripe"]),
          customer_id: Schema.String,
          type: Schema.String,
          method_metadata: Schema.Struct({
            brand: Schema.String,
            last4: Schema.String,
            exp_month: Schema.Number,
            exp_year: Schema.Number,
            wallet: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        }),
        Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          processor: Schema.Literals(["stripe"]),
          customer_id: Schema.String,
          type: Schema.String,
        }),
      ]),
    }),
    Schema.Struct({
      status: Schema.String,
      client_secret: SensitiveOutputString,
    }),
  ]) as unknown as Schema.Codec<CustomerPortalcustomersaddPaymentMethodOutput>;

// The operation
/**
 * Add Customer Payment Method
 *
 * Add a payment method to the authenticated customer.
 */
export const customerPortalcustomersaddPaymentMethod =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomersaddPaymentMethodInput,
    outputSchema: CustomerPortalcustomersaddPaymentMethodOutput,
  }));
