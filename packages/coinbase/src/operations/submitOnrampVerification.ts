import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SubmitOnrampVerificationInput {
  verificationId: string;
  otpCode: string;
}
export const SubmitOnrampVerificationInput =
  /*@__PURE__*/ Schema.Struct({
    verificationId: Schema.String.pipe(T.PathParam()),
    otpCode: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/onramp/verifications/{verificationId}/submit",
    }),
  ) as unknown as Schema.Codec<SubmitOnrampVerificationInput>;

// Output Schema
export interface SubmitOnrampVerificationOutput {
  verificationId: string;
  verificationExpiresAt: string;
}
export const SubmitOnrampVerificationOutput =
  /*@__PURE__*/ Schema.Struct({
    verificationId: Schema.String,
    verificationExpiresAt: Schema.String,
  }) as unknown as Schema.Codec<SubmitOnrampVerificationOutput>;

// The operation
/**
 * Submit onramp verification
 *
 * Submits the OTP code to complete verification. On success, marks the verification as verified and returns the same `verificationId`. The destination does not need to be re-sent. Onramp uses the value captured at initiation time.
 * The returned `verificationId` should be stored on the user's device and passed to the Create Onramp Order endpoint. It is valid for 60 days.
 * **Access to this API requires allowlisting.** During Onramp Headless API onboarding, contact the Onramp team to enable Onramp-managed verification for your application.
 *
 * @param verificationId - The verification ID returned by the Initiate Onramp Verification endpoint.
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const submitOnrampVerification = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubmitOnrampVerificationInput,
  outputSchema: SubmitOnrampVerificationOutput,
}));
