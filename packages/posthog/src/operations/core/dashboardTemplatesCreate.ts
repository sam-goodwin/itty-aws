import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardTemplatesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    template_name: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_description: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    tiles: Schema.optional(Schema.NullOr(Schema.Unknown)),
    variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.NullOr(Schema.String),
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
    image_url: Schema.optional(Schema.NullOr(Schema.String)),
    team_id: Schema.NullOr(Schema.Number),
    scope: Schema.optional(Schema.Unknown),
    availability_contexts: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    is_featured: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/dashboard_templates/",
    }),
  );
export type DashboardTemplatesCreateInput =
  typeof DashboardTemplatesCreateInput.Type;

// Output Schema
export const DashboardTemplatesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    template_name: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_description: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    tiles: Schema.optional(Schema.NullOr(Schema.Unknown)),
    variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.NullOr(Schema.String),
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
    image_url: Schema.optional(Schema.NullOr(Schema.String)),
    team_id: Schema.NullOr(Schema.Number),
    scope: Schema.optional(Schema.Unknown),
    availability_contexts: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    is_featured: Schema.optional(Schema.Boolean),
  });
export type DashboardTemplatesCreateOutput =
  typeof DashboardTemplatesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardTemplatesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardTemplatesCreateInput,
    outputSchema: DashboardTemplatesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
