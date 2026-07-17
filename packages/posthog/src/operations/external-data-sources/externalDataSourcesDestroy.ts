import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExternalDataSourcesDestroyInput {
  id: string;
  project_id: string;
}
export const ExternalDataSourcesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/external_data_sources/{id}/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesDestroyInput>;

// Output Schema
export type ExternalDataSourcesDestroyOutput = void;
export const ExternalDataSourcesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExternalDataSourcesDestroyOutput>;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param id - A UUID string identifying this external data source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExternalDataSourcesDestroyInput,
  outputSchema: ExternalDataSourcesDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
