import * as Schema from "effect/Schema";
import { DashboardCollaboratorSchema } from "./_schemas.ts";
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
    Schema.suspend(() => DashboardCollaboratorSchema),
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
