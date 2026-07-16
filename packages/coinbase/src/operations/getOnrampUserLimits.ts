import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOnrampUserLimitsInput {
  paymentMethodType: "GUEST_CHECKOUT_APPLE_PAY" | "GUEST_CHECKOUT_GOOGLE_PAY";
  userId: string;
  userIdType: "phone_number";
}
export const GetOnrampUserLimitsInput =
  /*@__PURE__*/ Schema.Struct({
    paymentMethodType: Schema.Literals([
      "GUEST_CHECKOUT_APPLE_PAY",
      "GUEST_CHECKOUT_GOOGLE_PAY",
    ]),
    userId: Schema.String,
    userIdType: Schema.Literals(["phone_number"]),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/onramp/limits" }),
  ) as unknown as Schema.Codec<GetOnrampUserLimitsInput>;

// Output Schema
export interface GetOnrampUserLimitsOutput {
  limits: {
    limitType: "weekly_spending" | "lifetime_transactions";
    currency?: string;
    limit: string;
    remaining: string;
  }[];
}
export const GetOnrampUserLimitsOutput =
  /*@__PURE__*/ Schema.Struct({
    limits: Schema.Array(
      Schema.Struct({
        limitType: Schema.Literals([
          "weekly_spending",
          "lifetime_transactions",
        ]),
        currency: Schema.optional(Schema.String),
        limit: Schema.String,
        remaining: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetOnrampUserLimitsOutput>;

// The operation
/**
 * Get onramp user limits
 *
 * Returns the transaction limits for an onramp user based on their payment method and user identifier. Use this API to show users their remaining purchase capacity before initiating an onramp transaction.
 * Currently supports `GUEST_CHECKOUT_APPLE_PAY` payment method with phone number identification. The phone number must have been previously verified via OTP.
 */
export const getOnrampUserLimits = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOnrampUserLimitsInput,
  outputSchema: GetOnrampUserLimitsOutput,
}));
