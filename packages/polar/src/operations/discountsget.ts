import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DiscountsgetInput {
  id: string;
}
export const DiscountsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/discounts/{id}" }),
) as unknown as Schema.Codec<DiscountsgetInput>;

// Output Schema
export type DiscountsgetOutput = unknown;
export const DiscountsgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<DiscountsgetOutput>;

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
}));
