import * as Schema from "effect/Schema";
import {
  X402VersionSchema,
  x402PaymentPayloadSchema,
  x402PaymentRequirementsSchema,
  x402SettleErrorReasonSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SettleX402PaymentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    x402Version: Schema.suspend(() => X402VersionSchema),
    paymentPayload: Schema.suspend(() => x402PaymentPayloadSchema),
    paymentRequirements: Schema.suspend(() => x402PaymentRequirementsSchema),
  },
).pipe(T.Http({ method: "POST", path: "/v2/x402/settle" }));
export type SettleX402PaymentInput = typeof SettleX402PaymentInput.Type;

// Output Schema
export const SettleX402PaymentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
    errorReason: Schema.optional(
      Schema.suspend(() => x402SettleErrorReasonSchema),
    ),
    errorMessage: Schema.optional(Schema.String),
    payer: Schema.String,
    transaction: Schema.String,
    network: Schema.String,
    amount: Schema.optional(Schema.String),
  });
export type SettleX402PaymentOutput = typeof SettleX402PaymentOutput.Type;

// The operation
/**
 * Settle a payment
 *
 * Settle an x402 protocol payment with a specific scheme and network.
 */
export const settleX402Payment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SettleX402PaymentInput,
  outputSchema: SettleX402PaymentOutput,
}));
