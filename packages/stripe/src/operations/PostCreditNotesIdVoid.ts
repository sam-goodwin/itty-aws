import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostCreditNotesIdVoidInput {
  id: string;
  expand?: string[];
}
export const PostCreditNotesIdVoidInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/credit_notes/{id}/void",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCreditNotesIdVoidInput>;

// Output Schema
export interface PostCreditNotesIdVoidOutput {
  amount: number;
  amount_shipping: number;
  created: number;
  currency: string;
  customer: unknown;
  customer_account: string | null;
  customer_balance_transaction:
    | string
    | {
        amount: number;
        checkout_session: unknown;
        created: number;
        credit_note: unknown;
        currency: string;
        customer: unknown;
        customer_account: string | null;
        description: string | null;
        ending_balance: number;
        id: string;
        invoice: unknown;
        livemode: boolean;
        metadata: Record<string, string> | null;
        object: "customer_balance_transaction";
        type:
          | "adjustment"
          | "applied_to_invoice"
          | "checkout_session_subscription_payment"
          | "checkout_session_subscription_payment_canceled"
          | "credit_note"
          | "initial"
          | "invoice_overpaid"
          | "invoice_too_large"
          | "invoice_too_small"
          | "migration"
          | "unapplied_from_invoice"
          | "unspent_receiver_credit";
      }
    | null;
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
  effective_at: number | null;
  id: string;
  invoice: unknown;
  lines: {
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
  };
  livemode: boolean;
  memo: string | null;
  metadata: Record<string, string> | null;
  number: string;
  object: "credit_note";
  out_of_band_amount: number | null;
  pdf: string;
  post_payment_amount: number;
  pre_payment_amount: number;
  pretax_credit_amounts: {
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
                status_details: { advancing?: { target_frozen_time: number } };
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
    type: "credit_balance_transaction" | "discount";
  }[];
  reason:
    | "duplicate"
    | "fraudulent"
    | "order_change"
    | "product_unsatisfactory"
    | null;
  refunds: {
    amount_refunded: number;
    payment_record_refund: {
      payment_record: string;
      refund_group: string;
    } | null;
    refund: unknown;
    type: "payment_record_refund" | "refund" | null;
  }[];
  shipping_cost: {
    amount_subtotal: number;
    amount_tax: number;
    amount_total: number;
    shipping_rate:
      | string
      | {
          active: boolean;
          created: number;
          delivery_estimate: {
            maximum: {
              unit: "business_day" | "day" | "hour" | "month" | "week";
              value: number;
            } | null;
            minimum: {
              unit: "business_day" | "day" | "hour" | "month" | "week";
              value: number;
            } | null;
          } | null;
          display_name: string | null;
          fixed_amount?: {
            amount: number;
            currency: string;
            currency_options?: Record<
              string,
              {
                amount: number;
                tax_behavior: "exclusive" | "inclusive" | "unspecified";
              }
            >;
          };
          id: string;
          livemode: boolean;
          metadata: Record<string, string>;
          object: "shipping_rate";
          tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
          tax_code:
            | string
            | {
                description: string;
                id: string;
                name: string;
                object: "tax_code";
              }
            | null;
          type: "fixed_amount";
        }
      | null;
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
  } | null;
  status: "issued" | "void";
  subtotal: number;
  subtotal_excluding_tax: number | null;
  total: number;
  total_excluding_tax: number | null;
  total_taxes:
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
  type: "mixed" | "post_payment" | "pre_payment";
  voided_at: number | null;
}
export const PostCreditNotesIdVoidOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_shipping: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_balance_transaction: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          amount: Schema.Number,
          checkout_session: Schema.Unknown,
          created: Schema.Number,
          credit_note: Schema.Unknown,
          currency: Schema.String,
          customer: Schema.Unknown,
          customer_account: Schema.NullOr(Schema.String),
          description: Schema.NullOr(Schema.String),
          ending_balance: Schema.Number,
          id: Schema.String,
          invoice: Schema.Unknown,
          livemode: Schema.Boolean,
          metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          object: Schema.Literals(["customer_balance_transaction"]),
          type: Schema.Literals([
            "adjustment",
            "applied_to_invoice",
            "checkout_session_subscription_payment",
            "checkout_session_subscription_payment_canceled",
            "credit_note",
            "initial",
            "invoice_overpaid",
            "invoice_too_large",
            "invoice_too_small",
            "migration",
            "unapplied_from_invoice",
            "unspent_receiver_credit",
          ]),
        }),
      ]),
    ),
    discount_amount: Schema.Number,
    discount_amounts: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        discount: Schema.Unknown,
      }),
    ),
    effective_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    invoice: Schema.Unknown,
    lines: Schema.Struct({
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
    }),
    livemode: Schema.Boolean,
    memo: Schema.NullOr(Schema.String),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    number: Schema.String,
    object: Schema.Literals(["credit_note"]),
    out_of_band_amount: Schema.NullOr(Schema.Number),
    pdf: Schema.String,
    post_payment_amount: Schema.Number,
    pre_payment_amount: Schema.Number,
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
                      price_type: Schema.optional(Schema.Literals(["metered"])),
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
              object: Schema.Literals(["billing.credit_balance_transaction"]),
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
    reason: Schema.NullOr(
      Schema.Literals([
        "duplicate",
        "fraudulent",
        "order_change",
        "product_unsatisfactory",
      ]),
    ),
    refunds: Schema.Array(
      Schema.Struct({
        amount_refunded: Schema.Number,
        payment_record_refund: Schema.NullOr(
          Schema.Struct({
            payment_record: Schema.String,
            refund_group: Schema.String,
          }),
        ),
        refund: Schema.Unknown,
        type: Schema.NullOr(
          Schema.Literals(["payment_record_refund", "refund"]),
        ),
      }),
    ),
    shipping_cost: Schema.NullOr(
      Schema.Struct({
        amount_subtotal: Schema.Number,
        amount_tax: Schema.Number,
        amount_total: Schema.Number,
        shipping_rate: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              active: Schema.Boolean,
              created: Schema.Number,
              delivery_estimate: Schema.NullOr(
                Schema.Struct({
                  maximum: Schema.NullOr(
                    Schema.Struct({
                      unit: Schema.Literals([
                        "business_day",
                        "day",
                        "hour",
                        "month",
                        "week",
                      ]),
                      value: Schema.Number,
                    }),
                  ),
                  minimum: Schema.NullOr(
                    Schema.Struct({
                      unit: Schema.Literals([
                        "business_day",
                        "day",
                        "hour",
                        "month",
                        "week",
                      ]),
                      value: Schema.Number,
                    }),
                  ),
                }),
              ),
              display_name: Schema.NullOr(Schema.String),
              fixed_amount: Schema.optional(
                Schema.Struct({
                  amount: Schema.Number,
                  currency: Schema.String,
                  currency_options: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        amount: Schema.Number,
                        tax_behavior: Schema.Literals([
                          "exclusive",
                          "inclusive",
                          "unspecified",
                        ]),
                      }),
                    ),
                  ),
                }),
              ),
              id: Schema.String,
              livemode: Schema.Boolean,
              metadata: Schema.Record(Schema.String, Schema.String),
              object: Schema.Literals(["shipping_rate"]),
              tax_behavior: Schema.NullOr(
                Schema.Literals(["exclusive", "inclusive", "unspecified"]),
              ),
              tax_code: Schema.NullOr(
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
              type: Schema.Literals(["fixed_amount"]),
            }),
          ]),
        ),
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
    status: Schema.Literals(["issued", "void"]),
    subtotal: Schema.Number,
    subtotal_excluding_tax: Schema.NullOr(Schema.Number),
    total: Schema.Number,
    total_excluding_tax: Schema.NullOr(Schema.Number),
    total_taxes: Schema.NullOr(
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
    type: Schema.Literals(["mixed", "post_payment", "pre_payment"]),
    voided_at: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<PostCreditNotesIdVoidOutput>;

// The operation
/**
 * Void a credit note
 *
 * <p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>
 */
export const PostCreditNotesIdVoid = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostCreditNotesIdVoidInput,
    outputSchema: PostCreditNotesIdVoidOutput,
  }),
);
