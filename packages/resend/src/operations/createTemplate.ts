import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  alias: Schema.optional(Schema.String),
  from: Schema.optional(Schema.String),
  subject: Schema.optional(Schema.String),
  reply_to: Schema.optional(Schema.Array(Schema.String)),
  html: Schema.String,
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
}).pipe(T.Http({ method: "POST", path: "/templates" }));
export type CreateTemplateInput = typeof CreateTemplateInput.Type;

// Output Schema
export const CreateTemplateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type CreateTemplateOutput = typeof CreateTemplateOutput.Type;

// The operation
/**
 * Create a template
 */
export const createTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateTemplateInput,
  outputSchema: CreateTemplateOutput,
  errors: [UnprocessableEntity] as const,
}));
