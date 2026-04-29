import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExternalDataSourcesDatabaseSchemaCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source_type: Schema.Struct({}),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/external_data_sources/database_schema/",
    }),
  );
export type ExternalDataSourcesDatabaseSchemaCreateInput =
  typeof ExternalDataSourcesDatabaseSchemaCreateInput.Type;

// Output Schema
export const ExternalDataSourcesDatabaseSchemaCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSourcesDatabaseSchemaCreateOutput =
  typeof ExternalDataSourcesDatabaseSchemaCreateOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesDatabaseSchemaCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesDatabaseSchemaCreateInput,
    outputSchema: ExternalDataSourcesDatabaseSchemaCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
