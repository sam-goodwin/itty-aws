import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const DashboardTemplatesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/dashboard_templates/{id}/",
    }),
  );
export type DashboardTemplatesDestroyInput =
  typeof DashboardTemplatesDestroyInput.Type;

// Output Schema
export const DashboardTemplatesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DashboardTemplatesDestroyOutput =
  typeof DashboardTemplatesDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this dashboard template.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardTemplatesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardTemplatesDestroyInput,
    outputSchema: DashboardTemplatesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
