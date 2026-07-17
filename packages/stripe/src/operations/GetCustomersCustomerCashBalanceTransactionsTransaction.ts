import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetCustomersCustomerCashBalanceTransactionsTransactionInput {
  customer: string;
  transaction: string;
  expand?: string;
}
export const GetCustomersCustomerCashBalanceTransactionsTransactionInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    transaction: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}/cash_balance_transactions/{transaction}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCustomersCustomerCashBalanceTransactionsTransactionInput>;

// Output Schema
export interface GetCustomersCustomerCashBalanceTransactionsTransactionOutput {
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
    linked_transaction:
      | string
      | {
          adjusted_for_overdraft?: unknown;
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
        };
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
}
export const GetCustomersCustomerCashBalanceTransactionsTransactionOutput =
  /*@__PURE__*/ Schema.Struct({
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
        linked_transaction: Schema.Unknown,
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
  }) as unknown as Schema.Codec<GetCustomersCustomerCashBalanceTransactionsTransactionOutput>;

// The operation
/**
 * Retrieve a cash balance transaction
 *
 * <p>Retrieves a specific cash balance transaction, which updated the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCustomersCustomerCashBalanceTransactionsTransaction =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetCustomersCustomerCashBalanceTransactionsTransactionInput,
    outputSchema: GetCustomersCustomerCashBalanceTransactionsTransactionOutput,
  }));
