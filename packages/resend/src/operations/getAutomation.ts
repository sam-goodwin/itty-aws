import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetAutomationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automation_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/automations/{automation_id}" }));
export type GetAutomationInput = typeof GetAutomationInput.Type;

// Output Schema
export const GetAutomationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
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
        config: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  connections: Schema.optional(
    Schema.Array(
      Schema.Struct({
        from: Schema.String,
        to: Schema.String,
        type: Schema.optional(
          Schema.Literals([
            "default",
            "condition_met",
            "condition_not_met",
            "timeout",
            "event_received",
          ]),
        ),
      }),
    ),
  ),
});
export type GetAutomationOutput = typeof GetAutomationOutput.Type;

// The operation
/**
 * Retrieve a single automation
 *
 * @param automation_id - The ID of the automation.
 */
export const getAutomation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAutomationInput,
  outputSchema: GetAutomationOutput,
  errors: [NotFound] as const,
}));
