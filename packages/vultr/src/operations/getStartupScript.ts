import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetStartupScriptInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startupId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/startup-scripts/{startupId}" }));
export type GetStartupScriptInput = typeof GetStartupScriptInput.Type;

// Output Schema
export const GetStartupScriptOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    startup_script: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        date_modified: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        script: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  },
);
export type GetStartupScriptOutput = typeof GetStartupScriptOutput.Type;

// The operation
/**
 * Get Startup Script
 *
 * Get information for a Startup Script.
 *
 * @param startupId - The [Startup Script id](#operation/list-startup-scripts).
 */
export const getStartupScript = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStartupScriptInput,
  outputSchema: GetStartupScriptOutput,
  errors: [BadRequest, NotFound] as const,
}));
