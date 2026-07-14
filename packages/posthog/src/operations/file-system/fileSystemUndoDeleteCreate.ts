import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FileSystemUndoDeleteCreateInput {
  project_id: string;
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
export const FileSystemUndoDeleteCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/file_system/undo_delete/",
    }),
  ) as unknown as Schema.Codec<FileSystemUndoDeleteCreateInput>;

// Output Schema
export type FileSystemUndoDeleteCreateOutput = void;
export const FileSystemUndoDeleteCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FileSystemUndoDeleteCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemUndoDeleteCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSystemUndoDeleteCreateInput,
  outputSchema: FileSystemUndoDeleteCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
