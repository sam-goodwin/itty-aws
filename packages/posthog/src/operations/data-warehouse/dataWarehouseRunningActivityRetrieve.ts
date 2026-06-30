import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DataWarehouseRunningActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/running_activity/",
    }),
  );
export type DataWarehouseRunningActivityRetrieveInput =
  typeof DataWarehouseRunningActivityRetrieveInput.Type;

// Output Schema
export const DataWarehouseRunningActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataWarehouseRunningActivityRetrieveOutput =
  typeof DataWarehouseRunningActivityRetrieveOutput.Type;

// The operation
/**
 * Returns currently running activities (jobs with status 'Running').
 * Supports pagination and cutoff time filtering.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseRunningActivityRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseRunningActivityRetrieveInput,
    outputSchema: DataWarehouseRunningActivityRetrieveOutput,
  }));
