import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DashboardsDeleteTileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["json", "txt"])),
    tile_id: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/dashboards/{id}/delete_tile/",
    }),
  );
export type DashboardsDeleteTileInput = typeof DashboardsDeleteTileInput.Type;

// Output Schema
export const DashboardsDeleteTileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DashboardsDeleteTileOutput = typeof DashboardsDeleteTileOutput.Type;

// The operation
/**
 * Soft-delete a single tile from a dashboard.
 * Works for text, insight, and button tiles. The underlying Insight, Text, or ButtonTile
 * object is preserved — only the dashboard tile is hidden. To delete the entire dashboard,
 * use the dashboard delete endpoint instead.
 *
 * @param id - A unique integer value identifying this dashboard.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsDeleteTile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardsDeleteTileInput,
    outputSchema: DashboardsDeleteTileOutput,
  }),
);
