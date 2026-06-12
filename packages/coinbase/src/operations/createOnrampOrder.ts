import * as Schema from "effect/Schema";
import {
  OnrampOrderPaymentMethodTypeIdSchema,
  OnrampOrderSchema,
  OnrampPaymentLinkSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateOnrampOrderInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    agreementAcceptedAt: Schema.String,
    destinationAddress: Schema.String,
    destinationNetwork: Schema.String,
    email: Schema.String,
    isQuote: Schema.optional(Schema.Boolean),
    partnerOrderRef: Schema.optional(Schema.String),
    partnerUserRef: Schema.String,
    paymentAmount: Schema.optional(Schema.String),
    paymentCurrency: Schema.String,
    paymentMethod: Schema.suspend(() => OnrampOrderPaymentMethodTypeIdSchema),
    phoneNumber: Schema.String,
    phoneNumberVerifiedAt: Schema.String,
    purchaseAmount: Schema.optional(Schema.String),
    purchaseCurrency: Schema.String,
    clientIp: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "POST", path: "/v2/onramp/orders" }));
export type CreateOnrampOrderInput = typeof CreateOnrampOrderInput.Type;

// Output Schema
export const CreateOnrampOrderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order: Schema.suspend(() => OnrampOrderSchema),
    paymentLink: Schema.optional(Schema.suspend(() => OnrampPaymentLinkSchema)),
  });
export type CreateOnrampOrderOutput = typeof CreateOnrampOrderOutput.Type;

// The operation
/**
 * Create an onramp order
 *
 * Create a new Onramp order or get a quote for an Onramp order. Either `paymentAmount` or `purchaseAmount` must be provided.
 * This API currently only supports the payment method `GUEST_CHECKOUT_APPLE_PAY`.
 * For detailed integration instructions and to get access to this API, refer to the  [Apple Pay Onramp API docs](https://docs.cdp.coinbase.com/onramp-&-offramp/onramp-apis/apple-pay-onramp-api).
 */
export const createOnrampOrder = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOnrampOrderInput,
  outputSchema: CreateOnrampOrderOutput,
}));
