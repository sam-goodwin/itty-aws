import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseViewLinksValidateCreateInput {
  project_id: string;
  joining_table_name: string;
  joining_table_key: string;
  source_table_name: string;
  source_table_key: string;
}
export const WarehouseViewLinksValidateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    joining_table_name: Schema.String,
    joining_table_key: Schema.String,
    source_table_name: Schema.String,
    source_table_key: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_view_links/validate/",
    }),
  ) as unknown as Schema.Codec<WarehouseViewLinksValidateCreateInput>;

// Output Schema
export type WarehouseViewLinksValidateCreateOutput = void;
export const WarehouseViewLinksValidateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseViewLinksValidateCreateOutput>;

// The operation
/**
 * Create, Read, Update and Delete View Columns.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseViewLinksValidateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseViewLinksValidateCreateInput,
    outputSchema: WarehouseViewLinksValidateCreateOutput,
  }));
