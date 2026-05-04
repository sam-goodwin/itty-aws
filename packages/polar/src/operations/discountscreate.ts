import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DiscountscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/v1/discounts/" }));
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
