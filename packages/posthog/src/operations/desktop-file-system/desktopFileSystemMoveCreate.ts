import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemMoveCreateInput {
  id: string;
  project_id: string;
  path?: string;
  depth?: number | null;
  type?: string;
  ref?: string | null;
  href?: string | null;
  meta?: unknown;
  shortcut?: boolean | null;
  created_at?: string;
  last_viewed_at?: string | null;
}
export const DesktopFileSystemMoveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    path: Schema.optional(Schema.String),
    depth: Schema.optional(Schema.NullOr(Schema.Number)),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    meta: Schema.optional(Schema.Unknown),
    shortcut: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.String),
    last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/desktop_file_system/{id}/move/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemMoveCreateInput>;

// Output Schema
export type DesktopFileSystemMoveCreateOutput = void;
export const DesktopFileSystemMoveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DesktopFileSystemMoveCreateOutput>;

// The operation
/**
 * The file tree for the desktop product surface. Reuses all FileSystemViewSet behaviour but is
 * scoped to the "desktop" surface, so its tree is fully isolated from the default "web" tree.
 * Adds per-folder, versioned markdown instructions describing the contents of a folder.
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemMoveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DesktopFileSystemMoveCreateInput,
    outputSchema: DesktopFileSystemMoveCreateOutput,
  }),
);
