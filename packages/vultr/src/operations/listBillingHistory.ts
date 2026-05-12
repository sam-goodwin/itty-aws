import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListBillingHistoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/billing/history" }),
  );
export type ListBillingHistoryInput = typeof ListBillingHistoryInput.Type;

// Output Schema
export const ListBillingHistoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_history: Schema.optional(
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
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListBillingHistoryOutput = typeof ListBillingHistoryOutput.Type;

// The operation
/**
 * List Billing History
 *
 * Retrieve list of billing history
 */
export const listBillingHistory = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBillingHistoryInput,
  outputSchema: ListBillingHistoryOutput,
  errors: [BadRequest, NotFound] as const,
}));
