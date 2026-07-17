import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DashboardsSharingPasswordsDestroyInput {
  dashboard_id: number;
  password_id: string;
  project_id: string;
}
export const DashboardsSharingPasswordsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    dashboard_id: Schema.Number.pipe(T.PathParam()),
    password_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/dashboards/{dashboard_id}/sharing/passwords/{password_id}/",
    }),
  ) as unknown as Schema.Codec<DashboardsSharingPasswordsDestroyInput>;

// Output Schema
export type DashboardsSharingPasswordsDestroyOutput = void;
export const DashboardsSharingPasswordsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DashboardsSharingPasswordsDestroyOutput>;

// The operation
/**
 * Delete a password from the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsSharingPasswordsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DashboardsSharingPasswordsDestroyInput,
    outputSchema: DashboardsSharingPasswordsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
