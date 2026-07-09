import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const StopAutomationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automation_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/automations/{automation_id}/stop" }));
export type StopAutomationInput = typeof StopAutomationInput.Type;

// Output Schema
export const StopAutomationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});
export type StopAutomationOutput = typeof StopAutomationOutput.Type;

// The operation
/**
 * Stop an automation
 *
 * @param automation_id - The ID of the automation.
 */
export const stopAutomation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StopAutomationInput,
  outputSchema: StopAutomationOutput,
  errors: [NotFound] as const,
}));
