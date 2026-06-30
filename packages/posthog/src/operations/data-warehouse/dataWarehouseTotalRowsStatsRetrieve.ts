import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseTotalRowsStatsRetrieveInput {
  project_id: string;
}
export const DataWarehouseTotalRowsStatsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/total_rows_stats/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseTotalRowsStatsRetrieveInput>;

// Output Schema
export type DataWarehouseTotalRowsStatsRetrieveOutput = void;
export const DataWarehouseTotalRowsStatsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataWarehouseTotalRowsStatsRetrieveOutput>;

// The operation
/**
 * Returns aggregated statistics for the data warehouse total rows processed within the current billing period.
 * Used by the frontend data warehouse scene to display usage information.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseTotalRowsStatsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseTotalRowsStatsRetrieveInput,
    outputSchema: DataWarehouseTotalRowsStatsRetrieveOutput,
  }));
