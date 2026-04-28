import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ExternalDataSourcesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/external_data_sources/{id}/",
    }),
  );
export type ExternalDataSourcesDestroyInput =
  typeof ExternalDataSourcesDestroyInput.Type;

// Output Schema
export const ExternalDataSourcesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSourcesDestroyOutput =
  typeof ExternalDataSourcesDestroyOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param id - A UUID string identifying this external data source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalDataSourcesDestroyInput,
    outputSchema: ExternalDataSourcesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
