import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetAutomationRunInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automation_id: Schema.String.pipe(T.PathParam()),
  run_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/automations/{automation_id}/runs/{run_id}" }),
);
export type GetAutomationRunInput = typeof GetAutomationRunInput.Type;

// Output Schema
export const GetAutomationRunOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["running", "completed", "failed", "cancelled"]),
    ),
    started_at: Schema.optional(Schema.NullOr(Schema.String)),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    steps: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals([
              "trigger",
              "send_email",
              "delay",
              "wait_for_event",
              "condition",
              "contact_update",
              "contact_delete",
              "add_to_segment",
            ]),
          ),
          status: Schema.optional(Schema.String),
          started_at: Schema.optional(Schema.NullOr(Schema.String)),
          completed_at: Schema.optional(Schema.NullOr(Schema.String)),
          output: Schema.optional(Schema.NullOr(Schema.Unknown)),
          error: Schema.optional(Schema.NullOr(Schema.Unknown)),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  },
);
export type GetAutomationRunOutput = typeof GetAutomationRunOutput.Type;

// The operation
/**
 * Retrieve a single automation run
 *
 * @param automation_id - The ID of the automation.
 * @param run_id - The ID of the automation run.
 */
export const getAutomationRun = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAutomationRunInput,
  outputSchema: GetAutomationRunOutput,
  errors: [NotFound] as const,
}));
