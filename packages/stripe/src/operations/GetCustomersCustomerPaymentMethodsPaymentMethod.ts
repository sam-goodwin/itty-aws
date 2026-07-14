import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetCustomersCustomerPaymentMethodsPaymentMethodInput {
  customer: string;
  payment_method: string;
  expand?: string;
}
export const GetCustomersCustomerPaymentMethodsPaymentMethodInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    payment_method: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}/payment_methods/{payment_method}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCustomersCustomerPaymentMethodsPaymentMethodInput>;

// Output Schema
export interface GetCustomersCustomerPaymentMethodsPaymentMethodOutput {
  acss_debit?: {
    bank_name: string | null;
    fingerprint: string | null;
    institution_number: string | null;
    last4: string | null;
    transit_number: string | null;
  };
  affirm?: {};
  afterpay_clearpay?: {};
  alipay?: {};
  allow_redisplay?: "always" | "limited" | "unspecified";
  alma?: {};
  amazon_pay?: {};
  au_becs_debit?: {
    bsb_number: string | null;
    fingerprint: string | null;
    last4: string | null;
  };
  bacs_debit?: {
    fingerprint: string | null;
    last4: string | null;
    sort_code: string | null;
  };
  bancontact?: {};
  billie?: {};
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
  bizum?: { buyer_id?: string | null };
  blik?: { buyer_id?: string | null };
  boleto?: { tax_id: string };
  card?: {
    brand: string;
    checks: {
      address_line1_check: string | null;
      address_postal_code_check: string | null;
      cvc_check: string | null;
    } | null;
    country: string | null;
    description?: string | null;
    display_brand: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding: string;
    generated_from: {
      charge: string | null;
      payment_method_details: {
        card_present?: {
          amount_authorized: number | null;
          brand: string | null;
          brand_product: string | null;
          capture_before?: number;
          cardholder_name: string | null;
          country: string | null;
          description?: string | null;
          emv_auth_data: string | null;
          exp_month: number;
          exp_year: number;
          fingerprint: string | null;
          funding: string | null;
          generated_card: string | null;
          iin?: string | null;
          incremental_authorization_supported: boolean;
          issuer?: string | null;
          last4: string | null;
          location?: string;
          network: string | null;
          network_transaction_id: string | null;
          offline: { stored_at: number | null; type: "deferred" | null } | null;
          overcapture_supported: boolean;
          preferred_locales: string[] | null;
          read_method:
            | "contact_emv"
            | "contactless_emv"
            | "contactless_magstripe_mode"
            | "magnetic_stripe_fallback"
            | "magnetic_stripe_track2"
            | null;
          reader?: string;
          receipt: {
            account_type?: "checking" | "credit" | "prepaid" | "unknown";
            application_cryptogram: string | null;
            application_preferred_name: string | null;
            authorization_code: string | null;
            authorization_response_code: string | null;
            cardholder_verification_method: string | null;
            dedicated_file_name: string | null;
            terminal_verification_results: string | null;
            transaction_status_information: string | null;
          } | null;
          wallet?: {
            type: "apple_pay" | "google_pay" | "samsung_pay" | "unknown";
          };
        };
        type: string;
      } | null;
      setup_attempt:
        | string
        | {
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
                generated_sepa_debit_mandate: unknown;
                iban_last4: string | null;
                preferred_language: "de" | "en" | "fr" | "nl" | null;
                verified_name: string | null;
              };
              boleto?: {};
              card?: {
                brand: string | null;
                checks: unknown;
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
                three_d_secure: unknown;
                wallet: unknown;
              };
              card_present?: { generated_card: unknown; offline: unknown };
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
                generated_sepa_debit_mandate: unknown;
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
                generated_sepa_debit_mandate: unknown;
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
          }
        | null;
    } | null;
    iin?: string | null;
    issuer?: string | null;
    last4: string;
    networks: { available: string[]; preferred: string | null } | null;
    regulated_status: "regulated" | "unregulated" | null;
    three_d_secure_usage: { supported: boolean } | null;
    wallet: {
      amex_express_checkout?: {};
      apple_pay?: {};
      dynamic_last4: string | null;
      google_pay?: {};
      link?: {};
      masterpass?: {
        billing_address: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
        } | null;
        email: string | null;
        name: string | null;
        shipping_address: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
        } | null;
      };
      samsung_pay?: {};
      type:
        | "amex_express_checkout"
        | "apple_pay"
        | "google_pay"
        | "link"
        | "masterpass"
        | "samsung_pay"
        | "visa_checkout";
      visa_checkout?: {
        billing_address: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
        } | null;
        email: string | null;
        name: string | null;
        shipping_address: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
        } | null;
      };
    } | null;
  };
  card_present?: {
    brand: string | null;
    brand_product: string | null;
    cardholder_name: string | null;
    country: string | null;
    description?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint: string | null;
    funding: string | null;
    iin?: string | null;
    issuer?: string | null;
    last4: string | null;
    networks: { available: string[]; preferred: string | null } | null;
    offline: { stored_at: number | null; type: "deferred" | null } | null;
    preferred_locales: string[] | null;
    read_method:
      | "contact_emv"
      | "contactless_emv"
      | "contactless_magstripe_mode"
      | "magnetic_stripe_fallback"
      | "magnetic_stripe_track2"
      | null;
    wallet?: { type: "apple_pay" | "google_pay" | "samsung_pay" | "unknown" };
  };
  cashapp?: { buyer_id: string | null; cashtag: string | null };
  created: number;
  crypto?: {};
  custom?: {
    display_name: string | null;
    logo: { content_type: string | null; url: string } | null;
    type: string;
  };
  customer: unknown;
  customer_account: string | null;
  customer_balance?: {};
  eps?: {
    bank:
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
      | "vr_bank_braunau"
      | null;
  };
  fpx?: {
    account_holder_type: "company" | "individual" | null;
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
  id: string;
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
  };
  interac_present?: {
    brand: string | null;
    cardholder_name: string | null;
    country: string | null;
    description?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint: string | null;
    funding: string | null;
    iin?: string | null;
    issuer?: string | null;
    last4: string | null;
    networks: { available: string[]; preferred: string | null } | null;
    preferred_locales: string[] | null;
    read_method:
      | "contact_emv"
      | "contactless_emv"
      | "contactless_magstripe_mode"
      | "magnetic_stripe_fallback"
      | "magnetic_stripe_track2"
      | null;
  };
  kakao_pay?: {};
  klarna?: {
    dob?: {
      day: number | null;
      month: number | null;
      year: number | null;
    } | null;
  };
  konbini?: {};
  kr_card?: {
    brand:
      | "bc"
      | "citi"
      | "hana"
      | "hyundai"
      | "jeju"
      | "jeonbuk"
      | "kakaobank"
      | "kbank"
      | "kdbbank"
      | "kookmin"
      | "kwangju"
      | "lotte"
      | "mg"
      | "nh"
      | "post"
      | "samsung"
      | "savingsbank"
      | "shinhan"
      | "shinhyup"
      | "suhyup"
      | "tossbank"
      | "woori"
      | null;
    last4: string | null;
  };
  link?: { email: string | null; persistent_token?: string };
  livemode: boolean;
  mb_way?: {};
  metadata: Record<string, string> | null;
  mobilepay?: {};
  multibanco?: {};
  naver_pay?: { buyer_id: string | null; funding: "card" | "points" };
  nz_bank_account?: {
    account_holder_name: string | null;
    bank_code: string;
    bank_name: string;
    branch_code: string;
    last4: string;
    suffix: string | null;
  };
  object: "payment_method";
  oxxo?: {};
  p24?: {
    bank:
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
      | "volkswagen_bank"
      | null;
  };
  pay_by_bank?: {};
  payco?: {};
  paynow?: {};
  paypal?: {
    country: string | null;
    payer_email: string | null;
    payer_id: string | null;
  };
  payto?: {
    bsb_number: string | null;
    last4: string | null;
    pay_id: string | null;
  };
  pix?: { fingerprint?: string | null };
  promptpay?: {};
  radar_options?: { session?: string };
  revolut_pay?: {};
  samsung_pay?: {};
  satispay?: {};
  scalapay?: {};
  sepa_debit?: {
    bank_code: string | null;
    branch_code: string | null;
    country: string | null;
    fingerprint: string | null;
    generated_from: {
      charge: unknown;
      setup_attempt:
        | string
        | {
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
                generated_sepa_debit_mandate: unknown;
                iban_last4: string | null;
                preferred_language: "de" | "en" | "fr" | "nl" | null;
                verified_name: string | null;
              };
              boleto?: {};
              card?: {
                brand: string | null;
                checks: unknown;
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
                three_d_secure: unknown;
                wallet: unknown;
              };
              card_present?: { generated_card: unknown; offline: unknown };
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
                generated_sepa_debit_mandate: unknown;
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
                generated_sepa_debit_mandate: unknown;
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
          }
        | null;
    } | null;
    last4: string | null;
  };
  sofort?: { country: string | null };
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
    | "card"
    | "card_present"
    | "cashapp"
    | "crypto"
    | "custom"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "interac_present"
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
  upi?: { vpa: string | null };
  us_bank_account?: {
    account_holder_type: "company" | "individual" | null;
    account_type: "checking" | "savings" | null;
    bank_name: string | null;
    financial_connections_account: string | null;
    fingerprint: string | null;
    last4: string | null;
    networks: {
      preferred: string | null;
      supported: ("ach" | "us_domestic_wire")[];
    } | null;
    routing_number: string | null;
    status_details: {
      blocked?: {
        network_code:
          | "R02"
          | "R03"
          | "R04"
          | "R05"
          | "R07"
          | "R08"
          | "R10"
          | "R11"
          | "R16"
          | "R20"
          | "R29"
          | "R31"
          | null;
        reason:
          | "bank_account_closed"
          | "bank_account_frozen"
          | "bank_account_invalid_details"
          | "bank_account_restricted"
          | "bank_account_unusable"
          | "debit_not_authorized"
          | "tokenized_account_number_deactivated"
          | null;
      };
    } | null;
  };
  wechat_pay?: {};
  zip?: {};
}
export const GetCustomersCustomerPaymentMethodsPaymentMethodOutput =
  /*@__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(
      Schema.Struct({
        bank_name: Schema.NullOr(Schema.String),
        fingerprint: Schema.NullOr(Schema.String),
        institution_number: Schema.NullOr(Schema.String),
        last4: Schema.NullOr(Schema.String),
        transit_number: Schema.NullOr(Schema.String),
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
        bsb_number: Schema.NullOr(Schema.String),
        fingerprint: Schema.NullOr(Schema.String),
        last4: Schema.NullOr(Schema.String),
      }),
    ),
    bacs_debit: Schema.optional(
      Schema.Struct({
        fingerprint: Schema.NullOr(Schema.String),
        last4: Schema.NullOr(Schema.String),
        sort_code: Schema.NullOr(Schema.String),
      }),
    ),
    bancontact: Schema.optional(Schema.Struct({})),
    billie: Schema.optional(Schema.Struct({})),
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
    bizum: Schema.optional(
      Schema.Struct({
        buyer_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    blik: Schema.optional(
      Schema.Struct({
        buyer_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    boleto: Schema.optional(
      Schema.Struct({
        tax_id: Schema.String,
      }),
    ),
    card: Schema.optional(
      Schema.Struct({
        brand: Schema.String,
        checks: Schema.NullOr(
          Schema.Struct({
            address_line1_check: Schema.NullOr(Schema.String),
            address_postal_code_check: Schema.NullOr(Schema.String),
            cvc_check: Schema.NullOr(Schema.String),
          }),
        ),
        country: Schema.NullOr(Schema.String),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        display_brand: Schema.NullOr(Schema.String),
        exp_month: Schema.Number,
        exp_year: Schema.Number,
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
        funding: Schema.String,
        generated_from: Schema.NullOr(
          Schema.Struct({
            charge: Schema.NullOr(Schema.String),
            payment_method_details: Schema.NullOr(
              Schema.Struct({
                card_present: Schema.optional(
                  Schema.Struct({
                    amount_authorized: Schema.NullOr(Schema.Number),
                    brand: Schema.NullOr(Schema.String),
                    brand_product: Schema.NullOr(Schema.String),
                    capture_before: Schema.optional(Schema.Number),
                    cardholder_name: Schema.NullOr(Schema.String),
                    country: Schema.NullOr(Schema.String),
                    description: Schema.optional(Schema.NullOr(Schema.String)),
                    emv_auth_data: Schema.NullOr(Schema.String),
                    exp_month: Schema.Number,
                    exp_year: Schema.Number,
                    fingerprint: Schema.NullOr(Schema.String),
                    funding: Schema.NullOr(Schema.String),
                    generated_card: Schema.NullOr(Schema.String),
                    iin: Schema.optional(Schema.NullOr(Schema.String)),
                    incremental_authorization_supported: Schema.Boolean,
                    issuer: Schema.optional(Schema.NullOr(Schema.String)),
                    last4: Schema.NullOr(Schema.String),
                    location: Schema.optional(Schema.String),
                    network: Schema.NullOr(Schema.String),
                    network_transaction_id: Schema.NullOr(Schema.String),
                    offline: Schema.NullOr(
                      Schema.Struct({
                        stored_at: Schema.NullOr(Schema.Number),
                        type: Schema.NullOr(Schema.Literals(["deferred"])),
                      }),
                    ),
                    overcapture_supported: Schema.Boolean,
                    preferred_locales: Schema.NullOr(
                      Schema.Array(Schema.String),
                    ),
                    read_method: Schema.NullOr(
                      Schema.Literals([
                        "contact_emv",
                        "contactless_emv",
                        "contactless_magstripe_mode",
                        "magnetic_stripe_fallback",
                        "magnetic_stripe_track2",
                      ]),
                    ),
                    reader: Schema.optional(Schema.String),
                    receipt: Schema.NullOr(
                      Schema.Struct({
                        account_type: Schema.optional(
                          Schema.Literals([
                            "checking",
                            "credit",
                            "prepaid",
                            "unknown",
                          ]),
                        ),
                        application_cryptogram: Schema.NullOr(Schema.String),
                        application_preferred_name: Schema.NullOr(
                          Schema.String,
                        ),
                        authorization_code: Schema.NullOr(Schema.String),
                        authorization_response_code: Schema.NullOr(
                          Schema.String,
                        ),
                        cardholder_verification_method: Schema.NullOr(
                          Schema.String,
                        ),
                        dedicated_file_name: Schema.NullOr(Schema.String),
                        terminal_verification_results: Schema.NullOr(
                          Schema.String,
                        ),
                        transaction_status_information: Schema.NullOr(
                          Schema.String,
                        ),
                      }),
                    ),
                    wallet: Schema.optional(
                      Schema.Struct({
                        type: Schema.Literals([
                          "apple_pay",
                          "google_pay",
                          "samsung_pay",
                          "unknown",
                        ]),
                      }),
                    ),
                  }),
                ),
                type: Schema.String,
              }),
            ),
            setup_attempt: Schema.Unknown,
          }),
        ),
        iin: Schema.optional(Schema.NullOr(Schema.String)),
        issuer: Schema.optional(Schema.NullOr(Schema.String)),
        last4: Schema.String,
        networks: Schema.NullOr(
          Schema.Struct({
            available: Schema.Array(Schema.String),
            preferred: Schema.NullOr(Schema.String),
          }),
        ),
        regulated_status: Schema.NullOr(
          Schema.Literals(["regulated", "unregulated"]),
        ),
        three_d_secure_usage: Schema.NullOr(
          Schema.Struct({
            supported: Schema.Boolean,
          }),
        ),
        wallet: Schema.NullOr(
          Schema.Struct({
            amex_express_checkout: Schema.optional(Schema.Struct({})),
            apple_pay: Schema.optional(Schema.Struct({})),
            dynamic_last4: Schema.NullOr(Schema.String),
            google_pay: Schema.optional(Schema.Struct({})),
            link: Schema.optional(Schema.Struct({})),
            masterpass: Schema.optional(
              Schema.Struct({
                billing_address: Schema.NullOr(
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
                shipping_address: Schema.NullOr(
                  Schema.Struct({
                    city: Schema.NullOr(Schema.String),
                    country: Schema.NullOr(Schema.String),
                    line1: Schema.NullOr(Schema.String),
                    line2: Schema.NullOr(Schema.String),
                    postal_code: Schema.NullOr(Schema.String),
                    state: Schema.NullOr(Schema.String),
                  }),
                ),
              }),
            ),
            samsung_pay: Schema.optional(Schema.Struct({})),
            type: Schema.Literals([
              "amex_express_checkout",
              "apple_pay",
              "google_pay",
              "link",
              "masterpass",
              "samsung_pay",
              "visa_checkout",
            ]),
            visa_checkout: Schema.optional(
              Schema.Struct({
                billing_address: Schema.NullOr(
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
                shipping_address: Schema.NullOr(
                  Schema.Struct({
                    city: Schema.NullOr(Schema.String),
                    country: Schema.NullOr(Schema.String),
                    line1: Schema.NullOr(Schema.String),
                    line2: Schema.NullOr(Schema.String),
                    postal_code: Schema.NullOr(Schema.String),
                    state: Schema.NullOr(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    card_present: Schema.optional(
      Schema.Struct({
        brand: Schema.NullOr(Schema.String),
        brand_product: Schema.NullOr(Schema.String),
        cardholder_name: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        exp_month: Schema.Number,
        exp_year: Schema.Number,
        fingerprint: Schema.NullOr(Schema.String),
        funding: Schema.NullOr(Schema.String),
        iin: Schema.optional(Schema.NullOr(Schema.String)),
        issuer: Schema.optional(Schema.NullOr(Schema.String)),
        last4: Schema.NullOr(Schema.String),
        networks: Schema.NullOr(
          Schema.Struct({
            available: Schema.Array(Schema.String),
            preferred: Schema.NullOr(Schema.String),
          }),
        ),
        offline: Schema.NullOr(
          Schema.Struct({
            stored_at: Schema.NullOr(Schema.Number),
            type: Schema.NullOr(Schema.Literals(["deferred"])),
          }),
        ),
        preferred_locales: Schema.NullOr(Schema.Array(Schema.String)),
        read_method: Schema.NullOr(
          Schema.Literals([
            "contact_emv",
            "contactless_emv",
            "contactless_magstripe_mode",
            "magnetic_stripe_fallback",
            "magnetic_stripe_track2",
          ]),
        ),
        wallet: Schema.optional(
          Schema.Struct({
            type: Schema.Literals([
              "apple_pay",
              "google_pay",
              "samsung_pay",
              "unknown",
            ]),
          }),
        ),
      }),
    ),
    cashapp: Schema.optional(
      Schema.Struct({
        buyer_id: Schema.NullOr(Schema.String),
        cashtag: Schema.NullOr(Schema.String),
      }),
    ),
    created: Schema.Number,
    crypto: Schema.optional(Schema.Struct({})),
    custom: Schema.optional(
      Schema.Struct({
        display_name: Schema.NullOr(Schema.String),
        logo: Schema.NullOr(
          Schema.Struct({
            content_type: Schema.NullOr(Schema.String),
            url: Schema.String,
          }),
        ),
        type: Schema.String,
      }),
    ),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_balance: Schema.optional(Schema.Struct({})),
    eps: Schema.optional(
      Schema.Struct({
        bank: Schema.NullOr(
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
        account_holder_type: Schema.NullOr(
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
    id: Schema.String,
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
      }),
    ),
    interac_present: Schema.optional(
      Schema.Struct({
        brand: Schema.NullOr(Schema.String),
        cardholder_name: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        exp_month: Schema.Number,
        exp_year: Schema.Number,
        fingerprint: Schema.NullOr(Schema.String),
        funding: Schema.NullOr(Schema.String),
        iin: Schema.optional(Schema.NullOr(Schema.String)),
        issuer: Schema.optional(Schema.NullOr(Schema.String)),
        last4: Schema.NullOr(Schema.String),
        networks: Schema.NullOr(
          Schema.Struct({
            available: Schema.Array(Schema.String),
            preferred: Schema.NullOr(Schema.String),
          }),
        ),
        preferred_locales: Schema.NullOr(Schema.Array(Schema.String)),
        read_method: Schema.NullOr(
          Schema.Literals([
            "contact_emv",
            "contactless_emv",
            "contactless_magstripe_mode",
            "magnetic_stripe_fallback",
            "magnetic_stripe_track2",
          ]),
        ),
      }),
    ),
    kakao_pay: Schema.optional(Schema.Struct({})),
    klarna: Schema.optional(
      Schema.Struct({
        dob: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              day: Schema.NullOr(Schema.Number),
              month: Schema.NullOr(Schema.Number),
              year: Schema.NullOr(Schema.Number),
            }),
          ),
        ),
      }),
    ),
    konbini: Schema.optional(Schema.Struct({})),
    kr_card: Schema.optional(
      Schema.Struct({
        brand: Schema.NullOr(
          Schema.Literals([
            "bc",
            "citi",
            "hana",
            "hyundai",
            "jeju",
            "jeonbuk",
            "kakaobank",
            "kbank",
            "kdbbank",
            "kookmin",
            "kwangju",
            "lotte",
            "mg",
            "nh",
            "post",
            "samsung",
            "savingsbank",
            "shinhan",
            "shinhyup",
            "suhyup",
            "tossbank",
            "woori",
          ]),
        ),
        last4: Schema.NullOr(Schema.String),
      }),
    ),
    link: Schema.optional(
      Schema.Struct({
        email: Schema.NullOr(Schema.String),
        persistent_token: Schema.optional(Schema.String),
      }),
    ),
    livemode: Schema.Boolean,
    mb_way: Schema.optional(Schema.Struct({})),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    mobilepay: Schema.optional(Schema.Struct({})),
    multibanco: Schema.optional(Schema.Struct({})),
    naver_pay: Schema.optional(
      Schema.Struct({
        buyer_id: Schema.NullOr(Schema.String),
        funding: Schema.Literals(["card", "points"]),
      }),
    ),
    nz_bank_account: Schema.optional(
      Schema.Struct({
        account_holder_name: Schema.NullOr(Schema.String),
        bank_code: Schema.String,
        bank_name: Schema.String,
        branch_code: Schema.String,
        last4: Schema.String,
        suffix: Schema.NullOr(Schema.String),
      }),
    ),
    object: Schema.Literals(["payment_method"]),
    oxxo: Schema.optional(Schema.Struct({})),
    p24: Schema.optional(
      Schema.Struct({
        bank: Schema.NullOr(
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
    paypal: Schema.optional(
      Schema.Struct({
        country: Schema.NullOr(Schema.String),
        payer_email: Schema.NullOr(Schema.String),
        payer_id: Schema.NullOr(Schema.String),
      }),
    ),
    payto: Schema.optional(
      Schema.Struct({
        bsb_number: Schema.NullOr(Schema.String),
        last4: Schema.NullOr(Schema.String),
        pay_id: Schema.NullOr(Schema.String),
      }),
    ),
    pix: Schema.optional(
      Schema.Struct({
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
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
        bank_code: Schema.NullOr(Schema.String),
        branch_code: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        fingerprint: Schema.NullOr(Schema.String),
        generated_from: Schema.NullOr(
          Schema.Struct({
            charge: Schema.Unknown,
            setup_attempt: Schema.Unknown,
          }),
        ),
        last4: Schema.NullOr(Schema.String),
      }),
    ),
    sofort: Schema.optional(
      Schema.Struct({
        country: Schema.NullOr(Schema.String),
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
      "card",
      "card_present",
      "cashapp",
      "crypto",
      "custom",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "grabpay",
      "ideal",
      "interac_present",
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
        vpa: Schema.NullOr(Schema.String),
      }),
    ),
    us_bank_account: Schema.optional(
      Schema.Struct({
        account_holder_type: Schema.NullOr(
          Schema.Literals(["company", "individual"]),
        ),
        account_type: Schema.NullOr(Schema.Literals(["checking", "savings"])),
        bank_name: Schema.NullOr(Schema.String),
        financial_connections_account: Schema.NullOr(Schema.String),
        fingerprint: Schema.NullOr(Schema.String),
        last4: Schema.NullOr(Schema.String),
        networks: Schema.NullOr(
          Schema.Struct({
            preferred: Schema.NullOr(Schema.String),
            supported: Schema.Array(
              Schema.Literals(["ach", "us_domestic_wire"]),
            ),
          }),
        ),
        routing_number: Schema.NullOr(Schema.String),
        status_details: Schema.NullOr(
          Schema.Struct({
            blocked: Schema.optional(
              Schema.Struct({
                network_code: Schema.NullOr(
                  Schema.Literals([
                    "R02",
                    "R03",
                    "R04",
                    "R05",
                    "R07",
                    "R08",
                    "R10",
                    "R11",
                    "R16",
                    "R20",
                    "R29",
                    "R31",
                  ]),
                ),
                reason: Schema.NullOr(
                  Schema.Literals([
                    "bank_account_closed",
                    "bank_account_frozen",
                    "bank_account_invalid_details",
                    "bank_account_restricted",
                    "bank_account_unusable",
                    "debit_not_authorized",
                    "tokenized_account_number_deactivated",
                  ]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    wechat_pay: Schema.optional(Schema.Struct({})),
    zip: Schema.optional(Schema.Struct({})),
  }) as unknown as Schema.Codec<GetCustomersCustomerPaymentMethodsPaymentMethodOutput>;

// The operation
/**
 * Retrieve a Customer's PaymentMethod
 *
 * <p>Retrieves a PaymentMethod object for a given Customer.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCustomersCustomerPaymentMethodsPaymentMethod =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetCustomersCustomerPaymentMethodsPaymentMethodInput,
    outputSchema: GetCustomersCustomerPaymentMethodsPaymentMethodOutput,
  }));
