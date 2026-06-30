import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostBillingPortalConfigurationsConfigurationInput {
  configuration: string;
  active?: boolean;
  business_profile?: {
    headline?: string | "";
    privacy_policy_url?: string | "";
    terms_of_service_url?: string | "";
  };
  default_return_url?: string | "";
  expand?: string[];
  features?: {
    customer_update?: {
      allowed_updates?:
        | ("address" | "email" | "name" | "phone" | "shipping" | "tax_id")[]
        | "";
      enabled?: boolean;
    };
    invoice_history?: { enabled: boolean };
    payment_method_update?: {
      enabled: boolean;
      payment_method_configuration?: string | "";
    };
    subscription_cancel?: {
      cancellation_reason?: {
        enabled: boolean;
        options?:
          | (
              | "customer_service"
              | "low_quality"
              | "missing_features"
              | "other"
              | "switched_service"
              | "too_complex"
              | "too_expensive"
              | "unused"
            )[]
          | "";
      };
      enabled?: boolean;
      mode?: "at_period_end" | "immediately";
      proration_behavior?: "always_invoice" | "create_prorations" | "none";
    };
    subscription_update?: {
      billing_cycle_anchor?: "now" | "unchanged";
      default_allowed_updates?:
        | ("price" | "promotion_code" | "quantity")[]
        | "";
      enabled?: boolean;
      products?:
        | {
            adjustable_quantity?: {
              enabled: boolean;
              maximum?: number;
              minimum?: number;
            };
            prices: string[];
            product: string;
          }[]
        | "";
      proration_behavior?: "always_invoice" | "create_prorations" | "none";
      schedule_at_period_end?: {
        conditions?:
          | { type: "decreasing_item_amount" | "shortening_interval" }[]
          | "";
      };
      trial_update_behavior?: "continue_trial" | "end_trial";
    };
  };
  login_page?: { enabled: boolean };
  metadata?: Record<string, string> | "";
  name?: string | "";
}
export const PostBillingPortalConfigurationsConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.String.pipe(T.PathParam()),
    active: Schema.optional(Schema.Boolean),
    business_profile: Schema.optional(
      Schema.Struct({
        headline: Schema.optional(
          Schema.Union([Schema.String, Schema.Literals([""])]),
        ),
        privacy_policy_url: Schema.optional(
          Schema.Union([Schema.String, Schema.Literals([""])]),
        ),
        terms_of_service_url: Schema.optional(
          Schema.Union([Schema.String, Schema.Literals([""])]),
        ),
      }),
    ),
    default_return_url: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    features: Schema.optional(
      Schema.Struct({
        customer_update: Schema.optional(
          Schema.Struct({
            allowed_updates: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Literals([
                    "address",
                    "email",
                    "name",
                    "phone",
                    "shipping",
                    "tax_id",
                  ]),
                ),
                Schema.Literals([""]),
              ]),
            ),
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        invoice_history: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
          }),
        ),
        payment_method_update: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            payment_method_configuration: Schema.optional(
              Schema.Union([Schema.String, Schema.Literals([""])]),
            ),
          }),
        ),
        subscription_cancel: Schema.optional(
          Schema.Struct({
            cancellation_reason: Schema.optional(
              Schema.Struct({
                enabled: Schema.Boolean,
                options: Schema.optional(
                  Schema.Union([
                    Schema.Array(
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
                    Schema.Literals([""]),
                  ]),
                ),
              }),
            ),
            enabled: Schema.optional(Schema.Boolean),
            mode: Schema.optional(
              Schema.Literals(["at_period_end", "immediately"]),
            ),
            proration_behavior: Schema.optional(
              Schema.Literals(["always_invoice", "create_prorations", "none"]),
            ),
          }),
        ),
        subscription_update: Schema.optional(
          Schema.Struct({
            billing_cycle_anchor: Schema.optional(
              Schema.Literals(["now", "unchanged"]),
            ),
            default_allowed_updates: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Literals(["price", "promotion_code", "quantity"]),
                ),
                Schema.Literals([""]),
              ]),
            ),
            enabled: Schema.optional(Schema.Boolean),
            products: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    adjustable_quantity: Schema.optional(
                      Schema.Struct({
                        enabled: Schema.Boolean,
                        maximum: Schema.optional(Schema.Number),
                        minimum: Schema.optional(Schema.Number),
                      }),
                    ),
                    prices: Schema.Array(Schema.String),
                    product: Schema.String,
                  }),
                ),
                Schema.Literals([""]),
              ]),
            ),
            proration_behavior: Schema.optional(
              Schema.Literals(["always_invoice", "create_prorations", "none"]),
            ),
            schedule_at_period_end: Schema.optional(
              Schema.Struct({
                conditions: Schema.optional(
                  Schema.Union([
                    Schema.Array(
                      Schema.Struct({
                        type: Schema.Literals([
                          "decreasing_item_amount",
                          "shortening_interval",
                        ]),
                      }),
                    ),
                    Schema.Literals([""]),
                  ]),
                ),
              }),
            ),
            trial_update_behavior: Schema.optional(
              Schema.Literals(["continue_trial", "end_trial"]),
            ),
          }),
        ),
      }),
    ),
    login_page: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
      }),
    ),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Literals([""])])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing_portal/configurations/{configuration}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostBillingPortalConfigurationsConfigurationInput>;

// Output Schema
export interface PostBillingPortalConfigurationsConfigurationOutput {
  active: boolean;
  application:
    | string
    | { id: string; name: string | null; object: "application" }
    | { deleted: true; id: string; name: string | null; object: "application" }
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
      default_allowed_updates: ("price" | "promotion_code" | "quantity")[];
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
}
export const PostBillingPortalConfigurationsConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        trial_update_behavior: Schema.Literals(["continue_trial", "end_trial"]),
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
  }) as unknown as Schema.Codec<PostBillingPortalConfigurationsConfigurationOutput>;

// The operation
/**
 * Update a portal configuration
 *
 * <p>Updates a configuration that describes the functionality of the customer portal.</p>
 */
export const PostBillingPortalConfigurationsConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostBillingPortalConfigurationsConfigurationInput,
    outputSchema: PostBillingPortalConfigurationsConfigurationOutput,
  }));
