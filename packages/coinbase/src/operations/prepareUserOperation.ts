import * as Schema from "effect/Schema";
import {
  EvmCallSchema,
  EvmUserOperationNetworkSchema,
  UserOperationReceiptSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PrepareUserOperationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
    network: Schema.suspend(() => EvmUserOperationNetworkSchema),
    calls: Schema.Array(Schema.suspend(() => EvmCallSchema)),
    paymasterUrl: Schema.optional(Schema.String),
    dataSuffix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/evm/smart-accounts/{address}/user-operations",
    }),
  );
export type PrepareUserOperationInput = typeof PrepareUserOperationInput.Type;

// Output Schema
export const PrepareUserOperationOutput =
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
export type PrepareUserOperationOutput = typeof PrepareUserOperationOutput.Type;

// The operation
/**
 * Prepare a user operation
 *
 * Prepares a new user operation on a Smart Account for a specific network.
 *
 * @param address - The address of the Smart Account to create the user operation on.
 */
export const prepareUserOperation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrepareUserOperationInput,
    outputSchema: PrepareUserOperationOutput,
  }),
);
