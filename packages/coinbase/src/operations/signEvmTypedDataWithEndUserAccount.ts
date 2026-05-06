import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SignEvmTypedDataWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    address: Schema.String,
    typedData: Schema.Struct({
      domain: Schema.Struct({
        name: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        chainId: Schema.optional(Schema.Number),
        verifyingContract: Schema.optional(Schema.String),
        salt: Schema.optional(Schema.String),
      }),
      types: Schema.Unknown,
      primaryType: Schema.String,
      message: Schema.Unknown,
    }),
    walletSecretId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/evm/sign/typed-data",
    }),
  );
export type SignEvmTypedDataWithEndUserAccountInput =
  typeof SignEvmTypedDataWithEndUserAccountInput.Type;

// Output Schema
export const SignEvmTypedDataWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signature: Schema.String,
  });
export type SignEvmTypedDataWithEndUserAccountOutput =
  typeof SignEvmTypedDataWithEndUserAccountOutput.Type;

// The operation
/**
 * Sign EIP-712 typed data with end user EVM account
 *
 * Signs [EIP-712](https://eips.ethereum.org/EIPS/eip-712) typed data with the given end user EVM account.
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
export const signEvmTypedDataWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignEvmTypedDataWithEndUserAccountInput,
    outputSchema: SignEvmTypedDataWithEndUserAccountOutput,
  }));
