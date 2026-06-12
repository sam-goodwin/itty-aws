import * as Schema from "effect/Schema";
import {
  invoice_setting_quote_settingSchema,
  itemSchema,
  quotes_resource_automatic_taxSchema,
  quotes_resource_computedSchema,
  quotes_resource_status_transitionsSchema,
  quotes_resource_subscription_data_subscription_dataSchema,
  quotes_resource_total_detailsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostQuotesQuoteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  quote: Schema.String.pipe(T.PathParam()),
  application_fee_amount: Schema.optional(Schema.Unknown),
  application_fee_percent: Schema.optional(Schema.Unknown),
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
  collection_method: Schema.optional(
    Schema.Literals(["charge_automatically", "send_invoice"]),
  ),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
  default_tax_rates: Schema.optional(Schema.Unknown),
  description: Schema.optional(Schema.Unknown),
  discounts: Schema.optional(Schema.Unknown),
  expand: Schema.optional(Schema.Array(Schema.String)),
  expires_at: Schema.optional(Schema.Number),
  footer: Schema.optional(Schema.Unknown),
  header: Schema.optional(Schema.Unknown),
  invoice_settings: Schema.optional(
    Schema.Struct({
      days_until_due: Schema.optional(Schema.Number),
      issuer: Schema.optional(
        Schema.Struct({
          account: Schema.optional(Schema.String),
          type: Schema.Literals(["account", "self"]),
        }),
      ),
    }),
  ),
  line_items: Schema.optional(
    Schema.Array(
      Schema.Struct({
        discounts: Schema.optional(Schema.Unknown),
        id: Schema.optional(Schema.String),
        price: Schema.optional(Schema.String),
        price_data: Schema.optional(
          Schema.Struct({
            currency: Schema.String,
            product: Schema.String,
            recurring: Schema.optional(
              Schema.Struct({
                interval: Schema.Literals(["day", "month", "week", "year"]),
                interval_count: Schema.optional(Schema.Number),
              }),
            ),
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
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  on_behalf_of: Schema.optional(Schema.Unknown),
  subscription_data: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.Unknown),
      effective_date: Schema.optional(Schema.Unknown),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      trial_period_days: Schema.optional(Schema.Unknown),
    }),
  ),
  transfer_data: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/quotes/{quote}",
    contentType: "form-urlencoded",
  }),
);
export type PostQuotesQuoteInput = typeof PostQuotesQuoteInput.Type;

// Output Schema
export const PostQuotesQuoteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount_subtotal: Schema.Number,
  amount_total: Schema.Number,
  application: Schema.Unknown,
  application_fee_amount: Schema.NullOr(Schema.Number),
  application_fee_percent: Schema.NullOr(Schema.Number),
  automatic_tax: Schema.suspend(() => quotes_resource_automatic_taxSchema),
  collection_method: Schema.Literals(["charge_automatically", "send_invoice"]),
  computed: Schema.suspend(() => quotes_resource_computedSchema),
  created: Schema.Number,
  currency: Schema.NullOr(Schema.String),
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  default_tax_rates: Schema.optional(Schema.Array(Schema.Unknown)),
  description: Schema.NullOr(Schema.String),
  discounts: Schema.Array(Schema.Unknown),
  expires_at: Schema.Number,
  footer: Schema.NullOr(Schema.String),
  from_quote: Schema.Unknown,
  header: Schema.NullOr(Schema.String),
  id: Schema.String,
  invoice: Schema.Unknown,
  invoice_settings: Schema.suspend(() => invoice_setting_quote_settingSchema),
  line_items: Schema.optional(
    Schema.Struct({
      data: Schema.Array(Schema.suspend(() => itemSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  ),
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  number: Schema.NullOr(Schema.String),
  object: Schema.Literals(["quote"]),
  on_behalf_of: Schema.Unknown,
  status: Schema.Literals(["accepted", "canceled", "draft", "open"]),
  status_transitions: Schema.suspend(
    () => quotes_resource_status_transitionsSchema,
  ),
  subscription: Schema.Unknown,
  subscription_data: Schema.suspend(
    () => quotes_resource_subscription_data_subscription_dataSchema,
  ),
  subscription_schedule: Schema.Unknown,
  test_clock: Schema.Unknown,
  total_details: Schema.suspend(() => quotes_resource_total_detailsSchema),
  transfer_data: Schema.Unknown,
});
export type PostQuotesQuoteOutput = typeof PostQuotesQuoteOutput.Type;

// The operation
/**
 * Update a quote
 *
 * <p>A quote models prices and services for a customer.</p>
 */
export const PostQuotesQuote = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostQuotesQuoteInput,
  outputSchema: PostQuotesQuoteOutput,
}));
