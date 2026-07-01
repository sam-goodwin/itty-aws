import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseColumnAnnotationsPartialUpdateInput {
  id: string;
  project_id: string;
  table?: string;
  column_name?: string;
  description?: string;
  description_source?: "canonical" | "ai_generated" | "user_edited";
  ai_model?: string;
  is_user_edited?: boolean;
  created_at?: string;
  updated_at?: string | null;
}
export const WarehouseColumnAnnotationsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    table: Schema.optional(Schema.String),
    column_name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    description_source: Schema.optional(
      Schema.Literals(["canonical", "ai_generated", "user_edited"]),
    ),
    ai_model: Schema.optional(Schema.String),
    is_user_edited: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/warehouse_column_annotations/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseColumnAnnotationsPartialUpdateInput>;

// Output Schema
export interface WarehouseColumnAnnotationsPartialUpdateOutput {
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
export const WarehouseColumnAnnotationsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WarehouseColumnAnnotationsPartialUpdateOutput>;

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
export const warehouseColumnAnnotationsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseColumnAnnotationsPartialUpdateInput,
    outputSchema: WarehouseColumnAnnotationsPartialUpdateOutput,
  }));
