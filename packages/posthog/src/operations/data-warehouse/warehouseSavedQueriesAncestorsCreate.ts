import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const WarehouseSavedQueriesAncestorsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.String,
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
    folder_id: Schema.optional(Schema.NullOr(Schema.String)),
    folder_name: Schema.NullOr(Schema.String),
    latest_error: Schema.NullOr(Schema.String),
    edited_history_id: Schema.optional(Schema.NullOr(Schema.String)),
    latest_history_id: Schema.NullOr(Schema.Number),
    soft_update: Schema.optional(Schema.NullOr(Schema.Boolean)),
    dag_id: Schema.optional(Schema.NullOr(Schema.String)),
    is_materialized: Schema.NullOr(Schema.Boolean),
    origin: Schema.Unknown,
    is_test: Schema.optional(Schema.Boolean),
    expires_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_saved_queries/{id}/ancestors/",
    }),
  );
export type WarehouseSavedQueriesAncestorsCreateInput =
  typeof WarehouseSavedQueriesAncestorsCreateInput.Type;

// Output Schema
export const WarehouseSavedQueriesAncestorsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.String,
    query: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
    folder_id: Schema.optional(Schema.NullOr(Schema.String)),
    folder_name: Schema.NullOr(Schema.String),
    latest_error: Schema.NullOr(Schema.String),
    edited_history_id: Schema.optional(Schema.NullOr(Schema.String)),
    latest_history_id: Schema.NullOr(Schema.Number),
    soft_update: Schema.optional(Schema.NullOr(Schema.Boolean)),
    dag_id: Schema.optional(Schema.NullOr(Schema.String)),
    is_materialized: Schema.NullOr(Schema.Boolean),
    origin: Schema.Unknown,
    is_test: Schema.optional(Schema.Boolean),
    expires_at: Schema.NullOr(Schema.String),
  });
export type WarehouseSavedQueriesAncestorsCreateOutput =
  typeof WarehouseSavedQueriesAncestorsCreateOutput.Type;

// The operation
/**
 * Return the ancestors of this saved query.
 * By default, we return the immediate parents. The `level` parameter can be used to
 * look further back into the ancestor tree. If `level` overshoots (i.e. points to only
 * ancestors beyond the root), we return an empty list.
 *
 * @param id - A UUID string identifying this data warehouse saved query.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueriesAncestorsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueriesAncestorsCreateInput,
    outputSchema: WarehouseSavedQueriesAncestorsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
