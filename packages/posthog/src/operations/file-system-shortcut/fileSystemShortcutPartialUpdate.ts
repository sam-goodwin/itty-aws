import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FileSystemShortcutPartialUpdateInput {
  id: string;
  project_id: string;
  path?: string;
  type?: string;
  ref?: string | null;
  href?: string | null;
  order?: number;
  created_at?: string;
}
export const FileSystemShortcutPartialUpdateInput =
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
      path: "/api/projects/{project_id}/file_system_shortcut/{id}/",
    }),
  ) as unknown as Schema.Codec<FileSystemShortcutPartialUpdateInput>;

// Output Schema
export interface FileSystemShortcutPartialUpdateOutput {
  id?: string;
  path?: string;
  type?: string;
  ref?: string | null;
  href?: string | null;
  order?: number;
  created_at?: string;
}
export const FileSystemShortcutPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    order: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FileSystemShortcutPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this file system shortcut.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemShortcutPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FileSystemShortcutPartialUpdateInput,
    outputSchema: FileSystemShortcutPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
