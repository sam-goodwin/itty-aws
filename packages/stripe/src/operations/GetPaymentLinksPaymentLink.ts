import * as Schema from "effect/Schema";
import {
  itemSchema,
  payment_links_resource_after_completionSchema,
  payment_links_resource_automatic_taxSchema,
  payment_links_resource_custom_fieldsSchema,
  payment_links_resource_custom_textSchema,
  payment_links_resource_name_collectionSchema,
  payment_links_resource_optional_itemSchema,
  payment_links_resource_phone_number_collectionSchema,
  payment_links_resource_shipping_optionSchema,
  payment_links_resource_tax_id_collectionSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentLinksPaymentLinkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_link: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/payment_links/{payment_link}",
      contentType: "form-urlencoded",
    }),
  );
export type GetPaymentLinksPaymentLinkInput =
  typeof GetPaymentLinksPaymentLinkInput.Type;

// Output Schema
export const GetPaymentLinksPaymentLinkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    after_completion: Schema.suspend(
      () => payment_links_resource_after_completionSchema,
    ),
    allow_promotion_codes: Schema.Boolean,
    application: Schema.Unknown,
    application_fee_amount: Schema.NullOr(Schema.Number),
    application_fee_percent: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.suspend(
      () => payment_links_resource_automatic_taxSchema,
    ),
    billing_address_collection: Schema.Literals(["auto", "required"]),
    consent_collection: Schema.Unknown,
    currency: Schema.String,
    custom_fields: Schema.Array(
      Schema.suspend(() => payment_links_resource_custom_fieldsSchema),
    ),
    custom_text: Schema.suspend(() => payment_links_resource_custom_textSchema),
    customer_creation: Schema.Literals(["always", "if_required"]),
    id: Schema.String,
    inactive_message: Schema.NullOr(Schema.String),
    invoice_creation: Schema.Unknown,
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
    name_collection: Schema.optional(
      Schema.suspend(() => payment_links_resource_name_collectionSchema),
    ),
    object: Schema.Literals(["payment_link"]),
    on_behalf_of: Schema.Unknown,
    optional_items: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(() => payment_links_resource_optional_itemSchema),
        ),
      ),
    ),
    payment_intent_data: Schema.Unknown,
    payment_method_collection: Schema.Literals(["always", "if_required"]),
    payment_method_types: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "blik",
          "boleto",
          "card",
          "cashapp",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "klarna",
          "konbini",
          "link",
          "mb_way",
          "mobilepay",
          "multibanco",
          "oxxo",
          "p24",
          "pay_by_bank",
          "paynow",
          "paypal",
          "payto",
          "pix",
          "promptpay",
          "satispay",
          "sepa_debit",
          "sofort",
          "swish",
          "twint",
          "upi",
          "us_bank_account",
          "wechat_pay",
          "zip",
        ]),
      ),
    ),
    phone_number_collection: Schema.suspend(
      () => payment_links_resource_phone_number_collectionSchema,
    ),
    restrictions: Schema.Unknown,
    shipping_address_collection: Schema.Unknown,
    shipping_options: Schema.Array(
      Schema.suspend(() => payment_links_resource_shipping_optionSchema),
    ),
    submit_type: Schema.Literals([
      "auto",
      "book",
      "donate",
      "pay",
      "subscribe",
    ]),
    subscription_data: Schema.Unknown,
    tax_id_collection: Schema.suspend(
      () => payment_links_resource_tax_id_collectionSchema,
    ),
    transfer_data: Schema.Unknown,
    url: Schema.String,
  });
export type GetPaymentLinksPaymentLinkOutput =
  typeof GetPaymentLinksPaymentLinkOutput.Type;

// The operation
/**
 * Retrieve payment link
 *
 * <p>Retrieve a payment link.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetPaymentLinksPaymentLink = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetPaymentLinksPaymentLinkInput,
    outputSchema: GetPaymentLinksPaymentLinkOutput,
  }),
);
