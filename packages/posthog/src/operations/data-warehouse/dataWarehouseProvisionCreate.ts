import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseProvisionCreateInput {
  project_id: string;
  database_name: string;
  table_name: string;
}
export const DataWarehouseProvisionCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    database_name: Schema.String,
    table_name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/data_warehouse/provision/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseProvisionCreateInput>;

// Output Schema
export type DataWarehouseProvisionCreateOutput = void;
export const DataWarehouseProvisionCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataWarehouseProvisionCreateOutput>;

// The operation
/**
 * Start provisioning a managed warehouse for this organization (shared by all its teams).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseProvisionCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseProvisionCreateInput,
    outputSchema: DataWarehouseProvisionCreateOutput,
  }));
