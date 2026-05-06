import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RevokeDelegationForEndUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    walletSecretId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/embedded-wallet-api/end-users/{userId}/delegation",
    }),
  );
export type RevokeDelegationForEndUserInput =
  typeof RevokeDelegationForEndUserInput.Type;

// Output Schema
export const RevokeDelegationForEndUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RevokeDelegationForEndUserOutput =
  typeof RevokeDelegationForEndUserOutput.Type;

// The operation
/**
 * Revoke delegation for end user
 *
 * Revokes all active delegations for the specified end user. This operation can be performed by the end user themselves or by a developer using their API key.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Developer-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param userId - The ID of the end user.
 */
export const revokeDelegationForEndUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RevokeDelegationForEndUserInput,
    outputSchema: RevokeDelegationForEndUserOutput,
  }),
);
