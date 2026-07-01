import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemShortcutDestroyInput {
  id: string;
  project_id: string;
}
export const DesktopFileSystemShortcutDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/desktop_file_system_shortcut/{id}/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemShortcutDestroyInput>;

// Output Schema
export type DesktopFileSystemShortcutDestroyOutput = void;
export const DesktopFileSystemShortcutDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DesktopFileSystemShortcutDestroyOutput>;

// The operation
/**
 * Sidebar shortcuts for the desktop product surface. Reuses all FileSystemShortcutViewSet
 * behaviour but is scoped to the "desktop" surface, so its shortcuts are fully isolated from
 * the default "web" surface.
 *
 * @param id - A UUID string identifying this file system shortcut.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemShortcutDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemShortcutDestroyInput,
    outputSchema: DesktopFileSystemShortcutDestroyOutput,
  }));
