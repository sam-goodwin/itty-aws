import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardTemplatesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    template_name: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_description: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    tiles: Schema.optional(Schema.NullOr(Schema.Unknown)),
    variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    image_url: Schema.optional(Schema.NullOr(Schema.String)),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    scope: Schema.optional(Schema.Unknown),
    availability_contexts: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    is_featured: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/dashboard_templates/{id}/",
    }),
  );
export type DashboardTemplatesPartialUpdateInput =
  typeof DashboardTemplatesPartialUpdateInput.Type;

// Output Schema
export const DashboardTemplatesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    template_name: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_description: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    tiles: Schema.optional(Schema.NullOr(Schema.Unknown)),
    variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    image_url: Schema.optional(Schema.NullOr(Schema.String)),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    scope: Schema.optional(Schema.Unknown),
    availability_contexts: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    is_featured: Schema.optional(Schema.Boolean),
  });
export type DashboardTemplatesPartialUpdateOutput =
  typeof DashboardTemplatesPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this dashboard template.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardTemplatesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardTemplatesPartialUpdateInput,
    outputSchema: DashboardTemplatesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
