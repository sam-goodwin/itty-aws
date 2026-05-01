import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FileSystemCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
  depth: Schema.optional(Schema.NullOr(Schema.Number)),
  type: Schema.optional(Schema.String),
  ref: Schema.optional(Schema.NullOr(Schema.String)),
  href: Schema.optional(Schema.NullOr(Schema.String)),
  meta: Schema.optional(Schema.NullOr(Schema.Unknown)),
  shortcut: Schema.optional(Schema.NullOr(Schema.Boolean)),
  created_at: Schema.optional(Schema.String),
  last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/file_system/" }),
);
export type FileSystemCreateInput = typeof FileSystemCreateInput.Type;

// Output Schema
export const FileSystemCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    depth: Schema.optional(Schema.NullOr(Schema.Number)),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    meta: Schema.optional(Schema.NullOr(Schema.Unknown)),
    shortcut: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.String),
    last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
  },
);
export type FileSystemCreateOutput = typeof FileSystemCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSystemCreateInput,
  outputSchema: FileSystemCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
