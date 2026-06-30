import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ElementsRetrieveInput {
  id: number;
  project_id: string;
}
export const ElementsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/elements/{id}/" }),
) as unknown as Schema.Codec<ElementsRetrieveInput>;

// Output Schema
export interface ElementsRetrieveOutput {
  text?: string | null;
  tag_name?: string | null;
  attr_class?: string[] | null;
  href?: string | null;
  attr_id?: string | null;
  nth_child?: number | null;
  nth_of_type?: number | null;
  attributes?: unknown;
  order?: number | null;
}
export const ElementsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    text: Schema.optional(Schema.NullOr(Schema.String)),
    tag_name: Schema.optional(Schema.NullOr(Schema.String)),
    attr_class: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    attr_id: Schema.optional(Schema.NullOr(Schema.String)),
    nth_child: Schema.optional(Schema.NullOr(Schema.Number)),
    nth_of_type: Schema.optional(Schema.NullOr(Schema.Number)),
    attributes: Schema.optional(Schema.Unknown),
    order: Schema.optional(Schema.NullOr(Schema.Number)),
  },
) as unknown as Schema.Codec<ElementsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this element.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const elementsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElementsRetrieveInput,
  outputSchema: ElementsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
