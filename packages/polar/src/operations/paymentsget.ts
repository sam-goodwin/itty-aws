import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const PaymentsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/payments/{id}" }));
export type PaymentsgetInput = typeof PaymentsgetInput.Type;

// Output Schema
export const PaymentsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type PaymentsgetOutput = typeof PaymentsgetOutput.Type;

// The operation
/**
 * Get Payment
 *
 * Get a payment by ID.
 * **Scopes**: `payments:read`
 *
 * @param id - The payment ID.
 */
export const paymentsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PaymentsgetInput,
  outputSchema: PaymentsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
