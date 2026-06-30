import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DataWarehouseCheckDatabaseNameRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/check-database-name/",
    }),
  );
export type DataWarehouseCheckDatabaseNameRetrieveInput =
  typeof DataWarehouseCheckDatabaseNameRetrieveInput.Type;

// Output Schema
export const DataWarehouseCheckDatabaseNameRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    available: Schema.Boolean,
  });
export type DataWarehouseCheckDatabaseNameRetrieveOutput =
  typeof DataWarehouseCheckDatabaseNameRetrieveOutput.Type;

// The operation
/**
 * Check if a database name is available.
 *
 * @param name - Database name to check
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseCheckDatabaseNameRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseCheckDatabaseNameRetrieveInput,
    outputSchema: DataWarehouseCheckDatabaseNameRetrieveOutput,
  }));
