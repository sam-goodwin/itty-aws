import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateEvmEip7702DelegationWithEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    address: Schema.String,
    network: Schema.Literals([
      "base-sepolia",
      "base",
      "arbitrum",
      "optimism",
      "polygon",
      "ethereum",
      "ethereum-sepolia",
    ]),
    enableSpendPermissions: Schema.optional(Schema.Boolean),
    walletSecretId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/evm/eip7702/delegation",
    }),
  );
export type CreateEvmEip7702DelegationWithEndUserAccountInput =
  typeof CreateEvmEip7702DelegationWithEndUserAccountInput.Type;

// Output Schema
export const CreateEvmEip7702DelegationWithEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delegationOperationId: Schema.String,
  });
export type CreateEvmEip7702DelegationWithEndUserAccountOutput =
  typeof CreateEvmEip7702DelegationWithEndUserAccountOutput.Type;

// The operation
/**
 * Create EIP-7702 delegation for end user EVM account
 *
 * Creates an EIP-7702 delegation for an end user's EVM EOA account, upgrading it with smart account capabilities.
 * This endpoint:
 * - Retrieves delegation artifacts from onchain
 * - Signs the EIP-7702 authorization for delegation
 * - Assembles and submits a Type 4 transaction
 * - Creates an associated smart account object
 * The delegation allows the EVM EOA to be used as a smart account, which enables batched transactions and gas sponsorship via paymaster.
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
export const createEvmEip7702DelegationWithEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateEvmEip7702DelegationWithEndUserAccountInput,
    outputSchema: CreateEvmEip7702DelegationWithEndUserAccountOutput,
  }));
