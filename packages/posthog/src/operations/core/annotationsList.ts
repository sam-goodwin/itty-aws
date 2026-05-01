import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AnnotationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/annotations/" }),
);
export type AnnotationsListInput = typeof AnnotationsListInput.Type;

// Output Schema
export const AnnotationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.Number,
      content: Schema.optional(Schema.NullOr(Schema.String)),
      date_marker: Schema.optional(Schema.NullOr(Schema.String)),
      creation_type: Schema.optional(Schema.Literals(["USR", "GIT"])),
      dashboard_item: Schema.optional(Schema.NullOr(Schema.Number)),
      dashboard_id: Schema.optional(Schema.NullOr(Schema.Number)),
      dashboard_name: Schema.NullOr(Schema.String),
      insight_short_id: Schema.NullOr(Schema.String),
      insight_name: Schema.NullOr(Schema.String),
      insight_derived_name: Schema.NullOr(Schema.String),
      created_by: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      created_at: Schema.NullOr(Schema.String),
      updated_at: Schema.String,
      deleted: Schema.optional(Schema.Boolean),
      scope: Schema.optional(
        Schema.Literals([
          "dashboard_item",
          "dashboard",
          "project",
          "organization",
          "recording",
        ]),
      ),
    }),
  ),
});
export type AnnotationsListOutput = typeof AnnotationsListOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const annotationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AnnotationsListInput,
  outputSchema: AnnotationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
