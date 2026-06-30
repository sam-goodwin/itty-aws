import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostInvoicesCreatePreviewInput {
  automatic_tax?: {
    enabled: boolean;
    liability?: { account?: string; type: "account" | "self" };
  };
  currency?: string;
  customer?: string;
  customer_account?: string;
  customer_details?: {
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
          name: string;
          phone?: string;
        }
      | "";
    tax?: { ip_address?: string | "" };
    tax_exempt?: "" | "exempt" | "none" | "reverse";
    tax_ids?: {
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
    }[];
  };
  discounts?:
    | { coupon?: string; discount?: string; promotion_code?: string }[]
    | "";
  expand?: string[];
  invoice_items?: {
    amount?: number;
    currency?: string;
    description?: string;
    discountable?: boolean;
    discounts?:
      | { coupon?: string; discount?: string; promotion_code?: string }[]
      | "";
    invoiceitem?: string;
    metadata?: Record<string, string> | "";
    period?: { end: number; start: number };
    price?: string;
    price_data?: {
      currency: string;
      product: string;
      tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      unit_amount?: number;
      unit_amount_decimal?: string;
    };
    quantity?: number;
    quantity_decimal?: string;
    tax_behavior?: "exclusive" | "inclusive" | "unspecified";
    tax_code?: string | "";
    tax_rates?: string[] | "";
    unit_amount?: number;
    unit_amount_decimal?: string;
  }[];
  issuer?: { account?: string; type: "account" | "self" };
  on_behalf_of?: string | "";
  preview_mode?: "next" | "recurring";
  schedule?: string;
  schedule_details?: {
    billing_mode?: {
      flexible?: { proration_discounts?: "included" | "itemized" };
      type: "classic" | "flexible";
    };
    end_behavior?: "cancel" | "release";
    phases?: {
      add_invoice_items?: {
        discountable?: boolean;
        discounts?: {
          coupon?: string;
          discount?: string;
          promotion_code?: string;
        }[];
        metadata?: Record<string, string>;
        period?: {
          end: {
            timestamp?: number;
            type: "min_item_period_end" | "phase_end" | "timestamp";
          };
          start: {
            timestamp?: number;
            type: "max_item_period_start" | "phase_start" | "timestamp";
          };
        };
        price?: string;
        price_data?: {
          currency: string;
          product: string;
          tax_behavior?: "exclusive" | "inclusive" | "unspecified";
          unit_amount?: number;
          unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
      }[];
      application_fee_percent?: number;
      automatic_tax?: {
        enabled: boolean;
        liability?: { account?: string; type: "account" | "self" };
      };
      billing_cycle_anchor?: "automatic" | "phase_start";
      billing_thresholds?:
        | { amount_gte?: number; reset_billing_cycle_anchor?: boolean }
        | "";
      collection_method?: "charge_automatically" | "send_invoice";
      currency?: string;
      default_payment_method?: string;
      default_tax_rates?: string[] | "";
      description?: string | "";
      discounts?:
        | { coupon?: string; discount?: string; promotion_code?: string }[]
        | "";
      duration?: {
        interval: "day" | "month" | "week" | "year";
        interval_count?: number;
      };
      end_date?: number | "now";
      invoice_settings?: {
        account_tax_ids?: string[] | "";
        days_until_due?: number;
        issuer?: { account?: string; type: "account" | "self" };
      };
      items: {
        billing_thresholds?: { usage_gte: number } | "";
        discounts?:
          | { coupon?: string; discount?: string; promotion_code?: string }[]
          | "";
        metadata?: Record<string, string>;
        plan?: string;
        price?: string;
        price_data?: {
          currency: string;
          product: string;
          recurring: {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
          };
          tax_behavior?: "exclusive" | "inclusive" | "unspecified";
          unit_amount?: number;
          unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
      }[];
      metadata?: Record<string, string>;
      on_behalf_of?: string;
      proration_behavior?: "always_invoice" | "create_prorations" | "none";
      start_date?: number | "now";
      transfer_data?: { amount_percent?: number; destination: string };
      trial?: boolean;
      trial_end?: number | "now";
    }[];
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
  };
  subscription?: string;
  subscription_details?: {
    billing_cycle_anchor?: "now" | "unchanged" | number;
    billing_mode?: {
      flexible?: { proration_discounts?: "included" | "itemized" };
      type: "classic" | "flexible";
    };
    billing_schedules?:
      | {
          applies_to?: { price?: string; type: "price" }[];
          bill_until?: {
            duration?: {
              interval: "day" | "month" | "week" | "year";
              interval_count?: number;
            };
            timestamp?: number;
            type: "duration" | "timestamp";
          };
          key?: string;
        }[]
      | "";
    cancel_at?:
      | number
      | ""
      | "max_billed_until"
      | "max_period_end"
      | "min_period_end";
    cancel_at_period_end?: boolean;
    cancel_now?: boolean;
    default_tax_rates?: string[] | "";
    items?: {
      billing_thresholds?: { usage_gte: number } | "";
      clear_usage?: boolean;
      deleted?: boolean;
      discounts?:
        | { coupon?: string; discount?: string; promotion_code?: string }[]
        | "";
      id?: string;
      metadata?: Record<string, string> | "";
      plan?: string;
      price?: string;
      price_data?: {
        currency: string;
        product: string;
        recurring: {
          interval: "day" | "month" | "week" | "year";
          interval_count?: number;
        };
        tax_behavior?: "exclusive" | "inclusive" | "unspecified";
        unit_amount?: number;
        unit_amount_decimal?: string;
      };
      quantity?: number;
      tax_rates?: string[] | "";
    }[];
    proration_behavior?: "always_invoice" | "create_prorations" | "none";
    proration_date?: number;
    resume_at?: "now";
    start_date?: number;
    trial_end?: "now" | number;
  };
}
export const PostInvoicesCreatePreviewInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    currency: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    customer_details: Schema.optional(
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
              name: Schema.String,
              phone: Schema.optional(Schema.String),
            }),
            Schema.Literals([""]),
          ]),
        ),
        tax: Schema.optional(
          Schema.Struct({
            ip_address: Schema.optional(
              Schema.Union([Schema.String, Schema.Literals([""])]),
            ),
          }),
        ),
        tax_exempt: Schema.optional(
          Schema.Literals(["", "exempt", "none", "reverse"]),
        ),
        tax_ids: Schema.optional(
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
            }),
          ),
        ),
      }),
    ),
    discounts: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            coupon: Schema.optional(Schema.String),
            discount: Schema.optional(Schema.String),
            promotion_code: Schema.optional(Schema.String),
          }),
        ),
        Schema.Literals([""]),
      ]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    invoice_items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          amount: Schema.optional(Schema.Number),
          currency: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          discountable: Schema.optional(Schema.Boolean),
          discounts: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  coupon: Schema.optional(Schema.String),
                  discount: Schema.optional(Schema.String),
                  promotion_code: Schema.optional(Schema.String),
                }),
              ),
              Schema.Literals([""]),
            ]),
          ),
          invoiceitem: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.Union([
              Schema.Record(Schema.String, Schema.String),
              Schema.Literals([""]),
            ]),
          ),
          period: Schema.optional(
            Schema.Struct({
              end: Schema.Number,
              start: Schema.Number,
            }),
          ),
          price: Schema.optional(Schema.String),
          price_data: Schema.optional(
            Schema.Struct({
              currency: Schema.String,
              product: Schema.String,
              tax_behavior: Schema.optional(
                Schema.Literals(["exclusive", "inclusive", "unspecified"]),
              ),
              unit_amount: Schema.optional(Schema.Number),
              unit_amount_decimal: Schema.optional(Schema.String),
            }),
          ),
          quantity: Schema.optional(Schema.Number),
          quantity_decimal: Schema.optional(Schema.String),
          tax_behavior: Schema.optional(
            Schema.Literals(["exclusive", "inclusive", "unspecified"]),
          ),
          tax_code: Schema.optional(
            Schema.Union([Schema.String, Schema.Literals([""])]),
          ),
          tax_rates: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
          ),
          unit_amount: Schema.optional(Schema.Number),
          unit_amount_decimal: Schema.optional(Schema.String),
        }),
      ),
    ),
    issuer: Schema.optional(
      Schema.Struct({
        account: Schema.optional(Schema.String),
        type: Schema.Literals(["account", "self"]),
      }),
    ),
    on_behalf_of: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    preview_mode: Schema.optional(Schema.Literals(["next", "recurring"])),
    schedule: Schema.optional(Schema.String),
    schedule_details: Schema.optional(
      Schema.Struct({
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
        end_behavior: Schema.optional(Schema.Literals(["cancel", "release"])),
        phases: Schema.optional(
          Schema.Array(
            Schema.Struct({
              add_invoice_items: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    discountable: Schema.optional(Schema.Boolean),
                    discounts: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          coupon: Schema.optional(Schema.String),
                          discount: Schema.optional(Schema.String),
                          promotion_code: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    metadata: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    period: Schema.optional(
                      Schema.Struct({
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
                    ),
                    price: Schema.optional(Schema.String),
                    price_data: Schema.optional(
                      Schema.Struct({
                        currency: Schema.String,
                        product: Schema.String,
                        tax_behavior: Schema.optional(
                          Schema.Literals([
                            "exclusive",
                            "inclusive",
                            "unspecified",
                          ]),
                        ),
                        unit_amount: Schema.optional(Schema.Number),
                        unit_amount_decimal: Schema.optional(Schema.String),
                      }),
                    ),
                    quantity: Schema.optional(Schema.Number),
                    tax_rates: Schema.optional(
                      Schema.Union([
                        Schema.Array(Schema.String),
                        Schema.Literals([""]),
                      ]),
                    ),
                  }),
                ),
              ),
              application_fee_percent: Schema.optional(Schema.Number),
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
              billing_cycle_anchor: Schema.optional(
                Schema.Literals(["automatic", "phase_start"]),
              ),
              billing_thresholds: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    amount_gte: Schema.optional(Schema.Number),
                    reset_billing_cycle_anchor: Schema.optional(Schema.Boolean),
                  }),
                  Schema.Literals([""]),
                ]),
              ),
              collection_method: Schema.optional(
                Schema.Literals(["charge_automatically", "send_invoice"]),
              ),
              currency: Schema.optional(Schema.String),
              default_payment_method: Schema.optional(Schema.String),
              default_tax_rates: Schema.optional(
                Schema.Union([
                  Schema.Array(Schema.String),
                  Schema.Literals([""]),
                ]),
              ),
              description: Schema.optional(
                Schema.Union([Schema.String, Schema.Literals([""])]),
              ),
              discounts: Schema.optional(
                Schema.Union([
                  Schema.Array(
                    Schema.Struct({
                      coupon: Schema.optional(Schema.String),
                      discount: Schema.optional(Schema.String),
                      promotion_code: Schema.optional(Schema.String),
                    }),
                  ),
                  Schema.Literals([""]),
                ]),
              ),
              duration: Schema.optional(
                Schema.Struct({
                  interval: Schema.Literals(["day", "month", "week", "year"]),
                  interval_count: Schema.optional(Schema.Number),
                }),
              ),
              end_date: Schema.optional(
                Schema.Union([Schema.Number, Schema.Literals(["now"])]),
              ),
              invoice_settings: Schema.optional(
                Schema.Struct({
                  account_tax_ids: Schema.optional(
                    Schema.Union([
                      Schema.Array(Schema.String),
                      Schema.Literals([""]),
                    ]),
                  ),
                  days_until_due: Schema.optional(Schema.Number),
                  issuer: Schema.optional(
                    Schema.Struct({
                      account: Schema.optional(Schema.String),
                      type: Schema.Literals(["account", "self"]),
                    }),
                  ),
                }),
              ),
              items: Schema.Array(
                Schema.Struct({
                  billing_thresholds: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        usage_gte: Schema.Number,
                      }),
                      Schema.Literals([""]),
                    ]),
                  ),
                  discounts: Schema.optional(
                    Schema.Union([
                      Schema.Array(
                        Schema.Struct({
                          coupon: Schema.optional(Schema.String),
                          discount: Schema.optional(Schema.String),
                          promotion_code: Schema.optional(Schema.String),
                        }),
                      ),
                      Schema.Literals([""]),
                    ]),
                  ),
                  metadata: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  plan: Schema.optional(Schema.String),
                  price: Schema.optional(Schema.String),
                  price_data: Schema.optional(
                    Schema.Struct({
                      currency: Schema.String,
                      product: Schema.String,
                      recurring: Schema.Struct({
                        interval: Schema.Literals([
                          "day",
                          "month",
                          "week",
                          "year",
                        ]),
                        interval_count: Schema.optional(Schema.Number),
                      }),
                      tax_behavior: Schema.optional(
                        Schema.Literals([
                          "exclusive",
                          "inclusive",
                          "unspecified",
                        ]),
                      ),
                      unit_amount: Schema.optional(Schema.Number),
                      unit_amount_decimal: Schema.optional(Schema.String),
                    }),
                  ),
                  quantity: Schema.optional(Schema.Number),
                  tax_rates: Schema.optional(
                    Schema.Union([
                      Schema.Array(Schema.String),
                      Schema.Literals([""]),
                    ]),
                  ),
                }),
              ),
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              on_behalf_of: Schema.optional(Schema.String),
              proration_behavior: Schema.optional(
                Schema.Literals([
                  "always_invoice",
                  "create_prorations",
                  "none",
                ]),
              ),
              start_date: Schema.optional(
                Schema.Union([Schema.Number, Schema.Literals(["now"])]),
              ),
              transfer_data: Schema.optional(
                Schema.Struct({
                  amount_percent: Schema.optional(Schema.Number),
                  destination: Schema.String,
                }),
              ),
              trial: Schema.optional(Schema.Boolean),
              trial_end: Schema.optional(
                Schema.Union([Schema.Number, Schema.Literals(["now"])]),
              ),
            }),
          ),
        ),
        proration_behavior: Schema.optional(
          Schema.Literals(["always_invoice", "create_prorations", "none"]),
        ),
      }),
    ),
    subscription: Schema.optional(Schema.String),
    subscription_details: Schema.optional(
      Schema.Struct({
        billing_cycle_anchor: Schema.optional(
          Schema.Union([Schema.Literals(["now", "unchanged"]), Schema.Number]),
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
        billing_schedules: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                applies_to: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      price: Schema.optional(Schema.String),
                      type: Schema.Literals(["price"]),
                    }),
                  ),
                ),
                bill_until: Schema.optional(
                  Schema.Struct({
                    duration: Schema.optional(
                      Schema.Struct({
                        interval: Schema.Literals([
                          "day",
                          "month",
                          "week",
                          "year",
                        ]),
                        interval_count: Schema.optional(Schema.Number),
                      }),
                    ),
                    timestamp: Schema.optional(Schema.Number),
                    type: Schema.Literals(["duration", "timestamp"]),
                  }),
                ),
                key: Schema.optional(Schema.String),
              }),
            ),
            Schema.Literals([""]),
          ]),
        ),
        cancel_at: Schema.optional(
          Schema.Union([
            Schema.Number,
            Schema.Literals([""]),
            Schema.Literals([
              "max_billed_until",
              "max_period_end",
              "min_period_end",
            ]),
          ]),
        ),
        cancel_at_period_end: Schema.optional(Schema.Boolean),
        cancel_now: Schema.optional(Schema.Boolean),
        default_tax_rates: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
        ),
        items: Schema.optional(
          Schema.Array(
            Schema.Struct({
              billing_thresholds: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    usage_gte: Schema.Number,
                  }),
                  Schema.Literals([""]),
                ]),
              ),
              clear_usage: Schema.optional(Schema.Boolean),
              deleted: Schema.optional(Schema.Boolean),
              discounts: Schema.optional(
                Schema.Union([
                  Schema.Array(
                    Schema.Struct({
                      coupon: Schema.optional(Schema.String),
                      discount: Schema.optional(Schema.String),
                      promotion_code: Schema.optional(Schema.String),
                    }),
                  ),
                  Schema.Literals([""]),
                ]),
              ),
              id: Schema.optional(Schema.String),
              metadata: Schema.optional(
                Schema.Union([
                  Schema.Record(Schema.String, Schema.String),
                  Schema.Literals([""]),
                ]),
              ),
              plan: Schema.optional(Schema.String),
              price: Schema.optional(Schema.String),
              price_data: Schema.optional(
                Schema.Struct({
                  currency: Schema.String,
                  product: Schema.String,
                  recurring: Schema.Struct({
                    interval: Schema.Literals(["day", "month", "week", "year"]),
                    interval_count: Schema.optional(Schema.Number),
                  }),
                  tax_behavior: Schema.optional(
                    Schema.Literals(["exclusive", "inclusive", "unspecified"]),
                  ),
                  unit_amount: Schema.optional(Schema.Number),
                  unit_amount_decimal: Schema.optional(Schema.String),
                }),
              ),
              quantity: Schema.optional(Schema.Number),
              tax_rates: Schema.optional(
                Schema.Union([
                  Schema.Array(Schema.String),
                  Schema.Literals([""]),
                ]),
              ),
            }),
          ),
        ),
        proration_behavior: Schema.optional(
          Schema.Literals(["always_invoice", "create_prorations", "none"]),
        ),
        proration_date: Schema.optional(Schema.Number),
        resume_at: Schema.optional(Schema.Literals(["now"])),
        start_date: Schema.optional(Schema.Number),
        trial_end: Schema.optional(
          Schema.Union([Schema.Literals(["now"]), Schema.Number]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/invoices/create_preview",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostInvoicesCreatePreviewInput>;

// Output Schema
export interface PostInvoicesCreatePreviewOutput {
  account_country: string | null;
  account_name: string | null;
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
  amount_due: number;
  amount_overpaid: number;
  amount_paid: number;
  amount_paid_off_stripe?: number;
  amount_remaining: number;
  amount_shipping: number;
  application:
    | string
    | { id: string; name: string | null; object: "application" }
    | { deleted: true; id: string; name: string | null; object: "application" }
    | null;
  attempt_count: number;
  attempted: boolean;
  auto_advance?: boolean;
  automatic_tax: {
    disabled_reason:
      | "finalization_requires_location_inputs"
      | "finalization_system_error"
      | null;
    enabled: boolean;
    liability: { account?: unknown; type: "account" | "self" } | null;
    provider: string | null;
    status: "complete" | "failed" | "requires_location_inputs" | null;
  };
  automatically_finalizes_at: number | null;
  billing_reason:
    | "automatic_pending_invoice_item_invoice"
    | "manual"
    | "quote_accept"
    | "subscription"
    | "subscription_create"
    | "subscription_cycle"
    | "subscription_threshold"
    | "subscription_update"
    | "upcoming"
    | null;
  collection_method: "charge_automatically" | "send_invoice";
  confirmation_secret?: {
    client_secret: Redacted.Redacted<string>;
    type: string;
  } | null;
  created: number;
  currency: string;
  custom_fields: { name: string; value: string }[] | null;
  customer: unknown;
  customer_account: string | null;
  customer_address: {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postal_code: string | null;
    state: string | null;
  } | null;
  customer_email: string | null;
  customer_name: string | null;
  customer_phone: string | null;
  customer_shipping: {
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
  customer_tax_exempt: "exempt" | "none" | "reverse" | null;
  customer_tax_ids?:
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
  default_payment_method: unknown;
  default_source: string | unknown | null;
  default_tax_rates: {
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
  }[];
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
    | {
        checkout_session: string | null;
        customer: unknown;
        customer_account: string | null;
        deleted: true;
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
  due_date: number | null;
  effective_at: number | null;
  ending_balance: number | null;
  footer: string | null;
  from_invoice: { action: string; invoice: unknown } | null;
  hosted_invoice_url?: string | null;
  id?: string;
  invoice_pdf?: string | null;
  issuer: { account?: unknown; type: "account" | "self" };
  last_finalization_error: unknown;
  latest_revision: unknown;
  lines: {
    data: {
      amount: number;
      currency: string;
      description: string | null;
      discount_amounts:
        | {
            amount: number;
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
                  source: {
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
                  start: number;
                  subscription: string | null;
                  subscription_item: string | null;
                }
              | {
                  checkout_session: string | null;
                  customer: unknown;
                  customer_account: string | null;
                  deleted: true;
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
                  source: {
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
                  start: number;
                  subscription: string | null;
                  subscription_item: string | null;
                };
          }[]
        | null;
      discountable: boolean;
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
      invoice: string | null;
      livemode: boolean;
      metadata: Record<string, string>;
      object: "line_item";
      parent: {
        invoice_item_details: {
          invoice_item: string;
          proration: boolean;
          proration_details: {
            credited_items: {
              invoice: string;
              invoice_line_items: string[];
            } | null;
          } | null;
          subscription: string | null;
        } | null;
        subscription_item_details: {
          invoice_item: string | null;
          proration: boolean;
          proration_details: {
            credited_items: {
              invoice: string;
              invoice_line_items: string[];
            } | null;
          } | null;
          subscription: string | null;
          subscription_item: string;
        } | null;
        type: "invoice_item_details" | "subscription_item_details";
      } | null;
      period: { end: number; start: number };
      pretax_credit_amounts:
        | {
            amount: number;
            credit_balance_transaction?:
              | string
              | {
                  created: number;
                  credit: {
                    amount: { monetary: unknown; type: "monetary" };
                    credits_application_invoice_voided: {
                      invoice: unknown;
                      invoice_line_item: string;
                    } | null;
                    type:
                      | "credits_application_invoice_voided"
                      | "credits_granted";
                  } | null;
                  credit_grant:
                    | string
                    | {
                        amount: { monetary: unknown; type: "monetary" };
                        applicability_config: {
                          scope: {
                            price_type?: "metered";
                            prices?: { id: string | null }[];
                          };
                        };
                        category: "paid" | "promotional";
                        created: number;
                        customer: unknown;
                        customer_account: string | null;
                        effective_at: number | null;
                        expires_at: number | null;
                        id: string;
                        livemode: boolean;
                        metadata: Record<string, string>;
                        name: string | null;
                        object: "billing.credit_grant";
                        priority: number | null;
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
                              status:
                                | "advancing"
                                | "internal_failure"
                                | "ready";
                              status_details: {
                                advancing?: { target_frozen_time: number };
                              };
                            }
                          | null;
                        updated: number;
                        voided_at: number | null;
                      };
                  debit: {
                    amount: { monetary: unknown; type: "monetary" };
                    credits_applied: {
                      invoice: unknown;
                      invoice_line_item: string;
                    } | null;
                    type:
                      | "credits_applied"
                      | "credits_expired"
                      | "credits_voided";
                  } | null;
                  effective_at: number;
                  id: string;
                  livemode: boolean;
                  object: "billing.credit_balance_transaction";
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
                        status_details: {
                          advancing?: { target_frozen_time: number };
                        };
                      }
                    | null;
                  type: "credit" | "debit" | null;
                }
              | null;
            discount?:
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
                  source: {
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
                  start: number;
                  subscription: string | null;
                  subscription_item: string | null;
                }
              | {
                  checkout_session: string | null;
                  customer: unknown;
                  customer_account: string | null;
                  deleted: true;
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
                  source: {
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
                  start: number;
                  subscription: string | null;
                  subscription_item: string | null;
                };
            type: "credit_balance_transaction" | "discount";
          }[]
        | null;
      pricing: {
        price_details?: {
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
              };
          product: string;
        };
        type: "price_details";
        unit_amount_decimal: string | null;
      } | null;
      quantity: number | null;
      quantity_decimal: string | null;
      subscription: unknown;
      subtotal: number;
      taxes:
        | {
            amount: number;
            tax_behavior: "exclusive" | "inclusive";
            tax_rate_details: {
              tax_rate:
                | string
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
                  };
            } | null;
            taxability_reason:
              | "customer_exempt"
              | "not_available"
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
              | "zero_rated";
            taxable_amount: number | null;
            type: "tax_rate_details";
          }[]
        | null;
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  metadata: Record<string, string> | null;
  next_payment_attempt: number | null;
  number: string | null;
  object: "invoice";
  on_behalf_of: unknown;
  parent: {
    quote_details: { quote: string } | null;
    subscription_details: {
      metadata: Record<string, string> | null;
      subscription: unknown;
      subscription_proration_date?: number;
    } | null;
    type: "quote_details" | "subscription_details";
  } | null;
  payment_settings: {
    default_mandate: string | null;
    payment_method_options: {
      acss_debit: {
        mandate_options?: { transaction_type: "business" | "personal" | null };
        verification_method?: "automatic" | "instant" | "microdeposits";
      } | null;
      bancontact: { preferred_language: "de" | "en" | "fr" | "nl" } | null;
      card: {
        installments?: { enabled: boolean | null };
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
        amount_includes_iof: "always" | "never" | null;
        expires_after_seconds?: number;
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
  };
  payments?: {
    data: {
      amount_paid: number | null;
      amount_requested: number;
      created: number;
      currency: string;
      id: string;
      invoice: unknown;
      is_default: boolean;
      livemode: boolean;
      object: "invoice_payment";
      payment: {
        charge?: unknown;
        payment_intent?: unknown;
        payment_record?:
          | string
          | {
              amount: { currency: string; value: number };
              amount_authorized: { currency: string; value: number };
              amount_canceled: { currency: string; value: number };
              amount_failed: { currency: string; value: number };
              amount_guaranteed: { currency: string; value: number };
              amount_refunded: { currency: string; value: number };
              amount_requested: { currency: string; value: number };
              application: string | null;
              created: number;
              customer_details: {
                customer: string | null;
                email: string | null;
                name: string | null;
                phone: string | null;
              } | null;
              customer_presence: "off_session" | "on_session" | null;
              description: string | null;
              id: string;
              latest_payment_attempt_record: string | null;
              livemode: boolean;
              metadata: Record<string, string>;
              object: "payment_record";
              payment_method_details: unknown;
              processor_details: {
                custom?: { payment_reference: string | null };
                type: "custom";
              };
              reported_by: "self" | "stripe";
              shipping_details: {
                address: {
                  city: string | null;
                  country: string | null;
                  line1: string | null;
                  line2: string | null;
                  postal_code: string | null;
                  state: string | null;
                };
                name: string | null;
                phone: string | null;
              } | null;
            };
        type: "charge" | "payment_intent" | "payment_record";
      };
      status: string;
      status_transitions: {
        canceled_at: number | null;
        paid_at: number | null;
      };
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  period_end: number;
  period_start: number;
  post_payment_credit_notes_amount: number;
  pre_payment_credit_notes_amount: number;
  receipt_number: string | null;
  rendering: {
    amount_tax_display: string | null;
    pdf: { page_size: "a4" | "auto" | "letter" | null } | null;
    template: string | null;
    template_version: number | null;
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
  shipping_details: {
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
  starting_balance: number;
  statement_descriptor: string | null;
  status: "draft" | "open" | "paid" | "uncollectible" | "void" | null;
  status_transitions: {
    finalized_at: number | null;
    marked_uncollectible_at: number | null;
    paid_at: number | null;
    voided_at: number | null;
  };
  subscription?: unknown;
  subtotal: number;
  subtotal_excluding_tax: number | null;
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
  threshold_reason?: {
    amount_gte: number | null;
    item_reasons: { line_item_ids: string[]; usage_gte: number }[];
  };
  total: number;
  total_discount_amounts:
    | {
        amount: number;
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
          | {
              checkout_session: string | null;
              customer: unknown;
              customer_account: string | null;
              deleted: true;
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
            };
      }[]
    | null;
  total_excluding_tax: number | null;
  total_pretax_credit_amounts:
    | {
        amount: number;
        credit_balance_transaction?:
          | string
          | {
              created: number;
              credit: {
                amount: {
                  monetary: { currency: string; value: number } | null;
                  type: "monetary";
                };
                credits_application_invoice_voided: {
                  invoice: unknown;
                  invoice_line_item: string;
                } | null;
                type: "credits_application_invoice_voided" | "credits_granted";
              } | null;
              credit_grant:
                | string
                | {
                    amount: {
                      monetary: { currency: string; value: number } | null;
                      type: "monetary";
                    };
                    applicability_config: {
                      scope: {
                        price_type?: "metered";
                        prices?: { id: string | null }[];
                      };
                    };
                    category: "paid" | "promotional";
                    created: number;
                    customer: unknown;
                    customer_account: string | null;
                    effective_at: number | null;
                    expires_at: number | null;
                    id: string;
                    livemode: boolean;
                    metadata: Record<string, string>;
                    name: string | null;
                    object: "billing.credit_grant";
                    priority: number | null;
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
                          status_details: {
                            advancing?: { target_frozen_time: number };
                          };
                        }
                      | null;
                    updated: number;
                    voided_at: number | null;
                  };
              debit: {
                amount: {
                  monetary: { currency: string; value: number } | null;
                  type: "monetary";
                };
                credits_applied: {
                  invoice: unknown;
                  invoice_line_item: string;
                } | null;
                type: "credits_applied" | "credits_expired" | "credits_voided";
              } | null;
              effective_at: number;
              id: string;
              livemode: boolean;
              object: "billing.credit_balance_transaction";
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
                    status_details: {
                      advancing?: { target_frozen_time: number };
                    };
                  }
                | null;
              type: "credit" | "debit" | null;
            }
          | null;
        discount?:
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
          | {
              checkout_session: string | null;
              customer: unknown;
              customer_account: string | null;
              deleted: true;
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
            };
        type: "credit_balance_transaction" | "discount";
      }[]
    | null;
  total_taxes:
    | {
        amount: number;
        tax_behavior: "exclusive" | "inclusive";
        tax_rate_details: {
          tax_rate:
            | string
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
              };
        } | null;
        taxability_reason:
          | "customer_exempt"
          | "not_available"
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
          | "zero_rated";
        taxable_amount: number | null;
        type: "tax_rate_details";
      }[]
    | null;
  webhooks_delivered_at: number | null;
}
export const PostInvoicesCreatePreviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_country: Schema.NullOr(Schema.String),
    account_name: Schema.NullOr(Schema.String),
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
    amount_due: Schema.Number,
    amount_overpaid: Schema.Number,
    amount_paid: Schema.Number,
    amount_paid_off_stripe: Schema.optional(Schema.Number),
    amount_remaining: Schema.Number,
    amount_shipping: Schema.Number,
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
    attempt_count: Schema.Number,
    attempted: Schema.Boolean,
    auto_advance: Schema.optional(Schema.Boolean),
    automatic_tax: Schema.Struct({
      disabled_reason: Schema.NullOr(
        Schema.Literals([
          "finalization_requires_location_inputs",
          "finalization_system_error",
        ]),
      ),
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
    automatically_finalizes_at: Schema.NullOr(Schema.Number),
    billing_reason: Schema.NullOr(
      Schema.Literals([
        "automatic_pending_invoice_item_invoice",
        "manual",
        "quote_accept",
        "subscription",
        "subscription_create",
        "subscription_cycle",
        "subscription_threshold",
        "subscription_update",
        "upcoming",
      ]),
    ),
    collection_method: Schema.Literals([
      "charge_automatically",
      "send_invoice",
    ]),
    confirmation_secret: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          client_secret: SensitiveOutputString,
          type: Schema.String,
        }),
      ),
    ),
    created: Schema.Number,
    currency: Schema.String,
    custom_fields: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          value: Schema.String,
        }),
      ),
    ),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_address: Schema.NullOr(
      Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        line1: Schema.NullOr(Schema.String),
        line2: Schema.NullOr(Schema.String),
        postal_code: Schema.NullOr(Schema.String),
        state: Schema.NullOr(Schema.String),
      }),
    ),
    customer_email: Schema.NullOr(Schema.String),
    customer_name: Schema.NullOr(Schema.String),
    customer_phone: Schema.NullOr(Schema.String),
    customer_shipping: Schema.NullOr(
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
    customer_tax_exempt: Schema.NullOr(
      Schema.Literals(["exempt", "none", "reverse"]),
    ),
    customer_tax_ids: Schema.optional(
      Schema.NullOr(
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
    ),
    default_payment_method: Schema.Unknown,
    default_source: Schema.NullOr(
      Schema.Union([Schema.String, Schema.Unknown]),
    ),
    default_tax_rates: Schema.Array(
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
        metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
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
    description: Schema.NullOr(Schema.String),
    discounts: Schema.Array(Schema.Unknown),
    due_date: Schema.NullOr(Schema.Number),
    effective_at: Schema.NullOr(Schema.Number),
    ending_balance: Schema.NullOr(Schema.Number),
    footer: Schema.NullOr(Schema.String),
    from_invoice: Schema.NullOr(
      Schema.Struct({
        action: Schema.String,
        invoice: Schema.Unknown,
      }),
    ),
    hosted_invoice_url: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.optional(Schema.String),
    invoice_pdf: Schema.optional(Schema.NullOr(Schema.String)),
    issuer: Schema.Struct({
      account: Schema.optional(Schema.Unknown),
      type: Schema.Literals(["account", "self"]),
    }),
    last_finalization_error: Schema.Unknown,
    latest_revision: Schema.Unknown,
    lines: Schema.Struct({
      data: Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          currency: Schema.String,
          description: Schema.NullOr(Schema.String),
          discount_amounts: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                discount: Schema.Unknown,
              }),
            ),
          ),
          discountable: Schema.Boolean,
          discounts: Schema.Array(Schema.Unknown),
          id: Schema.String,
          invoice: Schema.NullOr(Schema.String),
          livemode: Schema.Boolean,
          metadata: Schema.Record(Schema.String, Schema.String),
          object: Schema.Literals(["line_item"]),
          parent: Schema.NullOr(
            Schema.Struct({
              invoice_item_details: Schema.NullOr(
                Schema.Struct({
                  invoice_item: Schema.String,
                  proration: Schema.Boolean,
                  proration_details: Schema.NullOr(
                    Schema.Struct({
                      credited_items: Schema.NullOr(
                        Schema.Struct({
                          invoice: Schema.String,
                          invoice_line_items: Schema.Array(Schema.String),
                        }),
                      ),
                    }),
                  ),
                  subscription: Schema.NullOr(Schema.String),
                }),
              ),
              subscription_item_details: Schema.NullOr(
                Schema.Struct({
                  invoice_item: Schema.NullOr(Schema.String),
                  proration: Schema.Boolean,
                  proration_details: Schema.NullOr(
                    Schema.Struct({
                      credited_items: Schema.NullOr(
                        Schema.Struct({
                          invoice: Schema.String,
                          invoice_line_items: Schema.Array(Schema.String),
                        }),
                      ),
                    }),
                  ),
                  subscription: Schema.NullOr(Schema.String),
                  subscription_item: Schema.String,
                }),
              ),
              type: Schema.Literals([
                "invoice_item_details",
                "subscription_item_details",
              ]),
            }),
          ),
          period: Schema.Struct({
            end: Schema.Number,
            start: Schema.Number,
          }),
          pretax_credit_amounts: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                credit_balance_transaction: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.String,
                      Schema.Struct({
                        created: Schema.Number,
                        credit: Schema.NullOr(
                          Schema.Struct({
                            amount: Schema.Struct({
                              monetary: Schema.Unknown,
                              type: Schema.Literals(["monetary"]),
                            }),
                            credits_application_invoice_voided: Schema.NullOr(
                              Schema.Struct({
                                invoice: Schema.Unknown,
                                invoice_line_item: Schema.String,
                              }),
                            ),
                            type: Schema.Literals([
                              "credits_application_invoice_voided",
                              "credits_granted",
                            ]),
                          }),
                        ),
                        credit_grant: Schema.Union([
                          Schema.String,
                          Schema.Struct({
                            amount: Schema.Struct({
                              monetary: Schema.Unknown,
                              type: Schema.Literals(["monetary"]),
                            }),
                            applicability_config: Schema.Struct({
                              scope: Schema.Struct({
                                price_type: Schema.optional(
                                  Schema.Literals(["metered"]),
                                ),
                                prices: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      id: Schema.NullOr(Schema.String),
                                    }),
                                  ),
                                ),
                              }),
                            }),
                            category: Schema.Literals(["paid", "promotional"]),
                            created: Schema.Number,
                            customer: Schema.Unknown,
                            customer_account: Schema.NullOr(Schema.String),
                            effective_at: Schema.NullOr(Schema.Number),
                            expires_at: Schema.NullOr(Schema.Number),
                            id: Schema.String,
                            livemode: Schema.Boolean,
                            metadata: Schema.Record(
                              Schema.String,
                              Schema.String,
                            ),
                            name: Schema.NullOr(Schema.String),
                            object: Schema.Literals(["billing.credit_grant"]),
                            priority: Schema.NullOr(Schema.Number),
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
                                  object: Schema.Literals([
                                    "test_helpers.test_clock",
                                  ]),
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
                            updated: Schema.Number,
                            voided_at: Schema.NullOr(Schema.Number),
                          }),
                        ]),
                        debit: Schema.NullOr(
                          Schema.Struct({
                            amount: Schema.Struct({
                              monetary: Schema.Unknown,
                              type: Schema.Literals(["monetary"]),
                            }),
                            credits_applied: Schema.NullOr(
                              Schema.Struct({
                                invoice: Schema.Unknown,
                                invoice_line_item: Schema.String,
                              }),
                            ),
                            type: Schema.Literals([
                              "credits_applied",
                              "credits_expired",
                              "credits_voided",
                            ]),
                          }),
                        ),
                        effective_at: Schema.Number,
                        id: Schema.String,
                        livemode: Schema.Boolean,
                        object: Schema.Literals([
                          "billing.credit_balance_transaction",
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
                              object: Schema.Literals([
                                "test_helpers.test_clock",
                              ]),
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
                        type: Schema.NullOr(
                          Schema.Literals(["credit", "debit"]),
                        ),
                      }),
                    ]),
                  ),
                ),
                discount: Schema.optional(Schema.Unknown),
                type: Schema.Literals([
                  "credit_balance_transaction",
                  "discount",
                ]),
              }),
            ),
          ),
          pricing: Schema.NullOr(
            Schema.Struct({
              price_details: Schema.optional(
                Schema.Struct({
                  price: Schema.Unknown,
                  product: Schema.String,
                }),
              ),
              type: Schema.Literals(["price_details"]),
              unit_amount_decimal: Schema.NullOr(Schema.String),
            }),
          ),
          quantity: Schema.NullOr(Schema.Number),
          quantity_decimal: Schema.NullOr(Schema.String),
          subscription: Schema.Unknown,
          subtotal: Schema.Number,
          taxes: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
                tax_rate_details: Schema.NullOr(
                  Schema.Struct({
                    tax_rate: Schema.Union([
                      Schema.String,
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
                    ]),
                  }),
                ),
                taxability_reason: Schema.Literals([
                  "customer_exempt",
                  "not_available",
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
                taxable_amount: Schema.NullOr(Schema.Number),
                type: Schema.Literals(["tax_rate_details"]),
              }),
            ),
          ),
        }),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    next_payment_attempt: Schema.NullOr(Schema.Number),
    number: Schema.NullOr(Schema.String),
    object: Schema.Literals(["invoice"]),
    on_behalf_of: Schema.Unknown,
    parent: Schema.NullOr(
      Schema.Struct({
        quote_details: Schema.NullOr(
          Schema.Struct({
            quote: Schema.String,
          }),
        ),
        subscription_details: Schema.NullOr(
          Schema.Struct({
            metadata: Schema.NullOr(
              Schema.Record(Schema.String, Schema.String),
            ),
            subscription: Schema.Unknown,
            subscription_proration_date: Schema.optional(Schema.Number),
          }),
        ),
        type: Schema.Literals(["quote_details", "subscription_details"]),
      }),
    ),
    payment_settings: Schema.Struct({
      default_mandate: Schema.NullOr(Schema.String),
      payment_method_options: Schema.NullOr(
        Schema.Struct({
          acss_debit: Schema.NullOr(
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  transaction_type: Schema.NullOr(
                    Schema.Literals(["business", "personal"]),
                  ),
                }),
              ),
              verification_method: Schema.optional(
                Schema.Literals(["automatic", "instant", "microdeposits"]),
              ),
            }),
          ),
          bancontact: Schema.NullOr(
            Schema.Struct({
              preferred_language: Schema.Literals(["de", "en", "fr", "nl"]),
            }),
          ),
          card: Schema.NullOr(
            Schema.Struct({
              installments: Schema.optional(
                Schema.Struct({
                  enabled: Schema.NullOr(Schema.Boolean),
                }),
              ),
              request_three_d_secure: Schema.NullOr(
                Schema.Literals(["any", "automatic", "challenge"]),
              ),
            }),
          ),
          customer_balance: Schema.NullOr(
            Schema.Struct({
              bank_transfer: Schema.optional(
                Schema.Struct({
                  eu_bank_transfer: Schema.optional(
                    Schema.Struct({
                      country: Schema.Literals([
                        "BE",
                        "DE",
                        "ES",
                        "FR",
                        "IE",
                        "NL",
                      ]),
                    }),
                  ),
                  type: Schema.NullOr(Schema.String),
                }),
              ),
              funding_type: Schema.NullOr(Schema.Literals(["bank_transfer"])),
            }),
          ),
          konbini: Schema.NullOr(Schema.Struct({})),
          payto: Schema.NullOr(
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  amount: Schema.NullOr(Schema.Number),
                  amount_type: Schema.NullOr(
                    Schema.Literals(["fixed", "maximum"]),
                  ),
                  purpose: Schema.NullOr(
                    Schema.Literals([
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
            }),
          ),
          pix: Schema.NullOr(
            Schema.Struct({
              amount_includes_iof: Schema.NullOr(
                Schema.Literals(["always", "never"]),
              ),
              expires_after_seconds: Schema.optional(Schema.Number),
            }),
          ),
          sepa_debit: Schema.NullOr(Schema.Struct({})),
          upi: Schema.NullOr(
            Schema.Struct({
              mandate_options: Schema.optional(
                Schema.Struct({
                  amount: Schema.NullOr(Schema.Number),
                  amount_type: Schema.NullOr(
                    Schema.Literals(["fixed", "maximum"]),
                  ),
                  description: Schema.NullOr(Schema.String),
                  end_date: Schema.NullOr(Schema.Number),
                }),
              ),
            }),
          ),
          us_bank_account: Schema.NullOr(
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
                  prefetch: Schema.NullOr(
                    Schema.Array(
                      Schema.Literals([
                        "balances",
                        "ownership",
                        "transactions",
                      ]),
                    ),
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
      payment_method_types: Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "ach_credit_transfer",
            "ach_debit",
            "acss_debit",
            "affirm",
            "amazon_pay",
            "au_becs_debit",
            "bacs_debit",
            "bancontact",
            "boleto",
            "card",
            "cashapp",
            "crypto",
            "custom",
            "customer_balance",
            "eps",
            "fpx",
            "giropay",
            "grabpay",
            "ideal",
            "jp_credit_transfer",
            "kakao_pay",
            "klarna",
            "konbini",
            "kr_card",
            "link",
            "multibanco",
            "naver_pay",
            "nz_bank_account",
            "p24",
            "pay_by_bank",
            "payco",
            "paynow",
            "paypal",
            "payto",
            "pix",
            "promptpay",
            "revolut_pay",
            "satispay",
            "sepa_credit_transfer",
            "sepa_debit",
            "sofort",
            "swish",
            "twint",
            "upi",
            "us_bank_account",
            "wechat_pay",
          ]),
        ),
      ),
    }),
    payments: Schema.optional(
      Schema.Struct({
        data: Schema.Array(
          Schema.Struct({
            amount_paid: Schema.NullOr(Schema.Number),
            amount_requested: Schema.Number,
            created: Schema.Number,
            currency: Schema.String,
            id: Schema.String,
            invoice: Schema.Unknown,
            is_default: Schema.Boolean,
            livemode: Schema.Boolean,
            object: Schema.Literals(["invoice_payment"]),
            payment: Schema.Struct({
              charge: Schema.optional(Schema.Unknown),
              payment_intent: Schema.optional(Schema.Unknown),
              payment_record: Schema.optional(
                Schema.Union([
                  Schema.String,
                  Schema.Struct({
                    amount: Schema.Struct({
                      currency: Schema.String,
                      value: Schema.Number,
                    }),
                    amount_authorized: Schema.Struct({
                      currency: Schema.String,
                      value: Schema.Number,
                    }),
                    amount_canceled: Schema.Struct({
                      currency: Schema.String,
                      value: Schema.Number,
                    }),
                    amount_failed: Schema.Struct({
                      currency: Schema.String,
                      value: Schema.Number,
                    }),
                    amount_guaranteed: Schema.Struct({
                      currency: Schema.String,
                      value: Schema.Number,
                    }),
                    amount_refunded: Schema.Struct({
                      currency: Schema.String,
                      value: Schema.Number,
                    }),
                    amount_requested: Schema.Struct({
                      currency: Schema.String,
                      value: Schema.Number,
                    }),
                    application: Schema.NullOr(Schema.String),
                    created: Schema.Number,
                    customer_details: Schema.NullOr(
                      Schema.Struct({
                        customer: Schema.NullOr(Schema.String),
                        email: Schema.NullOr(Schema.String),
                        name: Schema.NullOr(Schema.String),
                        phone: Schema.NullOr(Schema.String),
                      }),
                    ),
                    customer_presence: Schema.NullOr(
                      Schema.Literals(["off_session", "on_session"]),
                    ),
                    description: Schema.NullOr(Schema.String),
                    id: Schema.String,
                    latest_payment_attempt_record: Schema.NullOr(Schema.String),
                    livemode: Schema.Boolean,
                    metadata: Schema.Record(Schema.String, Schema.String),
                    object: Schema.Literals(["payment_record"]),
                    payment_method_details: Schema.Unknown,
                    processor_details: Schema.Struct({
                      custom: Schema.optional(
                        Schema.Struct({
                          payment_reference: Schema.NullOr(Schema.String),
                        }),
                      ),
                      type: Schema.Literals(["custom"]),
                    }),
                    reported_by: Schema.Literals(["self", "stripe"]),
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
                        name: Schema.NullOr(Schema.String),
                        phone: Schema.NullOr(Schema.String),
                      }),
                    ),
                  }),
                ]),
              ),
              type: Schema.Literals([
                "charge",
                "payment_intent",
                "payment_record",
              ]),
            }),
            status: Schema.String,
            status_transitions: Schema.Struct({
              canceled_at: Schema.NullOr(Schema.Number),
              paid_at: Schema.NullOr(Schema.Number),
            }),
          }),
        ),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    period_end: Schema.Number,
    period_start: Schema.Number,
    post_payment_credit_notes_amount: Schema.Number,
    pre_payment_credit_notes_amount: Schema.Number,
    receipt_number: Schema.NullOr(Schema.String),
    rendering: Schema.NullOr(
      Schema.Struct({
        amount_tax_display: Schema.NullOr(Schema.String),
        pdf: Schema.NullOr(
          Schema.Struct({
            page_size: Schema.NullOr(Schema.Literals(["a4", "auto", "letter"])),
          }),
        ),
        template: Schema.NullOr(Schema.String),
        template_version: Schema.NullOr(Schema.Number),
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
    shipping_details: Schema.NullOr(
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
    starting_balance: Schema.Number,
    statement_descriptor: Schema.NullOr(Schema.String),
    status: Schema.NullOr(
      Schema.Literals(["draft", "open", "paid", "uncollectible", "void"]),
    ),
    status_transitions: Schema.Struct({
      finalized_at: Schema.NullOr(Schema.Number),
      marked_uncollectible_at: Schema.NullOr(Schema.Number),
      paid_at: Schema.NullOr(Schema.Number),
      voided_at: Schema.NullOr(Schema.Number),
    }),
    subscription: Schema.optional(Schema.Unknown),
    subtotal: Schema.Number,
    subtotal_excluding_tax: Schema.NullOr(Schema.Number),
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
    threshold_reason: Schema.optional(
      Schema.Struct({
        amount_gte: Schema.NullOr(Schema.Number),
        item_reasons: Schema.Array(
          Schema.Struct({
            line_item_ids: Schema.Array(Schema.String),
            usage_gte: Schema.Number,
          }),
        ),
      }),
    ),
    total: Schema.Number,
    total_discount_amounts: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          discount: Schema.Unknown,
        }),
      ),
    ),
    total_excluding_tax: Schema.NullOr(Schema.Number),
    total_pretax_credit_amounts: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          credit_balance_transaction: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  created: Schema.Number,
                  credit: Schema.NullOr(
                    Schema.Struct({
                      amount: Schema.Struct({
                        monetary: Schema.NullOr(
                          Schema.Struct({
                            currency: Schema.String,
                            value: Schema.Number,
                          }),
                        ),
                        type: Schema.Literals(["monetary"]),
                      }),
                      credits_application_invoice_voided: Schema.NullOr(
                        Schema.Struct({
                          invoice: Schema.Unknown,
                          invoice_line_item: Schema.String,
                        }),
                      ),
                      type: Schema.Literals([
                        "credits_application_invoice_voided",
                        "credits_granted",
                      ]),
                    }),
                  ),
                  credit_grant: Schema.Union([
                    Schema.String,
                    Schema.Struct({
                      amount: Schema.Struct({
                        monetary: Schema.NullOr(
                          Schema.Struct({
                            currency: Schema.String,
                            value: Schema.Number,
                          }),
                        ),
                        type: Schema.Literals(["monetary"]),
                      }),
                      applicability_config: Schema.Struct({
                        scope: Schema.Struct({
                          price_type: Schema.optional(
                            Schema.Literals(["metered"]),
                          ),
                          prices: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                id: Schema.NullOr(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      }),
                      category: Schema.Literals(["paid", "promotional"]),
                      created: Schema.Number,
                      customer: Schema.Unknown,
                      customer_account: Schema.NullOr(Schema.String),
                      effective_at: Schema.NullOr(Schema.Number),
                      expires_at: Schema.NullOr(Schema.Number),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
                      name: Schema.NullOr(Schema.String),
                      object: Schema.Literals(["billing.credit_grant"]),
                      priority: Schema.NullOr(Schema.Number),
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
                            object: Schema.Literals([
                              "test_helpers.test_clock",
                            ]),
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
                      updated: Schema.Number,
                      voided_at: Schema.NullOr(Schema.Number),
                    }),
                  ]),
                  debit: Schema.NullOr(
                    Schema.Struct({
                      amount: Schema.Struct({
                        monetary: Schema.NullOr(
                          Schema.Struct({
                            currency: Schema.String,
                            value: Schema.Number,
                          }),
                        ),
                        type: Schema.Literals(["monetary"]),
                      }),
                      credits_applied: Schema.NullOr(
                        Schema.Struct({
                          invoice: Schema.Unknown,
                          invoice_line_item: Schema.String,
                        }),
                      ),
                      type: Schema.Literals([
                        "credits_applied",
                        "credits_expired",
                        "credits_voided",
                      ]),
                    }),
                  ),
                  effective_at: Schema.Number,
                  id: Schema.String,
                  livemode: Schema.Boolean,
                  object: Schema.Literals([
                    "billing.credit_balance_transaction",
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
                  type: Schema.NullOr(Schema.Literals(["credit", "debit"])),
                }),
              ]),
            ),
          ),
          discount: Schema.optional(Schema.Unknown),
          type: Schema.Literals(["credit_balance_transaction", "discount"]),
        }),
      ),
    ),
    total_taxes: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
          tax_rate_details: Schema.NullOr(
            Schema.Struct({
              tax_rate: Schema.Union([
                Schema.String,
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
              ]),
            }),
          ),
          taxability_reason: Schema.Literals([
            "customer_exempt",
            "not_available",
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
          taxable_amount: Schema.NullOr(Schema.Number),
          type: Schema.Literals(["tax_rate_details"]),
        }),
      ),
    ),
    webhooks_delivered_at: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<PostInvoicesCreatePreviewOutput>;

// The operation
/**
 * Create a preview invoice
 *
 * <p>At any time, you can preview the upcoming invoice for a subscription or subscription schedule. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>
 * <p>You can also preview the effects of creating or updating a subscription or subscription schedule, including a preview of any prorations that will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the <code>subscription_details.proration_date</code> parameter when doing the actual subscription update.</p>
 * <p>The recommended way to get only the prorations being previewed on the invoice is to consider line items where <code>parent.subscription_item_details.proration</code> is <code>true</code>.</p>
 * <p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>
 * <p>Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. <a href="https://docs.stripe.com/currencies/conversions">Learn more</a></p>
 */
export const PostInvoicesCreatePreview = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostInvoicesCreatePreviewInput,
    outputSchema: PostInvoicesCreatePreviewOutput,
  }),
);
