import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DashboardsMoveTileCreateInput {
  id: number;
  project_id: string;
  format?: "json" | "txt";
  to_dashboard: number;
  tile: { id: number };
}
export const DashboardsMoveTileCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    to_dashboard: Schema.Number,
    tile: Schema.Struct({
      id: Schema.Number,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/dashboards/{id}/move_tile/",
    }),
  ) as unknown as Schema.Codec<DashboardsMoveTileCreateInput>;

// Output Schema
export interface DashboardsMoveTileCreateOutput {
  id?: number;
  name?: string | null;
  description?: string;
  pinned?: boolean;
  created_at?: string;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  last_accessed_at?: string | null;
  last_viewed_at?: string | null;
  folder?: string | null;
  is_shared?: boolean;
  deleted?: boolean;
  creation_mode?: "default" | "template" | "duplicate" | "unlisted";
  filters?: Record<string, unknown>;
  variables?: Record<string, unknown> | null;
  breakdown_colors?: unknown;
  data_color_theme_id?: number | null;
  tags?: unknown[];
  restriction_level?: 21 | 37;
  effective_restriction_level?: 21 | 37;
  effective_privilege_level?: 21 | 37;
  user_access_level?: string | null;
  access_control_version?: string;
  last_refresh?: string | null;
  persisted_filters?: Record<string, unknown> | null;
  persisted_variables?: Record<string, unknown> | null;
  team_id?: number;
  quick_filter_ids?: string[] | null;
  tiles?: Record<string, unknown>[] | null;
  use_template?: string;
  use_dashboard?: number | null;
  delete_insights?: boolean;
  _create_in_folder?: string;
}
export const DashboardsMoveTileCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    pinned: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
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
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    last_accessed_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
    folder: Schema.optional(Schema.NullOr(Schema.String)),
    is_shared: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.Boolean),
    creation_mode: Schema.optional(
      Schema.Literals(["default", "template", "duplicate", "unlisted"]),
    ),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    variables: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    breakdown_colors: Schema.optional(Schema.Unknown),
    data_color_theme_id: Schema.optional(Schema.NullOr(Schema.Number)),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    restriction_level: Schema.optional(Schema.Literals([21, 37])),
    effective_restriction_level: Schema.optional(Schema.Literals([21, 37])),
    effective_privilege_level: Schema.optional(Schema.Literals([21, 37])),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
    access_control_version: Schema.optional(Schema.String),
    last_refresh: Schema.optional(Schema.NullOr(Schema.String)),
    persisted_filters: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    persisted_variables: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    team_id: Schema.optional(Schema.Number),
    quick_filter_ids: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    tiles: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.Record(Schema.String, Schema.Unknown))),
    ),
    use_template: Schema.optional(Schema.String),
    use_dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
    delete_insights: Schema.optional(Schema.Boolean),
    _create_in_folder: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DashboardsMoveTileCreateOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this dashboard.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsMoveTileCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DashboardsMoveTileCreateInput,
  outputSchema: DashboardsMoveTileCreateOutput,
}));
