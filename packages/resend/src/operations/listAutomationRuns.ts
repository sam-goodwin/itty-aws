import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ListAutomationRunsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    automation_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/automations/{automation_id}/runs" }));
export type ListAutomationRunsInput = typeof ListAutomationRunsInput.Type;

// Output Schema
export const ListAutomationRunsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    has_more: Schema.optional(Schema.Boolean),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals(["running", "completed", "failed", "cancelled"]),
          ),
          started_at: Schema.optional(Schema.NullOr(Schema.String)),
          completed_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListAutomationRunsOutput = typeof ListAutomationRunsOutput.Type;

// The operation
/**
 * Retrieve a list of automation runs
 *
 * @param automation_id - The ID of the automation.
 * @param status - Filter runs by status. Comma-separated list of: running, completed, failed, cancelled.
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listAutomationRuns = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListAutomationRunsInput,
  outputSchema: ListAutomationRunsOutput,
  errors: [NotFound] as const,
}));
