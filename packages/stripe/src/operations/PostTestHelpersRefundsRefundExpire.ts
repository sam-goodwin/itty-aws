import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTestHelpersRefundsRefundExpireInput {
  refund: string;
  expand?: string[];
}
export const PostTestHelpersRefundsRefundExpireInput =
  /*@__PURE__*/ Schema.Struct({
    refund: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/refunds/{refund}/expire",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTestHelpersRefundsRefundExpireInput>;

// Output Schema
export interface PostTestHelpersRefundsRefundExpireOutput {
  amount: number;
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
      }
    | null;
  charge: unknown;
  created: number;
  currency: string;
  description?: string;
  destination_details?: {
    affirm?: {};
    afterpay_clearpay?: {};
    alipay?: {};
    alma?: {};
    amazon_pay?: {};
    au_bank_transfer?: {};
    blik?: {
      network_decline_code: string | null;
      reference: string | null;
      reference_status: string | null;
    };
    br_bank_transfer?: {
      reference: string | null;
      reference_status: string | null;
    };
    card?: {
      reference?: string;
      reference_status?: string;
      reference_type?: string;
      type: "pending" | "refund" | "reversal";
    };
    cashapp?: {};
    crypto?: { reference: string | null };
    customer_cash_balance?: {};
    eps?: {};
    eu_bank_transfer?: {
      reference: string | null;
      reference_status: string | null;
    };
    gb_bank_transfer?: {
      reference: string | null;
      reference_status: string | null;
    };
    giropay?: {};
    grabpay?: {};
    jp_bank_transfer?: {
      reference: string | null;
      reference_status: string | null;
    };
    klarna?: {};
    mb_way?: { reference: string | null; reference_status: string | null };
    multibanco?: { reference: string | null; reference_status: string | null };
    mx_bank_transfer?: {
      reference: string | null;
      reference_status: string | null;
    };
    nz_bank_transfer?: {};
    p24?: { reference: string | null; reference_status: string | null };
    paynow?: {};
    paypal?: { network_decline_code: string | null };
    pix?: {};
    revolut?: {};
    scalapay?: {};
    sofort?: {};
    swish?: {
      network_decline_code: string | null;
      reference: string | null;
      reference_status: string | null;
    };
    th_bank_transfer?: {
      reference: string | null;
      reference_status: string | null;
    };
    twint?: {};
    type: string;
    us_bank_transfer?: {
      reference: string | null;
      reference_status: string | null;
    };
    wechat_pay?: {};
    zip?: {};
  };
  failure_balance_transaction?:
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
  failure_reason?: string;
  id: string;
  instructions_email?: string;
  metadata: Record<string, string> | null;
  next_action?: {
    display_details?: {
      email_sent: { email_sent_at: number; email_sent_to: string };
      expires_at: number;
    };
    type: string;
  };
  object: "refund";
  payment_intent: unknown;
  pending_reason?: "charge_pending" | "insufficient_funds" | "processing";
  presentment_details?: {
    presentment_amount: number;
    presentment_currency: string;
  };
  reason:
    | "duplicate"
    | "expired_uncaptured_charge"
    | "fraudulent"
    | "requested_by_customer"
    | null;
  receipt_number: string | null;
  source_transfer_reversal:
    | string
    | {
        amount: number;
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
            }
          | null;
        created: number;
        currency: string;
        destination_payment_refund: unknown;
        id: string;
        metadata: Record<string, string> | null;
        object: "transfer_reversal";
        source_refund: unknown;
        transfer:
          | string
          | {
              amount: number;
              amount_reversed: number;
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
                  }
                | null;
              created: number;
              currency: string;
              description: string | null;
              destination: unknown;
              destination_payment?: unknown;
              id: string;
              livemode: boolean;
              metadata: Record<string, string>;
              object: "transfer";
              reversals: {
                data: unknown[];
                has_more: boolean;
                object: "list";
                url: string;
              };
              reversed: boolean;
              source_transaction: unknown;
              source_type?: string;
              transfer_group: string | null;
            };
      }
    | null;
  status: string | null;
  transfer_reversal:
    | string
    | {
        amount: number;
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
            }
          | null;
        created: number;
        currency: string;
        destination_payment_refund: unknown;
        id: string;
        metadata: Record<string, string> | null;
        object: "transfer_reversal";
        source_refund: unknown;
        transfer:
          | string
          | {
              amount: number;
              amount_reversed: number;
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
                  }
                | null;
              created: number;
              currency: string;
              description: string | null;
              destination: unknown;
              destination_payment?: unknown;
              id: string;
              livemode: boolean;
              metadata: Record<string, string>;
              object: "transfer";
              reversals: {
                data: unknown[];
                has_more: boolean;
                object: "list";
                url: string;
              };
              reversed: boolean;
              source_transaction: unknown;
              source_type?: string;
              transfer_group: string | null;
            };
      }
    | null;
}
export const PostTestHelpersRefundsRefundExpireOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_transaction: Schema.NullOr(
      Schema.Union([
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
          source: Schema.NullOr(Schema.Union([Schema.String, Schema.Unknown])),
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
    ),
    charge: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.optional(Schema.String),
    destination_details: Schema.optional(
      Schema.Struct({
        affirm: Schema.optional(Schema.Struct({})),
        afterpay_clearpay: Schema.optional(Schema.Struct({})),
        alipay: Schema.optional(Schema.Struct({})),
        alma: Schema.optional(Schema.Struct({})),
        amazon_pay: Schema.optional(Schema.Struct({})),
        au_bank_transfer: Schema.optional(Schema.Struct({})),
        blik: Schema.optional(
          Schema.Struct({
            network_decline_code: Schema.NullOr(Schema.String),
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        br_bank_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        card: Schema.optional(
          Schema.Struct({
            reference: Schema.optional(Schema.String),
            reference_status: Schema.optional(Schema.String),
            reference_type: Schema.optional(Schema.String),
            type: Schema.Literals(["pending", "refund", "reversal"]),
          }),
        ),
        cashapp: Schema.optional(Schema.Struct({})),
        crypto: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
          }),
        ),
        customer_cash_balance: Schema.optional(Schema.Struct({})),
        eps: Schema.optional(Schema.Struct({})),
        eu_bank_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        gb_bank_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        giropay: Schema.optional(Schema.Struct({})),
        grabpay: Schema.optional(Schema.Struct({})),
        jp_bank_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        klarna: Schema.optional(Schema.Struct({})),
        mb_way: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        multibanco: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        mx_bank_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        nz_bank_transfer: Schema.optional(Schema.Struct({})),
        p24: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        paynow: Schema.optional(Schema.Struct({})),
        paypal: Schema.optional(
          Schema.Struct({
            network_decline_code: Schema.NullOr(Schema.String),
          }),
        ),
        pix: Schema.optional(Schema.Struct({})),
        revolut: Schema.optional(Schema.Struct({})),
        scalapay: Schema.optional(Schema.Struct({})),
        sofort: Schema.optional(Schema.Struct({})),
        swish: Schema.optional(
          Schema.Struct({
            network_decline_code: Schema.NullOr(Schema.String),
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        th_bank_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        twint: Schema.optional(Schema.Struct({})),
        type: Schema.String,
        us_bank_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.NullOr(Schema.String),
            reference_status: Schema.NullOr(Schema.String),
          }),
        ),
        wechat_pay: Schema.optional(Schema.Struct({})),
        zip: Schema.optional(Schema.Struct({})),
      }),
    ),
    failure_balance_transaction: Schema.optional(
      Schema.Union([
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
          source: Schema.NullOr(Schema.Union([Schema.String, Schema.Unknown])),
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
    ),
    failure_reason: Schema.optional(Schema.String),
    id: Schema.String,
    instructions_email: Schema.optional(Schema.String),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    next_action: Schema.optional(
      Schema.Struct({
        display_details: Schema.optional(
          Schema.Struct({
            email_sent: Schema.Struct({
              email_sent_at: Schema.Number,
              email_sent_to: Schema.String,
            }),
            expires_at: Schema.Number,
          }),
        ),
        type: Schema.String,
      }),
    ),
    object: Schema.Literals(["refund"]),
    payment_intent: Schema.Unknown,
    pending_reason: Schema.optional(
      Schema.Literals(["charge_pending", "insufficient_funds", "processing"]),
    ),
    presentment_details: Schema.optional(
      Schema.Struct({
        presentment_amount: Schema.Number,
        presentment_currency: Schema.String,
      }),
    ),
    reason: Schema.NullOr(
      Schema.Literals([
        "duplicate",
        "expired_uncaptured_charge",
        "fraudulent",
        "requested_by_customer",
      ]),
    ),
    receipt_number: Schema.NullOr(Schema.String),
    source_transfer_reversal: Schema.Unknown,
    status: Schema.NullOr(Schema.String),
    transfer_reversal: Schema.Unknown,
  }) as unknown as Schema.Codec<PostTestHelpersRefundsRefundExpireOutput>;

// The operation
/**
 * Expire a pending refund.
 *
 * <p>Expire a refund with a status of <code>requires_action</code>.</p>
 */
export const PostTestHelpersRefundsRefundExpire =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersRefundsRefundExpireInput,
    outputSchema: PostTestHelpersRefundsRefundExpireOutput,
  }));
