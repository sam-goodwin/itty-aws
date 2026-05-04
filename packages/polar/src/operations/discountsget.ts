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
export const DiscountsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
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
