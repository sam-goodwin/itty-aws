import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExternalDataSchemasDeleteDataDestroyInput {
  id: string;
  project_id: string;
}
export const ExternalDataSchemasDeleteDataDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/external_data_schemas/{id}/delete_data/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSchemasDeleteDataDestroyInput>;

// Output Schema
export type ExternalDataSchemasDeleteDataDestroyOutput = void;
export const ExternalDataSchemasDeleteDataDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExternalDataSchemasDeleteDataDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this external data schema.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSchemasDeleteDataDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSchemasDeleteDataDestroyInput,
    outputSchema: ExternalDataSchemasDeleteDataDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
