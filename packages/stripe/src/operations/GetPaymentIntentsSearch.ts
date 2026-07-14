import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetPaymentIntentsSearchInput {
  expand?: string;
  limit?: number;
  page?: string;
  query: string;
}
export const GetPaymentIntentsSearchInput =
  /*@__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.String),
    query: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/payment_intents/search",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetPaymentIntentsSearchInput>;

// Output Schema
export interface GetPaymentIntentsSearchOutput {
  data: {
    amount: number;
    amount_capturable: number;
    amount_details?: {
      discount_amount?: number;
      error?: {
        code:
          | "amount_details_amount_mismatch"
          | "amount_details_tax_shipping_discount_greater_than_amount"
          | null;
        message: string | null;
      };
      line_items?: {
        data: {
          discount_amount: number | null;
          id: string;
          object: "payment_intent_amount_details_line_item";
          payment_method_options: {
            card?: { commodity_code: string | null };
            card_present?: { commodity_code: string | null };
            klarna?: {
              image_url: string | null;
              product_url: string | null;
              reference: string | null;
              subscription_reference: string | null;
            };
            paypal?: {
              category?: "digital_goods" | "donation" | "physical_goods";
              description?: string;
              sold_by?: string;
            };
          } | null;
          product_code: string | null;
          product_name: string;
          quantity: number;
          tax: { total_tax_amount: number } | null;
          unit_cost: number;
          unit_of_measure: string | null;
        }[];
        has_more: boolean;
        object: "list";
        url: string;
      };
      shipping?: {
        amount: number | null;
        from_postal_code: string | null;
        to_postal_code: string | null;
      };
      tax?: { total_tax_amount: number | null };
      tip?: { amount?: number };
    };
    amount_received: number;
    application:
      | string
      | { id: string; name: string | null; object: "application" }
      | null;
    application_fee_amount: number | null;
    automatic_payment_methods: {
      allow_redirects?: "always" | "never";
      enabled: boolean;
    } | null;
    canceled_at: number | null;
    cancellation_reason:
      | "abandoned"
      | "automatic"
      | "duplicate"
      | "expired"
      | "failed_invoice"
      | "fraudulent"
      | "requested_by_customer"
      | "void_invoice"
      | null;
    capture_method: "automatic" | "automatic_async" | "manual";
    client_secret: Redacted.Redacted<string> | null;
    confirmation_method: "automatic" | "manual";
    created: number;
    currency: string;
    customer: unknown;
    customer_account: string | null;
    description: string | null;
    excluded_payment_method_types:
      | (
          | "acss_debit"
          | "affirm"
          | "afterpay_clearpay"
          | "alipay"
          | "alma"
          | "amazon_pay"
          | "au_becs_debit"
          | "bacs_debit"
          | "bancontact"
          | "billie"
          | "bizum"
          | "blik"
          | "boleto"
          | "card"
          | "cashapp"
          | "crypto"
          | "customer_balance"
          | "eps"
          | "fpx"
          | "giropay"
          | "grabpay"
          | "ideal"
          | "kakao_pay"
          | "klarna"
          | "konbini"
          | "kr_card"
          | "mb_way"
          | "mobilepay"
          | "multibanco"
          | "naver_pay"
          | "nz_bank_account"
          | "oxxo"
          | "p24"
          | "pay_by_bank"
          | "payco"
          | "paynow"
          | "paypal"
          | "payto"
          | "pix"
          | "promptpay"
          | "revolut_pay"
          | "samsung_pay"
          | "satispay"
          | "scalapay"
          | "sepa_debit"
          | "sofort"
          | "sunbit"
          | "swish"
          | "twint"
          | "upi"
          | "us_bank_account"
          | "wechat_pay"
          | "zip"
        )[]
      | null;
    hooks?: { inputs?: { tax?: { calculation: string } } };
    id: string;
    last_payment_error: unknown;
    latest_charge: unknown;
    livemode: boolean;
    managed_payments: { enabled: boolean } | null;
    metadata: Record<string, string>;
    next_action: unknown;
    object: "payment_intent";
    on_behalf_of: unknown;
    payment_details?: {
      customer_reference: string | null;
      order_reference: string | null;
    };
    payment_method: unknown;
    payment_method_configuration_details: {
      id: string;
      parent: string | null;
    } | null;
    payment_method_options: unknown;
    payment_method_types: string[];
    presentment_details?: {
      presentment_amount: number;
      presentment_currency: string;
    };
    processing: {
      card?: {
        customer_notification?: {
          approval_requested: boolean | null;
          completes_at: number | null;
        };
      };
      type: "card";
    } | null;
    receipt_email: string | null;
    review:
      | string
      | {
          billing_zip: string | null;
          charge: unknown;
          closed_reason:
            | "acknowledged"
            | "approved"
            | "canceled"
            | "disputed"
            | "payment_never_settled"
            | "redacted"
            | "refunded"
            | "refunded_as_fraud"
            | null;
          created: number;
          id: string;
          ip_address: string | null;
          ip_address_location: {
            city: string | null;
            country: string | null;
            latitude: number | null;
            longitude: number | null;
            region: string | null;
          } | null;
          livemode: boolean;
          object: "review";
          open: boolean;
          opened_reason: "manual" | "rule";
          payment_intent?: string | unknown;
          reason: string;
          session: {
            browser: string | null;
            device: string | null;
            platform: string | null;
            version: string | null;
          } | null;
        }
      | null;
    setup_future_usage: "off_session" | "on_session" | null;
    shipping: {
      address?: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      };
      carrier?: string | null;
      name?: string;
      phone?: string | null;
      tracking_number?: string | null;
    } | null;
    source:
      | string
      | unknown
      | {
          currency?: string | null;
          deleted: true;
          id: string;
          object: "bank_account";
        }
      | { currency?: string | null; deleted: true; id: string; object: "card" }
      | null;
    statement_descriptor: string | null;
    statement_descriptor_suffix: string | null;
    status:
      | "canceled"
      | "processing"
      | "requires_action"
      | "requires_capture"
      | "requires_confirmation"
      | "requires_payment_method"
      | "succeeded";
    transfer_data?: {
      amount?: number;
      description?: string;
      destination: unknown;
      metadata?: Record<string, string>;
      payment_data?: {
        description?: string;
        metadata?: Record<string, string>;
      };
    } | null;
    transfer_group: string | null;
  }[];
  has_more: boolean;
  next_page: string | null;
  object: "search_result";
  total_count?: number;
  url: string;
}
export const GetPaymentIntentsSearchOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        amount_capturable: Schema.Number,
        amount_details: Schema.optional(
          Schema.Struct({
            discount_amount: Schema.optional(Schema.Number),
            error: Schema.optional(
              Schema.Struct({
                code: Schema.NullOr(
                  Schema.Literals([
                    "amount_details_amount_mismatch",
                    "amount_details_tax_shipping_discount_greater_than_amount",
                  ]),
                ),
                message: Schema.NullOr(Schema.String),
              }),
            ),
            line_items: Schema.optional(
              Schema.Struct({
                data: Schema.Array(
                  Schema.Struct({
                    discount_amount: Schema.NullOr(Schema.Number),
                    id: Schema.String,
                    object: Schema.Literals([
                      "payment_intent_amount_details_line_item",
                    ]),
                    payment_method_options: Schema.NullOr(
                      Schema.Struct({
                        card: Schema.optional(
                          Schema.Struct({
                            commodity_code: Schema.NullOr(Schema.String),
                          }),
                        ),
                        card_present: Schema.optional(
                          Schema.Struct({
                            commodity_code: Schema.NullOr(Schema.String),
                          }),
                        ),
                        klarna: Schema.optional(
                          Schema.Struct({
                            image_url: Schema.NullOr(Schema.String),
                            product_url: Schema.NullOr(Schema.String),
                            reference: Schema.NullOr(Schema.String),
                            subscription_reference: Schema.NullOr(
                              Schema.String,
                            ),
                          }),
                        ),
                        paypal: Schema.optional(
                          Schema.Struct({
                            category: Schema.optional(
                              Schema.Literals([
                                "digital_goods",
                                "donation",
                                "physical_goods",
                              ]),
                            ),
                            description: Schema.optional(Schema.String),
                            sold_by: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                    product_code: Schema.NullOr(Schema.String),
                    product_name: Schema.String,
                    quantity: Schema.Number,
                    tax: Schema.NullOr(
                      Schema.Struct({
                        total_tax_amount: Schema.Number,
                      }),
                    ),
                    unit_cost: Schema.Number,
                    unit_of_measure: Schema.NullOr(Schema.String),
                  }),
                ),
                has_more: Schema.Boolean,
                object: Schema.Literals(["list"]),
                url: Schema.String,
              }),
            ),
            shipping: Schema.optional(
              Schema.Struct({
                amount: Schema.NullOr(Schema.Number),
                from_postal_code: Schema.NullOr(Schema.String),
                to_postal_code: Schema.NullOr(Schema.String),
              }),
            ),
            tax: Schema.optional(
              Schema.Struct({
                total_tax_amount: Schema.NullOr(Schema.Number),
              }),
            ),
            tip: Schema.optional(
              Schema.Struct({
                amount: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        amount_received: Schema.Number,
        application: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              id: Schema.String,
              name: Schema.NullOr(Schema.String),
              object: Schema.Literals(["application"]),
            }),
          ]),
        ),
        application_fee_amount: Schema.NullOr(Schema.Number),
        automatic_payment_methods: Schema.NullOr(
          Schema.Struct({
            allow_redirects: Schema.optional(
              Schema.Literals(["always", "never"]),
            ),
            enabled: Schema.Boolean,
          }),
        ),
        canceled_at: Schema.NullOr(Schema.Number),
        cancellation_reason: Schema.NullOr(
          Schema.Literals([
            "abandoned",
            "automatic",
            "duplicate",
            "expired",
            "failed_invoice",
            "fraudulent",
            "requested_by_customer",
            "void_invoice",
          ]),
        ),
        capture_method: Schema.Literals([
          "automatic",
          "automatic_async",
          "manual",
        ]),
        client_secret: SensitiveOutputNullableString,
        confirmation_method: Schema.Literals(["automatic", "manual"]),
        created: Schema.Number,
        currency: Schema.String,
        customer: Schema.Unknown,
        customer_account: Schema.NullOr(Schema.String),
        description: Schema.NullOr(Schema.String),
        excluded_payment_method_types: Schema.NullOr(
          Schema.Array(
            Schema.Literals([
              "acss_debit",
              "affirm",
              "afterpay_clearpay",
              "alipay",
              "alma",
              "amazon_pay",
              "au_becs_debit",
              "bacs_debit",
              "bancontact",
              "billie",
              "bizum",
              "blik",
              "boleto",
              "card",
              "cashapp",
              "crypto",
              "customer_balance",
              "eps",
              "fpx",
              "giropay",
              "grabpay",
              "ideal",
              "kakao_pay",
              "klarna",
              "konbini",
              "kr_card",
              "mb_way",
              "mobilepay",
              "multibanco",
              "naver_pay",
              "nz_bank_account",
              "oxxo",
              "p24",
              "pay_by_bank",
              "payco",
              "paynow",
              "paypal",
              "payto",
              "pix",
              "promptpay",
              "revolut_pay",
              "samsung_pay",
              "satispay",
              "scalapay",
              "sepa_debit",
              "sofort",
              "sunbit",
              "swish",
              "twint",
              "upi",
              "us_bank_account",
              "wechat_pay",
              "zip",
            ]),
          ),
        ),
        hooks: Schema.optional(
          Schema.Struct({
            inputs: Schema.optional(
              Schema.Struct({
                tax: Schema.optional(
                  Schema.Struct({
                    calculation: Schema.String,
                  }),
                ),
              }),
            ),
          }),
        ),
        id: Schema.String,
        last_payment_error: Schema.Unknown,
        latest_charge: Schema.Unknown,
        livemode: Schema.Boolean,
        managed_payments: Schema.NullOr(
          Schema.Struct({
            enabled: Schema.Boolean,
          }),
        ),
        metadata: Schema.Record(Schema.String, Schema.String),
        next_action: Schema.Unknown,
        object: Schema.Literals(["payment_intent"]),
        on_behalf_of: Schema.Unknown,
        payment_details: Schema.optional(
          Schema.Struct({
            customer_reference: Schema.NullOr(Schema.String),
            order_reference: Schema.NullOr(Schema.String),
          }),
        ),
        payment_method: Schema.Unknown,
        payment_method_configuration_details: Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            parent: Schema.NullOr(Schema.String),
          }),
        ),
        payment_method_options: Schema.Unknown,
        payment_method_types: Schema.Array(Schema.String),
        presentment_details: Schema.optional(
          Schema.Struct({
            presentment_amount: Schema.Number,
            presentment_currency: Schema.String,
          }),
        ),
        processing: Schema.NullOr(
          Schema.Struct({
            card: Schema.optional(
              Schema.Struct({
                customer_notification: Schema.optional(
                  Schema.Struct({
                    approval_requested: Schema.NullOr(Schema.Boolean),
                    completes_at: Schema.NullOr(Schema.Number),
                  }),
                ),
              }),
            ),
            type: Schema.Literals(["card"]),
          }),
        ),
        receipt_email: Schema.NullOr(Schema.String),
        review: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              billing_zip: Schema.NullOr(Schema.String),
              charge: Schema.Unknown,
              closed_reason: Schema.NullOr(
                Schema.Literals([
                  "acknowledged",
                  "approved",
                  "canceled",
                  "disputed",
                  "payment_never_settled",
                  "redacted",
                  "refunded",
                  "refunded_as_fraud",
                ]),
              ),
              created: Schema.Number,
              id: Schema.String,
              ip_address: Schema.NullOr(Schema.String),
              ip_address_location: Schema.NullOr(
                Schema.Struct({
                  city: Schema.NullOr(Schema.String),
                  country: Schema.NullOr(Schema.String),
                  latitude: Schema.NullOr(Schema.Number),
                  longitude: Schema.NullOr(Schema.Number),
                  region: Schema.NullOr(Schema.String),
                }),
              ),
              livemode: Schema.Boolean,
              object: Schema.Literals(["review"]),
              open: Schema.Boolean,
              opened_reason: Schema.Literals(["manual", "rule"]),
              payment_intent: Schema.optional(
                Schema.Union([Schema.String, Schema.Unknown]),
              ),
              reason: Schema.String,
              session: Schema.NullOr(
                Schema.Struct({
                  browser: Schema.NullOr(Schema.String),
                  device: Schema.NullOr(Schema.String),
                  platform: Schema.NullOr(Schema.String),
                  version: Schema.NullOr(Schema.String),
                }),
              ),
            }),
          ]),
        ),
        setup_future_usage: Schema.NullOr(
          Schema.Literals(["off_session", "on_session"]),
        ),
        shipping: Schema.NullOr(
          Schema.Struct({
            address: Schema.optional(
              Schema.Struct({
                city: Schema.NullOr(Schema.String),
                country: Schema.NullOr(Schema.String),
                line1: Schema.NullOr(Schema.String),
                line2: Schema.NullOr(Schema.String),
                postal_code: Schema.NullOr(Schema.String),
                state: Schema.NullOr(Schema.String),
              }),
            ),
            carrier: Schema.optional(Schema.NullOr(Schema.String)),
            name: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.NullOr(Schema.String)),
            tracking_number: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        source: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Unknown,
            Schema.Union([
              Schema.Struct({
                currency: Schema.optional(Schema.NullOr(Schema.String)),
                deleted: Schema.Literals([true]),
                id: Schema.String,
                object: Schema.Literals(["bank_account"]),
              }),
              Schema.Struct({
                currency: Schema.optional(Schema.NullOr(Schema.String)),
                deleted: Schema.Literals([true]),
                id: Schema.String,
                object: Schema.Literals(["card"]),
              }),
            ]),
          ]),
        ),
        statement_descriptor: Schema.NullOr(Schema.String),
        statement_descriptor_suffix: Schema.NullOr(Schema.String),
        status: Schema.Literals([
          "canceled",
          "processing",
          "requires_action",
          "requires_capture",
          "requires_confirmation",
          "requires_payment_method",
          "succeeded",
        ]),
        transfer_data: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              amount: Schema.optional(Schema.Number),
              description: Schema.optional(Schema.String),
              destination: Schema.Unknown,
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              payment_data: Schema.optional(
                Schema.Struct({
                  description: Schema.optional(Schema.String),
                  metadata: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                }),
              ),
            }),
          ),
        ),
        transfer_group: Schema.NullOr(Schema.String),
      }),
    ),
    has_more: Schema.Boolean,
    next_page: Schema.NullOr(Schema.String),
    object: Schema.Literals(["search_result"]),
    total_count: Schema.optional(Schema.Number),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetPaymentIntentsSearchOutput>;

// The operation
/**
 * Search PaymentIntents
 *
 * <p>Search for PaymentIntents you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
 * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
 * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
 * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param page - A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
 * @param query - The search query string. See [search query language](https://docs.stripe.com/search#search-query-language) and the list of supported [query fields for payment intents](https://docs.stripe.com/search#query-fields-for-paymentintents).
 */
export const GetPaymentIntentsSearch =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: GetPaymentIntentsSearchInput,
    outputSchema: GetPaymentIntentsSearchOutput,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
