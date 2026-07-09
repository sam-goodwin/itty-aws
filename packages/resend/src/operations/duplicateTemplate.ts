import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DuplicateTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "POST", path: "/templates/{id}/duplicate" }));
export type DuplicateTemplateInput = typeof DuplicateTemplateInput.Type;

// Output Schema
export const DuplicateTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
  });
export type DuplicateTemplateOutput = typeof DuplicateTemplateOutput.Type;

// The operation
/**
 * Duplicate a template
 *
 * @param id - The Template ID or alias.
 */
export const duplicateTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DuplicateTemplateInput,
  outputSchema: DuplicateTemplateOutput,
  errors: [NotFound] as const,
}));
