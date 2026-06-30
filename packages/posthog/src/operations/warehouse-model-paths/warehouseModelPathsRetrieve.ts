import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const WarehouseModelPathsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_model_paths/{id}/",
    }),
  );
export type WarehouseModelPathsRetrieveInput =
  typeof WarehouseModelPathsRetrieveInput.Type;

// Output Schema
export const WarehouseModelPathsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    path: Schema.Array(Schema.String),
    team: Schema.Number,
    table: Schema.optional(Schema.NullOr(Schema.String)),
    saved_query: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    created_by: Schema.Struct({
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
    updated_at: Schema.NullOr(Schema.String),
  });
export type WarehouseModelPathsRetrieveOutput =
  typeof WarehouseModelPathsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this data warehouse model path.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseModelPathsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WarehouseModelPathsRetrieveInput,
    outputSchema: WarehouseModelPathsRetrieveOutput,
  }),
);
