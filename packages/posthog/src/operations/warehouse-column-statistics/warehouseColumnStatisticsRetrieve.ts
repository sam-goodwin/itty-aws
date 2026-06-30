import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseColumnStatisticsRetrieveInput {
  id: string;
  project_id: string;
}
export const WarehouseColumnStatisticsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_column_statistics/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseColumnStatisticsRetrieveInput>;

// Output Schema
export interface WarehouseColumnStatisticsRetrieveOutput {
  id: string;
  table: string;
  column_name: string;
  column_type: string;
  row_count: number;
  null_count: number;
  null_fraction: number;
  min_value: string;
  max_value: string;
  has_min_max: boolean;
  computed_at: string;
  computed_for_delta_version: number;
  stats_basis: string;
  created_at: string;
  updated_at: string | null;
}
export const WarehouseColumnStatisticsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    table: Schema.String,
    column_name: Schema.String,
    column_type: Schema.String,
    row_count: Schema.Number,
    null_count: Schema.Number,
    null_fraction: Schema.Number,
    min_value: Schema.String,
    max_value: Schema.String,
    has_min_max: Schema.Boolean,
    computed_at: Schema.String,
    computed_for_delta_version: Schema.Number,
    stats_basis: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<WarehouseColumnStatisticsRetrieveOutput>;

// The operation
/**
 * Read per-column data statistics (null fraction, min/max, row count) for warehouse tables.
 * Statistics are computed automatically after a sync and surfaced to the AI agent so it can write
 * better queries. They are system-owned and read-only here. List can be filtered to one table with
 * `?table_id=<uuid>`.
 *
 * @param id - A UUID string identifying this warehouse column statistics.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseColumnStatisticsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseColumnStatisticsRetrieveInput,
    outputSchema: WarehouseColumnStatisticsRetrieveOutput,
  }));
