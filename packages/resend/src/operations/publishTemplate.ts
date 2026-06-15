import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const PublishTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/templates/{id}/publish" }));
export type PublishTemplateInput = typeof PublishTemplateInput.Type;

// Output Schema
export const PublishTemplateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type PublishTemplateOutput = typeof PublishTemplateOutput.Type;

// The operation
/**
 * Publish a template
 *
 * @param id - The Template ID or alias.
 */
export const publishTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PublishTemplateInput,
  outputSchema: PublishTemplateOutput,
  errors: [NotFound] as const,
}));
