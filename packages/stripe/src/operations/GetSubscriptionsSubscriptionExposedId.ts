import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetSubscriptionsSubscriptionExposedIdInput {
  subscription_exposed_id: string;
  expand?: string;
}
export const GetSubscriptionsSubscriptionExposedIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscription_exposed_id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/subscriptions/{subscription_exposed_id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetSubscriptionsSubscriptionExposedIdInput>;

// Output Schema
export interface GetSubscriptionsSubscriptionExposedIdOutput {
  application:
    | string
    | { id: string; name: string | null; object: "application" }
    | { deleted: true; id: string; name: string | null; object: "application" }
    | null;
  application_fee_percent: number | null;
  automatic_tax: {
    disabled_reason: "requires_location_inputs" | null;
    enabled: boolean;
    liability: { account?: unknown; type: "account" | "self" } | null;
  };
  billing_cycle_anchor: number;
  billing_cycle_anchor_config: {
    day_of_month: number;
    hour: number | null;
    minute: number | null;
    month: number | null;
    second: number | null;
  } | null;
  billing_mode: {
    flexible: { proration_discounts?: "included" | "itemized" } | null;
    type: "classic" | "flexible";
    updated_at?: number;
  };
  billing_schedules: {
    applies_to:
      | {
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
                    custom_unit_amount: {
                      maximum: number | null;
                      minimum: number | null;
                      preset: number | null;
                    } | null;
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
                transform_quantity: {
                  divide_by: number;
                  round: "down" | "up";
                } | null;
                type: "one_time" | "recurring";
                unit_amount: number | null;
                unit_amount_decimal: string | null;
              }
            | null;
          type: "price";
        }[]
      | null;
    bill_until: {
      computed_timestamp: number;
      duration: {
        interval: "day" | "month" | "week" | "year";
        interval_count: number | null;
      } | null;
      timestamp: number | null;
      type: "duration" | "timestamp";
    };
    key: string;
  }[];
  billing_thresholds: {
    amount_gte: number | null;
    reset_billing_cycle_anchor: boolean | null;
  } | null;
  cancel_at: number | null;
  cancel_at_period_end: boolean;
  canceled_at: number | null;
  cancellation_details: {
    comment: string | null;
    feedback:
      | "customer_service"
      | "low_quality"
      | "missing_features"
      | "other"
      | "switched_service"
      | "too_complex"
      | "too_expensive"
      | "unused"
      | null;
    reason:
      | "canceled_by_retention_policy"
      | "cancellation_requested"
      | "payment_disputed"
      | "payment_failed"
      | null;
  } | null;
  collection_method: "charge_automatically" | "send_invoice";
  created: number;
  currency: string;
  customer: unknown;
  customer_account: string | null;
  days_until_due: number | null;
  default_payment_method: unknown;
  default_source: string | unknown | null;
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
  discounts: (
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
      }
  )[];
  ended_at: number | null;
  id: string;
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
                application?:
                  | string
                  | { id: string; name: string | null; object: "application" };
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
    issuer: { account?: unknown; type: "account" | "self" };
  };
  items: {
    data: {
      billed_until?: number;
      billing_thresholds: { usage_gte: number | null } | null;
      created: number;
      current_period_end: number;
      current_period_start: number;
      discounts: (
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
                  promotion: {
                    coupon:
                      | string
                      | {
                          amount_off: number | null;
                          applies_to?: { products: string[] };
                          created: number;
                          currency: string | null;
                          currency_options?: Record<
                            string,
                            { amount_off: number }
                          >;
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
          }
      )[];
      id: string;
      metadata: Record<string, string>;
      object: "subscription_item";
      plan: {
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
              default_price?:
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
                      | unknown
                      | { deleted: true; id: string; object: "product" };
                    recurring: {
                      interval: "day" | "month" | "week" | "year";
                      interval_count: number;
                      meter: string | null;
                      trial_period_days: number | null;
                      usage_type: "licensed" | "metered";
                    } | null;
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
                    tiers_mode: "graduated" | "volume" | null;
                    transform_quantity: {
                      divide_by: number;
                      round: "down" | "up";
                    } | null;
                    type: "one_time" | "recurring";
                    unit_amount: number | null;
                    unit_amount_decimal: string | null;
                  }
                | null;
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
        transform_usage: { divide_by: number; round: "down" | "up" } | null;
        trial_period_days: number | null;
        usage_type: "licensed" | "metered";
      };
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
      };
      quantity?: number;
      subscription: string;
      tax_rates:
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
    has_more: boolean;
    object: "list";
    url: string;
  };
  latest_invoice: unknown;
  livemode: boolean;
  managed_payments: { enabled: boolean } | null;
  metadata: Record<string, string>;
  next_pending_invoice_item_invoice: number | null;
  object: "subscription";
  on_behalf_of: unknown;
  pause_collection: {
    behavior: "keep_as_draft" | "mark_uncollectible" | "void";
    resumes_at: number | null;
  } | null;
  payment_settings: {
    payment_method_options: {
      acss_debit: {
        mandate_options?: { transaction_type: "business" | "personal" | null };
        verification_method?: "automatic" | "instant" | "microdeposits";
      } | null;
      bancontact: { preferred_language: "de" | "en" | "fr" | "nl" } | null;
      card: {
        mandate_options?: {
          amount: number | null;
          amount_type: "fixed" | "maximum" | null;
          description: string | null;
        };
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
      } | null;
      customer_balance: {
        bank_transfer?: {
          eu_bank_transfer?: {
            country: "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
          };
          type: string | null;
        };
        funding_type: "bank_transfer" | null;
      } | null;
      konbini: {} | null;
      payto: {
        mandate_options?: {
          amount: number | null;
          amount_type: "fixed" | "maximum" | null;
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
        };
      } | null;
      pix: {
        expires_after_seconds?: number;
        mandate_options?: {
          amount: number | null;
          amount_includes_iof: "always" | "never" | null;
          end_date: string | null;
          payment_schedule:
            | "halfyearly"
            | "monthly"
            | "quarterly"
            | "weekly"
            | "yearly"
            | null;
        };
      } | null;
      sepa_debit: {} | null;
      upi: {
        mandate_options?: {
          amount: number | null;
          amount_type: "fixed" | "maximum" | null;
          description: string | null;
          end_date: number | null;
        };
      } | null;
      us_bank_account: {
        financial_connections?: {
          filters?: { account_subcategories?: ("checking" | "savings")[] };
          permissions?: (
            | "balances"
            | "ownership"
            | "payment_method"
            | "transactions"
          )[];
          prefetch: ("balances" | "ownership" | "transactions")[] | null;
        };
        verification_method?: "automatic" | "instant" | "microdeposits";
      } | null;
    } | null;
    payment_method_types:
      | (
          | "ach_credit_transfer"
          | "ach_debit"
          | "acss_debit"
          | "affirm"
          | "amazon_pay"
          | "au_becs_debit"
          | "bacs_debit"
          | "bancontact"
          | "boleto"
          | "card"
          | "cashapp"
          | "crypto"
          | "custom"
          | "customer_balance"
          | "eps"
          | "fpx"
          | "giropay"
          | "grabpay"
          | "ideal"
          | "jp_credit_transfer"
          | "kakao_pay"
          | "klarna"
          | "konbini"
          | "kr_card"
          | "link"
          | "multibanco"
          | "naver_pay"
          | "nz_bank_account"
          | "p24"
          | "pay_by_bank"
          | "payco"
          | "paynow"
          | "paypal"
          | "payto"
          | "pix"
          | "promptpay"
          | "revolut_pay"
          | "satispay"
          | "sepa_credit_transfer"
          | "sepa_debit"
          | "sofort"
          | "swish"
          | "twint"
          | "upi"
          | "us_bank_account"
          | "wechat_pay"
        )[]
      | null;
    save_default_payment_method: "off" | "on_subscription" | null;
  } | null;
  pending_invoice_item_interval: {
    interval: "day" | "month" | "week" | "year";
    interval_count: number;
  } | null;
  pending_setup_intent: unknown;
  pending_update: unknown;
  presentment_details?: { presentment_currency: string };
  schedule: unknown;
  start_date: number;
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";
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
  transfer_data: { amount_percent: number | null; destination: unknown } | null;
  trial_end: number | null;
  trial_settings: {
    end_behavior: {
      missing_payment_method: "cancel" | "create_invoice" | "pause";
    };
  } | null;
  trial_start: number | null;
}
export const GetSubscriptionsSubscriptionExposedIdOutput =
  /*@__PURE__*/ Schema.Struct({
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
    application_fee_percent: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.Struct({
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
    billing_cycle_anchor: Schema.Number,
    billing_cycle_anchor_config: Schema.NullOr(
      Schema.Struct({
        day_of_month: Schema.Number,
        hour: Schema.NullOr(Schema.Number),
        minute: Schema.NullOr(Schema.Number),
        month: Schema.NullOr(Schema.Number),
        second: Schema.NullOr(Schema.Number),
      }),
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
    billing_schedules: Schema.Array(
      Schema.Struct({
        applies_to: Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              price: Schema.Unknown,
              type: Schema.Literals(["price"]),
            }),
          ),
        ),
        bill_until: Schema.Struct({
          computed_timestamp: Schema.Number,
          duration: Schema.NullOr(
            Schema.Struct({
              interval: Schema.Literals(["day", "month", "week", "year"]),
              interval_count: Schema.NullOr(Schema.Number),
            }),
          ),
          timestamp: Schema.NullOr(Schema.Number),
          type: Schema.Literals(["duration", "timestamp"]),
        }),
        key: Schema.String,
      }),
    ),
    billing_thresholds: Schema.NullOr(
      Schema.Struct({
        amount_gte: Schema.NullOr(Schema.Number),
        reset_billing_cycle_anchor: Schema.NullOr(Schema.Boolean),
      }),
    ),
    cancel_at: Schema.NullOr(Schema.Number),
    cancel_at_period_end: Schema.Boolean,
    canceled_at: Schema.NullOr(Schema.Number),
    cancellation_details: Schema.NullOr(
      Schema.Struct({
        comment: Schema.NullOr(Schema.String),
        feedback: Schema.NullOr(
          Schema.Literals([
            "customer_service",
            "low_quality",
            "missing_features",
            "other",
            "switched_service",
            "too_complex",
            "too_expensive",
            "unused",
          ]),
        ),
        reason: Schema.NullOr(
          Schema.Literals([
            "canceled_by_retention_policy",
            "cancellation_requested",
            "payment_disputed",
            "payment_failed",
          ]),
        ),
      }),
    ),
    collection_method: Schema.Literals([
      "charge_automatically",
      "send_invoice",
    ]),
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    days_until_due: Schema.NullOr(Schema.Number),
    default_payment_method: Schema.Unknown,
    default_source: Schema.NullOr(
      Schema.Union([Schema.String, Schema.Unknown]),
    ),
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
            type: Schema.Literals(["coupon"]),
          }),
          start: Schema.Number,
          subscription: Schema.NullOr(Schema.String),
          subscription_item: Schema.NullOr(Schema.String),
        }),
      ]),
    ),
    ended_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
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
      issuer: Schema.Struct({
        account: Schema.optional(Schema.Unknown),
        type: Schema.Literals(["account", "self"]),
      }),
    }),
    items: Schema.Struct({
      data: Schema.Array(
        Schema.Struct({
          billed_until: Schema.optional(Schema.Number),
          billing_thresholds: Schema.NullOr(
            Schema.Struct({
              usage_gte: Schema.NullOr(Schema.Number),
            }),
          ),
          created: Schema.Number,
          current_period_end: Schema.Number,
          current_period_start: Schema.Number,
          discounts: Schema.Array(Schema.Unknown),
          id: Schema.String,
          metadata: Schema.Record(Schema.String, Schema.String),
          object: Schema.Literals(["subscription_item"]),
          plan: Schema.Struct({
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
            product: Schema.Unknown,
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
            tiers_mode: Schema.NullOr(Schema.Literals(["graduated", "volume"])),
            transform_usage: Schema.NullOr(
              Schema.Struct({
                divide_by: Schema.Number,
                round: Schema.Literals(["down", "up"]),
              }),
            ),
            trial_period_days: Schema.NullOr(Schema.Number),
            usage_type: Schema.Literals(["licensed", "metered"]),
          }),
          price: Schema.Struct({
            active: Schema.Boolean,
            billing_scheme: Schema.Literals(["per_unit", "tiered"]),
            created: Schema.Number,
            currency: Schema.String,
            currency_options: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  custom_unit_amount: Schema.NullOr(
                    Schema.Struct({
                      maximum: Schema.NullOr(Schema.Number),
                      minimum: Schema.NullOr(Schema.Number),
                      preset: Schema.NullOr(Schema.Number),
                    }),
                  ),
                  tax_behavior: Schema.NullOr(
                    Schema.Literals(["exclusive", "inclusive", "unspecified"]),
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
                  unit_amount: Schema.NullOr(Schema.Number),
                  unit_amount_decimal: Schema.NullOr(Schema.String),
                }),
              ),
            ),
            custom_unit_amount: Schema.NullOr(
              Schema.Struct({
                maximum: Schema.NullOr(Schema.Number),
                minimum: Schema.NullOr(Schema.Number),
                preset: Schema.NullOr(Schema.Number),
              }),
            ),
            id: Schema.String,
            livemode: Schema.Boolean,
            lookup_key: Schema.NullOr(Schema.String),
            metadata: Schema.Record(Schema.String, Schema.String),
            nickname: Schema.NullOr(Schema.String),
            object: Schema.Literals(["price"]),
            product: Schema.Union([
              Schema.String,
              Schema.Struct({
                active: Schema.Boolean,
                created: Schema.Number,
                default_price: Schema.optional(
                  Schema.NullOr(Schema.Union([Schema.String, Schema.Unknown])),
                ),
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
                package_dimensions: Schema.NullOr(
                  Schema.Struct({
                    height: Schema.Number,
                    length: Schema.Number,
                    weight: Schema.Number,
                    width: Schema.Number,
                  }),
                ),
                shippable: Schema.NullOr(Schema.Boolean),
                statement_descriptor: Schema.optional(
                  Schema.NullOr(Schema.String),
                ),
                tax_code: Schema.optional(
                  Schema.NullOr(
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
                ),
                type: Schema.Literals(["good", "service"]),
                unit_label: Schema.optional(Schema.NullOr(Schema.String)),
                updated: Schema.Number,
                url: Schema.NullOr(Schema.String),
              }),
              Schema.Struct({
                deleted: Schema.Literals([true]),
                id: Schema.String,
                object: Schema.Literals(["product"]),
              }),
            ]),
            recurring: Schema.NullOr(
              Schema.Struct({
                interval: Schema.Literals(["day", "month", "week", "year"]),
                interval_count: Schema.Number,
                meter: Schema.NullOr(Schema.String),
                trial_period_days: Schema.NullOr(Schema.Number),
                usage_type: Schema.Literals(["licensed", "metered"]),
              }),
            ),
            tax_behavior: Schema.NullOr(
              Schema.Literals(["exclusive", "inclusive", "unspecified"]),
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
            tiers_mode: Schema.NullOr(Schema.Literals(["graduated", "volume"])),
            transform_quantity: Schema.NullOr(
              Schema.Struct({
                divide_by: Schema.Number,
                round: Schema.Literals(["down", "up"]),
              }),
            ),
            type: Schema.Literals(["one_time", "recurring"]),
            unit_amount: Schema.NullOr(Schema.Number),
            unit_amount_decimal: Schema.NullOr(Schema.String),
          }),
          quantity: Schema.optional(Schema.Number),
          subscription: Schema.String,
          tax_rates: Schema.NullOr(
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
        }),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    latest_invoice: Schema.Unknown,
    livemode: Schema.Boolean,
    managed_payments: Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    next_pending_invoice_item_invoice: Schema.NullOr(Schema.Number),
    object: Schema.Literals(["subscription"]),
    on_behalf_of: Schema.Unknown,
    pause_collection: Schema.NullOr(
      Schema.Struct({
        behavior: Schema.Literals([
          "keep_as_draft",
          "mark_uncollectible",
          "void",
        ]),
        resumes_at: Schema.NullOr(Schema.Number),
      }),
    ),
    payment_settings: Schema.Unknown,
    pending_invoice_item_interval: Schema.NullOr(
      Schema.Struct({
        interval: Schema.Literals(["day", "month", "week", "year"]),
        interval_count: Schema.Number,
      }),
    ),
    pending_setup_intent: Schema.Unknown,
    pending_update: Schema.Unknown,
    presentment_details: Schema.optional(
      Schema.Struct({
        presentment_currency: Schema.String,
      }),
    ),
    schedule: Schema.Unknown,
    start_date: Schema.Number,
    status: Schema.Literals([
      "active",
      "canceled",
      "incomplete",
      "incomplete_expired",
      "past_due",
      "paused",
      "trialing",
      "unpaid",
    ]),
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
          status: Schema.Literals(["advancing", "internal_failure", "ready"]),
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
    transfer_data: Schema.NullOr(
      Schema.Struct({
        amount_percent: Schema.NullOr(Schema.Number),
        destination: Schema.Unknown,
      }),
    ),
    trial_end: Schema.NullOr(Schema.Number),
    trial_settings: Schema.NullOr(
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
    trial_start: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<GetSubscriptionsSubscriptionExposedIdOutput>;

// The operation
/**
 * Retrieve a subscription
 *
 * <p>Retrieves the subscription with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetSubscriptionsSubscriptionExposedId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetSubscriptionsSubscriptionExposedIdInput,
    outputSchema: GetSubscriptionsSubscriptionExposedIdOutput,
  }));
