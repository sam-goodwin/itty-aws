import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostCheckoutSessionsInput {
  adaptive_pricing?: { enabled?: boolean };
  after_expiration?: {
    recovery?: { allow_promotion_codes?: boolean; enabled: boolean };
  };
  allow_promotion_codes?: boolean;
  automatic_tax?: {
    enabled: boolean;
    liability?: { account?: string; type: "account" | "self" };
  };
  billing_address_collection?: "auto" | "required";
  branding_settings?: {
    background_color?: string | "";
    border_style?: "" | "pill" | "rectangular" | "rounded";
    button_color?: string | "";
    display_name?: string;
    font_family?:
      | ""
      | "be_vietnam_pro"
      | "bitter"
      | "chakra_petch"
      | "default"
      | "hahmlet"
      | "inconsolata"
      | "inter"
      | "lato"
      | "lora"
      | "m_plus_1_code"
      | "montserrat"
      | "noto_sans"
      | "noto_sans_jp"
      | "noto_serif"
      | "nunito"
      | "open_sans"
      | "pridi"
      | "pt_sans"
      | "pt_serif"
      | "raleway"
      | "roboto"
      | "roboto_slab"
      | "source_sans_pro"
      | "titillium_web"
      | "ubuntu_mono"
      | "zen_maru_gothic";
    icon?: { file?: string; type: "file" | "url"; url?: string };
    logo?: { file?: string; type: "file" | "url"; url?: string };
  };
  cancel_url?: string;
  client_reference_id?: string;
  consent_collection?: {
    payment_method_reuse_agreement?: { position: "auto" | "hidden" };
    promotions?: "auto" | "none";
    terms_of_service?: "none" | "required";
  };
  currency?: string;
  custom_fields?: {
    dropdown?: {
      default_value?: string;
      options: { label: string; value: string }[];
    };
    key: string;
    label: { custom: string; type: "custom" };
    numeric?: {
      default_value?: string;
      maximum_length?: number;
      minimum_length?: number;
    };
    optional?: boolean;
    text?: {
      default_value?: string;
      maximum_length?: number;
      minimum_length?: number;
    };
    type: "dropdown" | "numeric" | "text";
  }[];
  custom_text?: {
    after_submit?: { message: string } | "";
    shipping_address?: { message: string } | "";
    submit?: { message: string } | "";
    terms_of_service_acceptance?: { message: string } | "";
  };
  customer?: string;
  customer_account?: string;
  customer_creation?: "always" | "if_required";
  customer_email?: string;
  customer_update?: {
    address?: "auto" | "never";
    name?: "auto" | "never";
    shipping?: "auto" | "never";
  };
  discounts?: { coupon?: string; promotion_code?: string }[];
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
  expires_at?: number;
  integration_identifier?: string;
  invoice_creation?: {
    enabled: boolean;
    invoice_data?: {
      account_tax_ids?: string[] | "";
      custom_fields?: { name: string; value: string }[] | "";
      description?: string;
      footer?: string;
      issuer?: { account?: string; type: "account" | "self" };
      metadata?: Record<string, string>;
      rendering_options?:
        | {
            amount_tax_display?: "" | "exclude_tax" | "include_inclusive_tax";
            template?: string;
          }
        | "";
    };
  };
  line_items?: {
    adjustable_quantity?: {
      enabled: boolean;
      maximum?: number;
      minimum?: number;
    };
    dynamic_tax_rates?: string[];
    metadata?: Record<string, string>;
    price?: string;
    price_data?: {
      currency: string;
      product?: string;
      product_data?: {
        description?: string;
        images?: string[];
        metadata?: Record<string, string>;
        name: string;
        tax_code?: string;
        unit_label?: string;
      };
      recurring?: {
        interval: "day" | "month" | "week" | "year";
        interval_count?: number;
      };
      tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      unit_amount?: number;
      unit_amount_decimal?: string;
    };
    quantity?: number;
    tax_rates?: string[];
  }[];
  locale?:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-GB"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW";
  managed_payments?: { enabled?: boolean };
  metadata?: Record<string, string>;
  mode?: "payment" | "setup" | "subscription";
  name_collection?: {
    business?: { enabled: boolean; optional?: boolean };
    individual?: { enabled: boolean; optional?: boolean };
  };
  optional_items?: {
    adjustable_quantity?: {
      enabled: boolean;
      maximum?: number;
      minimum?: number;
    };
    price: string;
    quantity: number;
  }[];
  origin_context?: "mobile_app" | "web";
  payment_intent_data?: {
    application_fee_amount?: number;
    capture_method?: "automatic" | "automatic_async" | "manual";
    description?: string;
    metadata?: Record<string, string>;
    on_behalf_of?: string;
    receipt_email?: string;
    setup_future_usage?: "off_session" | "on_session";
    shipping?: {
      address: {
        city?: string;
        country?: string;
        line1: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      carrier?: string;
      name: string;
      phone?: string;
      tracking_number?: string;
    };
    statement_descriptor?: string;
    statement_descriptor_suffix?: string;
    transfer_data?: { amount?: number; destination: string };
    transfer_group?: string;
  };
  payment_method_collection?: "always" | "if_required";
  payment_method_configuration?: string;
  payment_method_data?: {
    allow_redisplay?: "always" | "limited" | "unspecified";
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
      setup_future_usage?: "none" | "off_session" | "on_session";
      target_date?: string;
      verification_method?: "automatic" | "instant" | "microdeposits";
    };
    affirm?: { capture_method?: "manual"; setup_future_usage?: "none" };
    afterpay_clearpay?: {
      capture_method?: "manual";
      setup_future_usage?: "none";
    };
    alipay?: { setup_future_usage?: "none" };
    alma?: { capture_method?: "manual" };
    amazon_pay?: {
      capture_method?: "manual";
      setup_future_usage?: "none" | "off_session";
    };
    au_becs_debit?: { setup_future_usage?: "none"; target_date?: string };
    bacs_debit?: {
      mandate_options?: { reference_prefix?: string | "" };
      setup_future_usage?: "none" | "off_session" | "on_session";
      target_date?: string;
    };
    bancontact?: { setup_future_usage?: "none" };
    billie?: { capture_method?: "manual" };
    boleto?: {
      expires_after_days?: number;
      setup_future_usage?: "none" | "off_session" | "on_session";
    };
    card?: {
      capture_method?: "manual";
      installments?: { enabled?: boolean };
      request_extended_authorization?: "if_available" | "never";
      request_incremental_authorization?: "if_available" | "never";
      request_multicapture?: "if_available" | "never";
      request_overcapture?: "if_available" | "never";
      request_three_d_secure?: "any" | "automatic" | "challenge";
      restrictions?: {
        brands_blocked?: (
          | "american_express"
          | "discover_global_network"
          | "mastercard"
          | "visa"
        )[];
      };
      setup_future_usage?: "off_session" | "on_session";
      statement_descriptor_suffix_kana?: string;
      statement_descriptor_suffix_kanji?: string;
    };
    cashapp?: {
      capture_method?: "manual";
      setup_future_usage?: "none" | "off_session" | "on_session";
    };
    crypto?: { setup_future_usage?: "none" };
    customer_balance?: {
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
    };
    demo_pay?: { setup_future_usage?: "none" | "off_session" };
    eps?: { setup_future_usage?: "none" };
    fpx?: { setup_future_usage?: "none" };
    giropay?: { setup_future_usage?: "none" };
    grabpay?: { setup_future_usage?: "none" };
    ideal?: { setup_future_usage?: "none" };
    kakao_pay?: {
      capture_method?: "manual";
      setup_future_usage?: "none" | "off_session";
    };
    klarna?: {
      capture_method?: "manual";
      setup_future_usage?: "none";
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
    konbini?: { expires_after_days?: number; setup_future_usage?: "none" };
    kr_card?: {
      capture_method?: "manual";
      setup_future_usage?: "none" | "off_session";
    };
    link?: {
      capture_method?: "manual";
      setup_future_usage?: "none" | "off_session";
    };
    mobilepay?: { capture_method?: "manual"; setup_future_usage?: "none" };
    multibanco?: { setup_future_usage?: "none" };
    naver_pay?: {
      capture_method?: "manual";
      setup_future_usage?: "none" | "off_session";
    };
    oxxo?: { expires_after_days?: number; setup_future_usage?: "none" };
    p24?: { setup_future_usage?: "none"; tos_shown_and_accepted?: boolean };
    pay_by_bank?: {};
    payco?: { capture_method?: "manual" };
    paynow?: { setup_future_usage?: "none" };
    paypal?: {
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
    };
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
      setup_future_usage?: "none" | "off_session";
    };
    pix?: {
      amount_includes_iof?: "always" | "never";
      expires_after_seconds?: number;
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
    };
    revolut_pay?: {
      capture_method?: "manual";
      setup_future_usage?: "none" | "off_session";
    };
    samsung_pay?: { capture_method?: "manual" };
    satispay?: { capture_method?: "manual" };
    scalapay?: { capture_method?: "manual" };
    sepa_debit?: {
      mandate_options?: { reference_prefix?: string | "" };
      setup_future_usage?: "none" | "off_session" | "on_session";
      target_date?: string;
    };
    sofort?: { setup_future_usage?: "none" };
    sunbit?: { capture_method?: "manual"; setup_future_usage?: "none" };
    swish?: { reference?: string };
    twint?: { setup_future_usage?: "none" | "off_session" };
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
        permissions?: (
          | "balances"
          | "ownership"
          | "payment_method"
          | "transactions"
        )[];
        prefetch?: ("balances" | "ownership" | "transactions")[];
      };
      setup_future_usage?: "none" | "off_session" | "on_session";
      target_date?: string;
      verification_method?: "automatic" | "instant";
    };
    wechat_pay?: {
      app_id?: string;
      client: "android" | "ios" | "web";
      setup_future_usage?: "none";
    };
  };
  payment_method_types?: (
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
    | "zip"
  )[];
  permissions?: { update_shipping_details?: "client_only" | "server_only" };
  phone_number_collection?: { enabled: boolean };
  redirect_on_completion?: "always" | "if_required" | "never";
  return_url?: string;
  saved_payment_method_options?: {
    allow_redisplay_filters?: ("always" | "limited" | "unspecified")[];
    payment_method_remove?: "disabled" | "enabled";
    payment_method_save?: "disabled" | "enabled";
  };
  setup_intent_data?: {
    description?: string;
    metadata?: Record<string, string>;
    on_behalf_of?: string;
  };
  shipping_address_collection?: {
    allowed_countries: (
      | "AC"
      | "AD"
      | "AE"
      | "AF"
      | "AG"
      | "AI"
      | "AL"
      | "AM"
      | "AO"
      | "AQ"
      | "AR"
      | "AT"
      | "AU"
      | "AW"
      | "AX"
      | "AZ"
      | "BA"
      | "BB"
      | "BD"
      | "BE"
      | "BF"
      | "BG"
      | "BH"
      | "BI"
      | "BJ"
      | "BL"
      | "BM"
      | "BN"
      | "BO"
      | "BQ"
      | "BR"
      | "BS"
      | "BT"
      | "BV"
      | "BW"
      | "BY"
      | "BZ"
      | "CA"
      | "CD"
      | "CF"
      | "CG"
      | "CH"
      | "CI"
      | "CK"
      | "CL"
      | "CM"
      | "CN"
      | "CO"
      | "CR"
      | "CV"
      | "CW"
      | "CY"
      | "CZ"
      | "DE"
      | "DJ"
      | "DK"
      | "DM"
      | "DO"
      | "DZ"
      | "EC"
      | "EE"
      | "EG"
      | "EH"
      | "ER"
      | "ES"
      | "ET"
      | "FI"
      | "FJ"
      | "FK"
      | "FO"
      | "FR"
      | "GA"
      | "GB"
      | "GD"
      | "GE"
      | "GF"
      | "GG"
      | "GH"
      | "GI"
      | "GL"
      | "GM"
      | "GN"
      | "GP"
      | "GQ"
      | "GR"
      | "GS"
      | "GT"
      | "GU"
      | "GW"
      | "GY"
      | "HK"
      | "HN"
      | "HR"
      | "HT"
      | "HU"
      | "ID"
      | "IE"
      | "IL"
      | "IM"
      | "IN"
      | "IO"
      | "IQ"
      | "IS"
      | "IT"
      | "JE"
      | "JM"
      | "JO"
      | "JP"
      | "KE"
      | "KG"
      | "KH"
      | "KI"
      | "KM"
      | "KN"
      | "KR"
      | "KW"
      | "KY"
      | "KZ"
      | "LA"
      | "LB"
      | "LC"
      | "LI"
      | "LK"
      | "LR"
      | "LS"
      | "LT"
      | "LU"
      | "LV"
      | "LY"
      | "MA"
      | "MC"
      | "MD"
      | "ME"
      | "MF"
      | "MG"
      | "MK"
      | "ML"
      | "MM"
      | "MN"
      | "MO"
      | "MQ"
      | "MR"
      | "MS"
      | "MT"
      | "MU"
      | "MV"
      | "MW"
      | "MX"
      | "MY"
      | "MZ"
      | "NA"
      | "NC"
      | "NE"
      | "NG"
      | "NI"
      | "NL"
      | "NO"
      | "NP"
      | "NR"
      | "NU"
      | "NZ"
      | "OM"
      | "PA"
      | "PE"
      | "PF"
      | "PG"
      | "PH"
      | "PK"
      | "PL"
      | "PM"
      | "PN"
      | "PR"
      | "PS"
      | "PT"
      | "PY"
      | "QA"
      | "RE"
      | "RO"
      | "RS"
      | "RU"
      | "RW"
      | "SA"
      | "SB"
      | "SC"
      | "SD"
      | "SE"
      | "SG"
      | "SH"
      | "SI"
      | "SJ"
      | "SK"
      | "SL"
      | "SM"
      | "SN"
      | "SO"
      | "SR"
      | "SS"
      | "ST"
      | "SV"
      | "SX"
      | "SZ"
      | "TA"
      | "TC"
      | "TD"
      | "TF"
      | "TG"
      | "TH"
      | "TJ"
      | "TK"
      | "TL"
      | "TM"
      | "TN"
      | "TO"
      | "TR"
      | "TT"
      | "TV"
      | "TW"
      | "TZ"
      | "UA"
      | "UG"
      | "US"
      | "UY"
      | "UZ"
      | "VA"
      | "VC"
      | "VE"
      | "VG"
      | "VN"
      | "VU"
      | "WF"
      | "WS"
      | "XK"
      | "YE"
      | "YT"
      | "ZA"
      | "ZM"
      | "ZW"
      | "ZZ"
    )[];
  };
  shipping_options?: {
    shipping_rate?: string;
    shipping_rate_data?: {
      delivery_estimate?: {
        maximum?: {
          unit: "business_day" | "day" | "hour" | "month" | "week";
          value: number;
        };
        minimum?: {
          unit: "business_day" | "day" | "hour" | "month" | "week";
          value: number;
        };
      };
      display_name: string;
      fixed_amount?: {
        amount: number;
        currency: string;
        currency_options?: Record<
          string,
          {
            amount: number;
            tax_behavior?: "exclusive" | "inclusive" | "unspecified";
          }
        >;
      };
      metadata?: Record<string, string>;
      tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      tax_code?: string;
      type?: "fixed_amount";
    };
  }[];
  submit_type?: "auto" | "book" | "donate" | "pay" | "subscribe";
  subscription_data?: {
    application_fee_percent?: number;
    billing_cycle_anchor?: number;
    billing_cycle_anchor_config?: {
      day_of_month: number;
      hour?: number;
      minute?: number;
      month?: number;
      second?: number;
    };
    billing_mode?: {
      flexible?: { proration_discounts?: "included" | "itemized" };
      type: "classic" | "flexible";
    };
    default_tax_rates?: string[];
    description?: string;
    invoice_settings?: {
      issuer?: { account?: string; type: "account" | "self" };
    };
    metadata?: Record<string, string>;
    on_behalf_of?: string;
    pending_invoice_item_interval?: {
      interval: "day" | "month" | "week" | "year";
      interval_count?: number;
    };
    proration_behavior?: "create_prorations" | "none";
    transfer_data?: { amount_percent?: number; destination: string };
    trial_end?: number;
    trial_period_days?: number;
    trial_settings?: {
      end_behavior: {
        missing_payment_method: "cancel" | "create_invoice" | "pause";
      };
    };
  };
  success_url?: string;
  tax_id_collection?: { enabled: boolean; required?: "if_supported" | "never" };
  ui_mode?: "elements" | "embedded_page" | "form" | "hosted_page";
  wallet_options?: { link?: { display?: "auto" | "never" } };
}
export const PostCheckoutSessionsInput =
  /*@__PURE__*/ Schema.Struct({
    adaptive_pricing: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
      }),
    ),
    after_expiration: Schema.optional(
      Schema.Struct({
        recovery: Schema.optional(
          Schema.Struct({
            allow_promotion_codes: Schema.optional(Schema.Boolean),
            enabled: Schema.Boolean,
          }),
        ),
      }),
    ),
    allow_promotion_codes: Schema.optional(Schema.Boolean),
    automatic_tax: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        liability: Schema.optional(
          Schema.Struct({
            account: Schema.optional(Schema.String),
            type: Schema.Literals(["account", "self"]),
          }),
        ),
      }),
    ),
    billing_address_collection: Schema.optional(
      Schema.Literals(["auto", "required"]),
    ),
    branding_settings: Schema.optional(
      Schema.Struct({
        background_color: Schema.optional(
          Schema.Union([Schema.String, Schema.Literals([""])]),
        ),
        border_style: Schema.optional(
          Schema.Literals(["", "pill", "rectangular", "rounded"]),
        ),
        button_color: Schema.optional(
          Schema.Union([Schema.String, Schema.Literals([""])]),
        ),
        display_name: Schema.optional(Schema.String),
        font_family: Schema.optional(
          Schema.Literals([
            "",
            "be_vietnam_pro",
            "bitter",
            "chakra_petch",
            "default",
            "hahmlet",
            "inconsolata",
            "inter",
            "lato",
            "lora",
            "m_plus_1_code",
            "montserrat",
            "noto_sans",
            "noto_sans_jp",
            "noto_serif",
            "nunito",
            "open_sans",
            "pridi",
            "pt_sans",
            "pt_serif",
            "raleway",
            "roboto",
            "roboto_slab",
            "source_sans_pro",
            "titillium_web",
            "ubuntu_mono",
            "zen_maru_gothic",
          ]),
        ),
        icon: Schema.optional(
          Schema.Struct({
            file: Schema.optional(Schema.String),
            type: Schema.Literals(["file", "url"]),
            url: Schema.optional(Schema.String),
          }),
        ),
        logo: Schema.optional(
          Schema.Struct({
            file: Schema.optional(Schema.String),
            type: Schema.Literals(["file", "url"]),
            url: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    cancel_url: Schema.optional(Schema.String),
    client_reference_id: Schema.optional(Schema.String),
    consent_collection: Schema.optional(
      Schema.Struct({
        payment_method_reuse_agreement: Schema.optional(
          Schema.Struct({
            position: Schema.Literals(["auto", "hidden"]),
          }),
        ),
        promotions: Schema.optional(Schema.Literals(["auto", "none"])),
        terms_of_service: Schema.optional(
          Schema.Literals(["none", "required"]),
        ),
      }),
    ),
    currency: Schema.optional(Schema.String),
    custom_fields: Schema.optional(
      Schema.Array(
        Schema.Struct({
          dropdown: Schema.optional(
            Schema.Struct({
              default_value: Schema.optional(Schema.String),
              options: Schema.Array(
                Schema.Struct({
                  label: Schema.String,
                  value: Schema.String,
                }),
              ),
            }),
          ),
          key: Schema.String,
          label: Schema.Struct({
            custom: Schema.String,
            type: Schema.Literals(["custom"]),
          }),
          numeric: Schema.optional(
            Schema.Struct({
              default_value: Schema.optional(Schema.String),
              maximum_length: Schema.optional(Schema.Number),
              minimum_length: Schema.optional(Schema.Number),
            }),
          ),
          optional: Schema.optional(Schema.Boolean),
          text: Schema.optional(
            Schema.Struct({
              default_value: Schema.optional(Schema.String),
              maximum_length: Schema.optional(Schema.Number),
              minimum_length: Schema.optional(Schema.Number),
            }),
          ),
          type: Schema.Literals(["dropdown", "numeric", "text"]),
        }),
      ),
    ),
    custom_text: Schema.optional(
      Schema.Struct({
        after_submit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              message: Schema.String,
            }),
            Schema.Literals([""]),
          ]),
        ),
        shipping_address: Schema.optional(
          Schema.Union([
            Schema.Struct({
              message: Schema.String,
            }),
            Schema.Literals([""]),
          ]),
        ),
        submit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              message: Schema.String,
            }),
            Schema.Literals([""]),
          ]),
        ),
        terms_of_service_acceptance: Schema.optional(
          Schema.Union([
            Schema.Struct({
              message: Schema.String,
            }),
            Schema.Literals([""]),
          ]),
        ),
      }),
    ),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    customer_creation: Schema.optional(
      Schema.Literals(["always", "if_required"]),
    ),
    customer_email: Schema.optional(Schema.String),
    customer_update: Schema.optional(
      Schema.Struct({
        address: Schema.optional(Schema.Literals(["auto", "never"])),
        name: Schema.optional(Schema.Literals(["auto", "never"])),
        shipping: Schema.optional(Schema.Literals(["auto", "never"])),
      }),
    ),
    discounts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          coupon: Schema.optional(Schema.String),
          promotion_code: Schema.optional(Schema.String),
        }),
      ),
    ),
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
    expires_at: Schema.optional(Schema.Number),
    integration_identifier: Schema.optional(Schema.String),
    invoice_creation: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        invoice_data: Schema.optional(
          Schema.Struct({
            account_tax_ids: Schema.optional(
              Schema.Union([
                Schema.Array(Schema.String),
                Schema.Literals([""]),
              ]),
            ),
            custom_fields: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    value: Schema.String,
                  }),
                ),
                Schema.Literals([""]),
              ]),
            ),
            description: Schema.optional(Schema.String),
            footer: Schema.optional(Schema.String),
            issuer: Schema.optional(
              Schema.Struct({
                account: Schema.optional(Schema.String),
                type: Schema.Literals(["account", "self"]),
              }),
            ),
            metadata: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            rendering_options: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  amount_tax_display: Schema.optional(
                    Schema.Literals([
                      "",
                      "exclude_tax",
                      "include_inclusive_tax",
                    ]),
                  ),
                  template: Schema.optional(Schema.String),
                }),
                Schema.Literals([""]),
              ]),
            ),
          }),
        ),
      }),
    ),
    line_items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          adjustable_quantity: Schema.optional(
            Schema.Struct({
              enabled: Schema.Boolean,
              maximum: Schema.optional(Schema.Number),
              minimum: Schema.optional(Schema.Number),
            }),
          ),
          dynamic_tax_rates: Schema.optional(Schema.Array(Schema.String)),
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          price: Schema.optional(Schema.String),
          price_data: Schema.optional(
            Schema.Struct({
              currency: Schema.String,
              product: Schema.optional(Schema.String),
              product_data: Schema.optional(
                Schema.Struct({
                  description: Schema.optional(Schema.String),
                  images: Schema.optional(Schema.Array(Schema.String)),
                  metadata: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  name: Schema.String,
                  tax_code: Schema.optional(Schema.String),
                  unit_label: Schema.optional(Schema.String),
                }),
              ),
              recurring: Schema.optional(
                Schema.Struct({
                  interval: Schema.Literals(["day", "month", "week", "year"]),
                  interval_count: Schema.optional(Schema.Number),
                }),
              ),
              tax_behavior: Schema.optional(
                Schema.Literals(["exclusive", "inclusive", "unspecified"]),
              ),
              unit_amount: Schema.optional(Schema.Number),
              unit_amount_decimal: Schema.optional(Schema.String),
            }),
          ),
          quantity: Schema.optional(Schema.Number),
          tax_rates: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    locale: Schema.optional(
      Schema.Literals([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-GB",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ]),
    ),
    managed_payments: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
      }),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mode: Schema.optional(
      Schema.Literals(["payment", "setup", "subscription"]),
    ),
    name_collection: Schema.optional(
      Schema.Struct({
        business: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            optional: Schema.optional(Schema.Boolean),
          }),
        ),
        individual: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            optional: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    optional_items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          adjustable_quantity: Schema.optional(
            Schema.Struct({
              enabled: Schema.Boolean,
              maximum: Schema.optional(Schema.Number),
              minimum: Schema.optional(Schema.Number),
            }),
          ),
          price: Schema.String,
          quantity: Schema.Number,
        }),
      ),
    ),
    origin_context: Schema.optional(Schema.Literals(["mobile_app", "web"])),
    payment_intent_data: Schema.optional(
      Schema.Struct({
        application_fee_amount: Schema.optional(Schema.Number),
        capture_method: Schema.optional(
          Schema.Literals(["automatic", "automatic_async", "manual"]),
        ),
        description: Schema.optional(Schema.String),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        on_behalf_of: Schema.optional(Schema.String),
        receipt_email: Schema.optional(Schema.String),
        setup_future_usage: Schema.optional(
          Schema.Literals(["off_session", "on_session"]),
        ),
        shipping: Schema.optional(
          Schema.Struct({
            address: Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.String,
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
            carrier: Schema.optional(Schema.String),
            name: Schema.String,
            phone: Schema.optional(Schema.String),
            tracking_number: Schema.optional(Schema.String),
          }),
        ),
        statement_descriptor: Schema.optional(Schema.String),
        statement_descriptor_suffix: Schema.optional(Schema.String),
        transfer_data: Schema.optional(
          Schema.Struct({
            amount: Schema.optional(Schema.Number),
            destination: Schema.String,
          }),
        ),
        transfer_group: Schema.optional(Schema.String),
      }),
    ),
    payment_method_collection: Schema.optional(
      Schema.Literals(["always", "if_required"]),
    ),
    payment_method_configuration: Schema.optional(Schema.String),
    payment_method_data: Schema.optional(
      Schema.Struct({
        allow_redisplay: Schema.optional(
          Schema.Literals(["always", "limited", "unspecified"]),
        ),
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
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session", "on_session"]),
            ),
            target_date: Schema.optional(Schema.String),
            verification_method: Schema.optional(
              Schema.Literals(["automatic", "instant", "microdeposits"]),
            ),
          }),
        ),
        affirm: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        afterpay_clearpay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        alipay: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        alma: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
          }),
        ),
        amazon_pay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        au_becs_debit: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            target_date: Schema.optional(Schema.String),
          }),
        ),
        bacs_debit: Schema.optional(
          Schema.Struct({
            mandate_options: Schema.optional(
              Schema.Struct({
                reference_prefix: Schema.optional(
                  Schema.Union([Schema.String, Schema.Literals([""])]),
                ),
              }),
            ),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session", "on_session"]),
            ),
            target_date: Schema.optional(Schema.String),
          }),
        ),
        bancontact: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        billie: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
          }),
        ),
        boleto: Schema.optional(
          Schema.Struct({
            expires_after_days: Schema.optional(Schema.Number),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session", "on_session"]),
            ),
          }),
        ),
        card: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            installments: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
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
            restrictions: Schema.optional(
              Schema.Struct({
                brands_blocked: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "american_express",
                      "discover_global_network",
                      "mastercard",
                      "visa",
                    ]),
                  ),
                ),
              }),
            ),
            setup_future_usage: Schema.optional(
              Schema.Literals(["off_session", "on_session"]),
            ),
            statement_descriptor_suffix_kana: Schema.optional(Schema.String),
            statement_descriptor_suffix_kanji: Schema.optional(Schema.String),
          }),
        ),
        cashapp: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session", "on_session"]),
            ),
          }),
        ),
        crypto: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        customer_balance: Schema.optional(
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
        ),
        demo_pay: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        eps: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        fpx: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        giropay: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        grabpay: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        ideal: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        kakao_pay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        klarna: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
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
        konbini: Schema.optional(
          Schema.Struct({
            expires_after_days: Schema.optional(Schema.Number),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        kr_card: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        link: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        mobilepay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        multibanco: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        naver_pay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        oxxo: Schema.optional(
          Schema.Struct({
            expires_after_days: Schema.optional(Schema.Number),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        p24: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
            tos_shown_and_accepted: Schema.optional(Schema.Boolean),
          }),
        ),
        pay_by_bank: Schema.optional(Schema.Struct({})),
        payco: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
          }),
        ),
        paynow: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        paypal: Schema.optional(
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
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        pix: Schema.optional(
          Schema.Struct({
            amount_includes_iof: Schema.optional(
              Schema.Literals(["always", "never"]),
            ),
            expires_after_seconds: Schema.optional(Schema.Number),
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
        ),
        revolut_pay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
            ),
          }),
        ),
        samsung_pay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
          }),
        ),
        satispay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
          }),
        ),
        scalapay: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
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
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session", "on_session"]),
            ),
            target_date: Schema.optional(Schema.String),
          }),
        ),
        sofort: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        sunbit: Schema.optional(
          Schema.Struct({
            capture_method: Schema.optional(Schema.Literals(["manual"])),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
        swish: Schema.optional(
          Schema.Struct({
            reference: Schema.optional(Schema.String),
          }),
        ),
        twint: Schema.optional(
          Schema.Struct({
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session"]),
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
              }),
            ),
            setup_future_usage: Schema.optional(
              Schema.Literals(["none", "off_session", "on_session"]),
            ),
            target_date: Schema.optional(Schema.String),
            verification_method: Schema.optional(
              Schema.Literals(["automatic", "instant"]),
            ),
          }),
        ),
        wechat_pay: Schema.optional(
          Schema.Struct({
            app_id: Schema.optional(Schema.String),
            client: Schema.Literals(["android", "ios", "web"]),
            setup_future_usage: Schema.optional(Schema.Literals(["none"])),
          }),
        ),
      }),
    ),
    payment_method_types: Schema.optional(
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
      ),
    ),
    permissions: Schema.optional(
      Schema.Struct({
        update_shipping_details: Schema.optional(
          Schema.Literals(["client_only", "server_only"]),
        ),
      }),
    ),
    phone_number_collection: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    redirect_on_completion: Schema.optional(
      Schema.Literals(["always", "if_required", "never"]),
    ),
    return_url: Schema.optional(Schema.String),
    saved_payment_method_options: Schema.optional(
      Schema.Struct({
        allow_redisplay_filters: Schema.optional(
          Schema.Array(Schema.Literals(["always", "limited", "unspecified"])),
        ),
        payment_method_remove: Schema.optional(
          Schema.Literals(["disabled", "enabled"]),
        ),
        payment_method_save: Schema.optional(
          Schema.Literals(["disabled", "enabled"]),
        ),
      }),
    ),
    setup_intent_data: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        on_behalf_of: Schema.optional(Schema.String),
      }),
    ),
    shipping_address_collection: Schema.optional(
      Schema.Struct({
        allowed_countries: Schema.Array(
          Schema.Literals([
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CV",
            "CW",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FK",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PY",
            "QA",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW",
            "ZZ",
          ]),
        ),
      }),
    ),
    shipping_options: Schema.optional(
      Schema.Array(
        Schema.Struct({
          shipping_rate: Schema.optional(Schema.String),
          shipping_rate_data: Schema.optional(
            Schema.Struct({
              delivery_estimate: Schema.optional(
                Schema.Struct({
                  maximum: Schema.optional(
                    Schema.Struct({
                      unit: Schema.Literals([
                        "business_day",
                        "day",
                        "hour",
                        "month",
                        "week",
                      ]),
                      value: Schema.Number,
                    }),
                  ),
                  minimum: Schema.optional(
                    Schema.Struct({
                      unit: Schema.Literals([
                        "business_day",
                        "day",
                        "hour",
                        "month",
                        "week",
                      ]),
                      value: Schema.Number,
                    }),
                  ),
                }),
              ),
              display_name: Schema.String,
              fixed_amount: Schema.optional(
                Schema.Struct({
                  amount: Schema.Number,
                  currency: Schema.String,
                  currency_options: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        amount: Schema.Number,
                        tax_behavior: Schema.optional(
                          Schema.Literals([
                            "exclusive",
                            "inclusive",
                            "unspecified",
                          ]),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              tax_behavior: Schema.optional(
                Schema.Literals(["exclusive", "inclusive", "unspecified"]),
              ),
              tax_code: Schema.optional(Schema.String),
              type: Schema.optional(Schema.Literals(["fixed_amount"])),
            }),
          ),
        }),
      ),
    ),
    submit_type: Schema.optional(
      Schema.Literals(["auto", "book", "donate", "pay", "subscribe"]),
    ),
    subscription_data: Schema.optional(
      Schema.Struct({
        application_fee_percent: Schema.optional(Schema.Number),
        billing_cycle_anchor: Schema.optional(Schema.Number),
        billing_cycle_anchor_config: Schema.optional(
          Schema.Struct({
            day_of_month: Schema.Number,
            hour: Schema.optional(Schema.Number),
            minute: Schema.optional(Schema.Number),
            month: Schema.optional(Schema.Number),
            second: Schema.optional(Schema.Number),
          }),
        ),
        billing_mode: Schema.optional(
          Schema.Struct({
            flexible: Schema.optional(
              Schema.Struct({
                proration_discounts: Schema.optional(
                  Schema.Literals(["included", "itemized"]),
                ),
              }),
            ),
            type: Schema.Literals(["classic", "flexible"]),
          }),
        ),
        default_tax_rates: Schema.optional(Schema.Array(Schema.String)),
        description: Schema.optional(Schema.String),
        invoice_settings: Schema.optional(
          Schema.Struct({
            issuer: Schema.optional(
              Schema.Struct({
                account: Schema.optional(Schema.String),
                type: Schema.Literals(["account", "self"]),
              }),
            ),
          }),
        ),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        on_behalf_of: Schema.optional(Schema.String),
        pending_invoice_item_interval: Schema.optional(
          Schema.Struct({
            interval: Schema.Literals(["day", "month", "week", "year"]),
            interval_count: Schema.optional(Schema.Number),
          }),
        ),
        proration_behavior: Schema.optional(
          Schema.Literals(["create_prorations", "none"]),
        ),
        transfer_data: Schema.optional(
          Schema.Struct({
            amount_percent: Schema.optional(Schema.Number),
            destination: Schema.String,
          }),
        ),
        trial_end: Schema.optional(Schema.Number),
        trial_period_days: Schema.optional(Schema.Number),
        trial_settings: Schema.optional(
          Schema.Struct({
            end_behavior: Schema.Struct({
              missing_payment_method: Schema.Literals([
                "cancel",
                "create_invoice",
                "pause",
              ]),
            }),
          }),
        ),
      }),
    ),
    success_url: Schema.optional(Schema.String),
    tax_id_collection: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        required: Schema.optional(Schema.Literals(["if_supported", "never"])),
      }),
    ),
    ui_mode: Schema.optional(
      Schema.Literals(["elements", "embedded_page", "form", "hosted_page"]),
    ),
    wallet_options: Schema.optional(
      Schema.Struct({
        link: Schema.optional(
          Schema.Struct({
            display: Schema.optional(Schema.Literals(["auto", "never"])),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/checkout/sessions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCheckoutSessionsInput>;

// Output Schema
export interface PostCheckoutSessionsOutput {
  adaptive_pricing: { enabled: boolean } | null;
  after_expiration: {
    recovery: {
      allow_promotion_codes: boolean;
      enabled: boolean;
      expires_at: number | null;
      url: string | null;
    } | null;
  } | null;
  allow_promotion_codes: boolean | null;
  amount_subtotal: number | null;
  amount_total: number | null;
  automatic_tax: {
    enabled: boolean;
    liability: { account?: unknown; type: "account" | "self" } | null;
    provider: string | null;
    status: "complete" | "failed" | "requires_location_inputs" | null;
  };
  billing_address_collection: "auto" | "required" | null;
  branding_settings?: {
    background_color: string;
    border_style: "pill" | "rectangular" | "rounded";
    button_color: string;
    display_name: string;
    font_family: string;
    icon: { file?: string; type: "file" | "url"; url?: string } | null;
    logo: { file?: string; type: "file" | "url"; url?: string } | null;
  };
  cancel_url: string | null;
  client_reference_id: string | null;
  client_secret: Redacted.Redacted<string> | null;
  collected_information: {
    business_name: string | null;
    individual_name: string | null;
    shipping_details: {
      address: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      };
      name: string;
    } | null;
  } | null;
  consent: {
    promotions: "opt_in" | "opt_out" | null;
    terms_of_service: "accepted" | null;
  } | null;
  consent_collection: {
    payment_method_reuse_agreement: { position: "auto" | "hidden" } | null;
    promotions: "auto" | "none" | null;
    terms_of_service: "none" | "required" | null;
  } | null;
  created: number;
  currency: string | null;
  currency_conversion: {
    amount_subtotal: number;
    amount_total: number;
    fx_rate: string;
    source_currency: string;
  } | null;
  custom_fields: {
    dropdown?: {
      default_value: string | null;
      options: { label: string; value: string }[];
      value: string | null;
    };
    key: string;
    label: { custom: string | null; type: "custom" };
    numeric?: {
      default_value: string | null;
      maximum_length: number | null;
      minimum_length: number | null;
      value: string | null;
    };
    optional: boolean;
    text?: {
      default_value: string | null;
      maximum_length: number | null;
      minimum_length: number | null;
      value: string | null;
    };
    type: "dropdown" | "numeric" | "text";
  }[];
  custom_text: {
    after_submit: { message: string } | null;
    shipping_address: { message: string } | null;
    submit: { message: string } | null;
    terms_of_service_acceptance: { message: string } | null;
  };
  customer: unknown;
  customer_account: string | null;
  customer_creation: "always" | "if_required" | null;
  customer_details: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    } | null;
    business_name: string | null;
    email: string | null;
    individual_name: string | null;
    name: string | null;
    phone: string | null;
    tax_exempt: "exempt" | "none" | "reverse" | null;
    tax_ids:
      | {
          type:
            | "ad_nrt"
            | "ae_trn"
            | "al_tin"
            | "am_tin"
            | "ao_tin"
            | "ar_cuit"
            | "au_abn"
            | "au_arn"
            | "aw_tin"
            | "az_tin"
            | "ba_tin"
            | "bb_tin"
            | "bd_bin"
            | "bf_ifu"
            | "bg_uic"
            | "bh_vat"
            | "bj_ifu"
            | "bo_tin"
            | "br_cnpj"
            | "br_cpf"
            | "bs_tin"
            | "by_tin"
            | "ca_bn"
            | "ca_gst_hst"
            | "ca_pst_bc"
            | "ca_pst_mb"
            | "ca_pst_sk"
            | "ca_qst"
            | "cd_nif"
            | "ch_uid"
            | "ch_vat"
            | "cl_tin"
            | "cm_niu"
            | "cn_tin"
            | "co_nit"
            | "cr_tin"
            | "cv_nif"
            | "de_stn"
            | "do_rcn"
            | "ec_ruc"
            | "eg_tin"
            | "es_cif"
            | "et_tin"
            | "eu_oss_vat"
            | "eu_vat"
            | "fo_vat"
            | "gb_vat"
            | "ge_vat"
            | "gi_tin"
            | "gn_nif"
            | "hk_br"
            | "hr_oib"
            | "hu_tin"
            | "id_npwp"
            | "il_vat"
            | "in_gst"
            | "is_vat"
            | "it_cf"
            | "jp_cn"
            | "jp_rn"
            | "jp_trn"
            | "ke_pin"
            | "kg_tin"
            | "kh_tin"
            | "kr_brn"
            | "kz_bin"
            | "la_tin"
            | "li_uid"
            | "li_vat"
            | "lk_vat"
            | "ma_vat"
            | "md_vat"
            | "me_pib"
            | "mk_vat"
            | "mr_nif"
            | "mx_rfc"
            | "my_frp"
            | "my_itn"
            | "my_sst"
            | "ng_tin"
            | "no_vat"
            | "no_voec"
            | "np_pan"
            | "nz_gst"
            | "om_vat"
            | "pe_ruc"
            | "ph_tin"
            | "pl_nip"
            | "py_ruc"
            | "ro_tin"
            | "rs_pib"
            | "ru_inn"
            | "ru_kpp"
            | "sa_vat"
            | "sg_gst"
            | "sg_uen"
            | "si_tin"
            | "sn_ninea"
            | "sr_fin"
            | "sv_nit"
            | "th_vat"
            | "tj_tin"
            | "tr_tin"
            | "tw_vat"
            | "tz_vat"
            | "ua_vat"
            | "ug_tin"
            | "unknown"
            | "us_ein"
            | "uy_ruc"
            | "uz_tin"
            | "uz_vat"
            | "ve_rif"
            | "vn_tin"
            | "za_vat"
            | "zm_tin"
            | "zw_tin";
          value: string | null;
        }[]
      | null;
  } | null;
  customer_email: string | null;
  discounts:
    | {
        coupon:
          | string
          | {
              amount_off: number | null;
              applies_to?: { products: string[] };
              created: number;
              currency: string | null;
              currency_options?: Record<string, { amount_off: number }>;
              duration: "forever" | "once" | "repeating";
              duration_in_months: number | null;
              id: string;
              livemode: boolean;
              max_redemptions: number | null;
              metadata: Record<string, string> | null;
              name: string | null;
              object: "coupon";
              percent_off: number | null;
              redeem_by: number | null;
              times_redeemed: number;
              valid: boolean;
            }
          | null;
        promotion_code:
          | string
          | {
              active: boolean;
              code: string;
              created: number;
              customer: unknown;
              customer_account: string | null;
              expires_at: number | null;
              id: string;
              livemode: boolean;
              max_redemptions: number | null;
              metadata: Record<string, string> | null;
              object: "promotion_code";
              promotion: {
                coupon:
                  | string
                  | {
                      amount_off: number | null;
                      applies_to?: { products: string[] };
                      created: number;
                      currency: string | null;
                      currency_options?: Record<string, { amount_off: number }>;
                      duration: "forever" | "once" | "repeating";
                      duration_in_months: number | null;
                      id: string;
                      livemode: boolean;
                      max_redemptions: number | null;
                      metadata: Record<string, string> | null;
                      name: string | null;
                      object: "coupon";
                      percent_off: number | null;
                      redeem_by: number | null;
                      times_redeemed: number;
                      valid: boolean;
                    }
                  | null;
                type: "coupon";
              };
              restrictions: {
                currency_options?: Record<string, { minimum_amount: number }>;
                first_time_transaction: boolean;
                minimum_amount: number | null;
                minimum_amount_currency: string | null;
              };
              times_redeemed: number;
            }
          | null;
      }[]
    | null;
  excluded_payment_method_types?: string[];
  expires_at: number;
  id: string;
  integration_identifier: string | null;
  invoice: unknown;
  invoice_creation: {
    enabled: boolean;
    invoice_data: {
      account_tax_ids:
        | (
            | string
            | {
                country: string | null;
                created: number;
                customer: unknown;
                customer_account: string | null;
                id: string;
                livemode: boolean;
                object: "tax_id";
                owner: {
                  account?: unknown;
                  application?:
                    | string
                    | {
                        id: string;
                        name: string | null;
                        object: "application";
                      };
                  customer?: unknown;
                  customer_account: string | null;
                  type: "account" | "application" | "customer" | "self";
                } | null;
                type:
                  | "ad_nrt"
                  | "ae_trn"
                  | "al_tin"
                  | "am_tin"
                  | "ao_tin"
                  | "ar_cuit"
                  | "au_abn"
                  | "au_arn"
                  | "aw_tin"
                  | "az_tin"
                  | "ba_tin"
                  | "bb_tin"
                  | "bd_bin"
                  | "bf_ifu"
                  | "bg_uic"
                  | "bh_vat"
                  | "bj_ifu"
                  | "bo_tin"
                  | "br_cnpj"
                  | "br_cpf"
                  | "bs_tin"
                  | "by_tin"
                  | "ca_bn"
                  | "ca_gst_hst"
                  | "ca_pst_bc"
                  | "ca_pst_mb"
                  | "ca_pst_sk"
                  | "ca_qst"
                  | "cd_nif"
                  | "ch_uid"
                  | "ch_vat"
                  | "cl_tin"
                  | "cm_niu"
                  | "cn_tin"
                  | "co_nit"
                  | "cr_tin"
                  | "cv_nif"
                  | "de_stn"
                  | "do_rcn"
                  | "ec_ruc"
                  | "eg_tin"
                  | "es_cif"
                  | "et_tin"
                  | "eu_oss_vat"
                  | "eu_vat"
                  | "fo_vat"
                  | "gb_vat"
                  | "ge_vat"
                  | "gi_tin"
                  | "gn_nif"
                  | "hk_br"
                  | "hr_oib"
                  | "hu_tin"
                  | "id_npwp"
                  | "il_vat"
                  | "in_gst"
                  | "is_vat"
                  | "it_cf"
                  | "jp_cn"
                  | "jp_rn"
                  | "jp_trn"
                  | "ke_pin"
                  | "kg_tin"
                  | "kh_tin"
                  | "kr_brn"
                  | "kz_bin"
                  | "la_tin"
                  | "li_uid"
                  | "li_vat"
                  | "lk_vat"
                  | "ma_vat"
                  | "md_vat"
                  | "me_pib"
                  | "mk_vat"
                  | "mr_nif"
                  | "mx_rfc"
                  | "my_frp"
                  | "my_itn"
                  | "my_sst"
                  | "ng_tin"
                  | "no_vat"
                  | "no_voec"
                  | "np_pan"
                  | "nz_gst"
                  | "om_vat"
                  | "pe_ruc"
                  | "ph_tin"
                  | "pl_nip"
                  | "py_ruc"
                  | "ro_tin"
                  | "rs_pib"
                  | "ru_inn"
                  | "ru_kpp"
                  | "sa_vat"
                  | "sg_gst"
                  | "sg_uen"
                  | "si_tin"
                  | "sn_ninea"
                  | "sr_fin"
                  | "sv_nit"
                  | "th_vat"
                  | "tj_tin"
                  | "tr_tin"
                  | "tw_vat"
                  | "tz_vat"
                  | "ua_vat"
                  | "ug_tin"
                  | "unknown"
                  | "us_ein"
                  | "uy_ruc"
                  | "uz_tin"
                  | "uz_vat"
                  | "ve_rif"
                  | "vn_tin"
                  | "za_vat"
                  | "zm_tin"
                  | "zw_tin";
                value: string;
                verification: {
                  status: "pending" | "unavailable" | "unverified" | "verified";
                  verified_address: string | null;
                  verified_name: string | null;
                } | null;
              }
            | { deleted: true; id: string; object: "tax_id" }
          )[]
        | null;
      custom_fields: { name: string; value: string }[] | null;
      description: string | null;
      footer: string | null;
      issuer: { account?: unknown; type: "account" | "self" } | null;
      metadata: Record<string, string> | null;
      rendering_options: {
        amount_tax_display: string | null;
        template: string | null;
      } | null;
    };
  } | null;
  line_items?: {
    data: {
      adjustable_quantity: {
        enabled: boolean;
        maximum: number | null;
        minimum: number | null;
      } | null;
      amount_discount: number;
      amount_subtotal: number;
      amount_tax: number;
      amount_total: number;
      currency: string;
      description: string | null;
      discounts?: {
        amount: number;
        discount: {
          checkout_session: string | null;
          customer: unknown;
          customer_account: string | null;
          end: number | null;
          id: string;
          invoice: string | null;
          invoice_item: string | null;
          object: "discount";
          promotion_code:
            | string
            | {
                active: boolean;
                code: string;
                created: number;
                customer: unknown;
                customer_account: string | null;
                expires_at: number | null;
                id: string;
                livemode: boolean;
                max_redemptions: number | null;
                metadata: Record<string, string> | null;
                object: "promotion_code";
                promotion: { coupon: unknown; type: "coupon" };
                restrictions: {
                  currency_options?: Record<string, { minimum_amount: number }>;
                  first_time_transaction: boolean;
                  minimum_amount: number | null;
                  minimum_amount_currency: string | null;
                };
                times_redeemed: number;
              }
            | null;
          source: {
            coupon:
              | string
              | {
                  amount_off: number | null;
                  applies_to?: { products: string[] };
                  created: number;
                  currency: string | null;
                  currency_options?: Record<string, { amount_off: number }>;
                  duration: "forever" | "once" | "repeating";
                  duration_in_months: number | null;
                  id: string;
                  livemode: boolean;
                  max_redemptions: number | null;
                  metadata: Record<string, string> | null;
                  name: string | null;
                  object: "coupon";
                  percent_off: number | null;
                  redeem_by: number | null;
                  times_redeemed: number;
                  valid: boolean;
                }
              | null;
            type: "coupon";
          };
          start: number;
          subscription: string | null;
          subscription_item: string | null;
        };
      }[];
      id: string;
      metadata: Record<string, string> | null;
      object: "item";
      price: {
        active: boolean;
        billing_scheme: "per_unit" | "tiered";
        created: number;
        currency: string;
        currency_options?: Record<
          string,
          {
            custom_unit_amount: {
              maximum: number | null;
              minimum: number | null;
              preset: number | null;
            } | null;
            tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
            tiers?: {
              flat_amount: number | null;
              flat_amount_decimal: string | null;
              unit_amount: number | null;
              unit_amount_decimal: string | null;
              up_to: number | null;
            }[];
            unit_amount: number | null;
            unit_amount_decimal: string | null;
          }
        >;
        custom_unit_amount: {
          maximum: number | null;
          minimum: number | null;
          preset: number | null;
        } | null;
        id: string;
        livemode: boolean;
        lookup_key: string | null;
        metadata: Record<string, string>;
        nickname: string | null;
        object: "price";
        product:
          | string
          | {
              active: boolean;
              created: number;
              default_price?: string | unknown | null;
              description: string | null;
              id: string;
              images: string[];
              livemode: boolean;
              marketing_features: { name?: string }[];
              metadata: Record<string, string>;
              name: string;
              object: "product";
              package_dimensions: {
                height: number;
                length: number;
                weight: number;
                width: number;
              } | null;
              shippable: boolean | null;
              statement_descriptor?: string | null;
              tax_code?:
                | string
                | {
                    description: string;
                    id: string;
                    name: string;
                    object: "tax_code";
                  }
                | null;
              type: "good" | "service";
              unit_label?: string | null;
              updated: number;
              url: string | null;
            }
          | { deleted: true; id: string; object: "product" };
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count: number;
          meter: string | null;
          trial_period_days: number | null;
          usage_type: "licensed" | "metered";
        } | null;
        tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
        tiers?: {
          flat_amount: number | null;
          flat_amount_decimal: string | null;
          unit_amount: number | null;
          unit_amount_decimal: string | null;
          up_to: number | null;
        }[];
        tiers_mode: "graduated" | "volume" | null;
        transform_quantity: { divide_by: number; round: "down" | "up" } | null;
        type: "one_time" | "recurring";
        unit_amount: number | null;
        unit_amount_decimal: string | null;
      } | null;
      quantity: number | null;
      taxes?: {
        amount: number;
        rate: {
          active: boolean;
          country: string | null;
          created: number;
          description: string | null;
          display_name: string;
          effective_percentage: number | null;
          flat_amount: { amount: number; currency: string } | null;
          id: string;
          inclusive: boolean;
          jurisdiction: string | null;
          jurisdiction_level:
            | "city"
            | "country"
            | "county"
            | "district"
            | "multiple"
            | "state"
            | null;
          livemode: boolean;
          metadata: Record<string, string> | null;
          object: "tax_rate";
          percentage: number;
          rate_type: "flat_amount" | "percentage" | null;
          state: string | null;
          tax_type:
            | "amusement_tax"
            | "communications_tax"
            | "gst"
            | "hst"
            | "igst"
            | "jct"
            | "lease_tax"
            | "pst"
            | "qst"
            | "retail_delivery_fee"
            | "rst"
            | "sales_tax"
            | "service_tax"
            | "vat"
            | null;
        };
        taxability_reason:
          | "customer_exempt"
          | "not_collecting"
          | "not_subject_to_tax"
          | "not_supported"
          | "portion_product_exempt"
          | "portion_reduced_rated"
          | "portion_standard_rated"
          | "product_exempt"
          | "product_exempt_holiday"
          | "proportionally_rated"
          | "reduced_rated"
          | "reverse_charge"
          | "standard_rated"
          | "taxable_basis_reduced"
          | "zero_rated"
          | null;
        taxable_amount: number | null;
      }[];
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  locale:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-GB"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW"
    | null;
  managed_payments: { enabled: boolean } | null;
  metadata: Record<string, string> | null;
  mode: "payment" | "setup" | "subscription";
  name_collection?: {
    business?: { enabled: boolean; optional: boolean };
    individual?: { enabled: boolean; optional: boolean };
  };
  object: "checkout.session";
  optional_items?:
    | {
        adjustable_quantity: {
          enabled: boolean;
          maximum: number | null;
          minimum: number | null;
        } | null;
        price: string;
        quantity: number;
      }[]
    | null;
  origin_context: "mobile_app" | "web" | null;
  payment_intent: unknown;
  payment_link: unknown;
  payment_method_collection: "always" | "if_required" | null;
  payment_method_configuration_details: {
    id: string;
    parent: string | null;
  } | null;
  payment_method_options: unknown;
  payment_method_types: string[];
  payment_status: "no_payment_required" | "paid" | "unpaid";
  permissions: {
    update_shipping_details: "client_only" | "server_only" | null;
  } | null;
  phone_number_collection?: { enabled: boolean };
  presentment_details?: {
    presentment_amount: number;
    presentment_currency: string;
  };
  recovered_from: string | null;
  redirect_on_completion?: "always" | "if_required" | "never";
  return_url?: string;
  saved_payment_method_options: {
    allow_redisplay_filters: ("always" | "limited" | "unspecified")[] | null;
    payment_method_remove: "disabled" | "enabled" | null;
    payment_method_save: "disabled" | "enabled" | null;
  } | null;
  setup_intent: unknown;
  shipping_address_collection: {
    allowed_countries: (
      | "AC"
      | "AD"
      | "AE"
      | "AF"
      | "AG"
      | "AI"
      | "AL"
      | "AM"
      | "AO"
      | "AQ"
      | "AR"
      | "AT"
      | "AU"
      | "AW"
      | "AX"
      | "AZ"
      | "BA"
      | "BB"
      | "BD"
      | "BE"
      | "BF"
      | "BG"
      | "BH"
      | "BI"
      | "BJ"
      | "BL"
      | "BM"
      | "BN"
      | "BO"
      | "BQ"
      | "BR"
      | "BS"
      | "BT"
      | "BV"
      | "BW"
      | "BY"
      | "BZ"
      | "CA"
      | "CD"
      | "CF"
      | "CG"
      | "CH"
      | "CI"
      | "CK"
      | "CL"
      | "CM"
      | "CN"
      | "CO"
      | "CR"
      | "CV"
      | "CW"
      | "CY"
      | "CZ"
      | "DE"
      | "DJ"
      | "DK"
      | "DM"
      | "DO"
      | "DZ"
      | "EC"
      | "EE"
      | "EG"
      | "EH"
      | "ER"
      | "ES"
      | "ET"
      | "FI"
      | "FJ"
      | "FK"
      | "FO"
      | "FR"
      | "GA"
      | "GB"
      | "GD"
      | "GE"
      | "GF"
      | "GG"
      | "GH"
      | "GI"
      | "GL"
      | "GM"
      | "GN"
      | "GP"
      | "GQ"
      | "GR"
      | "GS"
      | "GT"
      | "GU"
      | "GW"
      | "GY"
      | "HK"
      | "HN"
      | "HR"
      | "HT"
      | "HU"
      | "ID"
      | "IE"
      | "IL"
      | "IM"
      | "IN"
      | "IO"
      | "IQ"
      | "IS"
      | "IT"
      | "JE"
      | "JM"
      | "JO"
      | "JP"
      | "KE"
      | "KG"
      | "KH"
      | "KI"
      | "KM"
      | "KN"
      | "KR"
      | "KW"
      | "KY"
      | "KZ"
      | "LA"
      | "LB"
      | "LC"
      | "LI"
      | "LK"
      | "LR"
      | "LS"
      | "LT"
      | "LU"
      | "LV"
      | "LY"
      | "MA"
      | "MC"
      | "MD"
      | "ME"
      | "MF"
      | "MG"
      | "MK"
      | "ML"
      | "MM"
      | "MN"
      | "MO"
      | "MQ"
      | "MR"
      | "MS"
      | "MT"
      | "MU"
      | "MV"
      | "MW"
      | "MX"
      | "MY"
      | "MZ"
      | "NA"
      | "NC"
      | "NE"
      | "NG"
      | "NI"
      | "NL"
      | "NO"
      | "NP"
      | "NR"
      | "NU"
      | "NZ"
      | "OM"
      | "PA"
      | "PE"
      | "PF"
      | "PG"
      | "PH"
      | "PK"
      | "PL"
      | "PM"
      | "PN"
      | "PR"
      | "PS"
      | "PT"
      | "PY"
      | "QA"
      | "RE"
      | "RO"
      | "RS"
      | "RU"
      | "RW"
      | "SA"
      | "SB"
      | "SC"
      | "SD"
      | "SE"
      | "SG"
      | "SH"
      | "SI"
      | "SJ"
      | "SK"
      | "SL"
      | "SM"
      | "SN"
      | "SO"
      | "SR"
      | "SS"
      | "ST"
      | "SV"
      | "SX"
      | "SZ"
      | "TA"
      | "TC"
      | "TD"
      | "TF"
      | "TG"
      | "TH"
      | "TJ"
      | "TK"
      | "TL"
      | "TM"
      | "TN"
      | "TO"
      | "TR"
      | "TT"
      | "TV"
      | "TW"
      | "TZ"
      | "UA"
      | "UG"
      | "US"
      | "UY"
      | "UZ"
      | "VA"
      | "VC"
      | "VE"
      | "VG"
      | "VN"
      | "VU"
      | "WF"
      | "WS"
      | "XK"
      | "YE"
      | "YT"
      | "ZA"
      | "ZM"
      | "ZW"
      | "ZZ"
    )[];
  } | null;
  shipping_cost: {
    amount_subtotal: number;
    amount_tax: number;
    amount_total: number;
    shipping_rate:
      | string
      | {
          active: boolean;
          created: number;
          delivery_estimate: {
            maximum: {
              unit: "business_day" | "day" | "hour" | "month" | "week";
              value: number;
            } | null;
            minimum: {
              unit: "business_day" | "day" | "hour" | "month" | "week";
              value: number;
            } | null;
          } | null;
          display_name: string | null;
          fixed_amount?: {
            amount: number;
            currency: string;
            currency_options?: Record<
              string,
              {
                amount: number;
                tax_behavior: "exclusive" | "inclusive" | "unspecified";
              }
            >;
          };
          id: string;
          livemode: boolean;
          metadata: Record<string, string>;
          object: "shipping_rate";
          tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
          tax_code:
            | string
            | {
                description: string;
                id: string;
                name: string;
                object: "tax_code";
              }
            | null;
          type: "fixed_amount";
        }
      | null;
    taxes?: {
      amount: number;
      rate: {
        active: boolean;
        country: string | null;
        created: number;
        description: string | null;
        display_name: string;
        effective_percentage: number | null;
        flat_amount: { amount: number; currency: string } | null;
        id: string;
        inclusive: boolean;
        jurisdiction: string | null;
        jurisdiction_level:
          | "city"
          | "country"
          | "county"
          | "district"
          | "multiple"
          | "state"
          | null;
        livemode: boolean;
        metadata: Record<string, string> | null;
        object: "tax_rate";
        percentage: number;
        rate_type: "flat_amount" | "percentage" | null;
        state: string | null;
        tax_type:
          | "amusement_tax"
          | "communications_tax"
          | "gst"
          | "hst"
          | "igst"
          | "jct"
          | "lease_tax"
          | "pst"
          | "qst"
          | "retail_delivery_fee"
          | "rst"
          | "sales_tax"
          | "service_tax"
          | "vat"
          | null;
      };
      taxability_reason:
        | "customer_exempt"
        | "not_collecting"
        | "not_subject_to_tax"
        | "not_supported"
        | "portion_product_exempt"
        | "portion_reduced_rated"
        | "portion_standard_rated"
        | "product_exempt"
        | "product_exempt_holiday"
        | "proportionally_rated"
        | "reduced_rated"
        | "reverse_charge"
        | "standard_rated"
        | "taxable_basis_reduced"
        | "zero_rated"
        | null;
      taxable_amount: number | null;
    }[];
  } | null;
  shipping_options: {
    shipping_amount: number;
    shipping_rate:
      | string
      | {
          active: boolean;
          created: number;
          delivery_estimate: {
            maximum: {
              unit: "business_day" | "day" | "hour" | "month" | "week";
              value: number;
            } | null;
            minimum: {
              unit: "business_day" | "day" | "hour" | "month" | "week";
              value: number;
            } | null;
          } | null;
          display_name: string | null;
          fixed_amount?: {
            amount: number;
            currency: string;
            currency_options?: Record<
              string,
              {
                amount: number;
                tax_behavior: "exclusive" | "inclusive" | "unspecified";
              }
            >;
          };
          id: string;
          livemode: boolean;
          metadata: Record<string, string>;
          object: "shipping_rate";
          tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
          tax_code:
            | string
            | {
                description: string;
                id: string;
                name: string;
                object: "tax_code";
              }
            | null;
          type: "fixed_amount";
        };
  }[];
  status: "complete" | "expired" | "open" | null;
  submit_type: "auto" | "book" | "donate" | "pay" | "subscribe" | null;
  subscription: unknown;
  success_url: string | null;
  tax_id_collection?: { enabled: boolean; required: "if_supported" | "never" };
  total_details: {
    amount_discount: number;
    amount_shipping: number | null;
    amount_tax: number;
    breakdown?: {
      discounts: {
        amount: number;
        discount: {
          checkout_session: string | null;
          customer: unknown;
          customer_account: string | null;
          end: number | null;
          id: string;
          invoice: string | null;
          invoice_item: string | null;
          object: "discount";
          promotion_code:
            | string
            | {
                active: boolean;
                code: string;
                created: number;
                customer: unknown;
                customer_account: string | null;
                expires_at: number | null;
                id: string;
                livemode: boolean;
                max_redemptions: number | null;
                metadata: Record<string, string> | null;
                object: "promotion_code";
                promotion: { coupon: unknown; type: "coupon" };
                restrictions: {
                  currency_options?: Record<string, { minimum_amount: number }>;
                  first_time_transaction: boolean;
                  minimum_amount: number | null;
                  minimum_amount_currency: string | null;
                };
                times_redeemed: number;
              }
            | null;
          source: { coupon: unknown; type: "coupon" };
          start: number;
          subscription: string | null;
          subscription_item: string | null;
        };
      }[];
      taxes: {
        amount: number;
        rate: {
          active: boolean;
          country: string | null;
          created: number;
          description: string | null;
          display_name: string;
          effective_percentage: number | null;
          flat_amount: { amount: number; currency: string } | null;
          id: string;
          inclusive: boolean;
          jurisdiction: string | null;
          jurisdiction_level:
            | "city"
            | "country"
            | "county"
            | "district"
            | "multiple"
            | "state"
            | null;
          livemode: boolean;
          metadata: Record<string, string> | null;
          object: "tax_rate";
          percentage: number;
          rate_type: "flat_amount" | "percentage" | null;
          state: string | null;
          tax_type:
            | "amusement_tax"
            | "communications_tax"
            | "gst"
            | "hst"
            | "igst"
            | "jct"
            | "lease_tax"
            | "pst"
            | "qst"
            | "retail_delivery_fee"
            | "rst"
            | "sales_tax"
            | "service_tax"
            | "vat"
            | null;
        };
        taxability_reason:
          | "customer_exempt"
          | "not_collecting"
          | "not_subject_to_tax"
          | "not_supported"
          | "portion_product_exempt"
          | "portion_reduced_rated"
          | "portion_standard_rated"
          | "product_exempt"
          | "product_exempt_holiday"
          | "proportionally_rated"
          | "reduced_rated"
          | "reverse_charge"
          | "standard_rated"
          | "taxable_basis_reduced"
          | "zero_rated"
          | null;
        taxable_amount: number | null;
      }[];
    };
  } | null;
  ui_mode: "elements" | "embedded_page" | "form" | "hosted_page" | null;
  url: string | null;
  wallet_options: { link?: { display?: "auto" | "never" } } | null;
}
export const PostCheckoutSessionsOutput =
  /*@__PURE__*/ Schema.Struct({
    adaptive_pricing: Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    after_expiration: Schema.NullOr(
      Schema.Struct({
        recovery: Schema.NullOr(
          Schema.Struct({
            allow_promotion_codes: Schema.Boolean,
            enabled: Schema.Boolean,
            expires_at: Schema.NullOr(Schema.Number),
            url: Schema.NullOr(Schema.String),
          }),
        ),
      }),
    ),
    allow_promotion_codes: Schema.NullOr(Schema.Boolean),
    amount_subtotal: Schema.NullOr(Schema.Number),
    amount_total: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.Struct({
      enabled: Schema.Boolean,
      liability: Schema.NullOr(
        Schema.Struct({
          account: Schema.optional(Schema.Unknown),
          type: Schema.Literals(["account", "self"]),
        }),
      ),
      provider: Schema.NullOr(Schema.String),
      status: Schema.NullOr(
        Schema.Literals(["complete", "failed", "requires_location_inputs"]),
      ),
    }),
    billing_address_collection: Schema.NullOr(
      Schema.Literals(["auto", "required"]),
    ),
    branding_settings: Schema.optional(
      Schema.Struct({
        background_color: Schema.String,
        border_style: Schema.Literals(["pill", "rectangular", "rounded"]),
        button_color: Schema.String,
        display_name: Schema.String,
        font_family: Schema.String,
        icon: Schema.NullOr(
          Schema.Struct({
            file: Schema.optional(Schema.String),
            type: Schema.Literals(["file", "url"]),
            url: Schema.optional(Schema.String),
          }),
        ),
        logo: Schema.NullOr(
          Schema.Struct({
            file: Schema.optional(Schema.String),
            type: Schema.Literals(["file", "url"]),
            url: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    cancel_url: Schema.NullOr(Schema.String),
    client_reference_id: Schema.NullOr(Schema.String),
    client_secret: SensitiveOutputNullableString,
    collected_information: Schema.NullOr(
      Schema.Struct({
        business_name: Schema.NullOr(Schema.String),
        individual_name: Schema.NullOr(Schema.String),
        shipping_details: Schema.NullOr(
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
          }),
        ),
      }),
    ),
    consent: Schema.NullOr(
      Schema.Struct({
        promotions: Schema.NullOr(Schema.Literals(["opt_in", "opt_out"])),
        terms_of_service: Schema.NullOr(Schema.Literals(["accepted"])),
      }),
    ),
    consent_collection: Schema.NullOr(
      Schema.Struct({
        payment_method_reuse_agreement: Schema.NullOr(
          Schema.Struct({
            position: Schema.Literals(["auto", "hidden"]),
          }),
        ),
        promotions: Schema.NullOr(Schema.Literals(["auto", "none"])),
        terms_of_service: Schema.NullOr(Schema.Literals(["none", "required"])),
      }),
    ),
    created: Schema.Number,
    currency: Schema.NullOr(Schema.String),
    currency_conversion: Schema.NullOr(
      Schema.Struct({
        amount_subtotal: Schema.Number,
        amount_total: Schema.Number,
        fx_rate: Schema.String,
        source_currency: Schema.String,
      }),
    ),
    custom_fields: Schema.Array(
      Schema.Struct({
        dropdown: Schema.optional(
          Schema.Struct({
            default_value: Schema.NullOr(Schema.String),
            options: Schema.Array(
              Schema.Struct({
                label: Schema.String,
                value: Schema.String,
              }),
            ),
            value: Schema.NullOr(Schema.String),
          }),
        ),
        key: Schema.String,
        label: Schema.Struct({
          custom: Schema.NullOr(Schema.String),
          type: Schema.Literals(["custom"]),
        }),
        numeric: Schema.optional(
          Schema.Struct({
            default_value: Schema.NullOr(Schema.String),
            maximum_length: Schema.NullOr(Schema.Number),
            minimum_length: Schema.NullOr(Schema.Number),
            value: Schema.NullOr(Schema.String),
          }),
        ),
        optional: Schema.Boolean,
        text: Schema.optional(
          Schema.Struct({
            default_value: Schema.NullOr(Schema.String),
            maximum_length: Schema.NullOr(Schema.Number),
            minimum_length: Schema.NullOr(Schema.Number),
            value: Schema.NullOr(Schema.String),
          }),
        ),
        type: Schema.Literals(["dropdown", "numeric", "text"]),
      }),
    ),
    custom_text: Schema.Struct({
      after_submit: Schema.NullOr(
        Schema.Struct({
          message: Schema.String,
        }),
      ),
      shipping_address: Schema.NullOr(
        Schema.Struct({
          message: Schema.String,
        }),
      ),
      submit: Schema.NullOr(
        Schema.Struct({
          message: Schema.String,
        }),
      ),
      terms_of_service_acceptance: Schema.NullOr(
        Schema.Struct({
          message: Schema.String,
        }),
      ),
    }),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_creation: Schema.NullOr(
      Schema.Literals(["always", "if_required"]),
    ),
    customer_details: Schema.NullOr(
      Schema.Struct({
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
        business_name: Schema.NullOr(Schema.String),
        email: Schema.NullOr(Schema.String),
        individual_name: Schema.NullOr(Schema.String),
        name: Schema.NullOr(Schema.String),
        phone: Schema.NullOr(Schema.String),
        tax_exempt: Schema.NullOr(
          Schema.Literals(["exempt", "none", "reverse"]),
        ),
        tax_ids: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals([
                "ad_nrt",
                "ae_trn",
                "al_tin",
                "am_tin",
                "ao_tin",
                "ar_cuit",
                "au_abn",
                "au_arn",
                "aw_tin",
                "az_tin",
                "ba_tin",
                "bb_tin",
                "bd_bin",
                "bf_ifu",
                "bg_uic",
                "bh_vat",
                "bj_ifu",
                "bo_tin",
                "br_cnpj",
                "br_cpf",
                "bs_tin",
                "by_tin",
                "ca_bn",
                "ca_gst_hst",
                "ca_pst_bc",
                "ca_pst_mb",
                "ca_pst_sk",
                "ca_qst",
                "cd_nif",
                "ch_uid",
                "ch_vat",
                "cl_tin",
                "cm_niu",
                "cn_tin",
                "co_nit",
                "cr_tin",
                "cv_nif",
                "de_stn",
                "do_rcn",
                "ec_ruc",
                "eg_tin",
                "es_cif",
                "et_tin",
                "eu_oss_vat",
                "eu_vat",
                "fo_vat",
                "gb_vat",
                "ge_vat",
                "gi_tin",
                "gn_nif",
                "hk_br",
                "hr_oib",
                "hu_tin",
                "id_npwp",
                "il_vat",
                "in_gst",
                "is_vat",
                "it_cf",
                "jp_cn",
                "jp_rn",
                "jp_trn",
                "ke_pin",
                "kg_tin",
                "kh_tin",
                "kr_brn",
                "kz_bin",
                "la_tin",
                "li_uid",
                "li_vat",
                "lk_vat",
                "ma_vat",
                "md_vat",
                "me_pib",
                "mk_vat",
                "mr_nif",
                "mx_rfc",
                "my_frp",
                "my_itn",
                "my_sst",
                "ng_tin",
                "no_vat",
                "no_voec",
                "np_pan",
                "nz_gst",
                "om_vat",
                "pe_ruc",
                "ph_tin",
                "pl_nip",
                "py_ruc",
                "ro_tin",
                "rs_pib",
                "ru_inn",
                "ru_kpp",
                "sa_vat",
                "sg_gst",
                "sg_uen",
                "si_tin",
                "sn_ninea",
                "sr_fin",
                "sv_nit",
                "th_vat",
                "tj_tin",
                "tr_tin",
                "tw_vat",
                "tz_vat",
                "ua_vat",
                "ug_tin",
                "unknown",
                "us_ein",
                "uy_ruc",
                "uz_tin",
                "uz_vat",
                "ve_rif",
                "vn_tin",
                "za_vat",
                "zm_tin",
                "zw_tin",
              ]),
              value: Schema.NullOr(Schema.String),
            }),
          ),
        ),
      }),
    ),
    customer_email: Schema.NullOr(Schema.String),
    discounts: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          coupon: Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                amount_off: Schema.NullOr(Schema.Number),
                applies_to: Schema.optional(
                  Schema.Struct({
                    products: Schema.Array(Schema.String),
                  }),
                ),
                created: Schema.Number,
                currency: Schema.NullOr(Schema.String),
                currency_options: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      amount_off: Schema.Number,
                    }),
                  ),
                ),
                duration: Schema.Literals(["forever", "once", "repeating"]),
                duration_in_months: Schema.NullOr(Schema.Number),
                id: Schema.String,
                livemode: Schema.Boolean,
                max_redemptions: Schema.NullOr(Schema.Number),
                metadata: Schema.NullOr(
                  Schema.Record(Schema.String, Schema.String),
                ),
                name: Schema.NullOr(Schema.String),
                object: Schema.Literals(["coupon"]),
                percent_off: Schema.NullOr(Schema.Number),
                redeem_by: Schema.NullOr(Schema.Number),
                times_redeemed: Schema.Number,
                valid: Schema.Boolean,
              }),
            ]),
          ),
          promotion_code: Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                active: Schema.Boolean,
                code: Schema.String,
                created: Schema.Number,
                customer: Schema.Unknown,
                customer_account: Schema.NullOr(Schema.String),
                expires_at: Schema.NullOr(Schema.Number),
                id: Schema.String,
                livemode: Schema.Boolean,
                max_redemptions: Schema.NullOr(Schema.Number),
                metadata: Schema.NullOr(
                  Schema.Record(Schema.String, Schema.String),
                ),
                object: Schema.Literals(["promotion_code"]),
                promotion: Schema.Struct({
                  coupon: Schema.NullOr(
                    Schema.Union([
                      Schema.String,
                      Schema.Struct({
                        amount_off: Schema.NullOr(Schema.Number),
                        applies_to: Schema.optional(
                          Schema.Struct({
                            products: Schema.Array(Schema.String),
                          }),
                        ),
                        created: Schema.Number,
                        currency: Schema.NullOr(Schema.String),
                        currency_options: Schema.optional(
                          Schema.Record(
                            Schema.String,
                            Schema.Struct({
                              amount_off: Schema.Number,
                            }),
                          ),
                        ),
                        duration: Schema.Literals([
                          "forever",
                          "once",
                          "repeating",
                        ]),
                        duration_in_months: Schema.NullOr(Schema.Number),
                        id: Schema.String,
                        livemode: Schema.Boolean,
                        max_redemptions: Schema.NullOr(Schema.Number),
                        metadata: Schema.NullOr(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                        name: Schema.NullOr(Schema.String),
                        object: Schema.Literals(["coupon"]),
                        percent_off: Schema.NullOr(Schema.Number),
                        redeem_by: Schema.NullOr(Schema.Number),
                        times_redeemed: Schema.Number,
                        valid: Schema.Boolean,
                      }),
                    ]),
                  ),
                  type: Schema.Literals(["coupon"]),
                }),
                restrictions: Schema.Struct({
                  currency_options: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        minimum_amount: Schema.Number,
                      }),
                    ),
                  ),
                  first_time_transaction: Schema.Boolean,
                  minimum_amount: Schema.NullOr(Schema.Number),
                  minimum_amount_currency: Schema.NullOr(Schema.String),
                }),
                times_redeemed: Schema.Number,
              }),
            ]),
          ),
        }),
      ),
    ),
    excluded_payment_method_types: Schema.optional(Schema.Array(Schema.String)),
    expires_at: Schema.Number,
    id: Schema.String,
    integration_identifier: Schema.NullOr(Schema.String),
    invoice: Schema.Unknown,
    invoice_creation: Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
        invoice_data: Schema.Struct({
          account_tax_ids: Schema.NullOr(
            Schema.Array(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  country: Schema.NullOr(Schema.String),
                  created: Schema.Number,
                  customer: Schema.Unknown,
                  customer_account: Schema.NullOr(Schema.String),
                  id: Schema.String,
                  livemode: Schema.Boolean,
                  object: Schema.Literals(["tax_id"]),
                  owner: Schema.NullOr(
                    Schema.Struct({
                      account: Schema.optional(Schema.Unknown),
                      application: Schema.optional(
                        Schema.Union([
                          Schema.String,
                          Schema.Struct({
                            id: Schema.String,
                            name: Schema.NullOr(Schema.String),
                            object: Schema.Literals(["application"]),
                          }),
                        ]),
                      ),
                      customer: Schema.optional(Schema.Unknown),
                      customer_account: Schema.NullOr(Schema.String),
                      type: Schema.Literals([
                        "account",
                        "application",
                        "customer",
                        "self",
                      ]),
                    }),
                  ),
                  type: Schema.Literals([
                    "ad_nrt",
                    "ae_trn",
                    "al_tin",
                    "am_tin",
                    "ao_tin",
                    "ar_cuit",
                    "au_abn",
                    "au_arn",
                    "aw_tin",
                    "az_tin",
                    "ba_tin",
                    "bb_tin",
                    "bd_bin",
                    "bf_ifu",
                    "bg_uic",
                    "bh_vat",
                    "bj_ifu",
                    "bo_tin",
                    "br_cnpj",
                    "br_cpf",
                    "bs_tin",
                    "by_tin",
                    "ca_bn",
                    "ca_gst_hst",
                    "ca_pst_bc",
                    "ca_pst_mb",
                    "ca_pst_sk",
                    "ca_qst",
                    "cd_nif",
                    "ch_uid",
                    "ch_vat",
                    "cl_tin",
                    "cm_niu",
                    "cn_tin",
                    "co_nit",
                    "cr_tin",
                    "cv_nif",
                    "de_stn",
                    "do_rcn",
                    "ec_ruc",
                    "eg_tin",
                    "es_cif",
                    "et_tin",
                    "eu_oss_vat",
                    "eu_vat",
                    "fo_vat",
                    "gb_vat",
                    "ge_vat",
                    "gi_tin",
                    "gn_nif",
                    "hk_br",
                    "hr_oib",
                    "hu_tin",
                    "id_npwp",
                    "il_vat",
                    "in_gst",
                    "is_vat",
                    "it_cf",
                    "jp_cn",
                    "jp_rn",
                    "jp_trn",
                    "ke_pin",
                    "kg_tin",
                    "kh_tin",
                    "kr_brn",
                    "kz_bin",
                    "la_tin",
                    "li_uid",
                    "li_vat",
                    "lk_vat",
                    "ma_vat",
                    "md_vat",
                    "me_pib",
                    "mk_vat",
                    "mr_nif",
                    "mx_rfc",
                    "my_frp",
                    "my_itn",
                    "my_sst",
                    "ng_tin",
                    "no_vat",
                    "no_voec",
                    "np_pan",
                    "nz_gst",
                    "om_vat",
                    "pe_ruc",
                    "ph_tin",
                    "pl_nip",
                    "py_ruc",
                    "ro_tin",
                    "rs_pib",
                    "ru_inn",
                    "ru_kpp",
                    "sa_vat",
                    "sg_gst",
                    "sg_uen",
                    "si_tin",
                    "sn_ninea",
                    "sr_fin",
                    "sv_nit",
                    "th_vat",
                    "tj_tin",
                    "tr_tin",
                    "tw_vat",
                    "tz_vat",
                    "ua_vat",
                    "ug_tin",
                    "unknown",
                    "us_ein",
                    "uy_ruc",
                    "uz_tin",
                    "uz_vat",
                    "ve_rif",
                    "vn_tin",
                    "za_vat",
                    "zm_tin",
                    "zw_tin",
                  ]),
                  value: Schema.String,
                  verification: Schema.NullOr(
                    Schema.Struct({
                      status: Schema.Literals([
                        "pending",
                        "unavailable",
                        "unverified",
                        "verified",
                      ]),
                      verified_address: Schema.NullOr(Schema.String),
                      verified_name: Schema.NullOr(Schema.String),
                    }),
                  ),
                }),
                Schema.Struct({
                  deleted: Schema.Literals([true]),
                  id: Schema.String,
                  object: Schema.Literals(["tax_id"]),
                }),
              ]),
            ),
          ),
          custom_fields: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                value: Schema.String,
              }),
            ),
          ),
          description: Schema.NullOr(Schema.String),
          footer: Schema.NullOr(Schema.String),
          issuer: Schema.NullOr(
            Schema.Struct({
              account: Schema.optional(Schema.Unknown),
              type: Schema.Literals(["account", "self"]),
            }),
          ),
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          rendering_options: Schema.NullOr(
            Schema.Struct({
              amount_tax_display: Schema.NullOr(Schema.String),
              template: Schema.NullOr(Schema.String),
            }),
          ),
        }),
      }),
    ),
    line_items: Schema.optional(
      Schema.Struct({
        data: Schema.Array(
          Schema.Struct({
            adjustable_quantity: Schema.NullOr(
              Schema.Struct({
                enabled: Schema.Boolean,
                maximum: Schema.NullOr(Schema.Number),
                minimum: Schema.NullOr(Schema.Number),
              }),
            ),
            amount_discount: Schema.Number,
            amount_subtotal: Schema.Number,
            amount_tax: Schema.Number,
            amount_total: Schema.Number,
            currency: Schema.String,
            description: Schema.NullOr(Schema.String),
            discounts: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  amount: Schema.Number,
                  discount: Schema.Struct({
                    checkout_session: Schema.NullOr(Schema.String),
                    customer: Schema.Unknown,
                    customer_account: Schema.NullOr(Schema.String),
                    end: Schema.NullOr(Schema.Number),
                    id: Schema.String,
                    invoice: Schema.NullOr(Schema.String),
                    invoice_item: Schema.NullOr(Schema.String),
                    object: Schema.Literals(["discount"]),
                    promotion_code: Schema.NullOr(
                      Schema.Union([
                        Schema.String,
                        Schema.Struct({
                          active: Schema.Boolean,
                          code: Schema.String,
                          created: Schema.Number,
                          customer: Schema.Unknown,
                          customer_account: Schema.NullOr(Schema.String),
                          expires_at: Schema.NullOr(Schema.Number),
                          id: Schema.String,
                          livemode: Schema.Boolean,
                          max_redemptions: Schema.NullOr(Schema.Number),
                          metadata: Schema.NullOr(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          object: Schema.Literals(["promotion_code"]),
                          promotion: Schema.Struct({
                            coupon: Schema.Unknown,
                            type: Schema.Literals(["coupon"]),
                          }),
                          restrictions: Schema.Struct({
                            currency_options: Schema.optional(
                              Schema.Record(
                                Schema.String,
                                Schema.Struct({
                                  minimum_amount: Schema.Number,
                                }),
                              ),
                            ),
                            first_time_transaction: Schema.Boolean,
                            minimum_amount: Schema.NullOr(Schema.Number),
                            minimum_amount_currency: Schema.NullOr(
                              Schema.String,
                            ),
                          }),
                          times_redeemed: Schema.Number,
                        }),
                      ]),
                    ),
                    source: Schema.Struct({
                      coupon: Schema.NullOr(
                        Schema.Union([
                          Schema.String,
                          Schema.Struct({
                            amount_off: Schema.NullOr(Schema.Number),
                            applies_to: Schema.optional(
                              Schema.Struct({
                                products: Schema.Array(Schema.String),
                              }),
                            ),
                            created: Schema.Number,
                            currency: Schema.NullOr(Schema.String),
                            currency_options: Schema.optional(
                              Schema.Record(
                                Schema.String,
                                Schema.Struct({
                                  amount_off: Schema.Number,
                                }),
                              ),
                            ),
                            duration: Schema.Literals([
                              "forever",
                              "once",
                              "repeating",
                            ]),
                            duration_in_months: Schema.NullOr(Schema.Number),
                            id: Schema.String,
                            livemode: Schema.Boolean,
                            max_redemptions: Schema.NullOr(Schema.Number),
                            metadata: Schema.NullOr(
                              Schema.Record(Schema.String, Schema.String),
                            ),
                            name: Schema.NullOr(Schema.String),
                            object: Schema.Literals(["coupon"]),
                            percent_off: Schema.NullOr(Schema.Number),
                            redeem_by: Schema.NullOr(Schema.Number),
                            times_redeemed: Schema.Number,
                            valid: Schema.Boolean,
                          }),
                        ]),
                      ),
                      type: Schema.Literals(["coupon"]),
                    }),
                    start: Schema.Number,
                    subscription: Schema.NullOr(Schema.String),
                    subscription_item: Schema.NullOr(Schema.String),
                  }),
                }),
              ),
            ),
            id: Schema.String,
            metadata: Schema.NullOr(
              Schema.Record(Schema.String, Schema.String),
            ),
            object: Schema.Literals(["item"]),
            price: Schema.Unknown,
            quantity: Schema.NullOr(Schema.Number),
            taxes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  amount: Schema.Number,
                  rate: Schema.Struct({
                    active: Schema.Boolean,
                    country: Schema.NullOr(Schema.String),
                    created: Schema.Number,
                    description: Schema.NullOr(Schema.String),
                    display_name: Schema.String,
                    effective_percentage: Schema.NullOr(Schema.Number),
                    flat_amount: Schema.NullOr(
                      Schema.Struct({
                        amount: Schema.Number,
                        currency: Schema.String,
                      }),
                    ),
                    id: Schema.String,
                    inclusive: Schema.Boolean,
                    jurisdiction: Schema.NullOr(Schema.String),
                    jurisdiction_level: Schema.NullOr(
                      Schema.Literals([
                        "city",
                        "country",
                        "county",
                        "district",
                        "multiple",
                        "state",
                      ]),
                    ),
                    livemode: Schema.Boolean,
                    metadata: Schema.NullOr(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    object: Schema.Literals(["tax_rate"]),
                    percentage: Schema.Number,
                    rate_type: Schema.NullOr(
                      Schema.Literals(["flat_amount", "percentage"]),
                    ),
                    state: Schema.NullOr(Schema.String),
                    tax_type: Schema.NullOr(
                      Schema.Literals([
                        "amusement_tax",
                        "communications_tax",
                        "gst",
                        "hst",
                        "igst",
                        "jct",
                        "lease_tax",
                        "pst",
                        "qst",
                        "retail_delivery_fee",
                        "rst",
                        "sales_tax",
                        "service_tax",
                        "vat",
                      ]),
                    ),
                  }),
                  taxability_reason: Schema.NullOr(
                    Schema.Literals([
                      "customer_exempt",
                      "not_collecting",
                      "not_subject_to_tax",
                      "not_supported",
                      "portion_product_exempt",
                      "portion_reduced_rated",
                      "portion_standard_rated",
                      "product_exempt",
                      "product_exempt_holiday",
                      "proportionally_rated",
                      "reduced_rated",
                      "reverse_charge",
                      "standard_rated",
                      "taxable_basis_reduced",
                      "zero_rated",
                    ]),
                  ),
                  taxable_amount: Schema.NullOr(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    livemode: Schema.Boolean,
    locale: Schema.NullOr(
      Schema.Literals([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-GB",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ]),
    ),
    managed_payments: Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    mode: Schema.Literals(["payment", "setup", "subscription"]),
    name_collection: Schema.optional(
      Schema.Struct({
        business: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            optional: Schema.Boolean,
          }),
        ),
        individual: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            optional: Schema.Boolean,
          }),
        ),
      }),
    ),
    object: Schema.Literals(["checkout.session"]),
    optional_items: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            adjustable_quantity: Schema.NullOr(
              Schema.Struct({
                enabled: Schema.Boolean,
                maximum: Schema.NullOr(Schema.Number),
                minimum: Schema.NullOr(Schema.Number),
              }),
            ),
            price: Schema.String,
            quantity: Schema.Number,
          }),
        ),
      ),
    ),
    origin_context: Schema.NullOr(Schema.Literals(["mobile_app", "web"])),
    payment_intent: Schema.Unknown,
    payment_link: Schema.Unknown,
    payment_method_collection: Schema.NullOr(
      Schema.Literals(["always", "if_required"]),
    ),
    payment_method_configuration_details: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        parent: Schema.NullOr(Schema.String),
      }),
    ),
    payment_method_options: Schema.Unknown,
    payment_method_types: Schema.Array(Schema.String),
    payment_status: Schema.Literals(["no_payment_required", "paid", "unpaid"]),
    permissions: Schema.NullOr(
      Schema.Struct({
        update_shipping_details: Schema.NullOr(
          Schema.Literals(["client_only", "server_only"]),
        ),
      }),
    ),
    phone_number_collection: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    presentment_details: Schema.optional(
      Schema.Struct({
        presentment_amount: Schema.Number,
        presentment_currency: Schema.String,
      }),
    ),
    recovered_from: Schema.NullOr(Schema.String),
    redirect_on_completion: Schema.optional(
      Schema.Literals(["always", "if_required", "never"]),
    ),
    return_url: Schema.optional(Schema.String),
    saved_payment_method_options: Schema.NullOr(
      Schema.Struct({
        allow_redisplay_filters: Schema.NullOr(
          Schema.Array(Schema.Literals(["always", "limited", "unspecified"])),
        ),
        payment_method_remove: Schema.NullOr(
          Schema.Literals(["disabled", "enabled"]),
        ),
        payment_method_save: Schema.NullOr(
          Schema.Literals(["disabled", "enabled"]),
        ),
      }),
    ),
    setup_intent: Schema.Unknown,
    shipping_address_collection: Schema.NullOr(
      Schema.Struct({
        allowed_countries: Schema.Array(
          Schema.Literals([
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CV",
            "CW",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FK",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PY",
            "QA",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW",
            "ZZ",
          ]),
        ),
      }),
    ),
    shipping_cost: Schema.NullOr(
      Schema.Struct({
        amount_subtotal: Schema.Number,
        amount_tax: Schema.Number,
        amount_total: Schema.Number,
        shipping_rate: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              active: Schema.Boolean,
              created: Schema.Number,
              delivery_estimate: Schema.NullOr(
                Schema.Struct({
                  maximum: Schema.NullOr(
                    Schema.Struct({
                      unit: Schema.Literals([
                        "business_day",
                        "day",
                        "hour",
                        "month",
                        "week",
                      ]),
                      value: Schema.Number,
                    }),
                  ),
                  minimum: Schema.NullOr(
                    Schema.Struct({
                      unit: Schema.Literals([
                        "business_day",
                        "day",
                        "hour",
                        "month",
                        "week",
                      ]),
                      value: Schema.Number,
                    }),
                  ),
                }),
              ),
              display_name: Schema.NullOr(Schema.String),
              fixed_amount: Schema.optional(
                Schema.Struct({
                  amount: Schema.Number,
                  currency: Schema.String,
                  currency_options: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        amount: Schema.Number,
                        tax_behavior: Schema.Literals([
                          "exclusive",
                          "inclusive",
                          "unspecified",
                        ]),
                      }),
                    ),
                  ),
                }),
              ),
              id: Schema.String,
              livemode: Schema.Boolean,
              metadata: Schema.Record(Schema.String, Schema.String),
              object: Schema.Literals(["shipping_rate"]),
              tax_behavior: Schema.NullOr(
                Schema.Literals(["exclusive", "inclusive", "unspecified"]),
              ),
              tax_code: Schema.NullOr(
                Schema.Union([
                  Schema.String,
                  Schema.Struct({
                    description: Schema.String,
                    id: Schema.String,
                    name: Schema.String,
                    object: Schema.Literals(["tax_code"]),
                  }),
                ]),
              ),
              type: Schema.Literals(["fixed_amount"]),
            }),
          ]),
        ),
        taxes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              amount: Schema.Number,
              rate: Schema.Struct({
                active: Schema.Boolean,
                country: Schema.NullOr(Schema.String),
                created: Schema.Number,
                description: Schema.NullOr(Schema.String),
                display_name: Schema.String,
                effective_percentage: Schema.NullOr(Schema.Number),
                flat_amount: Schema.NullOr(
                  Schema.Struct({
                    amount: Schema.Number,
                    currency: Schema.String,
                  }),
                ),
                id: Schema.String,
                inclusive: Schema.Boolean,
                jurisdiction: Schema.NullOr(Schema.String),
                jurisdiction_level: Schema.NullOr(
                  Schema.Literals([
                    "city",
                    "country",
                    "county",
                    "district",
                    "multiple",
                    "state",
                  ]),
                ),
                livemode: Schema.Boolean,
                metadata: Schema.NullOr(
                  Schema.Record(Schema.String, Schema.String),
                ),
                object: Schema.Literals(["tax_rate"]),
                percentage: Schema.Number,
                rate_type: Schema.NullOr(
                  Schema.Literals(["flat_amount", "percentage"]),
                ),
                state: Schema.NullOr(Schema.String),
                tax_type: Schema.NullOr(
                  Schema.Literals([
                    "amusement_tax",
                    "communications_tax",
                    "gst",
                    "hst",
                    "igst",
                    "jct",
                    "lease_tax",
                    "pst",
                    "qst",
                    "retail_delivery_fee",
                    "rst",
                    "sales_tax",
                    "service_tax",
                    "vat",
                  ]),
                ),
              }),
              taxability_reason: Schema.NullOr(
                Schema.Literals([
                  "customer_exempt",
                  "not_collecting",
                  "not_subject_to_tax",
                  "not_supported",
                  "portion_product_exempt",
                  "portion_reduced_rated",
                  "portion_standard_rated",
                  "product_exempt",
                  "product_exempt_holiday",
                  "proportionally_rated",
                  "reduced_rated",
                  "reverse_charge",
                  "standard_rated",
                  "taxable_basis_reduced",
                  "zero_rated",
                ]),
              ),
              taxable_amount: Schema.NullOr(Schema.Number),
            }),
          ),
        ),
      }),
    ),
    shipping_options: Schema.Array(
      Schema.Struct({
        shipping_amount: Schema.Number,
        shipping_rate: Schema.Union([
          Schema.String,
          Schema.Struct({
            active: Schema.Boolean,
            created: Schema.Number,
            delivery_estimate: Schema.NullOr(
              Schema.Struct({
                maximum: Schema.NullOr(
                  Schema.Struct({
                    unit: Schema.Literals([
                      "business_day",
                      "day",
                      "hour",
                      "month",
                      "week",
                    ]),
                    value: Schema.Number,
                  }),
                ),
                minimum: Schema.NullOr(
                  Schema.Struct({
                    unit: Schema.Literals([
                      "business_day",
                      "day",
                      "hour",
                      "month",
                      "week",
                    ]),
                    value: Schema.Number,
                  }),
                ),
              }),
            ),
            display_name: Schema.NullOr(Schema.String),
            fixed_amount: Schema.optional(
              Schema.Struct({
                amount: Schema.Number,
                currency: Schema.String,
                currency_options: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      amount: Schema.Number,
                      tax_behavior: Schema.Literals([
                        "exclusive",
                        "inclusive",
                        "unspecified",
                      ]),
                    }),
                  ),
                ),
              }),
            ),
            id: Schema.String,
            livemode: Schema.Boolean,
            metadata: Schema.Record(Schema.String, Schema.String),
            object: Schema.Literals(["shipping_rate"]),
            tax_behavior: Schema.NullOr(
              Schema.Literals(["exclusive", "inclusive", "unspecified"]),
            ),
            tax_code: Schema.NullOr(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  description: Schema.String,
                  id: Schema.String,
                  name: Schema.String,
                  object: Schema.Literals(["tax_code"]),
                }),
              ]),
            ),
            type: Schema.Literals(["fixed_amount"]),
          }),
        ]),
      }),
    ),
    status: Schema.NullOr(Schema.Literals(["complete", "expired", "open"])),
    submit_type: Schema.NullOr(
      Schema.Literals(["auto", "book", "donate", "pay", "subscribe"]),
    ),
    subscription: Schema.Unknown,
    success_url: Schema.NullOr(Schema.String),
    tax_id_collection: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        required: Schema.Literals(["if_supported", "never"]),
      }),
    ),
    total_details: Schema.NullOr(
      Schema.Struct({
        amount_discount: Schema.Number,
        amount_shipping: Schema.NullOr(Schema.Number),
        amount_tax: Schema.Number,
        breakdown: Schema.optional(
          Schema.Struct({
            discounts: Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                discount: Schema.Struct({
                  checkout_session: Schema.NullOr(Schema.String),
                  customer: Schema.Unknown,
                  customer_account: Schema.NullOr(Schema.String),
                  end: Schema.NullOr(Schema.Number),
                  id: Schema.String,
                  invoice: Schema.NullOr(Schema.String),
                  invoice_item: Schema.NullOr(Schema.String),
                  object: Schema.Literals(["discount"]),
                  promotion_code: Schema.NullOr(
                    Schema.Union([
                      Schema.String,
                      Schema.Struct({
                        active: Schema.Boolean,
                        code: Schema.String,
                        created: Schema.Number,
                        customer: Schema.Unknown,
                        customer_account: Schema.NullOr(Schema.String),
                        expires_at: Schema.NullOr(Schema.Number),
                        id: Schema.String,
                        livemode: Schema.Boolean,
                        max_redemptions: Schema.NullOr(Schema.Number),
                        metadata: Schema.NullOr(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                        object: Schema.Literals(["promotion_code"]),
                        promotion: Schema.Struct({
                          coupon: Schema.Unknown,
                          type: Schema.Literals(["coupon"]),
                        }),
                        restrictions: Schema.Struct({
                          currency_options: Schema.optional(
                            Schema.Record(
                              Schema.String,
                              Schema.Struct({
                                minimum_amount: Schema.Number,
                              }),
                            ),
                          ),
                          first_time_transaction: Schema.Boolean,
                          minimum_amount: Schema.NullOr(Schema.Number),
                          minimum_amount_currency: Schema.NullOr(Schema.String),
                        }),
                        times_redeemed: Schema.Number,
                      }),
                    ]),
                  ),
                  source: Schema.Struct({
                    coupon: Schema.Unknown,
                    type: Schema.Literals(["coupon"]),
                  }),
                  start: Schema.Number,
                  subscription: Schema.NullOr(Schema.String),
                  subscription_item: Schema.NullOr(Schema.String),
                }),
              }),
            ),
            taxes: Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                rate: Schema.Struct({
                  active: Schema.Boolean,
                  country: Schema.NullOr(Schema.String),
                  created: Schema.Number,
                  description: Schema.NullOr(Schema.String),
                  display_name: Schema.String,
                  effective_percentage: Schema.NullOr(Schema.Number),
                  flat_amount: Schema.NullOr(
                    Schema.Struct({
                      amount: Schema.Number,
                      currency: Schema.String,
                    }),
                  ),
                  id: Schema.String,
                  inclusive: Schema.Boolean,
                  jurisdiction: Schema.NullOr(Schema.String),
                  jurisdiction_level: Schema.NullOr(
                    Schema.Literals([
                      "city",
                      "country",
                      "county",
                      "district",
                      "multiple",
                      "state",
                    ]),
                  ),
                  livemode: Schema.Boolean,
                  metadata: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  object: Schema.Literals(["tax_rate"]),
                  percentage: Schema.Number,
                  rate_type: Schema.NullOr(
                    Schema.Literals(["flat_amount", "percentage"]),
                  ),
                  state: Schema.NullOr(Schema.String),
                  tax_type: Schema.NullOr(
                    Schema.Literals([
                      "amusement_tax",
                      "communications_tax",
                      "gst",
                      "hst",
                      "igst",
                      "jct",
                      "lease_tax",
                      "pst",
                      "qst",
                      "retail_delivery_fee",
                      "rst",
                      "sales_tax",
                      "service_tax",
                      "vat",
                    ]),
                  ),
                }),
                taxability_reason: Schema.NullOr(
                  Schema.Literals([
                    "customer_exempt",
                    "not_collecting",
                    "not_subject_to_tax",
                    "not_supported",
                    "portion_product_exempt",
                    "portion_reduced_rated",
                    "portion_standard_rated",
                    "product_exempt",
                    "product_exempt_holiday",
                    "proportionally_rated",
                    "reduced_rated",
                    "reverse_charge",
                    "standard_rated",
                    "taxable_basis_reduced",
                    "zero_rated",
                  ]),
                ),
                taxable_amount: Schema.NullOr(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
    ui_mode: Schema.NullOr(
      Schema.Literals(["elements", "embedded_page", "form", "hosted_page"]),
    ),
    url: Schema.NullOr(Schema.String),
    wallet_options: Schema.NullOr(
      Schema.Struct({
        link: Schema.optional(
          Schema.Struct({
            display: Schema.optional(Schema.Literals(["auto", "never"])),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PostCheckoutSessionsOutput>;

// The operation
/**
 * Create a Checkout Session
 *
 * <p>Creates a Checkout Session object.</p>
 */
export const PostCheckoutSessions = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostCheckoutSessionsInput,
  outputSchema: PostCheckoutSessionsOutput,
}));
