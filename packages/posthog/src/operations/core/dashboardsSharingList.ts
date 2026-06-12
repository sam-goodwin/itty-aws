import * as Schema from "effect/Schema";
import { SharingConfigurationSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsSharingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dashboard_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{dashboard_id}/sharing/",
    }),
  );
export type DashboardsSharingListInput = typeof DashboardsSharingListInput.Type;

// Output Schema
export const DashboardsSharingListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => SharingConfigurationSchema),
  );
export type DashboardsSharingListOutput =
  typeof DashboardsSharingListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsSharingList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardsSharingListInput,
    outputSchema: DashboardsSharingListOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
