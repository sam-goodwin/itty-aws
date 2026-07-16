import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetIssuingTransactionsInput {
  card?: string;
  cardholder?: string;
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
  type?: "capture" | "refund";
}
export const GetIssuingTransactionsInput =
  /*@__PURE__*/ Schema.Struct({
    card: Schema.optional(Schema.String),
    cardholder: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literals(["capture", "refund"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/transactions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIssuingTransactionsInput>;

// Output Schema
export interface GetIssuingTransactionsOutput {
  data: {
    amount: number;
    amount_details: {
      atm_fee: number | null;
      cashback_amount: number | null;
    } | null;
    authorization: unknown;
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
    card: unknown;
    cardholder:
      | string
      | {
          billing: {
            address: {
              city: string | null;
              country: string | null;
              line1: string | null;
              line2: string | null;
              postal_code: string | null;
              state: string | null;
            };
          };
          company: { tax_id_provided: boolean } | null;
          created: number;
          email: string | null;
          id: string;
          individual: {
            card_issuing?: {
              user_terms_acceptance: {
                date: number | null;
                ip: string | null;
                user_agent: string | null;
              } | null;
            } | null;
            dob: {
              day: number | null;
              month: number | null;
              year: number | null;
            } | null;
            first_name: string | null;
            last_name: string | null;
            verification: {
              document: { back: unknown; front: unknown } | null;
            } | null;
          } | null;
          livemode: boolean;
          metadata: Record<string, string>;
          name: string;
          object: "issuing.cardholder";
          phone_number: string | null;
          preferred_locales: ("de" | "en" | "es" | "fr" | "it")[] | null;
          requirements: {
            disabled_reason:
              | "listed"
              | "rejected.listed"
              | "requirements.past_due"
              | "under_review"
              | null;
            past_due:
              | (
                  | "company.tax_id"
                  | "individual.card_issuing.user_terms_acceptance.date"
                  | "individual.card_issuing.user_terms_acceptance.ip"
                  | "individual.dob.day"
                  | "individual.dob.month"
                  | "individual.dob.year"
                  | "individual.first_name"
                  | "individual.last_name"
                  | "individual.verification.document"
                )[]
              | null;
          };
          spending_controls: unknown;
          status: "active" | "blocked" | "inactive";
          type: "company" | "individual";
        }
      | null;
    created: number;
    currency: string;
    dispute: unknown;
    id: string;
    livemode: boolean;
    merchant_amount: number;
    merchant_currency: string;
    merchant_data: {
      category: string;
      category_code: string;
      city: string | null;
      country: string | null;
      name: string | null;
      network_id: string;
      postal_code: string | null;
      state: string | null;
      tax_id: string | null;
      terminal_id: string | null;
      url: string | null;
    };
    metadata: Record<string, string>;
    network_data: {
      authorization_code: string | null;
      processing_date: string | null;
      transaction_id: string | null;
    } | null;
    object: "issuing.transaction";
    purchase_details?: {
      fleet: {
        cardholder_prompt_data: {
          driver_id: string | null;
          odometer: number | null;
          unspecified_id: string | null;
          user_id: string | null;
          vehicle_number: string | null;
        } | null;
        purchase_type: string | null;
        reported_breakdown: {
          fuel: { gross_amount_decimal: string | null } | null;
          non_fuel: { gross_amount_decimal: string | null } | null;
          tax: {
            local_amount_decimal: string | null;
            national_amount_decimal: string | null;
          } | null;
        } | null;
        service_type: string | null;
      } | null;
      flight: {
        departure_at: number | null;
        passenger_name: string | null;
        refundable: boolean | null;
        segments:
          | {
              arrival_airport_code: string | null;
              carrier: string | null;
              departure_airport_code: string | null;
              flight_number: string | null;
              service_class: string | null;
              stopover_allowed: boolean | null;
            }[]
          | null;
        travel_agency: string | null;
      } | null;
      fuel: {
        industry_product_code: string | null;
        quantity_decimal: string | null;
        type: string;
        unit: string;
        unit_cost_decimal: string;
      } | null;
      lodging: { check_in_at: number | null; nights: number | null } | null;
      receipt:
        | {
            description: string | null;
            quantity: number | null;
            total: number | null;
            unit_cost: number | null;
          }[]
        | null;
      reference: string | null;
    } | null;
    token?:
      | string
      | {
          card: unknown;
          created: number;
          device_fingerprint: string | null;
          id: string;
          last4?: string;
          livemode: boolean;
          network: "mastercard" | "visa";
          network_data?: {
            device?: {
              device_fingerprint?: string;
              ip_address?: string;
              location?: string;
              name?: string;
              phone_number?: string;
              type?: "other" | "phone" | "watch";
            };
            mastercard?: {
              card_reference_id?: string;
              token_reference_id: string;
              token_requestor_id: string;
              token_requestor_name?: string;
            };
            type: "mastercard" | "visa";
            visa?: {
              card_reference_id: string | null;
              token_reference_id: string;
              token_requestor_id: string;
              token_risk_score?: string;
            };
            wallet_provider?: {
              account_id?: string;
              account_trust_score?: number;
              card_number_source?: "app" | "manual" | "on_file" | "other";
              cardholder_address?: { line1: string; postal_code: string };
              cardholder_name?: string;
              device_trust_score?: number;
              hashed_account_email_address?: string;
              reason_codes?: (
                | "account_card_too_new"
                | "account_recently_changed"
                | "account_too_new"
                | "account_too_new_since_launch"
                | "additional_device"
                | "data_expired"
                | "defer_id_v_decision"
                | "device_recently_lost"
                | "good_activity_history"
                | "has_suspended_tokens"
                | "high_risk"
                | "inactive_account"
                | "long_account_tenure"
                | "low_account_score"
                | "low_device_score"
                | "low_phone_number_score"
                | "network_service_error"
                | "outside_home_territory"
                | "provisioning_cardholder_mismatch"
                | "provisioning_device_and_cardholder_mismatch"
                | "provisioning_device_mismatch"
                | "same_device_no_prior_authentication"
                | "same_device_successful_prior_authentication"
                | "software_update"
                | "suspicious_activity"
                | "too_many_different_cardholders"
                | "too_many_recent_attempts"
                | "too_many_recent_tokens"
              )[];
              suggested_decision?: "approve" | "decline" | "require_auth";
              suggested_decision_version?: string;
            };
          };
          network_updated_at: number;
          object: "issuing.token";
          status: "active" | "deleted" | "requested" | "suspended";
          wallet_provider?: "apple_pay" | "google_pay" | "samsung_pay";
        }
      | null;
    treasury?: {
      received_credit: string | null;
      received_debit: string | null;
    } | null;
    type: "capture" | "refund";
    wallet: "apple_pay" | "google_pay" | "samsung_pay" | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetIssuingTransactionsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        amount_details: Schema.NullOr(
          Schema.Struct({
            atm_fee: Schema.NullOr(Schema.Number),
            cashback_amount: Schema.NullOr(Schema.Number),
          }),
        ),
        authorization: Schema.Unknown,
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
        card: Schema.Unknown,
        cardholder: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              billing: Schema.Struct({
                address: Schema.Struct({
                  city: Schema.NullOr(Schema.String),
                  country: Schema.NullOr(Schema.String),
                  line1: Schema.NullOr(Schema.String),
                  line2: Schema.NullOr(Schema.String),
                  postal_code: Schema.NullOr(Schema.String),
                  state: Schema.NullOr(Schema.String),
                }),
              }),
              company: Schema.NullOr(
                Schema.Struct({
                  tax_id_provided: Schema.Boolean,
                }),
              ),
              created: Schema.Number,
              email: Schema.NullOr(Schema.String),
              id: Schema.String,
              individual: Schema.NullOr(
                Schema.Struct({
                  card_issuing: Schema.optional(
                    Schema.NullOr(
                      Schema.Struct({
                        user_terms_acceptance: Schema.NullOr(
                          Schema.Struct({
                            date: Schema.NullOr(Schema.Number),
                            ip: Schema.NullOr(Schema.String),
                            user_agent: Schema.NullOr(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  ),
                  dob: Schema.NullOr(
                    Schema.Struct({
                      day: Schema.NullOr(Schema.Number),
                      month: Schema.NullOr(Schema.Number),
                      year: Schema.NullOr(Schema.Number),
                    }),
                  ),
                  first_name: Schema.NullOr(Schema.String),
                  last_name: Schema.NullOr(Schema.String),
                  verification: Schema.NullOr(
                    Schema.Struct({
                      document: Schema.NullOr(
                        Schema.Struct({
                          back: Schema.Unknown,
                          front: Schema.Unknown,
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              livemode: Schema.Boolean,
              metadata: Schema.Record(Schema.String, Schema.String),
              name: Schema.String,
              object: Schema.Literals(["issuing.cardholder"]),
              phone_number: Schema.NullOr(Schema.String),
              preferred_locales: Schema.NullOr(
                Schema.Array(Schema.Literals(["de", "en", "es", "fr", "it"])),
              ),
              requirements: Schema.Struct({
                disabled_reason: Schema.NullOr(
                  Schema.Literals([
                    "listed",
                    "rejected.listed",
                    "requirements.past_due",
                    "under_review",
                  ]),
                ),
                past_due: Schema.NullOr(
                  Schema.Array(
                    Schema.Literals([
                      "company.tax_id",
                      "individual.card_issuing.user_terms_acceptance.date",
                      "individual.card_issuing.user_terms_acceptance.ip",
                      "individual.dob.day",
                      "individual.dob.month",
                      "individual.dob.year",
                      "individual.first_name",
                      "individual.last_name",
                      "individual.verification.document",
                    ]),
                  ),
                ),
              }),
              spending_controls: Schema.Unknown,
              status: Schema.Literals(["active", "blocked", "inactive"]),
              type: Schema.Literals(["company", "individual"]),
            }),
          ]),
        ),
        created: Schema.Number,
        currency: Schema.String,
        dispute: Schema.Unknown,
        id: Schema.String,
        livemode: Schema.Boolean,
        merchant_amount: Schema.Number,
        merchant_currency: Schema.String,
        merchant_data: Schema.Struct({
          category: Schema.String,
          category_code: Schema.String,
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          name: Schema.NullOr(Schema.String),
          network_id: Schema.String,
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
          tax_id: Schema.NullOr(Schema.String),
          terminal_id: Schema.NullOr(Schema.String),
          url: Schema.NullOr(Schema.String),
        }),
        metadata: Schema.Record(Schema.String, Schema.String),
        network_data: Schema.NullOr(
          Schema.Struct({
            authorization_code: Schema.NullOr(Schema.String),
            processing_date: Schema.NullOr(Schema.String),
            transaction_id: Schema.NullOr(Schema.String),
          }),
        ),
        object: Schema.Literals(["issuing.transaction"]),
        purchase_details: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              fleet: Schema.NullOr(
                Schema.Struct({
                  cardholder_prompt_data: Schema.NullOr(
                    Schema.Struct({
                      driver_id: Schema.NullOr(Schema.String),
                      odometer: Schema.NullOr(Schema.Number),
                      unspecified_id: Schema.NullOr(Schema.String),
                      user_id: Schema.NullOr(Schema.String),
                      vehicle_number: Schema.NullOr(Schema.String),
                    }),
                  ),
                  purchase_type: Schema.NullOr(Schema.String),
                  reported_breakdown: Schema.NullOr(
                    Schema.Struct({
                      fuel: Schema.NullOr(
                        Schema.Struct({
                          gross_amount_decimal: Schema.NullOr(Schema.String),
                        }),
                      ),
                      non_fuel: Schema.NullOr(
                        Schema.Struct({
                          gross_amount_decimal: Schema.NullOr(Schema.String),
                        }),
                      ),
                      tax: Schema.NullOr(
                        Schema.Struct({
                          local_amount_decimal: Schema.NullOr(Schema.String),
                          national_amount_decimal: Schema.NullOr(Schema.String),
                        }),
                      ),
                    }),
                  ),
                  service_type: Schema.NullOr(Schema.String),
                }),
              ),
              flight: Schema.NullOr(
                Schema.Struct({
                  departure_at: Schema.NullOr(Schema.Number),
                  passenger_name: Schema.NullOr(Schema.String),
                  refundable: Schema.NullOr(Schema.Boolean),
                  segments: Schema.NullOr(
                    Schema.Array(
                      Schema.Struct({
                        arrival_airport_code: Schema.NullOr(Schema.String),
                        carrier: Schema.NullOr(Schema.String),
                        departure_airport_code: Schema.NullOr(Schema.String),
                        flight_number: Schema.NullOr(Schema.String),
                        service_class: Schema.NullOr(Schema.String),
                        stopover_allowed: Schema.NullOr(Schema.Boolean),
                      }),
                    ),
                  ),
                  travel_agency: Schema.NullOr(Schema.String),
                }),
              ),
              fuel: Schema.NullOr(
                Schema.Struct({
                  industry_product_code: Schema.NullOr(Schema.String),
                  quantity_decimal: Schema.NullOr(Schema.String),
                  type: Schema.String,
                  unit: Schema.String,
                  unit_cost_decimal: Schema.String,
                }),
              ),
              lodging: Schema.NullOr(
                Schema.Struct({
                  check_in_at: Schema.NullOr(Schema.Number),
                  nights: Schema.NullOr(Schema.Number),
                }),
              ),
              receipt: Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    description: Schema.NullOr(Schema.String),
                    quantity: Schema.NullOr(Schema.Number),
                    total: Schema.NullOr(Schema.Number),
                    unit_cost: Schema.NullOr(Schema.Number),
                  }),
                ),
              ),
              reference: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        token: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                card: Schema.Unknown,
                created: Schema.Number,
                device_fingerprint: Schema.NullOr(Schema.String),
                id: Schema.String,
                last4: Schema.optional(Schema.String),
                livemode: Schema.Boolean,
                network: Schema.Literals(["mastercard", "visa"]),
                network_data: Schema.optional(
                  Schema.Struct({
                    device: Schema.optional(
                      Schema.Struct({
                        device_fingerprint: Schema.optional(Schema.String),
                        ip_address: Schema.optional(Schema.String),
                        location: Schema.optional(Schema.String),
                        name: Schema.optional(Schema.String),
                        phone_number: Schema.optional(Schema.String),
                        type: Schema.optional(
                          Schema.Literals(["other", "phone", "watch"]),
                        ),
                      }),
                    ),
                    mastercard: Schema.optional(
                      Schema.Struct({
                        card_reference_id: Schema.optional(Schema.String),
                        token_reference_id: Schema.String,
                        token_requestor_id: Schema.String,
                        token_requestor_name: Schema.optional(Schema.String),
                      }),
                    ),
                    type: Schema.Literals(["mastercard", "visa"]),
                    visa: Schema.optional(
                      Schema.Struct({
                        card_reference_id: Schema.NullOr(Schema.String),
                        token_reference_id: Schema.String,
                        token_requestor_id: Schema.String,
                        token_risk_score: Schema.optional(Schema.String),
                      }),
                    ),
                    wallet_provider: Schema.optional(
                      Schema.Struct({
                        account_id: Schema.optional(Schema.String),
                        account_trust_score: Schema.optional(Schema.Number),
                        card_number_source: Schema.optional(
                          Schema.Literals([
                            "app",
                            "manual",
                            "on_file",
                            "other",
                          ]),
                        ),
                        cardholder_address: Schema.optional(
                          Schema.Struct({
                            line1: Schema.String,
                            postal_code: Schema.String,
                          }),
                        ),
                        cardholder_name: Schema.optional(Schema.String),
                        device_trust_score: Schema.optional(Schema.Number),
                        hashed_account_email_address: Schema.optional(
                          Schema.String,
                        ),
                        reason_codes: Schema.optional(
                          Schema.Array(
                            Schema.Literals([
                              "account_card_too_new",
                              "account_recently_changed",
                              "account_too_new",
                              "account_too_new_since_launch",
                              "additional_device",
                              "data_expired",
                              "defer_id_v_decision",
                              "device_recently_lost",
                              "good_activity_history",
                              "has_suspended_tokens",
                              "high_risk",
                              "inactive_account",
                              "long_account_tenure",
                              "low_account_score",
                              "low_device_score",
                              "low_phone_number_score",
                              "network_service_error",
                              "outside_home_territory",
                              "provisioning_cardholder_mismatch",
                              "provisioning_device_and_cardholder_mismatch",
                              "provisioning_device_mismatch",
                              "same_device_no_prior_authentication",
                              "same_device_successful_prior_authentication",
                              "software_update",
                              "suspicious_activity",
                              "too_many_different_cardholders",
                              "too_many_recent_attempts",
                              "too_many_recent_tokens",
                            ]),
                          ),
                        ),
                        suggested_decision: Schema.optional(
                          Schema.Literals([
                            "approve",
                            "decline",
                            "require_auth",
                          ]),
                        ),
                        suggested_decision_version: Schema.optional(
                          Schema.String,
                        ),
                      }),
                    ),
                  }),
                ),
                network_updated_at: Schema.Number,
                object: Schema.Literals(["issuing.token"]),
                status: Schema.Literals([
                  "active",
                  "deleted",
                  "requested",
                  "suspended",
                ]),
                wallet_provider: Schema.optional(
                  Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
                ),
              }),
            ]),
          ),
        ),
        treasury: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              received_credit: Schema.NullOr(Schema.String),
              received_debit: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        type: Schema.Literals(["capture", "refund"]),
        wallet: Schema.NullOr(
          Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
        ),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetIssuingTransactionsOutput>;

// The operation
/**
 * List all transactions
 *
 * <p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
 *
 * @param card - Only return transactions that belong to the given card.
 * @param cardholder - Only return transactions that belong to the given cardholder.
 * @param created - Only return transactions that were created during the given date interval.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 * @param type - Only return transactions that have the given type. One of `capture` or `refund`.
 */
export const GetIssuingTransactions = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetIssuingTransactionsInput,
  outputSchema: GetIssuingTransactionsOutput,
}));
