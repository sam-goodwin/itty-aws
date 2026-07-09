import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const BillingGetPaymentMethodListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/billing/v1/payment-methods" }),
  );
export type BillingGetPaymentMethodListV1Input =
  typeof BillingGetPaymentMethodListV1Input.Type;

// Output Schema
export const BillingGetPaymentMethodListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.String),
      identifier: Schema.optional(Schema.String),
      payment_method: Schema.optional(Schema.String),
      is_default: Schema.optional(Schema.Boolean),
      is_expired: Schema.optional(Schema.Boolean),
      is_suspended: Schema.optional(Schema.Boolean),
      created_at: Schema.optional(Schema.String),
      expires_at: Schema.optional(Schema.String),
    }),
  );
export type BillingGetPaymentMethodListV1Output =
  typeof BillingGetPaymentMethodListV1Output.Type;

// The operation
/**
 * Get payment method list
 *
 * Retrieve available payment methods that can be used for placing new orders.
 * If you want to add new payment method,
 * please use [hPanel](https://hpanel.hostinger.com/billing/payment-methods).
 * Use this endpoint to view available payment options before creating orders.
 */
export const billingGetPaymentMethodListV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingGetPaymentMethodListV1Input,
    outputSchema: BillingGetPaymentMethodListV1Output,
  }));
