import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SignSolanaMessageWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    address: Schema.String,
    message: Schema.String,
    walletSecretId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/solana/sign/message",
    }),
  );
export type SignSolanaMessageWithEndUserAccountInput =
  typeof SignSolanaMessageWithEndUserAccountInput.Type;

// Output Schema
export const SignSolanaMessageWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signature: Schema.String,
  });
export type SignSolanaMessageWithEndUserAccountOutput =
  typeof SignSolanaMessageWithEndUserAccountOutput.Type;

// The operation
/**
 * Sign a Base64 encoded message
 *
 * Signs an arbitrary Base64 encoded message with the given Solana account.
 * **WARNING:**  Never sign a message that you didn't generate as it may put your funds at risk.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param userId - The ID of the end user.
 * @param X-Developer-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const signSolanaMessageWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignSolanaMessageWithEndUserAccountInput,
    outputSchema: SignSolanaMessageWithEndUserAccountOutput,
  }));
