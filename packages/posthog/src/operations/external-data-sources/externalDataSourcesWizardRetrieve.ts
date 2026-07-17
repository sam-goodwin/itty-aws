import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExternalDataSourcesWizardRetrieveInput {
  project_id: string;
}
export const ExternalDataSourcesWizardRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/wizard/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesWizardRetrieveInput>;

// Output Schema
export type ExternalDataSourcesWizardRetrieveOutput = void;
export const ExternalDataSourcesWizardRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExternalDataSourcesWizardRetrieveOutput>;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesWizardRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesWizardRetrieveInput,
    outputSchema: ExternalDataSourcesWizardRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
