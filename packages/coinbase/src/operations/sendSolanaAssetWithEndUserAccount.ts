import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SendSolanaAssetWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    address: Schema.String.pipe(T.PathParam()),
    asset: Schema.Literals(["usdc"]).pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    to: Schema.String,
    amount: Schema.String,
    network: Schema.Literals(["solana", "solana-devnet"]),
    createRecipientAta: Schema.optional(Schema.Boolean),
    walletSecretId: Schema.optional(Schema.String),
    useCdpSponsor: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/solana/{address}/send/{asset}",
    }),
  );
export type SendSolanaAssetWithEndUserAccountInput =
  typeof SendSolanaAssetWithEndUserAccountInput.Type;

// Output Schema
export const SendSolanaAssetWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transactionSignature: Schema.String,
  });
export type SendSolanaAssetWithEndUserAccountOutput =
  typeof SendSolanaAssetWithEndUserAccountOutput.Type;

// The operation
/**
 * Send USDC on Solana
 *
 * Sends USDC from an end user's Solana account to a recipient address on the Solana network. This endpoint simplifies USDC transfers by automatically handling mint resolution, Associated Token Account (ATA) creation, decimal conversion, and transaction encoding.
 * The `amount` field accepts human-readable amounts as decimal strings (e.g., "1.5", "25.50").
 * Use the optional `createRecipientAta` parameter to control whether the sender pays for creating the recipient's Associated Token Account if it doesn't exist.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param X-Developer-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param userId - The ID of the end user.
 * @param address - The base58 encoded address of the Solana account to send USDC from.
 * @param asset - The asset to send. Currently only "usdc" is supported.
 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const sendSolanaAssetWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SendSolanaAssetWithEndUserAccountInput,
    outputSchema: SendSolanaAssetWithEndUserAccountOutput,
  }));
