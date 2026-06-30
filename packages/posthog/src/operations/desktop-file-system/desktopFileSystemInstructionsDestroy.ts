import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DesktopFileSystemInstructionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/desktop_file_system/{id}/instructions/",
    }),
  );
export type DesktopFileSystemInstructionsDestroyInput =
  typeof DesktopFileSystemInstructionsDestroyInput.Type;

// Output Schema
export const DesktopFileSystemInstructionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DesktopFileSystemInstructionsDestroyOutput =
  typeof DesktopFileSystemInstructionsDestroyOutput.Type;

// The operation
/**
 * Soft-delete every version of this folder's instructions.
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemInstructionsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemInstructionsDestroyInput,
    outputSchema: DesktopFileSystemInstructionsDestroyOutput,
  }));
