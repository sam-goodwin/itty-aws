import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListBalancesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  pageToken: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/accounts/{accountId}/balances" }));
export type ListBalancesInput = typeof ListBalancesInput.Type;

// Output Schema
export const ListBalancesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  balances: Schema.Array(
    Schema.Struct({
      asset: Schema.Struct({
        symbol: Schema.String,
        type: Schema.Literals(["fiat", "crypto"]),
        name: Schema.String,
        decimals: Schema.Number,
      }),
      amount: Schema.Record(
        Schema.String,
        Schema.Struct({
          available: Schema.String,
          total: Schema.String,
        }),
      ),
    }),
  ),
  nextPageToken: Schema.optional(Schema.String),
});
export type ListBalancesOutput = typeof ListBalancesOutput.Type;

// The operation
/**
 * List balances for account
 *
 * List the balances for an account. Results are sorted by native-fiat equivalent balance in descending order.
 *
 * @param accountId - The unique identifier of the account.
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listBalances = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBalancesInput,
  outputSchema: ListBalancesOutput,
}));
