import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostInvoiceitemsInput {
  amount?: number;
  currency?: string;
  customer?: string;
  customer_account?: string;
  description?: string;
  discountable?: boolean;
  discounts?:
    | { coupon?: string; discount?: string; promotion_code?: string }[]
    | "";
  expand?: string[];
  invoice?: string;
  metadata?: Record<string, string> | "";
  period?: { end: number; start: number };
  price_data?: {
    currency: string;
    product: string;
    tax_behavior?: "exclusive" | "inclusive" | "unspecified";
    unit_amount?: number;
    unit_amount_decimal?: string;
  };
  pricing?: { price?: string };
  quantity?: number;
  quantity_decimal?: string;
  subscription?: string;
  tax_behavior?: "exclusive" | "inclusive" | "unspecified";
  tax_code?: string | "";
  tax_rates?: string[];
  unit_amount_decimal?: string;
}
export const PostInvoiceitemsInput = /*@__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.Number),
  currency: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  customer_account: Schema.optional(Schema.String),
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
  invoice: Schema.optional(Schema.String),
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
      product: Schema.String,
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
  subscription: Schema.optional(Schema.String),
  tax_behavior: Schema.optional(
    Schema.Literals(["exclusive", "inclusive", "unspecified"]),
  ),
  tax_code: Schema.optional(
    Schema.Union([Schema.String, Schema.Literals([""])]),
  ),
  tax_rates: Schema.optional(Schema.Array(Schema.String)),
  unit_amount_decimal: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/invoiceitems",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostInvoiceitemsInput>;

// Output Schema
export interface PostInvoiceitemsOutput {
  amount: number;
  currency: string;
  customer: unknown;
  customer_account: string | null;
  date: number;
  description: string | null;
  discountable: boolean;
  discounts:
    | (
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
      )[]
    | null;
  id: string;
  invoice: unknown;
  livemode: boolean;
  metadata: Record<string, string> | null;
  net_amount?: number;
  object: "invoiceitem";
  parent: {
    subscription_details: {
      subscription: string;
      subscription_item?: string;
    } | null;
    type: "subscription_details";
  } | null;
  period: { end: number; start: number };
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
  proration: boolean;
  proration_details?: {
    credited_items: {
      invoice_item?: string;
      invoice_line_item_details?: {
        invoice: string;
        invoice_line_items: string[];
      };
      type: "invoice_item" | "invoice_line_items";
    } | null;
    discount_amounts: {
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
  };
  quantity: number;
  quantity_decimal: string;
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
}
export const PostInvoiceitemsOutput = /*@__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  currency: Schema.String,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  date: Schema.Number,
  description: Schema.NullOr(Schema.String),
  discountable: Schema.Boolean,
  discounts: Schema.NullOr(
    Schema.Array(
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
  ),
  id: Schema.String,
  invoice: Schema.Unknown,
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  net_amount: Schema.optional(Schema.Number),
  object: Schema.Literals(["invoiceitem"]),
  parent: Schema.NullOr(
    Schema.Struct({
      subscription_details: Schema.NullOr(
        Schema.Struct({
          subscription: Schema.String,
          subscription_item: Schema.optional(Schema.String),
        }),
      ),
      type: Schema.Literals(["subscription_details"]),
    }),
  ),
  period: Schema.Struct({
    end: Schema.Number,
    start: Schema.Number,
  }),
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
  proration: Schema.Boolean,
  proration_details: Schema.optional(
    Schema.Struct({
      credited_items: Schema.NullOr(
        Schema.Struct({
          invoice_item: Schema.optional(Schema.String),
          invoice_line_item_details: Schema.optional(
            Schema.Struct({
              invoice: Schema.String,
              invoice_line_items: Schema.Array(Schema.String),
            }),
          ),
          type: Schema.Literals(["invoice_item", "invoice_line_items"]),
        }),
      ),
      discount_amounts: Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          discount: Schema.Unknown,
        }),
      ),
    }),
  ),
  quantity: Schema.Number,
  quantity_decimal: Schema.String,
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
}) as unknown as Schema.Codec<PostInvoiceitemsOutput>;

// The operation
/**
 * Create an invoice item
 *
 * <p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>
 */
export const PostInvoiceitems = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostInvoiceitemsInput,
  outputSchema: PostInvoiceitemsOutput,
}));
