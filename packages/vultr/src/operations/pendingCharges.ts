import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PendingChargesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/billing/pending-charges" }));
export type PendingChargesInput = typeof PendingChargesInput.Type;

// Output Schema
export const PendingChargesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pending_charges: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        date: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        amount: Schema.optional(Schema.Number),
        balance: Schema.optional(Schema.Number),
      }),
    ),
  ),
});
export type PendingChargesOutput = typeof PendingChargesOutput.Type;

// The operation
/**
 * List Pending Charges
 *
 * Retrieve list of billing pending charges
 */
export const pendingCharges = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PendingChargesInput,
  outputSchema: PendingChargesOutput,
  errors: [BadRequest, NotFound] as const,
}));
