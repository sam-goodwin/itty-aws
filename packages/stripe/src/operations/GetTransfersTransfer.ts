import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTransfersTransferInput {
  transfer: string;
  expand?: string;
}
export const GetTransfersTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transfer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/transfers/{transfer}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTransfersTransferInput>;

// Output Schema
export interface GetTransfersTransferOutput {
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
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  reversed: boolean;
  source_transaction: unknown;
  source_type?: string;
  transfer_group: string | null;
}
export const GetTransfersTransferOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_reversed: Schema.Number,
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
    destination: Schema.Unknown,
    destination_payment: Schema.optional(Schema.Unknown),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["transfer"]),
    reversals: Schema.Struct({
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
          destination_payment_refund: Schema.Unknown,
          id: Schema.String,
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          object: Schema.Literals(["transfer_reversal"]),
          source_refund: Schema.Unknown,
          transfer: Schema.Union([
            Schema.String,
            Schema.Struct({
              amount: Schema.Number,
              amount_reversed: Schema.Number,
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
              description: Schema.NullOr(Schema.String),
              destination: Schema.Unknown,
              destination_payment: Schema.optional(Schema.Unknown),
              id: Schema.String,
              livemode: Schema.Boolean,
              metadata: Schema.Record(Schema.String, Schema.String),
              object: Schema.Literals(["transfer"]),
              reversals: Schema.Struct({
                data: Schema.Array(Schema.Unknown),
                has_more: Schema.Boolean,
                object: Schema.Literals(["list"]),
                url: Schema.String,
              }),
              reversed: Schema.Boolean,
              source_transaction: Schema.Unknown,
              source_type: Schema.optional(Schema.String),
              transfer_group: Schema.NullOr(Schema.String),
            }),
          ]),
        }),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    reversed: Schema.Boolean,
    source_transaction: Schema.Unknown,
    source_type: Schema.optional(Schema.String),
    transfer_group: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<GetTransfersTransferOutput>;

// The operation
/**
 * Retrieve a transfer
 *
 * <p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTransfersTransfer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTransfersTransferInput,
    outputSchema: GetTransfersTransferOutput,
  }),
);
