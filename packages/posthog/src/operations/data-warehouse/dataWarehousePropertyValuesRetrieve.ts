import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehousePropertyValuesRetrieveInput {
  project_id: string;
}
export const DataWarehousePropertyValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/property_values/",
    }),
  ) as unknown as Schema.Codec<DataWarehousePropertyValuesRetrieveInput>;

// Output Schema
export type DataWarehousePropertyValuesRetrieveOutput = void;
export const DataWarehousePropertyValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataWarehousePropertyValuesRetrieveOutput>;

// The operation
/**
 * API endpoints for data warehouse aggregate statistics and operations.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehousePropertyValuesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataWarehousePropertyValuesRetrieveInput,
    outputSchema: DataWarehousePropertyValuesRetrieveOutput,
  }));
