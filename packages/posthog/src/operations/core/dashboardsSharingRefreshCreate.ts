import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";
import { SensitiveNullableString } from "../../sensitive";

// Input Schema
export const DashboardsSharingRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dashboard_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    access_token: SensitiveNullableString,
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    password_required: Schema.optional(Schema.Boolean),
    share_passwords: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        created_at: Schema.String,
        note: Schema.optional(Schema.NullOr(Schema.String)),
        created_by_email: Schema.String,
        is_active: Schema.Boolean,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/dashboards/{dashboard_id}/sharing/refresh/",
    }),
  );
export type DashboardsSharingRefreshCreateInput =
  typeof DashboardsSharingRefreshCreateInput.Type;

// Output Schema
export const DashboardsSharingRefreshCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    access_token: SensitiveNullableString,
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
    password_required: Schema.optional(Schema.Boolean),
    share_passwords: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        created_at: Schema.String,
        note: Schema.optional(Schema.NullOr(Schema.String)),
        created_by_email: Schema.String,
        is_active: Schema.Boolean,
      }),
    ),
  });
export type DashboardsSharingRefreshCreateOutput =
  typeof DashboardsSharingRefreshCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsSharingRefreshCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsSharingRefreshCreateInput,
    outputSchema: DashboardsSharingRefreshCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
