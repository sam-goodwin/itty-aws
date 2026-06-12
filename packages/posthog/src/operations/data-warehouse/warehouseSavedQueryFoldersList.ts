import * as Schema from "effect/Schema";
import { DataWarehouseSavedQueryFolderSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WarehouseSavedQueryFoldersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_saved_query_folders/",
    }),
  );
export type WarehouseSavedQueryFoldersListInput =
  typeof WarehouseSavedQueryFoldersListInput.Type;

// Output Schema
export const WarehouseSavedQueryFoldersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => DataWarehouseSavedQueryFolderSchema),
  );
export type WarehouseSavedQueryFoldersListOutput =
  typeof WarehouseSavedQueryFoldersListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueryFoldersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueryFoldersListInput,
    outputSchema: WarehouseSavedQueryFoldersListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
