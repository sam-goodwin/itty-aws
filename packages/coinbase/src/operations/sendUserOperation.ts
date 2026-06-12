import * as Schema from "effect/Schema";
import {
  EvmCallSchema,
  EvmUserOperationNetworkSchema,
  UserOperationReceiptSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SendUserOperationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    address: Schema.String.pipe(T.PathParam()),
    userOpHash: Schema.String.pipe(T.PathParam()),
    signature: Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/v2/evm/smart-accounts/{address}/user-operations/{userOpHash}/send",
  }),
);
export type SendUserOperationInput = typeof SendUserOperationInput.Type;

// Output Schema
export const SendUserOperationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.suspend(() => EvmUserOperationNetworkSchema),
    userOpHash: Schema.String,
    calls: Schema.Array(Schema.suspend(() => EvmCallSchema)),
    status: Schema.Literals([
      "pending",
      "signed",
      "broadcast",
      "complete",
      "dropped",
      "failed",
    ]),
    transactionHash: Schema.optional(Schema.String),
    receipts: Schema.optional(
      Schema.Array(Schema.suspend(() => UserOperationReceiptSchema)),
    ),
  });
export type SendUserOperationOutput = typeof SendUserOperationOutput.Type;

// The operation
/**
 * Send a user operation
 *
 * Sends a user operation with a signature.
 * The payload to sign must be the `userOpHash` field of the user operation. This hash should be signed directly (not using `personal_sign` or EIP-191 message hashing).
 * The signature must be 65 bytes in length, consisting of: - 32 bytes for the `r` value - 32 bytes for the `s` value - 1 byte for the `v` value (must be 27 or 28)
 * If using the CDP Paymaster, the user operation must be signed and sent within 2 minutes of being prepared.
 *
 * @param address - The address of the Smart Account to send the user operation from.
 * @param userOpHash - The hash of the user operation to send.
 */
export const sendUserOperation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SendUserOperationInput,
  outputSchema: SendUserOperationOutput,
}));
