import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseDataHealthIssuesRetrieveInput {
  project_id: string;
}
export const DataWarehouseDataHealthIssuesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/data_health_issues/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseDataHealthIssuesRetrieveInput>;

// Output Schema
export type DataWarehouseDataHealthIssuesRetrieveOutput = void;
export const DataWarehouseDataHealthIssuesRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataWarehouseDataHealthIssuesRetrieveOutput>;

// The operation
/**
 * Returns failed/disabled data pipeline items for the Pipeline status side panel.
 * Includes: materializations, syncs, sources, destinations, and transformations.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseDataHealthIssuesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseDataHealthIssuesRetrieveInput,
    outputSchema: DataWarehouseDataHealthIssuesRetrieveOutput,
  }));
