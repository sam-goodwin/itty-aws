import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DiscountscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.String,
    code: Schema.optional(Schema.Unknown),
    starts_at: Schema.optional(Schema.Unknown),
    ends_at: Schema.optional(Schema.Unknown),
    max_redemptions: Schema.optional(Schema.Unknown),
    products: Schema.optional(Schema.Unknown),
    organization_id: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
    duration: Schema.Literals(["once", "forever", "repeating"]),
    duration_in_months: Schema.optional(Schema.Unknown),
    amount: Schema.optional(Schema.Unknown),
    currency: Schema.optional(Schema.Unknown),
    amounts: Schema.optional(Schema.Unknown),
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.String,
    code: Schema.optional(Schema.Unknown),
    starts_at: Schema.optional(Schema.Unknown),
    ends_at: Schema.optional(Schema.Unknown),
    max_redemptions: Schema.optional(Schema.Unknown),
    products: Schema.optional(Schema.Unknown),
    organization_id: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.String),
    duration: Schema.Literals(["once", "forever", "repeating"]),
    duration_in_months: Schema.optional(Schema.Unknown),
    basis_points: Schema.Number,
  }),
]).pipe(T.Http({ method: "POST", path: "/v1/discounts/" }));
export type DiscountscreateInput = typeof DiscountscreateInput.Type;

// Output Schema
export const DiscountscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DiscountscreateOutput = typeof DiscountscreateOutput.Type;

// The operation
/**
 * Create Discount
 *
 * Create a discount.
 * **Scopes**: `discounts:write`
 */
export const discountscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiscountscreateInput,
  outputSchema: DiscountscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
