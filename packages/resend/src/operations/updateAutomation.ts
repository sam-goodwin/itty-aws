import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateAutomationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automation_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
  steps: Schema.optional(
    Schema.Array(
      Schema.Struct({
        key: Schema.String,
        type: Schema.Literals([
          "trigger",
          "send_email",
          "delay",
          "wait_for_event",
          "condition",
          "contact_update",
          "contact_delete",
          "add_to_segment",
        ]),
        config: Schema.Unknown,
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
}).pipe(T.Http({ method: "PATCH", path: "/automations/{automation_id}" }));
export type UpdateAutomationInput = typeof UpdateAutomationInput.Type;

// Output Schema
export const UpdateAutomationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  },
);
export type UpdateAutomationOutput = typeof UpdateAutomationOutput.Type;

// The operation
/**
 * Update an automation
 *
 * @param automation_id - The ID of the automation.
 */
export const updateAutomation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateAutomationInput,
  outputSchema: UpdateAutomationOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
