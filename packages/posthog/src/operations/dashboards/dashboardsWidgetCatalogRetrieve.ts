import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DashboardsWidgetCatalogRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/widget_catalog/",
    }),
  );
export type DashboardsWidgetCatalogRetrieveInput =
  typeof DashboardsWidgetCatalogRetrieveInput.Type;

// Output Schema
export const DashboardsWidgetCatalogRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(Schema.Unknown),
  });
export type DashboardsWidgetCatalogRetrieveOutput =
  typeof DashboardsWidgetCatalogRetrieveOutput.Type;

// The operation
/**
 * List registered dashboard widget types and per-type config_schema documentation for agents.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsWidgetCatalogRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsWidgetCatalogRetrieveInput,
    outputSchema: DashboardsWidgetCatalogRetrieveOutput,
  }));
