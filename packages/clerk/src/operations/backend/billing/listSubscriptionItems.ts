import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const ListSubscriptionItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paginated: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    status: Schema.optional(
      Schema.Literals([
        "active",
        "ended",
        "past_due",
        "upcoming",
        "free_trial",
      ]),
    ),
    payer_type: Schema.optional(Schema.Literals(["user", "org"])),
    plan_id: Schema.optional(Schema.String),
    include_free: Schema.optional(Schema.Boolean),
    query: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/billing/subscription_items" }));
export type ListSubscriptionItemsInput = typeof ListSubscriptionItemsInput.Type;

// Output Schema
export const ListSubscriptionItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["commerce_subscription_item"]),
        id: Schema.String,
        instance_id: Schema.String,
        status: Schema.Literals([
          "active",
          "canceled",
          "expired",
          "ended",
          "past_due",
          "upcoming",
          "incomplete",
          "abandoned",
        ]),
        credit: Schema.optional(
          Schema.Struct({
            amount: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  amount: Schema.Number,
                  amount_formatted: Schema.String,
                  currency: Schema.String,
                  currency_symbol: Schema.String,
                }),
              ),
            ),
            cycle_remaining_percent: Schema.optional(Schema.Number),
          }),
        ),
        credits: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              proration: Schema.NullOr(
                Schema.Struct({
                  amount: Schema.Struct({
                    amount: Schema.Number,
                    amount_formatted: Schema.String,
                    currency: Schema.String,
                    currency_symbol: Schema.String,
                  }),
                  cycle_days_remaining: Schema.Number,
                  cycle_days_total: Schema.Number,
                  cycle_remaining_percent: Schema.Number,
                }),
              ),
              payer: Schema.NullOr(
                Schema.Struct({
                  remaining_balance: Schema.Struct({
                    amount: Schema.Number,
                    amount_formatted: Schema.String,
                    currency: Schema.String,
                    currency_symbol: Schema.String,
                  }),
                  applied_amount: Schema.Struct({
                    amount: Schema.Number,
                    amount_formatted: Schema.String,
                    currency: Schema.String,
                    currency_symbol: Schema.String,
                  }),
                }),
              ),
              total: Schema.Struct({
                amount: Schema.Number,
                amount_formatted: Schema.String,
                currency: Schema.String,
                currency_symbol: Schema.String,
              }),
            }),
          ),
        ),
        plan_id: Schema.NullOr(Schema.String),
        price_id: Schema.optional(Schema.String),
        plan: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              object: Schema.Literals(["commerce_plan"]),
              id: Schema.String,
              name: Schema.String,
              fee: Schema.NullOr(
                Schema.Struct({
                  amount: Schema.Number,
                  amount_formatted: Schema.String,
                  currency: Schema.String,
                  currency_symbol: Schema.String,
                }),
              ),
              annual_monthly_fee: Schema.NullOr(
                Schema.Struct({
                  amount: Schema.Number,
                  amount_formatted: Schema.String,
                  currency: Schema.String,
                  currency_symbol: Schema.String,
                }),
              ),
              annual_fee: Schema.NullOr(
                Schema.Struct({
                  amount: Schema.Number,
                  amount_formatted: Schema.String,
                  currency: Schema.String,
                  currency_symbol: Schema.String,
                }),
              ),
              description: Schema.NullOr(Schema.String),
              product_id: Schema.String,
              is_default: Schema.Boolean,
              is_recurring: Schema.Boolean,
              publicly_visible: Schema.Boolean,
              has_base_fee: Schema.Boolean,
              for_payer_type: Schema.String,
              slug: Schema.String,
              avatar_url: Schema.NullOr(Schema.String),
              features: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    object: Schema.Literals(["feature"]),
                    id: Schema.String,
                    name: Schema.String,
                    description: Schema.NullOr(Schema.String),
                    slug: Schema.String,
                    avatar_url: Schema.NullOr(Schema.String),
                  }),
                ),
              ),
              free_trial_enabled: Schema.Boolean,
              free_trial_days: Schema.NullOr(Schema.Number),
              unit_prices: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    block_size: Schema.Number,
                    tiers: Schema.Array(
                      Schema.Struct({
                        starts_at_block: Schema.Number,
                        ends_after_block: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                        fee_per_block: Schema.Struct({
                          amount: Schema.Number,
                          amount_formatted: Schema.String,
                          currency: Schema.String,
                          currency_symbol: Schema.String,
                        }),
                      }),
                    ),
                  }),
                ),
              ),
            }),
          ),
        ),
        plan_period: Schema.Literals(["month", "annual"]),
        payment_method: Schema.optional(
          Schema.Struct({
            object: Schema.Literals(["commerce_payment_method"]),
            id: Schema.String,
            payer_id: Schema.String,
            payment_type: Schema.Literals(["card", "link"]),
            is_default: Schema.optional(Schema.Boolean),
            gateway: Schema.String,
            gateway_external_id: Schema.String,
            gateway_external_account_id: Schema.NullOr(Schema.String),
            last4: Schema.NullOr(Schema.String),
            status: Schema.Literals(["active", "disconnected"]),
            wallet_type: Schema.optional(Schema.NullOr(Schema.String)),
            card_type: Schema.NullOr(Schema.String),
            expiry_year: Schema.optional(Schema.NullOr(Schema.Number)),
            expiry_month: Schema.optional(Schema.NullOr(Schema.Number)),
            created_at: Schema.optional(Schema.Number),
            updated_at: Schema.optional(Schema.Number),
            is_removable: Schema.optional(Schema.Boolean),
          }),
        ),
        lifetime_paid: Schema.optional(
          Schema.Struct({
            amount: Schema.Number,
            amount_formatted: Schema.String,
            currency: Schema.String,
            currency_symbol: Schema.String,
          }),
        ),
        next_payment: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              amount: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    amount: Schema.Number,
                    amount_formatted: Schema.String,
                    currency: Schema.String,
                    currency_symbol: Schema.String,
                  }),
                ),
              ),
              date: Schema.optional(Schema.NullOr(Schema.Number)),
            }),
          ),
        ),
        payer_id: Schema.String,
        payer: Schema.optional(
          Schema.Struct({
            object: Schema.Literals(["commerce_payer"]),
            id: Schema.String,
            instance_id: Schema.String,
            user_id: Schema.optional(Schema.NullOr(Schema.String)),
            first_name: Schema.optional(Schema.NullOr(Schema.String)),
            last_name: Schema.optional(Schema.NullOr(Schema.String)),
            email: Schema.optional(Schema.NullOr(Schema.String)),
            organization_id: Schema.optional(Schema.NullOr(Schema.String)),
            organization_name: Schema.optional(Schema.NullOr(Schema.String)),
            image_url: Schema.optional(Schema.String),
            credits_balance: Schema.optional(
              Schema.Struct({
                amount: Schema.Number,
                amount_formatted: Schema.String,
                currency: Schema.String,
                currency_symbol: Schema.String,
              }),
            ),
            created_at: Schema.optional(Schema.Number),
            updated_at: Schema.optional(Schema.Number),
          }),
        ),
        is_free_trial: Schema.Boolean,
        period_start: Schema.Number,
        period_end: Schema.NullOr(Schema.Number),
        proration_date: Schema.optional(Schema.String),
        canceled_at: Schema.NullOr(Schema.Number),
        past_due_at: Schema.NullOr(Schema.Number),
        ended_at: Schema.NullOr(Schema.Number),
        created_at: Schema.optional(Schema.Number),
        updated_at: Schema.optional(Schema.Number),
        seats: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              quantity: Schema.NullOr(Schema.Number),
              tiers: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    quantity: Schema.optional(Schema.NullOr(Schema.Number)),
                    fee_per_block: Schema.Struct({
                      amount: Schema.Number,
                      amount_formatted: Schema.String,
                      currency: Schema.String,
                      currency_symbol: Schema.String,
                    }),
                    total: Schema.Struct({
                      amount: Schema.Number,
                      amount_formatted: Schema.String,
                      currency: Schema.String,
                      currency_symbol: Schema.String,
                    }),
                  }),
                ),
              ),
            }),
          ),
        ),
        totals: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              subtotal: Schema.Struct({
                amount: Schema.Number,
                amount_formatted: Schema.String,
                currency: Schema.String,
                currency_symbol: Schema.String,
              }),
              base_fee: Schema.Struct({
                amount: Schema.Number,
                amount_formatted: Schema.String,
                currency: Schema.String,
                currency_symbol: Schema.String,
              }),
              tax_total: Schema.Struct({
                amount: Schema.Number,
                amount_formatted: Schema.String,
                currency: Schema.String,
                currency_symbol: Schema.String,
              }),
              grand_total: Schema.Struct({
                amount: Schema.Number,
                amount_formatted: Schema.String,
                currency: Schema.String,
                currency_symbol: Schema.String,
              }),
              per_unit_totals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    block_size: Schema.Number,
                    tiers: Schema.Array(
                      Schema.Struct({
                        quantity: Schema.optional(Schema.NullOr(Schema.Number)),
                        fee_per_block: Schema.Struct({
                          amount: Schema.Number,
                          amount_formatted: Schema.String,
                          currency: Schema.String,
                          currency_symbol: Schema.String,
                        }),
                        total: Schema.Struct({
                          amount: Schema.Number,
                          amount_formatted: Schema.String,
                          currency: Schema.String,
                          currency_symbol: Schema.String,
                        }),
                      }),
                    ),
                  }),
                ),
              ),
              credits: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    proration: Schema.NullOr(
                      Schema.Struct({
                        amount: Schema.Struct({
                          amount: Schema.Number,
                          amount_formatted: Schema.String,
                          currency: Schema.String,
                          currency_symbol: Schema.String,
                        }),
                        cycle_days_remaining: Schema.Number,
                        cycle_days_total: Schema.Number,
                        cycle_remaining_percent: Schema.Number,
                      }),
                    ),
                    payer: Schema.NullOr(
                      Schema.Struct({
                        remaining_balance: Schema.Struct({
                          amount: Schema.Number,
                          amount_formatted: Schema.String,
                          currency: Schema.String,
                          currency_symbol: Schema.String,
                        }),
                        applied_amount: Schema.Struct({
                          amount: Schema.Number,
                          amount_formatted: Schema.String,
                          currency: Schema.String,
                          currency_symbol: Schema.String,
                        }),
                      }),
                    ),
                    total: Schema.Struct({
                      amount: Schema.Number,
                      amount_formatted: Schema.String,
                      currency: Schema.String,
                      currency_symbol: Schema.String,
                    }),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    total_count: Schema.Number,
  });
export type ListSubscriptionItemsOutput =
  typeof ListSubscriptionItemsOutput.Type;

// The operation
/**
 * List all subscription items
 *
 * Returns a list of all subscription items for the instance. The subscription items are returned sorted by creation date,
 * with the newest appearing first. This includes subscriptions for both users and organizations. Pagination is supported.
 *
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param status - Filter subscription items by status
 * @param payer_type - Filter subscription items by payer type
 * @param plan_id - Filter subscription items by plan ID
 * @param include_free - Whether to include free plan subscription items
 * @param query - Search query to filter subscription items
 */
export const listSubscriptionItems = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListSubscriptionItemsInput,
    outputSchema: ListSubscriptionItemsOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }),
);
