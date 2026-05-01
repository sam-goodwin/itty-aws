import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FileSystemShortcutUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/file_system_shortcut/{id}/",
    }),
  );
export type FileSystemShortcutUpdateInput =
  typeof FileSystemShortcutUpdateInput.Type;

// Output Schema
export const FileSystemShortcutUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
  });
export type FileSystemShortcutUpdateOutput =
  typeof FileSystemShortcutUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this file system shortcut.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemShortcutUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileSystemShortcutUpdateInput,
    outputSchema: FileSystemShortcutUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
