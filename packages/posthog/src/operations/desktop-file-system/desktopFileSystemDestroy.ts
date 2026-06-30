import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DesktopFileSystemDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/desktop_file_system/{id}/",
    }),
  );
export type DesktopFileSystemDestroyInput =
  typeof DesktopFileSystemDestroyInput.Type;

// Output Schema
export const DesktopFileSystemDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DesktopFileSystemDestroyOutput =
  typeof DesktopFileSystemDestroyOutput.Type;

// The operation
/**
 * The file tree for the desktop product surface. Reuses all FileSystemViewSet behaviour but is
 * scoped to the "desktop" surface, so its tree is fully isolated from the default "web" tree.
 * Adds per-folder, versioned markdown instructions describing the contents of a folder.
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DesktopFileSystemDestroyInput,
    outputSchema: DesktopFileSystemDestroyOutput,
  }),
);
