import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SendSolanaTransactionWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    address: Schema.String,
    network: Schema.Literals(["solana", "solana-devnet"]),
    walletSecretId: Schema.optional(Schema.String),
    transaction: Schema.String,
    useCdpSponsor: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/solana/send/transaction",
    }),
  );
export type SendSolanaTransactionWithEndUserAccountInput =
  typeof SendSolanaTransactionWithEndUserAccountInput.Type;

// Output Schema
export const SendSolanaTransactionWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transactionSignature: Schema.String,
  });
export type SendSolanaTransactionWithEndUserAccountOutput =
  typeof SendSolanaTransactionWithEndUserAccountOutput.Type;

// The operation
/**
 * Send a transaction with end user Solana account
 *
 * Signs a transaction with the given end user Solana account and sends it to the indicated supported network.
 * The API handles recent blockhash management and fee estimation, leaving the developer to provide only the minimal set of fields necessary to send the transaction.
 * The unsigned transaction should be serialized into a byte array and then encoded as base64.
 * **Transaction types**
 * The following transaction types are supported:
 * * [Legacy transactions](https://solana.com/developers/guides/advanced/versions#current-transaction-versions)
 * * [Versioned transactions](https://solana.com/developers/guides/advanced/versions)
 * **Instruction Batching**
 * To batch multiple operations, include multiple instructions within a single transaction. All instructions within a transaction are executed atomically - if any instruction fails, the entire transaction fails and is rolled back.
 * **Network Support**
 * The following Solana networks are supported:
 * * `solana` - Solana Mainnet
 * * `solana-devnet` - Solana Devnet
 * The developer is responsible for ensuring that the unsigned transaction is valid, as the API will not validate the transaction.
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
 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const sendSolanaTransactionWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SendSolanaTransactionWithEndUserAccountInput,
    outputSchema: SendSolanaTransactionWithEndUserAccountOutput,
  }));
