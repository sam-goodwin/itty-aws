import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetDelegationForEndUserAccountInput {
  userId: string;
  address: string;
  projectID?: string;
}
export const GetDelegationForEndUserAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.PathParam()),
    address: Schema.String.pipe(T.PathParam()),
    projectID: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/embedded-wallet-api/end-users/{userId}/address/{address}/delegation",
    }),
  ) as unknown as Schema.Codec<GetDelegationForEndUserAccountInput>;

// Output Schema
export interface GetDelegationForEndUserAccountOutput {
  expiresAt: string;
}
export const GetDelegationForEndUserAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiresAt: Schema.String,
  }) as unknown as Schema.Codec<GetDelegationForEndUserAccountOutput>;

// The operation
/**
 * Get account-scoped delegation for end user
 *
 * Returns the active account-scoped delegation for the specified end user account, if one exists. Useful for showing delegation status in a UI.
 * When the address corresponds to an EVM Smart Account, this returns the delegation for the Smart Account's owner EOA.
 *
 * @param userId - The ID of the end user.
 * @param address - The blockchain address of the end user account to query. For EVM addresses, matching is case-insensitive.
 * @param projectID - The ID of the CDP Project. Required for end users authenticated using custom auth (i.e. a non-CDP JWT provider).
 */
export const getDelegationForEndUserAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetDelegationForEndUserAccountInput,
    outputSchema: GetDelegationForEndUserAccountOutput,
  }));
