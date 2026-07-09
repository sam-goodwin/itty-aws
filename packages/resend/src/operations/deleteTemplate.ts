import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/templates/{id}" }));
export type DeleteTemplateInput = typeof DeleteTemplateInput.Type;

// Output Schema
export const DeleteTemplateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteTemplateOutput = typeof DeleteTemplateOutput.Type;

// The operation
/**
 * Remove an existing template
 *
 * @param id - The Template ID or alias.
 */
export const deleteTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteTemplateInput,
  outputSchema: DeleteTemplateOutput,
  errors: [NotFound] as const,
}));
