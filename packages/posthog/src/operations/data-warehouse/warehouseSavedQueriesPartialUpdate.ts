import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WarehouseSavedQueriesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.optional(Schema.String),
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
    columns: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    status: Schema.optional(Schema.Unknown),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    managed_viewset_kind: Schema.optional(Schema.NullOr(Schema.String)),
    folder_id: Schema.optional(Schema.NullOr(Schema.String)),
    folder_name: Schema.optional(Schema.NullOr(Schema.String)),
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    edited_history_id: Schema.optional(Schema.NullOr(Schema.String)),
    latest_history_id: Schema.optional(Schema.NullOr(Schema.Number)),
    soft_update: Schema.optional(Schema.NullOr(Schema.Boolean)),
    dag_id: Schema.optional(Schema.NullOr(Schema.String)),
    is_materialized: Schema.optional(Schema.NullOr(Schema.Boolean)),
    origin: Schema.optional(Schema.Unknown),
    is_test: Schema.optional(Schema.Boolean),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/warehouse_saved_queries/{id}/",
    }),
  );
export type WarehouseSavedQueriesPartialUpdateInput =
  typeof WarehouseSavedQueriesPartialUpdateInput.Type;

// Output Schema
export const WarehouseSavedQueriesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.optional(Schema.String),
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
    columns: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    status: Schema.optional(Schema.Unknown),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    managed_viewset_kind: Schema.optional(Schema.NullOr(Schema.String)),
    folder_id: Schema.optional(Schema.NullOr(Schema.String)),
    folder_name: Schema.optional(Schema.NullOr(Schema.String)),
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    edited_history_id: Schema.optional(Schema.NullOr(Schema.String)),
    latest_history_id: Schema.optional(Schema.NullOr(Schema.Number)),
    soft_update: Schema.optional(Schema.NullOr(Schema.Boolean)),
    dag_id: Schema.optional(Schema.NullOr(Schema.String)),
    is_materialized: Schema.optional(Schema.NullOr(Schema.Boolean)),
    origin: Schema.optional(Schema.Unknown),
    is_test: Schema.optional(Schema.Boolean),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type WarehouseSavedQueriesPartialUpdateOutput =
  typeof WarehouseSavedQueriesPartialUpdateOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param id - A UUID string identifying this data warehouse saved query.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueriesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueriesPartialUpdateInput,
    outputSchema: WarehouseSavedQueriesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
