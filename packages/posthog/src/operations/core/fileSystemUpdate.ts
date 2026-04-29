import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FileSystemUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
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
    method: "PUT",
    path: "/api/projects/{project_id}/file_system/{id}/",
  }),
);
export type FileSystemUpdateInput = typeof FileSystemUpdateInput.Type;

// Output Schema
export const FileSystemUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type FileSystemUpdateOutput = typeof FileSystemUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSystemUpdateInput,
  outputSchema: FileSystemUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
