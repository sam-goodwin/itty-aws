import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const FileSystemShortcutListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_system_shortcut/",
    }),
  );
export type FileSystemShortcutListInput =
  typeof FileSystemShortcutListInput.Type;

// Output Schema
export const FileSystemShortcutListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        path: Schema.String,
        type: Schema.optional(Schema.String),
        ref: Schema.optional(Schema.NullOr(Schema.String)),
        href: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
      }),
    ),
  });
export type FileSystemShortcutListOutput =
  typeof FileSystemShortcutListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemShortcutList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileSystemShortcutListInput,
    outputSchema: FileSystemShortcutListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
