import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const PaymentslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  checkout_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  order_id: Schema.optional(Schema.String).pipe(T.QueryParam()),
  status: Schema.optional(Schema.String).pipe(T.QueryParam()),
  method: Schema.optional(Schema.String).pipe(T.QueryParam()),
  customer_email: Schema.optional(Schema.String).pipe(T.QueryParam()),
  page: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  limit: Schema.optional(Schema.Number).pipe(T.QueryParam()),
  sorting: Schema.optional(Schema.String).pipe(T.QueryParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/payments/" }));
export type PaymentslistInput = typeof PaymentslistInput.Type;

// Output Schema
export const PaymentslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      processor: Schema.Literals(["stripe"]),
      status: Schema.Literals(["pending", "succeeded", "failed"]),
      amount: Schema.Number,
      currency: Schema.String,
      method: Schema.String,
      decline_reason: Schema.NullOr(Schema.String),
      decline_message: Schema.NullOr(Schema.String),
      organization_id: Schema.String,
      checkout_id: Schema.NullOr(Schema.String),
      order_id: Schema.NullOr(Schema.String),
      processor_metadata: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      method_metadata: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type PaymentslistOutput = typeof PaymentslistOutput.Type;

// The operation
/**
 * List Payments
 *
 * List payments.
 * **Scopes**: `payments:read`
 *
 * @param organization_id - Filter by organization ID.
 * @param checkout_id - Filter by checkout ID.
 * @param order_id - Filter by order ID.
 * @param status - Filter by payment status.
 * @param method - Filter by payment method.
 * @param customer_email - Filter by customer email.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const paymentslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PaymentslistInput,
  outputSchema: PaymentslistOutput,
  errors: [UnprocessableEntity] as const,
}));
