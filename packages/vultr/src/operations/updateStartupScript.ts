import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateStartupScriptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startupId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    script: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PATCH", path: "/startup-scripts/{startupId}" }));
export type UpdateStartupScriptInput = typeof UpdateStartupScriptInput.Type;

// Output Schema
export const UpdateStartupScriptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateStartupScriptOutput = typeof UpdateStartupScriptOutput.Type;

// The operation
/**
 * Update Startup Script
 *
 * Update a Startup Script. The attributes `name` and `script` are optional. If not set, the attributes will retain their original values. The `script` attribute is base-64 encoded. New deployments will use the updated script, but this action does not update previously deployed instances.
 *
 * @param startupId - The [Startup Script id](#operation/list-startup-scripts).
 */
export const updateStartupScript = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateStartupScriptInput,
  outputSchema: UpdateStartupScriptOutput,
  errors: [BadRequest, NotFound] as const,
}));
