import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetChargesSearchInput {
  expand?: string;
  limit?: number;
  page?: string;
  query: string;
}
export const GetChargesSearchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  page: Schema.optional(Schema.String),
  query: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/charges/search",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetChargesSearchInput>;

// Output Schema
export interface GetChargesSearchOutput {
  data: {
    amount: number;
    amount_captured: number;
    amount_refunded: number;
    application:
      | string
      | { id: string; name: string | null; object: "application" }
      | null;
    application_fee:
      | string
      | {
          account: unknown;
          amount: number;
          amount_refunded: number;
          application:
            | string
            | { id: string; name: string | null; object: "application" };
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
          charge: string | unknown;
          created: number;
          currency: string;
          fee_source: {
            charge?: string;
            payout?: string;
            type: "charge" | "payout";
          } | null;
          id: string;
          livemode: boolean;
          object: "application_fee";
          originating_transaction: string | unknown | null;
          refunded: boolean;
          refunds: {
            data: {
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
              fee: string | unknown;
              id: string;
              metadata: Record<string, string> | null;
              object: "fee_refund";
            }[];
            has_more: boolean;
            object: "list";
            url: string;
          };
        }
      | null;
    application_fee_amount: number | null;
    authorization_code?: string;
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
    billing_details: {
      address: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      } | null;
      email: string | null;
      name: string | null;
      phone: string | null;
      tax_id: string | null;
    };
    calculated_statement_descriptor: string | null;
    captured: boolean;
    created: number;
    currency: string;
    customer: unknown;
    description: string | null;
    disputed: boolean;
    failure_balance_transaction:
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
    failure_code: string | null;
    failure_message: string | null;
    fraud_details: { stripe_report?: string; user_report?: string } | null;
    id: string;
    level3?: {
      customer_reference?: string;
      line_items: {
        discount_amount: number | null;
        product_code: string;
        product_description: string;
        quantity: number | null;
        tax_amount: number | null;
        unit_cost: number | null;
      }[];
      merchant_reference: string;
      shipping_address_zip?: string;
      shipping_amount?: number;
      shipping_from_zip?: string;
    };
    livemode: boolean;
    metadata: Record<string, string>;
    object: "charge";
    on_behalf_of: unknown;
    outcome: {
      advice_code:
        | "confirm_card_data"
        | "do_not_try_again"
        | "try_again_later"
        | null;
      network_advice_code: string | null;
      network_decline_code: string | null;
      network_status: string | null;
      reason: string | null;
      risk_level?: string;
      risk_score?: number;
      rule?: string | { action: string; id: string; predicate: string };
      seller_message: string | null;
      type: string;
    } | null;
    paid: boolean;
    payment_intent: unknown;
    payment_method: string | null;
    payment_method_details: unknown;
    presentment_details?: {
      presentment_amount: number;
      presentment_currency: string;
    };
    radar_options?: { session?: string };
    receipt_email: string | null;
    receipt_number: string | null;
    receipt_url: string | null;
    refunded: boolean;
    refunds?: {
      data: {
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
        charge: string | unknown | null;
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
          mb_way?: {
            reference: string | null;
            reference_status: string | null;
          };
          multibanco?: {
            reference: string | null;
            reference_status: string | null;
          };
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
              destination_payment_refund: string | unknown | null;
              id: string;
              metadata: Record<string, string> | null;
              object: "transfer_reversal";
              source_refund: string | unknown | null;
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
                          source: unknown;
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
                    destination_payment?: string | unknown;
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
                    source_transaction: string | unknown | null;
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
              destination_payment_refund: string | unknown | null;
              id: string;
              metadata: Record<string, string> | null;
              object: "transfer_reversal";
              source_refund: string | unknown | null;
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
                          source: unknown;
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
                    destination_payment?: string | unknown;
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
                    source_transaction: string | unknown | null;
                    source_type?: string;
                    transfer_group: string | null;
                  };
            }
          | null;
      }[];
      has_more: boolean;
      object: "list";
      url: string;
    } | null;
    review: unknown;
    shipping: {
      address?: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      };
      carrier?: string | null;
      name?: string;
      phone?: string | null;
      tracking_number?: string | null;
    } | null;
    source: unknown | null;
    source_transfer:
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
          destination_payment?: string | unknown;
          id: string;
          livemode: boolean;
          metadata: Record<string, string>;
          object: "transfer";
          reversals: {
            data: {
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
              transfer: string | unknown;
            }[];
            has_more: boolean;
            object: "list";
            url: string;
          };
          reversed: boolean;
          source_transaction: string | unknown | null;
          source_type?: string;
          transfer_group: string | null;
        }
      | null;
    statement_descriptor: string | null;
    statement_descriptor_suffix: string | null;
    status: "failed" | "pending" | "succeeded";
    transfer?:
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
          destination_payment?: string | unknown;
          id: string;
          livemode: boolean;
          metadata: Record<string, string>;
          object: "transfer";
          reversals: {
            data: {
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
              transfer: string | unknown;
            }[];
            has_more: boolean;
            object: "list";
            url: string;
          };
          reversed: boolean;
          source_transaction: string | unknown | null;
          source_type?: string;
          transfer_group: string | null;
        };
    transfer_data: { amount: number | null; destination: unknown } | null;
    transfer_group: string | null;
  }[];
  has_more: boolean;
  next_page: string | null;
  object: "search_result";
  total_count?: number;
  url: string;
}
export const GetChargesSearchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        amount_captured: Schema.Number,
        amount_refunded: Schema.Number,
        application: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              id: Schema.String,
              name: Schema.NullOr(Schema.String),
              object: Schema.Literals(["application"]),
            }),
          ]),
        ),
        application_fee: Schema.Unknown,
        application_fee_amount: Schema.NullOr(Schema.Number),
        authorization_code: Schema.optional(Schema.String),
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
        ),
        billing_details: Schema.Struct({
          address: Schema.NullOr(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
            }),
          ),
          email: Schema.NullOr(Schema.String),
          name: Schema.NullOr(Schema.String),
          phone: Schema.NullOr(Schema.String),
          tax_id: Schema.NullOr(Schema.String),
        }),
        calculated_statement_descriptor: Schema.NullOr(Schema.String),
        captured: Schema.Boolean,
        created: Schema.Number,
        currency: Schema.String,
        customer: Schema.Unknown,
        description: Schema.NullOr(Schema.String),
        disputed: Schema.Boolean,
        failure_balance_transaction: Schema.NullOr(
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
        ),
        failure_code: Schema.NullOr(Schema.String),
        failure_message: Schema.NullOr(Schema.String),
        fraud_details: Schema.NullOr(
          Schema.Struct({
            stripe_report: Schema.optional(Schema.String),
            user_report: Schema.optional(Schema.String),
          }),
        ),
        id: Schema.String,
        level3: Schema.optional(
          Schema.Struct({
            customer_reference: Schema.optional(Schema.String),
            line_items: Schema.Array(
              Schema.Struct({
                discount_amount: Schema.NullOr(Schema.Number),
                product_code: Schema.String,
                product_description: Schema.String,
                quantity: Schema.NullOr(Schema.Number),
                tax_amount: Schema.NullOr(Schema.Number),
                unit_cost: Schema.NullOr(Schema.Number),
              }),
            ),
            merchant_reference: Schema.String,
            shipping_address_zip: Schema.optional(Schema.String),
            shipping_amount: Schema.optional(Schema.Number),
            shipping_from_zip: Schema.optional(Schema.String),
          }),
        ),
        livemode: Schema.Boolean,
        metadata: Schema.Record(Schema.String, Schema.String),
        object: Schema.Literals(["charge"]),
        on_behalf_of: Schema.Unknown,
        outcome: Schema.NullOr(
          Schema.Struct({
            advice_code: Schema.NullOr(
              Schema.Literals([
                "confirm_card_data",
                "do_not_try_again",
                "try_again_later",
              ]),
            ),
            network_advice_code: Schema.NullOr(Schema.String),
            network_decline_code: Schema.NullOr(Schema.String),
            network_status: Schema.NullOr(Schema.String),
            reason: Schema.NullOr(Schema.String),
            risk_level: Schema.optional(Schema.String),
            risk_score: Schema.optional(Schema.Number),
            rule: Schema.optional(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  action: Schema.String,
                  id: Schema.String,
                  predicate: Schema.String,
                }),
              ]),
            ),
            seller_message: Schema.NullOr(Schema.String),
            type: Schema.String,
          }),
        ),
        paid: Schema.Boolean,
        payment_intent: Schema.Unknown,
        payment_method: Schema.NullOr(Schema.String),
        payment_method_details: Schema.Unknown,
        presentment_details: Schema.optional(
          Schema.Struct({
            presentment_amount: Schema.Number,
            presentment_currency: Schema.String,
          }),
        ),
        radar_options: Schema.optional(
          Schema.Struct({
            session: Schema.optional(Schema.String),
          }),
        ),
        receipt_email: Schema.NullOr(Schema.String),
        receipt_number: Schema.NullOr(Schema.String),
        receipt_url: Schema.NullOr(Schema.String),
        refunded: Schema.Boolean,
        refunds: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              data: Schema.Array(
                Schema.Struct({
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
                  ),
                  charge: Schema.NullOr(
                    Schema.Union([Schema.String, Schema.Unknown]),
                  ),
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
                          type: Schema.Literals([
                            "pending",
                            "refund",
                            "reversal",
                          ]),
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
                  ),
                  failure_reason: Schema.optional(Schema.String),
                  id: Schema.String,
                  instructions_email: Schema.optional(Schema.String),
                  metadata: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.String),
                  ),
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
                    Schema.Literals([
                      "charge_pending",
                      "insufficient_funds",
                      "processing",
                    ]),
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
                }),
              ),
              has_more: Schema.Boolean,
              object: Schema.Literals(["list"]),
              url: Schema.String,
            }),
          ),
        ),
        review: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              billing_zip: Schema.NullOr(Schema.String),
              charge: Schema.NullOr(
                Schema.Union([Schema.String, Schema.Unknown]),
              ),
              closed_reason: Schema.NullOr(
                Schema.Literals([
                  "acknowledged",
                  "approved",
                  "canceled",
                  "disputed",
                  "payment_never_settled",
                  "redacted",
                  "refunded",
                  "refunded_as_fraud",
                ]),
              ),
              created: Schema.Number,
              id: Schema.String,
              ip_address: Schema.NullOr(Schema.String),
              ip_address_location: Schema.NullOr(
                Schema.Struct({
                  city: Schema.NullOr(Schema.String),
                  country: Schema.NullOr(Schema.String),
                  latitude: Schema.NullOr(Schema.Number),
                  longitude: Schema.NullOr(Schema.Number),
                  region: Schema.NullOr(Schema.String),
                }),
              ),
              livemode: Schema.Boolean,
              object: Schema.Literals(["review"]),
              open: Schema.Boolean,
              opened_reason: Schema.Literals(["manual", "rule"]),
              payment_intent: Schema.optional(Schema.Unknown),
              reason: Schema.String,
              session: Schema.NullOr(
                Schema.Struct({
                  browser: Schema.NullOr(Schema.String),
                  device: Schema.NullOr(Schema.String),
                  platform: Schema.NullOr(Schema.String),
                  version: Schema.NullOr(Schema.String),
                }),
              ),
            }),
          ]),
        ),
        shipping: Schema.NullOr(
          Schema.Struct({
            address: Schema.optional(
              Schema.Struct({
                city: Schema.NullOr(Schema.String),
                country: Schema.NullOr(Schema.String),
                line1: Schema.NullOr(Schema.String),
                line2: Schema.NullOr(Schema.String),
                postal_code: Schema.NullOr(Schema.String),
                state: Schema.NullOr(Schema.String),
              }),
            ),
            carrier: Schema.optional(Schema.NullOr(Schema.String)),
            name: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.NullOr(Schema.String)),
            tracking_number: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        source: Schema.NullOr(Schema.Unknown),
        source_transfer: Schema.Unknown,
        statement_descriptor: Schema.NullOr(Schema.String),
        statement_descriptor_suffix: Schema.NullOr(Schema.String),
        status: Schema.Literals(["failed", "pending", "succeeded"]),
        transfer: Schema.optional(Schema.Unknown),
        transfer_data: Schema.NullOr(
          Schema.Struct({
            amount: Schema.NullOr(Schema.Number),
            destination: Schema.Unknown,
          }),
        ),
        transfer_group: Schema.NullOr(Schema.String),
      }),
    ),
    has_more: Schema.Boolean,
    next_page: Schema.NullOr(Schema.String),
    object: Schema.Literals(["search_result"]),
    total_count: Schema.optional(Schema.Number),
    url: Schema.String,
  },
) as unknown as Schema.Codec<GetChargesSearchOutput>;

// The operation
/**
 * Search charges
 *
 * <p>Search for charges you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
 * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
 * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
 * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param page - A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
 * @param query - The search query string. See [search query language](https://docs.stripe.com/search#search-query-language) and the list of supported [query fields for charges](https://docs.stripe.com/search#query-fields-for-charges).
 */
export const GetChargesSearch = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: GetChargesSearchInput,
    outputSchema: GetChargesSearchOutput,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
