import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WarehouseViewLinkDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_view_link/{id}/",
    }),
  );
export type WarehouseViewLinkDestroyInput =
  typeof WarehouseViewLinkDestroyInput.Type;

// Output Schema
export const WarehouseViewLinkDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WarehouseViewLinkDestroyOutput =
  typeof WarehouseViewLinkDestroyOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete View Columns.
 *
 * @param id - A UUID string identifying this data warehouse join.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseViewLinkDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WarehouseViewLinkDestroyInput,
    outputSchema: WarehouseViewLinkDestroyOutput,
  }),
);
