import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostCheckoutSessionsSessionExpireInput {
  session: string;
  expand?: string[];
}
export const PostCheckoutSessionsSessionExpireInput =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/checkout/sessions/{session}/expire",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCheckoutSessionsSessionExpireInput>;

// Output Schema
export interface PostCheckoutSessionsSessionExpireOutput {
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
export const PostCheckoutSessionsSessionExpireOutput =
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
  }) as unknown as Schema.Codec<PostCheckoutSessionsSessionExpireOutput>;

// The operation
/**
 * Expire a Checkout Session
 *
 * <p>A Checkout Session can be expired when it is in one of these statuses: <code>open</code> </p>
 * <p>After it expires, a customer can’t complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.</p>
 */
export const PostCheckoutSessionsSessionExpire =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostCheckoutSessionsSessionExpireInput,
    outputSchema: PostCheckoutSessionsSessionExpireOutput,
  }));
