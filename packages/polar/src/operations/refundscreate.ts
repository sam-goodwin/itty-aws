import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const RefundscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  order_id: Schema.String,
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
  comment: Schema.optional(Schema.Unknown),
  revoke_benefits: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/v1/refunds/" }));
export type RefundscreateInput = typeof RefundscreateInput.Type;

// Output Schema
export const RefundscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created_at: Schema.String,
  modified_at: Schema.Unknown,
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
  subscription_id: Schema.Unknown,
  customer_id: Schema.String,
  revoke_benefits: Schema.Boolean,
  dispute: Schema.Unknown,
});
export type RefundscreateOutput = typeof RefundscreateOutput.Type;

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
  errors: [Forbidden, UnprocessableEntity] as const,
}));
