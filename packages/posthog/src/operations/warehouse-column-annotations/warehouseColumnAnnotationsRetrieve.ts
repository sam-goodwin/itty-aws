import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseColumnAnnotationsRetrieveInput {
  id: string;
  project_id: string;
}
export const WarehouseColumnAnnotationsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_column_annotations/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseColumnAnnotationsRetrieveInput>;

// Output Schema
export interface WarehouseColumnAnnotationsRetrieveOutput {
  id: string;
  table: string;
  column_name?: string;
  description: string;
  description_source: "canonical" | "ai_generated" | "user_edited";
  ai_model: string;
  is_user_edited: boolean;
  created_at: string;
  updated_at: string | null;
}
export const WarehouseColumnAnnotationsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    table: Schema.String,
    column_name: Schema.optional(Schema.String),
    description: Schema.String,
    description_source: Schema.Literals([
      "canonical",
      "ai_generated",
      "user_edited",
    ]),
    ai_model: Schema.String,
    is_user_edited: Schema.Boolean,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<WarehouseColumnAnnotationsRetrieveOutput>;

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
export const warehouseColumnAnnotationsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WarehouseColumnAnnotationsRetrieveInput,
    outputSchema: WarehouseColumnAnnotationsRetrieveOutput,
  }));
