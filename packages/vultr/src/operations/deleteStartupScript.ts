import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteStartupScriptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startupId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/startup-scripts/{startupId}" }));
export type DeleteStartupScriptInput = typeof DeleteStartupScriptInput.Type;

// Output Schema
export const DeleteStartupScriptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteStartupScriptOutput = typeof DeleteStartupScriptOutput.Type;

// The operation
/**
 * Delete Startup Script
 *
 * Delete a Startup Script.
 *
 * @param startupId - The [Startup Script id](#operation/list-startup-scripts).
 */
export const deleteStartupScript = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteStartupScriptInput,
  outputSchema: DeleteStartupScriptOutput,
  errors: [BadRequest, NotFound] as const,
}));
