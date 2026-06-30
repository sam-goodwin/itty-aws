import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostBillingPortalSessionsInput {
  configuration?: string;
  customer?: string;
  customer_account?: string;
  expand?: string[];
  flow_data?: {
    after_completion?: {
      hosted_confirmation?: { custom_message?: string };
      redirect?: { return_url: string };
      type: "hosted_confirmation" | "portal_homepage" | "redirect";
    };
    subscription_cancel?: {
      retention?: { coupon_offer: { coupon: string }; type: "coupon_offer" };
      subscription: string;
    };
    subscription_update?: { subscription: string };
    subscription_update_confirm?: {
      discounts?: { coupon?: string; promotion_code?: string }[];
      items: { id: string; price?: string; quantity?: number }[];
      subscription: string;
    };
    type:
      | "payment_method_update"
      | "subscription_cancel"
      | "subscription_update"
      | "subscription_update_confirm";
  };
  locale?:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-AU"
    | "en-CA"
    | "en-GB"
    | "en-IE"
    | "en-IN"
    | "en-NZ"
    | "en-SG"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW";
  on_behalf_of?: string;
  return_url?: string;
}
export const PostBillingPortalSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    flow_data: Schema.optional(
      Schema.Struct({
        after_completion: Schema.optional(
          Schema.Struct({
            hosted_confirmation: Schema.optional(
              Schema.Struct({
                custom_message: Schema.optional(Schema.String),
              }),
            ),
            redirect: Schema.optional(
              Schema.Struct({
                return_url: Schema.String,
              }),
            ),
            type: Schema.Literals([
              "hosted_confirmation",
              "portal_homepage",
              "redirect",
            ]),
          }),
        ),
        subscription_cancel: Schema.optional(
          Schema.Struct({
            retention: Schema.optional(
              Schema.Struct({
                coupon_offer: Schema.Struct({
                  coupon: Schema.String,
                }),
                type: Schema.Literals(["coupon_offer"]),
              }),
            ),
            subscription: Schema.String,
          }),
        ),
        subscription_update: Schema.optional(
          Schema.Struct({
            subscription: Schema.String,
          }),
        ),
        subscription_update_confirm: Schema.optional(
          Schema.Struct({
            discounts: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  coupon: Schema.optional(Schema.String),
                  promotion_code: Schema.optional(Schema.String),
                }),
              ),
            ),
            items: Schema.Array(
              Schema.Struct({
                id: Schema.String,
                price: Schema.optional(Schema.String),
                quantity: Schema.optional(Schema.Number),
              }),
            ),
            subscription: Schema.String,
          }),
        ),
        type: Schema.Literals([
          "payment_method_update",
          "subscription_cancel",
          "subscription_update",
          "subscription_update_confirm",
        ]),
      }),
    ),
    locale: Schema.optional(
      Schema.Literals([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-AU",
        "en-CA",
        "en-GB",
        "en-IE",
        "en-IN",
        "en-NZ",
        "en-SG",
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
    on_behalf_of: Schema.optional(Schema.String),
    return_url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing_portal/sessions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostBillingPortalSessionsInput>;

// Output Schema
export interface PostBillingPortalSessionsOutput {
  configuration:
    | string
    | {
        active: boolean;
        application:
          | string
          | { id: string; name: string | null; object: "application" }
          | {
              deleted: true;
              id: string;
              name: string | null;
              object: "application";
            }
          | null;
        business_profile: {
          headline: string | null;
          privacy_policy_url: string | null;
          terms_of_service_url: string | null;
        };
        created: number;
        default_return_url: string | null;
        features: {
          customer_update: {
            allowed_updates: (
              | "address"
              | "email"
              | "name"
              | "phone"
              | "shipping"
              | "tax_id"
            )[];
            enabled: boolean;
          };
          invoice_history: { enabled: boolean };
          payment_method_update: {
            enabled: boolean;
            payment_method_configuration: string | null;
          };
          subscription_cancel: {
            cancellation_reason: {
              enabled: boolean;
              options: (
                | "customer_service"
                | "low_quality"
                | "missing_features"
                | "other"
                | "switched_service"
                | "too_complex"
                | "too_expensive"
                | "unused"
              )[];
            };
            enabled: boolean;
            mode: "at_period_end" | "immediately";
            proration_behavior: "always_invoice" | "create_prorations" | "none";
          };
          subscription_update: {
            billing_cycle_anchor: "now" | "unchanged" | null;
            default_allowed_updates: (
              | "price"
              | "promotion_code"
              | "quantity"
            )[];
            enabled: boolean;
            products?:
              | {
                  adjustable_quantity: {
                    enabled: boolean;
                    maximum: number | null;
                    minimum: number;
                  };
                  prices: string[];
                  product: string;
                }[]
              | null;
            proration_behavior: "always_invoice" | "create_prorations" | "none";
            schedule_at_period_end: {
              conditions: {
                type: "decreasing_item_amount" | "shortening_interval";
              }[];
            };
            trial_update_behavior: "continue_trial" | "end_trial";
          };
        };
        id: string;
        is_default: boolean;
        livemode: boolean;
        login_page: { enabled: boolean; url: string | null };
        metadata: Record<string, string> | null;
        name: string | null;
        object: "billing_portal.configuration";
        updated: number;
      };
  created: number;
  customer: string;
  customer_account: string | null;
  flow: {
    after_completion: {
      hosted_confirmation: { custom_message: string | null } | null;
      redirect: { return_url: string } | null;
      type: "hosted_confirmation" | "portal_homepage" | "redirect";
    };
    subscription_cancel: {
      retention: {
        coupon_offer: { coupon: string } | null;
        type: "coupon_offer";
      } | null;
      subscription: string;
    } | null;
    subscription_update: { subscription: string } | null;
    subscription_update_confirm: {
      discounts:
        | { coupon: string | null; promotion_code: string | null }[]
        | null;
      items: { id: string | null; price: string | null; quantity?: number }[];
      subscription: string;
    } | null;
    type:
      | "payment_method_update"
      | "subscription_cancel"
      | "subscription_update"
      | "subscription_update_confirm";
  } | null;
  id: string;
  livemode: boolean;
  locale:
    | "auto"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "en-AU"
    | "en-CA"
    | "en-GB"
    | "en-IE"
    | "en-IN"
    | "en-NZ"
    | "en-SG"
    | "es"
    | "es-419"
    | "et"
    | "fi"
    | "fil"
    | "fr"
    | "fr-CA"
    | "hr"
    | "hu"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lt"
    | "lv"
    | "ms"
    | "mt"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "pt-BR"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "th"
    | "tr"
    | "vi"
    | "zh"
    | "zh-HK"
    | "zh-TW"
    | null;
  object: "billing_portal.session";
  on_behalf_of: string | null;
  return_url: string | null;
  url: string;
}
export const PostBillingPortalSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.Union([
      Schema.String,
      Schema.Struct({
        active: Schema.Boolean,
        application: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              id: Schema.String,
              name: Schema.NullOr(Schema.String),
              object: Schema.Literals(["application"]),
            }),
            Schema.Struct({
              deleted: Schema.Literals([true]),
              id: Schema.String,
              name: Schema.NullOr(Schema.String),
              object: Schema.Literals(["application"]),
            }),
          ]),
        ),
        business_profile: Schema.Struct({
          headline: Schema.NullOr(Schema.String),
          privacy_policy_url: Schema.NullOr(Schema.String),
          terms_of_service_url: Schema.NullOr(Schema.String),
        }),
        created: Schema.Number,
        default_return_url: Schema.NullOr(Schema.String),
        features: Schema.Struct({
          customer_update: Schema.Struct({
            allowed_updates: Schema.Array(
              Schema.Literals([
                "address",
                "email",
                "name",
                "phone",
                "shipping",
                "tax_id",
              ]),
            ),
            enabled: Schema.Boolean,
          }),
          invoice_history: Schema.Struct({
            enabled: Schema.Boolean,
          }),
          payment_method_update: Schema.Struct({
            enabled: Schema.Boolean,
            payment_method_configuration: Schema.NullOr(Schema.String),
          }),
          subscription_cancel: Schema.Struct({
            cancellation_reason: Schema.Struct({
              enabled: Schema.Boolean,
              options: Schema.Array(
                Schema.Literals([
                  "customer_service",
                  "low_quality",
                  "missing_features",
                  "other",
                  "switched_service",
                  "too_complex",
                  "too_expensive",
                  "unused",
                ]),
              ),
            }),
            enabled: Schema.Boolean,
            mode: Schema.Literals(["at_period_end", "immediately"]),
            proration_behavior: Schema.Literals([
              "always_invoice",
              "create_prorations",
              "none",
            ]),
          }),
          subscription_update: Schema.Struct({
            billing_cycle_anchor: Schema.NullOr(
              Schema.Literals(["now", "unchanged"]),
            ),
            default_allowed_updates: Schema.Array(
              Schema.Literals(["price", "promotion_code", "quantity"]),
            ),
            enabled: Schema.Boolean,
            products: Schema.optional(
              Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    adjustable_quantity: Schema.Struct({
                      enabled: Schema.Boolean,
                      maximum: Schema.NullOr(Schema.Number),
                      minimum: Schema.Number,
                    }),
                    prices: Schema.Array(Schema.String),
                    product: Schema.String,
                  }),
                ),
              ),
            ),
            proration_behavior: Schema.Literals([
              "always_invoice",
              "create_prorations",
              "none",
            ]),
            schedule_at_period_end: Schema.Struct({
              conditions: Schema.Array(
                Schema.Struct({
                  type: Schema.Literals([
                    "decreasing_item_amount",
                    "shortening_interval",
                  ]),
                }),
              ),
            }),
            trial_update_behavior: Schema.Literals([
              "continue_trial",
              "end_trial",
            ]),
          }),
        }),
        id: Schema.String,
        is_default: Schema.Boolean,
        livemode: Schema.Boolean,
        login_page: Schema.Struct({
          enabled: Schema.Boolean,
          url: Schema.NullOr(Schema.String),
        }),
        metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        name: Schema.NullOr(Schema.String),
        object: Schema.Literals(["billing_portal.configuration"]),
        updated: Schema.Number,
      }),
    ]),
    created: Schema.Number,
    customer: Schema.String,
    customer_account: Schema.NullOr(Schema.String),
    flow: Schema.NullOr(
      Schema.Struct({
        after_completion: Schema.Struct({
          hosted_confirmation: Schema.NullOr(
            Schema.Struct({
              custom_message: Schema.NullOr(Schema.String),
            }),
          ),
          redirect: Schema.NullOr(
            Schema.Struct({
              return_url: Schema.String,
            }),
          ),
          type: Schema.Literals([
            "hosted_confirmation",
            "portal_homepage",
            "redirect",
          ]),
        }),
        subscription_cancel: Schema.NullOr(
          Schema.Struct({
            retention: Schema.NullOr(
              Schema.Struct({
                coupon_offer: Schema.NullOr(
                  Schema.Struct({
                    coupon: Schema.String,
                  }),
                ),
                type: Schema.Literals(["coupon_offer"]),
              }),
            ),
            subscription: Schema.String,
          }),
        ),
        subscription_update: Schema.NullOr(
          Schema.Struct({
            subscription: Schema.String,
          }),
        ),
        subscription_update_confirm: Schema.NullOr(
          Schema.Struct({
            discounts: Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  coupon: Schema.NullOr(Schema.String),
                  promotion_code: Schema.NullOr(Schema.String),
                }),
              ),
            ),
            items: Schema.Array(
              Schema.Struct({
                id: Schema.NullOr(Schema.String),
                price: Schema.NullOr(Schema.String),
                quantity: Schema.optional(Schema.Number),
              }),
            ),
            subscription: Schema.String,
          }),
        ),
        type: Schema.Literals([
          "payment_method_update",
          "subscription_cancel",
          "subscription_update",
          "subscription_update_confirm",
        ]),
      }),
    ),
    id: Schema.String,
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
        "en-AU",
        "en-CA",
        "en-GB",
        "en-IE",
        "en-IN",
        "en-NZ",
        "en-SG",
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
    object: Schema.Literals(["billing_portal.session"]),
    on_behalf_of: Schema.NullOr(Schema.String),
    return_url: Schema.NullOr(Schema.String),
    url: Schema.String,
  }) as unknown as Schema.Codec<PostBillingPortalSessionsOutput>;

// The operation
/**
 * Create a portal session
 *
 * <p>Creates a session of the customer portal.</p>
 */
export const PostBillingPortalSessions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostBillingPortalSessionsInput,
    outputSchema: PostBillingPortalSessionsOutput,
  }),
);
