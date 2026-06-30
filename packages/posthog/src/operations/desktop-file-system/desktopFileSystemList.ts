import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const DesktopFileSystemListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/desktop_file_system/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemListInput>;

// Output Schema
export interface DesktopFileSystemListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    path?: string;
    depth?: number | null;
    type?: string;
    ref?: string | null;
    href?: string | null;
    meta?: unknown;
    shortcut?: boolean | null;
    created_at?: string;
    last_viewed_at?: string | null;
  }[];
}
export const DesktopFileSystemListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
          depth: Schema.optional(Schema.NullOr(Schema.Number)),
          type: Schema.optional(Schema.String),
          ref: Schema.optional(Schema.NullOr(Schema.String)),
          href: Schema.optional(Schema.NullOr(Schema.String)),
          meta: Schema.optional(Schema.Unknown),
          shortcut: Schema.optional(Schema.NullOr(Schema.Boolean)),
          created_at: Schema.optional(Schema.String),
          last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DesktopFileSystemListOutput>;

// The operation
/**
 * The file tree for the desktop product surface. Reuses all FileSystemViewSet behaviour but is
 * scoped to the "desktop" surface, so its tree is fully isolated from the default "web" tree.
 * Adds per-folder, versioned markdown instructions describing the contents of a folder.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const desktopFileSystemList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DesktopFileSystemListInput,
    outputSchema: DesktopFileSystemListOutput,
  }),
);
