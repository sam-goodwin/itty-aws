import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DiscountslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  query?: string | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "name"
    | "-name"
    | "code"
    | "-code"
    | "redemptions_count"
    | "-redemptions_count"
    | "ends_at"
    | "-ends_at"
  > | null;
}
export const DiscountslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  query: Schema.optional(Schema.NullOr(Schema.String)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "created_at",
          "-created_at",
          "name",
          "-name",
          "code",
          "-code",
          "redemptions_count",
          "-redemptions_count",
          "ends_at",
          "-ends_at",
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/discounts/" }),
) as unknown as Schema.Codec<DiscountslistInput>;

// Output Schema
export interface DiscountslistOutput {
  items: ReadonlyArray<unknown>;
  pagination: { total_count: number; max_page: number };
}
export const DiscountslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(Schema.Unknown),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<DiscountslistOutput>;

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
}));
