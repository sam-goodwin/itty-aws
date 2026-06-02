import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const GetBillingPriceListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paginated: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    plan_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/billing/prices" }));
export type GetBillingPriceListInput = typeof GetBillingPriceListInput.Type;

// Output Schema
export const GetBillingPriceListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
    ),
    total_count: Schema.Number,
  });
export type GetBillingPriceListOutput = typeof GetBillingPriceListOutput.Type;

// The operation
/**
 * List all billing prices
 *
 * Returns a list of all prices for the instance. The prices are returned sorted by amount ascending,
 * then by creation date descending. This includes both default and custom prices. Pagination is supported.
 *
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param plan_id - Filter prices by plan ID
 */
export const GetBillingPriceList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBillingPriceListInput,
  outputSchema: GetBillingPriceListOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
