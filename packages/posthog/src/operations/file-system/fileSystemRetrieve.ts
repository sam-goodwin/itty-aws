import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FileSystemRetrieveInput {
  id: string;
  project_id: string;
}
export const FileSystemRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/file_system/{id}/",
    }),
  ) as unknown as Schema.Codec<FileSystemRetrieveInput>;

// Output Schema
export interface FileSystemRetrieveOutput {
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
export const FileSystemRetrieveOutput =
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
  }) as unknown as Schema.Codec<FileSystemRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSystemRetrieveInput,
  outputSchema: FileSystemRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
