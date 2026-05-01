import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AnnotationsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.NullOr(Schema.String)),
    date_marker: Schema.optional(Schema.NullOr(Schema.String)),
    creation_type: Schema.optional(Schema.Literals(["USR", "GIT"])),
    dashboard_item: Schema.optional(Schema.NullOr(Schema.Number)),
    dashboard_id: Schema.optional(Schema.NullOr(Schema.Number)),
    dashboard_name: Schema.optional(Schema.NullOr(Schema.String)),
    insight_short_id: Schema.optional(Schema.NullOr(Schema.String)),
    insight_name: Schema.optional(Schema.NullOr(Schema.String)),
    insight_derived_name: Schema.optional(Schema.NullOr(Schema.String)),
    created_by: Schema.optional(
      Schema.Struct({
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
    ),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/annotations/{id}/",
    }),
  );
export type AnnotationsPartialUpdateInput =
  typeof AnnotationsPartialUpdateInput.Type;

// Output Schema
export const AnnotationsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AnnotationsPartialUpdateOutput =
  typeof AnnotationsPartialUpdateOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.
 *
 * @param id - A unique integer value identifying this annotation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const annotationsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AnnotationsPartialUpdateInput,
    outputSchema: AnnotationsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
