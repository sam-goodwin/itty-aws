import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WarehouseColumnAnnotationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    table_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_column_annotations/",
    }),
  );
export type WarehouseColumnAnnotationsListInput =
  typeof WarehouseColumnAnnotationsListInput.Type;

// Output Schema
export const WarehouseColumnAnnotationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type WarehouseColumnAnnotationsListOutput =
  typeof WarehouseColumnAnnotationsListOutput.Type;

// The operation
/**
 * Read and edit semantic descriptions of warehouse tables and columns surfaced to the AI agent.
 * List can be filtered to one table with `?table_id=<uuid>`. Any create or update is treated as a
 * user edit (`is_user_edited=True`), which protects the row from being overwritten by automatic
 * enrichment.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param table_id - Only return annotations for this data warehouse table.
 */
export const warehouseColumnAnnotationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseColumnAnnotationsListInput,
    outputSchema: WarehouseColumnAnnotationsListOutput,
  }));
