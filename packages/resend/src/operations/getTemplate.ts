import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetTemplateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/templates/{id}" }));
export type GetTemplateInput = typeof GetTemplateInput.Type;

// Output Schema
export const GetTemplateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  current_version_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  alias: Schema.optional(Schema.String),
  from: Schema.optional(Schema.String),
  subject: Schema.optional(Schema.String),
  reply_to: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  html: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  variables: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        key: Schema.String,
        type: Schema.Literals([
          "string",
          "number",
          "boolean",
          "object",
          "list",
        ]),
        fallback_value: Schema.optional(Schema.Unknown),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Literals(["draft", "published"])),
  published_at: Schema.optional(Schema.NullOr(Schema.String)),
  has_unpublished_versions: Schema.optional(Schema.Boolean),
});
export type GetTemplateOutput = typeof GetTemplateOutput.Type;

// The operation
/**
 * Retrieve a single template
 *
 * @param id - The Template ID or alias.
 */
export const getTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTemplateInput,
  outputSchema: GetTemplateOutput,
  errors: [NotFound] as const,
}));
