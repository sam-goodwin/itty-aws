import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetApplicationFeesIdInput {
  id: string;
  expand?: string;
}
export const GetApplicationFeesIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/application_fees/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetApplicationFeesIdInput>;

// Output Schema
export interface GetApplicationFeesIdOutput {
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
      fee:
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
              data: unknown[];
              has_more: boolean;
              object: "list";
              url: string;
            };
          };
      id: string;
      metadata: Record<string, string> | null;
      object: "fee_refund";
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
}
export const GetApplicationFeesIdOutput =
  /*@__PURE__*/ Schema.Struct({
    account: Schema.Unknown,
    amount: Schema.Number,
    amount_refunded: Schema.Number,
    application: Schema.Union([
      Schema.String,
      Schema.Struct({
        id: Schema.String,
        name: Schema.NullOr(Schema.String),
        object: Schema.Literals(["application"]),
      }),
    ]),
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
    fee_source: Schema.NullOr(
      Schema.Struct({
        charge: Schema.optional(Schema.String),
        payout: Schema.optional(Schema.String),
        type: Schema.Literals(["charge", "payout"]),
      }),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["application_fee"]),
    originating_transaction: Schema.Unknown,
    refunded: Schema.Boolean,
    refunds: Schema.Struct({
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
          created: Schema.Number,
          currency: Schema.String,
          fee: Schema.Union([
            Schema.String,
            Schema.Struct({
              account: Schema.Unknown,
              amount: Schema.Number,
              amount_refunded: Schema.Number,
              application: Schema.Union([
                Schema.String,
                Schema.Struct({
                  id: Schema.String,
                  name: Schema.NullOr(Schema.String),
                  object: Schema.Literals(["application"]),
                }),
              ]),
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
              charge: Schema.Unknown,
              created: Schema.Number,
              currency: Schema.String,
              fee_source: Schema.NullOr(
                Schema.Struct({
                  charge: Schema.optional(Schema.String),
                  payout: Schema.optional(Schema.String),
                  type: Schema.Literals(["charge", "payout"]),
                }),
              ),
              id: Schema.String,
              livemode: Schema.Boolean,
              object: Schema.Literals(["application_fee"]),
              originating_transaction: Schema.Unknown,
              refunded: Schema.Boolean,
              refunds: Schema.Struct({
                data: Schema.Array(Schema.Unknown),
                has_more: Schema.Boolean,
                object: Schema.Literals(["list"]),
                url: Schema.String,
              }),
            }),
          ]),
          id: Schema.String,
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          object: Schema.Literals(["fee_refund"]),
        }),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  }) as unknown as Schema.Codec<GetApplicationFeesIdOutput>;

// The operation
/**
 * Retrieve an application fee
 *
 * <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetApplicationFeesId = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetApplicationFeesIdInput,
  outputSchema: GetApplicationFeesIdOutput,
}));
