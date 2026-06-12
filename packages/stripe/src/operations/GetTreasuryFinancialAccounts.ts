import * as Schema from "effect/Schema";
import { treasury_financial_accountSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTreasuryFinancialAccountsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["closed", "open"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/financial_accounts",
      contentType: "form-urlencoded",
    }),
  );
export type GetTreasuryFinancialAccountsInput =
  typeof GetTreasuryFinancialAccountsInput.Type;

// Output Schema
export const GetTreasuryFinancialAccountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => treasury_financial_accountSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetTreasuryFinancialAccountsOutput =
  typeof GetTreasuryFinancialAccountsOutput.Type;

// The operation
/**
 * List all FinancialAccounts
 *
 * <p>Returns a list of FinancialAccounts.</p>
 *
 * @param created - Only return FinancialAccounts that were created during the given date interval.
 * @param ending_before - An object ID cursor for use in pagination.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit ranging from 1 to 100 (defaults to 10).
 * @param starting_after - An object ID cursor for use in pagination.
 * @param status - Only return FinancialAccounts that have the given status: `open` or `closed`
 */
export const GetTreasuryFinancialAccounts =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTreasuryFinancialAccountsInput,
    outputSchema: GetTreasuryFinancialAccountsOutput,
  }));
