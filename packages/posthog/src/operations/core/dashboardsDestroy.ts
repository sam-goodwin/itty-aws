import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/dashboards/{id}/",
  }),
);
export type DashboardsDestroyInput = typeof DashboardsDestroyInput.Type;

// Output Schema
export const DashboardsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DashboardsDestroyOutput = typeof DashboardsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A unique integer value identifying this dashboard.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsDestroyInput,
  outputSchema: DashboardsDestroyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
