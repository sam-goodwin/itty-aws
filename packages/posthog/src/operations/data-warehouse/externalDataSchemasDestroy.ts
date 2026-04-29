import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExternalDataSchemasDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/external_data_schemas/{id}/",
    }),
  );
export type ExternalDataSchemasDestroyInput =
  typeof ExternalDataSchemasDestroyInput.Type;

// Output Schema
export const ExternalDataSchemasDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSchemasDestroyOutput =
  typeof ExternalDataSchemasDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this external data schema.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSchemasDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalDataSchemasDestroyInput,
    outputSchema: ExternalDataSchemasDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
