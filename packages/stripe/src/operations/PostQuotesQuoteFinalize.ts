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
export const PostQuotesQuoteFinalizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quote: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    expires_at: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/quotes/{quote}/finalize",
      contentType: "form-urlencoded",
    }),
  );
export type PostQuotesQuoteFinalizeInput =
  typeof PostQuotesQuoteFinalizeInput.Type;

// Output Schema
export const PostQuotesQuoteFinalizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_subtotal: Schema.Number,
    amount_total: Schema.Number,
    application: Schema.Unknown,
    application_fee_amount: Schema.NullOr(Schema.Number),
    application_fee_percent: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.suspend(() => quotes_resource_automatic_taxSchema),
    collection_method: Schema.Literals([
      "charge_automatically",
      "send_invoice",
    ]),
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
export type PostQuotesQuoteFinalizeOutput =
  typeof PostQuotesQuoteFinalizeOutput.Type;

// The operation
/**
 * Finalize a quote
 *
 * <p>Finalizes the quote.</p>
 */
export const PostQuotesQuoteFinalize = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostQuotesQuoteFinalizeInput,
    outputSchema: PostQuotesQuoteFinalizeOutput,
  }),
);
