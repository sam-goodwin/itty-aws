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
export const PostInvoicesInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invoice: Schema.String.pipe(T.PathParam()),
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
    custom_fields: Schema.optional(Schema.Unknown),
    days_until_due: Schema.optional(Schema.Number),
    default_payment_method: Schema.optional(Schema.String),
    default_source: Schema.optional(Schema.Unknown),
    default_tax_rates: Schema.optional(Schema.Unknown),
    description: Schema.optional(Schema.String),
    discounts: Schema.optional(Schema.Unknown),
    due_date: Schema.optional(Schema.Number),
    effective_at: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    footer: Schema.optional(Schema.String),
    issuer: Schema.optional(
      Schema.Struct({
        account: Schema.optional(Schema.String),
        type: Schema.Literals(["account", "self"]),
      }),
    ),
    metadata: Schema.optional(Schema.Unknown),
    number: Schema.optional(Schema.Unknown),
    on_behalf_of: Schema.optional(Schema.Unknown),
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
    rendering: Schema.optional(
      Schema.Struct({
        amount_tax_display: Schema.optional(
          Schema.Literals(["", "exclude_tax", "include_inclusive_tax"]),
        ),
        pdf: Schema.optional(
          Schema.Struct({
            page_size: Schema.optional(
              Schema.Literals(["a4", "auto", "letter"]),
            ),
          }),
        ),
        template: Schema.optional(Schema.String),
        template_version: Schema.optional(Schema.Unknown),
      }),
    ),
    shipping_cost: Schema.optional(Schema.Unknown),
    shipping_details: Schema.optional(Schema.Unknown),
    statement_descriptor: Schema.optional(Schema.String),
    transfer_data: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/invoices/{invoice}",
      contentType: "form-urlencoded",
    }),
  );
export type PostInvoicesInvoiceInput = typeof PostInvoicesInvoiceInput.Type;

// Output Schema
export const PostInvoicesInvoiceOutput =
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
export type PostInvoicesInvoiceOutput = typeof PostInvoicesInvoiceOutput.Type;

// The operation
/**
 * Update an invoice
 *
 * <p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
 * monetary values, as well as <code>collection_method</code>, become uneditable.</p>
 * <p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
 * sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
 * <code>auto_advance=false</code>.</p>
 */
export const PostInvoicesInvoice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostInvoicesInvoiceInput,
  outputSchema: PostInvoicesInvoiceOutput,
}));
