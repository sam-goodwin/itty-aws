import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const RefundslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  organization_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  order_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  subscription_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  customer_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  external_customer_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  succeeded: Schema.optional(Schema.String).pipe(T.QueryParam()),
  page: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  limit: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  sorting: Schema.optional(Schema.String).pipe(T.QueryParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/refunds/" }));
export type RefundslistInput = typeof RefundslistInput.Type;

// Output Schema
export const RefundslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      metadata: Schema.Record(Schema.String, Schema.Unknown),
      status: Schema.Literals(["pending", "succeeded", "failed", "canceled"]),
      reason: Schema.Literals([
        "duplicate",
        "fraudulent",
        "customer_request",
        "service_disruption",
        "satisfaction_guarantee",
        "dispute_prevention",
        "other",
      ]),
      amount: Schema.Number,
      tax_amount: Schema.Number,
      currency: Schema.String,
      organization_id: Schema.String,
      order_id: Schema.String,
      subscription_id: Schema.NullOr(Schema.String),
      customer_id: Schema.String,
      revoke_benefits: Schema.Boolean,
      dispute: Schema.NullOr(
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
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type RefundslistOutput = typeof RefundslistOutput.Type;

// The operation
/**
 * List Refunds
 *
 * List refunds.
 * **Scopes**: `refunds:read` `refunds:write`
 *
 * @param id - Filter by refund ID.
 * @param organization_id - Filter by organization ID.
 * @param order_id - Filter by order ID.
 * @param subscription_id - Filter by subscription ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param succeeded - Filter by `succeeded`.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const refundslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RefundslistInput,
  outputSchema: RefundslistOutput,
  errors: [UnprocessableEntity] as const,
}));
