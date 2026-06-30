import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DataWarehouseCompletedActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/completed_activity/",
    }),
  );
export type DataWarehouseCompletedActivityRetrieveInput =
  typeof DataWarehouseCompletedActivityRetrieveInput.Type;

// Output Schema
export const DataWarehouseCompletedActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataWarehouseCompletedActivityRetrieveOutput =
  typeof DataWarehouseCompletedActivityRetrieveOutput.Type;

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
