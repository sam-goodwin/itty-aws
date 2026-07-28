import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RefundscreateInput {
  metadata?: Record<string, string | number | boolean>;
  order_id: string;
  reason:
    | "duplicate"
    | "fraudulent"
    | "customer_request"
    | "service_disruption"
    | "satisfaction_guarantee"
    | "other";
  amount: number;
  comment?: string | null;
  revoke_benefits?: boolean;
}
export const RefundscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
    ),
  ),
  order_id: Schema.String,
  reason: Schema.Literals([
    "duplicate",
    "fraudulent",
    "customer_request",
    "service_disruption",
    "satisfaction_guarantee",
    "other",
  ]),
  amount: Schema.Number,
  comment: Schema.optional(Schema.NullOr(Schema.String)),
  revoke_benefits: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/v1/refunds/" }),
) as unknown as Schema.Codec<RefundscreateInput>;

// Output Schema
export interface RefundscreateOutput {
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
}
export const RefundscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RefundscreateOutput>;

// The operation
/**
 * Create Refund
 *
 * Create a refund.
 * **Scopes**: `refunds:write`
 */
export const refundscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RefundscreateInput,
  outputSchema: RefundscreateOutput,
}));
