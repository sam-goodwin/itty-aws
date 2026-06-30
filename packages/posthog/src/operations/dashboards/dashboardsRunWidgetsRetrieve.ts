import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DashboardsRunWidgetsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    tile_ids: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboards/{id}/run_widgets/",
    }),
  );
export type DashboardsRunWidgetsRetrieveInput =
  typeof DashboardsRunWidgetsRetrieveInput.Type;

// Output Schema
export const DashboardsRunWidgetsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        tile_id: Schema.Number,
        widget_type: Schema.NullOr(Schema.String),
        result: Schema.Unknown,
        error: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type DashboardsRunWidgetsRetrieveOutput =
  typeof DashboardsRunWidgetsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this dashboard.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param tile_ids - Comma-separated dashboard tile IDs to run widgets for.
 */
export const dashboardsRunWidgetsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsRunWidgetsRetrieveInput,
    outputSchema: DashboardsRunWidgetsRetrieveOutput,
  }));
