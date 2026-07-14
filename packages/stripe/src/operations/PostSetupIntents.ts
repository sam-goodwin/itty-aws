import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostSetupIntentsInput {
  attach_to_self?: boolean;
  automatic_payment_methods?: {
    allow_redirects?: "always" | "never";
    enabled: boolean;
  };
  confirm?: boolean;
  confirmation_token?: string;
  customer?: string;
  customer_account?: string;
  description?: string;
  excluded_payment_method_types?: (
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
  )[];
  expand?: string[];
  flow_directions?: ("inbound" | "outbound")[];
  mandate_data?:
    | {
        customer_acceptance: {
          accepted_at?: number;
          offline?: {};
          online?: { ip_address: string; user_agent: string };
          type: "offline" | "online";
        };
      }
    | "";
  metadata?: Record<string, string>;
  on_behalf_of?: string;
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
    acss_debit?: {
      currency?: "cad" | "usd";
      mandate_options?: {
        custom_mandate_url?: string | "";
        default_for?: ("invoice" | "subscription")[];
        interval_description?: string;
        payment_schedule?: "combined" | "interval" | "sporadic";
        transaction_type?: "business" | "personal";
      };
      verification_method?: "automatic" | "instant" | "microdeposits";
    };
    amazon_pay?: {};
    bacs_debit?: { mandate_options?: { reference_prefix?: string | "" } };
    bizum?: {};
    card?: {
      mandate_options?: {
        amount: number;
        amount_type: "fixed" | "maximum";
        currency: string;
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
      request_three_d_secure?: "any" | "automatic" | "challenge";
      three_d_secure?: {
        ares_trans_status?: "A" | "C" | "I" | "N" | "R" | "U" | "Y";
        cryptogram?: string;
        electronic_commerce_indicator?: "01" | "02" | "05" | "06" | "07";
        network_options?: {
          cartes_bancaires?: {
            cb_avalgo: "0" | "1" | "2" | "3" | "4" | "A";
            cb_exemption?: string;
            cb_score?: number;
          };
        };
        requestor_challenge_indicator?: string;
        transaction_id?: string;
        version?: "1.0.2" | "2.1.0" | "2.2.0" | "2.3.0" | "2.3.1";
      };
    };
    card_present?: {};
    klarna?: {
      currency?: string;
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
      subscriptions?:
        | {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
            name?: string;
            next_billing: { amount: number; date: string };
            reference: string;
          }[]
        | "";
    };
    link?: { persistent_token?: string };
    paypal?: { billing_agreement_id?: string };
    payto?: {
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
        start_date?: string | "";
      };
    };
    pix?: {
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
    };
    sepa_debit?: { mandate_options?: { reference_prefix?: string | "" } };
    upi?: {
      mandate_options?: {
        amount?: number;
        amount_type?: "fixed" | "maximum";
        description?: string;
        end_date?: number;
      };
      setup_future_usage?: "" | "none" | "off_session" | "on_session";
    };
    us_bank_account?: {
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
      verification_method?: "automatic" | "instant" | "microdeposits";
    };
  };
  payment_method_types?: string[];
  return_url?: string;
  single_use?: { amount: number; currency: string };
  usage?: "off_session" | "on_session";
  use_stripe_sdk?: boolean;
}
export const PostSetupIntentsInput = /*@__PURE__*/ Schema.Struct({
  attach_to_self: Schema.optional(Schema.Boolean),
  automatic_payment_methods: Schema.optional(
    Schema.Struct({
      allow_redirects: Schema.optional(Schema.Literals(["always", "never"])),
      enabled: Schema.Boolean,
    }),
  ),
  confirm: Schema.optional(Schema.Boolean),
  confirmation_token: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  excluded_payment_method_types: Schema.optional(
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
  expand: Schema.optional(Schema.Array(Schema.String)),
  flow_directions: Schema.optional(
    Schema.Array(Schema.Literals(["inbound", "outbound"])),
  ),
  mandate_data: Schema.optional(
    Schema.Union([
      Schema.Struct({
        customer_acceptance: Schema.Struct({
          accepted_at: Schema.optional(Schema.Number),
          offline: Schema.optional(Schema.Struct({})),
          online: Schema.optional(
            Schema.Struct({
              ip_address: Schema.String,
              user_agent: Schema.String,
            }),
          ),
          type: Schema.Literals(["offline", "online"]),
        }),
      }),
      Schema.Literals([""]),
    ]),
  ),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  on_behalf_of: Schema.optional(Schema.String),
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
        Schema.Struct({
          currency: Schema.optional(Schema.Literals(["cad", "usd"])),
          mandate_options: Schema.optional(
            Schema.Struct({
              custom_mandate_url: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
              default_for: Schema.optional(
                Schema.Array(Schema.Literals(["invoice", "subscription"])),
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
          verification_method: Schema.optional(
            Schema.Literals(["automatic", "instant", "microdeposits"]),
          ),
        }),
      ),
      amazon_pay: Schema.optional(Schema.Struct({})),
      bacs_debit: Schema.optional(
        Schema.Struct({
          mandate_options: Schema.optional(
            Schema.Struct({
              reference_prefix: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
            }),
          ),
        }),
      ),
      bizum: Schema.optional(Schema.Struct({})),
      card: Schema.optional(
        Schema.Struct({
          mandate_options: Schema.optional(
            Schema.Struct({
              amount: Schema.Number,
              amount_type: Schema.Literals(["fixed", "maximum"]),
              currency: Schema.String,
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
          request_three_d_secure: Schema.optional(
            Schema.Literals(["any", "automatic", "challenge"]),
          ),
          three_d_secure: Schema.optional(
            Schema.Struct({
              ares_trans_status: Schema.optional(
                Schema.Literals(["A", "C", "I", "N", "R", "U", "Y"]),
              ),
              cryptogram: Schema.optional(Schema.String),
              electronic_commerce_indicator: Schema.optional(
                Schema.Literals(["01", "02", "05", "06", "07"]),
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
              transaction_id: Schema.optional(Schema.String),
              version: Schema.optional(
                Schema.Literals(["1.0.2", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]),
              ),
            }),
          ),
        }),
      ),
      card_present: Schema.optional(Schema.Struct({})),
      klarna: Schema.optional(
        Schema.Struct({
          currency: Schema.optional(Schema.String),
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
          subscriptions: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  interval: Schema.Literals(["day", "month", "week", "year"]),
                  interval_count: Schema.optional(Schema.Number),
                  name: Schema.optional(Schema.String),
                  next_billing: Schema.Struct({
                    amount: Schema.Number,
                    date: Schema.String,
                  }),
                  reference: Schema.String,
                }),
              ),
              Schema.Literals([""]),
            ]),
          ),
        }),
      ),
      link: Schema.optional(
        Schema.Struct({
          persistent_token: Schema.optional(Schema.String),
        }),
      ),
      paypal: Schema.optional(
        Schema.Struct({
          billing_agreement_id: Schema.optional(Schema.String),
        }),
      ),
      payto: Schema.optional(
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
              start_date: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
            }),
          ),
        }),
      ),
      pix: Schema.optional(
        Schema.Struct({
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
        }),
      ),
      sepa_debit: Schema.optional(
        Schema.Struct({
          mandate_options: Schema.optional(
            Schema.Struct({
              reference_prefix: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
            }),
          ),
        }),
      ),
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
          setup_future_usage: Schema.optional(
            Schema.Literals(["", "none", "off_session", "on_session"]),
          ),
        }),
      ),
      us_bank_account: Schema.optional(
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
                  Schema.Literals(["balances", "ownership", "transactions"]),
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
          verification_method: Schema.optional(
            Schema.Literals(["automatic", "instant", "microdeposits"]),
          ),
        }),
      ),
    }),
  ),
  payment_method_types: Schema.optional(Schema.Array(Schema.String)),
  return_url: Schema.optional(Schema.String),
  single_use: Schema.optional(
    Schema.Struct({
      amount: Schema.Number,
      currency: Schema.String,
    }),
  ),
  usage: Schema.optional(Schema.Literals(["off_session", "on_session"])),
  use_stripe_sdk: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/setup_intents",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostSetupIntentsInput>;

// Output Schema
export interface PostSetupIntentsOutput {
  application:
    | string
    | { id: string; name: string | null; object: "application" }
    | null;
  attach_to_self?: boolean;
  automatic_payment_methods: {
    allow_redirects?: "always" | "never";
    enabled: boolean | null;
  } | null;
  cancellation_reason:
    | "abandoned"
    | "duplicate"
    | "requested_by_customer"
    | null;
  client_secret: Redacted.Redacted<string> | null;
  created: number;
  customer: unknown;
  customer_account?: string | null;
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
  flow_directions?: ("inbound" | "outbound")[] | null;
  id: string;
  last_setup_error: unknown;
  latest_attempt: unknown;
  livemode: boolean;
  managed_payments?: { enabled: boolean } | null;
  mandate:
    | string
    | {
        customer_acceptance: {
          accepted_at: number | null;
          offline?: {};
          online?: { ip_address: string | null; user_agent: string | null };
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
            network_status: "accepted" | "pending" | "refused" | "revoked";
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
  metadata: Record<string, string> | null;
  next_action: {
    blik_authorize?: {};
    cashapp_handle_redirect_or_display_qr_code?: {
      hosted_instructions_url: string;
      mobile_auth_url: string;
      qr_code: {
        expires_at: number;
        image_url_png: string;
        image_url_svg: string;
      };
    };
    pix_display_qr_code?: {
      data: string;
      expires_at: number;
      hosted_instructions_url: string;
      image_url_png: string;
      image_url_svg: string;
    };
    redirect_to_url?: { return_url: string | null; url: string | null };
    type: string;
    upi_handle_redirect_or_display_qr_code?: {
      hosted_instructions_url: string;
      qr_code: {
        expires_at: number;
        image_url_png: string;
        image_url_svg: string;
      };
    };
    use_stripe_sdk?: unknown;
    verify_with_microdeposits?: {
      arrival_date: number;
      hosted_verification_url: string;
      microdeposit_type: "amounts" | "descriptor_code" | null;
    };
  } | null;
  object: "setup_intent";
  on_behalf_of: unknown;
  payment_method: unknown;
  payment_method_configuration_details: {
    id: string;
    parent: string | null;
  } | null;
  payment_method_options: {
    acss_debit?: {
      currency: "cad" | "usd" | null;
      mandate_options?: {
        custom_mandate_url?: string;
        default_for?: ("invoice" | "subscription")[];
        interval_description: string | null;
        payment_schedule: "combined" | "interval" | "sporadic" | null;
        transaction_type: "business" | "personal" | null;
      };
      verification_method?: "automatic" | "instant" | "microdeposits";
    };
    amazon_pay?: {};
    bacs_debit?: { mandate_options?: { reference_prefix?: string } };
    bizum?: {};
    card?: {
      mandate_options: {
        amount: number;
        amount_type: "fixed" | "maximum";
        currency: string;
        description: string | null;
        end_date: number | null;
        interval: "day" | "month" | "sporadic" | "week" | "year";
        interval_count: number | null;
        reference: string;
        start_date: number;
        supported_types: "india"[] | null;
      } | null;
      network:
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
        | "visa"
        | null;
      request_three_d_secure: "any" | "automatic" | "challenge" | null;
    };
    card_present?: {};
    klarna?: { currency: string | null; preferred_locale: string | null };
    link?: { persistent_token: string | null };
    paypal?: { billing_agreement_id: string | null };
    payto?: {
      mandate_options?: {
        amount: number | null;
        amount_type: "fixed" | "maximum" | null;
        end_date: string | null;
        payment_schedule:
          | "adhoc"
          | "annual"
          | "daily"
          | "fortnightly"
          | "monthly"
          | "quarterly"
          | "semi_annual"
          | "weekly"
          | null;
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
    };
    pix?: {
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
    };
    sepa_debit?: { mandate_options?: { reference_prefix?: string } };
    upi?: {
      mandate_options?: {
        amount: number | null;
        amount_type: "fixed" | "maximum" | null;
        description: string | null;
        end_date: number | null;
      };
    };
    us_bank_account?: {
      financial_connections?: {
        filters?: { account_subcategories?: ("checking" | "savings")[] };
        permissions?: (
          | "balances"
          | "ownership"
          | "payment_method"
          | "transactions"
        )[];
        prefetch: ("balances" | "ownership" | "transactions")[] | null;
        return_url?: string;
      };
      mandate_options?: { collection_method?: "paper" };
      verification_method?: "automatic" | "instant" | "microdeposits";
    };
  } | null;
  payment_method_types: string[];
  single_use_mandate:
    | string
    | {
        customer_acceptance: {
          accepted_at: number | null;
          offline?: {};
          online?: { ip_address: string | null; user_agent: string | null };
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
            network_status: "accepted" | "pending" | "refused" | "revoked";
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
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  usage: string;
}
export const PostSetupIntentsOutput = /*@__PURE__*/ Schema.Struct({
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
  automatic_payment_methods: Schema.NullOr(
    Schema.Struct({
      allow_redirects: Schema.optional(Schema.Literals(["always", "never"])),
      enabled: Schema.NullOr(Schema.Boolean),
    }),
  ),
  cancellation_reason: Schema.NullOr(
    Schema.Literals(["abandoned", "duplicate", "requested_by_customer"]),
  ),
  client_secret: SensitiveOutputNullableString,
  created: Schema.Number,
  customer: Schema.Unknown,
  customer_account: Schema.optional(Schema.NullOr(Schema.String)),
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
  flow_directions: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.Literals(["inbound", "outbound"]))),
  ),
  id: Schema.String,
  last_setup_error: Schema.Unknown,
  latest_attempt: Schema.Unknown,
  livemode: Schema.Boolean,
  managed_payments: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
  ),
  mandate: Schema.Unknown,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  next_action: Schema.NullOr(
    Schema.Struct({
      blik_authorize: Schema.optional(Schema.Struct({})),
      cashapp_handle_redirect_or_display_qr_code: Schema.optional(
        Schema.Struct({
          hosted_instructions_url: Schema.String,
          mobile_auth_url: Schema.String,
          qr_code: Schema.Struct({
            expires_at: Schema.Number,
            image_url_png: Schema.String,
            image_url_svg: Schema.String,
          }),
        }),
      ),
      pix_display_qr_code: Schema.optional(
        Schema.Struct({
          data: Schema.String,
          expires_at: Schema.Number,
          hosted_instructions_url: Schema.String,
          image_url_png: Schema.String,
          image_url_svg: Schema.String,
        }),
      ),
      redirect_to_url: Schema.optional(
        Schema.Struct({
          return_url: Schema.NullOr(Schema.String),
          url: Schema.NullOr(Schema.String),
        }),
      ),
      type: Schema.String,
      upi_handle_redirect_or_display_qr_code: Schema.optional(
        Schema.Struct({
          hosted_instructions_url: Schema.String,
          qr_code: Schema.Struct({
            expires_at: Schema.Number,
            image_url_png: Schema.String,
            image_url_svg: Schema.String,
          }),
        }),
      ),
      use_stripe_sdk: Schema.optional(Schema.Unknown),
      verify_with_microdeposits: Schema.optional(
        Schema.Struct({
          arrival_date: Schema.Number,
          hosted_verification_url: Schema.String,
          microdeposit_type: Schema.NullOr(
            Schema.Literals(["amounts", "descriptor_code"]),
          ),
        }),
      ),
    }),
  ),
  object: Schema.Literals(["setup_intent"]),
  on_behalf_of: Schema.Unknown,
  payment_method: Schema.Unknown,
  payment_method_configuration_details: Schema.NullOr(
    Schema.Struct({
      id: Schema.String,
      parent: Schema.NullOr(Schema.String),
    }),
  ),
  payment_method_options: Schema.Unknown,
  payment_method_types: Schema.Array(Schema.String),
  single_use_mandate: Schema.Unknown,
  status: Schema.Literals([
    "canceled",
    "processing",
    "requires_action",
    "requires_confirmation",
    "requires_payment_method",
    "succeeded",
  ]),
  usage: Schema.String,
}) as unknown as Schema.Codec<PostSetupIntentsOutput>;

// The operation
/**
 * Create a SetupIntent
 *
 * <p>Creates a SetupIntent object.</p>
 * <p>After you create the SetupIntent, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
 * it to collect any required permissions to charge the payment method later.</p>
 */
export const PostSetupIntents = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostSetupIntentsInput,
  outputSchema: PostSetupIntentsOutput,
}));
