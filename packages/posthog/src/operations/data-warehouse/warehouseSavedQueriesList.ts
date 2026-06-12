import * as Schema from "effect/Schema";
import { DataWarehouseSavedQueryMinimalSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WarehouseSavedQueriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_saved_queries/",
    }),
  );
export type WarehouseSavedQueriesListInput =
  typeof WarehouseSavedQueriesListInput.Type;

// Output Schema
export const WarehouseSavedQueriesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => DataWarehouseSavedQueryMinimalSchema)),
    ),
  });
export type WarehouseSavedQueriesListOutput =
  typeof WarehouseSavedQueriesListOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param page - A page number within the paginated result set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const warehouseSavedQueriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WarehouseSavedQueriesListInput,
    outputSchema: WarehouseSavedQueriesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
