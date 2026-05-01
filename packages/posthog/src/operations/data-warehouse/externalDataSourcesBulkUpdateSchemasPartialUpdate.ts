import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExternalDataSourcesBulkUpdateSchemasPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
    schemas: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          should_sync: Schema.optional(Schema.Boolean),
          sync_type: Schema.optional(Schema.Unknown),
          incremental_field: Schema.optional(Schema.NullOr(Schema.String)),
          incremental_field_type: Schema.optional(Schema.NullOr(Schema.String)),
          sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
          sync_time_of_day: Schema.optional(Schema.NullOr(Schema.String)),
          cdc_table_mode: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/external_data_sources/{id}/bulk_update_schemas/",
    }),
  );
export type ExternalDataSourcesBulkUpdateSchemasPartialUpdateInput =
  typeof ExternalDataSourcesBulkUpdateSchemasPartialUpdateInput.Type;

// Output Schema
export const ExternalDataSourcesBulkUpdateSchemasPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          label: Schema.optional(Schema.NullOr(Schema.String)),
          table: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          should_sync: Schema.optional(Schema.Boolean),
          last_synced_at: Schema.optional(Schema.NullOr(Schema.String)),
          latest_error: Schema.optional(Schema.NullOr(Schema.String)),
          incremental: Schema.optional(Schema.Boolean),
          status: Schema.optional(Schema.NullOr(Schema.String)),
          sync_type: Schema.optional(Schema.Unknown),
          incremental_field: Schema.optional(Schema.NullOr(Schema.String)),
          incremental_field_type: Schema.optional(Schema.Unknown),
          sync_frequency: Schema.optional(Schema.Unknown),
          sync_time_of_day: Schema.optional(Schema.NullOr(Schema.String)),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          primary_key_columns: Schema.optional(
            Schema.NullOr(Schema.Array(Schema.String)),
          ),
          cdc_table_mode: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  });
export type ExternalDataSourcesBulkUpdateSchemasPartialUpdateOutput =
  typeof ExternalDataSourcesBulkUpdateSchemasPartialUpdateOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param id - A UUID string identifying this external data source.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const externalDataSourcesBulkUpdateSchemasPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesBulkUpdateSchemasPartialUpdateInput,
    outputSchema: ExternalDataSourcesBulkUpdateSchemasPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
