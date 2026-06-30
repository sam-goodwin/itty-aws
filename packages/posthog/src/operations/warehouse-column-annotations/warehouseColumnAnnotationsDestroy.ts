import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WarehouseColumnAnnotationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_column_annotations/{id}/",
    }),
  );
export type WarehouseColumnAnnotationsDestroyInput =
  typeof WarehouseColumnAnnotationsDestroyInput.Type;

// Output Schema
export const WarehouseColumnAnnotationsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WarehouseColumnAnnotationsDestroyOutput =
  typeof WarehouseColumnAnnotationsDestroyOutput.Type;

// The operation
/**
 * Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent.
 * List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a
 * user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic
 * enrichment.
 *
 * @param id - A UUID string identifying this warehouse column annotation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseColumnAnnotationsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseColumnAnnotationsDestroyInput,
    outputSchema: WarehouseColumnAnnotationsDestroyOutput,
  }));
