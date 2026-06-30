import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    filters_override: Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    variables_override: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{id}/",
    }),
  );
export type DashboardsRetrieveInput = typeof DashboardsRetrieveInput.Type;

// Output Schema
export const DashboardsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          role_at_organization: Schema.optional(Schema.Unknown),
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
  });
export type DashboardsRetrieveOutput = typeof DashboardsRetrieveOutput.Type;

// The operation
/**
 *
 * @param filters_override - Object (or pre-encoded JSON string) to override dashboard filters for this request only (not persisted). Top-level keys replace; nested values are not deep-merged — pass the complete value for any key you override. Accepts the same keys as the dashboard filters schema (e.g., `date_from`, `date_to`, `properties`). Ignored when accessed via a sharing token.
 * @param id - A unique integer value identifying this dashboard.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param variables_override - Object (or pre-encoded JSON string) to override dashboard variables for this request only (not persisted). Format: {"<variable_id>": {"code_name": "<code_name>", "variableId": "<variable_id>", "value": <new_value>}}. Each entry must include `code_name` — partial entries are silently dropped. The simplest workflow is to call `dashboard-get` first, copy the matching entry from the response, and mutate `value`. Top-level keys replace; nested values are not deep-merged. Ignored when accessed via a sharing token.
 */
export const dashboardsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsRetrieveInput,
  outputSchema: DashboardsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
