import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FileSystemListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/file_system/" }),
);
export type FileSystemListInput = typeof FileSystemListInput.Type;

// Output Schema
export const FileSystemListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
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
    }),
  ),
});
export type FileSystemListOutput = typeof FileSystemListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const fileSystemList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSystemListInput,
  outputSchema: FileSystemListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
