import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const PersistedFolderDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/persisted_folder/{id}/",
    }),
  );
export type PersistedFolderDestroyInput =
  typeof PersistedFolderDestroyInput.Type;

// Output Schema
export const PersistedFolderDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PersistedFolderDestroyOutput =
  typeof PersistedFolderDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this Persisted Folder.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const persistedFolderDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PersistedFolderDestroyInput,
    outputSchema: PersistedFolderDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
