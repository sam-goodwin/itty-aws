import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FileSystemShortcutListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
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
  ) as unknown as Schema.Codec<FileSystemShortcutListInput>;

// Output Schema
export interface FileSystemShortcutListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    path?: string;
    type?: string;
    ref?: string | null;
    href?: string | null;
    order?: number;
    created_at?: string;
  }[];
}
export const FileSystemShortcutListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          ref: Schema.optional(Schema.NullOr(Schema.String)),
          href: Schema.optional(Schema.NullOr(Schema.String)),
          order: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<FileSystemShortcutListOutput>;

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
