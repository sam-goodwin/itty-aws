import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WarehouseSavedQueriesDestroyInput {
  id: string;
  project_id: string;
}
export const WarehouseSavedQueriesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/warehouse_saved_queries/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseSavedQueriesDestroyInput>;

// Output Schema
export type WarehouseSavedQueriesDestroyOutput = void;
export const WarehouseSavedQueriesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseSavedQueriesDestroyOutput>;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param id - A UUID string identifying this data warehouse saved query.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueriesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueriesDestroyInput,
    outputSchema: WarehouseSavedQueriesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
