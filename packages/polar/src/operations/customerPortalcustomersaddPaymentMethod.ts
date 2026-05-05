import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
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
  );
export type CustomerPortalcustomersaddPaymentMethodInput =
  typeof CustomerPortalcustomersaddPaymentMethodInput.Type;

// Output Schema
export const CustomerPortalcustomersaddPaymentMethodOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals(["succeeded", "requires_action"]),
    payment_method: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.NullOr(Schema.String),
        processor: Schema.Literals(["stripe"]),
        customer_id: Schema.String,
        type: Schema.String,
        method_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    client_secret: Schema.optional(SensitiveString),
  });
export type CustomerPortalcustomersaddPaymentMethodOutput =
  typeof CustomerPortalcustomersaddPaymentMethodOutput.Type;

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
    errors: [UnprocessableEntity] as const,
  }));
