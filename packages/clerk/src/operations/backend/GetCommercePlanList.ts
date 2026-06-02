import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const GetCommercePlanListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paginated: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    payer_type: Schema.optional(Schema.Literals(["user", "org"])),
  }).pipe(T.Http({ method: "GET", path: "/billing/plans" }));
export type GetCommercePlanListInput = typeof GetCommercePlanListInput.Type;

// Output Schema
export const GetCommercePlanListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
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
    total_count: Schema.Number,
  });
export type GetCommercePlanListOutput = typeof GetCommercePlanListOutput.Type;

// The operation
/**
 * List all billing plans
 *
 * Returns a list of all billing plans for the instance. The plans are returned sorted by creation date,
 * with the newest plans appearing first. This includes both free and paid plans. Pagination is supported.
 *
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param payer_type - Filter plans by payer type
 */
export const GetCommercePlanList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCommercePlanListInput,
  outputSchema: GetCommercePlanListOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
