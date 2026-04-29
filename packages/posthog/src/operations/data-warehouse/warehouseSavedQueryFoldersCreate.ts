import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const WarehouseSavedQueryFoldersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_saved_query_folders/",
    }),
  );
export type WarehouseSavedQueryFoldersCreateInput =
  typeof WarehouseSavedQueryFoldersCreateInput.Type;

// Output Schema
export const WarehouseSavedQueryFoldersCreateOutput =
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
export type WarehouseSavedQueryFoldersCreateOutput =
  typeof WarehouseSavedQueryFoldersCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueryFoldersCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueryFoldersCreateInput,
    outputSchema: WarehouseSavedQueryFoldersCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
