import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DiscountsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/discounts/{id}" }));
export type DiscountsgetInput = typeof DiscountsgetInput.Type;

// Output Schema
export const DiscountsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  created_at: Schema.String,
  modified_at: Schema.NullOr(Schema.String),
  metadata: Schema.Record(Schema.String, Schema.Unknown),
  name: Schema.String,
  code: Schema.NullOr(Schema.String),
  starts_at: Schema.NullOr(Schema.String),
  ends_at: Schema.NullOr(Schema.String),
  max_redemptions: Schema.NullOr(Schema.Number),
  redemptions_count: Schema.Number,
  duration: Schema.Literals(["once", "forever", "repeating"]),
  duration_in_months: Schema.optional(Schema.Number),
  type: Schema.Literals(["fixed", "percentage"]),
  amount: Schema.optional(Schema.Number),
  currency: Schema.optional(Schema.String),
  amounts: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  basis_points: Schema.optional(Schema.Number),
  organization_id: Schema.String,
  products: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
});
export type DiscountsgetOutput = typeof DiscountsgetOutput.Type;

// The operation
/**
 * Get Discount
 *
 * Get a discount by ID.
 * **Scopes**: `discounts:read` `discounts:write`
 *
 * @param id - The discount ID.
 */
export const discountsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiscountsgetInput,
  outputSchema: DiscountsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
