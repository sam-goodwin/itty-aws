import * as Schema from "effect/Schema";
import {
  EvmCallSchema,
  EvmUserOperationNetworkSchema,
  UserOperationReceiptSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetUserOperationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.String.pipe(T.PathParam()),
  userOpHash: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v2/evm/smart-accounts/{address}/user-operations/{userOpHash}",
  }),
);
export type GetUserOperationInput = typeof GetUserOperationInput.Type;

// Output Schema
export const GetUserOperationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type GetUserOperationOutput = typeof GetUserOperationOutput.Type;

// The operation
/**
 * Get a user operation
 *
 * Gets a user operation by its hash.
 *
 * @param address - The address of the Smart Account the user operation belongs to.
 * @param userOpHash - The hash of the user operation to fetch.
 */
export const getUserOperation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserOperationInput,
  outputSchema: GetUserOperationOutput,
}));
