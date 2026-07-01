import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteAccountsAccountExternalAccountsIdInput {
  account: string;
  id: string;
}
export const DeleteAccountsAccountExternalAccountsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/accounts/{account}/external_accounts/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteAccountsAccountExternalAccountsIdInput>;

// Output Schema
export type DeleteAccountsAccountExternalAccountsIdOutput =
  | {
      currency?: string | null;
      deleted: true;
      id: string;
      object: "bank_account";
    }
  | { currency?: string | null; deleted: true; id: string; object: "card" };
export const DeleteAccountsAccountExternalAccountsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      currency: Schema.optional(Schema.NullOr(Schema.String)),
      deleted: Schema.Literals([true]),
      id: Schema.String,
      object: Schema.Literals(["bank_account"]),
    }),
    Schema.Struct({
      currency: Schema.optional(Schema.NullOr(Schema.String)),
      deleted: Schema.Literals([true]),
      id: Schema.String,
      object: Schema.Literals(["card"]),
    }),
  ]) as unknown as Schema.Codec<DeleteAccountsAccountExternalAccountsIdOutput>;

// The operation
/**
 * Delete an external account
 *
 * <p>Delete a specified external account for a given account.</p>
 *
 * @param id - Unique identifier for the external account to be deleted.
 */
export const DeleteAccountsAccountExternalAccountsId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteAccountsAccountExternalAccountsIdInput,
    outputSchema: DeleteAccountsAccountExternalAccountsIdOutput,
  }));
