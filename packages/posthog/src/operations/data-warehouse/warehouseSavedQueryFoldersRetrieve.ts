import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WarehouseSavedQueryFoldersRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_saved_query_folders/{id}/",
    }),
  );
export type WarehouseSavedQueryFoldersRetrieveInput =
  typeof WarehouseSavedQueryFoldersRetrieveInput.Type;

// Output Schema
export const WarehouseSavedQueryFoldersRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    created_at: Schema.String,
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
    view_count: Schema.Number,
  });
export type WarehouseSavedQueryFoldersRetrieveOutput =
  typeof WarehouseSavedQueryFoldersRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this data warehouse saved query folder.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueryFoldersRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueryFoldersRetrieveInput,
    outputSchema: WarehouseSavedQueryFoldersRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
