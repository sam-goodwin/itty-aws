import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemCountCreateInput {
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
export const DesktopFileSystemCountCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/api/projects/{project_id}/desktop_file_system/{id}/count/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemCountCreateInput>;

// Output Schema
export type DesktopFileSystemCountCreateOutput = void;
export const DesktopFileSystemCountCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DesktopFileSystemCountCreateOutput>;

// The operation
/**
 * Get count of all files in a folder.
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemCountCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemCountCreateInput,
    outputSchema: DesktopFileSystemCountCreateOutput,
  }));
