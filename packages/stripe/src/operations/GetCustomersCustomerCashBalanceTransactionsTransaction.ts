import * as Schema from "effect/Schema";
import {
  customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraftSchema,
  customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transactionSchema,
  customer_balance_resource_cash_balance_transaction_resource_funded_transactionSchema,
  customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transactionSchema,
  customer_balance_resource_cash_balance_transaction_resource_transferred_to_balanceSchema,
  customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transactionSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCustomersCustomerCashBalanceTransactionsTransactionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    transaction: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}/cash_balance_transactions/{transaction}",
      contentType: "form-urlencoded",
    }),
  );
export type GetCustomersCustomerCashBalanceTransactionsTransactionInput =
  typeof GetCustomersCustomerCashBalanceTransactionsTransactionInput.Type;

// Output Schema
export const GetCustomersCustomerCashBalanceTransactionsTransactionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjusted_for_overdraft: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraftSchema,
      ),
    ),
    applied_to_payment: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transactionSchema,
      ),
    ),
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    ending_balance: Schema.Number,
    funded: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_funded_transactionSchema,
      ),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    net_amount: Schema.Number,
    object: Schema.Literals(["customer_cash_balance_transaction"]),
    refunded_from_payment: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transactionSchema,
      ),
    ),
    transferred_to_balance: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_transferred_to_balanceSchema,
      ),
    ),
    type: Schema.Literals([
      "adjusted_for_overdraft",
      "applied_to_payment",
      "funded",
      "funding_reversed",
      "refunded_from_payment",
      "return_canceled",
      "return_initiated",
      "transferred_to_balance",
      "unapplied_from_payment",
    ]),
    unapplied_from_payment: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transactionSchema,
      ),
    ),
  });
export type GetCustomersCustomerCashBalanceTransactionsTransactionOutput =
  typeof GetCustomersCustomerCashBalanceTransactionsTransactionOutput.Type;

// The operation
/**
 * Retrieve a cash balance transaction
 *
 * <p>Retrieves a specific cash balance transaction, which updated the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCustomersCustomerCashBalanceTransactionsTransaction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetCustomersCustomerCashBalanceTransactionsTransactionInput,
    outputSchema: GetCustomersCustomerCashBalanceTransactionsTransactionOutput,
  }));
