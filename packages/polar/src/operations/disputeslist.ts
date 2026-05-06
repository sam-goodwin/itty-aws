import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DisputeslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  order_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  status: Schema.optional(Schema.String).pipe(T.QueryParam()),
  page: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  limit: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  sorting: Schema.optional(Schema.String).pipe(T.QueryParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/disputes/" }));
export type DisputeslistInput = typeof DisputeslistInput.Type;

// Output Schema
export const DisputeslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      status: Schema.Literals([
        "prevented",
        "early_warning",
        "needs_response",
        "under_review",
        "lost",
        "won",
      ]),
      resolved: Schema.Boolean,
      closed: Schema.Boolean,
      amount: Schema.Number,
      tax_amount: Schema.Number,
      currency: Schema.String,
      order_id: Schema.String,
      payment_id: Schema.String,
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type DisputeslistOutput = typeof DisputeslistOutput.Type;

// The operation
/**
 * List Disputes
 *
 * List disputes.
 * **Scopes**: `disputes:read`
 *
 * @param organization_id - Filter by organization ID.
 * @param order_id - Filter by order ID.
 * @param status - Filter by dispute status.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const disputeslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisputeslistInput,
  outputSchema: DisputeslistOutput,
  errors: [UnprocessableEntity] as const,
}));
