import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const FileSystemDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/file_system/{id}/",
  }),
);
export type FileSystemDestroyInput = typeof FileSystemDestroyInput.Type;

// Output Schema
export const FileSystemDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileSystemDestroyOutput = typeof FileSystemDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this file system.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FileSystemDestroyInput,
  outputSchema: FileSystemDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
