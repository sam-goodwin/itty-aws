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
export const PostInvoicesInvoiceUpdateLinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invoice: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    invoice_metadata: Schema.optional(Schema.Unknown),
    lines: Schema.Array(
      Schema.Struct({
        amount: Schema.optional(Schema.Number),
        description: Schema.optional(Schema.String),
        discountable: Schema.optional(Schema.Boolean),
        discounts: Schema.optional(Schema.Unknown),
        id: Schema.String,
        metadata: Schema.optional(Schema.Unknown),
        period: Schema.optional(
          Schema.Struct({
            end: Schema.Number,
            start: Schema.Number,
          }),
        ),
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
            tax_behavior: Schema.optional(
              Schema.Literals(["exclusive", "inclusive", "unspecified"]),
            ),
            unit_amount: Schema.optional(Schema.Number),
            unit_amount_decimal: Schema.optional(Schema.String),
          }),
        ),
        pricing: Schema.optional(
          Schema.Struct({
            price: Schema.optional(Schema.String),
          }),
        ),
        quantity: Schema.optional(Schema.Number),
        quantity_decimal: Schema.optional(Schema.String),
        tax_amounts: Schema.optional(Schema.Unknown),
        tax_rates: Schema.optional(Schema.Unknown),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/invoices/{invoice}/update_lines",
      contentType: "form-urlencoded",
    }),
  );
export type PostInvoicesInvoiceUpdateLinesInput =
  typeof PostInvoicesInvoiceUpdateLinesInput.Type;

// Output Schema
export const PostInvoicesInvoiceUpdateLinesOutput =
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
export type PostInvoicesInvoiceUpdateLinesOutput =
  typeof PostInvoicesInvoiceUpdateLinesOutput.Type;

// The operation
/**
 * Bulk update invoice line items
 *
 * <p>Updates multiple line items on an invoice. This is only possible when an invoice is still a draft.</p>
 */
export const PostInvoicesInvoiceUpdateLines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostInvoicesInvoiceUpdateLinesInput,
    outputSchema: PostInvoicesInvoiceUpdateLinesOutput,
  }));
