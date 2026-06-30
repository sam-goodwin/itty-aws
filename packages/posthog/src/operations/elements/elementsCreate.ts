import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ElementsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  text: Schema.optional(Schema.NullOr(Schema.String)),
  tag_name: Schema.optional(Schema.NullOr(Schema.String)),
  attr_class: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  href: Schema.optional(Schema.NullOr(Schema.String)),
  attr_id: Schema.optional(Schema.NullOr(Schema.String)),
  nth_child: Schema.optional(Schema.NullOr(Schema.Number)),
  nth_of_type: Schema.optional(Schema.NullOr(Schema.Number)),
  attributes: Schema.optional(Schema.Unknown),
  order: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/elements/" }),
);
export type ElementsCreateInput = typeof ElementsCreateInput.Type;

// Output Schema
export const ElementsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  text: Schema.optional(Schema.NullOr(Schema.String)),
  tag_name: Schema.optional(Schema.NullOr(Schema.String)),
  attr_class: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  href: Schema.optional(Schema.NullOr(Schema.String)),
  attr_id: Schema.optional(Schema.NullOr(Schema.String)),
  nth_child: Schema.optional(Schema.NullOr(Schema.Number)),
  nth_of_type: Schema.optional(Schema.NullOr(Schema.Number)),
  attributes: Schema.optional(Schema.Unknown),
  order: Schema.optional(Schema.NullOr(Schema.Number)),
});
export type ElementsCreateOutput = typeof ElementsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElementsCreateInput,
  outputSchema: ElementsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
