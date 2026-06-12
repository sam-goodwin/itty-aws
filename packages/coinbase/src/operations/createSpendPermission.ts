import * as Schema from "effect/Schema";
import {
  EvmCallSchema,
  EvmUserOperationNetworkSchema,
  SpendPermissionNetworkSchema,
  UserOperationReceiptSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateSpendPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
    network: Schema.suspend(() => SpendPermissionNetworkSchema),
    spender: Schema.String,
    token: Schema.String,
    allowance: Schema.String,
    period: Schema.String,
    start: Schema.String,
    end: Schema.String,
    salt: Schema.optional(Schema.String),
    extraData: Schema.optional(Schema.String),
    paymasterUrl: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/evm/smart-accounts/{address}/spend-permissions",
    }),
  );
export type CreateSpendPermissionInput = typeof CreateSpendPermissionInput.Type;

// Output Schema
export const CreateSpendPermissionOutput =
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
export type CreateSpendPermissionOutput =
  typeof CreateSpendPermissionOutput.Type;

// The operation
/**
 * Create a spend permission
 *
 * Creates a spend permission for the given smart account address.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param address - The address of the Smart Account to create the spend permission for.
 */
export const createSpendPermission = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateSpendPermissionInput,
    outputSchema: CreateSpendPermissionOutput,
  }),
);
