import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExternalDataSourcesCheckCdcPrerequisitesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/external_data_sources/check_cdc_prerequisites/",
    }),
  );
export type ExternalDataSourcesCheckCdcPrerequisitesCreateInput =
  typeof ExternalDataSourcesCheckCdcPrerequisitesCreateInput.Type;

// Output Schema
export const ExternalDataSourcesCheckCdcPrerequisitesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valid: Schema.optional(Schema.Boolean),
    errors: Schema.optional(Schema.Array(Schema.String)),
  });
export type ExternalDataSourcesCheckCdcPrerequisitesCreateOutput =
  typeof ExternalDataSourcesCheckCdcPrerequisitesCreateOutput.Type;

// The operation
/**
 * Validate CDC prerequisites against a live Postgres connection.
 * Used by the source wizard to surface ✅/❌ checks before source creation,
 * and by the self-managed setup popup to verify user-created publications.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesCheckCdcPrerequisitesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesCheckCdcPrerequisitesCreateInput,
    outputSchema: ExternalDataSourcesCheckCdcPrerequisitesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
