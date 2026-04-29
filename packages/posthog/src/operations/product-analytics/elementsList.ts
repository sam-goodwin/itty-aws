import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ElementsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/elements/" }),
);
export type ElementsListInput = typeof ElementsListInput.Type;

// Output Schema
export const ElementsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      text: Schema.optional(Schema.NullOr(Schema.String)),
      tag_name: Schema.optional(Schema.NullOr(Schema.String)),
      attr_class: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
      href: Schema.optional(Schema.NullOr(Schema.String)),
      attr_id: Schema.optional(Schema.NullOr(Schema.String)),
      nth_child: Schema.optional(Schema.NullOr(Schema.Number)),
      nth_of_type: Schema.optional(Schema.NullOr(Schema.Number)),
      attributes: Schema.optional(Schema.Unknown),
      order: Schema.optional(Schema.NullOr(Schema.Number)),
    }),
  ),
});
export type ElementsListOutput = typeof ElementsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElementsListInput,
  outputSchema: ElementsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
