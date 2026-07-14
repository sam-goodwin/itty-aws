import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetSubscriptionSchedulesInput {
  canceled_at?: string;
  completed_at?: string;
  created?: string;
  customer?: string;
  customer_account?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  released_at?: string;
  scheduled?: boolean;
  starting_after?: string;
}
export const GetSubscriptionSchedulesInput =
  /*@__PURE__*/ Schema.Struct({
    canceled_at: Schema.optional(Schema.String),
    completed_at: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    released_at: Schema.optional(Schema.String),
    scheduled: Schema.optional(Schema.Boolean),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/subscription_schedules",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetSubscriptionSchedulesInput>;

// Output Schema
export interface GetSubscriptionSchedulesOutput {
  data: {
    application:
      | string
      | { id: string; name: string | null; object: "application" }
      | {
          deleted: true;
          id: string;
          name: string | null;
          object: "application";
        }
      | null;
    billing_mode: {
      flexible: { proration_discounts?: "included" | "itemized" } | null;
      type: "classic" | "flexible";
      updated_at?: number;
    };
    canceled_at: number | null;
    completed_at: number | null;
    created: number;
    current_phase: { end_date: number; start_date: number } | null;
    customer: unknown;
    customer_account: string | null;
    default_settings: {
      application_fee_percent: number | null;
      automatic_tax?: {
        disabled_reason: "requires_location_inputs" | null;
        enabled: boolean;
        liability: { account?: unknown; type: "account" | "self" } | null;
      };
      billing_cycle_anchor: "automatic" | "phase_start";
      billing_thresholds: {
        amount_gte: number | null;
        reset_billing_cycle_anchor: boolean | null;
      } | null;
      collection_method: "charge_automatically" | "send_invoice" | null;
      default_payment_method: unknown;
      description: string | null;
      invoice_settings: {
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
                    application?: unknown;
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
                    status:
                      | "pending"
                      | "unavailable"
                      | "unverified"
                      | "verified";
                    verified_address: string | null;
                    verified_name: string | null;
                  } | null;
                }
              | { deleted: true; id: string; object: "tax_id" }
            )[]
          | null;
        days_until_due: number | null;
        issuer: { account?: unknown; type: "account" | "self" };
      };
      on_behalf_of: unknown;
      transfer_data: {
        amount_percent: number | null;
        destination: unknown;
      } | null;
    };
    end_behavior: "cancel" | "none" | "release" | "renew";
    id: string;
    livemode: boolean;
    metadata: Record<string, string> | null;
    object: "subscription_schedule";
    phases: {
      add_invoice_items: {
        discountable: boolean | null;
        discounts: {
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
          discount:
            | string
            | {
                checkout_session: string | null;
                customer: unknown;
                customer_account: string | null;
                end: number | null;
                id: string;
                invoice: string | null;
                invoice_item: string | null;
                object: "discount";
                promotion_code: unknown;
                source: { coupon: unknown; type: "coupon" };
                start: number;
                subscription: string | null;
                subscription_item: string | null;
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
        }[];
        metadata: Record<string, string> | null;
        period: {
          end: {
            timestamp?: number;
            type: "min_item_period_end" | "phase_end" | "timestamp";
          };
          start: {
            timestamp?: number;
            type: "max_item_period_start" | "phase_start" | "timestamp";
          };
        };
        price:
          | string
          | {
              active: boolean;
              billing_scheme: "per_unit" | "tiered";
              created: number;
              currency: string;
              currency_options?: Record<
                string,
                {
                  custom_unit_amount: unknown;
                  tax_behavior:
                    | "exclusive"
                    | "inclusive"
                    | "unspecified"
                    | null;
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
                    default_price?: unknown;
                    description: string | null;
                    id: string;
                    images: string[];
                    livemode: boolean;
                    marketing_features: { name?: string }[];
                    metadata: Record<string, string>;
                    name: string;
                    object: "product";
                    package_dimensions: unknown;
                    shippable: boolean | null;
                    statement_descriptor?: string | null;
                    tax_code?: unknown;
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
              transform_quantity: {
                divide_by: number;
                round: "down" | "up";
              } | null;
              type: "one_time" | "recurring";
              unit_amount: number | null;
              unit_amount_decimal: string | null;
            }
          | { deleted: true; id: string; object: "price" };
        quantity: number | null;
        tax_rates?:
          | {
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
            }[]
          | null;
      }[];
      application_fee_percent: number | null;
      automatic_tax?: {
        disabled_reason: "requires_location_inputs" | null;
        enabled: boolean;
        liability: { account?: unknown; type: "account" | "self" } | null;
      };
      billing_cycle_anchor: "automatic" | "phase_start" | null;
      billing_thresholds: {
        amount_gte: number | null;
        reset_billing_cycle_anchor: boolean | null;
      } | null;
      collection_method: "charge_automatically" | "send_invoice" | null;
      currency: string;
      default_payment_method: unknown;
      default_tax_rates?:
        | {
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
          }[]
        | null;
      description: string | null;
      discounts: {
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
        discount:
          | string
          | {
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
                      currency_options?: Record<
                        string,
                        { minimum_amount: number }
                      >;
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
      }[];
      end_date: number;
      invoice_settings: {
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
                    application?: unknown;
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
                    status:
                      | "pending"
                      | "unavailable"
                      | "unverified"
                      | "verified";
                    verified_address: string | null;
                    verified_name: string | null;
                  } | null;
                }
              | { deleted: true; id: string; object: "tax_id" }
            )[]
          | null;
        days_until_due: number | null;
        issuer: { account?: unknown; type: "account" | "self" } | null;
      } | null;
      items: {
        billing_thresholds: { usage_gte: number | null } | null;
        discounts: {
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
          discount:
            | string
            | {
                checkout_session: string | null;
                customer: unknown;
                customer_account: string | null;
                end: number | null;
                id: string;
                invoice: string | null;
                invoice_item: string | null;
                object: "discount";
                promotion_code: unknown;
                source: { coupon: unknown; type: "coupon" };
                start: number;
                subscription: string | null;
                subscription_item: string | null;
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
        }[];
        metadata: Record<string, string> | null;
        plan:
          | string
          | {
              active: boolean;
              amount: number | null;
              amount_decimal: string | null;
              billing_scheme: "per_unit" | "tiered";
              created: number;
              currency: string;
              id: string;
              interval: "day" | "month" | "week" | "year";
              interval_count: number;
              livemode: boolean;
              metadata: Record<string, string> | null;
              meter: string | null;
              nickname: string | null;
              object: "plan";
              product:
                | string
                | {
                    active: boolean;
                    created: number;
                    default_price?: unknown;
                    description: string | null;
                    id: string;
                    images: string[];
                    livemode: boolean;
                    marketing_features: { name?: string }[];
                    metadata: Record<string, string>;
                    name: string;
                    object: "product";
                    package_dimensions: unknown;
                    shippable: boolean | null;
                    statement_descriptor?: string | null;
                    tax_code?: unknown;
                    type: "good" | "service";
                    unit_label?: string | null;
                    updated: number;
                    url: string | null;
                  }
                | { deleted: true; id: string; object: "product" }
                | null;
              tiers?: {
                flat_amount: number | null;
                flat_amount_decimal: string | null;
                unit_amount: number | null;
                unit_amount_decimal: string | null;
                up_to: number | null;
              }[];
              tiers_mode: "graduated" | "volume" | null;
              transform_usage: {
                divide_by: number;
                round: "down" | "up";
              } | null;
              trial_period_days: number | null;
              usage_type: "licensed" | "metered";
            }
          | { deleted: true; id: string; object: "plan" };
        price:
          | string
          | {
              active: boolean;
              billing_scheme: "per_unit" | "tiered";
              created: number;
              currency: string;
              currency_options?: Record<
                string,
                {
                  custom_unit_amount: unknown;
                  tax_behavior:
                    | "exclusive"
                    | "inclusive"
                    | "unspecified"
                    | null;
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
                    default_price?: unknown;
                    description: string | null;
                    id: string;
                    images: string[];
                    livemode: boolean;
                    marketing_features: { name?: string }[];
                    metadata: Record<string, string>;
                    name: string;
                    object: "product";
                    package_dimensions: unknown;
                    shippable: boolean | null;
                    statement_descriptor?: string | null;
                    tax_code?: unknown;
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
              transform_quantity: {
                divide_by: number;
                round: "down" | "up";
              } | null;
              type: "one_time" | "recurring";
              unit_amount: number | null;
              unit_amount_decimal: string | null;
            }
          | { deleted: true; id: string; object: "price" };
        quantity?: number;
        tax_rates?:
          | {
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
            }[]
          | null;
      }[];
      metadata: Record<string, string> | null;
      on_behalf_of: unknown;
      proration_behavior: "always_invoice" | "create_prorations" | "none";
      start_date: number;
      transfer_data: {
        amount_percent: number | null;
        destination: unknown;
      } | null;
      trial_end: number | null;
    }[];
    released_at: number | null;
    released_subscription: string | null;
    status: "active" | "canceled" | "completed" | "not_started" | "released";
    subscription: unknown;
    test_clock:
      | string
      | {
          created: number;
          deletes_after: number;
          frozen_time: number;
          id: string;
          livemode: boolean;
          name: string | null;
          object: "test_helpers.test_clock";
          status: "advancing" | "internal_failure" | "ready";
          status_details: { advancing?: { target_frozen_time: number } };
        }
      | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetSubscriptionSchedulesOutput =
  /*@__PURE__*/ Schema.Struct({
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
            Schema.Struct({
              deleted: Schema.Literals([true]),
              id: Schema.String,
              name: Schema.NullOr(Schema.String),
              object: Schema.Literals(["application"]),
            }),
          ]),
        ),
        billing_mode: Schema.Struct({
          flexible: Schema.NullOr(
            Schema.Struct({
              proration_discounts: Schema.optional(
                Schema.Literals(["included", "itemized"]),
              ),
            }),
          ),
          type: Schema.Literals(["classic", "flexible"]),
          updated_at: Schema.optional(Schema.Number),
        }),
        canceled_at: Schema.NullOr(Schema.Number),
        completed_at: Schema.NullOr(Schema.Number),
        created: Schema.Number,
        current_phase: Schema.NullOr(
          Schema.Struct({
            end_date: Schema.Number,
            start_date: Schema.Number,
          }),
        ),
        customer: Schema.Unknown,
        customer_account: Schema.NullOr(Schema.String),
        default_settings: Schema.Struct({
          application_fee_percent: Schema.NullOr(Schema.Number),
          automatic_tax: Schema.optional(
            Schema.Struct({
              disabled_reason: Schema.NullOr(
                Schema.Literals(["requires_location_inputs"]),
              ),
              enabled: Schema.Boolean,
              liability: Schema.NullOr(
                Schema.Struct({
                  account: Schema.optional(Schema.Unknown),
                  type: Schema.Literals(["account", "self"]),
                }),
              ),
            }),
          ),
          billing_cycle_anchor: Schema.Literals(["automatic", "phase_start"]),
          billing_thresholds: Schema.NullOr(
            Schema.Struct({
              amount_gte: Schema.NullOr(Schema.Number),
              reset_billing_cycle_anchor: Schema.NullOr(Schema.Boolean),
            }),
          ),
          collection_method: Schema.NullOr(
            Schema.Literals(["charge_automatically", "send_invoice"]),
          ),
          default_payment_method: Schema.Unknown,
          description: Schema.NullOr(Schema.String),
          invoice_settings: Schema.Struct({
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
                        application: Schema.optional(Schema.Unknown),
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
            days_until_due: Schema.NullOr(Schema.Number),
            issuer: Schema.Struct({
              account: Schema.optional(Schema.Unknown),
              type: Schema.Literals(["account", "self"]),
            }),
          }),
          on_behalf_of: Schema.Unknown,
          transfer_data: Schema.NullOr(
            Schema.Struct({
              amount_percent: Schema.NullOr(Schema.Number),
              destination: Schema.Unknown,
            }),
          ),
        }),
        end_behavior: Schema.Literals(["cancel", "none", "release", "renew"]),
        id: Schema.String,
        livemode: Schema.Boolean,
        metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        object: Schema.Literals(["subscription_schedule"]),
        phases: Schema.Array(
          Schema.Struct({
            add_invoice_items: Schema.Array(
              Schema.Struct({
                discountable: Schema.NullOr(Schema.Boolean),
                discounts: Schema.Array(
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
                    discount: Schema.NullOr(
                      Schema.Union([
                        Schema.String,
                        Schema.Struct({
                          checkout_session: Schema.NullOr(Schema.String),
                          customer: Schema.Unknown,
                          customer_account: Schema.NullOr(Schema.String),
                          end: Schema.NullOr(Schema.Number),
                          id: Schema.String,
                          invoice: Schema.NullOr(Schema.String),
                          invoice_item: Schema.NullOr(Schema.String),
                          object: Schema.Literals(["discount"]),
                          promotion_code: Schema.Unknown,
                          source: Schema.Struct({
                            coupon: Schema.Unknown,
                            type: Schema.Literals(["coupon"]),
                          }),
                          start: Schema.Number,
                          subscription: Schema.NullOr(Schema.String),
                          subscription_item: Schema.NullOr(Schema.String),
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
                  }),
                ),
                metadata: Schema.NullOr(
                  Schema.Record(Schema.String, Schema.String),
                ),
                period: Schema.Struct({
                  end: Schema.Struct({
                    timestamp: Schema.optional(Schema.Number),
                    type: Schema.Literals([
                      "min_item_period_end",
                      "phase_end",
                      "timestamp",
                    ]),
                  }),
                  start: Schema.Struct({
                    timestamp: Schema.optional(Schema.Number),
                    type: Schema.Literals([
                      "max_item_period_start",
                      "phase_start",
                      "timestamp",
                    ]),
                  }),
                }),
                price: Schema.Unknown,
                quantity: Schema.NullOr(Schema.Number),
                tax_rates: Schema.optional(
                  Schema.NullOr(
                    Schema.Array(
                      Schema.Struct({
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
                    ),
                  ),
                ),
              }),
            ),
            application_fee_percent: Schema.NullOr(Schema.Number),
            automatic_tax: Schema.optional(
              Schema.Struct({
                disabled_reason: Schema.NullOr(
                  Schema.Literals(["requires_location_inputs"]),
                ),
                enabled: Schema.Boolean,
                liability: Schema.NullOr(
                  Schema.Struct({
                    account: Schema.optional(Schema.Unknown),
                    type: Schema.Literals(["account", "self"]),
                  }),
                ),
              }),
            ),
            billing_cycle_anchor: Schema.NullOr(
              Schema.Literals(["automatic", "phase_start"]),
            ),
            billing_thresholds: Schema.NullOr(
              Schema.Struct({
                amount_gte: Schema.NullOr(Schema.Number),
                reset_billing_cycle_anchor: Schema.NullOr(Schema.Boolean),
              }),
            ),
            collection_method: Schema.NullOr(
              Schema.Literals(["charge_automatically", "send_invoice"]),
            ),
            currency: Schema.String,
            default_payment_method: Schema.Unknown,
            default_tax_rates: Schema.optional(
              Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
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
                ),
              ),
            ),
            description: Schema.NullOr(Schema.String),
            discounts: Schema.Array(
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
                discount: Schema.NullOr(
                  Schema.Union([
                    Schema.String,
                    Schema.Struct({
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
                        coupon: Schema.Unknown,
                        type: Schema.Literals(["coupon"]),
                      }),
                      start: Schema.Number,
                      subscription: Schema.NullOr(Schema.String),
                      subscription_item: Schema.NullOr(Schema.String),
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
              }),
            ),
            end_date: Schema.Number,
            invoice_settings: Schema.NullOr(
              Schema.Struct({
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
                            application: Schema.optional(Schema.Unknown),
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
                days_until_due: Schema.NullOr(Schema.Number),
                issuer: Schema.NullOr(
                  Schema.Struct({
                    account: Schema.optional(Schema.Unknown),
                    type: Schema.Literals(["account", "self"]),
                  }),
                ),
              }),
            ),
            items: Schema.Array(
              Schema.Struct({
                billing_thresholds: Schema.NullOr(
                  Schema.Struct({
                    usage_gte: Schema.NullOr(Schema.Number),
                  }),
                ),
                discounts: Schema.Array(
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
                    discount: Schema.NullOr(
                      Schema.Union([
                        Schema.String,
                        Schema.Struct({
                          checkout_session: Schema.NullOr(Schema.String),
                          customer: Schema.Unknown,
                          customer_account: Schema.NullOr(Schema.String),
                          end: Schema.NullOr(Schema.Number),
                          id: Schema.String,
                          invoice: Schema.NullOr(Schema.String),
                          invoice_item: Schema.NullOr(Schema.String),
                          object: Schema.Literals(["discount"]),
                          promotion_code: Schema.Unknown,
                          source: Schema.Struct({
                            coupon: Schema.Unknown,
                            type: Schema.Literals(["coupon"]),
                          }),
                          start: Schema.Number,
                          subscription: Schema.NullOr(Schema.String),
                          subscription_item: Schema.NullOr(Schema.String),
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
                  }),
                ),
                metadata: Schema.NullOr(
                  Schema.Record(Schema.String, Schema.String),
                ),
                plan: Schema.Union([
                  Schema.String,
                  Schema.Struct({
                    active: Schema.Boolean,
                    amount: Schema.NullOr(Schema.Number),
                    amount_decimal: Schema.NullOr(Schema.String),
                    billing_scheme: Schema.Literals(["per_unit", "tiered"]),
                    created: Schema.Number,
                    currency: Schema.String,
                    id: Schema.String,
                    interval: Schema.Literals(["day", "month", "week", "year"]),
                    interval_count: Schema.Number,
                    livemode: Schema.Boolean,
                    metadata: Schema.NullOr(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    meter: Schema.NullOr(Schema.String),
                    nickname: Schema.NullOr(Schema.String),
                    object: Schema.Literals(["plan"]),
                    product: Schema.NullOr(
                      Schema.Union([
                        Schema.String,
                        Schema.Struct({
                          active: Schema.Boolean,
                          created: Schema.Number,
                          default_price: Schema.optional(Schema.Unknown),
                          description: Schema.NullOr(Schema.String),
                          id: Schema.String,
                          images: Schema.Array(Schema.String),
                          livemode: Schema.Boolean,
                          marketing_features: Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                            }),
                          ),
                          metadata: Schema.Record(Schema.String, Schema.String),
                          name: Schema.String,
                          object: Schema.Literals(["product"]),
                          package_dimensions: Schema.Unknown,
                          shippable: Schema.NullOr(Schema.Boolean),
                          statement_descriptor: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          tax_code: Schema.optional(Schema.Unknown),
                          type: Schema.Literals(["good", "service"]),
                          unit_label: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          updated: Schema.Number,
                          url: Schema.NullOr(Schema.String),
                        }),
                        Schema.Struct({
                          deleted: Schema.Literals([true]),
                          id: Schema.String,
                          object: Schema.Literals(["product"]),
                        }),
                      ]),
                    ),
                    tiers: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          flat_amount: Schema.NullOr(Schema.Number),
                          flat_amount_decimal: Schema.NullOr(Schema.String),
                          unit_amount: Schema.NullOr(Schema.Number),
                          unit_amount_decimal: Schema.NullOr(Schema.String),
                          up_to: Schema.NullOr(Schema.Number),
                        }),
                      ),
                    ),
                    tiers_mode: Schema.NullOr(
                      Schema.Literals(["graduated", "volume"]),
                    ),
                    transform_usage: Schema.NullOr(
                      Schema.Struct({
                        divide_by: Schema.Number,
                        round: Schema.Literals(["down", "up"]),
                      }),
                    ),
                    trial_period_days: Schema.NullOr(Schema.Number),
                    usage_type: Schema.Literals(["licensed", "metered"]),
                  }),
                  Schema.Struct({
                    deleted: Schema.Literals([true]),
                    id: Schema.String,
                    object: Schema.Literals(["plan"]),
                  }),
                ]),
                price: Schema.Unknown,
                quantity: Schema.optional(Schema.Number),
                tax_rates: Schema.optional(
                  Schema.NullOr(
                    Schema.Array(
                      Schema.Struct({
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
                    ),
                  ),
                ),
              }),
            ),
            metadata: Schema.NullOr(
              Schema.Record(Schema.String, Schema.String),
            ),
            on_behalf_of: Schema.Unknown,
            proration_behavior: Schema.Literals([
              "always_invoice",
              "create_prorations",
              "none",
            ]),
            start_date: Schema.Number,
            transfer_data: Schema.NullOr(
              Schema.Struct({
                amount_percent: Schema.NullOr(Schema.Number),
                destination: Schema.Unknown,
              }),
            ),
            trial_end: Schema.NullOr(Schema.Number),
          }),
        ),
        released_at: Schema.NullOr(Schema.Number),
        released_subscription: Schema.NullOr(Schema.String),
        status: Schema.Literals([
          "active",
          "canceled",
          "completed",
          "not_started",
          "released",
        ]),
        subscription: Schema.Unknown,
        test_clock: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              created: Schema.Number,
              deletes_after: Schema.Number,
              frozen_time: Schema.Number,
              id: Schema.String,
              livemode: Schema.Boolean,
              name: Schema.NullOr(Schema.String),
              object: Schema.Literals(["test_helpers.test_clock"]),
              status: Schema.Literals([
                "advancing",
                "internal_failure",
                "ready",
              ]),
              status_details: Schema.Struct({
                advancing: Schema.optional(
                  Schema.Struct({
                    target_frozen_time: Schema.Number,
                  }),
                ),
              }),
            }),
          ]),
        ),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetSubscriptionSchedulesOutput>;

// The operation
/**
 * List all schedules
 *
 * <p>Retrieves the list of your subscription schedules.</p>
 *
 * @param canceled_at - Only return subscription schedules that were created canceled the given date interval.
 * @param completed_at - Only return subscription schedules that completed during the given date interval.
 * @param created - Only return subscription schedules that were created during the given date interval.
 * @param customer - Only return subscription schedules for the given customer.
 * @param customer_account - Only return subscription schedules for the given account.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param released_at - Only return subscription schedules that were released during the given date interval.
 * @param scheduled - Only return subscription schedules that have not started yet.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetSubscriptionSchedules = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetSubscriptionSchedulesInput,
  outputSchema: GetSubscriptionSchedulesOutput,
}));
