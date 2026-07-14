import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseEnableBackfillCreateInput {
  project_id: string;
  table_name: string;
}
export const DataWarehouseEnableBackfillCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    table_name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/data_warehouse/enable_backfill/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseEnableBackfillCreateInput>;

// Output Schema
export interface DataWarehouseEnableBackfillCreateOutput {
  enabled: boolean;
  table_suffix: string;
}
export const DataWarehouseEnableBackfillCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    table_suffix: Schema.String,
  }) as unknown as Schema.Codec<DataWarehouseEnableBackfillCreateOutput>;

// The operation
/**
 * Enable warehouse backfill for this environment with a dedicated set of tables.
 * Requires a table name and records the environment's membership in the
 * organization's managed warehouse. Restricted to organization admins.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseEnableBackfillCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseEnableBackfillCreateInput,
    outputSchema: DataWarehouseEnableBackfillCreateOutput,
  }));
