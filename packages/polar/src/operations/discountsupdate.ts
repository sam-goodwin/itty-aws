import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DiscountsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.Unknown),
  code: Schema.optional(Schema.Unknown),
  starts_at: Schema.optional(Schema.Unknown),
  ends_at: Schema.optional(Schema.Unknown),
  max_redemptions: Schema.optional(Schema.Unknown),
  duration: Schema.optional(Schema.Unknown),
  duration_in_months: Schema.optional(Schema.Unknown),
  type: Schema.optional(Schema.Unknown),
  amount: Schema.optional(Schema.Unknown),
  currency: Schema.optional(Schema.Unknown),
  amounts: Schema.optional(Schema.Unknown),
  basis_points: Schema.optional(Schema.Unknown),
  products: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/v1/discounts/{id}" }));
export type DiscountsupdateInput = typeof DiscountsupdateInput.Type;

// Output Schema
export const DiscountsupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DiscountsupdateOutput = typeof DiscountsupdateOutput.Type;

// The operation
/**
 * Update Discount
 *
 * Update a discount.
 * **Scopes**: `discounts:write`
 *
 * @param id - The discount ID.
 */
export const discountsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiscountsupdateInput,
  outputSchema: DiscountsupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
