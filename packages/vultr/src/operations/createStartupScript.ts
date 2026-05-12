import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateStartupScriptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.optional(Schema.String),
    script: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/startup-scripts" }));
export type CreateStartupScriptInput = typeof CreateStartupScriptInput.Type;

// Output Schema
export const CreateStartupScriptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CreateStartupScriptOutput = typeof CreateStartupScriptOutput.Type;

// The operation
/**
 * Create Startup Script
 *
 * Create a new Startup Script. The `name` and `script` attributes are required, and scripts are base-64 encoded.
 */
export const createStartupScript = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateStartupScriptInput,
  outputSchema: CreateStartupScriptOutput,
  errors: [BadRequest, NotFound] as const,
}));
