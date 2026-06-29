import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const CreatePriceTransitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscription_item_id: Schema.String.pipe(T.PathParam()),
    from_price_id: Schema.String,
    to_price_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/billing/subscription_items/{subscription_item_id}/price_transition",
    }),
  );
export type CreatePriceTransitionInput = typeof CreatePriceTransitionInput.Type;

// Output Schema
export const CreatePriceTransitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["commerce_price_transition"]),
    subscription_item: Schema.Struct({
      object: Schema.Literals(["commerce_subscription_item"]),
      id: Schema.String,
      instance_id: Schema.String,
      status: Schema.Literals([
        "active",
        "ended",
        "past_due",
        "upcoming",
        "incomplete",
        "abandoned",
      ]),
      credit: Schema.optional(
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
            cycle_remaining_percent: Schema.optional(Schema.Number),
          }),
        ),
      ),
      plan_id: Schema.String,
      price_id: Schema.optional(Schema.String),
      plan: Schema.NullOr(
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
          amount: Schema.Number,
          amount_formatted: Schema.String,
          annual_monthly_amount: Schema.Number,
          annual_monthly_amount_formatted: Schema.String,
          annual_amount: Schema.Number,
          annual_amount_formatted: Schema.String,
          currency_symbol: Schema.String,
          currency: Schema.String,
          description: Schema.String,
          product_id: Schema.String,
          is_default: Schema.Boolean,
          is_recurring: Schema.Boolean,
          publicly_visible: Schema.Boolean,
          has_base_fee: Schema.Boolean,
          payer_type: Schema.Array(Schema.String),
          for_payer_type: Schema.String,
          slug: Schema.String,
          avatar_url: Schema.String,
          period: Schema.optional(Schema.String),
          interval: Schema.optional(Schema.Number),
          features: Schema.Array(
            Schema.Struct({
              object: Schema.Literals(["feature"]),
              id: Schema.String,
              name: Schema.String,
              description: Schema.String,
              slug: Schema.String,
              avatar_url: Schema.String,
            }),
          ),
          free_trial_enabled: Schema.optional(Schema.Boolean),
          free_trial_days: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
      plan_period: Schema.Literals(["month", "annual"]),
      payment_source_id: Schema.String,
      payment_source: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            object: Schema.Literals(["commerce_source"]),
            id: Schema.String,
            payer_id: Schema.String,
            payment_method: Schema.Literals([
              "card",
              "apple_pay",
              "google_pay",
            ]),
            is_default: Schema.optional(Schema.NullOr(Schema.Boolean)),
            gateway: Schema.String,
            gateway_external_id: Schema.String,
            gateway_external_account_id: Schema.optional(
              Schema.NullOr(Schema.String),
            ),
            last4: Schema.String,
            status: Schema.Literals(["active", "disconnected"]),
            wallet_type: Schema.String,
            card_type: Schema.String,
            expiry_year: Schema.optional(Schema.Number),
            expiry_month: Schema.optional(Schema.Number),
            created_at: Schema.Number,
            updated_at: Schema.Number,
            is_removable: Schema.optional(Schema.NullOr(Schema.Boolean)),
          }),
        ),
      ),
      lifetime_paid: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            amount: Schema.Number,
            amount_formatted: Schema.String,
            currency: Schema.String,
            currency_symbol: Schema.String,
          }),
        ),
      ),
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
      next_invoice: Schema.optional(
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
        Schema.NullOr(
          Schema.Struct({
            object: Schema.Literals(["commerce_payer"]),
            id: Schema.String,
            instance_id: Schema.String,
            user_id: Schema.optional(Schema.String),
            first_name: Schema.String,
            last_name: Schema.String,
            email: Schema.String,
            organization_id: Schema.optional(Schema.String),
            organization_name: Schema.optional(Schema.String),
            image_url: Schema.String,
            credits_balance: Schema.optional(
              Schema.Struct({
                amount: Schema.Number,
                amount_formatted: Schema.String,
                currency: Schema.String,
                currency_symbol: Schema.String,
              }),
            ),
            created_at: Schema.Number,
            updated_at: Schema.Number,
          }),
        ),
      ),
      is_free_trial: Schema.Boolean,
      period_start: Schema.optional(Schema.NullOr(Schema.Number)),
      period_end: Schema.optional(Schema.NullOr(Schema.Number)),
      proration_date: Schema.String,
      canceled_at: Schema.optional(Schema.NullOr(Schema.Number)),
      past_due_at: Schema.optional(Schema.NullOr(Schema.Number)),
      ended_at: Schema.optional(Schema.NullOr(Schema.Number)),
      created_at: Schema.Number,
      updated_at: Schema.Number,
    }),
    transition: Schema.Struct({
      previous_plan: Schema.Struct({
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
        amount: Schema.Number,
        amount_formatted: Schema.String,
        annual_monthly_amount: Schema.Number,
        annual_monthly_amount_formatted: Schema.String,
        annual_amount: Schema.Number,
        annual_amount_formatted: Schema.String,
        currency_symbol: Schema.String,
        currency: Schema.String,
        description: Schema.String,
        product_id: Schema.String,
        is_default: Schema.Boolean,
        is_recurring: Schema.Boolean,
        publicly_visible: Schema.Boolean,
        has_base_fee: Schema.Boolean,
        payer_type: Schema.Array(Schema.String),
        for_payer_type: Schema.String,
        slug: Schema.String,
        avatar_url: Schema.String,
        period: Schema.optional(Schema.String),
        interval: Schema.optional(Schema.Number),
        features: Schema.Array(
          Schema.Struct({
            object: Schema.Literals(["feature"]),
            id: Schema.String,
            name: Schema.String,
            description: Schema.String,
            slug: Schema.String,
            avatar_url: Schema.String,
          }),
        ),
        free_trial_enabled: Schema.optional(Schema.Boolean),
        free_trial_days: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
      previous_price: Schema.Struct({
        object: Schema.Literals(["commerce_price"]),
        id: Schema.String,
        plan_id: Schema.String,
        instance_id: Schema.String,
        currency: Schema.String,
        currency_symbol: Schema.String,
        amount: Schema.Number,
        annual_monthly_amount: Schema.Number,
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
        description: Schema.optional(Schema.NullOr(Schema.String)),
        is_default: Schema.Boolean,
        created_at: Schema.Number,
      }),
      effective_at: Schema.Number,
      effective_mode: Schema.Literals(["immediate", "end_of_period"]),
      next_billing_date: Schema.optional(Schema.NullOr(Schema.Number)),
      charged_immediately: Schema.Boolean,
      immediate_charge: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            amount: Schema.Number,
            amount_formatted: Schema.String,
            currency: Schema.String,
            currency_symbol: Schema.String,
          }),
        ),
      ),
      previous_subscription_item_status: Schema.Literals([
        "canceled",
        "ended",
        "abandoned",
      ]),
      previous_subscription_item_id: Schema.String,
    }),
  });
export type CreatePriceTransitionOutput =
  typeof CreatePriceTransitionOutput.Type;

// The operation
/**
 * Create a price transition for a subscription item
 *
 * Creates a price transition for the specified subscription item.
 * This may create an upcoming subscription item or activate immediately depending on plan and payer rules.
 *
 * @param subscription_item_id - The ID of the subscription item to transition
 */
export const createPriceTransition = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreatePriceTransitionInput,
    outputSchema: CreatePriceTransitionOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }),
);
