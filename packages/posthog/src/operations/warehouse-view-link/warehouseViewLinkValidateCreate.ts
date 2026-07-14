import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseViewLinkValidateCreateInput {
  project_id: string;
  joining_table_name: string;
  joining_table_key: string;
  source_table_name: string;
  source_table_key: string;
}
export const WarehouseViewLinkValidateCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    joining_table_name: Schema.String,
    joining_table_key: Schema.String,
    source_table_name: Schema.String,
    source_table_key: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_view_link/validate/",
    }),
  ) as unknown as Schema.Codec<WarehouseViewLinkValidateCreateInput>;

// Output Schema
export type WarehouseViewLinkValidateCreateOutput = void;
export const WarehouseViewLinkValidateCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseViewLinkValidateCreateOutput>;

// The operation
/**
 * Create, Read, Update and Delete View Columns.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseViewLinkValidateCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WarehouseViewLinkValidateCreateInput,
    outputSchema: WarehouseViewLinkValidateCreateOutput,
  }));
