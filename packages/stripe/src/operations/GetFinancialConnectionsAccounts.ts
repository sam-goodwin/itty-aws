import * as Schema from "effect/Schema";
import { financial_connections_accountSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetFinancialConnectionsAccountsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    session: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/financial_connections/accounts",
      contentType: "form-urlencoded",
    }),
  );
export type GetFinancialConnectionsAccountsInput =
  typeof GetFinancialConnectionsAccountsInput.Type;

// Output Schema
export const GetFinancialConnectionsAccountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.suspend(() => financial_connections_accountSchema),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetFinancialConnectionsAccountsOutput =
  typeof GetFinancialConnectionsAccountsOutput.Type;

// The operation
/**
 * List Accounts
 *
 * <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
 *
 * @param account_holder - If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param session - If present, only return accounts that were collected as part of the given session.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetFinancialConnectionsAccounts =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetFinancialConnectionsAccountsInput,
    outputSchema: GetFinancialConnectionsAccountsOutput,
  }));
