import * as Schema from "effect/Schema";
import { TableSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WarehouseTablesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_tables/",
    }),
  );
export type WarehouseTablesListInput = typeof WarehouseTablesListInput.Type;

// Output Schema
export const WarehouseTablesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(Schema.Array(Schema.suspend(() => TableSchema))),
  });
export type WarehouseTablesListOutput = typeof WarehouseTablesListOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const warehouseTablesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WarehouseTablesListInput,
  outputSchema: WarehouseTablesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
