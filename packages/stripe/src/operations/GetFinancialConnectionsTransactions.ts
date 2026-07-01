import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetFinancialConnectionsTransactionsInput {
  account: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
  transacted_at?: string;
  transaction_refresh?: string;
}
export const GetFinancialConnectionsTransactionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    transacted_at: Schema.optional(Schema.String),
    transaction_refresh: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/financial_connections/transactions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetFinancialConnectionsTransactionsInput>;

// Output Schema
export interface GetFinancialConnectionsTransactionsOutput {
  data: {
    account: string;
    amount: number;
    currency: string;
    description: string;
    id: string;
    livemode: boolean;
    object: "financial_connections.transaction";
    status: "pending" | "posted" | "void";
    status_transitions: { posted_at: number | null; void_at: number | null };
    transacted_at: number;
    transaction_refresh: string;
    updated: number;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetFinancialConnectionsTransactionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        account: Schema.String,
        amount: Schema.Number,
        currency: Schema.String,
        description: Schema.String,
        id: Schema.String,
        livemode: Schema.Boolean,
        object: Schema.Literals(["financial_connections.transaction"]),
        status: Schema.Literals(["pending", "posted", "void"]),
        status_transitions: Schema.Struct({
          posted_at: Schema.NullOr(Schema.Number),
          void_at: Schema.NullOr(Schema.Number),
        }),
        transacted_at: Schema.Number,
        transaction_refresh: Schema.String,
        updated: Schema.Number,
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetFinancialConnectionsTransactionsOutput>;

// The operation
/**
 * List Transactions
 *
 * <p>Returns a list of Financial Connections <code>Transaction</code> objects.</p>
 *
 * @param account - The ID of the Financial Connections Account whose transactions will be retrieved.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param transacted_at - A filter on the list based on the object `transacted_at` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
 * @param transaction_refresh - A filter on the list based on the object `transaction_refresh` field. The value can be a dictionary with the following options:
 */
export const GetFinancialConnectionsTransactions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetFinancialConnectionsTransactionsInput,
    outputSchema: GetFinancialConnectionsTransactionsOutput,
  }));
