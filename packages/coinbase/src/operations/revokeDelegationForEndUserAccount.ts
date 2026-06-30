import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RevokeDelegationForEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    address: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    walletSecretId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/embedded-wallet-api/end-users/{userId}/address/{address}/delegation",
    }),
  );
export type RevokeDelegationForEndUserAccountInput =
  typeof RevokeDelegationForEndUserAccountInput.Type;

// Output Schema
export const RevokeDelegationForEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RevokeDelegationForEndUserAccountOutput =
  typeof RevokeDelegationForEndUserAccountOutput.Type;

// The operation
/**
 * Revoke account-scoped delegation for end user
 *
 * Revokes the active account-scoped delegation for the specified end user account. Other account-scoped delegations for the same user are unaffected. This operation can be performed by the end user themselves or by a developer using their API key.
 * When the address corresponds to an EVM Smart Account, this revokes the delegation for the Smart Account's owner EOA.
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
 * @param address - The blockchain address of the end user account whose delegation should be revoked. For EVM addresses, matching is case-insensitive.
 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const revokeDelegationForEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RevokeDelegationForEndUserAccountInput,
    outputSchema: RevokeDelegationForEndUserAccountOutput,
  }));
