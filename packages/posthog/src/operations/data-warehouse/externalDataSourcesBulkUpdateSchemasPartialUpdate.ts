import * as Schema from "effect/Schema";
import {
  ExternalDataSchemaSchema,
  ExternalDataSourceBulkUpdateSchemaSchema,
} from "./_schemas.ts";
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
        Schema.suspend(() => ExternalDataSourceBulkUpdateSchemaSchema),
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
      Schema.Array(Schema.suspend(() => ExternalDataSchemaSchema)),
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
