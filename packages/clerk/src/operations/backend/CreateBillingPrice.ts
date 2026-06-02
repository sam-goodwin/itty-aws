import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateBillingPriceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plan_id: Schema.String,
    currency: Schema.optional(Schema.String),
    amount: Schema.NullOr(Schema.Number),
    annual_monthly_amount: Schema.optional(Schema.NullOr(Schema.Number)),
    description: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/billing/prices" }));
export type CreateBillingPriceInput = typeof CreateBillingPriceInput.Type;

// Output Schema
export const CreateBillingPriceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CreateBillingPriceOutput = typeof CreateBillingPriceOutput.Type;

// The operation
/**
 * Create a custom billing price
 *
 * Creates a custom price for a billing plan. Custom prices allow you to offer different pricing
 * to specific customers while maintaining the same plan structure.
 */
export const CreateBillingPrice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateBillingPriceInput,
  outputSchema: CreateBillingPriceOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
