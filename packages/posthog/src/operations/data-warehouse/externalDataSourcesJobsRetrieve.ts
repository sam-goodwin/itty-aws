import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExternalDataSourcesJobsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/{id}/jobs/",
    }),
  );
export type ExternalDataSourcesJobsRetrieveInput =
  typeof ExternalDataSourcesJobsRetrieveInput.Type;

// Output Schema
export const ExternalDataSourcesJobsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSourcesJobsRetrieveOutput =
  typeof ExternalDataSourcesJobsRetrieveOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param id - A UUID string identifying this external data source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesJobsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesJobsRetrieveInput,
    outputSchema: ExternalDataSourcesJobsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
