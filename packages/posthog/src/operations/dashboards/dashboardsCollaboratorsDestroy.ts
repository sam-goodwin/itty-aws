import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DashboardsCollaboratorsDestroyInput {
  dashboard_id: number;
  project_id: string;
  user__uuid: string;
}
export const DashboardsCollaboratorsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    dashboard_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    user__uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/{user__uuid}/",
    }),
  ) as unknown as Schema.Codec<DashboardsCollaboratorsDestroyInput>;

// Output Schema
export type DashboardsCollaboratorsDestroyOutput = void;
export const DashboardsCollaboratorsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DashboardsCollaboratorsDestroyOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsCollaboratorsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DashboardsCollaboratorsDestroyInput,
    outputSchema: DashboardsCollaboratorsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
