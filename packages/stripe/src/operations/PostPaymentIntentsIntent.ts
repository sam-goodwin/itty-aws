import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostPaymentIntentsIntentInput {
  intent: string;
  amount?: number;
  amount_details?:
    | {
        discount_amount?: number | "";
        enforce_arithmetic_validation?: boolean;
        line_items?:
          | {
              discount_amount?: number;
              payment_method_options?: {
                card?: { commodity_code?: string };
                card_present?: { commodity_code?: string };
                klarna?: {
                  image_url?: string;
                  product_url?: string;
                  reference?: string;
                  subscription_reference?: string;
                };
                paypal?: {
                  category?: "digital_goods" | "donation" | "physical_goods";
                  description?: string;
                  sold_by?: string;
                };
              };
              product_code?: string;
              product_name: string;
              quantity: number;
              tax?: { total_tax_amount: number };
              unit_cost: number;
              unit_of_measure?: string;
            }[]
          | "";
        shipping?:
          | {
              amount?: number | "";
              from_postal_code?: string | "";
              to_postal_code?: string | "";
            }
          | "";
        tax?: { total_tax_amount: number } | "";
      }
    | "";
  application_fee_amount?: number | "";
  capture_method?: "automatic" | "automatic_async" | "manual";
  currency?: string;
  customer?: string;
  customer_account?: string;
  description?: string;
  excluded_payment_method_types?:
    | (
        | "acss_debit"
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "amazon_pay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "billie"
        | "bizum"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "crypto"
        | "customer_balance"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "kakao_pay"
        | "klarna"
        | "konbini"
        | "kr_card"
        | "mb_way"
        | "mobilepay"
        | "multibanco"
        | "naver_pay"
        | "nz_bank_account"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "payco"
        | "paynow"
        | "paypal"
        | "payto"
        | "pix"
        | "promptpay"
        | "revolut_pay"
        | "samsung_pay"
        | "satispay"
        | "scalapay"
        | "sepa_debit"
        | "sofort"
        | "sunbit"
        | "swish"
        | "twint"
        | "upi"
        | "us_bank_account"
        | "wechat_pay"
        | "zip"
      )[]
    | "";
  expand?: string[];
  hooks?: { inputs?: { tax?: { calculation: string | "" } } };
  metadata?: Record<string, string> | "";
  payment_details?:
    | { customer_reference?: string | ""; order_reference?: string | "" }
    | "";
  payment_method?: string;
  payment_method_configuration?: string;
  payment_method_data?: {
    acss_debit?: {
      account_number: string;
      institution_number: string;
      transit_number: string;
    };
    affirm?: {};
    afterpay_clearpay?: {};
    alipay?: {};
    allow_redisplay?: "always" | "limited" | "unspecified";
    alma?: {};
    amazon_pay?: {};
    au_becs_debit?: { account_number: string; bsb_number: string };
    bacs_debit?: { account_number?: string; sort_code?: string };
    bancontact?: {};
    billie?: {};
    billing_details?: {
      address?:
        | {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
          }
        | "";
      email?: string | "";
      name?: string | "";
      phone?: string | "";
      tax_id?: string;
    };
    bizum?: {};
    blik?: {};
    boleto?: { tax_id: string };
    cashapp?: {};
    crypto?: {};
    customer_balance?: {};
    eps?: {
      bank?:
        | "arzte_und_apotheker_bank"
        | "austrian_anadi_bank_ag"
        | "bank_austria"
        | "bankhaus_carl_spangler"
        | "bankhaus_schelhammer_und_schattera_ag"
        | "bawag_psk_ag"
        | "bks_bank_ag"
        | "brull_kallmus_bank_ag"
        | "btv_vier_lander_bank"
        | "capital_bank_grawe_gruppe_ag"
        | "deutsche_bank_ag"
        | "dolomitenbank"
        | "easybank_ag"
        | "erste_bank_und_sparkassen"
        | "hypo_alpeadriabank_international_ag"
        | "hypo_bank_burgenland_aktiengesellschaft"
        | "hypo_noe_lb_fur_niederosterreich_u_wien"
        | "hypo_oberosterreich_salzburg_steiermark"
        | "hypo_tirol_bank_ag"
        | "hypo_vorarlberg_bank_ag"
        | "marchfelder_bank"
        | "oberbank_ag"
        | "raiffeisen_bankengruppe_osterreich"
        | "schoellerbank_ag"
        | "sparda_bank_wien"
        | "volksbank_gruppe"
        | "volkskreditbank_ag"
        | "vr_bank_braunau";
    };
    fpx?: {
      account_holder_type?: "company" | "individual";
      bank:
        | "affin_bank"
        | "agrobank"
        | "alliance_bank"
        | "ambank"
        | "bank_islam"
        | "bank_muamalat"
        | "bank_of_china"
        | "bank_rakyat"
        | "bsn"
        | "cimb"
        | "deutsche_bank"
        | "hong_leong_bank"
        | "hsbc"
        | "kfh"
        | "maybank2e"
        | "maybank2u"
        | "ocbc"
        | "pb_enterprise"
        | "public_bank"
        | "rhb"
        | "standard_chartered"
        | "uob";
    };
    giropay?: {};
    grabpay?: {};
    ideal?: {
      bank?:
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
        | "yoursafe";
    };
    interac_present?: {};
    kakao_pay?: {};
    klarna?: { dob?: { day: number; month: number; year: number } };
    konbini?: {};
    kr_card?: {};
    link?: {};
    mb_way?: {};
    metadata?: Record<string, string>;
    mobilepay?: {};
    multibanco?: {};
    naver_pay?: { funding?: "card" | "points" };
    nz_bank_account?: {
      account_holder_name?: string;
      account_number: string;
      bank_code: string;
      branch_code: string;
      reference?: string;
      suffix: string;
    };
    oxxo?: {};
    p24?: {
      bank?:
        | "alior_bank"
        | "bank_millennium"
        | "bank_nowy_bfg_sa"
        | "bank_pekao_sa"
        | "banki_spbdzielcze"
        | "blik"
        | "bnp_paribas"
        | "boz"
        | "citi_handlowy"
        | "credit_agricole"
        | "envelobank"
        | "etransfer_pocztowy24"
        | "getin_bank"
        | "ideabank"
        | "ing"
        | "inteligo"
        | "mbank_mtransfer"
        | "nest_przelew"
        | "noble_pay"
        | "pbac_z_ipko"
        | "plus_bank"
        | "santander_przelew24"
        | "tmobile_usbugi_bankowe"
        | "toyota_bank"
        | "velobank"
        | "volkswagen_bank";
    };
    pay_by_bank?: {};
    payco?: {};
    paynow?: {};
    paypal?: {};
    payto?: { account_number?: string; bsb_number?: string; pay_id?: string };
    pix?: {};
    promptpay?: {};
    radar_options?: { session?: string };
    revolut_pay?: {};
    samsung_pay?: {};
    satispay?: {};
    scalapay?: {};
    sepa_debit?: { iban: string };
    sofort?: { country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL" };
    sunbit?: {};
    swish?: {};
    twint?: {};
    type:
      | "acss_debit"
      | "affirm"
      | "afterpay_clearpay"
      | "alipay"
      | "alma"
      | "amazon_pay"
      | "au_becs_debit"
      | "bacs_debit"
      | "bancontact"
      | "billie"
      | "bizum"
      | "blik"
      | "boleto"
      | "cashapp"
      | "crypto"
      | "customer_balance"
      | "eps"
      | "fpx"
      | "giropay"
      | "grabpay"
      | "ideal"
      | "kakao_pay"
      | "klarna"
      | "konbini"
      | "kr_card"
      | "link"
      | "mb_way"
      | "mobilepay"
      | "multibanco"
      | "naver_pay"
      | "nz_bank_account"
      | "oxxo"
      | "p24"
      | "pay_by_bank"
      | "payco"
      | "paynow"
      | "paypal"
      | "payto"
      | "pix"
      | "promptpay"
      | "revolut_pay"
      | "samsung_pay"
      | "satispay"
      | "scalapay"
      | "sepa_debit"
      | "sofort"
      | "sunbit"
      | "swish"
      | "twint"
      | "upi"
      | "us_bank_account"
      | "wechat_pay"
      | "zip";
    upi?: {
      mandate_options?: {
        amount?: number;
        amount_type?: "fixed" | "maximum";
        description?: string;
        end_date?: number;
      };
    };
    us_bank_account?: {
      account_holder_type?: "company" | "individual";
      account_number?: string;
      account_type?: "checking" | "savings";
      financial_connections_account?: string;
      routing_number?: string;
    };
    wechat_pay?: {};
    zip?: {};
  };
  payment_method_options?: {
    acss_debit?:
      | {
          mandate_options?: {
            custom_mandate_url?: string | "";
            interval_description?: string;
            payment_schedule?: "combined" | "interval" | "sporadic";
            transaction_type?: "business" | "personal";
          };
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
          target_date?: string;
          verification_method?: "automatic" | "instant" | "microdeposits";
        }
      | "";
    affirm?:
      | {
          capture_method?: "" | "manual";
          preferred_locale?: string;
          setup_future_usage?: "none";
        }
      | "";
    afterpay_clearpay?:
      | {
          capture_method?: "" | "manual";
          reference?: string;
          setup_future_usage?: "none";
        }
      | "";
    alipay?: { setup_future_usage?: "" | "none" | "off_session" } | "";
    alma?: { capture_method?: "" | "manual" } | "";
    amazon_pay?:
      | {
          capture_method?: "" | "manual";
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    au_becs_debit?:
      | {
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
          target_date?: string;
        }
      | "";
    bacs_debit?:
      | {
          mandate_options?: { reference_prefix?: string | "" };
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
          target_date?: string;
        }
      | "";
    bancontact?:
      | {
          preferred_language?: "de" | "en" | "fr" | "nl";
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    billie?: { capture_method?: "" | "manual" } | "";
    bizum?: {} | "";
    blik?: { code?: string; setup_future_usage?: "" | "none" } | "";
    boleto?:
      | {
          expires_after_days?: number;
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
        }
      | "";
    card?:
      | {
          capture_method?: "" | "manual";
          cvc_token?: string;
          installments?: {
            enabled?: boolean;
            plan?:
              | {
                  count?: number;
                  interval?: "month";
                  type: "bonus" | "fixed_count" | "revolving";
                }
              | "";
          };
          mandate_options?: {
            amount: number;
            amount_type: "fixed" | "maximum";
            description?: string;
            end_date?: number;
            interval: "day" | "month" | "sporadic" | "week" | "year";
            interval_count?: number;
            reference: string;
            start_date: number;
            supported_types?: "india"[];
          };
          moto?: boolean;
          network?:
            | "amex"
            | "cartes_bancaires"
            | "diners"
            | "discover"
            | "eftpos_au"
            | "girocard"
            | "interac"
            | "jcb"
            | "link"
            | "mastercard"
            | "unionpay"
            | "unknown"
            | "visa";
          request_extended_authorization?: "if_available" | "never";
          request_incremental_authorization?: "if_available" | "never";
          request_multicapture?: "if_available" | "never";
          request_overcapture?: "if_available" | "never";
          request_three_d_secure?: "any" | "automatic" | "challenge";
          require_cvc_recollection?: boolean;
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
          statement_descriptor_suffix_kana?: string | "";
          statement_descriptor_suffix_kanji?: string | "";
          three_d_secure?: {
            ares_trans_status?: "A" | "C" | "I" | "N" | "R" | "U" | "Y";
            cryptogram: string;
            electronic_commerce_indicator?: "01" | "02" | "05" | "06" | "07";
            exemption_indicator?: "low_risk" | "none";
            network_options?: {
              cartes_bancaires?: {
                cb_avalgo: "0" | "1" | "2" | "3" | "4" | "A";
                cb_exemption?: string;
                cb_score?: number;
              };
            };
            requestor_challenge_indicator?: string;
            transaction_id: string;
            version: "1.0.2" | "2.1.0" | "2.2.0" | "2.3.0" | "2.3.1";
          };
        }
      | "";
    card_present?:
      | {
          capture_method?: "manual" | "manual_preferred";
          request_extended_authorization?: boolean;
          request_incremental_authorization_support?: boolean;
          routing?: { requested_priority?: "domestic" | "international" };
        }
      | "";
    cashapp?:
      | {
          capture_method?: "" | "manual";
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
        }
      | "";
    crypto?: { setup_future_usage?: "none" } | "";
    customer_balance?:
      | {
          bank_transfer?: {
            eu_bank_transfer?: { country: string };
            requested_address_types?: (
              | "aba"
              | "iban"
              | "sepa"
              | "sort_code"
              | "spei"
              | "swift"
              | "zengin"
            )[];
            type:
              | "eu_bank_transfer"
              | "gb_bank_transfer"
              | "jp_bank_transfer"
              | "mx_bank_transfer"
              | "us_bank_transfer";
          };
          funding_type?: "bank_transfer";
          setup_future_usage?: "none";
        }
      | "";
    eps?: { setup_future_usage?: "none" } | "";
    fpx?: { setup_future_usage?: "none" } | "";
    giropay?: { setup_future_usage?: "none" } | "";
    grabpay?: { setup_future_usage?: "none" } | "";
    ideal?: { setup_future_usage?: "" | "none" | "off_session" } | "";
    interac_present?: {} | "";
    kakao_pay?:
      | {
          capture_method?: "" | "manual";
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    klarna?:
      | {
          capture_method?: "" | "manual";
          on_demand?: {
            average_amount?: number;
            maximum_amount?: number;
            minimum_amount?: number;
            purchase_interval?: "day" | "month" | "week" | "year";
            purchase_interval_count?: number;
          };
          preferred_locale?:
            | "cs-CZ"
            | "da-DK"
            | "de-AT"
            | "de-CH"
            | "de-DE"
            | "el-GR"
            | "en-AT"
            | "en-AU"
            | "en-BE"
            | "en-CA"
            | "en-CH"
            | "en-CZ"
            | "en-DE"
            | "en-DK"
            | "en-ES"
            | "en-FI"
            | "en-FR"
            | "en-GB"
            | "en-GR"
            | "en-IE"
            | "en-IT"
            | "en-NL"
            | "en-NO"
            | "en-NZ"
            | "en-PL"
            | "en-PT"
            | "en-RO"
            | "en-SE"
            | "en-US"
            | "es-ES"
            | "es-US"
            | "fi-FI"
            | "fr-BE"
            | "fr-CA"
            | "fr-CH"
            | "fr-FR"
            | "it-CH"
            | "it-IT"
            | "nb-NO"
            | "nl-BE"
            | "nl-NL"
            | "pl-PL"
            | "pt-PT"
            | "ro-RO"
            | "sv-FI"
            | "sv-SE";
          setup_future_usage?: "none" | "off_session" | "on_session";
          subscriptions?:
            | {
                interval: "day" | "month" | "week" | "year";
                interval_count?: number;
                name?: string;
                next_billing?: { amount: number; date: string };
                reference: string;
              }[]
            | "";
        }
      | "";
    konbini?:
      | {
          confirmation_number?: string | "";
          expires_after_days?: number | "";
          expires_at?: number | "";
          product_description?: string | "";
          setup_future_usage?: "none";
        }
      | "";
    kr_card?:
      | {
          capture_method?: "" | "manual";
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    link?:
      | {
          capture_method?: "" | "manual";
          persistent_token?: string;
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    mb_way?: { setup_future_usage?: "none" } | "";
    mobilepay?:
      | { capture_method?: "" | "manual"; setup_future_usage?: "none" }
      | "";
    multibanco?: { setup_future_usage?: "none" } | "";
    naver_pay?:
      | {
          capture_method?: "" | "manual";
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    nz_bank_account?:
      | {
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
          target_date?: string;
        }
      | "";
    oxxo?: { expires_after_days?: number; setup_future_usage?: "none" } | "";
    p24?:
      | { setup_future_usage?: "none"; tos_shown_and_accepted?: boolean }
      | "";
    pay_by_bank?: {} | "";
    payco?: { capture_method?: "" | "manual" } | "";
    paynow?: { setup_future_usage?: "none" } | "";
    paypal?:
      | {
          capture_method?: "" | "manual";
          preferred_locale?:
            | "cs-CZ"
            | "da-DK"
            | "de-AT"
            | "de-DE"
            | "de-LU"
            | "el-GR"
            | "en-GB"
            | "en-US"
            | "es-ES"
            | "fi-FI"
            | "fr-BE"
            | "fr-FR"
            | "fr-LU"
            | "hu-HU"
            | "it-IT"
            | "nl-BE"
            | "nl-NL"
            | "pl-PL"
            | "pt-PT"
            | "sk-SK"
            | "sv-SE";
          reference?: string;
          risk_correlation_id?: string;
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    payto?:
      | {
          mandate_options?: {
            amount?: number | "";
            amount_type?: "" | "fixed" | "maximum";
            end_date?: string | "";
            payment_schedule?:
              | ""
              | "adhoc"
              | "annual"
              | "daily"
              | "fortnightly"
              | "monthly"
              | "quarterly"
              | "semi_annual"
              | "weekly";
            payments_per_period?: number | "";
            purpose?:
              | ""
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
              | "utility";
          };
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    pix?:
      | {
          amount_includes_iof?: "always" | "never";
          expires_after_seconds?: number;
          expires_at?: number;
          mandate_options?: {
            amount?: number;
            amount_includes_iof?: "always" | "never";
            amount_type?: "fixed" | "maximum";
            currency?: string;
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
          setup_future_usage?: "none" | "off_session";
        }
      | "";
    promptpay?: { setup_future_usage?: "none" } | "";
    revolut_pay?:
      | {
          capture_method?: "" | "manual";
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    samsung_pay?: { capture_method?: "" | "manual" } | "";
    satispay?:
      | {
          capture_method?: "" | "manual";
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
        }
      | "";
    scalapay?: { capture_method?: "" | "manual" } | "";
    sepa_debit?:
      | {
          mandate_options?: { reference_prefix?: string | "" };
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
          target_date?: string;
        }
      | "";
    sofort?:
      | {
          preferred_language?:
            | ""
            | "de"
            | "en"
            | "es"
            | "fr"
            | "it"
            | "nl"
            | "pl";
          setup_future_usage?: "" | "none" | "off_session";
        }
      | "";
    sunbit?:
      | { capture_method?: "" | "manual"; setup_future_usage?: "none" }
      | "";
    swish?: { reference?: string | ""; setup_future_usage?: "none" } | "";
    twint?: { setup_future_usage?: "none" | "off_session" } | "";
    upi?:
      | {
          mandate_options?: {
            amount?: number;
            amount_type?: "fixed" | "maximum";
            description?: string;
            end_date?: number;
          };
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
        }
      | "";
    us_bank_account?:
      | {
          financial_connections?: {
            filters?: { account_subcategories?: ("checking" | "savings")[] };
            permissions?: (
              | "balances"
              | "ownership"
              | "payment_method"
              | "transactions"
            )[];
            prefetch?: ("balances" | "ownership" | "transactions")[];
            return_url?: string;
          };
          mandate_options?: { collection_method?: "" | "paper" };
          networks?: { requested?: ("ach" | "us_domestic_wire")[] };
          setup_future_usage?: "" | "none" | "off_session" | "on_session";
          target_date?: string;
          transaction_purpose?:
            | ""
            | "goods"
            | "other"
            | "services"
            | "unspecified";
          verification_method?: "automatic" | "instant" | "microdeposits";
        }
      | "";
    wechat_pay?:
      | {
          app_id?: string;
          client?: "android" | "ios" | "web";
          setup_future_usage?: "none";
        }
      | "";
    zip?: { setup_future_usage?: "none" } | "";
  };
  payment_method_types?: string[];
  receipt_email?: string | "";
  setup_future_usage?: "" | "off_session" | "on_session";
  shipping?:
    | {
        address: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        carrier?: string;
        name: string;
        phone?: string;
        tracking_number?: string;
      }
    | "";
  statement_descriptor?: string;
  statement_descriptor_suffix?: string;
  transfer_data?: {
    amount?: number;
    description?: string;
    metadata?: Record<string, string> | "";
    payment_data?: {
      description?: string;
      metadata?: Record<string, string> | "";
    };
  };
  transfer_group?: string;
}
export const PostPaymentIntentsIntentInput =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.String.pipe(T.PathParam()),
    amount: Schema.optional(Schema.Number),
    amount_details: Schema.optional(
      Schema.Union([
        Schema.Struct({
          discount_amount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Literals([""])]),
          ),
          enforce_arithmetic_validation: Schema.optional(Schema.Boolean),
          line_items: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  discount_amount: Schema.optional(Schema.Number),
                  payment_method_options: Schema.optional(
                    Schema.Struct({
                      card: Schema.optional(
                        Schema.Struct({
                          commodity_code: Schema.optional(Schema.String),
                        }),
                      ),
                      card_present: Schema.optional(
                        Schema.Struct({
                          commodity_code: Schema.optional(Schema.String),
                        }),
                      ),
                      klarna: Schema.optional(
                        Schema.Struct({
                          image_url: Schema.optional(Schema.String),
                          product_url: Schema.optional(Schema.String),
                          reference: Schema.optional(Schema.String),
                          subscription_reference: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                      paypal: Schema.optional(
                        Schema.Struct({
                          category: Schema.optional(
                            Schema.Literals([
                              "digital_goods",
                              "donation",
                              "physical_goods",
                            ]),
                          ),
                          description: Schema.optional(Schema.String),
                          sold_by: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                  product_code: Schema.optional(Schema.String),
                  product_name: Schema.String,
                  quantity: Schema.Number,
                  tax: Schema.optional(
                    Schema.Struct({
                      total_tax_amount: Schema.Number,
                    }),
                  ),
                  unit_cost: Schema.Number,
                  unit_of_measure: Schema.optional(Schema.String),
                }),
              ),
              Schema.Literals([""]),
            ]),
          ),
          shipping: Schema.optional(
            Schema.Union([
              Schema.Struct({
                amount: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Literals([""])]),
                ),
                from_postal_code: Schema.optional(
                  Schema.Union([Schema.String, Schema.Literals([""])]),
                ),
                to_postal_code: Schema.optional(
                  Schema.Union([Schema.String, Schema.Literals([""])]),
                ),
              }),
              Schema.Literals([""]),
            ]),
          ),
          tax: Schema.optional(
            Schema.Union([
              Schema.Struct({
                total_tax_amount: Schema.Number,
              }),
              Schema.Literals([""]),
            ]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    application_fee_amount: Schema.optional(
      Schema.Union([Schema.Number, Schema.Literals([""])]),
    ),
    capture_method: Schema.optional(
      Schema.Literals(["automatic", "automatic_async", "manual"]),
    ),
    currency: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    excluded_payment_method_types: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Literals([
            "acss_debit",
            "affirm",
            "afterpay_clearpay",
            "alipay",
            "alma",
            "amazon_pay",
            "au_becs_debit",
            "bacs_debit",
            "bancontact",
            "billie",
            "bizum",
            "blik",
            "boleto",
            "card",
            "cashapp",
            "crypto",
            "customer_balance",
            "eps",
            "fpx",
            "giropay",
            "grabpay",
            "ideal",
            "kakao_pay",
            "klarna",
            "konbini",
            "kr_card",
            "mb_way",
            "mobilepay",
            "multibanco",
            "naver_pay",
            "nz_bank_account",
            "oxxo",
            "p24",
            "pay_by_bank",
            "payco",
            "paynow",
            "paypal",
            "payto",
            "pix",
            "promptpay",
            "revolut_pay",
            "samsung_pay",
            "satispay",
            "scalapay",
            "sepa_debit",
            "sofort",
            "sunbit",
            "swish",
            "twint",
            "upi",
            "us_bank_account",
            "wechat_pay",
            "zip",
          ]),
        ),
        Schema.Literals([""]),
      ]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    hooks: Schema.optional(
      Schema.Struct({
        inputs: Schema.optional(
          Schema.Struct({
            tax: Schema.optional(
              Schema.Struct({
                calculation: Schema.Union([
                  Schema.String,
                  Schema.Literals([""]),
                ]),
              }),
            ),
          }),
        ),
      }),
    ),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    payment_details: Schema.optional(
      Schema.Union([
        Schema.Struct({
          customer_reference: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
          order_reference: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
        }),
        Schema.Literals([""]),
      ]),
    ),
    payment_method: Schema.optional(Schema.String),
    payment_method_configuration: Schema.optional(Schema.String),
    payment_method_data: Schema.optional(
      Schema.Struct({
        acss_debit: Schema.optional(
          Schema.Struct({
            account_number: Schema.String,
            institution_number: Schema.String,
            transit_number: Schema.String,
          }),
        ),
        affirm: Schema.optional(Schema.Struct({})),
        afterpay_clearpay: Schema.optional(Schema.Struct({})),
        alipay: Schema.optional(Schema.Struct({})),
        allow_redisplay: Schema.optional(
          Schema.Literals(["always", "limited", "unspecified"]),
        ),
        alma: Schema.optional(Schema.Struct({})),
        amazon_pay: Schema.optional(Schema.Struct({})),
        au_becs_debit: Schema.optional(
          Schema.Struct({
            account_number: Schema.String,
            bsb_number: Schema.String,
          }),
        ),
        bacs_debit: Schema.optional(
          Schema.Struct({
            account_number: Schema.optional(Schema.String),
            sort_code: Schema.optional(Schema.String),
          }),
        ),
        bancontact: Schema.optional(Schema.Struct({})),
        billie: Schema.optional(Schema.Struct({})),
        billing_details: Schema.optional(
          Schema.Struct({
            address: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  city: Schema.optional(Schema.String),
                  country: Schema.optional(Schema.String),
                  line1: Schema.optional(Schema.String),
                  line2: Schema.optional(Schema.String),
                  postal_code: Schema.optional(Schema.String),
                  state: Schema.optional(Schema.String),
                }),
                Schema.Literals([""]),
              ]),
            ),
            email: Schema.optional(
              Schema.Union([Schema.String, Schema.Literals([""])]),
            ),
            name: Schema.optional(
              Schema.Union([Schema.String, Schema.Literals([""])]),
            ),
            phone: Schema.optional(
              Schema.Union([Schema.String, Schema.Literals([""])]),
            ),
            tax_id: Schema.optional(Schema.String),
          }),
        ),
        bizum: Schema.optional(Schema.Struct({})),
        blik: Schema.optional(Schema.Struct({})),
        boleto: Schema.optional(
          Schema.Struct({
            tax_id: Schema.String,
          }),
        ),
        cashapp: Schema.optional(Schema.Struct({})),
        crypto: Schema.optional(Schema.Struct({})),
        customer_balance: Schema.optional(Schema.Struct({})),
        eps: Schema.optional(
          Schema.Struct({
            bank: Schema.optional(
              Schema.Literals([
                "arzte_und_apotheker_bank",
                "austrian_anadi_bank_ag",
                "bank_austria",
                "bankhaus_carl_spangler",
                "bankhaus_schelhammer_und_schattera_ag",
                "bawag_psk_ag",
                "bks_bank_ag",
                "brull_kallmus_bank_ag",
                "btv_vier_lander_bank",
                "capital_bank_grawe_gruppe_ag",
                "deutsche_bank_ag",
                "dolomitenbank",
                "easybank_ag",
                "erste_bank_und_sparkassen",
                "hypo_alpeadriabank_international_ag",
                "hypo_bank_burgenland_aktiengesellschaft",
                "hypo_noe_lb_fur_niederosterreich_u_wien",
                "hypo_oberosterreich_salzburg_steiermark",
                "hypo_tirol_bank_ag",
                "hypo_vorarlberg_bank_ag",
                "marchfelder_bank",
                "oberbank_ag",
                "raiffeisen_bankengruppe_osterreich",
                "schoellerbank_ag",
                "sparda_bank_wien",
                "volksbank_gruppe",
                "volkskreditbank_ag",
                "vr_bank_braunau",
              ]),
            ),
          }),
        ),
        fpx: Schema.optional(
          Schema.Struct({
            account_holder_type: Schema.optional(
              Schema.Literals(["company", "individual"]),
            ),
            bank: Schema.Literals([
              "affin_bank",
              "agrobank",
              "alliance_bank",
              "ambank",
              "bank_islam",
              "bank_muamalat",
              "bank_of_china",
              "bank_rakyat",
              "bsn",
              "cimb",
              "deutsche_bank",
              "hong_leong_bank",
              "hsbc",
              "kfh",
              "maybank2e",
              "maybank2u",
              "ocbc",
              "pb_enterprise",
              "public_bank",
              "rhb",
              "standard_chartered",
              "uob",
            ]),
          }),
        ),
        giropay: Schema.optional(Schema.Struct({})),
        grabpay: Schema.optional(Schema.Struct({})),
        ideal: Schema.optional(
          Schema.Struct({
            bank: Schema.optional(
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
          }),
        ),
        interac_present: Schema.optional(Schema.Struct({})),
        kakao_pay: Schema.optional(Schema.Struct({})),
        klarna: Schema.optional(
          Schema.Struct({
            dob: Schema.optional(
              Schema.Struct({
                day: Schema.Number,
                month: Schema.Number,
                year: Schema.Number,
              }),
            ),
          }),
        ),
        konbini: Schema.optional(Schema.Struct({})),
        kr_card: Schema.optional(Schema.Struct({})),
        link: Schema.optional(Schema.Struct({})),
        mb_way: Schema.optional(Schema.Struct({})),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        mobilepay: Schema.optional(Schema.Struct({})),
        multibanco: Schema.optional(Schema.Struct({})),
        naver_pay: Schema.optional(
          Schema.Struct({
            funding: Schema.optional(Schema.Literals(["card", "points"])),
          }),
        ),
        nz_bank_account: Schema.optional(
          Schema.Struct({
            account_holder_name: Schema.optional(Schema.String),
            account_number: Schema.String,
            bank_code: Schema.String,
            branch_code: Schema.String,
            reference: Schema.optional(Schema.String),
            suffix: Schema.String,
          }),
        ),
        oxxo: Schema.optional(Schema.Struct({})),
        p24: Schema.optional(
          Schema.Struct({
            bank: Schema.optional(
              Schema.Literals([
                "alior_bank",
                "bank_millennium",
                "bank_nowy_bfg_sa",
                "bank_pekao_sa",
                "banki_spbdzielcze",
                "blik",
                "bnp_paribas",
                "boz",
                "citi_handlowy",
                "credit_agricole",
                "envelobank",
                "etransfer_pocztowy24",
                "getin_bank",
                "ideabank",
                "ing",
                "inteligo",
                "mbank_mtransfer",
                "nest_przelew",
                "noble_pay",
                "pbac_z_ipko",
                "plus_bank",
                "santander_przelew24",
                "tmobile_usbugi_bankowe",
                "toyota_bank",
                "velobank",
                "volkswagen_bank",
              ]),
            ),
          }),
        ),
        pay_by_bank: Schema.optional(Schema.Struct({})),
        payco: Schema.optional(Schema.Struct({})),
        paynow: Schema.optional(Schema.Struct({})),
        paypal: Schema.optional(Schema.Struct({})),
        payto: Schema.optional(
          Schema.Struct({
            account_number: Schema.optional(Schema.String),
            bsb_number: Schema.optional(Schema.String),
            pay_id: Schema.optional(Schema.String),
          }),
        ),
        pix: Schema.optional(Schema.Struct({})),
        promptpay: Schema.optional(Schema.Struct({})),
        radar_options: Schema.optional(
          Schema.Struct({
            session: Schema.optional(Schema.String),
          }),
        ),
        revolut_pay: Schema.optional(Schema.Struct({})),
        samsung_pay: Schema.optional(Schema.Struct({})),
        satispay: Schema.optional(Schema.Struct({})),
        scalapay: Schema.optional(Schema.Struct({})),
        sepa_debit: Schema.optional(
          Schema.Struct({
            iban: Schema.String,
          }),
        ),
        sofort: Schema.optional(
          Schema.Struct({
            country: Schema.Literals(["AT", "BE", "DE", "ES", "IT", "NL"]),
          }),
        ),
        sunbit: Schema.optional(Schema.Struct({})),
        swish: Schema.optional(Schema.Struct({})),
        twint: Schema.optional(Schema.Struct({})),
        type: Schema.Literals([
          "acss_debit",
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "amazon_pay",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "bizum",
          "blik",
          "boleto",
          "cashapp",
          "crypto",
          "customer_balance",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "link",
          "mb_way",
          "mobilepay",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "oxxo",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "payto",
          "pix",
          "promptpay",
          "revolut_pay",
          "samsung_pay",
          "satispay",
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip",
        ]),
        upi: Schema.optional(
          Schema.Struct({
            mandate_options: Schema.optional(
              Schema.Struct({
                amount: Schema.optional(Schema.Number),
                amount_type: Schema.optional(
                  Schema.Literals(["fixed", "maximum"]),
                ),
                description: Schema.optional(Schema.String),
                end_date: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        us_bank_account: Schema.optional(
          Schema.Struct({
            account_holder_type: Schema.optional(
              Schema.Literals(["company", "individual"]),
            ),
            account_number: Schema.optional(Schema.String),
            account_type: Schema.optional(
              Schema.Literals(["checking", "savings"]),
            ),
            financial_connections_account: Schema.optional(Schema.String),
            routing_number: Schema.optional(Schema.String),
          }),
        ),
        wechat_pay: Schema.optional(Schema.Struct({})),
        zip: Schema.optional(Schema.Struct({})),
      }),
    ),
    payment_method_options: Schema.optional(
      Schema.Struct({
        acss_debit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  custom_mandate_url: Schema.optional(
                    Schema.Union([Schema.String, Schema.Literals([""])]),
                  ),
                  interval_description: Schema.optional(Schema.String),
                  payment_schedule: Schema.optional(
                    Schema.Literals(["combined", "interval", "sporadic"]),
                  ),
                  transaction_type: Schema.optional(
                    Schema.Literals(["business", "personal"]),
                  ),
                }),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
              target_date: Schema.optional(Schema.String),
              verification_method: Schema.optional(
                Schema.Literals(["automatic", "instant", "microdeposits"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        affirm: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              preferred_locale: Schema.optional(Schema.String),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        afterpay_clearpay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              reference: Schema.optional(Schema.String),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        alipay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        alma: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        amazon_pay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        au_becs_debit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
              target_date: Schema.optional(Schema.String),
            }),
            Schema.Literals([""]),
          ]),
        ),
        bacs_debit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  reference_prefix: Schema.optional(
                    Schema.Union([Schema.String, Schema.Literals([""])]),
                  ),
                }),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
              target_date: Schema.optional(Schema.String),
            }),
            Schema.Literals([""]),
          ]),
        ),
        bancontact: Schema.optional(
          Schema.Union([
            Schema.Struct({
              preferred_language: Schema.optional(
                Schema.Literals(["de", "en", "fr", "nl"]),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        billie: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        bizum: Schema.optional(
          Schema.Union([Schema.Struct({}), Schema.Literals([""])]),
        ),
        blik: Schema.optional(
          Schema.Union([
            Schema.Struct({
              code: Schema.optional(Schema.String),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        boleto: Schema.optional(
          Schema.Union([
            Schema.Struct({
              expires_after_days: Schema.optional(Schema.Number),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        card: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              cvc_token: Schema.optional(Schema.String),
              installments: Schema.optional(
                Schema.Struct({
                  enabled: Schema.optional(Schema.Boolean),
                  plan: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        count: Schema.optional(Schema.Number),
                        interval: Schema.optional(Schema.Literals(["month"])),
                        type: Schema.Literals([
                          "bonus",
                          "fixed_count",
                          "revolving",
                        ]),
                      }),
                      Schema.Literals([""]),
                    ]),
                  ),
                }),
              ),
              mandate_options: Schema.optional(
                Schema.Struct({
                  amount: Schema.Number,
                  amount_type: Schema.Literals(["fixed", "maximum"]),
                  description: Schema.optional(Schema.String),
                  end_date: Schema.optional(Schema.Number),
                  interval: Schema.Literals([
                    "day",
                    "month",
                    "sporadic",
                    "week",
                    "year",
                  ]),
                  interval_count: Schema.optional(Schema.Number),
                  reference: Schema.String,
                  start_date: Schema.Number,
                  supported_types: Schema.optional(
                    Schema.Array(Schema.Literals(["india"])),
                  ),
                }),
              ),
              moto: Schema.optional(Schema.Boolean),
              network: Schema.optional(
                Schema.Literals([
                  "amex",
                  "cartes_bancaires",
                  "diners",
                  "discover",
                  "eftpos_au",
                  "girocard",
                  "interac",
                  "jcb",
                  "link",
                  "mastercard",
                  "unionpay",
                  "unknown",
                  "visa",
                ]),
              ),
              request_extended_authorization: Schema.optional(
                Schema.Literals(["if_available", "never"]),
              ),
              request_incremental_authorization: Schema.optional(
                Schema.Literals(["if_available", "never"]),
              ),
              request_multicapture: Schema.optional(
                Schema.Literals(["if_available", "never"]),
              ),
              request_overcapture: Schema.optional(
                Schema.Literals(["if_available", "never"]),
              ),
              request_three_d_secure: Schema.optional(
                Schema.Literals(["any", "automatic", "challenge"]),
              ),
              require_cvc_recollection: Schema.optional(Schema.Boolean),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
              statement_descriptor_suffix_kana: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
              statement_descriptor_suffix_kanji: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
              three_d_secure: Schema.optional(
                Schema.Struct({
                  ares_trans_status: Schema.optional(
                    Schema.Literals(["A", "C", "I", "N", "R", "U", "Y"]),
                  ),
                  cryptogram: Schema.String,
                  electronic_commerce_indicator: Schema.optional(
                    Schema.Literals(["01", "02", "05", "06", "07"]),
                  ),
                  exemption_indicator: Schema.optional(
                    Schema.Literals(["low_risk", "none"]),
                  ),
                  network_options: Schema.optional(
                    Schema.Struct({
                      cartes_bancaires: Schema.optional(
                        Schema.Struct({
                          cb_avalgo: Schema.Literals([
                            "0",
                            "1",
                            "2",
                            "3",
                            "4",
                            "A",
                          ]),
                          cb_exemption: Schema.optional(Schema.String),
                          cb_score: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                  requestor_challenge_indicator: Schema.optional(Schema.String),
                  transaction_id: Schema.String,
                  version: Schema.Literals([
                    "1.0.2",
                    "2.1.0",
                    "2.2.0",
                    "2.3.0",
                    "2.3.1",
                  ]),
                }),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        card_present: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(
                Schema.Literals(["manual", "manual_preferred"]),
              ),
              request_extended_authorization: Schema.optional(Schema.Boolean),
              request_incremental_authorization_support: Schema.optional(
                Schema.Boolean,
              ),
              routing: Schema.optional(
                Schema.Struct({
                  requested_priority: Schema.optional(
                    Schema.Literals(["domestic", "international"]),
                  ),
                }),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        cashapp: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        crypto: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        customer_balance: Schema.optional(
          Schema.Union([
            Schema.Struct({
              bank_transfer: Schema.optional(
                Schema.Struct({
                  eu_bank_transfer: Schema.optional(
                    Schema.Struct({
                      country: Schema.String,
                    }),
                  ),
                  requested_address_types: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "aba",
                        "iban",
                        "sepa",
                        "sort_code",
                        "spei",
                        "swift",
                        "zengin",
                      ]),
                    ),
                  ),
                  type: Schema.Literals([
                    "eu_bank_transfer",
                    "gb_bank_transfer",
                    "jp_bank_transfer",
                    "mx_bank_transfer",
                    "us_bank_transfer",
                  ]),
                }),
              ),
              funding_type: Schema.optional(Schema.Literals(["bank_transfer"])),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        eps: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        fpx: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        giropay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        grabpay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        ideal: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        interac_present: Schema.optional(
          Schema.Union([Schema.Struct({}), Schema.Literals([""])]),
        ),
        kakao_pay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        klarna: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              on_demand: Schema.optional(
                Schema.Struct({
                  average_amount: Schema.optional(Schema.Number),
                  maximum_amount: Schema.optional(Schema.Number),
                  minimum_amount: Schema.optional(Schema.Number),
                  purchase_interval: Schema.optional(
                    Schema.Literals(["day", "month", "week", "year"]),
                  ),
                  purchase_interval_count: Schema.optional(Schema.Number),
                }),
              ),
              preferred_locale: Schema.optional(
                Schema.Literals([
                  "cs-CZ",
                  "da-DK",
                  "de-AT",
                  "de-CH",
                  "de-DE",
                  "el-GR",
                  "en-AT",
                  "en-AU",
                  "en-BE",
                  "en-CA",
                  "en-CH",
                  "en-CZ",
                  "en-DE",
                  "en-DK",
                  "en-ES",
                  "en-FI",
                  "en-FR",
                  "en-GB",
                  "en-GR",
                  "en-IE",
                  "en-IT",
                  "en-NL",
                  "en-NO",
                  "en-NZ",
                  "en-PL",
                  "en-PT",
                  "en-RO",
                  "en-SE",
                  "en-US",
                  "es-ES",
                  "es-US",
                  "fi-FI",
                  "fr-BE",
                  "fr-CA",
                  "fr-CH",
                  "fr-FR",
                  "it-CH",
                  "it-IT",
                  "nb-NO",
                  "nl-BE",
                  "nl-NL",
                  "pl-PL",
                  "pt-PT",
                  "ro-RO",
                  "sv-FI",
                  "sv-SE",
                ]),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["none", "off_session", "on_session"]),
              ),
              subscriptions: Schema.optional(
                Schema.Union([
                  Schema.Array(
                    Schema.Struct({
                      interval: Schema.Literals([
                        "day",
                        "month",
                        "week",
                        "year",
                      ]),
                      interval_count: Schema.optional(Schema.Number),
                      name: Schema.optional(Schema.String),
                      next_billing: Schema.optional(
                        Schema.Struct({
                          amount: Schema.Number,
                          date: Schema.String,
                        }),
                      ),
                      reference: Schema.String,
                    }),
                  ),
                  Schema.Literals([""]),
                ]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        konbini: Schema.optional(
          Schema.Union([
            Schema.Struct({
              confirmation_number: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
              expires_after_days: Schema.optional(
                Schema.Union([Schema.Number, Schema.Literals([""])]),
              ),
              expires_at: Schema.optional(
                Schema.Union([Schema.Number, Schema.Literals([""])]),
              ),
              product_description: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        kr_card: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        link: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              persistent_token: Schema.optional(Schema.String),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        mb_way: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        mobilepay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        multibanco: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        naver_pay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        nz_bank_account: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
              target_date: Schema.optional(Schema.String),
            }),
            Schema.Literals([""]),
          ]),
        ),
        oxxo: Schema.optional(
          Schema.Union([
            Schema.Struct({
              expires_after_days: Schema.optional(Schema.Number),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        p24: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
              tos_shown_and_accepted: Schema.optional(Schema.Boolean),
            }),
            Schema.Literals([""]),
          ]),
        ),
        pay_by_bank: Schema.optional(
          Schema.Union([Schema.Struct({}), Schema.Literals([""])]),
        ),
        payco: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        paynow: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        paypal: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              preferred_locale: Schema.optional(
                Schema.Literals([
                  "cs-CZ",
                  "da-DK",
                  "de-AT",
                  "de-DE",
                  "de-LU",
                  "el-GR",
                  "en-GB",
                  "en-US",
                  "es-ES",
                  "fi-FI",
                  "fr-BE",
                  "fr-FR",
                  "fr-LU",
                  "hu-HU",
                  "it-IT",
                  "nl-BE",
                  "nl-NL",
                  "pl-PL",
                  "pt-PT",
                  "sk-SK",
                  "sv-SE",
                ]),
              ),
              reference: Schema.optional(Schema.String),
              risk_correlation_id: Schema.optional(Schema.String),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        payto: Schema.optional(
          Schema.Union([
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  amount: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Literals([""])]),
                  ),
                  amount_type: Schema.optional(
                    Schema.Literals(["", "fixed", "maximum"]),
                  ),
                  end_date: Schema.optional(
                    Schema.Union([Schema.String, Schema.Literals([""])]),
                  ),
                  payment_schedule: Schema.optional(
                    Schema.Literals([
                      "",
                      "adhoc",
                      "annual",
                      "daily",
                      "fortnightly",
                      "monthly",
                      "quarterly",
                      "semi_annual",
                      "weekly",
                    ]),
                  ),
                  payments_per_period: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Literals([""])]),
                  ),
                  purpose: Schema.optional(
                    Schema.Literals([
                      "",
                      "dependant_support",
                      "government",
                      "loan",
                      "mortgage",
                      "other",
                      "pension",
                      "personal",
                      "retail",
                      "salary",
                      "tax",
                      "utility",
                    ]),
                  ),
                }),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        pix: Schema.optional(
          Schema.Union([
            Schema.Struct({
              amount_includes_iof: Schema.optional(
                Schema.Literals(["always", "never"]),
              ),
              expires_after_seconds: Schema.optional(Schema.Number),
              expires_at: Schema.optional(Schema.Number),
              mandate_options: Schema.optional(
                Schema.Struct({
                  amount: Schema.optional(Schema.Number),
                  amount_includes_iof: Schema.optional(
                    Schema.Literals(["always", "never"]),
                  ),
                  amount_type: Schema.optional(
                    Schema.Literals(["fixed", "maximum"]),
                  ),
                  currency: Schema.optional(Schema.String),
                  end_date: Schema.optional(Schema.String),
                  payment_schedule: Schema.optional(
                    Schema.Literals([
                      "halfyearly",
                      "monthly",
                      "quarterly",
                      "weekly",
                      "yearly",
                    ]),
                  ),
                  reference: Schema.optional(Schema.String),
                  start_date: Schema.optional(Schema.String),
                }),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        promptpay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        revolut_pay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        samsung_pay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        satispay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        scalapay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        sepa_debit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  reference_prefix: Schema.optional(
                    Schema.Union([Schema.String, Schema.Literals([""])]),
                  ),
                }),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
              target_date: Schema.optional(Schema.String),
            }),
            Schema.Literals([""]),
          ]),
        ),
        sofort: Schema.optional(
          Schema.Union([
            Schema.Struct({
              preferred_language: Schema.optional(
                Schema.Literals(["", "de", "en", "es", "fr", "it", "nl", "pl"]),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        sunbit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              capture_method: Schema.optional(Schema.Literals(["", "manual"])),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        swish: Schema.optional(
          Schema.Union([
            Schema.Struct({
              reference: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        twint: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(
                Schema.Literals(["none", "off_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        upi: Schema.optional(
          Schema.Union([
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  amount: Schema.optional(Schema.Number),
                  amount_type: Schema.optional(
                    Schema.Literals(["fixed", "maximum"]),
                  ),
                  description: Schema.optional(Schema.String),
                  end_date: Schema.optional(Schema.Number),
                }),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        us_bank_account: Schema.optional(
          Schema.Union([
            Schema.Struct({
              financial_connections: Schema.optional(
                Schema.Struct({
                  filters: Schema.optional(
                    Schema.Struct({
                      account_subcategories: Schema.optional(
                        Schema.Array(Schema.Literals(["checking", "savings"])),
                      ),
                    }),
                  ),
                  permissions: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "balances",
                        "ownership",
                        "payment_method",
                        "transactions",
                      ]),
                    ),
                  ),
                  prefetch: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "balances",
                        "ownership",
                        "transactions",
                      ]),
                    ),
                  ),
                  return_url: Schema.optional(Schema.String),
                }),
              ),
              mandate_options: Schema.optional(
                Schema.Struct({
                  collection_method: Schema.optional(
                    Schema.Literals(["", "paper"]),
                  ),
                }),
              ),
              networks: Schema.optional(
                Schema.Struct({
                  requested: Schema.optional(
                    Schema.Array(Schema.Literals(["ach", "us_domestic_wire"])),
                  ),
                }),
              ),
              setup_future_usage: Schema.optional(
                Schema.Literals(["", "none", "off_session", "on_session"]),
              ),
              target_date: Schema.optional(Schema.String),
              transaction_purpose: Schema.optional(
                Schema.Literals([
                  "",
                  "goods",
                  "other",
                  "services",
                  "unspecified",
                ]),
              ),
              verification_method: Schema.optional(
                Schema.Literals(["automatic", "instant", "microdeposits"]),
              ),
            }),
            Schema.Literals([""]),
          ]),
        ),
        wechat_pay: Schema.optional(
          Schema.Union([
            Schema.Struct({
              app_id: Schema.optional(Schema.String),
              client: Schema.optional(
                Schema.Literals(["android", "ios", "web"]),
              ),
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
        zip: Schema.optional(
          Schema.Union([
            Schema.Struct({
              setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            }),
            Schema.Literals([""]),
          ]),
        ),
      }),
    ),
    payment_method_types: Schema.optional(Schema.Array(Schema.String)),
    receipt_email: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    setup_future_usage: Schema.optional(
      Schema.Literals(["", "off_session", "on_session"]),
    ),
    shipping: Schema.optional(
      Schema.Union([
        Schema.Struct({
          address: Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
          carrier: Schema.optional(Schema.String),
          name: Schema.String,
          phone: Schema.optional(Schema.String),
          tracking_number: Schema.optional(Schema.String),
        }),
        Schema.Literals([""]),
      ]),
    ),
    statement_descriptor: Schema.optional(Schema.String),
    statement_descriptor_suffix: Schema.optional(Schema.String),
    transfer_data: Schema.optional(
      Schema.Struct({
        amount: Schema.optional(Schema.Number),
        description: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Union([
            Schema.Record(Schema.String, Schema.String),
            Schema.Literals([""]),
          ]),
        ),
        payment_data: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            metadata: Schema.optional(
              Schema.Union([
                Schema.Record(Schema.String, Schema.String),
                Schema.Literals([""]),
              ]),
            ),
          }),
        ),
      }),
    ),
    transfer_group: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_intents/{intent}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostPaymentIntentsIntentInput>;

// Output Schema
export interface PostPaymentIntentsIntentOutput {
  amount: number;
  amount_capturable: number;
  amount_details?: {
    discount_amount?: number;
    error?: {
      code:
        | "amount_details_amount_mismatch"
        | "amount_details_tax_shipping_discount_greater_than_amount"
        | null;
      message: string | null;
    };
    line_items?: {
      data: {
        discount_amount: number | null;
        id: string;
        object: "payment_intent_amount_details_line_item";
        payment_method_options: {
          card?: { commodity_code: string | null };
          card_present?: { commodity_code: string | null };
          klarna?: {
            image_url: string | null;
            product_url: string | null;
            reference: string | null;
            subscription_reference: string | null;
          };
          paypal?: {
            category?: "digital_goods" | "donation" | "physical_goods";
            description?: string;
            sold_by?: string;
          };
        } | null;
        product_code: string | null;
        product_name: string;
        quantity: number;
        tax: { total_tax_amount: number } | null;
        unit_cost: number;
        unit_of_measure: string | null;
      }[];
      has_more: boolean;
      object: "list";
      url: string;
    };
    shipping?: {
      amount: number | null;
      from_postal_code: string | null;
      to_postal_code: string | null;
    };
    tax?: { total_tax_amount: number | null };
    tip?: { amount?: number };
  };
  amount_received: number;
  application:
    | string
    | { id: string; name: string | null; object: "application" }
    | null;
  application_fee_amount: number | null;
  automatic_payment_methods: {
    allow_redirects?: "always" | "never";
    enabled: boolean;
  } | null;
  canceled_at: number | null;
  cancellation_reason:
    | "abandoned"
    | "automatic"
    | "duplicate"
    | "expired"
    | "failed_invoice"
    | "fraudulent"
    | "requested_by_customer"
    | "void_invoice"
    | null;
  capture_method: "automatic" | "automatic_async" | "manual";
  client_secret: Redacted.Redacted<string> | null;
  confirmation_method: "automatic" | "manual";
  created: number;
  currency: string;
  customer: unknown;
  customer_account: string | null;
  description: string | null;
  excluded_payment_method_types:
    | (
        | "acss_debit"
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "amazon_pay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "billie"
        | "bizum"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "crypto"
        | "customer_balance"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "kakao_pay"
        | "klarna"
        | "konbini"
        | "kr_card"
        | "mb_way"
        | "mobilepay"
        | "multibanco"
        | "naver_pay"
        | "nz_bank_account"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "payco"
        | "paynow"
        | "paypal"
        | "payto"
        | "pix"
        | "promptpay"
        | "revolut_pay"
        | "samsung_pay"
        | "satispay"
        | "scalapay"
        | "sepa_debit"
        | "sofort"
        | "sunbit"
        | "swish"
        | "twint"
        | "upi"
        | "us_bank_account"
        | "wechat_pay"
        | "zip"
      )[]
    | null;
  hooks?: { inputs?: { tax?: { calculation: string } } };
  id: string;
  last_payment_error: unknown;
  latest_charge: unknown;
  livemode: boolean;
  managed_payments: { enabled: boolean } | null;
  metadata: Record<string, string>;
  next_action: unknown;
  object: "payment_intent";
  on_behalf_of: unknown;
  payment_details?: {
    customer_reference: string | null;
    order_reference: string | null;
  };
  payment_method: unknown;
  payment_method_configuration_details: {
    id: string;
    parent: string | null;
  } | null;
  payment_method_options: unknown;
  payment_method_types: string[];
  presentment_details?: {
    presentment_amount: number;
    presentment_currency: string;
  };
  processing: {
    card?: {
      customer_notification?: {
        approval_requested: boolean | null;
        completes_at: number | null;
      };
    };
    type: "card";
  } | null;
  receipt_email: string | null;
  review:
    | string
    | {
        billing_zip: string | null;
        charge: unknown;
        closed_reason:
          | "acknowledged"
          | "approved"
          | "canceled"
          | "disputed"
          | "payment_never_settled"
          | "redacted"
          | "refunded"
          | "refunded_as_fraud"
          | null;
        created: number;
        id: string;
        ip_address: string | null;
        ip_address_location: {
          city: string | null;
          country: string | null;
          latitude: number | null;
          longitude: number | null;
          region: string | null;
        } | null;
        livemode: boolean;
        object: "review";
        open: boolean;
        opened_reason: "manual" | "rule";
        payment_intent?: unknown;
        reason: string;
        session: {
          browser: string | null;
          device: string | null;
          platform: string | null;
          version: string | null;
        } | null;
      }
    | null;
  setup_future_usage: "off_session" | "on_session" | null;
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
  source:
    | string
    | unknown
    | {
        currency?: string | null;
        deleted: true;
        id: string;
        object: "bank_account";
      }
    | { currency?: string | null; deleted: true; id: string; object: "card" }
    | null;
  statement_descriptor: string | null;
  statement_descriptor_suffix: string | null;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_capture"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  transfer_data?: {
    amount?: number;
    description?: string;
    destination: unknown;
    metadata?: Record<string, string>;
    payment_data?: { description?: string; metadata?: Record<string, string> };
  } | null;
  transfer_group: string | null;
}
export const PostPaymentIntentsIntentOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_capturable: Schema.Number,
    amount_details: Schema.optional(
      Schema.Struct({
        discount_amount: Schema.optional(Schema.Number),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.NullOr(
              Schema.Literals([
                "amount_details_amount_mismatch",
                "amount_details_tax_shipping_discount_greater_than_amount",
              ]),
            ),
            message: Schema.NullOr(Schema.String),
          }),
        ),
        line_items: Schema.optional(
          Schema.Struct({
            data: Schema.Array(
              Schema.Struct({
                discount_amount: Schema.NullOr(Schema.Number),
                id: Schema.String,
                object: Schema.Literals([
                  "payment_intent_amount_details_line_item",
                ]),
                payment_method_options: Schema.NullOr(
                  Schema.Struct({
                    card: Schema.optional(
                      Schema.Struct({
                        commodity_code: Schema.NullOr(Schema.String),
                      }),
                    ),
                    card_present: Schema.optional(
                      Schema.Struct({
                        commodity_code: Schema.NullOr(Schema.String),
                      }),
                    ),
                    klarna: Schema.optional(
                      Schema.Struct({
                        image_url: Schema.NullOr(Schema.String),
                        product_url: Schema.NullOr(Schema.String),
                        reference: Schema.NullOr(Schema.String),
                        subscription_reference: Schema.NullOr(Schema.String),
                      }),
                    ),
                    paypal: Schema.optional(
                      Schema.Struct({
                        category: Schema.optional(
                          Schema.Literals([
                            "digital_goods",
                            "donation",
                            "physical_goods",
                          ]),
                        ),
                        description: Schema.optional(Schema.String),
                        sold_by: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
                product_code: Schema.NullOr(Schema.String),
                product_name: Schema.String,
                quantity: Schema.Number,
                tax: Schema.NullOr(
                  Schema.Struct({
                    total_tax_amount: Schema.Number,
                  }),
                ),
                unit_cost: Schema.Number,
                unit_of_measure: Schema.NullOr(Schema.String),
              }),
            ),
            has_more: Schema.Boolean,
            object: Schema.Literals(["list"]),
            url: Schema.String,
          }),
        ),
        shipping: Schema.optional(
          Schema.Struct({
            amount: Schema.NullOr(Schema.Number),
            from_postal_code: Schema.NullOr(Schema.String),
            to_postal_code: Schema.NullOr(Schema.String),
          }),
        ),
        tax: Schema.optional(
          Schema.Struct({
            total_tax_amount: Schema.NullOr(Schema.Number),
          }),
        ),
        tip: Schema.optional(
          Schema.Struct({
            amount: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    amount_received: Schema.Number,
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
    application_fee_amount: Schema.NullOr(Schema.Number),
    automatic_payment_methods: Schema.NullOr(
      Schema.Struct({
        allow_redirects: Schema.optional(Schema.Literals(["always", "never"])),
        enabled: Schema.Boolean,
      }),
    ),
    canceled_at: Schema.NullOr(Schema.Number),
    cancellation_reason: Schema.NullOr(
      Schema.Literals([
        "abandoned",
        "automatic",
        "duplicate",
        "expired",
        "failed_invoice",
        "fraudulent",
        "requested_by_customer",
        "void_invoice",
      ]),
    ),
    capture_method: Schema.Literals(["automatic", "automatic_async", "manual"]),
    client_secret: SensitiveOutputNullableString,
    confirmation_method: Schema.Literals(["automatic", "manual"]),
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    excluded_payment_method_types: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "acss_debit",
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "amazon_pay",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "bizum",
          "blik",
          "boleto",
          "card",
          "cashapp",
          "crypto",
          "customer_balance",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "mb_way",
          "mobilepay",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "oxxo",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "payto",
          "pix",
          "promptpay",
          "revolut_pay",
          "samsung_pay",
          "satispay",
          "scalapay",
          "sepa_debit",
          "sofort",
          "sunbit",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip",
        ]),
      ),
    ),
    hooks: Schema.optional(
      Schema.Struct({
        inputs: Schema.optional(
          Schema.Struct({
            tax: Schema.optional(
              Schema.Struct({
                calculation: Schema.String,
              }),
            ),
          }),
        ),
      }),
    ),
    id: Schema.String,
    last_payment_error: Schema.Unknown,
    latest_charge: Schema.Unknown,
    livemode: Schema.Boolean,
    managed_payments: Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    next_action: Schema.Unknown,
    object: Schema.Literals(["payment_intent"]),
    on_behalf_of: Schema.Unknown,
    payment_details: Schema.optional(
      Schema.Struct({
        customer_reference: Schema.NullOr(Schema.String),
        order_reference: Schema.NullOr(Schema.String),
      }),
    ),
    payment_method: Schema.Unknown,
    payment_method_configuration_details: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        parent: Schema.NullOr(Schema.String),
      }),
    ),
    payment_method_options: Schema.Unknown,
    payment_method_types: Schema.Array(Schema.String),
    presentment_details: Schema.optional(
      Schema.Struct({
        presentment_amount: Schema.Number,
        presentment_currency: Schema.String,
      }),
    ),
    processing: Schema.NullOr(
      Schema.Struct({
        card: Schema.optional(
          Schema.Struct({
            customer_notification: Schema.optional(
              Schema.Struct({
                approval_requested: Schema.NullOr(Schema.Boolean),
                completes_at: Schema.NullOr(Schema.Number),
              }),
            ),
          }),
        ),
        type: Schema.Literals(["card"]),
      }),
    ),
    receipt_email: Schema.NullOr(Schema.String),
    review: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          billing_zip: Schema.NullOr(Schema.String),
          charge: Schema.Unknown,
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
    setup_future_usage: Schema.NullOr(
      Schema.Literals(["off_session", "on_session"]),
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
    source: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Unknown,
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
    statement_descriptor: Schema.NullOr(Schema.String),
    statement_descriptor_suffix: Schema.NullOr(Schema.String),
    status: Schema.Literals([
      "canceled",
      "processing",
      "requires_action",
      "requires_capture",
      "requires_confirmation",
      "requires_payment_method",
      "succeeded",
    ]),
    transfer_data: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          amount: Schema.optional(Schema.Number),
          description: Schema.optional(Schema.String),
          destination: Schema.Unknown,
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          payment_data: Schema.optional(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        }),
      ),
    ),
    transfer_group: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<PostPaymentIntentsIntentOutput>;

// The operation
/**
 * Update a PaymentIntent
 *
 * <p>Updates properties on a PaymentIntent object without confirming.</p>
 * <p>Depending on which properties you update, you might need to confirm the
 * PaymentIntent again. For example, updating the <code>payment_method</code>
 * always requires you to confirm the PaymentIntent again. If you prefer to
 * update and confirm at the same time, we recommend updating properties through
 * the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>
 */
export const PostPaymentIntentsIntent = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostPaymentIntentsIntentInput,
  outputSchema: PostPaymentIntentsIntentOutput,
}));
