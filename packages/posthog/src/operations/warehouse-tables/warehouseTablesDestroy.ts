import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const WarehouseTablesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_tables/{id}/",
    }),
  );
export type WarehouseTablesDestroyInput =
  typeof WarehouseTablesDestroyInput.Type;

// Output Schema
export const WarehouseTablesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WarehouseTablesDestroyOutput =
  typeof WarehouseTablesDestroyOutput.Type;

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
