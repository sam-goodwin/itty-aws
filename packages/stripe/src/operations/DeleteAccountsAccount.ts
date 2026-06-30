import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteAccountsAccountInput {
  account: string;
}
export const DeleteAccountsAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/accounts/{account}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteAccountsAccountInput>;

// Output Schema
export interface DeleteAccountsAccountOutput {
  deleted: true;
  id: string;
  object: "account";
}
export const DeleteAccountsAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["account"]),
  }) as unknown as Schema.Codec<DeleteAccountsAccountOutput>;

// The operation
/**
 * Delete an account
 *
 * <p>With <a href="/connect">Connect</a>, you can delete accounts you manage.</p>
 * <p>Test-mode accounts can be deleted at any time.</p>
 * <p>Live-mode accounts that have access to the standard dashboard and Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. All other Live-mode accounts, can be deleted when all <a href="/api/balance/balance_object">balances</a> are zero.</p>
 * <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/settings/account">account information tab in your account settings</a> instead.</p>
 */
export const DeleteAccountsAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteAccountsAccountInput,
    outputSchema: DeleteAccountsAccountOutput,
  }),
);
