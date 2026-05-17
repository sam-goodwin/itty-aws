import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DiscountsdeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v1/discounts/{id}" }));
export type DiscountsdeleteInput = typeof DiscountsdeleteInput.Type;

// Output Schema
export const DiscountsdeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DiscountsdeleteOutput = typeof DiscountsdeleteOutput.Type;

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
  errors: [NotFound, UnprocessableEntity] as const,
}));
