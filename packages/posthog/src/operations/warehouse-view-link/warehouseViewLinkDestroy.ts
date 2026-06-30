import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseViewLinkDestroyInput {
  id: string;
  project_id: string;
}
export const WarehouseViewLinkDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_view_link/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseViewLinkDestroyInput>;

// Output Schema
export type WarehouseViewLinkDestroyOutput = void;
export const WarehouseViewLinkDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseViewLinkDestroyOutput>;

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
