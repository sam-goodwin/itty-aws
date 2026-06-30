import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTreasuryReceivedCreditsIdInput {
  id: string;
  expand?: string;
}
export const GetTreasuryReceivedCreditsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/received_credits/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTreasuryReceivedCreditsIdInput>;

// Output Schema
export interface GetTreasuryReceivedCreditsIdOutput {
  amount: number;
  created: number;
  currency: string;
  description: string;
  failure_code:
    | "account_closed"
    | "account_frozen"
    | "international_transaction"
    | "other"
    | null;
  financial_account: string | null;
  hosted_regulatory_receipt_url: string | null;
  id: string;
  initiating_payment_method_details: {
    balance?: "payments";
    billing_details: {
      address: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      };
      email: string | null;
      name: string | null;
    };
    financial_account?: { id: string; network: "stripe" };
    issuing_card?: string;
    type:
      | "balance"
      | "financial_account"
      | "issuing_card"
      | "stripe"
      | "us_bank_account";
    us_bank_account?: {
      bank_name: string | null;
      last4: string | null;
      routing_number: string | null;
    };
  };
  linked_flows: {
    credit_reversal: string | null;
    issuing_authorization: string | null;
    issuing_transaction: string | null;
    source_flow: string | null;
    source_flow_details?: unknown;
    source_flow_type: string | null;
  };
  livemode: boolean;
  network: "ach" | "card" | "stripe" | "us_domestic_wire";
  object: "treasury.received_credit";
  reversal_details: {
    deadline: number | null;
    restricted_reason:
      | "already_reversed"
      | "deadline_passed"
      | "network_restricted"
      | "other"
      | "source_flow_restricted"
      | null;
  } | null;
  status: "failed" | "succeeded";
  transaction:
    | string
    | {
        amount: number;
        balance_impact: {
          cash: number;
          inbound_pending: number;
          outbound_pending: number;
        };
        created: number;
        currency: string;
        description: string;
        entries?: {
          data: {
            balance_impact: {
              cash: number;
              inbound_pending: number;
              outbound_pending: number;
            };
            created: number;
            currency: string;
            effective_at: number;
            financial_account: string;
            flow: string | null;
            flow_details?: unknown;
            flow_type:
              | "credit_reversal"
              | "debit_reversal"
              | "inbound_transfer"
              | "issuing_authorization"
              | "other"
              | "outbound_payment"
              | "outbound_transfer"
              | "received_credit"
              | "received_debit";
            id: string;
            livemode: boolean;
            object: "treasury.transaction_entry";
            transaction: string | unknown;
            type:
              | "credit_reversal"
              | "credit_reversal_posting"
              | "debit_reversal"
              | "inbound_transfer"
              | "inbound_transfer_return"
              | "issuing_authorization_hold"
              | "issuing_authorization_release"
              | "other"
              | "outbound_payment"
              | "outbound_payment_cancellation"
              | "outbound_payment_failure"
              | "outbound_payment_posting"
              | "outbound_payment_return"
              | "outbound_transfer"
              | "outbound_transfer_cancellation"
              | "outbound_transfer_failure"
              | "outbound_transfer_posting"
              | "outbound_transfer_return"
              | "received_credit"
              | "received_debit";
          }[];
          has_more: boolean;
          object: "list";
          url: string;
        } | null;
        financial_account: string;
        flow: string | null;
        flow_details?: unknown;
        flow_type:
          | "credit_reversal"
          | "debit_reversal"
          | "inbound_transfer"
          | "issuing_authorization"
          | "other"
          | "outbound_payment"
          | "outbound_transfer"
          | "received_credit"
          | "received_debit";
        id: string;
        livemode: boolean;
        object: "treasury.transaction";
        status: "open" | "posted" | "void";
        status_transitions: {
          posted_at: number | null;
          void_at: number | null;
        };
      }
    | null;
}
export const GetTreasuryReceivedCreditsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    failure_code: Schema.NullOr(
      Schema.Literals([
        "account_closed",
        "account_frozen",
        "international_transaction",
        "other",
      ]),
    ),
    financial_account: Schema.NullOr(Schema.String),
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    initiating_payment_method_details: Schema.Struct({
      balance: Schema.optional(Schema.Literals(["payments"])),
      billing_details: Schema.Struct({
        address: Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
        }),
        email: Schema.NullOr(Schema.String),
        name: Schema.NullOr(Schema.String),
      }),
      financial_account: Schema.optional(
        Schema.Struct({
          id: Schema.String,
          network: Schema.Literals(["stripe"]),
        }),
      ),
      issuing_card: Schema.optional(Schema.String),
      type: Schema.Literals([
        "balance",
        "financial_account",
        "issuing_card",
        "stripe",
        "us_bank_account",
      ]),
      us_bank_account: Schema.optional(
        Schema.Struct({
          bank_name: Schema.NullOr(Schema.String),
          last4: Schema.NullOr(Schema.String),
          routing_number: Schema.NullOr(Schema.String),
        }),
      ),
    }),
    linked_flows: Schema.Struct({
      credit_reversal: Schema.NullOr(Schema.String),
      issuing_authorization: Schema.NullOr(Schema.String),
      issuing_transaction: Schema.NullOr(Schema.String),
      source_flow: Schema.NullOr(Schema.String),
      source_flow_details: Schema.optional(Schema.Unknown),
      source_flow_type: Schema.NullOr(Schema.String),
    }),
    livemode: Schema.Boolean,
    network: Schema.Literals(["ach", "card", "stripe", "us_domestic_wire"]),
    object: Schema.Literals(["treasury.received_credit"]),
    reversal_details: Schema.NullOr(
      Schema.Struct({
        deadline: Schema.NullOr(Schema.Number),
        restricted_reason: Schema.NullOr(
          Schema.Literals([
            "already_reversed",
            "deadline_passed",
            "network_restricted",
            "other",
            "source_flow_restricted",
          ]),
        ),
      }),
    ),
    status: Schema.Literals(["failed", "succeeded"]),
    transaction: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          amount: Schema.Number,
          balance_impact: Schema.Struct({
            cash: Schema.Number,
            inbound_pending: Schema.Number,
            outbound_pending: Schema.Number,
          }),
          created: Schema.Number,
          currency: Schema.String,
          description: Schema.String,
          entries: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                data: Schema.Array(
                  Schema.Struct({
                    balance_impact: Schema.Struct({
                      cash: Schema.Number,
                      inbound_pending: Schema.Number,
                      outbound_pending: Schema.Number,
                    }),
                    created: Schema.Number,
                    currency: Schema.String,
                    effective_at: Schema.Number,
                    financial_account: Schema.String,
                    flow: Schema.NullOr(Schema.String),
                    flow_details: Schema.optional(Schema.Unknown),
                    flow_type: Schema.Literals([
                      "credit_reversal",
                      "debit_reversal",
                      "inbound_transfer",
                      "issuing_authorization",
                      "other",
                      "outbound_payment",
                      "outbound_transfer",
                      "received_credit",
                      "received_debit",
                    ]),
                    id: Schema.String,
                    livemode: Schema.Boolean,
                    object: Schema.Literals(["treasury.transaction_entry"]),
                    transaction: Schema.Union([Schema.String, Schema.Unknown]),
                    type: Schema.Literals([
                      "credit_reversal",
                      "credit_reversal_posting",
                      "debit_reversal",
                      "inbound_transfer",
                      "inbound_transfer_return",
                      "issuing_authorization_hold",
                      "issuing_authorization_release",
                      "other",
                      "outbound_payment",
                      "outbound_payment_cancellation",
                      "outbound_payment_failure",
                      "outbound_payment_posting",
                      "outbound_payment_return",
                      "outbound_transfer",
                      "outbound_transfer_cancellation",
                      "outbound_transfer_failure",
                      "outbound_transfer_posting",
                      "outbound_transfer_return",
                      "received_credit",
                      "received_debit",
                    ]),
                  }),
                ),
                has_more: Schema.Boolean,
                object: Schema.Literals(["list"]),
                url: Schema.String,
              }),
            ),
          ),
          financial_account: Schema.String,
          flow: Schema.NullOr(Schema.String),
          flow_details: Schema.optional(Schema.Unknown),
          flow_type: Schema.Literals([
            "credit_reversal",
            "debit_reversal",
            "inbound_transfer",
            "issuing_authorization",
            "other",
            "outbound_payment",
            "outbound_transfer",
            "received_credit",
            "received_debit",
          ]),
          id: Schema.String,
          livemode: Schema.Boolean,
          object: Schema.Literals(["treasury.transaction"]),
          status: Schema.Literals(["open", "posted", "void"]),
          status_transitions: Schema.Struct({
            posted_at: Schema.NullOr(Schema.Number),
            void_at: Schema.NullOr(Schema.Number),
          }),
        }),
      ]),
    ),
  }) as unknown as Schema.Codec<GetTreasuryReceivedCreditsIdOutput>;

// The operation
/**
 * Retrieve a ReceivedCredit
 *
 * <p>Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTreasuryReceivedCreditsId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTreasuryReceivedCreditsIdInput,
    outputSchema: GetTreasuryReceivedCreditsIdOutput,
  }));
