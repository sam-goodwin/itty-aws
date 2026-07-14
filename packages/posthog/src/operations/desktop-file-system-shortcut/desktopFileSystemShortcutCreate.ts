import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemShortcutCreateInput {
  project_id: string;
  id?: string;
  path?: string;
  type?: string;
  ref?: string | null;
  href?: string | null;
  order?: number;
  created_at?: string;
}
export const DesktopFileSystemShortcutCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    order: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/desktop_file_system_shortcut/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemShortcutCreateInput>;

// Output Schema
export interface DesktopFileSystemShortcutCreateOutput {
  id?: string;
  path?: string;
  type?: string;
  ref?: string | null;
  href?: string | null;
  order?: number;
  created_at?: string;
}
export const DesktopFileSystemShortcutCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    order: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DesktopFileSystemShortcutCreateOutput>;

// The operation
/**
 * Sidebar shortcuts for the desktop product surface. Reuses all FileSystemShortcutViewSet
 * behaviour but is scoped to the "desktop" surface, so its shortcuts are fully isolated from
 * the default "web" surface.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemShortcutCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemShortcutCreateInput,
    outputSchema: DesktopFileSystemShortcutCreateOutput,
  }));
