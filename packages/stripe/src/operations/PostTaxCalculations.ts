import * as Schema from "effect/Schema";
import {
  tax_calculation_line_itemSchema,
  tax_product_resource_customer_detailsSchema,
  tax_product_resource_tax_breakdownSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTaxCalculationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.String,
    customer: Schema.optional(Schema.String),
    customer_details: Schema.optional(
      Schema.Struct({
        address: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.Unknown),
            country: Schema.String,
            line1: Schema.optional(Schema.Unknown),
            line2: Schema.optional(Schema.Unknown),
            postal_code: Schema.optional(Schema.Unknown),
            state: Schema.optional(Schema.Unknown),
          }),
        ),
        address_source: Schema.optional(
          Schema.Literals(["billing", "shipping"]),
        ),
        ip_address: Schema.optional(Schema.String),
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
                "gb_vat",
                "ge_vat",
                "gn_nif",
                "hk_br",
                "hr_oib",
                "hu_tin",
                "id_npwp",
                "il_vat",
                "in_gst",
                "is_vat",
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
        taxability_override: Schema.optional(
          Schema.Literals(["customer_exempt", "none", "reverse_charge"]),
        ),
      }),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    line_items: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        product: Schema.optional(Schema.String),
        quantity: Schema.optional(Schema.Number),
        reference: Schema.optional(Schema.String),
        tax_behavior: Schema.optional(
          Schema.Literals(["exclusive", "inclusive"]),
        ),
        tax_code: Schema.optional(Schema.String),
      }),
    ),
    ship_from_details: Schema.optional(
      Schema.Struct({
        address: Schema.Struct({
          city: Schema.optional(Schema.Unknown),
          country: Schema.String,
          line1: Schema.optional(Schema.Unknown),
          line2: Schema.optional(Schema.Unknown),
          postal_code: Schema.optional(Schema.Unknown),
          state: Schema.optional(Schema.Unknown),
        }),
      }),
    ),
    shipping_cost: Schema.optional(
      Schema.Struct({
        amount: Schema.optional(Schema.Number),
        shipping_rate: Schema.optional(Schema.String),
        tax_behavior: Schema.optional(
          Schema.Literals(["exclusive", "inclusive"]),
        ),
        tax_code: Schema.optional(Schema.String),
      }),
    ),
    tax_date: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/tax/calculations",
      contentType: "form-urlencoded",
    }),
  );
export type PostTaxCalculationsInput = typeof PostTaxCalculationsInput.Type;

// Output Schema
export const PostTaxCalculationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_total: Schema.Number,
    currency: Schema.String,
    customer: Schema.NullOr(Schema.String),
    customer_details: Schema.suspend(
      () => tax_product_resource_customer_detailsSchema,
    ),
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.NullOr(Schema.String),
    line_items: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          data: Schema.Array(
            Schema.suspend(() => tax_calculation_line_itemSchema),
          ),
          has_more: Schema.Boolean,
          object: Schema.Literals(["list"]),
          url: Schema.String,
        }),
      ),
    ),
    livemode: Schema.Boolean,
    object: Schema.Literals(["tax.calculation"]),
    ship_from_details: Schema.Unknown,
    shipping_cost: Schema.Unknown,
    tax_amount_exclusive: Schema.Number,
    tax_amount_inclusive: Schema.Number,
    tax_breakdown: Schema.Array(
      Schema.suspend(() => tax_product_resource_tax_breakdownSchema),
    ),
    tax_date: Schema.Number,
  });
export type PostTaxCalculationsOutput = typeof PostTaxCalculationsOutput.Type;

// The operation
/**
 * Create a Tax Calculation
 *
 * <p>Calculates tax based on the input and returns a Tax <code>Calculation</code> object.</p>
 */
export const PostTaxCalculations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostTaxCalculationsInput,
  outputSchema: PostTaxCalculationsOutput,
}));
