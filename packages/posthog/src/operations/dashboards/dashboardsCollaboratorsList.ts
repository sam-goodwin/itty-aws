import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsCollaboratorsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dashboard_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/",
    }),
  );
export type DashboardsCollaboratorsListInput =
  typeof DashboardsCollaboratorsListInput.Type;

// Output Schema
export const DashboardsCollaboratorsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      dashboard_id: Schema.optional(Schema.Number),
      user: Schema.optional(
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
      level: Schema.optional(Schema.Literals([21, 37])),
      added_at: Schema.optional(Schema.String),
      updated_at: Schema.optional(Schema.String),
      user_uuid: Schema.optional(Schema.String),
    }),
  );
export type DashboardsCollaboratorsListOutput =
  typeof DashboardsCollaboratorsListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsCollaboratorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardsCollaboratorsListInput,
    outputSchema: DashboardsCollaboratorsListOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
