import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListSubaccountsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/subaccounts" }));
export type ListSubaccountsInput = typeof ListSubaccountsInput.Type;

// Output Schema
export const ListSubaccountsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subaccounts: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        subaccount_name: Schema.optional(Schema.String),
        subaccount_id: Schema.optional(Schema.String),
        activated: Schema.optional(Schema.Boolean),
        balance: Schema.optional(Schema.Number),
        pending_charges: Schema.optional(Schema.Number),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListSubaccountsOutput = typeof ListSubaccountsOutput.Type;

// The operation
/**
 * List Sub-Accounts
 *
 * Get information about all sub-accounts for your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listSubaccounts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListSubaccountsInput,
  outputSchema: ListSubaccountsOutput,
}));
