import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostQuotesQuoteInput {
  quote: string;
  application_fee_amount?: number | "";
  application_fee_percent?: number | "";
  automatic_tax?: {
    enabled: boolean;
    liability?: { account?: string; type: "account" | "self" };
  };
  collection_method?: "charge_automatically" | "send_invoice";
  customer?: string;
  customer_account?: string;
  default_tax_rates?: string[] | "";
  description?: string | "";
  discounts?:
    | { coupon?: string; discount?: string; promotion_code?: string }[]
    | "";
  expand?: string[];
  expires_at?: number;
  footer?: string | "";
  header?: string | "";
  invoice_settings?: {
    days_until_due?: number;
    issuer?: { account?: string; type: "account" | "self" };
  };
  line_items?: {
    discounts?:
      | { coupon?: string; discount?: string; promotion_code?: string }[]
      | "";
    id?: string;
    price?: string;
    price_data?: {
      currency: string;
      product: string;
      recurring?: {
        interval: "day" | "month" | "week" | "year";
        interval_count?: number;
      };
      tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      unit_amount?: number;
      unit_amount_decimal?: string;
    };
    quantity?: number;
    tax_rates?: string[] | "";
  }[];
  metadata?: Record<string, string>;
  on_behalf_of?: string | "";
  subscription_data?: {
    description?: string | "";
    effective_date?: "current_period_end" | number | "";
    metadata?: Record<string, string>;
    trial_period_days?: number | "";
  };
  transfer_data?:
    | { amount?: number; amount_percent?: number; destination: string }
    | "";
}
export const PostQuotesQuoteInput = /*@__PURE__*/ Schema.Struct({
  quote: Schema.String.pipe(T.PathParam()),
  application_fee_amount: Schema.optional(
    Schema.Union([Schema.Number, Schema.Literals([""])]),
  ),
  application_fee_percent: Schema.optional(
    Schema.Union([Schema.Number, Schema.Literals([""])]),
  ),
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
  default_tax_rates: Schema.optional(
    Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
  ),
  description: Schema.optional(
    Schema.Union([Schema.String, Schema.Literals([""])]),
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
  expires_at: Schema.optional(Schema.Number),
  footer: Schema.optional(Schema.Union([Schema.String, Schema.Literals([""])])),
  header: Schema.optional(Schema.Union([Schema.String, Schema.Literals([""])])),
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
        tax_rates: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
        ),
      }),
    ),
  ),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  on_behalf_of: Schema.optional(
    Schema.Union([Schema.String, Schema.Literals([""])]),
  ),
  subscription_data: Schema.optional(
    Schema.Struct({
      description: Schema.optional(
        Schema.Union([Schema.String, Schema.Literals([""])]),
      ),
      effective_date: Schema.optional(
        Schema.Union([
          Schema.Literals(["current_period_end"]),
          Schema.Number,
          Schema.Literals([""]),
        ]),
      ),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      trial_period_days: Schema.optional(
        Schema.Union([Schema.Number, Schema.Literals([""])]),
      ),
    }),
  ),
  transfer_data: Schema.optional(
    Schema.Union([
      Schema.Struct({
        amount: Schema.optional(Schema.Number),
        amount_percent: Schema.optional(Schema.Number),
        destination: Schema.String,
      }),
      Schema.Literals([""]),
    ]),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/quotes/{quote}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostQuotesQuoteInput>;

// Output Schema
export interface PostQuotesQuoteOutput {
  amount_subtotal: number;
  amount_total: number;
  application:
    | string
    | { id: string; name: string | null; object: "application" }
    | { deleted: true; id: string; name: string | null; object: "application" }
    | null;
  application_fee_amount: number | null;
  application_fee_percent: number | null;
  automatic_tax: {
    enabled: boolean;
    liability: { account?: unknown; type: "account" | "self" } | null;
    provider: string | null;
    status: "complete" | "failed" | "requires_location_inputs" | null;
  };
  collection_method: "charge_automatically" | "send_invoice";
  computed: {
    recurring: {
      amount_subtotal: number;
      amount_total: number;
      interval: "day" | "month" | "week" | "year";
      interval_count: number;
      total_details: {
        amount_discount: number;
        amount_shipping: number | null;
        amount_tax: number;
        breakdown?: {
          discounts: {
            amount: number;
            discount: {
              checkout_session: string | null;
              customer: unknown;
              customer_account: string | null;
              end: number | null;
              id: string;
              invoice: string | null;
              invoice_item: string | null;
              object: "discount";
              promotion_code: unknown;
              source: { coupon: unknown; type: "coupon" };
              start: number;
              subscription: string | null;
              subscription_item: string | null;
            };
          }[];
          taxes: {
            amount: number;
            rate: {
              active: boolean;
              country: string | null;
              created: number;
              description: string | null;
              display_name: string;
              effective_percentage: number | null;
              flat_amount: unknown;
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
            };
            taxability_reason:
              | "customer_exempt"
              | "not_collecting"
              | "not_subject_to_tax"
              | "not_supported"
              | "portion_product_exempt"
              | "portion_reduced_rated"
              | "portion_standard_rated"
              | "product_exempt"
              | "product_exempt_holiday"
              | "proportionally_rated"
              | "reduced_rated"
              | "reverse_charge"
              | "standard_rated"
              | "taxable_basis_reduced"
              | "zero_rated"
              | null;
            taxable_amount: number | null;
          }[];
        };
      };
    } | null;
    upfront: {
      amount_subtotal: number;
      amount_total: number;
      line_items?: {
        data: {
          adjustable_quantity: {
            enabled: boolean;
            maximum: number | null;
            minimum: number | null;
          } | null;
          amount_discount: number;
          amount_subtotal: number;
          amount_tax: number;
          amount_total: number;
          currency: string;
          description: string | null;
          discounts?: {
            amount: number;
            discount: {
              checkout_session: string | null;
              customer: unknown;
              customer_account: string | null;
              end: number | null;
              id: string;
              invoice: string | null;
              invoice_item: string | null;
              object: "discount";
              promotion_code: unknown;
              source: { coupon: unknown; type: "coupon" };
              start: number;
              subscription: string | null;
              subscription_item: string | null;
            };
          }[];
          id: string;
          metadata: Record<string, string> | null;
          object: "item";
          price: {
            active: boolean;
            billing_scheme: "per_unit" | "tiered";
            created: number;
            currency: string;
            currency_options?: Record<
              string,
              {
                custom_unit_amount: unknown;
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
                  default_price?: unknown;
                  description: string | null;
                  id: string;
                  images: string[];
                  livemode: boolean;
                  marketing_features: { name?: string }[];
                  metadata: Record<string, string>;
                  name: string;
                  object: "product";
                  package_dimensions: unknown;
                  shippable: boolean | null;
                  statement_descriptor?: string | null;
                  tax_code?: unknown;
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
            transform_quantity: {
              divide_by: number;
              round: "down" | "up";
            } | null;
            type: "one_time" | "recurring";
            unit_amount: number | null;
            unit_amount_decimal: string | null;
          } | null;
          quantity: number | null;
          taxes?: {
            amount: number;
            rate: {
              active: boolean;
              country: string | null;
              created: number;
              description: string | null;
              display_name: string;
              effective_percentage: number | null;
              flat_amount: unknown;
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
            };
            taxability_reason:
              | "customer_exempt"
              | "not_collecting"
              | "not_subject_to_tax"
              | "not_supported"
              | "portion_product_exempt"
              | "portion_reduced_rated"
              | "portion_standard_rated"
              | "product_exempt"
              | "product_exempt_holiday"
              | "proportionally_rated"
              | "reduced_rated"
              | "reverse_charge"
              | "standard_rated"
              | "taxable_basis_reduced"
              | "zero_rated"
              | null;
            taxable_amount: number | null;
          }[];
        }[];
        has_more: boolean;
        object: "list";
        url: string;
      };
      total_details: {
        amount_discount: number;
        amount_shipping: number | null;
        amount_tax: number;
        breakdown?: {
          discounts: {
            amount: number;
            discount: {
              checkout_session: string | null;
              customer: unknown;
              customer_account: string | null;
              end: number | null;
              id: string;
              invoice: string | null;
              invoice_item: string | null;
              object: "discount";
              promotion_code: unknown;
              source: { coupon: unknown; type: "coupon" };
              start: number;
              subscription: string | null;
              subscription_item: string | null;
            };
          }[];
          taxes: {
            amount: number;
            rate: {
              active: boolean;
              country: string | null;
              created: number;
              description: string | null;
              display_name: string;
              effective_percentage: number | null;
              flat_amount: unknown;
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
            };
            taxability_reason:
              | "customer_exempt"
              | "not_collecting"
              | "not_subject_to_tax"
              | "not_supported"
              | "portion_product_exempt"
              | "portion_reduced_rated"
              | "portion_standard_rated"
              | "product_exempt"
              | "product_exempt_holiday"
              | "proportionally_rated"
              | "reduced_rated"
              | "reverse_charge"
              | "standard_rated"
              | "taxable_basis_reduced"
              | "zero_rated"
              | null;
            taxable_amount: number | null;
          }[];
        };
      };
    };
  };
  created: number;
  currency: string | null;
  customer: unknown;
  customer_account: string | null;
  default_tax_rates?: (
    | string
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
      }
  )[];
  description: string | null;
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
  expires_at: number;
  footer: string | null;
  from_quote: { is_revision: boolean; quote: unknown } | null;
  header: string | null;
  id: string;
  invoice: unknown;
  invoice_settings: {
    days_until_due: number | null;
    issuer: { account?: unknown; type: "account" | "self" };
  };
  line_items?: {
    data: {
      adjustable_quantity: {
        enabled: boolean;
        maximum: number | null;
        minimum: number | null;
      } | null;
      amount_discount: number;
      amount_subtotal: number;
      amount_tax: number;
      amount_total: number;
      currency: string;
      description: string | null;
      discounts?: {
        amount: number;
        discount: {
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
                promotion: { coupon: unknown; type: "coupon" };
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
        };
      }[];
      id: string;
      metadata: Record<string, string> | null;
      object: "item";
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
      } | null;
      quantity: number | null;
      taxes?: {
        amount: number;
        rate: {
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
        };
        taxability_reason:
          | "customer_exempt"
          | "not_collecting"
          | "not_subject_to_tax"
          | "not_supported"
          | "portion_product_exempt"
          | "portion_reduced_rated"
          | "portion_standard_rated"
          | "product_exempt"
          | "product_exempt_holiday"
          | "proportionally_rated"
          | "reduced_rated"
          | "reverse_charge"
          | "standard_rated"
          | "taxable_basis_reduced"
          | "zero_rated"
          | null;
        taxable_amount: number | null;
      }[];
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  livemode: boolean;
  metadata: Record<string, string>;
  number: string | null;
  object: "quote";
  on_behalf_of: unknown;
  status: "accepted" | "canceled" | "draft" | "open";
  status_transitions: {
    accepted_at: number | null;
    canceled_at: number | null;
    finalized_at: number | null;
  };
  subscription: unknown;
  subscription_data: {
    billing_mode: {
      flexible?: { proration_discounts?: "included" | "itemized" };
      type: "classic" | "flexible";
    };
    description: string | null;
    effective_date: number | null;
    metadata: Record<string, string> | null;
    trial_period_days: number | null;
  };
  subscription_schedule: unknown;
  test_clock:
    | string
    | {
        created: number;
        deletes_after: number;
        frozen_time: number;
        id: string;
        livemode: boolean;
        name: string | null;
        object: "test_helpers.test_clock";
        status: "advancing" | "internal_failure" | "ready";
        status_details: { advancing?: { target_frozen_time: number } };
      }
    | null;
  total_details: {
    amount_discount: number;
    amount_shipping: number | null;
    amount_tax: number;
    breakdown?: {
      discounts: {
        amount: number;
        discount: {
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
                promotion: { coupon: unknown; type: "coupon" };
                restrictions: {
                  currency_options?: Record<string, { minimum_amount: number }>;
                  first_time_transaction: boolean;
                  minimum_amount: number | null;
                  minimum_amount_currency: string | null;
                };
                times_redeemed: number;
              }
            | null;
          source: { coupon: unknown; type: "coupon" };
          start: number;
          subscription: string | null;
          subscription_item: string | null;
        };
      }[];
      taxes: {
        amount: number;
        rate: {
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
        };
        taxability_reason:
          | "customer_exempt"
          | "not_collecting"
          | "not_subject_to_tax"
          | "not_supported"
          | "portion_product_exempt"
          | "portion_reduced_rated"
          | "portion_standard_rated"
          | "product_exempt"
          | "product_exempt_holiday"
          | "proportionally_rated"
          | "reduced_rated"
          | "reverse_charge"
          | "standard_rated"
          | "taxable_basis_reduced"
          | "zero_rated"
          | null;
        taxable_amount: number | null;
      }[];
    };
  };
  transfer_data: {
    amount: number | null;
    amount_percent: number | null;
    destination: unknown;
  } | null;
}
export const PostQuotesQuoteOutput = /*@__PURE__*/ Schema.Struct({
  amount_subtotal: Schema.Number,
  amount_total: Schema.Number,
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
  application_fee_amount: Schema.NullOr(Schema.Number),
  application_fee_percent: Schema.NullOr(Schema.Number),
  automatic_tax: Schema.Struct({
    enabled: Schema.Boolean,
    liability: Schema.NullOr(
      Schema.Struct({
        account: Schema.optional(Schema.Unknown),
        type: Schema.Literals(["account", "self"]),
      }),
    ),
    provider: Schema.NullOr(Schema.String),
    status: Schema.NullOr(
      Schema.Literals(["complete", "failed", "requires_location_inputs"]),
    ),
  }),
  collection_method: Schema.Literals(["charge_automatically", "send_invoice"]),
  computed: Schema.Struct({
    recurring: Schema.NullOr(
      Schema.Struct({
        amount_subtotal: Schema.Number,
        amount_total: Schema.Number,
        interval: Schema.Literals(["day", "month", "week", "year"]),
        interval_count: Schema.Number,
        total_details: Schema.Struct({
          amount_discount: Schema.Number,
          amount_shipping: Schema.NullOr(Schema.Number),
          amount_tax: Schema.Number,
          breakdown: Schema.optional(
            Schema.Struct({
              discounts: Schema.Array(
                Schema.Struct({
                  amount: Schema.Number,
                  discount: Schema.Struct({
                    checkout_session: Schema.NullOr(Schema.String),
                    customer: Schema.Unknown,
                    customer_account: Schema.NullOr(Schema.String),
                    end: Schema.NullOr(Schema.Number),
                    id: Schema.String,
                    invoice: Schema.NullOr(Schema.String),
                    invoice_item: Schema.NullOr(Schema.String),
                    object: Schema.Literals(["discount"]),
                    promotion_code: Schema.Unknown,
                    source: Schema.Struct({
                      coupon: Schema.Unknown,
                      type: Schema.Literals(["coupon"]),
                    }),
                    start: Schema.Number,
                    subscription: Schema.NullOr(Schema.String),
                    subscription_item: Schema.NullOr(Schema.String),
                  }),
                }),
              ),
              taxes: Schema.Array(
                Schema.Struct({
                  amount: Schema.Number,
                  rate: Schema.Struct({
                    active: Schema.Boolean,
                    country: Schema.NullOr(Schema.String),
                    created: Schema.Number,
                    description: Schema.NullOr(Schema.String),
                    display_name: Schema.String,
                    effective_percentage: Schema.NullOr(Schema.Number),
                    flat_amount: Schema.Unknown,
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
                    metadata: Schema.NullOr(
                      Schema.Record(Schema.String, Schema.String),
                    ),
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
                  taxability_reason: Schema.NullOr(
                    Schema.Literals([
                      "customer_exempt",
                      "not_collecting",
                      "not_subject_to_tax",
                      "not_supported",
                      "portion_product_exempt",
                      "portion_reduced_rated",
                      "portion_standard_rated",
                      "product_exempt",
                      "product_exempt_holiday",
                      "proportionally_rated",
                      "reduced_rated",
                      "reverse_charge",
                      "standard_rated",
                      "taxable_basis_reduced",
                      "zero_rated",
                    ]),
                  ),
                  taxable_amount: Schema.NullOr(Schema.Number),
                }),
              ),
            }),
          ),
        }),
      }),
    ),
    upfront: Schema.Struct({
      amount_subtotal: Schema.Number,
      amount_total: Schema.Number,
      line_items: Schema.optional(
        Schema.Struct({
          data: Schema.Array(
            Schema.Struct({
              adjustable_quantity: Schema.NullOr(
                Schema.Struct({
                  enabled: Schema.Boolean,
                  maximum: Schema.NullOr(Schema.Number),
                  minimum: Schema.NullOr(Schema.Number),
                }),
              ),
              amount_discount: Schema.Number,
              amount_subtotal: Schema.Number,
              amount_tax: Schema.Number,
              amount_total: Schema.Number,
              currency: Schema.String,
              description: Schema.NullOr(Schema.String),
              discounts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    amount: Schema.Number,
                    discount: Schema.Struct({
                      checkout_session: Schema.NullOr(Schema.String),
                      customer: Schema.Unknown,
                      customer_account: Schema.NullOr(Schema.String),
                      end: Schema.NullOr(Schema.Number),
                      id: Schema.String,
                      invoice: Schema.NullOr(Schema.String),
                      invoice_item: Schema.NullOr(Schema.String),
                      object: Schema.Literals(["discount"]),
                      promotion_code: Schema.Unknown,
                      source: Schema.Struct({
                        coupon: Schema.Unknown,
                        type: Schema.Literals(["coupon"]),
                      }),
                      start: Schema.Number,
                      subscription: Schema.NullOr(Schema.String),
                      subscription_item: Schema.NullOr(Schema.String),
                    }),
                  }),
                ),
              ),
              id: Schema.String,
              metadata: Schema.NullOr(
                Schema.Record(Schema.String, Schema.String),
              ),
              object: Schema.Literals(["item"]),
              price: Schema.Unknown,
              quantity: Schema.NullOr(Schema.Number),
              taxes: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    amount: Schema.Number,
                    rate: Schema.Struct({
                      active: Schema.Boolean,
                      country: Schema.NullOr(Schema.String),
                      created: Schema.Number,
                      description: Schema.NullOr(Schema.String),
                      display_name: Schema.String,
                      effective_percentage: Schema.NullOr(Schema.Number),
                      flat_amount: Schema.Unknown,
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
                      metadata: Schema.NullOr(
                        Schema.Record(Schema.String, Schema.String),
                      ),
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
                    taxability_reason: Schema.NullOr(
                      Schema.Literals([
                        "customer_exempt",
                        "not_collecting",
                        "not_subject_to_tax",
                        "not_supported",
                        "portion_product_exempt",
                        "portion_reduced_rated",
                        "portion_standard_rated",
                        "product_exempt",
                        "product_exempt_holiday",
                        "proportionally_rated",
                        "reduced_rated",
                        "reverse_charge",
                        "standard_rated",
                        "taxable_basis_reduced",
                        "zero_rated",
                      ]),
                    ),
                    taxable_amount: Schema.NullOr(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          has_more: Schema.Boolean,
          object: Schema.Literals(["list"]),
          url: Schema.String,
        }),
      ),
      total_details: Schema.Struct({
        amount_discount: Schema.Number,
        amount_shipping: Schema.NullOr(Schema.Number),
        amount_tax: Schema.Number,
        breakdown: Schema.optional(
          Schema.Struct({
            discounts: Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                discount: Schema.Struct({
                  checkout_session: Schema.NullOr(Schema.String),
                  customer: Schema.Unknown,
                  customer_account: Schema.NullOr(Schema.String),
                  end: Schema.NullOr(Schema.Number),
                  id: Schema.String,
                  invoice: Schema.NullOr(Schema.String),
                  invoice_item: Schema.NullOr(Schema.String),
                  object: Schema.Literals(["discount"]),
                  promotion_code: Schema.Unknown,
                  source: Schema.Struct({
                    coupon: Schema.Unknown,
                    type: Schema.Literals(["coupon"]),
                  }),
                  start: Schema.Number,
                  subscription: Schema.NullOr(Schema.String),
                  subscription_item: Schema.NullOr(Schema.String),
                }),
              }),
            ),
            taxes: Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                rate: Schema.Struct({
                  active: Schema.Boolean,
                  country: Schema.NullOr(Schema.String),
                  created: Schema.Number,
                  description: Schema.NullOr(Schema.String),
                  display_name: Schema.String,
                  effective_percentage: Schema.NullOr(Schema.Number),
                  flat_amount: Schema.Unknown,
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
                  metadata: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.String),
                  ),
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
                taxability_reason: Schema.NullOr(
                  Schema.Literals([
                    "customer_exempt",
                    "not_collecting",
                    "not_subject_to_tax",
                    "not_supported",
                    "portion_product_exempt",
                    "portion_reduced_rated",
                    "portion_standard_rated",
                    "product_exempt",
                    "product_exempt_holiday",
                    "proportionally_rated",
                    "reduced_rated",
                    "reverse_charge",
                    "standard_rated",
                    "taxable_basis_reduced",
                    "zero_rated",
                  ]),
                ),
                taxable_amount: Schema.NullOr(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    }),
  }),
  created: Schema.Number,
  currency: Schema.NullOr(Schema.String),
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  default_tax_rates: Schema.optional(
    Schema.Array(
      Schema.Union([
        Schema.String,
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
      ]),
    ),
  ),
  description: Schema.NullOr(Schema.String),
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
  expires_at: Schema.Number,
  footer: Schema.NullOr(Schema.String),
  from_quote: Schema.NullOr(
    Schema.Struct({
      is_revision: Schema.Boolean,
      quote: Schema.Unknown,
    }),
  ),
  header: Schema.NullOr(Schema.String),
  id: Schema.String,
  invoice: Schema.Unknown,
  invoice_settings: Schema.Struct({
    days_until_due: Schema.NullOr(Schema.Number),
    issuer: Schema.Struct({
      account: Schema.optional(Schema.Unknown),
      type: Schema.Literals(["account", "self"]),
    }),
  }),
  line_items: Schema.optional(
    Schema.Struct({
      data: Schema.Array(
        Schema.Struct({
          adjustable_quantity: Schema.NullOr(
            Schema.Struct({
              enabled: Schema.Boolean,
              maximum: Schema.NullOr(Schema.Number),
              minimum: Schema.NullOr(Schema.Number),
            }),
          ),
          amount_discount: Schema.Number,
          amount_subtotal: Schema.Number,
          amount_tax: Schema.Number,
          amount_total: Schema.Number,
          currency: Schema.String,
          description: Schema.NullOr(Schema.String),
          discounts: Schema.optional(
            Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                discount: Schema.Struct({
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
                          coupon: Schema.Unknown,
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
                  start: Schema.Number,
                  subscription: Schema.NullOr(Schema.String),
                  subscription_item: Schema.NullOr(Schema.String),
                }),
              }),
            ),
          ),
          id: Schema.String,
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          object: Schema.Literals(["item"]),
          price: Schema.Unknown,
          quantity: Schema.NullOr(Schema.Number),
          taxes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                rate: Schema.Struct({
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
                  metadata: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.String),
                  ),
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
                taxability_reason: Schema.NullOr(
                  Schema.Literals([
                    "customer_exempt",
                    "not_collecting",
                    "not_subject_to_tax",
                    "not_supported",
                    "portion_product_exempt",
                    "portion_reduced_rated",
                    "portion_standard_rated",
                    "product_exempt",
                    "product_exempt_holiday",
                    "proportionally_rated",
                    "reduced_rated",
                    "reverse_charge",
                    "standard_rated",
                    "taxable_basis_reduced",
                    "zero_rated",
                  ]),
                ),
                taxable_amount: Schema.NullOr(Schema.Number),
              }),
            ),
          ),
        }),
      ),
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
  status_transitions: Schema.Struct({
    accepted_at: Schema.NullOr(Schema.Number),
    canceled_at: Schema.NullOr(Schema.Number),
    finalized_at: Schema.NullOr(Schema.Number),
  }),
  subscription: Schema.Unknown,
  subscription_data: Schema.Struct({
    billing_mode: Schema.Struct({
      flexible: Schema.optional(
        Schema.Struct({
          proration_discounts: Schema.optional(
            Schema.Literals(["included", "itemized"]),
          ),
        }),
      ),
      type: Schema.Literals(["classic", "flexible"]),
    }),
    description: Schema.NullOr(Schema.String),
    effective_date: Schema.NullOr(Schema.Number),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    trial_period_days: Schema.NullOr(Schema.Number),
  }),
  subscription_schedule: Schema.Unknown,
  test_clock: Schema.NullOr(
    Schema.Union([
      Schema.String,
      Schema.Struct({
        created: Schema.Number,
        deletes_after: Schema.Number,
        frozen_time: Schema.Number,
        id: Schema.String,
        livemode: Schema.Boolean,
        name: Schema.NullOr(Schema.String),
        object: Schema.Literals(["test_helpers.test_clock"]),
        status: Schema.Literals(["advancing", "internal_failure", "ready"]),
        status_details: Schema.Struct({
          advancing: Schema.optional(
            Schema.Struct({
              target_frozen_time: Schema.Number,
            }),
          ),
        }),
      }),
    ]),
  ),
  total_details: Schema.Struct({
    amount_discount: Schema.Number,
    amount_shipping: Schema.NullOr(Schema.Number),
    amount_tax: Schema.Number,
    breakdown: Schema.optional(
      Schema.Struct({
        discounts: Schema.Array(
          Schema.Struct({
            amount: Schema.Number,
            discount: Schema.Struct({
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
                      coupon: Schema.Unknown,
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
                coupon: Schema.Unknown,
                type: Schema.Literals(["coupon"]),
              }),
              start: Schema.Number,
              subscription: Schema.NullOr(Schema.String),
              subscription_item: Schema.NullOr(Schema.String),
            }),
          }),
        ),
        taxes: Schema.Array(
          Schema.Struct({
            amount: Schema.Number,
            rate: Schema.Struct({
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
              metadata: Schema.NullOr(
                Schema.Record(Schema.String, Schema.String),
              ),
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
            taxability_reason: Schema.NullOr(
              Schema.Literals([
                "customer_exempt",
                "not_collecting",
                "not_subject_to_tax",
                "not_supported",
                "portion_product_exempt",
                "portion_reduced_rated",
                "portion_standard_rated",
                "product_exempt",
                "product_exempt_holiday",
                "proportionally_rated",
                "reduced_rated",
                "reverse_charge",
                "standard_rated",
                "taxable_basis_reduced",
                "zero_rated",
              ]),
            ),
            taxable_amount: Schema.NullOr(Schema.Number),
          }),
        ),
      }),
    ),
  }),
  transfer_data: Schema.NullOr(
    Schema.Struct({
      amount: Schema.NullOr(Schema.Number),
      amount_percent: Schema.NullOr(Schema.Number),
      destination: Schema.Unknown,
    }),
  ),
}) as unknown as Schema.Codec<PostQuotesQuoteOutput>;

// The operation
/**
 * Update a quote
 *
 * <p>A quote models prices and services for a customer.</p>
 */
export const PostQuotesQuote = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostQuotesQuoteInput,
  outputSchema: PostQuotesQuoteOutput,
}));
