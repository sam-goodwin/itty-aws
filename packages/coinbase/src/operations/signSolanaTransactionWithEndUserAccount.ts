import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SignSolanaTransactionWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    address: Schema.String,
    transaction: Schema.String,
    walletSecretId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/solana/sign/transaction",
    }),
  );
export type SignSolanaTransactionWithEndUserAccountInput =
  typeof SignSolanaTransactionWithEndUserAccountInput.Type;

// Output Schema
export const SignSolanaTransactionWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signedTransaction: Schema.String,
  });
export type SignSolanaTransactionWithEndUserAccountOutput =
  typeof SignSolanaTransactionWithEndUserAccountOutput.Type;

// The operation
/**
 * Sign a transaction with end user Solana account
 *
 * Signs a transaction with the given end user Solana account.
 * The unsigned transaction should be serialized into a byte array and then encoded as base64.
 * **Transaction types**
 * The following transaction types are supported:
 * * [Legacy transactions](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)
 * * [Versioned transactions](https://solana-labs.github.io/solana-web3.js/classes/VersionedTransaction.html)
 * The developer is responsible for ensuring that the unsigned transaction is valid, as the API will not validate the transaction.
 *
 * @param userId - The ID of the end user.
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param X-Developer-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const signSolanaTransactionWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignSolanaTransactionWithEndUserAccountInput,
    outputSchema: SignSolanaTransactionWithEndUserAccountOutput,
  }));
