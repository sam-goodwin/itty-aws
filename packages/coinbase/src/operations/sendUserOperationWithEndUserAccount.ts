import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SendUserOperationWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    address: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    network: Schema.Literals([
      "base-sepolia",
      "base",
      "arbitrum",
      "optimism",
      "zora",
      "polygon",
      "bnb",
      "avalanche",
      "ethereum",
      "ethereum-sepolia",
    ]),
    calls: Schema.Array(
      Schema.Struct({
        to: Schema.String,
        value: Schema.String,
        data: Schema.String,
        overrideGasLimit: Schema.optional(Schema.String),
      }),
    ),
    useCdpPaymaster: Schema.Boolean,
    paymasterUrl: Schema.optional(Schema.String),
    walletSecretId: Schema.optional(Schema.String),
    dataSuffix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/evm/smart-accounts/{address}/send",
    }),
  );
export type SendUserOperationWithEndUserAccountInput =
  typeof SendUserOperationWithEndUserAccountInput.Type;

// Output Schema
export const SendUserOperationWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.Literals([
      "base-sepolia",
      "base",
      "arbitrum",
      "optimism",
      "zora",
      "polygon",
      "bnb",
      "avalanche",
      "ethereum",
      "ethereum-sepolia",
    ]),
    userOpHash: Schema.String,
    calls: Schema.Array(
      Schema.Struct({
        to: Schema.String,
        value: Schema.String,
        data: Schema.String,
        overrideGasLimit: Schema.optional(Schema.String),
      }),
    ),
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
      Schema.Array(
        Schema.Struct({
          revert: Schema.optional(
            Schema.Struct({
              data: Schema.String,
              message: Schema.String,
            }),
          ),
          transactionHash: Schema.optional(Schema.String),
          blockHash: Schema.optional(Schema.String),
          blockNumber: Schema.optional(Schema.Number),
          gasUsed: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type SendUserOperationWithEndUserAccountOutput =
  typeof SendUserOperationWithEndUserAccountOutput.Type;

// The operation
/**
 * Send a user operation for end user Smart Account
 *
 * Prepares, signs, and sends a user operation for an end user's Smart Account.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param userId - The ID of the end user.
 * @param address - The address of the EVM Smart Account to execute the user operation from.
 * @param X-Developer-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const sendUserOperationWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SendUserOperationWithEndUserAccountInput,
    outputSchema: SendUserOperationWithEndUserAccountOutput,
  }));
