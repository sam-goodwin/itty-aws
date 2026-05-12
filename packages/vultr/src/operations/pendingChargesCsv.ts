import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PendingChargesCsvInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/billing/pending-charges/csv" }));
export type PendingChargesCsvInput = typeof PendingChargesCsvInput.Type;

// Output Schema
export const PendingChargesCsvOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PendingChargesCsvOutput = typeof PendingChargesCsvOutput.Type;

// The operation
/**
 * Get Pending Charges CSV
 *
 * Get pending charges as CSV file. Returns all current month charges.
 */
export const pendingChargesCsv = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PendingChargesCsvInput,
  outputSchema: PendingChargesCsvOutput,
  errors: [BadRequest, NotFound] as const,
}));
