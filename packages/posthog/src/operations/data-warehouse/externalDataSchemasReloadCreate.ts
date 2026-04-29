import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExternalDataSchemasReloadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      path: "/api/projects/{project_id}/external_data_schemas/{id}/reload/",
    }),
  );
export type ExternalDataSchemasReloadCreateInput =
  typeof ExternalDataSchemasReloadCreateInput.Type;

// Output Schema
export const ExternalDataSchemasReloadCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSchemasReloadCreateOutput =
  typeof ExternalDataSchemasReloadCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this external data schema.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSchemasReloadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSchemasReloadCreateInput,
    outputSchema: ExternalDataSchemasReloadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
