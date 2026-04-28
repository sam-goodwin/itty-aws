import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExternalDataSourcesWizardRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/wizard/",
    }),
  );
export type ExternalDataSourcesWizardRetrieveInput =
  typeof ExternalDataSourcesWizardRetrieveInput.Type;

// Output Schema
export const ExternalDataSourcesWizardRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSourcesWizardRetrieveOutput =
  typeof ExternalDataSourcesWizardRetrieveOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesWizardRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesWizardRetrieveInput,
    outputSchema: ExternalDataSourcesWizardRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
