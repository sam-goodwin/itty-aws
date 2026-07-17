import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV2CoreAccountsAccountIdPersonTokensIdInput {
  account_id: string;
  id: string;
}
export const GetV2CoreAccountsAccountIdPersonTokensIdInput =
  /*@__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/core/accounts/{account_id}/person_tokens/{id}",
    }),
  ) as unknown as Schema.Codec<GetV2CoreAccountsAccountIdPersonTokensIdInput>;

// Output Schema
export interface GetV2CoreAccountsAccountIdPersonTokensIdOutput {
  created: string;
  expires_at: string;
  id: string;
  livemode: boolean;
  object: "v2.core.account_person_token";
  used: boolean;
}
export const GetV2CoreAccountsAccountIdPersonTokensIdOutput =
  /*@__PURE__*/ Schema.Struct({
    created: Schema.String,
    expires_at: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["v2.core.account_person_token"]),
    used: Schema.Boolean,
  }) as unknown as Schema.Codec<GetV2CoreAccountsAccountIdPersonTokensIdOutput>;

// The operation
/**
 * Retrieve a person token
 *
 * Retrieves a Person Token associated with an Account.
 *
 * @param account_id - The Account the Person is associated with.
 * @param id - The ID of the Person Token to retrieve.
 */
export const GetV2CoreAccountsAccountIdPersonTokensId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetV2CoreAccountsAccountIdPersonTokensIdInput,
    outputSchema: GetV2CoreAccountsAccountIdPersonTokensIdOutput,
  }));
