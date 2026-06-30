import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseCompletedActivityRetrieveInput {
  project_id: string;
}
export const DataWarehouseCompletedActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/completed_activity/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseCompletedActivityRetrieveInput>;

// Output Schema
export type DataWarehouseCompletedActivityRetrieveOutput = void;
export const DataWarehouseCompletedActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataWarehouseCompletedActivityRetrieveOutput>;

// The operation
/**
 * Returns completed/non-running activities (jobs with status 'Completed').
 * Supports pagination and cutoff time filtering.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseCompletedActivityRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseCompletedActivityRetrieveInput,
    outputSchema: DataWarehouseCompletedActivityRetrieveOutput,
  }));
