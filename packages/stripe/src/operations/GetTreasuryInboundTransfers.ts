import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTreasuryInboundTransfersInput {
  ending_before?: string;
  expand?: string;
  financial_account: string;
  limit?: number;
  starting_after?: string;
  status?: "canceled" | "failed" | "processing" | "succeeded";
}
export const GetTreasuryInboundTransfersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    financial_account: Schema.String,
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["canceled", "failed", "processing", "succeeded"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/inbound_transfers",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTreasuryInboundTransfersInput>;

// Output Schema
export interface GetTreasuryInboundTransfersOutput {
  data: {
    amount: number;
    cancelable: boolean;
    created: number;
    currency: string;
    description: string | null;
    failure_details: {
      code:
        | "account_closed"
        | "account_frozen"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "debit_not_authorized"
        | "incorrect_account_holder_address"
        | "incorrect_account_holder_name"
        | "incorrect_account_holder_tax_id"
        | "insufficient_funds"
        | "invalid_account_number"
        | "invalid_currency"
        | "no_account"
        | "other";
    } | null;
    financial_account: string;
    hosted_regulatory_receipt_url: string | null;
    id: string;
    linked_flows: { received_debit: string | null };
    livemode: boolean;
    metadata: Record<string, string>;
    object: "treasury.inbound_transfer";
    origin_payment_method: string | null;
    origin_payment_method_details: {
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
      type: "us_bank_account";
      us_bank_account?: {
        account_holder_type: "company" | "individual" | null;
        account_type: "checking" | "savings" | null;
        bank_name: string | null;
        fingerprint: string | null;
        last4: string | null;
        mandate?:
          | string
          | {
              customer_acceptance: {
                accepted_at: number | null;
                offline?: {};
                online?: {
                  ip_address: string | null;
                  user_agent: string | null;
                };
                type: "offline" | "online";
              };
              id: string;
              livemode: boolean;
              multi_use?: { amount?: number; currency?: string };
              object: "mandate";
              on_behalf_of?: string;
              payment_method: unknown;
              payment_method_details: {
                acss_debit?: {
                  default_for?: ("invoice" | "subscription")[];
                  interval_description: string | null;
                  payment_schedule: "combined" | "interval" | "sporadic";
                  transaction_type: "business" | "personal";
                };
                amazon_pay?: {};
                au_becs_debit?: { url: string };
                bacs_debit?: {
                  display_name: string | null;
                  network_status:
                    | "accepted"
                    | "pending"
                    | "refused"
                    | "revoked";
                  reference: string;
                  revocation_reason:
                    | "account_closed"
                    | "bank_account_restricted"
                    | "bank_ownership_changed"
                    | "could_not_process"
                    | "debit_not_authorized"
                    | null;
                  service_user_number: string | null;
                  url: string;
                };
                card?: {};
                cashapp?: {};
                kakao_pay?: {};
                klarna?: {};
                kr_card?: {};
                link?: {};
                naver_pay?: {};
                nz_bank_account?: {};
                paypal?: {
                  billing_agreement_id: string | null;
                  payer_id: string | null;
                };
                payto?: {
                  amount: number | null;
                  amount_type: "fixed" | "maximum";
                  end_date: string | null;
                  payment_schedule:
                    | "adhoc"
                    | "annual"
                    | "daily"
                    | "fortnightly"
                    | "monthly"
                    | "quarterly"
                    | "semi_annual"
                    | "weekly";
                  payments_per_period: number | null;
                  purpose:
                    | "dependant_support"
                    | "government"
                    | "loan"
                    | "mortgage"
                    | "other"
                    | "pension"
                    | "personal"
                    | "retail"
                    | "salary"
                    | "tax"
                    | "utility"
                    | null;
                  start_date: string | null;
                };
                pix?: {
                  amount_includes_iof?: "always" | "never";
                  amount_type?: "fixed" | "maximum";
                  end_date?: string;
                  payment_schedule?:
                    | "halfyearly"
                    | "monthly"
                    | "quarterly"
                    | "weekly"
                    | "yearly";
                  reference?: string;
                  start_date?: string;
                };
                revolut_pay?: {};
                sepa_debit?: { reference: string; url: string };
                twint?: {};
                type: string;
                upi?: {
                  amount: number | null;
                  amount_type: "fixed" | "maximum" | null;
                  description: string | null;
                  end_date: number | null;
                };
                us_bank_account?: { collection_method?: "paper" };
              };
              single_use?: { amount: number; currency: string };
              status: "active" | "inactive" | "pending";
              type: "multi_use" | "single_use";
            };
        network: "ach";
        routing_number: string | null;
      };
    } | null;
    returned: boolean | null;
    statement_descriptor: string;
    status: "canceled" | "failed" | "processing" | "succeeded";
    status_transitions: {
      canceled_at?: number | null;
      failed_at: number | null;
      succeeded_at: number | null;
    };
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
export const GetTreasuryInboundTransfersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        cancelable: Schema.Boolean,
        created: Schema.Number,
        currency: Schema.String,
        description: Schema.NullOr(Schema.String),
        failure_details: Schema.NullOr(
          Schema.Struct({
            code: Schema.Literals([
              "account_closed",
              "account_frozen",
              "bank_account_restricted",
              "bank_ownership_changed",
              "debit_not_authorized",
              "incorrect_account_holder_address",
              "incorrect_account_holder_name",
              "incorrect_account_holder_tax_id",
              "insufficient_funds",
              "invalid_account_number",
              "invalid_currency",
              "no_account",
              "other",
            ]),
          }),
        ),
        financial_account: Schema.String,
        hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
        id: Schema.String,
        linked_flows: Schema.Struct({
          received_debit: Schema.NullOr(Schema.String),
        }),
        livemode: Schema.Boolean,
        metadata: Schema.Record(Schema.String, Schema.String),
        object: Schema.Literals(["treasury.inbound_transfer"]),
        origin_payment_method: Schema.NullOr(Schema.String),
        origin_payment_method_details: Schema.NullOr(
          Schema.Struct({
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
            type: Schema.Literals(["us_bank_account"]),
            us_bank_account: Schema.optional(
              Schema.Struct({
                account_holder_type: Schema.NullOr(
                  Schema.Literals(["company", "individual"]),
                ),
                account_type: Schema.NullOr(
                  Schema.Literals(["checking", "savings"]),
                ),
                bank_name: Schema.NullOr(Schema.String),
                fingerprint: Schema.NullOr(Schema.String),
                last4: Schema.NullOr(Schema.String),
                mandate: Schema.optional(Schema.Unknown),
                network: Schema.Literals(["ach"]),
                routing_number: Schema.NullOr(Schema.String),
              }),
            ),
          }),
        ),
        returned: Schema.NullOr(Schema.Boolean),
        statement_descriptor: Schema.String,
        status: Schema.Literals([
          "canceled",
          "failed",
          "processing",
          "succeeded",
        ]),
        status_transitions: Schema.Struct({
          canceled_at: Schema.optional(Schema.NullOr(Schema.Number)),
          failed_at: Schema.NullOr(Schema.Number),
          succeeded_at: Schema.NullOr(Schema.Number),
        }),
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
  }) as unknown as Schema.Codec<GetTreasuryInboundTransfersOutput>;

// The operation
/**
 * List all InboundTransfers
 *
 * <p>Returns a list of InboundTransfers sent from the specified FinancialAccount.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param financial_account - Returns objects associated with this FinancialAccount.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param status - Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`.
 */
export const GetTreasuryInboundTransfers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTreasuryInboundTransfersInput,
    outputSchema: GetTreasuryInboundTransfersOutput,
  }),
);
