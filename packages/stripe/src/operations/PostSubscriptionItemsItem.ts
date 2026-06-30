import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostSubscriptionItemsItemInput {
  item: string;
  billing_thresholds?: { usage_gte: number } | "";
  discounts?:
    | { coupon?: string; discount?: string; promotion_code?: string }[]
    | "";
  expand?: string[];
  metadata?: Record<string, string> | "";
  off_session?: boolean;
  payment_behavior?:
    | "allow_incomplete"
    | "default_incomplete"
    | "error_if_incomplete"
    | "pending_if_incomplete";
  plan?: string;
  price?: string;
  price_data?: {
    currency: string;
    product: string;
    recurring: {
      interval: "day" | "month" | "week" | "year";
      interval_count?: number;
    };
    tax_behavior?: "exclusive" | "inclusive" | "unspecified";
    unit_amount?: number;
    unit_amount_decimal?: string;
  };
  proration_behavior?: "always_invoice" | "create_prorations" | "none";
  proration_date?: number;
  quantity?: number;
  tax_rates?: string[] | "";
}
export const PostSubscriptionItemsItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.String.pipe(T.PathParam()),
    billing_thresholds: Schema.optional(
      Schema.Union([
        Schema.Struct({
          usage_gte: Schema.Number,
        }),
        Schema.Literals([""]),
      ]),
    ),
    discounts: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            coupon: Schema.optional(Schema.String),
            discount: Schema.optional(Schema.String),
            promotion_code: Schema.optional(Schema.String),
          }),
        ),
        Schema.Literals([""]),
      ]),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    off_session: Schema.optional(Schema.Boolean),
    payment_behavior: Schema.optional(
      Schema.Literals([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ]),
    ),
    plan: Schema.optional(Schema.String),
    price: Schema.optional(Schema.String),
    price_data: Schema.optional(
      Schema.Struct({
        currency: Schema.String,
        product: Schema.String,
        recurring: Schema.Struct({
          interval: Schema.Literals(["day", "month", "week", "year"]),
          interval_count: Schema.optional(Schema.Number),
        }),
        tax_behavior: Schema.optional(
          Schema.Literals(["exclusive", "inclusive", "unspecified"]),
        ),
        unit_amount: Schema.optional(Schema.Number),
        unit_amount_decimal: Schema.optional(Schema.String),
      }),
    ),
    proration_behavior: Schema.optional(
      Schema.Literals(["always_invoice", "create_prorations", "none"]),
    ),
    proration_date: Schema.optional(Schema.Number),
    quantity: Schema.optional(Schema.Number),
    tax_rates: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/subscription_items/{item}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostSubscriptionItemsItemInput>;

// Output Schema
export interface PostSubscriptionItemsItemOutput {
  billed_until?: number;
  billing_thresholds: { usage_gte: number | null } | null;
  created: number;
  current_period_end: number;
  current_period_start: number;
  discounts: (
    | string
    | {
        checkout_session: string | null;
        customer: unknown;
        customer_account: string | null;
        end: number | null;
        id: string;
        invoice: string | null;
        invoice_item: string | null;
        object: "discount";
        promotion_code:
          | string
          | {
              active: boolean;
              code: string;
              created: number;
              customer: unknown;
              customer_account: string | null;
              expires_at: number | null;
              id: string;
              livemode: boolean;
              max_redemptions: number | null;
              metadata: Record<string, string> | null;
              object: "promotion_code";
              promotion: {
                coupon:
                  | string
                  | {
                      amount_off: number | null;
                      applies_to?: { products: string[] };
                      created: number;
                      currency: string | null;
                      currency_options?: Record<string, { amount_off: number }>;
                      duration: "forever" | "once" | "repeating";
                      duration_in_months: number | null;
                      id: string;
                      livemode: boolean;
                      max_redemptions: number | null;
                      metadata: Record<string, string> | null;
                      name: string | null;
                      object: "coupon";
                      percent_off: number | null;
                      redeem_by: number | null;
                      times_redeemed: number;
                      valid: boolean;
                    }
                  | null;
                type: "coupon";
              };
              restrictions: {
                currency_options?: Record<string, { minimum_amount: number }>;
                first_time_transaction: boolean;
                minimum_amount: number | null;
                minimum_amount_currency: string | null;
              };
              times_redeemed: number;
            }
          | null;
        source: {
          coupon:
            | string
            | {
                amount_off: number | null;
                applies_to?: { products: string[] };
                created: number;
                currency: string | null;
                currency_options?: Record<string, { amount_off: number }>;
                duration: "forever" | "once" | "repeating";
                duration_in_months: number | null;
                id: string;
                livemode: boolean;
                max_redemptions: number | null;
                metadata: Record<string, string> | null;
                name: string | null;
                object: "coupon";
                percent_off: number | null;
                redeem_by: number | null;
                times_redeemed: number;
                valid: boolean;
              }
            | null;
          type: "coupon";
        };
        start: number;
        subscription: string | null;
        subscription_item: string | null;
      }
  )[];
  id: string;
  metadata: Record<string, string>;
  object: "subscription_item";
  plan: {
    active: boolean;
    amount: number | null;
    amount_decimal: string | null;
    billing_scheme: "per_unit" | "tiered";
    created: number;
    currency: string;
    id: string;
    interval: "day" | "month" | "week" | "year";
    interval_count: number;
    livemode: boolean;
    metadata: Record<string, string> | null;
    meter: string | null;
    nickname: string | null;
    object: "plan";
    product:
      | string
      | {
          active: boolean;
          created: number;
          default_price?:
            | string
            | {
                active: boolean;
                billing_scheme: "per_unit" | "tiered";
                created: number;
                currency: string;
                currency_options?: Record<
                  string,
                  {
                    custom_unit_amount: {
                      maximum: number | null;
                      minimum: number | null;
                      preset: number | null;
                    } | null;
                    tax_behavior:
                      | "exclusive"
                      | "inclusive"
                      | "unspecified"
                      | null;
                    tiers?: {
                      flat_amount: number | null;
                      flat_amount_decimal: string | null;
                      unit_amount: number | null;
                      unit_amount_decimal: string | null;
                      up_to: number | null;
                    }[];
                    unit_amount: number | null;
                    unit_amount_decimal: string | null;
                  }
                >;
                custom_unit_amount: {
                  maximum: number | null;
                  minimum: number | null;
                  preset: number | null;
                } | null;
                id: string;
                livemode: boolean;
                lookup_key: string | null;
                metadata: Record<string, string>;
                nickname: string | null;
                object: "price";
                product:
                  | string
                  | unknown
                  | { deleted: true; id: string; object: "product" };
                recurring: {
                  interval: "day" | "month" | "week" | "year";
                  interval_count: number;
                  meter: string | null;
                  trial_period_days: number | null;
                  usage_type: "licensed" | "metered";
                } | null;
                tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
                tiers?: {
                  flat_amount: number | null;
                  flat_amount_decimal: string | null;
                  unit_amount: number | null;
                  unit_amount_decimal: string | null;
                  up_to: number | null;
                }[];
                tiers_mode: "graduated" | "volume" | null;
                transform_quantity: {
                  divide_by: number;
                  round: "down" | "up";
                } | null;
                type: "one_time" | "recurring";
                unit_amount: number | null;
                unit_amount_decimal: string | null;
              }
            | null;
          description: string | null;
          id: string;
          images: string[];
          livemode: boolean;
          marketing_features: { name?: string }[];
          metadata: Record<string, string>;
          name: string;
          object: "product";
          package_dimensions: {
            height: number;
            length: number;
            weight: number;
            width: number;
          } | null;
          shippable: boolean | null;
          statement_descriptor?: string | null;
          tax_code?:
            | string
            | {
                description: string;
                id: string;
                name: string;
                object: "tax_code";
              }
            | null;
          type: "good" | "service";
          unit_label?: string | null;
          updated: number;
          url: string | null;
        }
      | { deleted: true; id: string; object: "product" }
      | null;
    tiers?: {
      flat_amount: number | null;
      flat_amount_decimal: string | null;
      unit_amount: number | null;
      unit_amount_decimal: string | null;
      up_to: number | null;
    }[];
    tiers_mode: "graduated" | "volume" | null;
    transform_usage: { divide_by: number; round: "down" | "up" } | null;
    trial_period_days: number | null;
    usage_type: "licensed" | "metered";
  };
  price: {
    active: boolean;
    billing_scheme: "per_unit" | "tiered";
    created: number;
    currency: string;
    currency_options?: Record<
      string,
      {
        custom_unit_amount: {
          maximum: number | null;
          minimum: number | null;
          preset: number | null;
        } | null;
        tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
        tiers?: {
          flat_amount: number | null;
          flat_amount_decimal: string | null;
          unit_amount: number | null;
          unit_amount_decimal: string | null;
          up_to: number | null;
        }[];
        unit_amount: number | null;
        unit_amount_decimal: string | null;
      }
    >;
    custom_unit_amount: {
      maximum: number | null;
      minimum: number | null;
      preset: number | null;
    } | null;
    id: string;
    livemode: boolean;
    lookup_key: string | null;
    metadata: Record<string, string>;
    nickname: string | null;
    object: "price";
    product:
      | string
      | {
          active: boolean;
          created: number;
          default_price?: string | unknown | null;
          description: string | null;
          id: string;
          images: string[];
          livemode: boolean;
          marketing_features: { name?: string }[];
          metadata: Record<string, string>;
          name: string;
          object: "product";
          package_dimensions: {
            height: number;
            length: number;
            weight: number;
            width: number;
          } | null;
          shippable: boolean | null;
          statement_descriptor?: string | null;
          tax_code?:
            | string
            | {
                description: string;
                id: string;
                name: string;
                object: "tax_code";
              }
            | null;
          type: "good" | "service";
          unit_label?: string | null;
          updated: number;
          url: string | null;
        }
      | { deleted: true; id: string; object: "product" };
    recurring: {
      interval: "day" | "month" | "week" | "year";
      interval_count: number;
      meter: string | null;
      trial_period_days: number | null;
      usage_type: "licensed" | "metered";
    } | null;
    tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
    tiers?: {
      flat_amount: number | null;
      flat_amount_decimal: string | null;
      unit_amount: number | null;
      unit_amount_decimal: string | null;
      up_to: number | null;
    }[];
    tiers_mode: "graduated" | "volume" | null;
    transform_quantity: { divide_by: number; round: "down" | "up" } | null;
    type: "one_time" | "recurring";
    unit_amount: number | null;
    unit_amount_decimal: string | null;
  };
  quantity?: number;
  subscription: string;
  tax_rates:
    | {
        active: boolean;
        country: string | null;
        created: number;
        description: string | null;
        display_name: string;
        effective_percentage: number | null;
        flat_amount: { amount: number; currency: string } | null;
        id: string;
        inclusive: boolean;
        jurisdiction: string | null;
        jurisdiction_level:
          | "city"
          | "country"
          | "county"
          | "district"
          | "multiple"
          | "state"
          | null;
        livemode: boolean;
        metadata: Record<string, string> | null;
        object: "tax_rate";
        percentage: number;
        rate_type: "flat_amount" | "percentage" | null;
        state: string | null;
        tax_type:
          | "amusement_tax"
          | "communications_tax"
          | "gst"
          | "hst"
          | "igst"
          | "jct"
          | "lease_tax"
          | "pst"
          | "qst"
          | "retail_delivery_fee"
          | "rst"
          | "sales_tax"
          | "service_tax"
          | "vat"
          | null;
      }[]
    | null;
}
export const PostSubscriptionItemsItemOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billed_until: Schema.optional(Schema.Number),
    billing_thresholds: Schema.NullOr(
      Schema.Struct({
        usage_gte: Schema.NullOr(Schema.Number),
      }),
    ),
    created: Schema.Number,
    current_period_end: Schema.Number,
    current_period_start: Schema.Number,
    discounts: Schema.Array(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          checkout_session: Schema.NullOr(Schema.String),
          customer: Schema.Unknown,
          customer_account: Schema.NullOr(Schema.String),
          end: Schema.NullOr(Schema.Number),
          id: Schema.String,
          invoice: Schema.NullOr(Schema.String),
          invoice_item: Schema.NullOr(Schema.String),
          object: Schema.Literals(["discount"]),
          promotion_code: Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                active: Schema.Boolean,
                code: Schema.String,
                created: Schema.Number,
                customer: Schema.Unknown,
                customer_account: Schema.NullOr(Schema.String),
                expires_at: Schema.NullOr(Schema.Number),
                id: Schema.String,
                livemode: Schema.Boolean,
                max_redemptions: Schema.NullOr(Schema.Number),
                metadata: Schema.NullOr(
                  Schema.Record(Schema.String, Schema.String),
                ),
                object: Schema.Literals(["promotion_code"]),
                promotion: Schema.Struct({
                  coupon: Schema.NullOr(
                    Schema.Union([
                      Schema.String,
                      Schema.Struct({
                        amount_off: Schema.NullOr(Schema.Number),
                        applies_to: Schema.optional(
                          Schema.Struct({
                            products: Schema.Array(Schema.String),
                          }),
                        ),
                        created: Schema.Number,
                        currency: Schema.NullOr(Schema.String),
                        currency_options: Schema.optional(
                          Schema.Record(
                            Schema.String,
                            Schema.Struct({
                              amount_off: Schema.Number,
                            }),
                          ),
                        ),
                        duration: Schema.Literals([
                          "forever",
                          "once",
                          "repeating",
                        ]),
                        duration_in_months: Schema.NullOr(Schema.Number),
                        id: Schema.String,
                        livemode: Schema.Boolean,
                        max_redemptions: Schema.NullOr(Schema.Number),
                        metadata: Schema.NullOr(
                          Schema.Record(Schema.String, Schema.String),
                        ),
                        name: Schema.NullOr(Schema.String),
                        object: Schema.Literals(["coupon"]),
                        percent_off: Schema.NullOr(Schema.Number),
                        redeem_by: Schema.NullOr(Schema.Number),
                        times_redeemed: Schema.Number,
                        valid: Schema.Boolean,
                      }),
                    ]),
                  ),
                  type: Schema.Literals(["coupon"]),
                }),
                restrictions: Schema.Struct({
                  currency_options: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        minimum_amount: Schema.Number,
                      }),
                    ),
                  ),
                  first_time_transaction: Schema.Boolean,
                  minimum_amount: Schema.NullOr(Schema.Number),
                  minimum_amount_currency: Schema.NullOr(Schema.String),
                }),
                times_redeemed: Schema.Number,
              }),
            ]),
          ),
          source: Schema.Struct({
            coupon: Schema.NullOr(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  amount_off: Schema.NullOr(Schema.Number),
                  applies_to: Schema.optional(
                    Schema.Struct({
                      products: Schema.Array(Schema.String),
                    }),
                  ),
                  created: Schema.Number,
                  currency: Schema.NullOr(Schema.String),
                  currency_options: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        amount_off: Schema.Number,
                      }),
                    ),
                  ),
                  duration: Schema.Literals(["forever", "once", "repeating"]),
                  duration_in_months: Schema.NullOr(Schema.Number),
                  id: Schema.String,
                  livemode: Schema.Boolean,
                  max_redemptions: Schema.NullOr(Schema.Number),
                  metadata: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  name: Schema.NullOr(Schema.String),
                  object: Schema.Literals(["coupon"]),
                  percent_off: Schema.NullOr(Schema.Number),
                  redeem_by: Schema.NullOr(Schema.Number),
                  times_redeemed: Schema.Number,
                  valid: Schema.Boolean,
                }),
              ]),
            ),
            type: Schema.Literals(["coupon"]),
          }),
          start: Schema.Number,
          subscription: Schema.NullOr(Schema.String),
          subscription_item: Schema.NullOr(Schema.String),
        }),
      ]),
    ),
    id: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["subscription_item"]),
    plan: Schema.Struct({
      active: Schema.Boolean,
      amount: Schema.NullOr(Schema.Number),
      amount_decimal: Schema.NullOr(Schema.String),
      billing_scheme: Schema.Literals(["per_unit", "tiered"]),
      created: Schema.Number,
      currency: Schema.String,
      id: Schema.String,
      interval: Schema.Literals(["day", "month", "week", "year"]),
      interval_count: Schema.Number,
      livemode: Schema.Boolean,
      metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      meter: Schema.NullOr(Schema.String),
      nickname: Schema.NullOr(Schema.String),
      object: Schema.Literals(["plan"]),
      product: Schema.Unknown,
      tiers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            flat_amount: Schema.NullOr(Schema.Number),
            flat_amount_decimal: Schema.NullOr(Schema.String),
            unit_amount: Schema.NullOr(Schema.Number),
            unit_amount_decimal: Schema.NullOr(Schema.String),
            up_to: Schema.NullOr(Schema.Number),
          }),
        ),
      ),
      tiers_mode: Schema.NullOr(Schema.Literals(["graduated", "volume"])),
      transform_usage: Schema.NullOr(
        Schema.Struct({
          divide_by: Schema.Number,
          round: Schema.Literals(["down", "up"]),
        }),
      ),
      trial_period_days: Schema.NullOr(Schema.Number),
      usage_type: Schema.Literals(["licensed", "metered"]),
    }),
    price: Schema.Struct({
      active: Schema.Boolean,
      billing_scheme: Schema.Literals(["per_unit", "tiered"]),
      created: Schema.Number,
      currency: Schema.String,
      currency_options: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            custom_unit_amount: Schema.NullOr(
              Schema.Struct({
                maximum: Schema.NullOr(Schema.Number),
                minimum: Schema.NullOr(Schema.Number),
                preset: Schema.NullOr(Schema.Number),
              }),
            ),
            tax_behavior: Schema.NullOr(
              Schema.Literals(["exclusive", "inclusive", "unspecified"]),
            ),
            tiers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  flat_amount: Schema.NullOr(Schema.Number),
                  flat_amount_decimal: Schema.NullOr(Schema.String),
                  unit_amount: Schema.NullOr(Schema.Number),
                  unit_amount_decimal: Schema.NullOr(Schema.String),
                  up_to: Schema.NullOr(Schema.Number),
                }),
              ),
            ),
            unit_amount: Schema.NullOr(Schema.Number),
            unit_amount_decimal: Schema.NullOr(Schema.String),
          }),
        ),
      ),
      custom_unit_amount: Schema.NullOr(
        Schema.Struct({
          maximum: Schema.NullOr(Schema.Number),
          minimum: Schema.NullOr(Schema.Number),
          preset: Schema.NullOr(Schema.Number),
        }),
      ),
      id: Schema.String,
      livemode: Schema.Boolean,
      lookup_key: Schema.NullOr(Schema.String),
      metadata: Schema.Record(Schema.String, Schema.String),
      nickname: Schema.NullOr(Schema.String),
      object: Schema.Literals(["price"]),
      product: Schema.Union([
        Schema.String,
        Schema.Struct({
          active: Schema.Boolean,
          created: Schema.Number,
          default_price: Schema.optional(
            Schema.NullOr(Schema.Union([Schema.String, Schema.Unknown])),
          ),
          description: Schema.NullOr(Schema.String),
          id: Schema.String,
          images: Schema.Array(Schema.String),
          livemode: Schema.Boolean,
          marketing_features: Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
            }),
          ),
          metadata: Schema.Record(Schema.String, Schema.String),
          name: Schema.String,
          object: Schema.Literals(["product"]),
          package_dimensions: Schema.NullOr(
            Schema.Struct({
              height: Schema.Number,
              length: Schema.Number,
              weight: Schema.Number,
              width: Schema.Number,
            }),
          ),
          shippable: Schema.NullOr(Schema.Boolean),
          statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
          tax_code: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  description: Schema.String,
                  id: Schema.String,
                  name: Schema.String,
                  object: Schema.Literals(["tax_code"]),
                }),
              ]),
            ),
          ),
          type: Schema.Literals(["good", "service"]),
          unit_label: Schema.optional(Schema.NullOr(Schema.String)),
          updated: Schema.Number,
          url: Schema.NullOr(Schema.String),
        }),
        Schema.Struct({
          deleted: Schema.Literals([true]),
          id: Schema.String,
          object: Schema.Literals(["product"]),
        }),
      ]),
      recurring: Schema.NullOr(
        Schema.Struct({
          interval: Schema.Literals(["day", "month", "week", "year"]),
          interval_count: Schema.Number,
          meter: Schema.NullOr(Schema.String),
          trial_period_days: Schema.NullOr(Schema.Number),
          usage_type: Schema.Literals(["licensed", "metered"]),
        }),
      ),
      tax_behavior: Schema.NullOr(
        Schema.Literals(["exclusive", "inclusive", "unspecified"]),
      ),
      tiers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            flat_amount: Schema.NullOr(Schema.Number),
            flat_amount_decimal: Schema.NullOr(Schema.String),
            unit_amount: Schema.NullOr(Schema.Number),
            unit_amount_decimal: Schema.NullOr(Schema.String),
            up_to: Schema.NullOr(Schema.Number),
          }),
        ),
      ),
      tiers_mode: Schema.NullOr(Schema.Literals(["graduated", "volume"])),
      transform_quantity: Schema.NullOr(
        Schema.Struct({
          divide_by: Schema.Number,
          round: Schema.Literals(["down", "up"]),
        }),
      ),
      type: Schema.Literals(["one_time", "recurring"]),
      unit_amount: Schema.NullOr(Schema.Number),
      unit_amount_decimal: Schema.NullOr(Schema.String),
    }),
    quantity: Schema.optional(Schema.Number),
    subscription: Schema.String,
    tax_rates: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          active: Schema.Boolean,
          country: Schema.NullOr(Schema.String),
          created: Schema.Number,
          description: Schema.NullOr(Schema.String),
          display_name: Schema.String,
          effective_percentage: Schema.NullOr(Schema.Number),
          flat_amount: Schema.NullOr(
            Schema.Struct({
              amount: Schema.Number,
              currency: Schema.String,
            }),
          ),
          id: Schema.String,
          inclusive: Schema.Boolean,
          jurisdiction: Schema.NullOr(Schema.String),
          jurisdiction_level: Schema.NullOr(
            Schema.Literals([
              "city",
              "country",
              "county",
              "district",
              "multiple",
              "state",
            ]),
          ),
          livemode: Schema.Boolean,
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          object: Schema.Literals(["tax_rate"]),
          percentage: Schema.Number,
          rate_type: Schema.NullOr(
            Schema.Literals(["flat_amount", "percentage"]),
          ),
          state: Schema.NullOr(Schema.String),
          tax_type: Schema.NullOr(
            Schema.Literals([
              "amusement_tax",
              "communications_tax",
              "gst",
              "hst",
              "igst",
              "jct",
              "lease_tax",
              "pst",
              "qst",
              "retail_delivery_fee",
              "rst",
              "sales_tax",
              "service_tax",
              "vat",
            ]),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PostSubscriptionItemsItemOutput>;

// The operation
/**
 * Update a subscription item
 *
 * <p>Updates the plan or quantity of an item on a current subscription.</p>
 */
export const PostSubscriptionItemsItem = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostSubscriptionItemsItemInput,
    outputSchema: PostSubscriptionItemsItemOutput,
  }),
);
