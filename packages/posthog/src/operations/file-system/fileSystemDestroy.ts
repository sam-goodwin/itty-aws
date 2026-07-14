import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FileSystemDestroyInput {
  id: string;
  project_id: string;
}
export const FileSystemDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/file_system/{id}/",
  }),
) as unknown as Schema.Codec<FileSystemDestroyInput>;

// Output Schema
export type FileSystemDestroyOutput = void;
export const FileSystemDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FileSystemDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSystemDestroyInput,
  outputSchema: FileSystemDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
