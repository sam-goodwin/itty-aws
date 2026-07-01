import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemShortcutPartialUpdateInput {
  id: string;
  project_id: string;
  path?: string;
  type?: string;
  ref?: string | null;
  href?: string | null;
  order?: number;
  created_at?: string;
}
export const DesktopFileSystemShortcutPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    order: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/desktop_file_system_shortcut/{id}/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemShortcutPartialUpdateInput>;

// Output Schema
export interface DesktopFileSystemShortcutPartialUpdateOutput {
  id?: string;
  path?: string;
  type?: string;
  ref?: string | null;
  href?: string | null;
  order?: number;
  created_at?: string;
}
export const DesktopFileSystemShortcutPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    order: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DesktopFileSystemShortcutPartialUpdateOutput>;

// The operation
/**
 * Sidebar shortcuts for the desktop product surface. Reuses all FileSystemShortcutViewSet
 * behaviour but is scoped to the "desktop" surface, so its shortcuts are fully isolated from
 * the default "web" surface.
 *
 * @param id - A UUID string identifying this file system shortcut.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemShortcutPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemShortcutPartialUpdateInput,
    outputSchema: DesktopFileSystemShortcutPartialUpdateOutput,
  }));
