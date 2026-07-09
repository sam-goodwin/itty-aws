import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  alias: Schema.optional(Schema.String),
  from: Schema.optional(Schema.String),
  subject: Schema.optional(Schema.String),
  reply_to: Schema.optional(Schema.Array(Schema.String)),
  html: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  variables: Schema.optional(
    Schema.Array(
      Schema.Struct({
        key: Schema.String,
        type: Schema.Literals([
          "string",
          "number",
          "boolean",
          "object",
          "list",
        ]),
        fallback_value: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
}).pipe(T.Http({ method: "PATCH", path: "/templates/{id}" }));
export type UpdateTemplateInput = typeof UpdateTemplateInput.Type;

// Output Schema
export const UpdateTemplateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type UpdateTemplateOutput = typeof UpdateTemplateOutput.Type;

// The operation
/**
 * Update an existing template
 *
 * @param id - The Template ID or alias.
 */
export const updateTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateTemplateInput,
  outputSchema: UpdateTemplateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
