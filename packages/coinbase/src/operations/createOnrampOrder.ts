import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateOnrampOrderInput {
  agreementAcceptedAt: string;
  destinationAddress: string;
  destinationNetwork: string;
  email: string;
  isQuote?: boolean;
  partnerOrderRef?: string;
  partnerUserRef: string;
  paymentAmount?: string;
  paymentCurrency: string;
  paymentMethod: "GUEST_CHECKOUT_APPLE_PAY" | "GUEST_CHECKOUT_GOOGLE_PAY";
  phoneNumber: string;
  phoneNumberVerifiedAt: string;
  smsVerificationId?: string;
  emailVerificationId?: string;
  purchaseAmount?: string;
  purchaseCurrency: string;
  clientIp?: string;
  domain?: string;
}
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
    paymentMethod: Schema.Literals([
      "GUEST_CHECKOUT_APPLE_PAY",
      "GUEST_CHECKOUT_GOOGLE_PAY",
    ]),
    phoneNumber: Schema.String,
    phoneNumberVerifiedAt: Schema.String,
    smsVerificationId: Schema.optional(Schema.String),
    emailVerificationId: Schema.optional(Schema.String),
    purchaseAmount: Schema.optional(Schema.String),
    purchaseCurrency: Schema.String,
    clientIp: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({ method: "POST", path: "/v2/onramp/orders" }),
) as unknown as Schema.Codec<CreateOnrampOrderInput>;

// Output Schema
export interface CreateOnrampOrderOutput {
  order: {
    orderId: string;
    paymentTotal: string;
    paymentSubtotal: string;
    paymentCurrency: string;
    paymentMethod: "GUEST_CHECKOUT_APPLE_PAY" | "GUEST_CHECKOUT_GOOGLE_PAY";
    purchaseAmount: string;
    purchaseCurrency: string;
    fees: {
      type: "FEE_TYPE_NETWORK" | "FEE_TYPE_EXCHANGE";
      amount: string;
      currency: string;
    }[];
    exchangeRate: string;
    destinationAddress: string;
    destinationNetwork: string;
    status:
      | "ONRAMP_ORDER_STATUS_PENDING_AUTH"
      | "ONRAMP_ORDER_STATUS_PENDING_PAYMENT"
      | "ONRAMP_ORDER_STATUS_PROCESSING"
      | "ONRAMP_ORDER_STATUS_COMPLETED"
      | "ONRAMP_ORDER_STATUS_FAILED";
    txHash?: string;
    createdAt: string;
    updatedAt: string;
    partnerUserRef?: string;
  };
  paymentLink?: {
    url: string;
    paymentLinkType: "PAYMENT_LINK_TYPE_APPLE_PAY_BUTTON";
  };
}
export const CreateOnrampOrderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order: Schema.Struct({
      orderId: Schema.String,
      paymentTotal: Schema.String,
      paymentSubtotal: Schema.String,
      paymentCurrency: Schema.String,
      paymentMethod: Schema.Literals([
        "GUEST_CHECKOUT_APPLE_PAY",
        "GUEST_CHECKOUT_GOOGLE_PAY",
      ]),
      purchaseAmount: Schema.String,
      purchaseCurrency: Schema.String,
      fees: Schema.Array(
        Schema.Struct({
          type: Schema.Literals(["FEE_TYPE_NETWORK", "FEE_TYPE_EXCHANGE"]),
          amount: Schema.String,
          currency: Schema.String,
        }),
      ),
      exchangeRate: Schema.String,
      destinationAddress: Schema.String,
      destinationNetwork: Schema.String,
      status: Schema.Literals([
        "ONRAMP_ORDER_STATUS_PENDING_AUTH",
        "ONRAMP_ORDER_STATUS_PENDING_PAYMENT",
        "ONRAMP_ORDER_STATUS_PROCESSING",
        "ONRAMP_ORDER_STATUS_COMPLETED",
        "ONRAMP_ORDER_STATUS_FAILED",
      ]),
      txHash: Schema.optional(Schema.String),
      createdAt: Schema.String,
      updatedAt: Schema.String,
      partnerUserRef: Schema.optional(Schema.String),
    }),
    paymentLink: Schema.optional(
      Schema.Struct({
        url: Schema.String,
        paymentLinkType: Schema.Literals([
          "PAYMENT_LINK_TYPE_APPLE_PAY_BUTTON",
        ]),
      }),
    ),
  }) as unknown as Schema.Codec<CreateOnrampOrderOutput>;

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
