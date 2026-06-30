import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DataWarehouseProvisionCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    database_name: Schema.String,
    table_name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/data_warehouse/provision/",
    }),
  );
export type DataWarehouseProvisionCreateInput =
  typeof DataWarehouseProvisionCreateInput.Type;

// Output Schema
export const DataWarehouseProvisionCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataWarehouseProvisionCreateOutput =
  typeof DataWarehouseProvisionCreateOutput.Type;

// The operation
/**
 * Start provisioning a managed warehouse for this organization (shared by all its teams).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseProvisionCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseProvisionCreateInput,
    outputSchema: DataWarehouseProvisionCreateOutput,
  }));
