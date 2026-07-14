import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseJobStatsRetrieveInput {
  project_id: string;
}
export const DataWarehouseJobStatsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/job_stats/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseJobStatsRetrieveInput>;

// Output Schema
export type DataWarehouseJobStatsRetrieveOutput = void;
export const DataWarehouseJobStatsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataWarehouseJobStatsRetrieveOutput>;

// The operation
/**
 * Returns success and failed job statistics for the last 1, 7, or 30 days.
 * Query parameter 'days' can be 1, 7, or 30 (default: 7).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseJobStatsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseJobStatsRetrieveInput,
    outputSchema: DataWarehouseJobStatsRetrieveOutput,
  }));
