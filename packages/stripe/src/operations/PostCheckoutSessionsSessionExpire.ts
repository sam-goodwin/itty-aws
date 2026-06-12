import * as Schema from "effect/Schema";
import {
  itemSchema,
  payment_flows_payment_intent_presentment_detailsSchema,
  payment_pages_checkout_session_automatic_taxSchema,
  payment_pages_checkout_session_branding_settingsSchema,
  payment_pages_checkout_session_custom_fieldsSchema,
  payment_pages_checkout_session_custom_textSchema,
  payment_pages_checkout_session_discountSchema,
  payment_pages_checkout_session_name_collectionSchema,
  payment_pages_checkout_session_optional_itemSchema,
  payment_pages_checkout_session_phone_number_collectionSchema,
  payment_pages_checkout_session_shipping_optionSchema,
  payment_pages_checkout_session_tax_id_collectionSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";

// Input Schema
export const PostCheckoutSessionsSessionExpireInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/checkout/sessions/{session}/expire",
      contentType: "form-urlencoded",
    }),
  );
export type PostCheckoutSessionsSessionExpireInput =
  typeof PostCheckoutSessionsSessionExpireInput.Type;

// Output Schema
export const PostCheckoutSessionsSessionExpireOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adaptive_pricing: Schema.Unknown,
    after_expiration: Schema.Unknown,
    allow_promotion_codes: Schema.NullOr(Schema.Boolean),
    amount_subtotal: Schema.NullOr(Schema.Number),
    amount_total: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.suspend(
      () => payment_pages_checkout_session_automatic_taxSchema,
    ),
    billing_address_collection: Schema.NullOr(
      Schema.Literals(["auto", "required"]),
    ),
    branding_settings: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_branding_settingsSchema,
      ),
    ),
    cancel_url: Schema.NullOr(Schema.String),
    client_reference_id: Schema.NullOr(Schema.String),
    client_secret: SensitiveOutputNullableString,
    collected_information: Schema.Unknown,
    consent: Schema.Unknown,
    consent_collection: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.NullOr(Schema.String),
    currency_conversion: Schema.Unknown,
    custom_fields: Schema.Array(
      Schema.suspend(() => payment_pages_checkout_session_custom_fieldsSchema),
    ),
    custom_text: Schema.suspend(
      () => payment_pages_checkout_session_custom_textSchema,
    ),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_creation: Schema.NullOr(
      Schema.Literals(["always", "if_required"]),
    ),
    customer_details: Schema.Unknown,
    customer_email: Schema.NullOr(Schema.String),
    discounts: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => payment_pages_checkout_session_discountSchema),
      ),
    ),
    excluded_payment_method_types: Schema.optional(Schema.Array(Schema.String)),
    expires_at: Schema.Number,
    id: Schema.String,
    integration_identifier: Schema.NullOr(Schema.String),
    invoice: Schema.Unknown,
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
    locale: Schema.NullOr(
      Schema.Literals([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-GB",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ]),
    ),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    mode: Schema.Literals(["payment", "setup", "subscription"]),
    name_collection: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_name_collectionSchema,
      ),
    ),
    object: Schema.Literals(["checkout.session"]),
    optional_items: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(
            () => payment_pages_checkout_session_optional_itemSchema,
          ),
        ),
      ),
    ),
    origin_context: Schema.NullOr(Schema.Literals(["mobile_app", "web"])),
    payment_intent: Schema.Unknown,
    payment_link: Schema.Unknown,
    payment_method_collection: Schema.NullOr(
      Schema.Literals(["always", "if_required"]),
    ),
    payment_method_configuration_details: Schema.Unknown,
    payment_method_options: Schema.Unknown,
    payment_method_types: Schema.Array(Schema.String),
    payment_status: Schema.Literals(["no_payment_required", "paid", "unpaid"]),
    permissions: Schema.Unknown,
    phone_number_collection: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_phone_number_collectionSchema,
      ),
    ),
    presentment_details: Schema.optional(
      Schema.suspend(
        () => payment_flows_payment_intent_presentment_detailsSchema,
      ),
    ),
    recovered_from: Schema.NullOr(Schema.String),
    redirect_on_completion: Schema.optional(
      Schema.Literals(["always", "if_required", "never"]),
    ),
    return_url: Schema.optional(Schema.String),
    saved_payment_method_options: Schema.Unknown,
    setup_intent: Schema.Unknown,
    shipping_address_collection: Schema.Unknown,
    shipping_cost: Schema.Unknown,
    shipping_options: Schema.Array(
      Schema.suspend(
        () => payment_pages_checkout_session_shipping_optionSchema,
      ),
    ),
    status: Schema.NullOr(Schema.Literals(["complete", "expired", "open"])),
    submit_type: Schema.NullOr(
      Schema.Literals(["auto", "book", "donate", "pay", "subscribe"]),
    ),
    subscription: Schema.Unknown,
    success_url: Schema.NullOr(Schema.String),
    tax_id_collection: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_tax_id_collectionSchema,
      ),
    ),
    total_details: Schema.Unknown,
    ui_mode: Schema.NullOr(
      Schema.Literals(["elements", "embedded_page", "form", "hosted_page"]),
    ),
    url: Schema.NullOr(Schema.String),
    wallet_options: Schema.Unknown,
  });
export type PostCheckoutSessionsSessionExpireOutput =
  typeof PostCheckoutSessionsSessionExpireOutput.Type;

// The operation
/**
 * Expire a Checkout Session
 *
 * <p>A Checkout Session can be expired when it is in one of these statuses: <code>open</code> </p>
 * <p>After it expires, a customer can’t complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.</p>
 */
export const PostCheckoutSessionsSessionExpire =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostCheckoutSessionsSessionExpireInput,
    outputSchema: PostCheckoutSessionsSessionExpireOutput,
  }));
