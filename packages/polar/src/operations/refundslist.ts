import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RefundslistInput {
  id?: string | ReadonlyArray<string> | null;
  organization_id?: string | ReadonlyArray<string> | null;
  order_id?: string | ReadonlyArray<string> | null;
  subscription_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  external_customer_id?: string | ReadonlyArray<string> | null;
  succeeded?: boolean | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    "created_at" | "-created_at" | "amount" | "-amount"
  > | null;
}
export const RefundslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  order_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  subscription_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  external_customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  succeeded: Schema.optional(Schema.NullOr(Schema.Boolean)),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals(["created_at", "-created_at", "amount", "-amount"]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/refunds/" }),
) as unknown as Schema.Codec<RefundslistInput>;

// Output Schema
export interface RefundslistOutput {
  items: ReadonlyArray<{
    created_at: string;
    modified_at: string | null;
    id: string;
    metadata: Record<string, string | number | boolean>;
    status: "pending" | "succeeded" | "failed" | "canceled";
    reason:
      | "duplicate"
      | "fraudulent"
      | "customer_request"
      | "service_disruption"
      | "satisfaction_guarantee"
      | "dispute_prevention"
      | "other";
    amount: number;
    tax_amount: number;
    currency: string;
    organization_id: string;
    order_id: string;
    subscription_id: string | null;
    customer_id: string;
    revoke_benefits: boolean;
    dispute: {
      created_at: string;
      modified_at: string | null;
      id: string;
      status:
        | "prevented"
        | "early_warning"
        | "needs_response"
        | "under_review"
        | "lost"
        | "won";
      resolved: boolean;
      closed: boolean;
      amount: number;
      tax_amount: number;
      currency: string;
      reason: string | null;
      evidence_due_by: string | null;
      past_due: boolean;
      order_id: string;
      payment_id: string;
    } | null;
  }>;
  pagination: { total_count: number; max_page: number };
}
export const RefundslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
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
          reason: Schema.NullOr(Schema.String),
          evidence_due_by: Schema.NullOr(Schema.String),
          past_due: Schema.Boolean,
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
}) as unknown as Schema.Codec<RefundslistOutput>;

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
}));
