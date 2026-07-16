import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostInvoicesInvoiceLinesLineItemIdInput {
  invoice: string;
  line_item_id: string;
  amount?: number;
  description?: string;
  discountable?: boolean;
  discounts?:
    | { coupon?: string; discount?: string; promotion_code?: string }[]
    | "";
  expand?: string[];
  metadata?: Record<string, string> | "";
  period?: { end: number; start: number };
  price_data?: {
    currency: string;
    product?: string;
    product_data?: {
      description?: string;
      images?: string[];
      metadata?: Record<string, string>;
      name: string;
      tax_code?: string;
      unit_label?: string;
    };
    tax_behavior?: "exclusive" | "inclusive" | "unspecified";
    unit_amount?: number;
    unit_amount_decimal?: string;
  };
  pricing?: { price?: string };
  quantity?: number;
  quantity_decimal?: string;
  tax_amounts?:
    | {
        amount: number;
        tax_rate_data: {
          country?: string;
          description?: string;
          display_name: string;
          inclusive: boolean;
          jurisdiction?: string;
          jurisdiction_level?:
            | "city"
            | "country"
            | "county"
            | "district"
            | "multiple"
            | "state";
          percentage: number;
          state?: string;
          tax_type?:
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
            | "vat";
        };
        taxability_reason?:
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
          | "zero_rated";
        taxable_amount: number;
      }[]
    | "";
  tax_rates?: string[] | "";
}
export const PostInvoicesInvoiceLinesLineItemIdInput =
  /*@__PURE__*/ Schema.Struct({
    invoice: Schema.String.pipe(T.PathParam()),
    line_item_id: Schema.String.pipe(T.PathParam()),
    amount: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    discountable: Schema.optional(Schema.Boolean),
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
    period: Schema.optional(
      Schema.Struct({
        end: Schema.Number,
        start: Schema.Number,
      }),
    ),
    price_data: Schema.optional(
      Schema.Struct({
        currency: Schema.String,
        product: Schema.optional(Schema.String),
        product_data: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            images: Schema.optional(Schema.Array(Schema.String)),
            metadata: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            name: Schema.String,
            tax_code: Schema.optional(Schema.String),
            unit_label: Schema.optional(Schema.String),
          }),
        ),
        tax_behavior: Schema.optional(
          Schema.Literals(["exclusive", "inclusive", "unspecified"]),
        ),
        unit_amount: Schema.optional(Schema.Number),
        unit_amount_decimal: Schema.optional(Schema.String),
      }),
    ),
    pricing: Schema.optional(
      Schema.Struct({
        price: Schema.optional(Schema.String),
      }),
    ),
    quantity: Schema.optional(Schema.Number),
    quantity_decimal: Schema.optional(Schema.String),
    tax_amounts: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            amount: Schema.Number,
            tax_rate_data: Schema.Struct({
              country: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              display_name: Schema.String,
              inclusive: Schema.Boolean,
              jurisdiction: Schema.optional(Schema.String),
              jurisdiction_level: Schema.optional(
                Schema.Literals([
                  "city",
                  "country",
                  "county",
                  "district",
                  "multiple",
                  "state",
                ]),
              ),
              percentage: Schema.Number,
              state: Schema.optional(Schema.String),
              tax_type: Schema.optional(
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
            taxability_reason: Schema.optional(
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
            taxable_amount: Schema.Number,
          }),
        ),
        Schema.Literals([""]),
      ]),
    ),
    tax_rates: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Literals([""])]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/invoices/{invoice}/lines/{line_item_id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostInvoicesInvoiceLinesLineItemIdInput>;

// Output Schema
export interface PostInvoicesInvoiceLinesLineItemIdOutput {
  amount: number;
  currency: string;
  description: string | null;
  discount_amounts:
    | {
        amount: number;
        discount:
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
                            currency_options?: Record<
                              string,
                              { amount_off: number }
                            >;
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
                      currency_options?: Record<
                        string,
                        { minimum_amount: number }
                      >;
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
          | {
              checkout_session: string | null;
              customer: unknown;
              customer_account: string | null;
              deleted: true;
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
                            currency_options?: Record<
                              string,
                              { amount_off: number }
                            >;
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
                      currency_options?: Record<
                        string,
                        { minimum_amount: number }
                      >;
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
      }[]
    | null;
  discountable: boolean;
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
  invoice: string | null;
  livemode: boolean;
  metadata: Record<string, string>;
  object: "line_item";
  parent: {
    invoice_item_details: {
      invoice_item: string;
      proration: boolean;
      proration_details: {
        credited_items: {
          invoice: string;
          invoice_line_items: string[];
        } | null;
      } | null;
      subscription: string | null;
    } | null;
    subscription_item_details: {
      invoice_item: string | null;
      proration: boolean;
      proration_details: {
        credited_items: {
          invoice: string;
          invoice_line_items: string[];
        } | null;
      } | null;
      subscription: string | null;
      subscription_item: string;
    } | null;
    type: "invoice_item_details" | "subscription_item_details";
  } | null;
  period: { end: number; start: number };
  pretax_credit_amounts:
    | {
        amount: number;
        credit_balance_transaction?:
          | string
          | {
              created: number;
              credit: {
                amount: {
                  monetary: { currency: string; value: number } | null;
                  type: "monetary";
                };
                credits_application_invoice_voided: {
                  invoice: unknown;
                  invoice_line_item: string;
                } | null;
                type: "credits_application_invoice_voided" | "credits_granted";
              } | null;
              credit_grant:
                | string
                | {
                    amount: {
                      monetary: { currency: string; value: number } | null;
                      type: "monetary";
                    };
                    applicability_config: {
                      scope: {
                        price_type?: "metered";
                        prices?: { id: string | null }[];
                      };
                    };
                    category: "paid" | "promotional";
                    created: number;
                    customer: unknown;
                    customer_account: string | null;
                    effective_at: number | null;
                    expires_at: number | null;
                    id: string;
                    livemode: boolean;
                    metadata: Record<string, string>;
                    name: string | null;
                    object: "billing.credit_grant";
                    priority: number | null;
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
                          status_details: {
                            advancing?: { target_frozen_time: number };
                          };
                        }
                      | null;
                    updated: number;
                    voided_at: number | null;
                  };
              debit: {
                amount: {
                  monetary: { currency: string; value: number } | null;
                  type: "monetary";
                };
                credits_applied: {
                  invoice: unknown;
                  invoice_line_item: string;
                } | null;
                type: "credits_applied" | "credits_expired" | "credits_voided";
              } | null;
              effective_at: number;
              id: string;
              livemode: boolean;
              object: "billing.credit_balance_transaction";
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
                    status_details: {
                      advancing?: { target_frozen_time: number };
                    };
                  }
                | null;
              type: "credit" | "debit" | null;
            }
          | null;
        discount?:
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
                            currency_options?: Record<
                              string,
                              { amount_off: number }
                            >;
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
                      currency_options?: Record<
                        string,
                        { minimum_amount: number }
                      >;
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
          | {
              checkout_session: string | null;
              customer: unknown;
              customer_account: string | null;
              deleted: true;
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
                            currency_options?: Record<
                              string,
                              { amount_off: number }
                            >;
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
                      currency_options?: Record<
                        string,
                        { minimum_amount: number }
                      >;
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
        type: "credit_balance_transaction" | "discount";
      }[]
    | null;
  pricing: {
    price_details?: {
      price:
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
            transform_quantity: {
              divide_by: number;
              round: "down" | "up";
            } | null;
            type: "one_time" | "recurring";
            unit_amount: number | null;
            unit_amount_decimal: string | null;
          };
      product: string;
    };
    type: "price_details";
    unit_amount_decimal: string | null;
  } | null;
  quantity: number | null;
  quantity_decimal: string | null;
  subscription: unknown;
  subtotal: number;
  taxes:
    | {
        amount: number;
        tax_behavior: "exclusive" | "inclusive";
        tax_rate_details: {
          tax_rate:
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
              };
        } | null;
        taxability_reason:
          | "customer_exempt"
          | "not_available"
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
          | "zero_rated";
        taxable_amount: number | null;
        type: "tax_rate_details";
      }[]
    | null;
}
export const PostInvoicesInvoiceLinesLineItemIdOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    description: Schema.NullOr(Schema.String),
    discount_amounts: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          discount: Schema.Unknown,
        }),
      ),
    ),
    discountable: Schema.Boolean,
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
    invoice: Schema.NullOr(Schema.String),
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["line_item"]),
    parent: Schema.NullOr(
      Schema.Struct({
        invoice_item_details: Schema.NullOr(
          Schema.Struct({
            invoice_item: Schema.String,
            proration: Schema.Boolean,
            proration_details: Schema.NullOr(
              Schema.Struct({
                credited_items: Schema.NullOr(
                  Schema.Struct({
                    invoice: Schema.String,
                    invoice_line_items: Schema.Array(Schema.String),
                  }),
                ),
              }),
            ),
            subscription: Schema.NullOr(Schema.String),
          }),
        ),
        subscription_item_details: Schema.NullOr(
          Schema.Struct({
            invoice_item: Schema.NullOr(Schema.String),
            proration: Schema.Boolean,
            proration_details: Schema.NullOr(
              Schema.Struct({
                credited_items: Schema.NullOr(
                  Schema.Struct({
                    invoice: Schema.String,
                    invoice_line_items: Schema.Array(Schema.String),
                  }),
                ),
              }),
            ),
            subscription: Schema.NullOr(Schema.String),
            subscription_item: Schema.String,
          }),
        ),
        type: Schema.Literals([
          "invoice_item_details",
          "subscription_item_details",
        ]),
      }),
    ),
    period: Schema.Struct({
      end: Schema.Number,
      start: Schema.Number,
    }),
    pretax_credit_amounts: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          credit_balance_transaction: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.String,
                Schema.Struct({
                  created: Schema.Number,
                  credit: Schema.NullOr(
                    Schema.Struct({
                      amount: Schema.Struct({
                        monetary: Schema.NullOr(
                          Schema.Struct({
                            currency: Schema.String,
                            value: Schema.Number,
                          }),
                        ),
                        type: Schema.Literals(["monetary"]),
                      }),
                      credits_application_invoice_voided: Schema.NullOr(
                        Schema.Struct({
                          invoice: Schema.Unknown,
                          invoice_line_item: Schema.String,
                        }),
                      ),
                      type: Schema.Literals([
                        "credits_application_invoice_voided",
                        "credits_granted",
                      ]),
                    }),
                  ),
                  credit_grant: Schema.Union([
                    Schema.String,
                    Schema.Struct({
                      amount: Schema.Struct({
                        monetary: Schema.NullOr(
                          Schema.Struct({
                            currency: Schema.String,
                            value: Schema.Number,
                          }),
                        ),
                        type: Schema.Literals(["monetary"]),
                      }),
                      applicability_config: Schema.Struct({
                        scope: Schema.Struct({
                          price_type: Schema.optional(
                            Schema.Literals(["metered"]),
                          ),
                          prices: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                id: Schema.NullOr(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      }),
                      category: Schema.Literals(["paid", "promotional"]),
                      created: Schema.Number,
                      customer: Schema.Unknown,
                      customer_account: Schema.NullOr(Schema.String),
                      effective_at: Schema.NullOr(Schema.Number),
                      expires_at: Schema.NullOr(Schema.Number),
                      id: Schema.String,
                      livemode: Schema.Boolean,
                      metadata: Schema.Record(Schema.String, Schema.String),
                      name: Schema.NullOr(Schema.String),
                      object: Schema.Literals(["billing.credit_grant"]),
                      priority: Schema.NullOr(Schema.Number),
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
                            object: Schema.Literals([
                              "test_helpers.test_clock",
                            ]),
                            status: Schema.Literals([
                              "advancing",
                              "internal_failure",
                              "ready",
                            ]),
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
                      updated: Schema.Number,
                      voided_at: Schema.NullOr(Schema.Number),
                    }),
                  ]),
                  debit: Schema.NullOr(
                    Schema.Struct({
                      amount: Schema.Struct({
                        monetary: Schema.NullOr(
                          Schema.Struct({
                            currency: Schema.String,
                            value: Schema.Number,
                          }),
                        ),
                        type: Schema.Literals(["monetary"]),
                      }),
                      credits_applied: Schema.NullOr(
                        Schema.Struct({
                          invoice: Schema.Unknown,
                          invoice_line_item: Schema.String,
                        }),
                      ),
                      type: Schema.Literals([
                        "credits_applied",
                        "credits_expired",
                        "credits_voided",
                      ]),
                    }),
                  ),
                  effective_at: Schema.Number,
                  id: Schema.String,
                  livemode: Schema.Boolean,
                  object: Schema.Literals([
                    "billing.credit_balance_transaction",
                  ]),
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
                        status: Schema.Literals([
                          "advancing",
                          "internal_failure",
                          "ready",
                        ]),
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
                  type: Schema.NullOr(Schema.Literals(["credit", "debit"])),
                }),
              ]),
            ),
          ),
          discount: Schema.optional(Schema.Unknown),
          type: Schema.Literals(["credit_balance_transaction", "discount"]),
        }),
      ),
    ),
    pricing: Schema.NullOr(
      Schema.Struct({
        price_details: Schema.optional(
          Schema.Struct({
            price: Schema.Unknown,
            product: Schema.String,
          }),
        ),
        type: Schema.Literals(["price_details"]),
        unit_amount_decimal: Schema.NullOr(Schema.String),
      }),
    ),
    quantity: Schema.NullOr(Schema.Number),
    quantity_decimal: Schema.NullOr(Schema.String),
    subscription: Schema.Unknown,
    subtotal: Schema.Number,
    taxes: Schema.NullOr(
      Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
          tax_rate_details: Schema.NullOr(
            Schema.Struct({
              tax_rate: Schema.Union([
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
              ]),
            }),
          ),
          taxability_reason: Schema.Literals([
            "customer_exempt",
            "not_available",
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
          taxable_amount: Schema.NullOr(Schema.Number),
          type: Schema.Literals(["tax_rate_details"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PostInvoicesInvoiceLinesLineItemIdOutput>;

// The operation
/**
 * Update an invoice's line item
 *
 * <p>Updates an invoice’s line item. Some fields, such as <code>tax_amounts</code>, only live on the invoice line item,
 * so they can only be updated through this endpoint. Other fields, such as <code>amount</code>, live on both the invoice
 * item and the invoice line item, so updates on this endpoint will propagate to the invoice item as well.
 * Updating an invoice’s line item is only possible before the invoice is finalized.</p>
 *
 * @param invoice - Invoice ID of line item
 * @param line_item_id - Invoice line item ID
 */
export const PostInvoicesInvoiceLinesLineItemId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostInvoicesInvoiceLinesLineItemIdInput,
    outputSchema: PostInvoicesInvoiceLinesLineItemIdOutput,
  }));
