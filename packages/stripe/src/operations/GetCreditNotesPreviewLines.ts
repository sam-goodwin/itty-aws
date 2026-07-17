import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetCreditNotesPreviewLinesInput {
  amount?: number;
  credit_amount?: number;
  effective_at?: number;
  email_type?: "credit_note" | "none";
  ending_before?: string;
  expand?: string;
  invoice: string;
  limit?: number;
  lines?: string;
  memo?: string;
  metadata?: string;
  out_of_band_amount?: number;
  reason?:
    | "duplicate"
    | "fraudulent"
    | "order_change"
    | "product_unsatisfactory";
  refund_amount?: number;
  refunds?: string;
  shipping_cost?: string;
  starting_after?: string;
}
export const GetCreditNotesPreviewLinesInput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.optional(Schema.Number),
    credit_amount: Schema.optional(Schema.Number),
    effective_at: Schema.optional(Schema.Number),
    email_type: Schema.optional(Schema.Literals(["credit_note", "none"])),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    invoice: Schema.String,
    limit: Schema.optional(Schema.Number),
    lines: Schema.optional(Schema.String),
    memo: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.String),
    out_of_band_amount: Schema.optional(Schema.Number),
    reason: Schema.optional(
      Schema.Literals([
        "duplicate",
        "fraudulent",
        "order_change",
        "product_unsatisfactory",
      ]),
    ),
    refund_amount: Schema.optional(Schema.Number),
    refunds: Schema.optional(Schema.String),
    shipping_cost: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/credit_notes/preview/lines",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCreditNotesPreviewLinesInput>;

// Output Schema
export interface GetCreditNotesPreviewLinesOutput {
  data: {
    amount: number;
    description: string | null;
    discount_amount: number;
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
    id: string;
    invoice_line_item?: string;
    livemode: boolean;
    metadata: Record<string, string> | null;
    object: "credit_note_line_item";
    pretax_credit_amounts: {
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
              type: "credits_application_invoice_voided" | "credits_granted";
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
          };
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
      type: "credit_balance_transaction" | "discount";
    }[];
    quantity: number | null;
    tax_rates: {
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
    }[];
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
    type: "custom_line_item" | "invoice_line_item";
    unit_amount: number | null;
    unit_amount_decimal: string | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetCreditNotesPreviewLinesOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        description: Schema.NullOr(Schema.String),
        discount_amount: Schema.Number,
        discount_amounts: Schema.Array(
          Schema.Struct({
            amount: Schema.Number,
            discount: Schema.Unknown,
          }),
        ),
        id: Schema.String,
        invoice_line_item: Schema.optional(Schema.String),
        livemode: Schema.Boolean,
        metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        object: Schema.Literals(["credit_note_line_item"]),
        pretax_credit_amounts: Schema.Array(
          Schema.Struct({
            amount: Schema.Number,
            credit_balance_transaction: Schema.optional(
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
            discount: Schema.optional(Schema.Unknown),
            type: Schema.Literals(["credit_balance_transaction", "discount"]),
          }),
        ),
        quantity: Schema.NullOr(Schema.Number),
        tax_rates: Schema.Array(
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
        ),
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
        type: Schema.Literals(["custom_line_item", "invoice_line_item"]),
        unit_amount: Schema.NullOr(Schema.Number),
        unit_amount_decimal: Schema.NullOr(Schema.String),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetCreditNotesPreviewLinesOutput>;

// The operation
/**
 * Retrieve a credit note preview's line items
 *
 * <p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>
 *
 * @param amount - The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
 * @param credit_amount - The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
 * @param effective_at - The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
 * @param email_type - Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param invoice - ID of the invoice.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param lines - Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
 * @param memo - The credit note's memo appears on the credit note PDF.
 * @param metadata - Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 * @param out_of_band_amount - The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
 * @param reason - Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
 * @param refund_amount - The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
 * @param refunds - Refunds to link to this credit note.
 * @param shipping_cost - When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetCreditNotesPreviewLines = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetCreditNotesPreviewLinesInput,
  outputSchema: GetCreditNotesPreviewLinesOutput,
}));
