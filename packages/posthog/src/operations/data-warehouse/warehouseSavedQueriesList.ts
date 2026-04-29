import * as Schema from "effect/Schema";
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
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        deleted: Schema.NullOr(Schema.Boolean),
        name: Schema.String,
        created_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        created_at: Schema.String,
        sync_frequency: Schema.NullOr(Schema.String),
        columns: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
        status: Schema.Unknown,
        last_run_at: Schema.NullOr(Schema.String),
        managed_viewset_kind: Schema.NullOr(Schema.String),
        folder_id: Schema.NullOr(Schema.String),
        folder_name: Schema.NullOr(Schema.String),
        latest_error: Schema.NullOr(Schema.String),
        is_materialized: Schema.NullOr(Schema.Boolean),
        origin: Schema.Unknown,
        is_test: Schema.Boolean,
        expires_at: Schema.NullOr(Schema.String),
      }),
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
