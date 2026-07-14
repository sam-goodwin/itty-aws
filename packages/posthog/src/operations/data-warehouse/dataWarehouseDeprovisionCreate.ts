import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseDeprovisionCreateInput {
  project_id: string;
}
export const DataWarehouseDeprovisionCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/data_warehouse/deprovision/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseDeprovisionCreateInput>;

// Output Schema
export type DataWarehouseDeprovisionCreateOutput = void;
export const DataWarehouseDeprovisionCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataWarehouseDeprovisionCreateOutput>;

// The operation
/**
 * Start deprovisioning the organization's managed warehouse. Restricted to organization admins.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseDeprovisionCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseDeprovisionCreateInput,
    outputSchema: DataWarehouseDeprovisionCreateOutput,
  }));
