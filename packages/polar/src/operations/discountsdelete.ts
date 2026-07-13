import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DiscountsdeleteInput {
  id: string;
}
export const DiscountsdeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v1/discounts/{id}" }),
) as unknown as Schema.Codec<DiscountsdeleteInput>;

// Output Schema
export type DiscountsdeleteOutput = void;
export const DiscountsdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DiscountsdeleteOutput>;

// The operation
/**
 * Delete Discount
 *
 * Delete a discount.
 * **Scopes**: `discounts:write`
 *
 * @param id - The discount ID.
 */
export const discountsdelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiscountsdeleteInput,
  outputSchema: DiscountsdeleteOutput,
}));
