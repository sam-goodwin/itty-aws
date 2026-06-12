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
export const PostTestHelpersCustomersCustomerFundCashBalanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    amount: Schema.Number,
    currency: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
    reference: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/customers/{customer}/fund_cash_balance",
      contentType: "form-urlencoded",
    }),
  );
export type PostTestHelpersCustomersCustomerFundCashBalanceInput =
  typeof PostTestHelpersCustomersCustomerFundCashBalanceInput.Type;

// Output Schema
export const PostTestHelpersCustomersCustomerFundCashBalanceOutput =
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
export type PostTestHelpersCustomersCustomerFundCashBalanceOutput =
  typeof PostTestHelpersCustomersCustomerFundCashBalanceOutput.Type;

// The operation
/**
 * Fund a test mode cash balance
 *
 * <p>Create an incoming testmode bank transfer</p>
 */
export const PostTestHelpersCustomersCustomerFundCashBalance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersCustomersCustomerFundCashBalanceInput,
    outputSchema: PostTestHelpersCustomersCustomerFundCashBalanceOutput,
  }));
