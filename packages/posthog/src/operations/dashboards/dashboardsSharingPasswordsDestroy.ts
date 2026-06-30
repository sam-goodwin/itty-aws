import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsSharingPasswordsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dashboard_id: Schema.Number.pipe(T.PathParam()),
    password_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/dashboards/{dashboard_id}/sharing/passwords/{password_id}/",
    }),
  );
export type DashboardsSharingPasswordsDestroyInput =
  typeof DashboardsSharingPasswordsDestroyInput.Type;

// Output Schema
export const DashboardsSharingPasswordsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DashboardsSharingPasswordsDestroyOutput =
  typeof DashboardsSharingPasswordsDestroyOutput.Type;

// The operation
/**
 * Delete a password from the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsSharingPasswordsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsSharingPasswordsDestroyInput,
    outputSchema: DashboardsSharingPasswordsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
