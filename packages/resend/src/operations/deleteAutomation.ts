import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteAutomationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automation_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/automations/{automation_id}" }));
export type DeleteAutomationInput = typeof DeleteAutomationInput.Type;

// Output Schema
export const DeleteAutomationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
  },
);
export type DeleteAutomationOutput = typeof DeleteAutomationOutput.Type;

// The operation
/**
 * Delete an automation
 *
 * @param automation_id - The ID of the automation.
 */
export const deleteAutomation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteAutomationInput,
  outputSchema: DeleteAutomationOutput,
  errors: [NotFound] as const,
}));
