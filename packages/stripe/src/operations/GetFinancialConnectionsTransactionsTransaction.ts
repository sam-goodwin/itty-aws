import * as Schema from "effect/Schema";
import { bank_connections_resource_transaction_resource_status_transitionsSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetFinancialConnectionsTransactionsTransactionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/financial_connections/transactions/{transaction}",
      contentType: "form-urlencoded",
    }),
  );
export type GetFinancialConnectionsTransactionsTransactionInput =
  typeof GetFinancialConnectionsTransactionsTransactionInput.Type;

// Output Schema
export const GetFinancialConnectionsTransactionsTransactionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["financial_connections.transaction"]),
    status: Schema.Literals(["pending", "posted", "void"]),
    status_transitions: Schema.suspend(
      () =>
        bank_connections_resource_transaction_resource_status_transitionsSchema,
    ),
    transacted_at: Schema.Number,
    transaction_refresh: Schema.String,
    updated: Schema.Number,
  });
export type GetFinancialConnectionsTransactionsTransactionOutput =
  typeof GetFinancialConnectionsTransactionsTransactionOutput.Type;

// The operation
/**
 * Retrieve a Transaction
 *
 * <p>Retrieves the details of a Financial Connections <code>Transaction</code></p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetFinancialConnectionsTransactionsTransaction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetFinancialConnectionsTransactionsTransactionInput,
    outputSchema: GetFinancialConnectionsTransactionsTransactionOutput,
  }));
