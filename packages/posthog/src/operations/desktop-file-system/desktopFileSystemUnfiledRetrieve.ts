import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DesktopFileSystemUnfiledRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/desktop_file_system/unfiled/",
    }),
  );
export type DesktopFileSystemUnfiledRetrieveInput =
  typeof DesktopFileSystemUnfiledRetrieveInput.Type;

// Output Schema
export const DesktopFileSystemUnfiledRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DesktopFileSystemUnfiledRetrieveOutput =
  typeof DesktopFileSystemUnfiledRetrieveOutput.Type;

// The operation
/**
 * The file tree for the desktop product surface. Reuses all FileSystemViewSet behaviour but is
 * scoped to the "desktop" surface, so its tree is fully isolated from the default "web" tree.
 * Adds per-folder, versioned markdown instructions describing the contents of a folder.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemUnfiledRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemUnfiledRetrieveInput,
    outputSchema: DesktopFileSystemUnfiledRetrieveOutput,
  }));
