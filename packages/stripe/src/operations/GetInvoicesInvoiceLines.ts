import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetInvoicesInvoiceLinesInput {
  invoice: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetInvoicesInvoiceLinesInput =
  /*@__PURE__*/ Schema.Struct({
    invoice: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/invoices/{invoice}/lines",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetInvoicesInvoiceLinesInput>;

// Output Schema
export interface GetInvoicesInvoiceLinesOutput {
  data: {
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
                      promotion: { coupon: unknown; type: "coupon" };
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
                      promotion: { coupon: unknown; type: "coupon" };
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
                  amount: { monetary: unknown; type: "monetary" };
                  credits_application_invoice_voided: {
                    invoice: unknown;
                    invoice_line_item: string;
                  } | null;
                  type:
                    | "credits_application_invoice_voided"
                    | "credits_granted";
                } | null;
                credit_grant:
                  | string
                  | {
                      amount: { monetary: unknown; type: "monetary" };
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
                  amount: { monetary: unknown; type: "monetary" };
                  credits_applied: {
                    invoice: unknown;
                    invoice_line_item: string;
                  } | null;
                  type:
                    | "credits_applied"
                    | "credits_expired"
                    | "credits_voided";
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
                      promotion: { coupon: unknown; type: "coupon" };
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
                      promotion: { coupon: unknown; type: "coupon" };
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
                  custom_unit_amount: unknown;
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
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetInvoicesInvoiceLinesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
                            monetary: Schema.Unknown,
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
                            monetary: Schema.Unknown,
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
                            monetary: Schema.Unknown,
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
        pricing: Schema.Unknown,
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
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetInvoicesInvoiceLinesOutput>;

// The operation
/**
 * Retrieve an invoice's line items
 *
 * <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetInvoicesInvoiceLines = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetInvoicesInvoiceLinesInput,
  outputSchema: GetInvoicesInvoiceLinesOutput,
}));
