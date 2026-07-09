import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateAutomationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
  steps: Schema.Array(
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
  connections: Schema.Array(
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
}).pipe(T.Http({ method: "POST", path: "/automations" }));
export type CreateAutomationInput = typeof CreateAutomationInput.Type;

// Output Schema
export const CreateAutomationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  },
);
export type CreateAutomationOutput = typeof CreateAutomationOutput.Type;

// The operation
/**
 * Create an automation
 */
export const createAutomation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateAutomationInput,
  outputSchema: CreateAutomationOutput,
  errors: [UnprocessableEntity] as const,
}));
