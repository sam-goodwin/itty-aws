import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DiscountslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/discounts/" }));
export type DiscountslistInput = typeof DiscountslistInput.Type;

// Output Schema
export const DiscountslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(Schema.Unknown),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type DiscountslistOutput = typeof DiscountslistOutput.Type;

// The operation
/**
 * List Discounts
 *
 * List discounts.
 * **Scopes**: `discounts:read` `discounts:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param query - Filter by name.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const discountslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiscountslistInput,
  outputSchema: DiscountslistOutput,
  errors: [UnprocessableEntity] as const,
}));
