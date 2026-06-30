import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WarehouseViewLinksDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_view_links/{id}/",
    }),
  );
export type WarehouseViewLinksDestroyInput =
  typeof WarehouseViewLinksDestroyInput.Type;

// Output Schema
export const WarehouseViewLinksDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WarehouseViewLinksDestroyOutput =
  typeof WarehouseViewLinksDestroyOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete View Columns.
 *
 * @param id - A UUID string identifying this data warehouse join.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseViewLinksDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WarehouseViewLinksDestroyInput,
    outputSchema: WarehouseViewLinksDestroyOutput,
  }),
);
