import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const DashboardTemplatesCopyBetweenProjectsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source_template_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/dashboard_templates/copy_between_projects/",
    }),
  );
export type DashboardTemplatesCopyBetweenProjectsCreateInput =
  typeof DashboardTemplatesCopyBetweenProjectsCreateInput.Type;

// Output Schema
export const DashboardTemplatesCopyBetweenProjectsCreateOutput =
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
export type DashboardTemplatesCopyBetweenProjectsCreateOutput =
  typeof DashboardTemplatesCopyBetweenProjectsCreateOutput.Type;

// The operation
/**
 * Copy a team template to this project
 *
 * Creates a new team-scoped template in the **target** project (URL) from a **team-scoped** source template in the same organization. Global and feature-flag templates return 400. Cross-organization or inaccessible sources return 404. Source and destination projects must differ (400 if equal). Conflicting `template_name` values on the destination are auto-suffixed with `(copy)`, `(copy 2)`, …
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardTemplatesCopyBetweenProjectsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardTemplatesCopyBetweenProjectsCreateInput,
    outputSchema: DashboardTemplatesCopyBetweenProjectsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
