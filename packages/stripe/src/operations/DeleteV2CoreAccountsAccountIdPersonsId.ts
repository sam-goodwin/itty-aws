import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteV2CoreAccountsAccountIdPersonsIdInput {
  account_id: string;
  id: string;
}
export const DeleteV2CoreAccountsAccountIdPersonsIdInput =
  /*@__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/core/accounts/{account_id}/persons/{id}",
    }),
  ) as unknown as Schema.Codec<DeleteV2CoreAccountsAccountIdPersonsIdInput>;

// Output Schema
export interface DeleteV2CoreAccountsAccountIdPersonsIdOutput {
  id: string;
  object?: string;
}
export const DeleteV2CoreAccountsAccountIdPersonsIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    object: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeleteV2CoreAccountsAccountIdPersonsIdOutput>;

// The operation
/**
 * Delete a person
 *
 * Delete a Person associated with an Account.
 *
 * @param account_id - The Account the Person is associated with.
 * @param id - The ID of the Person to delete.
 */
export const DeleteV2CoreAccountsAccountIdPersonsId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeleteV2CoreAccountsAccountIdPersonsIdInput,
    outputSchema: DeleteV2CoreAccountsAccountIdPersonsIdOutput,
  }));
