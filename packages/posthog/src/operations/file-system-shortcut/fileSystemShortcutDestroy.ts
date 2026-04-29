import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FileSystemShortcutDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/file_system_shortcut/{id}/",
    }),
  );
export type FileSystemShortcutDestroyInput =
  typeof FileSystemShortcutDestroyInput.Type;

// Output Schema
export const FileSystemShortcutDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FileSystemShortcutDestroyOutput =
  typeof FileSystemShortcutDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this file system shortcut.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fileSystemShortcutDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FileSystemShortcutDestroyInput,
    outputSchema: FileSystemShortcutDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
