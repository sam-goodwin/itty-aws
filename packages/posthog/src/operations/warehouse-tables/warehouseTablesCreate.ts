import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const WarehouseTablesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.String,
    format: Schema.Literals([
      "CSV",
      "CSVWithNames",
      "Parquet",
      "JSONEachRow",
      "Delta",
      "DeltaS3Wrapper",
    ]),
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
    url_pattern: Schema.String,
    credential: Schema.Struct({
      id: Schema.String,
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
      access_key: Schema.String,
      access_secret: SensitiveString,
    }),
    columns: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    external_data_source: Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      created_by: Schema.NullOr(Schema.Number),
      status: Schema.String,
      source_type: Schema.Struct({}),
    }),
    external_schema: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    options: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_tables/",
    }),
  );
export type WarehouseTablesCreateInput = typeof WarehouseTablesCreateInput.Type;

// Output Schema
export const WarehouseTablesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    name: Schema.String,
    format: Schema.Literals([
      "CSV",
      "CSVWithNames",
      "Parquet",
      "JSONEachRow",
      "Delta",
      "DeltaS3Wrapper",
    ]),
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
    url_pattern: Schema.String,
    credential: Schema.Struct({
      id: Schema.String,
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
      access_key: Schema.String,
      access_secret: SensitiveString,
    }),
    columns: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    external_data_source: Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      created_by: Schema.NullOr(Schema.Number),
      status: Schema.String,
      source_type: Schema.Struct({}),
    }),
    external_schema: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    options: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type WarehouseTablesCreateOutput =
  typeof WarehouseTablesCreateOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseTablesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WarehouseTablesCreateInput,
    outputSchema: WarehouseTablesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
