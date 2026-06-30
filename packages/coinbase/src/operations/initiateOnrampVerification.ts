import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface InitiateOnrampVerificationInput {
  channel: "sms" | "email";
  destination: string;
}
export const InitiateOnrampVerificationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel: Schema.Literals(["sms", "email"]),
    destination: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v2/onramp/verifications" }),
  ) as unknown as Schema.Codec<InitiateOnrampVerificationInput>;

// Output Schema
export interface InitiateOnrampVerificationOutput {
  verificationId: string;
  otpExpiresAt: string;
}
export const InitiateOnrampVerificationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verificationId: Schema.String,
    otpExpiresAt: Schema.String,
  }) as unknown as Schema.Codec<InitiateOnrampVerificationOutput>;

// The operation
/**
 * Initiate onramp verification
 *
 * Initiates OTP verification by sending a 6-digit code to the user via the specified channel (SMS or email). Returns a `verificationId` that must be passed to the Submit Onramp Verification endpoint along with the OTP code within 10 minutes.
 * **Access to this API requires allowlisting.** During Onramp Headless API onboarding, contact the Onramp team to enable Onramp-managed verification for your application.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const initiateOnrampVerification = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InitiateOnrampVerificationInput,
    outputSchema: InitiateOnrampVerificationOutput,
  }),
);
