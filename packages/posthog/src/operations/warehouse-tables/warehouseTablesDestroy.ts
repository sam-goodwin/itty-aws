import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WarehouseTablesDestroyInput {
  id: string;
  project_id: string;
}
export const WarehouseTablesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_tables/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseTablesDestroyInput>;

// Output Schema
export type WarehouseTablesDestroyOutput = void;
export const WarehouseTablesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseTablesDestroyOutput>;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param id - A UUID string identifying this data warehouse table.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseTablesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WarehouseTablesDestroyInput,
    outputSchema: WarehouseTablesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
