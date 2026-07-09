import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListContactImportsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["queued", "in_progress", "completed", "failed"]),
    ),
    limit: Schema.optional(Schema.Number),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/contacts/imports" }));
export type ListContactImportsInput = typeof ListContactImportsInput.Type;

// Output Schema
export const ListContactImportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    has_more: Schema.optional(Schema.Boolean),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals(["queued", "in_progress", "completed", "failed"]),
          ),
          created_at: Schema.optional(Schema.String),
          completed_at: Schema.optional(Schema.NullOr(Schema.String)),
          counts: Schema.optional(
            Schema.Struct({
              total: Schema.optional(Schema.Number),
              created: Schema.optional(Schema.Number),
              updated: Schema.optional(Schema.Number),
              skipped: Schema.optional(Schema.Number),
              failed: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
  });
export type ListContactImportsOutput = typeof ListContactImportsOutput.Type;

// The operation
/**
 * Retrieve a list of contact imports
 *
 * @param status - Filter contact imports by status.
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listContactImports = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListContactImportsInput,
  outputSchema: ListContactImportsOutput,
}));
