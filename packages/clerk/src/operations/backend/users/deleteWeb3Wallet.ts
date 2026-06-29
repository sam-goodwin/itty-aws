import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteWeb3WalletInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
  web3_wallet_identification_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/users/{user_id}/web3_wallets/{web3_wallet_identification_id}",
  }),
);
export type DeleteWeb3WalletInput = typeof DeleteWeb3WalletInput.Type;

// Output Schema
export const DeleteWeb3WalletOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  },
);
export type DeleteWeb3WalletOutput = typeof DeleteWeb3WalletOutput.Type;

// The operation
/**
 * Delete a user web3 wallet
 *
 * Delete the web3 wallet identification for a given user.
 *
 * @param user_id - The ID of the user that owns the web3 wallet
 * @param web3_wallet_identification_id - The ID of the web3 wallet identity to be deleted
 */
export const deleteWeb3Wallet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteWeb3WalletInput,
  outputSchema: DeleteWeb3WalletOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
