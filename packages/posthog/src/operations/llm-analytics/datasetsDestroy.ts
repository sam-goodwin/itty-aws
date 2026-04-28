import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const DatasetsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/datasets/{id}/",
  }),
);
export type DatasetsDestroyInput = typeof DatasetsDestroyInput.Type;

// Output Schema
export const DatasetsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatasetsDestroyOutput = typeof DatasetsDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this dataset.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const datasetsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatasetsDestroyInput,
  outputSchema: DatasetsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
