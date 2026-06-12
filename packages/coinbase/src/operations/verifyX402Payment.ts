import * as Schema from "effect/Schema";
import {
  X402VersionSchema,
  x402PaymentPayloadSchema,
  x402PaymentRequirementsSchema,
  x402VerifyInvalidReasonSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VerifyX402PaymentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    x402Version: Schema.suspend(() => X402VersionSchema),
    paymentPayload: Schema.suspend(() => x402PaymentPayloadSchema),
    paymentRequirements: Schema.suspend(() => x402PaymentRequirementsSchema),
  },
).pipe(T.Http({ method: "POST", path: "/v2/x402/verify" }));
export type VerifyX402PaymentInput = typeof VerifyX402PaymentInput.Type;

// Output Schema
export const VerifyX402PaymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isValid: Schema.Boolean,
    invalidReason: Schema.optional(
      Schema.suspend(() => x402VerifyInvalidReasonSchema),
    ),
    invalidMessage: Schema.optional(Schema.String),
    payer: Schema.String,
  });
export type VerifyX402PaymentOutput = typeof VerifyX402PaymentOutput.Type;

// The operation
/**
 * Verify a payment
 *
 * Verify an x402 protocol payment with a specific scheme and network.
 */
export const verifyX402Payment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifyX402PaymentInput,
  outputSchema: VerifyX402PaymentOutput,
}));
