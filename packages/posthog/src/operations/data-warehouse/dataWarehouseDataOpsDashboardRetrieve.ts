import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DataWarehouseDataOpsDashboardRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/data_ops_dashboard/",
    }),
  );
export type DataWarehouseDataOpsDashboardRetrieveInput =
  typeof DataWarehouseDataOpsDashboardRetrieveInput.Type;

// Output Schema
export const DataWarehouseDataOpsDashboardRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataWarehouseDataOpsDashboardRetrieveOutput =
  typeof DataWarehouseDataOpsDashboardRetrieveOutput.Type;

// The operation
/**
 * Returns the data ops overview dashboard ID for this team, creating it if it doesn't exist yet.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseDataOpsDashboardRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseDataOpsDashboardRetrieveInput,
    outputSchema: DataWarehouseDataOpsDashboardRetrieveOutput,
  }));
