import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CustomerPortalcustomersconfirmPaymentMethodInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setup_intent_id: Schema.String,
    set_default: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/customers/me/payment-methods/confirm",
    }),
  );
export type CustomerPortalcustomersconfirmPaymentMethodInput =
  typeof CustomerPortalcustomersconfirmPaymentMethodInput.Type;

// Output Schema
export const CustomerPortalcustomersconfirmPaymentMethodOutput =
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
export type CustomerPortalcustomersconfirmPaymentMethodOutput =
  typeof CustomerPortalcustomersconfirmPaymentMethodOutput.Type;

// The operation
/**
 * Confirm Customer Payment Method
 *
 * Confirm a payment method for the authenticated customer.
 */
export const customerPortalcustomersconfirmPaymentMethod =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomersconfirmPaymentMethodInput,
    outputSchema: CustomerPortalcustomersconfirmPaymentMethodOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
