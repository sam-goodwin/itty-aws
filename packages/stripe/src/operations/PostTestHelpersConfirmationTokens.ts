import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTestHelpersConfirmationTokensInput {
  expand?: string[];
  payment_method?: string;
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
    card?: {
      installments?: {
        plan: {
          count?: number;
          interval?: "month";
          type: "bonus" | "fixed_count" | "revolving";
        };
      };
    };
  };
  return_url?: string;
  setup_future_usage?: "off_session" | "on_session";
  shipping?: {
    address: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    name: string;
    phone?: string | "";
  };
}
export const PostTestHelpersConfirmationTokensInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    payment_method: Schema.optional(Schema.String),
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
        card: Schema.optional(
          Schema.Struct({
            installments: Schema.optional(
              Schema.Struct({
                plan: Schema.Struct({
                  count: Schema.optional(Schema.Number),
                  interval: Schema.optional(Schema.Literals(["month"])),
                  type: Schema.Literals(["bonus", "fixed_count", "revolving"]),
                }),
              }),
            ),
          }),
        ),
      }),
    ),
    return_url: Schema.optional(Schema.String),
    setup_future_usage: Schema.optional(
      Schema.Literals(["off_session", "on_session"]),
    ),
    shipping: Schema.optional(
      Schema.Struct({
        address: Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
        }),
        name: Schema.String,
        phone: Schema.optional(
          Schema.Union([Schema.String, Schema.Literals([""])]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/confirmation_tokens",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTestHelpersConfirmationTokensInput>;

// Output Schema
export interface PostTestHelpersConfirmationTokensOutput {
  created: number;
  expires_at: number | null;
  id: string;
  livemode: boolean;
  mandate_data?: {
    customer_acceptance: {
      online: { ip_address: string | null; user_agent: string | null } | null;
      type: string;
    };
  } | null;
  object: "confirmation_token";
  payment_intent: string | null;
  payment_method_options: {
    card: {
      cvc_token: string | null;
      installments?: {
        plan?: {
          count: number | null;
          interval: "month" | null;
          type: "bonus" | "fixed_count" | "revolving";
        };
      };
    } | null;
  } | null;
  payment_method_preview: unknown;
  return_url: string | null;
  setup_future_usage: "off_session" | "on_session" | null;
  setup_intent: string | null;
  shipping: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    name: string;
    phone: string | null;
  } | null;
  use_stripe_sdk: boolean;
}
export const PostTestHelpersConfirmationTokensOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    mandate_data: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          customer_acceptance: Schema.Struct({
            online: Schema.NullOr(
              Schema.Struct({
                ip_address: Schema.NullOr(Schema.String),
                user_agent: Schema.NullOr(Schema.String),
              }),
            ),
            type: Schema.String,
          }),
        }),
      ),
    ),
    object: Schema.Literals(["confirmation_token"]),
    payment_intent: Schema.NullOr(Schema.String),
    payment_method_options: Schema.NullOr(
      Schema.Struct({
        card: Schema.NullOr(
          Schema.Struct({
            cvc_token: Schema.NullOr(Schema.String),
            installments: Schema.optional(
              Schema.Struct({
                plan: Schema.optional(
                  Schema.Struct({
                    count: Schema.NullOr(Schema.Number),
                    interval: Schema.NullOr(Schema.Literals(["month"])),
                    type: Schema.Literals([
                      "bonus",
                      "fixed_count",
                      "revolving",
                    ]),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    payment_method_preview: Schema.Unknown,
    return_url: Schema.NullOr(Schema.String),
    setup_future_usage: Schema.NullOr(
      Schema.Literals(["off_session", "on_session"]),
    ),
    setup_intent: Schema.NullOr(Schema.String),
    shipping: Schema.NullOr(
      Schema.Struct({
        address: Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
        }),
        name: Schema.String,
        phone: Schema.NullOr(Schema.String),
      }),
    ),
    use_stripe_sdk: Schema.Boolean,
  }) as unknown as Schema.Codec<PostTestHelpersConfirmationTokensOutput>;

// The operation
/**
 * Create a test Confirmation Token
 *
 * <p>Creates a test mode Confirmation Token server side for your integration tests.</p>
 */
export const PostTestHelpersConfirmationTokens =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersConfirmationTokensInput,
    outputSchema: PostTestHelpersConfirmationTokensOutput,
  }));
