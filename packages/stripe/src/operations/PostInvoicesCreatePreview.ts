import * as Schema from "effect/Schema";
import {
  automatic_taxSchema,
  billing_bill_resource_invoicing_taxes_taxSchema,
  connect_account_referenceSchema,
  discounts_resource_discount_amountSchema,
  invoice_paymentSchema,
  invoice_setting_custom_fieldSchema,
  invoice_threshold_reasonSchema,
  invoices_payment_settingsSchema,
  invoices_resource_invoice_tax_idSchema,
  invoices_resource_pretax_credit_amountSchema,
  invoices_resource_status_transitionsSchema,
  line_itemSchema,
  tax_rateSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
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
        address: Schema.optional(Schema.Unknown),
        shipping: Schema.optional(Schema.Unknown),
        tax: Schema.optional(
          Schema.Struct({
            ip_address: Schema.optional(Schema.Unknown),
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
      }),
    ),
    discounts: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    invoice_items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          amount: Schema.optional(Schema.Number),
          currency: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          discountable: Schema.optional(Schema.Boolean),
          discounts: Schema.optional(Schema.Unknown),
          invoiceitem: Schema.optional(Schema.String),
          metadata: Schema.optional(Schema.Unknown),
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
          tax_code: Schema.optional(Schema.Unknown),
          tax_rates: Schema.optional(Schema.Unknown),
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
    on_behalf_of: Schema.optional(Schema.Unknown),
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
                    tax_rates: Schema.optional(Schema.Unknown),
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
              billing_thresholds: Schema.optional(Schema.Unknown),
              collection_method: Schema.optional(
                Schema.Literals(["charge_automatically", "send_invoice"]),
              ),
              currency: Schema.optional(Schema.String),
              default_payment_method: Schema.optional(Schema.String),
              default_tax_rates: Schema.optional(Schema.Unknown),
              description: Schema.optional(Schema.Unknown),
              discounts: Schema.optional(Schema.Unknown),
              duration: Schema.optional(
                Schema.Struct({
                  interval: Schema.Literals(["day", "month", "week", "year"]),
                  interval_count: Schema.optional(Schema.Number),
                }),
              ),
              end_date: Schema.optional(Schema.Unknown),
              invoice_settings: Schema.optional(
                Schema.Struct({
                  account_tax_ids: Schema.optional(Schema.Unknown),
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
                  billing_thresholds: Schema.optional(Schema.Unknown),
                  discounts: Schema.optional(Schema.Unknown),
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
                  tax_rates: Schema.optional(Schema.Unknown),
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
              start_date: Schema.optional(Schema.Unknown),
              transfer_data: Schema.optional(
                Schema.Struct({
                  amount_percent: Schema.optional(Schema.Number),
                  destination: Schema.String,
                }),
              ),
              trial: Schema.optional(Schema.Boolean),
              trial_end: Schema.optional(Schema.Unknown),
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
        billing_cycle_anchor: Schema.optional(Schema.Unknown),
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
        cancel_at: Schema.optional(Schema.Unknown),
        cancel_at_period_end: Schema.optional(Schema.Boolean),
        cancel_now: Schema.optional(Schema.Boolean),
        default_tax_rates: Schema.optional(Schema.Unknown),
        items: Schema.optional(
          Schema.Array(
            Schema.Struct({
              billing_thresholds: Schema.optional(Schema.Unknown),
              clear_usage: Schema.optional(Schema.Boolean),
              deleted: Schema.optional(Schema.Boolean),
              discounts: Schema.optional(Schema.Unknown),
              id: Schema.optional(Schema.String),
              metadata: Schema.optional(Schema.Unknown),
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
              tax_rates: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        proration_behavior: Schema.optional(
          Schema.Literals(["always_invoice", "create_prorations", "none"]),
        ),
        proration_date: Schema.optional(Schema.Number),
        resume_at: Schema.optional(Schema.Literals(["now"])),
        start_date: Schema.optional(Schema.Number),
        trial_end: Schema.optional(Schema.Unknown),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/invoices/create_preview",
      contentType: "form-urlencoded",
    }),
  );
export type PostInvoicesCreatePreviewInput =
  typeof PostInvoicesCreatePreviewInput.Type;

// Output Schema
export const PostInvoicesCreatePreviewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_country: Schema.NullOr(Schema.String),
    account_name: Schema.NullOr(Schema.String),
    account_tax_ids: Schema.NullOr(Schema.Array(Schema.Unknown)),
    amount_due: Schema.Number,
    amount_overpaid: Schema.Number,
    amount_paid: Schema.Number,
    amount_remaining: Schema.Number,
    amount_shipping: Schema.Number,
    application: Schema.Unknown,
    attempt_count: Schema.Number,
    attempted: Schema.Boolean,
    auto_advance: Schema.optional(Schema.Boolean),
    automatic_tax: Schema.suspend(() => automatic_taxSchema),
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
    confirmation_secret: Schema.optional(Schema.Unknown),
    created: Schema.Number,
    currency: Schema.String,
    custom_fields: Schema.NullOr(
      Schema.Array(Schema.suspend(() => invoice_setting_custom_fieldSchema)),
    ),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_address: Schema.Unknown,
    customer_email: Schema.NullOr(Schema.String),
    customer_name: Schema.NullOr(Schema.String),
    customer_phone: Schema.NullOr(Schema.String),
    customer_shipping: Schema.Unknown,
    customer_tax_exempt: Schema.NullOr(
      Schema.Literals(["exempt", "none", "reverse"]),
    ),
    customer_tax_ids: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(() => invoices_resource_invoice_tax_idSchema),
        ),
      ),
    ),
    default_payment_method: Schema.Unknown,
    default_source: Schema.Unknown,
    default_tax_rates: Schema.Array(Schema.suspend(() => tax_rateSchema)),
    description: Schema.NullOr(Schema.String),
    discounts: Schema.Array(Schema.Unknown),
    due_date: Schema.NullOr(Schema.Number),
    effective_at: Schema.NullOr(Schema.Number),
    ending_balance: Schema.NullOr(Schema.Number),
    footer: Schema.NullOr(Schema.String),
    from_invoice: Schema.Unknown,
    hosted_invoice_url: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.optional(Schema.String),
    invoice_pdf: Schema.optional(Schema.NullOr(Schema.String)),
    issuer: Schema.suspend(() => connect_account_referenceSchema),
    last_finalization_error: Schema.Unknown,
    latest_revision: Schema.Unknown,
    lines: Schema.Struct({
      data: Schema.Array(Schema.suspend(() => line_itemSchema)),
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
    parent: Schema.Unknown,
    payment_settings: Schema.suspend(() => invoices_payment_settingsSchema),
    payments: Schema.optional(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => invoice_paymentSchema)),
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
    rendering: Schema.Unknown,
    shipping_cost: Schema.Unknown,
    shipping_details: Schema.Unknown,
    starting_balance: Schema.Number,
    statement_descriptor: Schema.NullOr(Schema.String),
    status: Schema.NullOr(
      Schema.Literals(["draft", "open", "paid", "uncollectible", "void"]),
    ),
    status_transitions: Schema.suspend(
      () => invoices_resource_status_transitionsSchema,
    ),
    subscription: Schema.optional(Schema.Unknown),
    subtotal: Schema.Number,
    subtotal_excluding_tax: Schema.NullOr(Schema.Number),
    test_clock: Schema.Unknown,
    threshold_reason: Schema.optional(
      Schema.suspend(() => invoice_threshold_reasonSchema),
    ),
    total: Schema.Number,
    total_discount_amounts: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => discounts_resource_discount_amountSchema),
      ),
    ),
    total_excluding_tax: Schema.NullOr(Schema.Number),
    total_pretax_credit_amounts: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => invoices_resource_pretax_credit_amountSchema),
      ),
    ),
    total_taxes: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => billing_bill_resource_invoicing_taxes_taxSchema),
      ),
    ),
    webhooks_delivered_at: Schema.NullOr(Schema.Number),
  });
export type PostInvoicesCreatePreviewOutput =
  typeof PostInvoicesCreatePreviewOutput.Type;

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
