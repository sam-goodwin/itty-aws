import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateDelegationForEndUserAccountInput {
  userId: string;
  address: string;
  projectID?: string;
  expiresAt: string;
  walletSecretId: string;
}
export const CreateDelegationForEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    address: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
    expiresAt: Schema.String,
    walletSecretId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/embedded-wallet-api/end-users/{userId}/address/{address}/delegation",
    }),
  ) as unknown as Schema.Codec<CreateDelegationForEndUserAccountInput>;

// Output Schema
export interface CreateDelegationForEndUserAccountOutput {
  expiresAt: string;
}
export const CreateDelegationForEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiresAt: Schema.String,
  }) as unknown as Schema.Codec<CreateDelegationForEndUserAccountOutput>;

// The operation
/**
 * Create account-scoped delegation for end user
 *
 * Creates an account-scoped delegation that allows a developer to sign on behalf of an end user for a single blockchain account (identified by its address) for the specified duration. The end user must be authenticated to authorize this delegation.
 * Multiple account-scoped delegations may exist concurrently for a single end user (one per canonical account address). Account-scoped and user-scoped delegations cannot coexist for the same user.
 * When the address corresponds to an EVM Smart Account, the delegation is scoped to the Smart Account's owner EOA rather than the Smart Account address itself. This means `/address/{smartAccountAddress}/delegation` and `/address/{ownerEoaAddress}/delegation` resolve to the same delegation, and the 409 `account_scoped_delegation_active` error may be returned when creating via either address if one already exists for the canonical owner.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param userId - The ID of the end user.
 * @param address - The blockchain address of the end user account to scope this delegation to. Format varies by network (e.g., 0x-prefixed for EVM, base58 for Solana). For EVM addresses, matching is case-insensitive.
 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const createDelegationForEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateDelegationForEndUserAccountInput,
    outputSchema: CreateDelegationForEndUserAccountOutput,
  }));
