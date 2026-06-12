import * as Schema from "effect/Schema";
import { v2_core_accountSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetV2CoreAccountsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applied_configurations: Schema.optional(Schema.String),
    closed: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
  },
).pipe(T.Http({ method: "GET", path: "/v2/core/accounts" }));
export type GetV2CoreAccountsInput = typeof GetV2CoreAccountsInput.Type;

// Output Schema
export const GetV2CoreAccountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => v2_core_accountSchema)),
    next_page_url: Schema.NullOr(Schema.String),
    previous_page_url: Schema.NullOr(Schema.String),
  });
export type GetV2CoreAccountsOutput = typeof GetV2CoreAccountsOutput.Type;

// The operation
/**
 * List accounts
 *
 * Returns a list of Accounts.
 *
 * @param applied_configurations - Filter only accounts that have all of the configurations specified. If omitted, returns all accounts regardless of which configurations they have.
 * @param closed - Filter by whether the account is closed. If omitted, returns only Accounts that are not closed.
 * @param limit - The upper limit on the number of accounts returned by the List Account request.
 */
export const GetV2CoreAccounts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV2CoreAccountsInput,
  outputSchema: GetV2CoreAccountsOutput,
}));
