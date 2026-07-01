import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostPayoutsPayoutCancelInput {
  payout: string;
  expand?: string[];
}
export const PostPayoutsPayoutCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payout: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payouts/{payout}/cancel",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPayoutsPayoutCancelInput>;

// Output Schema
export interface PostPayoutsPayoutCancelOutput {
  amount: number;
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
        charge: unknown;
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
        originating_transaction: unknown;
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
  arrival_date: number;
  automatic: boolean;
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
  destination:
    | string
    | {
        account?: unknown;
        account_holder_name: string | null;
        account_holder_type: string | null;
        account_type: string | null;
        available_payout_methods?: ("instant" | "standard")[] | null;
        bank_name: string | null;
        country: string;
        currency: string;
        customer?: unknown;
        default_for_currency?: boolean | null;
        fingerprint: string | null;
        future_requirements?: unknown;
        id: string;
        last4: string;
        metadata?: Record<string, string> | null;
        object: "bank_account";
        requirements?: unknown;
        routing_number: string | null;
        status: string;
      }
    | {
        account?: unknown;
        address_city: string | null;
        address_country: string | null;
        address_line1: string | null;
        address_line1_check: string | null;
        address_line2: string | null;
        address_state: string | null;
        address_zip: string | null;
        address_zip_check: string | null;
        allow_redisplay?: "always" | "limited" | "unspecified" | null;
        available_payout_methods?: ("instant" | "standard")[] | null;
        brand: string;
        country: string | null;
        currency?: string | null;
        customer?: unknown;
        cvc_check: string | null;
        default_for_currency?: boolean | null;
        description?: string;
        dynamic_last4: string | null;
        exp_month: number;
        exp_year: number;
        fingerprint?: string | null;
        funding: string;
        id: string;
        iin?: string;
        issuer?: string;
        last4: string;
        metadata: Record<string, string> | null;
        name: string | null;
        networks?: { preferred: string | null };
        object: "card";
        regulated_status: "regulated" | "unregulated" | null;
        status?: string | null;
        tokenization_method: string | null;
      }
    | {
        currency?: string | null;
        deleted: true;
        id: string;
        object: "bank_account";
      }
    | { currency?: string | null; deleted: true; id: string; object: "card" }
    | null;
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
  id: string;
  livemode: boolean;
  metadata: Record<string, string> | null;
  method: string;
  object: "payout";
  original_payout: unknown;
  payout_method: string | null;
  reconciliation_status: "completed" | "in_progress" | "not_applicable";
  reversed_by: unknown;
  source_type: string;
  statement_descriptor: string | null;
  status: string;
  trace_id: { status: string; value: string | null } | null;
  type: "bank_account" | "card";
}
export const PostPayoutsPayoutCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    application_fee: Schema.Unknown,
    application_fee_amount: Schema.NullOr(Schema.Number),
    arrival_date: Schema.Number,
    automatic: Schema.Boolean,
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
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.NullOr(Schema.String),
    destination: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Union([
          Schema.Struct({
            account: Schema.optional(Schema.Unknown),
            account_holder_name: Schema.NullOr(Schema.String),
            account_holder_type: Schema.NullOr(Schema.String),
            account_type: Schema.NullOr(Schema.String),
            available_payout_methods: Schema.optional(
              Schema.NullOr(
                Schema.Array(Schema.Literals(["instant", "standard"])),
              ),
            ),
            bank_name: Schema.NullOr(Schema.String),
            country: Schema.String,
            currency: Schema.String,
            customer: Schema.optional(Schema.Unknown),
            default_for_currency: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            fingerprint: Schema.NullOr(Schema.String),
            future_requirements: Schema.optional(Schema.Unknown),
            id: Schema.String,
            last4: Schema.String,
            metadata: Schema.optional(
              Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
            ),
            object: Schema.Literals(["bank_account"]),
            requirements: Schema.optional(Schema.Unknown),
            routing_number: Schema.NullOr(Schema.String),
            status: Schema.String,
          }),
          Schema.Struct({
            account: Schema.optional(Schema.Unknown),
            address_city: Schema.NullOr(Schema.String),
            address_country: Schema.NullOr(Schema.String),
            address_line1: Schema.NullOr(Schema.String),
            address_line1_check: Schema.NullOr(Schema.String),
            address_line2: Schema.NullOr(Schema.String),
            address_state: Schema.NullOr(Schema.String),
            address_zip: Schema.NullOr(Schema.String),
            address_zip_check: Schema.NullOr(Schema.String),
            allow_redisplay: Schema.optional(
              Schema.NullOr(
                Schema.Literals(["always", "limited", "unspecified"]),
              ),
            ),
            available_payout_methods: Schema.optional(
              Schema.NullOr(
                Schema.Array(Schema.Literals(["instant", "standard"])),
              ),
            ),
            brand: Schema.String,
            country: Schema.NullOr(Schema.String),
            currency: Schema.optional(Schema.NullOr(Schema.String)),
            customer: Schema.optional(Schema.Unknown),
            cvc_check: Schema.NullOr(Schema.String),
            default_for_currency: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            description: Schema.optional(Schema.String),
            dynamic_last4: Schema.NullOr(Schema.String),
            exp_month: Schema.Number,
            exp_year: Schema.Number,
            fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
            funding: Schema.String,
            id: Schema.String,
            iin: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            last4: Schema.String,
            metadata: Schema.NullOr(
              Schema.Record(Schema.String, Schema.String),
            ),
            name: Schema.NullOr(Schema.String),
            networks: Schema.optional(
              Schema.Struct({
                preferred: Schema.NullOr(Schema.String),
              }),
            ),
            object: Schema.Literals(["card"]),
            regulated_status: Schema.NullOr(
              Schema.Literals(["regulated", "unregulated"]),
            ),
            status: Schema.optional(Schema.NullOr(Schema.String)),
            tokenization_method: Schema.NullOr(Schema.String),
          }),
        ]),
        Schema.Union([
          Schema.Struct({
            currency: Schema.optional(Schema.NullOr(Schema.String)),
            deleted: Schema.Literals([true]),
            id: Schema.String,
            object: Schema.Literals(["bank_account"]),
          }),
          Schema.Struct({
            currency: Schema.optional(Schema.NullOr(Schema.String)),
            deleted: Schema.Literals([true]),
            id: Schema.String,
            object: Schema.Literals(["card"]),
          }),
        ]),
      ]),
    ),
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
    failure_code: Schema.NullOr(Schema.String),
    failure_message: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    method: Schema.String,
    object: Schema.Literals(["payout"]),
    original_payout: Schema.Unknown,
    payout_method: Schema.NullOr(Schema.String),
    reconciliation_status: Schema.Literals([
      "completed",
      "in_progress",
      "not_applicable",
    ]),
    reversed_by: Schema.Unknown,
    source_type: Schema.String,
    statement_descriptor: Schema.NullOr(Schema.String),
    status: Schema.String,
    trace_id: Schema.NullOr(
      Schema.Struct({
        status: Schema.String,
        value: Schema.NullOr(Schema.String),
      }),
    ),
    type: Schema.Literals(["bank_account", "card"]),
  }) as unknown as Schema.Codec<PostPayoutsPayoutCancelOutput>;

// The operation
/**
 * Cancel a payout
 *
 * <p>You can cancel a previously created payout if its status is <code>pending</code>. Stripe refunds the funds to your available balance. You can’t cancel automatic Stripe payouts.</p>
 */
export const PostPayoutsPayoutCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostPayoutsPayoutCancelInput,
    outputSchema: PostPayoutsPayoutCancelOutput,
  }),
);
