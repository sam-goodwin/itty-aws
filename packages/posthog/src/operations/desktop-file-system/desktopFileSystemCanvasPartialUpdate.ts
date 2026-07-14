import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DesktopFileSystemCanvasPartialUpdateInput {
  id: string;
  project_id: string;
  code?: string;
  prompt?: string;
  name?: string;
}
export const DesktopFileSystemCanvasPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    code: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/desktop_file_system/{id}/canvas/",
    }),
  ) as unknown as Schema.Codec<DesktopFileSystemCanvasPartialUpdateInput>;

// Output Schema
export interface DesktopFileSystemCanvasPartialUpdateOutput {
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
}
export const DesktopFileSystemCanvasPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DesktopFileSystemCanvasPartialUpdateOutput>;

// The operation
/**
 * Publish a new version of a freeform canvas's React source.
 * Merges into the dashboard row's `meta` (never replaces it), so existing
 * keys like `channelId`/`templateId` survive. Appends a full-file version
 * snapshot and points `currentVersionId` at it — the server-side mirror of
 * the app's dashboardsService.saveFreeform.
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const desktopFileSystemCanvasPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DesktopFileSystemCanvasPartialUpdateInput,
    outputSchema: DesktopFileSystemCanvasPartialUpdateOutput,
  }));
