import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SendEvmAssetWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    address: Schema.String.pipe(T.PathParam()),
    asset: Schema.Literals(["usdc"]).pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    to: Schema.String,
    amount: Schema.String,
    network: Schema.Literals([
      "base",
      "base-sepolia",
      "ethereum",
      "ethereum-sepolia",
      "avalanche",
      "polygon",
      "optimism",
      "arbitrum",
      "arbitrum-sepolia",
      "world",
      "world-sepolia",
    ]),
    useCdpPaymaster: Schema.optional(Schema.Boolean),
    paymasterUrl: Schema.optional(Schema.String),
    walletSecretId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/evm/{address}/send/{asset}",
    }),
  );
export type SendEvmAssetWithEndUserAccountInput =
  typeof SendEvmAssetWithEndUserAccountInput.Type;

// Output Schema
export const SendEvmAssetWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transactionHash: Schema.optional(Schema.NullOr(Schema.String)),
    userOpHash: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type SendEvmAssetWithEndUserAccountOutput =
  typeof SendEvmAssetWithEndUserAccountOutput.Type;

// The operation
/**
 * Send USDC on EVM
 *
 * Sends USDC from an end user's EVM account (EOA or Smart Account) to a recipient address on a supported EVM network. This endpoint simplifies USDC transfers by automatically handling contract resolution, decimal conversion, gas estimation, and transaction encoding.
 * The `amount` field accepts human-readable amounts as decimal strings (e.g., "1.5", "25.50").
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param userId - The ID of the end user.
 * @param address - The 0x-prefixed address of the EVM account (EOA or Smart Account) to send USDC from. The address does not need to be checksummed.
 * @param asset - The asset to send. Currently only "usdc" is supported.
 * @param X-Developer-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const sendEvmAssetWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SendEvmAssetWithEndUserAccountInput,
    outputSchema: SendEvmAssetWithEndUserAccountOutput,
  }));
