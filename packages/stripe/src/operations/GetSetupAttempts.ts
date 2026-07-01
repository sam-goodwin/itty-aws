import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetSetupAttemptsInput {
  created?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  setup_intent: string;
  starting_after?: string;
}
export const GetSetupAttemptsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  setup_intent: Schema.String,
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/setup_attempts",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetSetupAttemptsInput>;

// Output Schema
export interface GetSetupAttemptsOutput {
  data: {
    application:
      | string
      | { id: string; name: string | null; object: "application" }
      | null;
    attach_to_self?: boolean;
    created: number;
    customer: unknown;
    customer_account: string | null;
    flow_directions: ("inbound" | "outbound")[] | null;
    id: string;
    livemode: boolean;
    object: "setup_attempt";
    on_behalf_of: unknown;
    payment_method: unknown;
    payment_method_details: {
      acss_debit?: {};
      amazon_pay?: {};
      au_becs_debit?: {};
      bacs_debit?: {};
      bancontact?: {
        bank_code: string | null;
        bank_name: string | null;
        bic: string | null;
        generated_sepa_debit: unknown;
        generated_sepa_debit_mandate:
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
            }
          | null;
        iban_last4: string | null;
        preferred_language: "de" | "en" | "fr" | "nl" | null;
        verified_name: string | null;
      };
      boleto?: {};
      card?: {
        brand: string | null;
        checks: {
          address_line1_check: string | null;
          address_postal_code_check: string | null;
          cvc_check: string | null;
        } | null;
        country: string | null;
        description?: string | null;
        exp_month: number | null;
        exp_year: number | null;
        fingerprint?: string | null;
        funding: string | null;
        iin?: string | null;
        issuer?: string | null;
        last4: string | null;
        moto?: boolean;
        network: string | null;
        three_d_secure: {
          authentication_flow: "challenge" | "frictionless" | null;
          electronic_commerce_indicator:
            | "01"
            | "02"
            | "05"
            | "06"
            | "07"
            | null;
          result:
            | "attempt_acknowledged"
            | "authenticated"
            | "exempted"
            | "failed"
            | "not_supported"
            | "processing_error"
            | null;
          result_reason:
            | "abandoned"
            | "bypassed"
            | "canceled"
            | "card_not_enrolled"
            | "network_not_supported"
            | "protocol_error"
            | "rejected"
            | null;
          transaction_id: string | null;
          version: "1.0.2" | "2.1.0" | "2.2.0" | "2.3.0" | "2.3.1" | null;
        } | null;
        wallet: {
          apple_pay?: {};
          google_pay?: {};
          type: "apple_pay" | "google_pay" | "link";
        } | null;
      };
      card_present?: {
        generated_card: unknown;
        offline: { stored_at: number | null; type: "deferred" | null } | null;
      };
      cashapp?: {};
      ideal?: {
        bank:
          | "abn_amro"
          | "adyen"
          | "asn_bank"
          | "bunq"
          | "buut"
          | "finom"
          | "handelsbanken"
          | "ing"
          | "knab"
          | "mollie"
          | "moneyou"
          | "n26"
          | "nn"
          | "rabobank"
          | "regiobank"
          | "revolut"
          | "sns_bank"
          | "triodos_bank"
          | "van_lanschot"
          | "yoursafe"
          | null;
        bic:
          | "ABNANL2A"
          | "ADYBNL2A"
          | "ASNBNL21"
          | "BITSNL2A"
          | "BUNQNL2A"
          | "BUUTNL2A"
          | "FNOMNL22"
          | "FVLBNL22"
          | "HANDNL2A"
          | "INGBNL2A"
          | "KNABNL2H"
          | "MLLENL2A"
          | "MOYONL21"
          | "NNBANL2G"
          | "NTSBDEB1"
          | "RABONL2U"
          | "RBRBNL21"
          | "REVOIE23"
          | "REVOLT21"
          | "SNSBNL2A"
          | "TRIONL2U"
          | null;
        generated_sepa_debit: unknown;
        generated_sepa_debit_mandate:
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
            }
          | null;
        iban_last4: string | null;
        verified_name: string | null;
      };
      kakao_pay?: {};
      klarna?: {};
      kr_card?: {};
      link?: {};
      naver_pay?: { buyer_id?: string };
      nz_bank_account?: {};
      paypal?: {};
      payto?: {};
      pix?: { fingerprint?: string | null };
      revolut_pay?: {};
      satispay?: {};
      sepa_debit?: {};
      sofort?: {
        bank_code: string | null;
        bank_name: string | null;
        bic: string | null;
        generated_sepa_debit: unknown;
        generated_sepa_debit_mandate:
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
            }
          | null;
        iban_last4: string | null;
        preferred_language: "de" | "en" | "fr" | "nl" | null;
        verified_name: string | null;
      };
      twint?: {};
      type: string;
      upi?: {};
      us_bank_account?: {};
    };
    setup_error: unknown;
    setup_intent: unknown;
    status: string;
    usage: string;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetSetupAttemptsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    data: Schema.Array(
      Schema.Struct({
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
        attach_to_self: Schema.optional(Schema.Boolean),
        created: Schema.Number,
        customer: Schema.Unknown,
        customer_account: Schema.NullOr(Schema.String),
        flow_directions: Schema.NullOr(
          Schema.Array(Schema.Literals(["inbound", "outbound"])),
        ),
        id: Schema.String,
        livemode: Schema.Boolean,
        object: Schema.Literals(["setup_attempt"]),
        on_behalf_of: Schema.Unknown,
        payment_method: Schema.Unknown,
        payment_method_details: Schema.Struct({
          acss_debit: Schema.optional(Schema.Struct({})),
          amazon_pay: Schema.optional(Schema.Struct({})),
          au_becs_debit: Schema.optional(Schema.Struct({})),
          bacs_debit: Schema.optional(Schema.Struct({})),
          bancontact: Schema.optional(
            Schema.Struct({
              bank_code: Schema.NullOr(Schema.String),
              bank_name: Schema.NullOr(Schema.String),
              bic: Schema.NullOr(Schema.String),
              generated_sepa_debit: Schema.Unknown,
              generated_sepa_debit_mandate: Schema.Unknown,
              iban_last4: Schema.NullOr(Schema.String),
              preferred_language: Schema.NullOr(
                Schema.Literals(["de", "en", "fr", "nl"]),
              ),
              verified_name: Schema.NullOr(Schema.String),
            }),
          ),
          boleto: Schema.optional(Schema.Struct({})),
          card: Schema.optional(
            Schema.Struct({
              brand: Schema.NullOr(Schema.String),
              checks: Schema.NullOr(
                Schema.Struct({
                  address_line1_check: Schema.NullOr(Schema.String),
                  address_postal_code_check: Schema.NullOr(Schema.String),
                  cvc_check: Schema.NullOr(Schema.String),
                }),
              ),
              country: Schema.NullOr(Schema.String),
              description: Schema.optional(Schema.NullOr(Schema.String)),
              exp_month: Schema.NullOr(Schema.Number),
              exp_year: Schema.NullOr(Schema.Number),
              fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
              funding: Schema.NullOr(Schema.String),
              iin: Schema.optional(Schema.NullOr(Schema.String)),
              issuer: Schema.optional(Schema.NullOr(Schema.String)),
              last4: Schema.NullOr(Schema.String),
              moto: Schema.optional(Schema.Boolean),
              network: Schema.NullOr(Schema.String),
              three_d_secure: Schema.NullOr(
                Schema.Struct({
                  authentication_flow: Schema.NullOr(
                    Schema.Literals(["challenge", "frictionless"]),
                  ),
                  electronic_commerce_indicator: Schema.NullOr(
                    Schema.Literals(["01", "02", "05", "06", "07"]),
                  ),
                  result: Schema.NullOr(
                    Schema.Literals([
                      "attempt_acknowledged",
                      "authenticated",
                      "exempted",
                      "failed",
                      "not_supported",
                      "processing_error",
                    ]),
                  ),
                  result_reason: Schema.NullOr(
                    Schema.Literals([
                      "abandoned",
                      "bypassed",
                      "canceled",
                      "card_not_enrolled",
                      "network_not_supported",
                      "protocol_error",
                      "rejected",
                    ]),
                  ),
                  transaction_id: Schema.NullOr(Schema.String),
                  version: Schema.NullOr(
                    Schema.Literals([
                      "1.0.2",
                      "2.1.0",
                      "2.2.0",
                      "2.3.0",
                      "2.3.1",
                    ]),
                  ),
                }),
              ),
              wallet: Schema.NullOr(
                Schema.Struct({
                  apple_pay: Schema.optional(Schema.Struct({})),
                  google_pay: Schema.optional(Schema.Struct({})),
                  type: Schema.Literals(["apple_pay", "google_pay", "link"]),
                }),
              ),
            }),
          ),
          card_present: Schema.optional(
            Schema.Struct({
              generated_card: Schema.Unknown,
              offline: Schema.NullOr(
                Schema.Struct({
                  stored_at: Schema.NullOr(Schema.Number),
                  type: Schema.NullOr(Schema.Literals(["deferred"])),
                }),
              ),
            }),
          ),
          cashapp: Schema.optional(Schema.Struct({})),
          ideal: Schema.optional(
            Schema.Struct({
              bank: Schema.NullOr(
                Schema.Literals([
                  "abn_amro",
                  "adyen",
                  "asn_bank",
                  "bunq",
                  "buut",
                  "finom",
                  "handelsbanken",
                  "ing",
                  "knab",
                  "mollie",
                  "moneyou",
                  "n26",
                  "nn",
                  "rabobank",
                  "regiobank",
                  "revolut",
                  "sns_bank",
                  "triodos_bank",
                  "van_lanschot",
                  "yoursafe",
                ]),
              ),
              bic: Schema.NullOr(
                Schema.Literals([
                  "ABNANL2A",
                  "ADYBNL2A",
                  "ASNBNL21",
                  "BITSNL2A",
                  "BUNQNL2A",
                  "BUUTNL2A",
                  "FNOMNL22",
                  "FVLBNL22",
                  "HANDNL2A",
                  "INGBNL2A",
                  "KNABNL2H",
                  "MLLENL2A",
                  "MOYONL21",
                  "NNBANL2G",
                  "NTSBDEB1",
                  "RABONL2U",
                  "RBRBNL21",
                  "REVOIE23",
                  "REVOLT21",
                  "SNSBNL2A",
                  "TRIONL2U",
                ]),
              ),
              generated_sepa_debit: Schema.Unknown,
              generated_sepa_debit_mandate: Schema.Unknown,
              iban_last4: Schema.NullOr(Schema.String),
              verified_name: Schema.NullOr(Schema.String),
            }),
          ),
          kakao_pay: Schema.optional(Schema.Struct({})),
          klarna: Schema.optional(Schema.Struct({})),
          kr_card: Schema.optional(Schema.Struct({})),
          link: Schema.optional(Schema.Struct({})),
          naver_pay: Schema.optional(
            Schema.Struct({
              buyer_id: Schema.optional(Schema.String),
            }),
          ),
          nz_bank_account: Schema.optional(Schema.Struct({})),
          paypal: Schema.optional(Schema.Struct({})),
          payto: Schema.optional(Schema.Struct({})),
          pix: Schema.optional(
            Schema.Struct({
              fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
          revolut_pay: Schema.optional(Schema.Struct({})),
          satispay: Schema.optional(Schema.Struct({})),
          sepa_debit: Schema.optional(Schema.Struct({})),
          sofort: Schema.optional(
            Schema.Struct({
              bank_code: Schema.NullOr(Schema.String),
              bank_name: Schema.NullOr(Schema.String),
              bic: Schema.NullOr(Schema.String),
              generated_sepa_debit: Schema.Unknown,
              generated_sepa_debit_mandate: Schema.Unknown,
              iban_last4: Schema.NullOr(Schema.String),
              preferred_language: Schema.NullOr(
                Schema.Literals(["de", "en", "fr", "nl"]),
              ),
              verified_name: Schema.NullOr(Schema.String),
            }),
          ),
          twint: Schema.optional(Schema.Struct({})),
          type: Schema.String,
          upi: Schema.optional(Schema.Struct({})),
          us_bank_account: Schema.optional(Schema.Struct({})),
        }),
        setup_error: Schema.Unknown,
        setup_intent: Schema.Unknown,
        status: Schema.String,
        usage: Schema.String,
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  },
) as unknown as Schema.Codec<GetSetupAttemptsOutput>;

// The operation
/**
 * List all SetupAttempts
 *
 * <p>Returns a list of SetupAttempts that associate with a provided SetupIntent.</p>
 *
 * @param created - A filter on the list, based on the object `created` field. The value
can be a string with an integer Unix timestamp or a
dictionary with a number of different query options.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param setup_intent - Only return SetupAttempts created by the SetupIntent specified by
this ID.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetSetupAttempts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSetupAttemptsInput,
  outputSchema: GetSetupAttemptsOutput,
}));
