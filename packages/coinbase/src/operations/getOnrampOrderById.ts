import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOnrampOrderByIdInput {
  orderId: string;
}
export const GetOnrampOrderByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/onramp/orders/{orderId}" }),
  ) as unknown as Schema.Codec<GetOnrampOrderByIdInput>;

// Output Schema
export interface GetOnrampOrderByIdOutput {
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
}
export const GetOnrampOrderByIdOutput =
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
  }) as unknown as Schema.Codec<GetOnrampOrderByIdOutput>;

// The operation
/**
 * Get an onramp order by ID
 *
 * Get an onramp order by ID.
 *
 * @param orderId - The ID of the onramp order to retrieve.
 */
export const getOnrampOrderById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOnrampOrderByIdInput,
  outputSchema: GetOnrampOrderByIdOutput,
}));
