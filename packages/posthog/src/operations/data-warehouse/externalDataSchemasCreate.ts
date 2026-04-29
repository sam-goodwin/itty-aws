import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExternalDataSchemasCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.String,
    label: Schema.NullOr(Schema.String),
    table: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    should_sync: Schema.optional(Schema.Boolean),
    last_synced_at: Schema.NullOr(Schema.String),
    latest_error: Schema.NullOr(Schema.String),
    incremental: Schema.Boolean,
    status: Schema.NullOr(Schema.String),
    sync_type: Schema.optional(Schema.Unknown),
    incremental_field: Schema.optional(Schema.NullOr(Schema.String)),
    incremental_field_type: Schema.optional(Schema.Unknown),
    sync_frequency: Schema.optional(Schema.Unknown),
    sync_time_of_day: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.NullOr(Schema.String),
    primary_key_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    cdc_table_mode: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/external_data_schemas/",
    }),
  );
export type ExternalDataSchemasCreateInput =
  typeof ExternalDataSchemasCreateInput.Type;

// Output Schema
export const ExternalDataSchemasCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    label: Schema.NullOr(Schema.String),
    table: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    should_sync: Schema.optional(Schema.Boolean),
    last_synced_at: Schema.NullOr(Schema.String),
    latest_error: Schema.NullOr(Schema.String),
    incremental: Schema.Boolean,
    status: Schema.NullOr(Schema.String),
    sync_type: Schema.optional(Schema.Unknown),
    incremental_field: Schema.optional(Schema.NullOr(Schema.String)),
    incremental_field_type: Schema.optional(Schema.Unknown),
    sync_frequency: Schema.optional(Schema.Unknown),
    sync_time_of_day: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.NullOr(Schema.String),
    primary_key_columns: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    cdc_table_mode: Schema.optional(Schema.Unknown),
  });
export type ExternalDataSchemasCreateOutput =
  typeof ExternalDataSchemasCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSchemasCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalDataSchemasCreateInput,
    outputSchema: ExternalDataSchemasCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
