import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DisputesgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/disputes/{id}" }));
export type DisputesgetInput = typeof DisputesgetInput.Type;

// Output Schema
export const DisputesgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created_at: Schema.String,
  modified_at: Schema.Unknown,
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
});
export type DisputesgetOutput = typeof DisputesgetOutput.Type;

// The operation
/**
 * Get Dispute
 *
 * Get a dispute by ID.
 * **Scopes**: `disputes:read`
 *
 * @param id - The dispute ID.
 */
export const disputesget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisputesgetInput,
  outputSchema: DisputesgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
