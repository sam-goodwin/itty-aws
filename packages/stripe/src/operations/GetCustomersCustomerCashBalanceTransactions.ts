import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetCustomersCustomerCashBalanceTransactionsInput {
  customer: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetCustomersCustomerCashBalanceTransactionsInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}/cash_balance_transactions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCustomersCustomerCashBalanceTransactionsInput>;

// Output Schema
export interface GetCustomersCustomerCashBalanceTransactionsOutput {
  data: {
    adjusted_for_overdraft?: {
      balance_transaction:
        | string
        | {
            amount: number;
            available_on: number;
            balance_type:
              | "issuing"
              | "payments"
              | "refund_and_dispute_prefunding"
              | "risk_reserved";
            created: number;
            currency: string;
            description: string | null;
            exchange_rate: number | null;
            fee: number;
            fee_details: {
              amount: number;
              application: string | null;
              currency: string;
              description: string | null;
              type: string;
            }[];
            id: string;
            net: number;
            object: "balance_transaction";
            reporting_category: string;
            source: string | unknown | null;
            status: string;
            type:
              | "adjustment"
              | "advance"
              | "advance_funding"
              | "anticipation_repayment"
              | "application_fee"
              | "application_fee_refund"
              | "charge"
              | "climate_order_purchase"
              | "climate_order_refund"
              | "connect_collection_transfer"
              | "contribution"
              | "fee_credit_funding"
              | "inbound_transfer"
              | "inbound_transfer_reversal"
              | "issuing_authorization_hold"
              | "issuing_authorization_release"
              | "issuing_dispute"
              | "issuing_transaction"
              | "obligation_outbound"
              | "obligation_reversal_inbound"
              | "payment"
              | "payment_failure_refund"
              | "payment_network_reserve_hold"
              | "payment_network_reserve_release"
              | "payment_refund"
              | "payment_reversal"
              | "payment_unreconciled"
              | "payout"
              | "payout_cancel"
              | "payout_failure"
              | "payout_minimum_balance_hold"
              | "payout_minimum_balance_release"
              | "refund"
              | "refund_failure"
              | "reserve_hold"
              | "reserve_release"
              | "reserve_transaction"
              | "reserved_funds"
              | "stripe_balance_payment_debit"
              | "stripe_balance_payment_debit_reversal"
              | "stripe_fee"
              | "stripe_fx_fee"
              | "tax_fee"
              | "tax_fund"
              | "topup"
              | "topup_reversal"
              | "transfer"
              | "transfer_cancel"
              | "transfer_failure"
              | "transfer_refund";
          };
      linked_transaction: string | unknown;
    };
    applied_to_payment?: { payment_intent: unknown };
    created: number;
    currency: string;
    customer: unknown;
    customer_account: string | null;
    ending_balance: number;
    funded?: {
      bank_transfer: {
        eu_bank_transfer?: {
          bic: string | null;
          iban_last4: string | null;
          sender_name: string | null;
        };
        gb_bank_transfer?: {
          account_number_last4: string | null;
          sender_name: string | null;
          sort_code: string | null;
        };
        jp_bank_transfer?: {
          sender_bank: string | null;
          sender_branch: string | null;
          sender_name: string | null;
        };
        reference: string | null;
        type:
          | "eu_bank_transfer"
          | "gb_bank_transfer"
          | "jp_bank_transfer"
          | "mx_bank_transfer"
          | "us_bank_transfer";
        us_bank_transfer?: {
          network?: "ach" | "domestic_wire_us" | "swift";
          sender_name: string | null;
        };
      };
    };
    id: string;
    livemode: boolean;
    net_amount: number;
    object: "customer_cash_balance_transaction";
    refunded_from_payment?: { refund: unknown };
    transferred_to_balance?: {
      balance_transaction:
        | string
        | {
            amount: number;
            available_on: number;
            balance_type:
              | "issuing"
              | "payments"
              | "refund_and_dispute_prefunding"
              | "risk_reserved";
            created: number;
            currency: string;
            description: string | null;
            exchange_rate: number | null;
            fee: number;
            fee_details: {
              amount: number;
              application: string | null;
              currency: string;
              description: string | null;
              type: string;
            }[];
            id: string;
            net: number;
            object: "balance_transaction";
            reporting_category: string;
            source: string | unknown | null;
            status: string;
            type:
              | "adjustment"
              | "advance"
              | "advance_funding"
              | "anticipation_repayment"
              | "application_fee"
              | "application_fee_refund"
              | "charge"
              | "climate_order_purchase"
              | "climate_order_refund"
              | "connect_collection_transfer"
              | "contribution"
              | "fee_credit_funding"
              | "inbound_transfer"
              | "inbound_transfer_reversal"
              | "issuing_authorization_hold"
              | "issuing_authorization_release"
              | "issuing_dispute"
              | "issuing_transaction"
              | "obligation_outbound"
              | "obligation_reversal_inbound"
              | "payment"
              | "payment_failure_refund"
              | "payment_network_reserve_hold"
              | "payment_network_reserve_release"
              | "payment_refund"
              | "payment_reversal"
              | "payment_unreconciled"
              | "payout"
              | "payout_cancel"
              | "payout_failure"
              | "payout_minimum_balance_hold"
              | "payout_minimum_balance_release"
              | "refund"
              | "refund_failure"
              | "reserve_hold"
              | "reserve_release"
              | "reserve_transaction"
              | "reserved_funds"
              | "stripe_balance_payment_debit"
              | "stripe_balance_payment_debit_reversal"
              | "stripe_fee"
              | "stripe_fx_fee"
              | "tax_fee"
              | "tax_fund"
              | "topup"
              | "topup_reversal"
              | "transfer"
              | "transfer_cancel"
              | "transfer_failure"
              | "transfer_refund";
          };
    };
    type:
      | "adjusted_for_overdraft"
      | "applied_to_payment"
      | "funded"
      | "funding_reversed"
      | "refunded_from_payment"
      | "return_canceled"
      | "return_initiated"
      | "transferred_to_balance"
      | "unapplied_from_payment";
    unapplied_from_payment?: { payment_intent: unknown };
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetCustomersCustomerCashBalanceTransactionsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        adjusted_for_overdraft: Schema.optional(
          Schema.Struct({
            balance_transaction: Schema.Union([
              Schema.String,
              Schema.Struct({
                amount: Schema.Number,
                available_on: Schema.Number,
                balance_type: Schema.Literals([
                  "issuing",
                  "payments",
                  "refund_and_dispute_prefunding",
                  "risk_reserved",
                ]),
                created: Schema.Number,
                currency: Schema.String,
                description: Schema.NullOr(Schema.String),
                exchange_rate: Schema.NullOr(Schema.Number),
                fee: Schema.Number,
                fee_details: Schema.Array(
                  Schema.Struct({
                    amount: Schema.Number,
                    application: Schema.NullOr(Schema.String),
                    currency: Schema.String,
                    description: Schema.NullOr(Schema.String),
                    type: Schema.String,
                  }),
                ),
                id: Schema.String,
                net: Schema.Number,
                object: Schema.Literals(["balance_transaction"]),
                reporting_category: Schema.String,
                source: Schema.NullOr(
                  Schema.Union([Schema.String, Schema.Unknown]),
                ),
                status: Schema.String,
                type: Schema.Literals([
                  "adjustment",
                  "advance",
                  "advance_funding",
                  "anticipation_repayment",
                  "application_fee",
                  "application_fee_refund",
                  "charge",
                  "climate_order_purchase",
                  "climate_order_refund",
                  "connect_collection_transfer",
                  "contribution",
                  "fee_credit_funding",
                  "inbound_transfer",
                  "inbound_transfer_reversal",
                  "issuing_authorization_hold",
                  "issuing_authorization_release",
                  "issuing_dispute",
                  "issuing_transaction",
                  "obligation_outbound",
                  "obligation_reversal_inbound",
                  "payment",
                  "payment_failure_refund",
                  "payment_network_reserve_hold",
                  "payment_network_reserve_release",
                  "payment_refund",
                  "payment_reversal",
                  "payment_unreconciled",
                  "payout",
                  "payout_cancel",
                  "payout_failure",
                  "payout_minimum_balance_hold",
                  "payout_minimum_balance_release",
                  "refund",
                  "refund_failure",
                  "reserve_hold",
                  "reserve_release",
                  "reserve_transaction",
                  "reserved_funds",
                  "stripe_balance_payment_debit",
                  "stripe_balance_payment_debit_reversal",
                  "stripe_fee",
                  "stripe_fx_fee",
                  "tax_fee",
                  "tax_fund",
                  "topup",
                  "topup_reversal",
                  "transfer",
                  "transfer_cancel",
                  "transfer_failure",
                  "transfer_refund",
                ]),
              }),
            ]),
            linked_transaction: Schema.Union([Schema.String, Schema.Unknown]),
          }),
        ),
        applied_to_payment: Schema.optional(
          Schema.Struct({
            payment_intent: Schema.Unknown,
          }),
        ),
        created: Schema.Number,
        currency: Schema.String,
        customer: Schema.Unknown,
        customer_account: Schema.NullOr(Schema.String),
        ending_balance: Schema.Number,
        funded: Schema.optional(
          Schema.Struct({
            bank_transfer: Schema.Struct({
              eu_bank_transfer: Schema.optional(
                Schema.Struct({
                  bic: Schema.NullOr(Schema.String),
                  iban_last4: Schema.NullOr(Schema.String),
                  sender_name: Schema.NullOr(Schema.String),
                }),
              ),
              gb_bank_transfer: Schema.optional(
                Schema.Struct({
                  account_number_last4: Schema.NullOr(Schema.String),
                  sender_name: Schema.NullOr(Schema.String),
                  sort_code: Schema.NullOr(Schema.String),
                }),
              ),
              jp_bank_transfer: Schema.optional(
                Schema.Struct({
                  sender_bank: Schema.NullOr(Schema.String),
                  sender_branch: Schema.NullOr(Schema.String),
                  sender_name: Schema.NullOr(Schema.String),
                }),
              ),
              reference: Schema.NullOr(Schema.String),
              type: Schema.Literals([
                "eu_bank_transfer",
                "gb_bank_transfer",
                "jp_bank_transfer",
                "mx_bank_transfer",
                "us_bank_transfer",
              ]),
              us_bank_transfer: Schema.optional(
                Schema.Struct({
                  network: Schema.optional(
                    Schema.Literals(["ach", "domestic_wire_us", "swift"]),
                  ),
                  sender_name: Schema.NullOr(Schema.String),
                }),
              ),
            }),
          }),
        ),
        id: Schema.String,
        livemode: Schema.Boolean,
        net_amount: Schema.Number,
        object: Schema.Literals(["customer_cash_balance_transaction"]),
        refunded_from_payment: Schema.optional(
          Schema.Struct({
            refund: Schema.Unknown,
          }),
        ),
        transferred_to_balance: Schema.optional(
          Schema.Struct({
            balance_transaction: Schema.Union([
              Schema.String,
              Schema.Struct({
                amount: Schema.Number,
                available_on: Schema.Number,
                balance_type: Schema.Literals([
                  "issuing",
                  "payments",
                  "refund_and_dispute_prefunding",
                  "risk_reserved",
                ]),
                created: Schema.Number,
                currency: Schema.String,
                description: Schema.NullOr(Schema.String),
                exchange_rate: Schema.NullOr(Schema.Number),
                fee: Schema.Number,
                fee_details: Schema.Array(
                  Schema.Struct({
                    amount: Schema.Number,
                    application: Schema.NullOr(Schema.String),
                    currency: Schema.String,
                    description: Schema.NullOr(Schema.String),
                    type: Schema.String,
                  }),
                ),
                id: Schema.String,
                net: Schema.Number,
                object: Schema.Literals(["balance_transaction"]),
                reporting_category: Schema.String,
                source: Schema.NullOr(
                  Schema.Union([Schema.String, Schema.Unknown]),
                ),
                status: Schema.String,
                type: Schema.Literals([
                  "adjustment",
                  "advance",
                  "advance_funding",
                  "anticipation_repayment",
                  "application_fee",
                  "application_fee_refund",
                  "charge",
                  "climate_order_purchase",
                  "climate_order_refund",
                  "connect_collection_transfer",
                  "contribution",
                  "fee_credit_funding",
                  "inbound_transfer",
                  "inbound_transfer_reversal",
                  "issuing_authorization_hold",
                  "issuing_authorization_release",
                  "issuing_dispute",
                  "issuing_transaction",
                  "obligation_outbound",
                  "obligation_reversal_inbound",
                  "payment",
                  "payment_failure_refund",
                  "payment_network_reserve_hold",
                  "payment_network_reserve_release",
                  "payment_refund",
                  "payment_reversal",
                  "payment_unreconciled",
                  "payout",
                  "payout_cancel",
                  "payout_failure",
                  "payout_minimum_balance_hold",
                  "payout_minimum_balance_release",
                  "refund",
                  "refund_failure",
                  "reserve_hold",
                  "reserve_release",
                  "reserve_transaction",
                  "reserved_funds",
                  "stripe_balance_payment_debit",
                  "stripe_balance_payment_debit_reversal",
                  "stripe_fee",
                  "stripe_fx_fee",
                  "tax_fee",
                  "tax_fund",
                  "topup",
                  "topup_reversal",
                  "transfer",
                  "transfer_cancel",
                  "transfer_failure",
                  "transfer_refund",
                ]),
              }),
            ]),
          }),
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
          Schema.Struct({
            payment_intent: Schema.Unknown,
          }),
        ),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetCustomersCustomerCashBalanceTransactionsOutput>;

// The operation
/**
 * List cash balance transactions
 *
 * <p>Returns a list of transactions that modified the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetCustomersCustomerCashBalanceTransactions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetCustomersCustomerCashBalanceTransactionsInput,
    outputSchema: GetCustomersCustomerCashBalanceTransactionsOutput,
  }));
