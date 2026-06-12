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
export const PostPaymentLinksPaymentLinkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_link: Schema.String.pipe(T.PathParam()),
    active: Schema.optional(Schema.Boolean),
    after_completion: Schema.optional(
      Schema.Struct({
        hosted_confirmation: Schema.optional(
          Schema.Struct({
            custom_message: Schema.optional(Schema.String),
          }),
        ),
        redirect: Schema.optional(
          Schema.Struct({
            url: Schema.String,
          }),
        ),
        type: Schema.Literals(["hosted_confirmation", "redirect"]),
      }),
    ),
    allow_promotion_codes: Schema.optional(Schema.Boolean),
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
    billing_address_collection: Schema.optional(
      Schema.Literals(["auto", "required"]),
    ),
    custom_fields: Schema.optional(Schema.Unknown),
    custom_text: Schema.optional(
      Schema.Struct({
        after_submit: Schema.optional(Schema.Unknown),
        shipping_address: Schema.optional(Schema.Unknown),
        submit: Schema.optional(Schema.Unknown),
        terms_of_service_acceptance: Schema.optional(Schema.Unknown),
      }),
    ),
    customer_creation: Schema.optional(
      Schema.Literals(["always", "if_required"]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    inactive_message: Schema.optional(Schema.Unknown),
    invoice_creation: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        invoice_data: Schema.optional(
          Schema.Struct({
            account_tax_ids: Schema.optional(Schema.Unknown),
            custom_fields: Schema.optional(Schema.Unknown),
            description: Schema.optional(Schema.String),
            footer: Schema.optional(Schema.String),
            issuer: Schema.optional(
              Schema.Struct({
                account: Schema.optional(Schema.String),
                type: Schema.Literals(["account", "self"]),
              }),
            ),
            metadata: Schema.optional(Schema.Unknown),
            rendering_options: Schema.optional(Schema.Unknown),
          }),
        ),
      }),
    ),
    line_items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          adjustable_quantity: Schema.optional(
            Schema.Struct({
              enabled: Schema.Boolean,
              maximum: Schema.optional(Schema.Number),
              minimum: Schema.optional(Schema.Number),
            }),
          ),
          id: Schema.String,
          quantity: Schema.optional(Schema.Number),
        }),
      ),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name_collection: Schema.optional(Schema.Unknown),
    optional_items: Schema.optional(Schema.Unknown),
    payment_intent_data: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.Unknown),
        metadata: Schema.optional(Schema.Unknown),
        statement_descriptor: Schema.optional(Schema.Unknown),
        statement_descriptor_suffix: Schema.optional(Schema.Unknown),
        transfer_group: Schema.optional(Schema.Unknown),
      }),
    ),
    payment_method_collection: Schema.optional(
      Schema.Literals(["always", "if_required"]),
    ),
    payment_method_types: Schema.optional(Schema.Unknown),
    phone_number_collection: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    restrictions: Schema.optional(Schema.Unknown),
    shipping_address_collection: Schema.optional(Schema.Unknown),
    submit_type: Schema.optional(
      Schema.Literals(["auto", "book", "donate", "pay", "subscribe"]),
    ),
    subscription_data: Schema.optional(
      Schema.Struct({
        invoice_settings: Schema.optional(
          Schema.Struct({
            issuer: Schema.optional(
              Schema.Struct({
                account: Schema.optional(Schema.String),
                type: Schema.Literals(["account", "self"]),
              }),
            ),
          }),
        ),
        metadata: Schema.optional(Schema.Unknown),
        trial_period_days: Schema.optional(Schema.Unknown),
        trial_settings: Schema.optional(Schema.Unknown),
      }),
    ),
    tax_id_collection: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        required: Schema.optional(Schema.Literals(["if_supported", "never"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/payment_links/{payment_link}",
      contentType: "form-urlencoded",
    }),
  );
export type PostPaymentLinksPaymentLinkInput =
  typeof PostPaymentLinksPaymentLinkInput.Type;

// Output Schema
export const PostPaymentLinksPaymentLinkOutput =
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
export type PostPaymentLinksPaymentLinkOutput =
  typeof PostPaymentLinksPaymentLinkOutput.Type;

// The operation
/**
 * Update a payment link
 *
 * <p>Updates a payment link.</p>
 */
export const PostPaymentLinksPaymentLink = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostPaymentLinksPaymentLinkInput,
    outputSchema: PostPaymentLinksPaymentLinkOutput,
  }),
);
