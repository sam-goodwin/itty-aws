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
export const PostInvoicesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account_tax_ids: Schema.optional(Schema.Unknown),
  application_fee_amount: Schema.optional(Schema.Number),
  auto_advance: Schema.optional(Schema.Boolean),
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
  automatically_finalizes_at: Schema.optional(Schema.Number),
  collection_method: Schema.optional(
    Schema.Literals(["charge_automatically", "send_invoice"]),
  ),
  currency: Schema.optional(Schema.String),
  custom_fields: Schema.optional(Schema.Unknown),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  days_until_due: Schema.optional(Schema.Number),
  default_payment_method: Schema.optional(Schema.String),
  default_source: Schema.optional(Schema.String),
  default_tax_rates: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  discounts: Schema.optional(Schema.Unknown),
  due_date: Schema.optional(Schema.Number),
  effective_at: Schema.optional(Schema.Number),
  expand: Schema.optional(Schema.Array(Schema.String)),
  footer: Schema.optional(Schema.String),
  from_invoice: Schema.optional(
    Schema.Struct({
      action: Schema.Literals(["revision"]),
      invoice: Schema.String,
    }),
  ),
  issuer: Schema.optional(
    Schema.Struct({
      account: Schema.optional(Schema.String),
      type: Schema.Literals(["account", "self"]),
    }),
  ),
  metadata: Schema.optional(Schema.Unknown),
  number: Schema.optional(Schema.String),
  on_behalf_of: Schema.optional(Schema.String),
  payment_settings: Schema.optional(
    Schema.Struct({
      default_mandate: Schema.optional(Schema.Unknown),
      payment_method_options: Schema.optional(
        Schema.Struct({
          acss_debit: Schema.optional(Schema.Unknown),
          bancontact: Schema.optional(Schema.Unknown),
          card: Schema.optional(Schema.Unknown),
          customer_balance: Schema.optional(Schema.Unknown),
          konbini: Schema.optional(Schema.Unknown),
          payto: Schema.optional(Schema.Unknown),
          sepa_debit: Schema.optional(Schema.Unknown),
          us_bank_account: Schema.optional(Schema.Unknown),
        }),
      ),
      payment_method_types: Schema.optional(Schema.Unknown),
    }),
  ),
  pending_invoice_items_behavior: Schema.optional(
    Schema.Literals(["exclude", "include"]),
  ),
  rendering: Schema.optional(
    Schema.Struct({
      amount_tax_display: Schema.optional(
        Schema.Literals(["", "exclude_tax", "include_inclusive_tax"]),
      ),
      pdf: Schema.optional(
        Schema.Struct({
          page_size: Schema.optional(Schema.Literals(["a4", "auto", "letter"])),
        }),
      ),
      template: Schema.optional(Schema.String),
      template_version: Schema.optional(Schema.Unknown),
    }),
  ),
  shipping_cost: Schema.optional(
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
  shipping_details: Schema.optional(
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
      phone: Schema.optional(Schema.Unknown),
    }),
  ),
  statement_descriptor: Schema.optional(Schema.String),
  subscription: Schema.optional(Schema.String),
  transfer_data: Schema.optional(
    Schema.Struct({
      amount: Schema.optional(Schema.Number),
      destination: Schema.String,
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/invoices",
    contentType: "form-urlencoded",
  }),
);
export type PostInvoicesInput = typeof PostInvoicesInput.Type;

// Output Schema
export const PostInvoicesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  collection_method: Schema.Literals(["charge_automatically", "send_invoice"]),
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
export type PostInvoicesOutput = typeof PostInvoicesOutput.Type;

// The operation
/**
 * Create an invoice
 *
 * <p>This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you <a href="/api/invoices/finalize">finalize</a> the invoice, which allows you to <a href="/api/invoices/pay">pay</a> or <a href="/api/invoices/send">send</a> the invoice to your customers.</p>
 */
export const PostInvoices = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostInvoicesInput,
  outputSchema: PostInvoicesOutput,
}));
