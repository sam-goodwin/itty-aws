import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListTemplatesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/templates" }));
export type ListTemplatesInput = typeof ListTemplatesInput.Type;

// Output Schema
export const ListTemplatesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["draft", "published"])),
        published_at: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        alias: Schema.optional(Schema.String),
      }),
    ),
  ),
  has_more: Schema.optional(Schema.Boolean),
});
export type ListTemplatesOutput = typeof ListTemplatesOutput.Type;

// The operation
/**
 * Retrieve a list of templates
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listTemplates = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListTemplatesInput,
  outputSchema: ListTemplatesOutput,
}));
