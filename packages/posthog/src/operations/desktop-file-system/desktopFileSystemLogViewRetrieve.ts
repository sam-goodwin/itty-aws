import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemLogViewRetrieveInput {
  project_id: string;
}
export const DesktopFileSystemLogViewRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/desktop_file_system/log_view/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemLogViewRetrieveInput>;

// Output Schema
export type DesktopFileSystemLogViewRetrieveOutput = void;
export const DesktopFileSystemLogViewRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DesktopFileSystemLogViewRetrieveOutput>;

// The operation
/**
 * The file tree for the desktop product surface. Reuses all FileSystemViewSet behaviour but is
 * scoped to the "desktop" surface, so its tree is fully isolated from the default "web" tree.
 * Adds per-folder, versioned markdown instructions describing the contents of a folder.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemLogViewRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemLogViewRetrieveInput,
    outputSchema: DesktopFileSystemLogViewRetrieveOutput,
  }));
