import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsCopyTileCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    fromDashboardId: Schema.Number,
    tileId: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/dashboards/{id}/copy_tile/",
    }),
  );
export type DashboardsCopyTileCreateInput =
  typeof DashboardsCopyTileCreateInput.Type;

// Output Schema
export const DashboardsCopyTileCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    pinned: Schema.optional(Schema.Boolean),
    created_at: Schema.String,
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
    last_accessed_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_viewed_at: Schema.NullOr(Schema.String),
    is_shared: Schema.Boolean,
    deleted: Schema.optional(Schema.Boolean),
    creation_mode: Schema.Literals([
      "default",
      "template",
      "duplicate",
      "unlisted",
    ]),
    filters: Schema.Record(Schema.String, Schema.Unknown),
    variables: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    breakdown_colors: Schema.optional(Schema.Unknown),
    data_color_theme_id: Schema.optional(Schema.NullOr(Schema.Number)),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    restriction_level: Schema.optional(Schema.Literals([21, 37])),
    effective_restriction_level: Schema.Literals([21, 37]),
    effective_privilege_level: Schema.Literals([21, 37]),
    user_access_level: Schema.NullOr(Schema.String),
    access_control_version: Schema.String,
    last_refresh: Schema.optional(Schema.NullOr(Schema.String)),
    persisted_filters: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    persisted_variables: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    team_id: Schema.Number,
    quick_filter_ids: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    tiles: Schema.NullOr(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    use_template: Schema.optional(Schema.String),
    use_dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
    delete_insights: Schema.optional(Schema.Boolean),
    _create_in_folder: Schema.optional(Schema.String),
  });
export type DashboardsCopyTileCreateOutput =
  typeof DashboardsCopyTileCreateOutput.Type;

// The operation
/**
 * Copy an existing dashboard tile to another dashboard (insight or text card; new tile row).
 *
 * @param id - A unique integer value identifying this dashboard.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsCopyTileCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardsCopyTileCreateInput,
    outputSchema: DashboardsCopyTileCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
