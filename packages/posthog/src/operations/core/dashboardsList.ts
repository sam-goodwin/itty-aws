import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["json", "txt"])),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/dashboards/" }),
);
export type DashboardsListInput = typeof DashboardsListInput.Type;

// Output Schema
export const DashboardsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.Number,
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      pinned: Schema.Boolean,
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
      last_accessed_at: Schema.NullOr(Schema.String),
      last_viewed_at: Schema.NullOr(Schema.String),
      is_shared: Schema.Boolean,
      deleted: Schema.Boolean,
      creation_mode: Schema.Literals([
        "default",
        "template",
        "duplicate",
        "unlisted",
      ]),
      tags: Schema.optional(Schema.Array(Schema.Unknown)),
      restriction_level: Schema.Literals([21, 37]),
      effective_restriction_level: Schema.Literals([21, 37]),
      effective_privilege_level: Schema.Literals([21, 37]),
      user_access_level: Schema.NullOr(Schema.String),
      access_control_version: Schema.String,
      last_refresh: Schema.NullOr(Schema.String),
      team_id: Schema.Number,
    }),
  ),
});
export type DashboardsListOutput = typeof DashboardsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsListInput,
  outputSchema: DashboardsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
