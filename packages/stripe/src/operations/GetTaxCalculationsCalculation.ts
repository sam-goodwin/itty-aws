import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTaxCalculationsCalculationInput {
  calculation: string;
  expand?: string;
}
export const GetTaxCalculationsCalculationInput =
  /*@__PURE__*/ Schema.Struct({
    calculation: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax/calculations/{calculation}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTaxCalculationsCalculationInput>;

// Output Schema
export interface GetTaxCalculationsCalculationOutput {
  amount_total: number;
  currency: string;
  customer: string | null;
  customer_details: {
    address: {
      city: string | null;
      country: string;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    } | null;
    address_source: "billing" | "shipping" | null;
    ip_address: string | null;
    tax_ids: {
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
    }[];
    taxability_override: "customer_exempt" | "none" | "reverse_charge";
  };
  expires_at: number | null;
  id: string | null;
  line_items?: {
    data: {
      amount: number;
      amount_tax: number;
      id: string;
      livemode: boolean;
      metadata: Record<string, string> | null;
      object: "tax.calculation_line_item";
      product: string | null;
      quantity: number;
      reference: string;
      tax_behavior: "exclusive" | "inclusive";
      tax_breakdown?:
        | {
            amount: number;
            jurisdiction: {
              country: string;
              display_name: string;
              level: "city" | "country" | "county" | "district" | "state";
              state: string | null;
            };
            sourcing: "destination" | "origin";
            tax_rate_details: {
              display_name: string;
              percentage_decimal: string;
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
                | "vat";
            } | null;
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
              | "zero_rated";
            taxable_amount: number;
          }[]
        | null;
      tax_code: string;
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  } | null;
  livemode: boolean;
  object: "tax.calculation";
  ship_from_details: {
    address: {
      city: string | null;
      country: string;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
  } | null;
  shipping_cost: {
    amount: number;
    amount_tax: number;
    shipping_rate?: string;
    tax_behavior: "exclusive" | "inclusive";
    tax_breakdown?: {
      amount: number;
      jurisdiction: {
        country: string;
        display_name: string;
        level: "city" | "country" | "county" | "district" | "state";
        state: string | null;
      };
      sourcing: "destination" | "origin";
      tax_rate_details: {
        display_name: string;
        percentage_decimal: string;
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
          | "vat";
      } | null;
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
        | "zero_rated";
      taxable_amount: number;
    }[];
    tax_code: string;
  } | null;
  tax_amount_exclusive: number;
  tax_amount_inclusive: number;
  tax_breakdown: {
    amount: number;
    inclusive: boolean;
    tax_rate_details: {
      country: string | null;
      flat_amount: { amount: number; currency: string } | null;
      percentage_decimal: string;
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
      | "zero_rated";
    taxable_amount: number;
  }[];
  tax_date: number;
}
export const GetTaxCalculationsCalculationOutput =
  /*@__PURE__*/ Schema.Struct({
    amount_total: Schema.Number,
    currency: Schema.String,
    customer: Schema.NullOr(Schema.String),
    customer_details: Schema.Struct({
      address: Schema.NullOr(
        Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.String,
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
        }),
      ),
      address_source: Schema.NullOr(Schema.Literals(["billing", "shipping"])),
      ip_address: Schema.NullOr(Schema.String),
      tax_ids: Schema.Array(
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
          value: Schema.String,
        }),
      ),
      taxability_override: Schema.Literals([
        "customer_exempt",
        "none",
        "reverse_charge",
      ]),
    }),
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.NullOr(Schema.String),
    line_items: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          data: Schema.Array(
            Schema.Struct({
              amount: Schema.Number,
              amount_tax: Schema.Number,
              id: Schema.String,
              livemode: Schema.Boolean,
              metadata: Schema.NullOr(
                Schema.Record(Schema.String, Schema.String),
              ),
              object: Schema.Literals(["tax.calculation_line_item"]),
              product: Schema.NullOr(Schema.String),
              quantity: Schema.Number,
              reference: Schema.String,
              tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
              tax_breakdown: Schema.optional(
                Schema.NullOr(
                  Schema.Array(
                    Schema.Struct({
                      amount: Schema.Number,
                      jurisdiction: Schema.Struct({
                        country: Schema.String,
                        display_name: Schema.String,
                        level: Schema.Literals([
                          "city",
                          "country",
                          "county",
                          "district",
                          "state",
                        ]),
                        state: Schema.NullOr(Schema.String),
                      }),
                      sourcing: Schema.Literals(["destination", "origin"]),
                      tax_rate_details: Schema.NullOr(
                        Schema.Struct({
                          display_name: Schema.String,
                          percentage_decimal: Schema.String,
                          tax_type: Schema.Literals([
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
                        }),
                      ),
                      taxability_reason: Schema.Literals([
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
                      taxable_amount: Schema.Number,
                    }),
                  ),
                ),
              ),
              tax_code: Schema.String,
            }),
          ),
          has_more: Schema.Boolean,
          object: Schema.Literals(["list"]),
          url: Schema.String,
        }),
      ),
    ),
    livemode: Schema.Boolean,
    object: Schema.Literals(["tax.calculation"]),
    ship_from_details: Schema.NullOr(
      Schema.Struct({
        address: Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.String,
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
        }),
      }),
    ),
    shipping_cost: Schema.NullOr(
      Schema.Struct({
        amount: Schema.Number,
        amount_tax: Schema.Number,
        shipping_rate: Schema.optional(Schema.String),
        tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
        tax_breakdown: Schema.optional(
          Schema.Array(
            Schema.Struct({
              amount: Schema.Number,
              jurisdiction: Schema.Struct({
                country: Schema.String,
                display_name: Schema.String,
                level: Schema.Literals([
                  "city",
                  "country",
                  "county",
                  "district",
                  "state",
                ]),
                state: Schema.NullOr(Schema.String),
              }),
              sourcing: Schema.Literals(["destination", "origin"]),
              tax_rate_details: Schema.NullOr(
                Schema.Struct({
                  display_name: Schema.String,
                  percentage_decimal: Schema.String,
                  tax_type: Schema.Literals([
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
                }),
              ),
              taxability_reason: Schema.Literals([
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
              taxable_amount: Schema.Number,
            }),
          ),
        ),
        tax_code: Schema.String,
      }),
    ),
    tax_amount_exclusive: Schema.Number,
    tax_amount_inclusive: Schema.Number,
    tax_breakdown: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        inclusive: Schema.Boolean,
        tax_rate_details: Schema.Struct({
          country: Schema.NullOr(Schema.String),
          flat_amount: Schema.NullOr(
            Schema.Struct({
              amount: Schema.Number,
              currency: Schema.String,
            }),
          ),
          percentage_decimal: Schema.String,
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
        taxability_reason: Schema.Literals([
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
        taxable_amount: Schema.Number,
      }),
    ),
    tax_date: Schema.Number,
  }) as unknown as Schema.Codec<GetTaxCalculationsCalculationOutput>;

// The operation
/**
 * Retrieve a Calculation
 *
 * <p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTaxCalculationsCalculation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetTaxCalculationsCalculationInput,
    outputSchema: GetTaxCalculationsCalculationOutput,
  }));
