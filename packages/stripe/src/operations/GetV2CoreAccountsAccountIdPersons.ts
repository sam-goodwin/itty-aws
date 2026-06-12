import * as Schema from "effect/Schema";
import { v2_core_account_personSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV2CoreAccountsAccountIdPersonsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/core/accounts/{account_id}/persons" }),
  );
export type GetV2CoreAccountsAccountIdPersonsInput =
  typeof GetV2CoreAccountsAccountIdPersonsInput.Type;

// Output Schema
export const GetV2CoreAccountsAccountIdPersonsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => v2_core_account_personSchema)),
    next_page_url: Schema.NullOr(Schema.String),
    previous_page_url: Schema.NullOr(Schema.String),
  });
export type GetV2CoreAccountsAccountIdPersonsOutput =
  typeof GetV2CoreAccountsAccountIdPersonsOutput.Type;

// The operation
/**
 * List persons
 *
 * Returns a paginated list of Persons associated with an Account.
 *
 * @param account_id - Account the Persons are associated with.
 * @param limit - The upper limit on the number of accounts returned by the List Account request.
 */
export const GetV2CoreAccountsAccountIdPersons =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetV2CoreAccountsAccountIdPersonsInput,
    outputSchema: GetV2CoreAccountsAccountIdPersonsOutput,
  }));
