import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FileSystemLogViewCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    path: Schema.String,
    depth: Schema.NullOr(Schema.Number),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    meta: Schema.optional(Schema.NullOr(Schema.Unknown)),
    shortcut: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.String,
    last_viewed_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/file_system/log_view/",
    }),
  );
export type FileSystemLogViewCreateInput =
  typeof FileSystemLogViewCreateInput.Type;

// Output Schema
export const FileSystemLogViewCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileSystemLogViewCreateOutput =
  typeof FileSystemLogViewCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemLogViewCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileSystemLogViewCreateInput,
    outputSchema: FileSystemLogViewCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
