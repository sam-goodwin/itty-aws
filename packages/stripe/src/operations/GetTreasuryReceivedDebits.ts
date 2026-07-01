import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTreasuryReceivedDebitsInput {
  ending_before?: string;
  expand?: string;
  financial_account: string;
  limit?: number;
  starting_after?: string;
  status?: "failed" | "succeeded";
}
export const GetTreasuryReceivedDebitsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    financial_account: Schema.String,
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["failed", "succeeded"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/received_debits",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTreasuryReceivedDebitsInput>;

// Output Schema
export interface GetTreasuryReceivedDebitsOutput {
  data: {
    amount: number;
    created: number;
    currency: string;
    description: string;
    failure_code:
      | "account_closed"
      | "account_frozen"
      | "insufficient_funds"
      | "international_transaction"
      | "other"
      | null;
    financial_account: string | null;
    hosted_regulatory_receipt_url: string | null;
    id: string;
    initiating_payment_method_details?: {
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
      debit_reversal: string | null;
      inbound_transfer: string | null;
      issuing_authorization: string | null;
      issuing_transaction: string | null;
      payout: string | null;
      topup: string | null;
    };
    livemode: boolean;
    network: "ach" | "card" | "stripe";
    object: "treasury.received_debit";
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
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTreasuryReceivedDebitsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        created: Schema.Number,
        currency: Schema.String,
        description: Schema.String,
        failure_code: Schema.NullOr(
          Schema.Literals([
            "account_closed",
            "account_frozen",
            "insufficient_funds",
            "international_transaction",
            "other",
          ]),
        ),
        financial_account: Schema.NullOr(Schema.String),
        hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
        id: Schema.String,
        initiating_payment_method_details: Schema.optional(
          Schema.Struct({
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
        ),
        linked_flows: Schema.Struct({
          debit_reversal: Schema.NullOr(Schema.String),
          inbound_transfer: Schema.NullOr(Schema.String),
          issuing_authorization: Schema.NullOr(Schema.String),
          issuing_transaction: Schema.NullOr(Schema.String),
          payout: Schema.NullOr(Schema.String),
          topup: Schema.NullOr(Schema.String),
        }),
        livemode: Schema.Boolean,
        network: Schema.Literals(["ach", "card", "stripe"]),
        object: Schema.Literals(["treasury.received_debit"]),
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
                        transaction: Schema.Union([
                          Schema.String,
                          Schema.Unknown,
                        ]),
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
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetTreasuryReceivedDebitsOutput>;

// The operation
/**
 * List all ReceivedDebits
 *
 * <p>Returns a list of ReceivedDebits.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param financial_account - The FinancialAccount that funds were pulled from.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return ReceivedDebits that have the given status: `succeeded` or `failed`.
 */
export const GetTreasuryReceivedDebits = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTreasuryReceivedDebitsInput,
    outputSchema: GetTreasuryReceivedDebitsOutput,
  }),
);
