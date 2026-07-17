import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WarehouseTablesRefreshSchemaCreateInput {
  id: string;
  project_id: string;
}
export const WarehouseTablesRefreshSchemaCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_tables/{id}/refresh_schema/",
    }),
  ) as unknown as Schema.Codec<WarehouseTablesRefreshSchemaCreateInput>;

// Output Schema
export type WarehouseTablesRefreshSchemaCreateOutput = void;
export const WarehouseTablesRefreshSchemaCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseTablesRefreshSchemaCreateOutput>;

// The operation
/**
 * Refresh table schema from source
 *
 * Re-introspect a self-managed (manually linked) warehouse table's schema from its underlying source files and overwrite its stored column list. Use when the source schema has evolved (e.g. new columns in the underlying Delta/Parquet/CSV files) but queries still can't see the new columns, because PostHog serves a cached column snapshot until the table is refreshed. Not for tables managed by an external data source sync — those refresh on their own schedule.
 *
 * @param id - A UUID string identifying this data warehouse table.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseTablesRefreshSchemaCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WarehouseTablesRefreshSchemaCreateInput,
    outputSchema: WarehouseTablesRefreshSchemaCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
