import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WarehouseSavedQueryFoldersDestroyInput {
  id: string;
  project_id: string;
}
export const WarehouseSavedQueryFoldersDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_saved_query_folders/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseSavedQueryFoldersDestroyInput>;

// Output Schema
export type WarehouseSavedQueryFoldersDestroyOutput = void;
export const WarehouseSavedQueryFoldersDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseSavedQueryFoldersDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this data warehouse saved query folder.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueryFoldersDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueryFoldersDestroyInput,
    outputSchema: WarehouseSavedQueryFoldersDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
