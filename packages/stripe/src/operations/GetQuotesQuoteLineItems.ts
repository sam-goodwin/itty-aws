import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetQuotesQuoteLineItemsInput {
  quote: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetQuotesQuoteLineItemsInput =
  /*@__PURE__*/ Schema.Struct({
    quote: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/quotes/{quote}/line_items",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetQuotesQuoteLineItemsInput>;

// Output Schema
export interface GetQuotesQuoteLineItemsOutput {
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
}
export const GetQuotesQuoteLineItemsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetQuotesQuoteLineItemsOutput>;

// The operation
/**
 * Retrieve a quote's line items
 *
 * <p>When retrieving a quote, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetQuotesQuoteLineItems = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetQuotesQuoteLineItemsInput,
  outputSchema: GetQuotesQuoteLineItemsOutput,
}));
