import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const DesktopFileSystemShortcutListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/desktop_file_system_shortcut/",
    }),
  );
export type DesktopFileSystemShortcutListInput =
  typeof DesktopFileSystemShortcutListInput.Type;

// Output Schema
export const DesktopFileSystemShortcutListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          ref: Schema.optional(Schema.NullOr(Schema.String)),
          href: Schema.optional(Schema.NullOr(Schema.String)),
          order: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type DesktopFileSystemShortcutListOutput =
  typeof DesktopFileSystemShortcutListOutput.Type;

// The operation
/**
 * Sidebar shortcuts for the desktop product surface. Reuses all FileSystemShortcutViewSet
 * behaviour but is scoped to the "desktop" surface, so its shortcuts are fully isolated from
 * the default "web" surface.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemShortcutList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemShortcutListInput,
    outputSchema: DesktopFileSystemShortcutListOutput,
  }));
